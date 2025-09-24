// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name: string;
    description: string;
    price: number;
    images?: {
      url: string;
      imgix_url: string;
    }[];
    category: {
      key: string;
      value: string;
    };
    in_stock: boolean;
    stock_quantity?: number;
    brand?: string;
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    products?: Product[];
    active: boolean;
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    product: Product | string;
    verified_purchase: boolean;
    review_date?: string;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

// Category types
export type ProductCategory = 'surfboards' | 'wetsuits' | 'accessories' | 'apparel';

// Rating helper
export function getRatingNumber(rating: { key: string; value: string }): number {
  return parseInt(rating.key, 10);
}