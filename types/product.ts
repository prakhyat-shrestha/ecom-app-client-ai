// types/product.ts
export type ProductStatus = "new" | "hot" | "sale";

export type ProductVariant =
  | "tshirt"
  | "jacket"
  | "pants"
  | "hoodie"
  | "short"
  | "others";

export interface Category {
  _id: string;
  title: string;
}

export interface ProductImage {
  _key: string;
  url: string; // just a plain image URL/path for the demo
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  images: ProductImage[];
  intro?: string;
  description?: string;
  price: number;
  discount?: number;
  categories?: Category[];
  stock?: number;
  status?: ProductStatus;
  variant?: ProductVariant;
}