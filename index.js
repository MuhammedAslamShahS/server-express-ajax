const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

const userData = [
    { id: 1, name: "Aslam", company: "Devdopz" },
    { id: 2, name: "Rahul", company: "Keyoftrios" },
    { id: 3, name: "Fatima", company: "Landmark Group" },
    { id: 4, name: "Zara", company: "TechnoTree" },
];

app.post("/user", (req, res) => {
    const query = parseInt(req.query.id);
    const userName = (req.query.name);
    const filteredUserData = userData.filter((data) => {
        if (query || userName) {
            return data.id === query || data.name === userName;
        }else{
            return data;
        }
    });

    res.json(filteredUserData);
});


app.post("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userName = req.params.name;
    const filteredUserData = userData.filter((data) => data.id === userId);
    res.json(filteredUserData);
});

app.get("*", (req, res) => {
    res.status(501);
    res.json("No Route Available");
});

app.listen(PORT, () => {
    console.log(`running on port...${PORT}`);
});
