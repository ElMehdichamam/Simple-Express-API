const z = require('zod');

const basicSchema = z.object({
    name:z.string().min(1),
    price:z.number().positive().default(250)
});

const idSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/)
});

const creatingProductSchema = basicSchema;
const updateAllProductSchema = basicSchema;
const updateProductSchema = basicSchema.partial();

module.exports = {creatingProductSchema,updateAllProductSchema,updateProductSchema,idSchema};