const mysql = require('mysql2');

var connectionDetails = {
    host:"localhost",
    database:"node_demo",
    user:"root",
    password:"manager",
    port:"3306"
}

var connection = mysql.createConnection(connectionDetails);
connection.connect();

var queryText = `select * from products`;

connection.query(queryText,(err,result)=>{
    if(err==null){
        console.log("Success");
        console.log(JSON.stringify(result));
        result.write(JSON.stringify(result))
    } else {
        console.log("something wrong!")
        console.log(err);
    }
})

connection.end();