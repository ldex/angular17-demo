export interface Product {
    id: number;
    name: string;
    description: string;
    discontinued: boolean;
    fixedPrice: boolean;
    price: number;
    modifiedDate: Date;
    imageUrl: string;
}