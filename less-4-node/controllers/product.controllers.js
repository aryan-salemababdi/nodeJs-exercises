const ProductModel = require("../model/product.model")

const get = async (req,res) => {

    try {

        const product = await ProductModel.find();

        res.writeHead(200,{"Content-Type" : "application/json"});

        res.write(JSON.stringify(product));

        res.end();
        
    } catch (error) {
        


    }

}
const create = async (req,res) => {

    try {

         await ProductModel.create({
            id:Date.now(),
            name: "iphone 13 pro max",
            desciption : " apple mobile ",
            price : 1000
        });

        res.writeHead(201,{"Content-Type" : "application/json"});

        res.write(JSON.stringify({
            message : "product create successfuly"
        }));

        res.end();
        
    } catch (error) {
        


    }

}

const getById = async (req,res) => {

    try {

        const [,,,id] = req.url.split("/");

        const product = await ProductModel.findById(id);

        if(!product){


            
        res.writeHead(404,{"Content-Type" : "application/json"});

        res.write(JSON.stringify({
            message: "route not found any product"
        }));

        res.end();


        }
        else{

            res.writeHead(200,{"Content-Type" : "application/json"});

            res.write(JSON.stringify(product));
    
            res.end();

        }


        
    } catch (error) {
        
            console.log(error);

    }

}

const ProductController = {

    get,
    getById,
    create

}

module.exports = ProductController;