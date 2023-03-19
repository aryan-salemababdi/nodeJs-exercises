
const product = require("../data/product.json");

const find = async () => {

    return new Promise((resolve,reject)=>{
        resolve(product);
    })

};

const ProductModel = {
    find
};

module.exports = ProductModel;