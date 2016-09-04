///<reference path="please.d.ts" />

Please.make_color();

Please.make_color({
    golden: false,
    base_color: 'red',
    colors_returned: 100,
    format: 'rgb-string'
});

Please.make_scheme({
    h: 145,
    s: .7,
    v: .6
});

Please.make_scheme(
    {
        h: 145,
        s: .7,
        v: .6
    },
    {
        scheme_type: 'complement',
        format: 'hex'
    }
);

Please.NAME_to_HEX("red");

Please.NAME_to_HSV("red");

Please.NAME_to_RGB("red");

Please.HEX_to_HSV("#ff0000");

Please.RGB_to_HEX({
    r: 0,
    g: 0,
    b: 0
});

Please.HSV_to_RGB({
    h: 145,
    s: .7,
    v: .6
});

Please.RGB_to_HSV({
    r: 0,
    g: 0,
    b: 0
});

Please.HSV_to_HEX({
    h: 145,
    s: .7,
    v: .6
});

Please.HEX_to_HSV("#ff0000");