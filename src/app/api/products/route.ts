import { fetchProducts } from "@/app/services/server/products";

export interface Product {
    _id: string;
    title: string;
    price: number;
    inv: {
      [key: string]: number;
    };
    image: string;
    description: string;
  }


  export async function GET(): Promise<Response> {
    try {
        const products : Product[] = await fetchProducts();
        return new Response(JSON.stringify(products),{
            status:200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error:unknown) {
        console.error("Error in GET /api/products:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products from server' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        
    }
    
  }
