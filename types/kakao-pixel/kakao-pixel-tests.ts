// https://kakaoad.github.io/kakao-pixel/

kakaoPixel("testId").pageView();
kakaoPixel("testId").pageView("tag");

kakaoPixel("testId").completeRegistration();
kakaoPixel("testId").completeRegistration("tag");

kakaoPixel("testId").search({
    keyword: "keyword",
});
kakaoPixel("testId").search({
    keyword: "keyword",
    tag: "tag",
});
kakaoPixel("testId").search();

kakaoPixel("testId").viewContent({
    id: "id",
});
kakaoPixel("testId").viewContent({
    id: "id",
    tag: "tag",
});
kakaoPixel("testId").viewContent();

kakaoPixel("testId").addToCart({
    id: "id",
});
kakaoPixel("testId").addToCart({
    id: "id",
    tag: "tag",
});
kakaoPixel("testId").addToCart();

kakaoPixel("testId").addToWishList({
    id: "id",
});
kakaoPixel("testId").addToWishList({
    id: "id",
    tag: "tag",
});
kakaoPixel("testId").addToWishList();

kakaoPixel("testId").viewCart();
kakaoPixel("testId").viewCart("tag");

kakaoPixel("testId").purchase({
    total_quantity: "3",
    total_price: "500",
    currency: "KRW",
    products: [
        {
            id: "id",
            name: "name",
            quantity: "2",
            price: "200",
        },
        {
            id: "id2",
            name: "name2",
            quantity: "1",
            price: "100",
        },
    ],
});
kakaoPixel("testId").purchase({
    total_quantity: "3",
    total_price: "500",
    currency: "KRW",
    products: [
        {
            id: "id",
            name: "name",
            quantity: "2",
            price: "200",
        },
        {
            id: "id2",
            name: "name2",
            quantity: "1",
            price: "100",
        },
    ],
    tag: "tag",
});
kakaoPixel("testId").purchase();

kakaoPixel("testId").participation();
kakaoPixel("testId").participation("tag");

kakaoPixel("testId").signUp();
kakaoPixel("testId").signUp("tag");
