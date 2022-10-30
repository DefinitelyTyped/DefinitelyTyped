// Type definitions for cheesy-api-types 0.1
// Project: https://github.com/no1621name/cheesy-api
// Definitions by: no1621name <https://github.com/no1621name>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.6

type StatusCodes = 100 | 200 | 201 | 400 | 401 | 403 | 404 | 429 | 500;

interface Pagination {
    total: number;
    next: number;
    current: number;
    prev: number;
    limit: number;
}

interface ServerResponseI<K extends string, T> {
    statusCode: StatusCodes;
    data: Record<K, T> & Record<'pagination', Pagination>;
    message?: string;
}

interface Brand {
    _id: number;
    name: string;
    logo: string;
}

interface Coupon {
    _id: number;
    discountValue: number;
    expires: string;
    code: string;
}

interface City {
    _id: number;
    district: string;
    name: string;
    subject_id: number;
}

interface Subject {
    _id: number;
    name: string;
}

interface Category {
    _id: number;
    name: string;
    children_ids: number[]; // Category
}

interface Review {
    _id: number;
    date: Date;
    // RewiewRequest
    fullname: string;
    user_id: number;
    score: number;
    text: string;
    images: string[];
    city: string;
    product_id?: number;
    // RewiewRequest
}

interface Delivery {
    _id: number;
    name: string;
    logo: string;
    priceList: Array<{
        description: string;
        value: number;
        subjects_ids: number[];
    }>;
}

interface PaymentType {
    _id: number;
    name: string;
}

interface RecipeCategory {
    _id: number;
    name: string;
    preview: string;
}

interface Article {
    _id: number;
    title: string;
    description: string;
    preview: string;
    content: string;
    category_id: number; // RecipeCategory
    date: Date;
    productLists: Array<{
        title: string;
        products: Array<{
            name: string;
            category_id: number;
        }>;
    }>;
    images: string[][];
    accordions: string[];
    numberedLists: string[][];
}

type ShortArticle = Pick<Article, '_id' | 'title' | 'description' | 'preview'>;

interface RecipeCategory {
    _id: number;
    name: string;
    preview: string;
}

interface ProductParameters {
    name: string;
    value: string;
}

interface GeneralProduct {
    // ShortProduct
    _id: number;
    name: string;
    images: string[];
    price: number;
    discount: number;
    isInStock: boolean;
    rating: number;
    vendor: string;
    quantityInStock: number;
    views: number;
    // ShortProduct
    bonuses: number;
    parameters: ProductParameters[];
}

type ShortProduct = Omit<GeneralProduct, 'bonuses' | 'reviews_ids' | 'parameters'>;

type WithAmount<T> = T & { amount: number };

interface GoodsSet extends GeneralProduct {
    type: 'set';
    shortDescription: string;
    goods_ids: number[];
}

interface Goods extends GeneralProduct {
    type: 'goods';
    categories: number[]; // Category
    description: string;
    brand_id: number; // Brand
}

type Product = Goods | GoodsSet;

interface Address {
    city_id: number; // City
    city: string; // City.name
    postcode: number;
    subject_id: number; // Subject
    subject: string; // Subject.name
    apartment: string;
}

interface User {
    _id: number;
    fullname: string;
    email: string;
    phoneNumber: string;
    password: string;
    cart: ShortProduct[];
    favourites: number[]; // ShortProduct[]
    viewed: number[]; // ShortProduct[]
    viewedCategories: number[];
    coupons: number[]; // Coupon[]
    address: Address;
    role: 'user' | 'admin';
}

interface Order {
    _id: number;
    // OrderRequset
    user_id: number;
    products: Array<WithAmount<ShortProduct>>;
    total: number;
    delivery_id: number; // Delivery
    deliveryOption_index: number; // Delivery.priceList[number]
    paymentType_id: number; // PaymentType
    coupon_id: number; // Coupon
    // OrderRequset
}

type OrderRequet = Omit<Order, '_id'>;

type ReviewRequest = Omit<Review, 'date' | '_id'> & { product_id: number };
