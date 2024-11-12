import nums2wordsBG from "nums2words-bg";

// $ExpectType string
nums2wordsBG("201401"); // двеста и една хиляди, четиристотин и едно

// currencies
// $ExpectType string
nums2wordsBG.currency("1024.81"); // хиляда двадесет и четири лева и осемдесет и една стотинки
// $ExpectType string
nums2wordsBG.currency("10122.1", { separator: ", " }); // десет хиляди, сто двадесет и два лева, десет стотинки
// $ExpectType string
nums2wordsBG.currency("21001.01", { labelBig: "лв.", labelSmall: "ст." }); // двадесет и една хиляди и един лв. и една ст.
// $ExpectType string
nums2wordsBG.currency("11", { displaySmall: false }); // единадесет лева
// $ExpectType string
nums2wordsBG.currency("0.11", { displayBig: false }); // единадесет стотинки

// $ExpectType string
nums2wordsBG.currency(".00000001", { currency: "btc" }); // нула биткойна и едно сатоши
// $ExpectType string
nums2wordsBG.currency("1.01", { currency: "cny" }); // един юан и един фен
// $ExpectType string
nums2wordsBG.currency("01.01", { currency: "rub" }); // една рубла и една копейка
// $ExpectType string
nums2wordsBG.currency("1.99", { currency: "usd" }); // един долар и деветдесет и девет цента
// $ExpectType string
nums2wordsBG.currency("12.34", {
    separator: "ae ",
    labelBig: "лв.",
    labelSmall: "ст.",
    displayBig: false,
    displaySmall: true,
    currency: "rub",
});

// time
// $ExpectType string
nums2wordsBG.time("00:01:01"); // "нула часа, една минута и една секунда"
// $ExpectType string
nums2wordsBG.time("1:30:4", { displayMinute: false, labelHour: "часа" }); // един часа и четири секунди
nums2wordsBG.time("1:23:45", {
    labelHour: "h ",
    labelMinute: "m ",
    labelSecond: "s ",
    separator: ", ",
    displayHour: true,
    displayMinute: false,
    displaySecond: true,
});

// date
// $ExpectType string
nums2wordsBG.date("2 8 301", { format: "a,y,d", separator: ", " }); // два века, осем години, триста и един дена
// $ExpectType string
nums2wordsBG.date("2 6", { format: "w,d" }); // две седмици и шест дена
// $ExpectType string
nums2wordsBG.date("1.1.1.1", {
    format: "a/y/d/m",
    separator: ", ",
    labels: { d: "d ", w: "w ", m: "m ", y: "y ", a: "a " },
}); // "един век, една година, един ден, един месец"

// various units
// $ExpectType string
nums2wordsBG("1", { gender: "f" }) + " вилица"; // една вилица
// $ExpectType string
nums2wordsBG("1001", { gender: "m" }) + " километра"; // хиляда и един километра

const myCurrency = function() {
    return {
        xyz: {
            labelBig: "xyz_лева",
            labelSmall: "xyz_стотинки",
            singular: { lv: "xyz_лев", st: "xyz_стотинка" },
            decimals: 100,
            def: { lv: "m", st: "f" },
            gender: {
                1: { m: "един", f: "една" },
                2: { m: "два", f: "две" },
            },
        },
    };
};

// $ExpectType string
nums2wordsBG.currency("11.01", { currency: "xyz" }, myCurrency); // единадесет xyz_лева и една xyz_стотинка
