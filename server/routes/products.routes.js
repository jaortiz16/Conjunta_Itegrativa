import { Router } from "express";
import {PrismaClient} from '@prisma/client';
const router = Router();
const prisma = new PrismaClient();
router.get("/search", async (req, res) => {
    const { name, orderBy, orderDirection } = req.query;
    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: name || '', 
                }
            },
            orderBy: {
                [orderBy || 'id']: orderDirection || 'asc' 
            }
        });
        res.json(products);
    } catch (error) {
        console.error("Error searching products:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get("/", async (req, res) => {
  const product = await prisma.product.findMany()
  return res.json(product);
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!product) {
        return res.status(404).json({ error: 'No se encontro' });
    }
    return res.json(product);
});
router.post("/", async (req, res) => {
    const newproduct = await prisma.product.create({
        data: req.body
    })
    return res.json(newproduct);
});
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const existingProduct = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if (!existingProduct) {
        return res.status(404).json({ error: 'No se encontró el producto' });
    }

    const updatedProduct = await prisma.product.update({
        where: {
            id: parseInt(id)
        },
        data: req.body
    });

    return res.json(updatedProduct);
});
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.delete({
        where: {
            id: parseInt(id)
        }
    })
    if (!product) {
        return res.status(404).json({ error: 'No se encontro' });
    }
    return res.json(product);
});

  
export default router;