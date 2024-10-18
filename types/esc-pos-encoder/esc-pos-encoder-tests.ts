import EscPosEncoder = require("esc-pos-encoder");

const encoder = new EscPosEncoder();

const result1 = encoder
    .initialize()
    .text("The quick brown fox jumps over the lazy dog")
    .newline()
    .qrcode("https://nielsleenheer.com")
    .encode();

const result2 = encoder
    .codepage("windows1251")
    .text("Iñtërnâtiônàlizætiøn")
    .codepage("cp936")
    .text("简体中文")
    .encode();

const result3 = encoder.line("The is the first line").line("And this is the second").encode();

const result4 = encoder.text("This is ").underline().text("underlined").underline().encode();

const result5 = encoder
    .align("right")
    .line("This line is aligned to the right")
    .align("center")
    .line("This line is centered")
    .align("left")
    .line("This line is aligned to the left")
    .encode();

const result6 = encoder
    .size("small")
    .line("A line of small text")
    .size("normal")
    .line("A line of normal text")
    .encode();

const result7 = encoder.barcode("3130630574613", "ean13", 60).encode();

const result8 = encoder.qrcode("https://nielsleenheer.com", 1, 8, "h").encode();

const img = new Image();
img.src = "https://...";

const result9 = encoder.image(img, 300, 300, "atkinson").encode();

const result10 = encoder.cut("partial").encode();

const result11 = encoder.raw([0x1c, 0x2e]).encode();

const result12 = encoder.invert().width(1).height(2).encode();

const result13 = encoder
    .invert(true)
    .box(
        {
            marginLeft: 1,
            marginRight: 2,
            paddingLeft: 3,
            paddingRight: 4,
            style: "single",
            width: 5,
        },
        "This is a box",
    )
    .encode();

const result14 = encoder
    .box({ style: "double" }, encoder => encoder.text("This is a box"))
    .table(
        [
            {
                align: "center",
                marginLeft: 1,
                marginRight: 2,
                verticalAlign: "top",
                width: 3,
            },
            {
                align: "right",
                verticalAlign: "bottom",
            },
        ],
        [
            ["first column", "2nd column"],
            [encoder => encoder.text("something"), encoder => encoder.text("else").bold()],
        ],
    )
    .rule({ style: "double", width: 2 })
    .encode();

const result15 = encoder.pulse(0, 100, 200).encode();
