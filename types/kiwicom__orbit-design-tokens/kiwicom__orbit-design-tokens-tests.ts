import { getTokens, fromPlainObject } from '@kiwicom/orbit-design-tokens';

const foundation = {
    palette: {
        product: {
            light: '#ff9999',
            lightHover: '#ff7f7f',
            lightActive: '#ff6666',
            normal: '#ff0000',
            normalHover: '#e50000',
            normalActive: '#cc0000',
            dark: '#990000',
            darkHover: '#720000',
            darkActive: '#630000',
            darker: '#530000',
        },
    },
    base: {
        fontFamily: 'sans-serif',
        fontSizeSm: '14px',
        fontSizeMd: '16px',
        fontSizeLg: '18px',
        borderRadius: '6px',
    },
};

// $ExpectType Tokens
const foundationTheme = getTokens(foundation);

const palette = {
    productLight: '#ff9999',
    productLightHover: '#ff7f7f',
    productLightActive: '#ff6666',
    productNormal: '#ff0000',
    productNormalHover: '#e50000',
    productNormalActive: '#cc0000',
    productDark: '#990000',
    productDarkHover: '#890000',
    productDarkActive: '#7a0000',
    productDarker: '#5b0000',
};

// $ExpectType Tokens
const paletteTheme = fromPlainObject(palette);
