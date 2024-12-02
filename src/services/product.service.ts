import { ProductRepository } from "../repositories/product.repository";
import { IProduct } from "../models/product.model";

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAllProducts(): Promise<IProduct[]> {
    return this.productRepository.getAll();
  }

  async getProductById(id: string): Promise<IProduct | null> {
    return this.productRepository.getById(id);
  }

  async createProduct(data: Partial<IProduct>): Promise<IProduct> {
    return this.productRepository.create(data);
  }

  async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: string): Promise<IProduct | null> {
    return this.productRepository.delete(id);
  }
}
