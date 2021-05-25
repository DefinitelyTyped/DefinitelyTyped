import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const categoryId = 'cat_7RqEv5xKOoZz4j';
const categorySlug = 'shoes';

// List all categories
// $ExpectType Promise<CategoryCollection>
commerce.categories.list();

// Fetch a category by ID
// $ExpectType Promise<Category>
commerce.categories.retrieve(categoryId);

// Fetch a category by slug
// $ExpectType Promise<Category>
commerce.categories.retrieve(categorySlug, { type: 'slug' });
