
const products = require("../data/product.json");

const find = async () => {

    return new Promise((resolve,reject)=>{
        resolve(products);
    })

};


const findById = async (id) => {

    return new Promise((resolve,reject)=>{
        resolve(products.find(product => product.id == id ));
    })

};

const create = async (product) => {

    return new Promise((resolve,reject)=>{
        products.push(product);
        resolve();
    })

};

const ProductModel = {
    find,
    findById,
    create
};

module.exports = ProductModel;