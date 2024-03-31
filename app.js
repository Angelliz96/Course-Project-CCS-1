const express = require("express");

const app = express();
const PORT = 3000;

//Middleware

const morgan = require("morgan")

//GET routes 

app.get("/", (request, response, next) =>{
    //send a message
    response.send("This route points to the Home page")
});
app.get("/about", (request, response, next) =>{
    //send a message
    response.send("This route points to the About page")
});
app.get("/login", (request, response, next) =>{
    //send a message
    response.send("This route points to the Login page")
});
app.get("/admin", (request, response, next) =>{
    //send a message
    response.send("This route points to the Admin page")
});
app.get("/admin/create-book", (request, response, next) =>{
    //send a message
    response.send("This route points to the Admin Create book page")
});


//server

app.listen(PORT,() =>{
    //SEND A MESSAGE
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);

})
