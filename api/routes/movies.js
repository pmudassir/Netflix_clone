const router = require("express").Router()
const Movie = require("../models/Movie")
const verify = require("../verifyToken")

//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)

        try {
            const savedMovie = await newMovie.save()
            return res.status(201).json(savedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You are not an admin!")
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
            return res.status(200).json(updatedMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You are not an admin!")
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            return res.status(200).json("Movie has been deleted...")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You are not an admin!")
    }
})

//GET
router.get("/find/:id", verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})

//RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }    //gets all series and returns a random one
            ])
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ])
        }
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find()
            return res.status(200).json(movies.reverse())
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You are not an admin!")
    }
})

module.exports = router;