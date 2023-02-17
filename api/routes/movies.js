const router = require("express").Router()
const Movie = require("../models/Movie")
const verify = require("../verifyToken")

//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)

        try {
            const savedMovie = await newMovie.save()
            res.status(201).json(savedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not an admin!")
    }
})

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            )
            res.status(200).json(updatedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not an admin!")
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("Movie has been deleted...")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not an admin!")
    }
})

//GET
router.get("/:id", verify, async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json("Movie has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;