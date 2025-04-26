const express = require("express");
const router = express.Router();

const userData = [
    { id: 1, name: "Aslam", company: "Devdopz" },
    { id: 2, name: "Rahul", company: "Keyoftrios" },
    { id: 3, name: "Fatima", company: "Landmark Group" },
    { id: 4, name: "Zara", company: "TechnoTree" },
];

router.get("/", (req, res) => {
    const query = parseInt(req.query.id);
    const userName = req.query.name;
    const filteredUserData = userData.filter((data) => {
        if (query || userName) {
            return data.id === query || data.name === userName;
        } else {
            return data;
        }
    });

    res.json(filteredUserData);
});

router.post("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userName = req.params.name;
    const filteredUserData = userData.filter((data) => data.id === userId);
    res.json(filteredUserData);
});

module.exports = router;
