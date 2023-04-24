declare const paramCodes: {
    freq: 1;
    dma: 2;
    gpio: 3;
    count: 4;
    invert: 5;
    brightness: 6;
    stripType: 7;
};

declare const stripTypeIds: {
    'sk6812-rgbw': 403703808;
    'sk6812-rbgw': 403701768;
    'sk6812-grbw': 403181568;
    'sk6812-gbrw': 403177488;
    'sk6812-brgw': 402657288;
    'sk6812-bgrw': 402655248;
    'ws2811-rgb': 1050624;
    'ws2811-rbg': 1048584;
    'ws2811-grb': 528384;
    'ws2811-gbr': 524304;
    'ws2811-brg': 4104;
    'ws2811-bgr': 2064;
    ws2812: 528384;
    sk6812: 528384;
    sk6812w: 403177488;
};

declare const stripType: {
    SK6812_RGBW: 403703808;
    SK6812_RBGW: 403701768;
    SK6812_GRBW: 403181568;
    SK6812_GBRW: 403177488;
    SK6812_BRGW: 402657288;
    SK6812_BGRW: 402655248;
    WS2811_RGB: 1050624;
    WS2811_RBG: 1048584;
    WS2811_GRB: 528384;
    WS2811_GBR: 524304;
    WS2811_BRG: 4104;
    WS2811_BGR: 2064;
    WS2812: 528384;
    SK6812: 528384;
    SK6812W: 403177488;
};

export { paramCodes, stripTypeIds, stripType };
