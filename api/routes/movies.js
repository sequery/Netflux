const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verify_token")

// CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You Are Not Allowed");
    }
});


// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findOneAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            });
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You Are Not Allowed");
    }
});


// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findOneAndDelete(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("The Movie Has Been Successfully Deleted !");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You Are Not Allowed");
    }
});


// GET
router.get("/find/:id", verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([{
                $match: {
                    isSeries: true
                }
            }, {
                $sample: {
                    size: 1
                }
            }]);
        } else {
            movie = await Movie.aggregate([{
                $match: {
                    isSeries: false
                }
            }, {
                $sample: {
                    size: 1
                }
            }]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET ALL
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const movies = query ? await Movie.find().sort({
                _id: -1
            }).limit(10) : await Movie.find();
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You Are Not Allowed");
    }
});


module.exports = router;