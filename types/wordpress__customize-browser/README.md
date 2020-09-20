# `wp.customize` typings

This package contains typings for the [WordPress Customizer JavaScript API](https://developer.wordpress.org/themes/customize-api/the-customizer-javascript-api/). The typings were recreated by reading the source code, which is very complicated and so the typings may contain mistakes. Additionally, there are some TODOs - usually places where `any` was used because of a lack of understanding of the API. Feel free to propose a PR fixing any of those.

## Usage

The package adds type-checking to the built-in functions, so you can just use something like
```ts
wp.customize.section('nav').deactivate({
    completeCallback: () => {
        wp.customize.section('colors').activate(); // show after nav hides completely
    },
});
```

However, if you want to use the types directly, they are exported under the `wordpress__customize` namespace, so, rewriting the same to use a function:
```ts
function fun(section: wordpress__customize.Section): void {
  section.deactivate({
    completeCallback: () => {
        wp.customize.section('colors').activate(); // show after nav hides completely
    },
  });
}

wp.customize.section('nav', fun);
```
