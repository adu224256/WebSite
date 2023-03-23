const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/member", require("./routes/api/member"));

const staticHome = path.join(__dirname, 'public');
app.use(express.static(staticHome));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});