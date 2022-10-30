export as namespace 'cheesy-api';

export type StatusCodes = 100 | 200 | 201| 400 | 401 | 403 | 404 | 429 | 500;

export interface Pagination {
    total: number,
    next: number,
    current: number,
    prev: number,
    limit: number,
}

export interface IServerResponse<K extends string, T> {
    statusCode: StatusCodes,
    data: Record<K, T> & Record<'pagination', Pagination>,
    message?: string,
}

export interface Brand {
    _id: number,
    name: string,
    logo: string
}

export interface Coupon{
    _id: number,
    discountValue: number,
    expires: string,
    code: string,
}

export interface City {
    _id: number,
    district: string,
    name: string,
    subject_id: number,
}

export interface Subject {
    _id: number,
    name: string,
}

export interface Category {
    _id: number,
    name: string,
    children_ids: number[] // Category
}

export interface Review {
    _id: number,
    date: Date,
    // RewiewRequest
    fullname: string,
    user_id: number,
    score: number,
    text: string,
    images: string[],
    city: string,
    product_id?: number,
    // RewiewRequest
}

export interface Delivery {
    _id: number,
    name: string,
    logo: string,
    priceList: {
      description: string,
      value: number,
      subjects_ids: number[]
    }[]
}

export interface PaymentType {
    _id: number,
    name: string,
}

export interface RecipeCategory {
    _id: number,
    name: string,
    preview: string,
}

export interface Article {
    _id: number,
    title: string,
    description: string,
    preview: string,
    content: string,
    category_id: number, // RecipeCategory
    date: Date,
    productLists: {
      title: string,
      products: {
        name: string,
        category_id: number
      }[]
    }[],
    images: string[][],
    accordions: string[],
    numberedLists: string[][],
}

export type ShortArticle = Pick<Article, '_id' | 'title' | 'description' | 'preview'>

export interface RecipeCategory {
    _id: number,
    name: string,
    preview: string,
}

export interface ProductParameters {
    name: string,
    value: string,
}

export interface GeneralProduct {
    // ShortProduct
    _id: number,
    name: string,
    images: string[],
    price: number,
    discount: number,
    isInStock: boolean,
    rating: number,
    vendor: string,
    quantityInStock: number,
    views: number,
    // ShortProduct
    bonuses: number,
    parameters: ProductParameters[],
}

export type ShortProduct = Omit<GeneralProduct, 'bonuses' | 'reviews_ids' | 'parameters'>

export type WithAmount<T> = T & { amount: number };

export interface GoodsSet extends GeneralProduct {
    type: 'set',
    shortDescription: string,
    goods_ids: number[]
}

export interface Goods extends GeneralProduct{
    type: 'goods',
    categories: number[], // Category
    description: string,
    brand_id: number, // Brand
}

export type Product = Goods | GoodsSet;

export interface Address{
    city_id: number, // City
    city: string, // City.name
    postcode: number,
    subject_id: number, // Subject
    subject: string, // Subject.name
    apartment: string
}

export interface User {
    _id: number,
    fullname: string,
    email: string,
    phoneNumber: string,
    password: string,
    cart: ShortProduct[],
    favourites: number[], // ShortProduct[]
    viewed: number[], // ShortProduct[]
    viewedCategories: number[],
    coupons: number[], // Coupon[]
    address: Address,
    role: 'user' | 'admin'
}

export interface Order {
    _id: number,
    // OrderRequset
    user_id: number,
    products: WithAmount<ShortProduct>[],
    total: number,
    delivery_id: number, // Delivery
    deliveryOption_index: number, // Delivery.priceList[number]
    paymentType_id: number, // PaymentType
    coupon_id: number // Coupon
    // OrderRequset
}

export type OrderRequet = Omit<Order, '_id'>;

export type ReviewRequest = Omit<Review, 'date' | '_id'> & { product_id: number };