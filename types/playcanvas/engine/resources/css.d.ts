declare namespace pc {

    /**
     * @function
     * @name pc.createStyle
     * @description Creates a &lt;style&gt; DOM element from a string that contains CSS
     * @param {String} cssString A string that contains valid CSS
     * @example
     * var css = 'body {height: 100;}';
     * var style = pc.createStyle(css);
     * document.head.appendChild(style);
     * @return {Element} The style DOM element
     */
    function createStyle(cssString: string): Element;
}
