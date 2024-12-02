import mongoose, { Document, Schema } from "mongoose";
export interface IProduct extends Document {
  name: string;
  price: number;
  stock: number;
}
const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
