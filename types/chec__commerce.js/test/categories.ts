import Commerce = require("@chec/commerce.js");
import Category = require("@chec/commerce.js/features/categories");

const commerce = new Commerce("{your_public_key}");

const categoryId = "cat_7RqEv5xKOoZz4j";
const categorySlug = "shoes";

// List all categories
// $ExpectType Promise<CategoryCollection>
commerce.categories.list();

// Fetch a category by ID
// $ExpectType Promise<Category>
commerce.categories.retrieve(categoryId);

// Fetch a category by slug
// $ExpectType Promise<Category>
commerce.categories.retrieve(categorySlug, { type: "slug" });

// From: https://api.chec.io/v1/categories
const categories: Category.CategoryCollection = {
    data: [
        {
            id: "cat_xA12JwrK8oPjnk",
            slug: "facial-products",
            name: "Facial Products",
            description: "",
            products: 15,
            created: 1583103163,
            meta: {
                image: "/images/collection/1.png",
            },
        },
    ],
    meta: {
        pagination: {
            total: 3,
            count: 3,
            per_page: 20,
            current_page: 1,
            total_pages: 1,
            links: {},
        },
    },
};
