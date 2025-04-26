const express = require("express");

const router = express.Router();

const userArray = ["Working"];

router.post("/addUser", (req, res) => {
    const { name } = req.body;

    userArray.push(name);

    res.json("Data has beeb added successfully");
});

router.get("/displayUser", (req, res) => {
    res.json(userArray);
});

module.exports = router;
