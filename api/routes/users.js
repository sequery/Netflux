const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verify_token")

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true
            });
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You Can Only Update Your Own User");
    }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("The User Is Deleted Successfully.")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You Can Only Delete Your Own User");
    }
});

// GET
router.get("/find/:id", async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const user = await User.findById({
                id: req.params.id
            })

            const {
                password,
                ...info
            } = user._doc;

            res.status(200).json(info)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You Can Only See Your Own User");
    }
});


// GET ALL
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({
                _id: -1
            }).limit(10) : await User.find();
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You Are Not Allowed To See All Users");
    }
});

// GET USER STATS 
router.get("/stats", async (req, res) => {
    const today = new Date()

    try {
        const data = await User.aggregate({
            $project: {
                month: {
                    $month: "$createdAt"
                }
            },
            $group: {
                _id: "$month",
                total: {
                    $sum: 1
                }
            },
        });
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;