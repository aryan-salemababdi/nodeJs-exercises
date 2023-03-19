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

const ProductController = {

    get

}

module.exports = ProductController;