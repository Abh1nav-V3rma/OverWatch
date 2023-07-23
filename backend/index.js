const express = require("express");
const app = express();
const cors = require('cors');
const movieRoutes =  require("./routes/moviesRoutes");
const pool = require("./config/database");

app.use(express.json());
app.use(cors());

// Use movie routes

app.use((req, res, next) => {
    req.pool = pool;
    next();
});


app.use('/api', movieRoutes(pool));

app.listen(5000, () => {
    console.log('Server Running at port 5000');
});
