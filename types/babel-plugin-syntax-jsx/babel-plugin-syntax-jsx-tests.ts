import jsx from "babel-plugin-syntax-jsx";

// Example taken from the babel plugin handbook:
// https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#-enabling-syntax-in-plugins
export default function myBabelPlugin() {
    return {
        visitor: {},
        inherits: jsx,
    };
}
