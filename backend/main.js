const express = require("express");
const cors = require("cors");
const db = require("./modules/database");


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("this is the server");
})


// app.get('/message', (req,res)=>{
//     res.json({message: "Hello from server!!!!!!"});
// });


// Home page will contain the main page where all the info will be shown
app.get('/home', (request, response)=>{
    // res.json("this is the home page");
    const q = "SELECT * FROM movie";

    db.query(q, (err,data)=>{
        if(err){
            return response.json(err);
        }
        else{
            return response.json(data);
        }
    })
});

// this page will be to add new movies from the server

app.get('/add');


// to search movies based on keywords defined by user
app.get('/search');



app.listen(8000, ()=>{
    console.log("Connected!!!!!");
});