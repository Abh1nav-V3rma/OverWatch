const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Abhi@xx50i",
    database:"Movies"
});


connection.connect(function(err){
    if(err)
        throw(err);
    
    console.log("database connection succes");
});

module.exports = connection


// this module helps to create the connection to mysql database
// db used is Movies on localhost port 3306
