import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    useResponsiveHeight,
    useResponsiveWidth,
    useResponsiveFontSize,
} from 'react-native-responsive-dimensions';

const requiredHeight = useResponsiveHeight(25);
const requiredWidth = useResponsiveWidth(100);
const requiredFontSize = useResponsiveFontSize(3);

const unrequiredHeight = responsiveHeight(25);
const unrequiredWidth = responsiveWidth(25);
const unrequiredFontSize = responsiveFontSize(25);
