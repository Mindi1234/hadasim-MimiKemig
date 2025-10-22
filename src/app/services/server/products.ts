import { Db, Collection } from "mongodb";
import {client} from './mongo';


export interface Product {
    _id: string;
    title: string;
    price: number;
    inv: Record<string, number>;
    image: string;
    description: string;
}
export async function fetchProducts(): Promise<Product[]> {
    const db :  Db = client.db("store");
    const collection : Collection<Product> = db.collection<Product>("products");

    const products = await collection.find({}).toArray();
    return products;
}