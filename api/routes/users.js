const router = require("express").Router()
const User = require("../models/User")
const CryptoJs = require("crypto-js")
const verify = require("../verifyToken")

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            )   //updates and return the new user info
            return res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You can only update your account!")
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json("User has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You can only delete your account!")
    }
})

//GET
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...info } = user._doc
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL
router.get("/", verify, async (req, res) => {
    const query = req.query.new
    if (req.user && req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: - 1 }).limit(5) : await User.find()
            return res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You aren't allowed to see all users!")
    }
})

//USER STATS
router.get("/stats", async (req, res) => {
    const today = new Date()
    const lastYear = today.setFullYear(today.getFullYear() - 1)

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;