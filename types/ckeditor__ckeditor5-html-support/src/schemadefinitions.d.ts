declare const _default: {
    block: [
        {
            model: 'codeBlock';
            view: 'pre';
        },
        {
            model: 'paragraph';
            view: 'p';
        },
        {
            model: 'blockQuote';
            view: 'blockquote';
        },
        {
            model: 'listItem';
            view: 'li';
        },
        {
            model: 'pageBreak';
            view: 'div';
        },
        {
            model: 'rawHtml';
            view: 'div';
        },
        {
            model: 'table';
            view: 'table';
        },
        {
            model: 'tableRow';
            view: 'tr';
        },
        {
            model: 'tableCell';
            view: 'td';
        },
        {
            model: 'tableCell';
            view: 'th';
        },
        {
            model: 'caption';
            view: 'caption';
        },
        {
            model: 'caption';
            view: 'figcaption';
        },
        {
            model: 'imageBlock';
            view: 'img';
        },
        {
            model: 'imageInline';
            view: 'img';
        },
        {
            model: '$htmlSection';
            modelSchema: {
                allowChildren: '$block';
                allowIn: ['$root', '$htmlSection'];
                isBlock: true;
            };
        },
        {
            model: 'htmlP';
            view: 'p';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlBlockquote';
            view: 'blockquote';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlTable';
            view: 'table';
            modelSchema: {
                allowIn: ['$htmlSection', '$root'];
                isBlock: true;
            };
        },
        {
            model: 'htmlTbody';
            view: 'tbody';
            modelSchema: {
                allowIn: 'htmlTable';
                isBlock: true;
            };
        },
        {
            model: 'htmlThead';
            view: 'thead';
            modelSchema: {
                allowIn: 'htmlTable';
                isBlock: true;
            };
        },
        {
            model: 'htmlTfoot';
            view: 'tfoot';
            modelSchema: {
                allowIn: 'htmlTable';
                isBlock: true;
            };
        },
        {
            model: 'htmlCaption';
            view: 'caption';
            modelSchema: {
                allowIn: 'htmlTable';
                allowChildren: '$text';
                isBlock: true;
            };
        },
        {
            model: 'htmlTr';
            view: 'tr';
            modelSchema: {
                allowIn: ['htmlTable', 'htmlThead', 'htmlTbody'];
                isBlock: true;
            };
        },
        {
            model: 'htmlTd';
            view: 'td';
            modelSchema: {
                allowIn: 'htmlTr';
                allowChildren: ['$block', '$htmlSection'];
                isBlock: true;
            };
        },
        {
            model: 'htmlTh';
            view: 'th';
            modelSchema: {
                allowIn: 'htmlTr';
                allowChildren: ['$block', '$htmlSection'];
                isBlock: true;
            };
        },
        {
            model: 'htmlFigure';
            view: 'figure';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
                isBlock: true;
            };
        },
        {
            model: 'htmlFigcaption';
            view: 'figcaption';
            modelSchema: {
                allowIn: 'htmlFigure';
                allowChildren: '$text';
                isBlock: true;
            };
        },
        {
            model: 'htmlAddress';
            view: 'address';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlAside';
            view: 'aside';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlMain';
            view: 'main';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlDetails';
            view: 'details';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlSummary';
            view: 'summary';
            modelSchema: {
                allowChildren: '$text';
                allowIn: 'htmlDetails';
                isBlock: true;
            };
        },
        {
            model: 'htmlDiv';
            view: 'div';
            paragraphLikeModel: 'htmlDivParagraph';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlFieldset';
            view: 'fieldset';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlLegend';
            view: 'legend';
            modelSchema: {
                allowIn: 'htmlFieldset';
                allowChildren: '$text';
            };
        },
        {
            model: 'htmlHeader';
            view: 'header';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlFooter';
            view: 'footer';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlForm';
            view: 'form';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlHgroup';
            view: 'hgroup';
            modelSchema: {
                allowChildren: ['htmlH1', 'htmlH2', 'htmlH3', 'htmlH4', 'htmlH5', 'htmlH6'];
                isBlock: true;
            };
        },
        {
            model: 'htmlH1';
            view: 'h1';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlH2';
            view: 'h2';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlH3';
            view: 'h3';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlH4';
            view: 'h4';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlH5';
            view: 'h5';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlH6';
            view: 'h6';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: '$htmlList';
            modelSchema: {
                allowWhere: '$htmlSection';
                allowChildren: ['$htmlList', 'htmlLi'];
                isBlock: true;
            };
        },
        {
            model: 'htmlDir';
            view: 'dir';
            modelSchema: {
                inheritAllFrom: '$htmlList';
            };
        },
        {
            model: 'htmlMenu';
            view: 'menu';
            modelSchema: {
                inheritAllFrom: '$htmlList';
            };
        },
        {
            model: 'htmlUl';
            view: 'ul';
            modelSchema: {
                inheritAllFrom: '$htmlList';
            };
        },
        {
            model: 'htmlOl';
            view: 'ol';
            modelSchema: {
                inheritAllFrom: '$htmlList';
            };
        },
        {
            model: 'htmlLi';
            view: 'li';
            modelSchema: {
                allowIn: '$htmlList';
                allowChildren: '$text';
                isBlock: true;
            };
        },
        {
            model: 'htmlPre';
            view: 'pre';
            modelSchema: {
                inheritAllFrom: '$block';
            };
        },
        {
            model: 'htmlArticle';
            view: 'article';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlSection';
            view: 'section';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlNav';
            view: 'nav';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: 'htmlDl';
            view: 'dl';
            modelSchema: {
                allowIn: ['$htmlSection', '$root'];
                allowChildren: ['htmlDt', 'htmlDd'];
                isBlock: true;
            };
        },
        {
            model: 'htmlDt';
            view: 'dt';
            modelSchema: {
                allowChildren: '$block';
                isBlock: true;
            };
        },
        {
            model: 'htmlDd';
            view: 'dd';
            modelSchema: {
                allowChildren: '$block';
                isBlock: true;
            };
        },
        {
            model: 'htmlCenter';
            view: 'center';
            modelSchema: {
                inheritAllFrom: '$htmlSection';
            };
        },
        {
            model: '$htmlObjectBlock';
            isObject: true;
            modelSchema: {
                isObject: true;
                isBlock: true;
                allowWhere: '$block';
            };
        },
    ];
    inline: [
        {
            model: 'htmlAcronym';
            view: 'acronym';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlTt';
            view: 'tt';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlFont';
            view: 'font';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlTime';
            view: 'time';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlVar';
            view: 'var';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlBig';
            view: 'big';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlSmall';
            view: 'small';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlSamp';
            view: 'samp';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlQ';
            view: 'q';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlOutput';
            view: 'output';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlKbd';
            view: 'kbd';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlBdi';
            view: 'bdi';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlBdo';
            view: 'bdo';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlAbbr';
            view: 'abbr';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlA';
            view: 'a';
            priority: 5;
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlStrong';
            view: 'strong';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlB';
            view: 'b';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlI';
            view: 'i';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlEm';
            view: 'em';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlS';
            view: 's';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlDel';
            view: 'del';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlIns';
            view: 'ins';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlU';
            view: 'u';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlSub';
            view: 'sub';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlSup';
            view: 'sup';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlCode';
            view: 'code';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlMark';
            view: 'mark';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlSpan';
            view: 'span';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlCite';
            view: 'cite';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlLabel';
            view: 'label';
            attributeProperties: {
                copyOnEnter: true;
            };
        },
        {
            model: 'htmlDfn';
            view: 'dfn';
            attributeProperties: {
                copyOnEnter: true;
            };
        },

        {
            model: '$htmlObjectInline';
            isObject: true;
            modelSchema: {
                isObject: true;
                isInline: true;
                allowWhere: '$text';
                allowAttributesOf: '$text';
            };
        },
        {
            model: 'htmlObject';
            view: 'object';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlIframe';
            view: 'iframe';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlInput';
            view: 'input';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlButton';
            view: 'button';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlTextarea';
            view: 'textarea';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlSelect';
            view: 'select';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlVideo';
            view: 'video';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlEmbed';
            view: 'embed';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlOembed';
            view: 'oembed';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlAudio';
            view: 'audio';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlImg';
            view: 'img';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlCanvas';
            view: 'canvas';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlMeter';
            view: 'meter';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlProgress';
            view: 'progress';
            isObject: true;
            modelSchema: {
                inheritAllFrom: '$htmlObjectInline';
            };
        },
        {
            model: 'htmlStyle';
            view: 'style';
            modelSchema: {
                allowWhere: ['$text', '$block'];
                isInline: true;
            };
        },
    ];
};

export default _default;
