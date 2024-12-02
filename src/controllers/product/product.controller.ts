import { Request, Response } from "express";
import { ProductService } from "../../services/product.service";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAllProducts();
    res.json(products);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const product = await this.productService.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(product);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const newProduct = await this.productService.createProduct(req.body);
    res.status(201).json(newProduct);
  }

  async update(req: Request, res: Response): Promise<void> {
    const updatedProduct = await this.productService.updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
  }

  async delete(req: Request, res: Response): Promise<void> {
    await this.productService.deleteProduct(req.params.id);
    res.status(204).send();
  }
}
