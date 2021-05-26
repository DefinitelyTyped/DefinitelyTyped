import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const limit = 50;
const categorySlug = 'shoes';
const productId = 'prod_1ypbroE658n4ea';
const variantId = 'vrnt_Kvg9l6Apq51bB7';
const productPermalink = 'YfFoyi';

// Fetch all products
// $ExpectType Promise<ProductCollection>
commerce.products.list();

// Fetch products specifying some additional parameters
// $ExpectType Promise<ProductCollection>
commerce.products.list({
  limit,
  category_slug: categorySlug,
});

// Retrieve a product by it's ID
// $ExpectType Promise<Product>
commerce.products.retrieve(productId);

// Retrieve a product by it's permalink
// $ExpectType Promise<Product>
commerce.products.retrieve(productPermalink, { type: 'permalink' });

// $ExpectType Promise<any>
commerce.products.getVariants(productId);

// $ExpectType Promise<any>
commerce.products.getVariant(productId, variantId);
