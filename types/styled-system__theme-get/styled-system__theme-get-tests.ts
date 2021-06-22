import { themeGet } from '@styled-system/theme-get';

const theme = {
    colors: {
        primary: 'tomato',
        secondary: 'cyan',
    },
};

// return a funtion
themeGet('');

// return a any
themeGet('')({});

// return a any
themeGet('colors.primary')({ theme });
