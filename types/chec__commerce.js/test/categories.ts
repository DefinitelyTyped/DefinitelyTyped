import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

// List all categories
commerce.categories.list().then(categories => {});

// Fetch a category by ID
const categoryId = 'cat_7RqEv5xKOoZz4j';
commerce.categories.retrieve(categoryId)
  .then(category => {});

// Fetch a category by slug
const categorySlug = 'shoes';
commerce.categories.retrieve(categorySlug, { type: 'slug' })
  .then(category => {});
