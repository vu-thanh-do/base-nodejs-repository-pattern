import { Repository } from "./repository";
import { Product, IProduct } from "../models/product.model";

export class ProductRepository extends Repository<IProduct> {
  constructor() {
    super(Product);
  }

  async findByName(name: string): Promise<IProduct | null> {
    return Product.findOne({ name }).exec();
  }
}
