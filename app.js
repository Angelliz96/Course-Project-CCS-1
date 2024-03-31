const express = require("express");

const app = express();
const PORT = 3000;

//Middleware

const morgan = require("morgan");
const { request } = require("node:http");


//path module

const path = require("node:path");

//CORS

const cors = require("cors")

//j.son

app.use(express.json());
//encode forms 

app.use(express.urlencoded({ extended: true }));


//use the public directory
app.use(express.static(path.join(__dirname,"public")));

//use cors
app.use(cors);

//GET routes 

app.get("/", (request, response, next) =>{
    //send a message
    response.send("This route points to the Home page")
    response.status(200).json({success:{message: "Home route is successful"}})

});
app.get("/about", (request, response, next) =>{
    //send a message
    // response.send("This route points to the About page")
    response.status(200).json({success:{message: "About route is successful"}})
});
app.get("/login", (request, response, next) =>{
    //send a message
    // response.send("This route points to the Login page")
    response.status(200).json({success:{message: "Login route is successful"}})
});
app.get("/admin", (request, response, next) =>{
    //send a message
    // response.send("This route points to the Admin page")
    response.status(200).json({success:{message: "Admin route is successful"}})
});
app.get("/admin/create-book", (request, response, next) =>{
    //send a message
    // response.send("This route points to the Admin Create book page")
    response.status(200).json({success:{message: "Admin create book route is successful"}})
});


//NEW ROUTES
app.get("/api/books",(request, response,next) =>{
    // response.send("This route points to the Api page")
    response.status(200).json({success:{message: "send all of the book data"}})    
});

app.get("/api/books/:id",(request, response,next) =>{
    response.status(200).json({success:{message: "end all of the books details data, or each book by their ID"}})
    
});
app.get("/api/books/create/new",(request, response,next) =>{
    response.status(200).json({success:{message: "send all of the data that will have the ability to create new books"}})
    
});
app.get("/api/books/edit/:id",(request, response,next) =>{
    
    response.status(200).json({success:{message: "send all of the update comic book form page data to modify a book by their ID"}})
});
app.get("/api/books/delete/:id",(request, response,next) =>{
    response.status(200).json({success:{message: "send all of the data that will have the ability to delete a book by their ID"}})
    
});
//server

app.listen(PORT,() =>{
    //SEND A MESSAGE
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);

})
