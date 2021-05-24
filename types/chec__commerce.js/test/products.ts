import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const limit = 50;
const categorySlug = 'shoes';
const productId = 'prod_1ypbroE658n4ea';

// Fetch all products
commerce.products.list().then(response => response.data);

// Fetch products specifying some additional parameters
commerce.products.list({
  limit,
  category_slug: categorySlug,
}).then(response => response.data);

// Retrieve a product by it's ID
commerce.products.retrieve(productId).then(product => {});

// Retrieve a product by it's permalink
const productPermalink = 'YfFoyi';

commerce.products.retrieve(productPermalink, { type: 'permalink' }).then(product => {});
