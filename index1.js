const http = require('http');
const helper = http.createServer((req,res)=>{
     if(req.url=="/employees"){

        var result =[
            {
                "name":"somesh",
                "email":"somesh@gmail.com"
            },
            {
                "name":"somesh2",
                "email":"somesh2@gmail.com"
            }
        ]
        // console.log("Correct api");
        // res.write("Some employees details");
        // res.end();

        res.setHeader("Content-Type","application/json");
        response.write(JSON.stringify(result));
        res.end();

     } else {
        res.write("something else");
        res.end();
     }
})

helper.listen(9999,()=>{
    console.log("Server started")
})