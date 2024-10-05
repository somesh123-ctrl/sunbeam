const express = require('express');
const mysql = require('mysql2');

var app = express();
app.use(express.json());
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET,POST");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

var connectionDetails = {
    host:"localhost",
    database:"node_demo",
    user:"root",
    password:"manager",
    port:"3306"
}
app.get("/get_products",(request,response)=>{
   
    var connection = mysql.createConnection(connectionDetails);
    connection.connect();

    var queryText = `select * from products`;

    connection.query(queryText,(error,result)=>{
        response.setHeader("Content-Type", "application/json");

         if(error == null){
            // console.log(JSON.stringify(result))
            response.write(JSON.stringify(result));

         } else {
            response.write(JSON.stringify(error))
         }
         response.end();
    })
    connection.end();
})

app.post("/add_products",(request,response)=>{
   
    var connection = mysql.createConnection(connectionDetails);
    connection.connect();
    console.log(request.body)
    var queryText = `insert into products values(${request.body.id}, '${request.body.title}', 
    ${request.body.price},'${request.body.description}','${request.body.category}',
    '${request.body.image}','${request.body.rating.rate}',${request.body.rating.count})`;

    connection.query(queryText,(error,result)=>{
        response.setHeader("Content-Type", "application/json");

         if(error == null){
            console.log(JSON.stringify(result))
            response.write(JSON.stringify(result));

         } else {
            response.write(JSON.stringify(error))
         }
         response.end();
    })
    connection.end();
})

app.listen(9999,()=>{
    console.log("Server started")
})

