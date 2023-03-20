const http = require("http");
const ErrorHandler = require("./controllers/errorHandler.controller");
const ProductController = require("./controllers/product.controllers");

const products = require("./data/product.json");

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log(req.method)

    if (req.url == "/api/products" && req.method === "GET") {


        ProductController.get(req, res);
    }
    else if ((req.url === "/api/products") && req.method === "POST") {

        ProductController.create(req,res);

    }
    else if ((req.url.match(/\/api\/products\/[0-9]+/)) && req.method === "GET") {

        ProductController.getById(req,res)

    }
    else {

        ErrorHandler.notFound(res);

    }

});

server.listen(PORT);

console.log(`run server on port ${PORT}, http://localhost:${PORT}`);