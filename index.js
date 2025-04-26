const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./router/staticData"));
app.use("/", require("./router/Dynamic"));

const PORT = process.env.PORT || 3001;

app.get("*", (req, res) => {
    res.json("No Route Available");
});

app.listen(PORT);
