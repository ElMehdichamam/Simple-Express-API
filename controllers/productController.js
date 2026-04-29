const Product = require('../models/product');
// get all product
const getAllProduct = async (req,res)=>{
    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
};
// get specific one
const getSpecificProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await Product.findById(id)
        if(!result){
            return res.status(404).json({message : "Product Not Found"});
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
};
// create one 
const createProduct = async (req,res)=>{
    try {
        const {name,price} = req.body;
        const newProduct = await Product.create({name,price});
        res.status(201).json({message:"New Product Added",newProduct});
    } catch (error) {
        res.status(400).json({
            message:"Something Went Wrong!",
            error:error.message
        });
    }
};
// update product all field
const replaceProduct = async (req,res)=>{
    const {id} = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({
        message:"Product Updated",
        updatedProduct
    });
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
// Update Product Partial
const updateProduct = async (req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(
            id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if(!product){
            return res.status(404).json({message:"Not Found"})
        }
        res.status(200).json({
            message:"Product Updated",
            Product:product
        });
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
// delete product
const deletedProduct= async (req,res)=>{
    try {
        const {id} = req.params;
        
        const deleteProduct = await Product.findByIdAndDelete(id);

        if(!deleteProduct){
            return res.status(404).json({message:"Not Found"})
        }

        res.status(200).json({
            message:"Product Has Been Deleted",
            Product:deleteProduct
        });
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};
module.exports ={getAllProduct,getSpecificProduct,createProduct,updateProduct,deletedProduct,replaceProduct};
