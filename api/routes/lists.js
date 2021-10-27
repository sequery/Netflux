const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verify_token")

// CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);

        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
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
            await List.findOneAndDelete(req.params.id);
            res.status(200).json("List Has Been Deleted Successfully !");
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
            const updatedList = await List.findOneAndupdate(req.params.id, {
                $set: req.body
            }, {
                new: true
            });
            res.status(200).json(updatedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You Are Not Allowed");
    }
});


// GET
router.get("/find/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const list = await List.findById(req.params.id);
            res.status(200).json(list);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You Are Not Allowed");
    }
});



// GET ALL
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([{
                        $simple: {
                            size: 10
                        }
                    },
                    {
                        $match: {
                            type: typeQuery,
                            genre: genreQuery
                        }
                    }
                ])
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;