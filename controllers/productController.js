const products = require('../data/fakeDb');
// get all product
const getAllProduct = (req,res)=>{
    return res.json(products)
};
// get specific one
const getSpecificProduct = (req,res)=>{
    const {id} = req.params;
    const result = products.find(p => p.id === Number(id));
    if(!result){
        return res.status(404).send("Products Not Found");
    }
   return res.status(200).json(result);
};
// create one 
const createProduct =(req,res)=>{
    const {price,name} = req.body;
    if(!price || !name){
        return res.status(400).send("Missing Fields");
    }
    const newProduct = {
        id:Date.now(),
        name,
        price
    }
    products.push(newProduct)
    return res.status(201).json(newProduct)

};
// update product
const updateProduct =(req,res)=>{
    const {id} = req.params;
    const {name,price} = req.body;
    const product = products.find( p => p.id === Number(id))
    if(!product){
        return res.status(404).send("Product Not Found");
    }
    if(name) product.name=name;
    if(price) product.price=price;
    return res.status(200).json({message:"Product Updated",product})
}
// delete product
const deleteProduct=(req,res)=>{
    const {id} = req.params;
    const deleted = products.findIndex( p => p.id === Number(id));
    if(deleted === -1){
        return res.status(404).send("Product Not Found");
    } 
    const deletedProduct=products.splice(deleted,1);
    

    return res.status(200).json({
        message:"Product Has Been Deleted",
        Product:deletedProduct[0]
    })
};
module.exports ={getAllProduct,getSpecificProduct,createProduct,updateProduct,deleteProduct};
