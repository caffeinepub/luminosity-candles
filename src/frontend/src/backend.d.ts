import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CandleProduct {
    id: bigint;
    collectionId: bigint;
    name: string;
    description: string;
    image: string;
    priceCents: bigint;
}
export interface CandleCollection {
    id: bigint;
    icon: string;
    name: string;
    color: string;
    description: string;
}
export interface backendInterface {
    getAllCollections(): Promise<Array<CandleCollection>>;
    getProductById(productId: bigint): Promise<CandleProduct>;
    getProductsByCollectionId(collectionId: bigint): Promise<Array<CandleProduct>>;
}
