import utils from "svg-path-reverse";

// $ExpectType string
utils.reverse("M100 100 L200 200");
// $ExpectType string
utils.reverse("M100 100 L200 200", 1);
// $ExpectType string
utils.reverseNormalized("M100 100 L200 200");
// $ExpectType string
utils.normalize("M100 100 L200 200");

// @ts-expect-error
utils.reverse(1);
// @ts-expect-error
utils.reverse(1, "1");
// @ts-expect-error
utils.reverseNormalized(1);
// @ts-expect-error
utils.normalize(1);

// @ts-expect-error
utils.reverse([]);
// @ts-expect-error
utils.reverseNormalized([]);
// @ts-expect-error
utils.normalize([]);

// @ts-expect-error
utils.reverse({});
// @ts-expect-error
utils.reverseNormalized({});
// @ts-expect-error
utils.normalize({});

// @ts-expect-error
utils.reverse(null);
// @ts-expect-error
utils.reverseNormalized(null);
// @ts-expect-error
utils.normalize(null);

// @ts-expect-error
utils.reverse(undefined);
// @ts-expect-error
utils.reverseNormalized(undefined);
