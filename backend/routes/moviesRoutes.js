const express = require("express");
const router = express.Router();
// const pool = require("../config/database");

module.exports = (pool) =>{
    // Get all movies
    router.get ('/movies', (req,res) => {
        pool.getConnection((error, connection) => {
            if (error) {
                console.error(error);
                res.status(500).send('Server Error');
                return;
            }
            console.log("Request made for movies");
            pool.query('SELECT * FROM db2', (error, results) => {
                if(error){
                    console.error(error);
                    res.status(500).send("Server Error");
                } else{
                    res.json(results);
                }
            });
        });
    });

    // Get a particular Movie based on id
    router.get("/movie/:id", (req, res) => {
        const { id } = req.params;
        
        pool.getConnection((error, connection) => {
            if (error) {
              console.error(error);
              res.status(500).send('Server Error');
              return;
            }
            console.log("Request made for movies with id  " + id);
            pool.query('SELECT * FROM db2 Where id = ?', [id], (error, results) => {
                if(error){
                    console.error(error);
                    res.status(500).send('Server Error');
                } else if(results.length === 0 ){
                    res.status(404).send("Movie not found");
                } else{
                    res.json(results[0]);
                }
            });
        });
    });

    // Add a new movie
    router.post("/add", (req,res) => {
        const {title, genre} = req.body;

        pool.getConnection((error, connection) => {
            if (error) {
              console.error(error);
              res.status(500).send('Server Error');
              return;
            }

            pool.query(`
            INSERT INTO db2(title, film_desc, rating, runtime, release_year, director, actors, poster, trailer, watch_links, genres) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [title,genre], (error, results) => {
                if(error){
                    console.error(error);
                    res.status(500).send("Server Erorr");
                } else {
                    res.sendStatus(201);
                }
            });
        });
    });


    router.put("/update" ,(req,res) => {
        const {id , title ,genre} = req.body;

        pool.getConnection((error, connection) => {
            if (error) {
              console.error(error);
              res.status(500).send('Server Error');
              return;
            }
            

            pool.query(`UPDATE db2 SET
                title = ?,
                genre = ?,
                WHERE id = ?
            `, [title, genre, id], (error, results) => {
                if(error){
                    console.error(error);
                    res.status(500).send("Server Error");
                } else {
                    res.sendStatus(200);
                }
            });
        });
    });

    return router;
}