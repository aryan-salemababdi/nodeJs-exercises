const http = require("http");
const ProductController = require("./controllers/product.controllers");

const products = require("./data/product.json");

const PORT = 3000 ;

const server = http.createServer((req,res)=>{

    if(req.url == "/api/products"){

        ProductController.get(req,res);
    }
    else {

        res.writeHead(404,{"Content-Type" : "application/json"});

        res.write(JSON.stringify({
            message: "Route is not found"
        }));

        res.end();
    }

});

server.listen(PORT);

console.log(`run server on port ${PORT}, http://localhost:${PORT}`);