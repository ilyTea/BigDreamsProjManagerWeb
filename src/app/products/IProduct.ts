export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string | Date;
    price: number;
    description: string;
    rating: number;
    imageUrl: string;
}

export interface DoTiming {
    count: number;
    start(index: number): void;
    stop(): void;
}