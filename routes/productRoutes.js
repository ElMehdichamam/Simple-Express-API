const express = require('express');
const router = express.Router();

const {
  getAllProduct,
  getSpecificProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deletedProduct
} = require('../controllers/productController');
const validate = require('../middlware/middlware');
const { 
        creatingProductSchema,
        updateAllProductSchema,
        updateProductSchema,
        idSchema
      }  = require('../middlware/validation');

router.get('/', getAllProduct);
router.get('/:id', validate(idSchema) , getSpecificProduct);
router.post('/',   validate(creatingProductSchema) , createProduct);
router.put('/:id', validate(idSchema)  ,validate(updateAllProductSchema),replaceProduct);
router.patch('/:id',validate(updateProductSchema),updateProduct);
router.delete('/:id', validate(idSchema,'params') ,deletedProduct);

module.exports = router;