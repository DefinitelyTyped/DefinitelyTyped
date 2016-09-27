// Type definitions for jsPDF v1.1.135
// Project: https://github.com/MrRio/jsPDF
// Definitions by: Amber Schühmacher <https://github.com/amberjs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'jspdf' {
    class jsPDF {
        constructor(orientation?:any,
                    unit?:string,
                    format?:string,
                    compressPdf?:number);

        CapJoinStyles:any;
        version:string;

        internal: {
            'pdfEscape'(text:string, flags:any): any;
            'getStyle'(style:string) : any;
            'getFont'(): any;
            'getFontSize'():number;
            'getLineHeight'():number;
            'write'(string1:string):any;
            'getCoordinateString'(value:number):number;
            'getVerticalCoordinateString'(value:number):number;
            'collections':any;
            'newObject'():number;
            'newAdditionalObject'():any;
            'newObjectDeferred'():number;
            'newObjectDeferredBegin'(oid:number):void;
            'putStream'(str:string):void;
            'events':any;
            'scaleFactor':number;
            'pageSize': {
                width:number;
                height:number;
            };
            'output'(type:any, options:any):any;
            'getNumberOfPages'():number;
            'pages':number[];
            'out'(string:string):void;
            'f2'(number:number):number;
            'getPageInfo'(pageNumberOneBased:number):any;
            'getCurrentPageInfo'():any;
        };
        addPage(sizes?: number[]):jsPDF;
        setPage(n:number):jsPDF;
        insertPage(beforePage:number):jsPDF;
        movePage(targetPage:number, beforePage:number):jsPDF;
        deletePage(n:number):jsPDF;
        setDisplayMode(zoom?:string, layout?:string, pmode?:string):jsPDF;
        text(text:any, x:any, y:any, flags?:any, angle?:any, align?:any):jsPDF;
        lstext(text:string, x:number, y:number, spacing:number):jsPDF;
        line(x1:number, y1:number, x2:number, y2:number):any;
        clip():void;
        lines(lines:any, x:any, y:any, scale?:any, style?:string, closed?:boolean):jsPDF;
        rect(x:number, y:number, w:number, h:number, style?:string):jsPDF;
        triangle(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number, style:string):jsPDF;
        roundedRect(x:number, y:number, w:number, h:number, rx:number, ry:number, style:string):jsPDF;
        ellipse(x:number, y:number, rx:number, ry:number, style?:string):jsPDF;
        circle(x:number, y:number, r:number, style:string):jsPDF;
        setProperties(properties:any):jsPDF;
        setFontSize(size:number):jsPDF;
        setFont(fontName?:string, fontStyle?:string):jsPDF;
        setFontStyle(style:string):jsPDF;
        setFontType(style:string):jsPDF;
        getFontList():any;
        addFont(postScriptName:string, fontName:string, fontStyle:string):string;
        setLineWidth(width:number):jsPDF;
        setDrawColor(ch1:number|string, ch2?:number, ch3?:number, ch4?:number):jsPDF;
        setFillColor(ch1:number|string, ch2?:number, ch3?:number, ch4?:number):jsPDF;
        setTextColor(r?:number, g?:number, b?:number):jsPDF;
        setLineCap(style:string|number):jsPDF;
        setLineJoin(style:string|number):jsPDF;
        output(type?:string, options?:any):any;
        save(filename:string):jsPDF;

        /**
         * jsPDF plugins below:
         *
         *  - AddHTML
         *  - AddImage
         *  - Annotations
         *  - AutoPrint
         *  - Canvas
         *  - Cell
         *  - Context2D
         *  - FromHTML
         *  - JavaScript
         *  - PNG
         *  - split_text_to_size
         *  - SVG
         *  - total_pages
         */

        // jsPDF plugin: addHTML
        addHTML(element:any, x:number, y:number, options:any, callback:Function):jsPDF;
        addHTML(element:any, callback:Function):jsPDF;

        // jsPDF plugin: addImage
        color_spaces:any;
        decode:any;
        image_compression:any;

        sHashCode(str:string):any;
        isString(object:any):boolean;
        extractInfoFromBase64DataURI(dataURI:string):any[];
        supportsArrayBuffer():boolean;
        isArrayBuffer(object:any):boolean;
        isArrayBufferView(object:any):boolean;
        binaryStringToUint8Array(binary_string:string):Uint8Array;
        arrayBufferToBinaryString(buffer:any):string;
        arrayBufferToBase64(arrayBuffer:ArrayBuffer):string;
        createImageInfo(data:any, wd:any, ht:any, cs:any, bpc:any, imageIndex:number, alias:any, f?:any, dp?:any, trns?:any, pal?:any, smask?:any):any;
        addImage(imageData?:any, format?:any, x?:number, y?:number, w?:number, h?:number, alias?:any, compression?:any, rotation?:any):jsPDF;
        processJPEG(data:any, index:number, alias:any, compression?:any, dataAsBinaryString?:string):any;
        processJPG():any;

        // jsPDF plugin: Annotations
        annotationPlugin:any;
        createAnnotation(options:any):void;
        link(x:number, y:number, w:number, h:number, options:any):void;
        textWithLink(text:string, x:number, y:number, options:any):number;
        getTextWidth(text:string):number;
        getLineHeight():number;

        // jsPDF plugin: AutoPrint
        autoPrint():jsPDF;

        // jsPDF plugin: Canvas
        canvas: {
            getContext():any;
            style:any;
        };

        // jsPDF plugin: Cell
        setHeaderFunction(func:Function):void;
        getTextDimensions(txt:string):any;
        cellAddPage():void;
        cellInitialize():void;
        cell(x:number, y:number, w:number, h:number, txt:string, ln:number, align:string):jsPDF;
        arrayMax(array:any[], comparisonFn?:Function):number;
        table(x:number, y:number, data:any, headers:string[], config:any):jsPDF;
        calculateLineHeight(headerNames:string[], columnWidths:number[], model:any[]):number;
        setTableHeaderRow(config:any[]):void;
        printHeaderRow(lineNumber:number, new_page?:boolean):void;

        // jsPDF plugin: Context2D
        context2d: {
            pageWrapXEnabled: boolean;
            pageWrapYEnabled: boolean;
            pageWrapX: number;
            pageWrapY: number;
            f2(number:number):number;
            fillRect(x:number, y:number, w:number, h:number):void;
            strokeRect(x:number, y:number, w:number, h:number):void;
            clearRect(x:number, y:number, w:number, h:number):void;
            save():void;
            restore():void;
            beginPath():void;
            closePath():void;
            setFillStyle(style:string):void;
            setStrokeStyle(style:string):void;
            fillText(text:string|string[], x:number, y:number, maxWidth:number):void;
            strokeText(text:string|string[], x:number, y:number, maxWidth:number):void;
            setFont(font:string):void;
            setTextBaseline(baseline:string):void;
            getTextBaseline():string;
            setLineWidth(width:number):void;
            setLineCap(style:string):void;
            setLineJoin(style:string):void;
            moveTo(x:number, y:number):void;
            lastBreak: number;
            pageBreaks: any[];
            lineTo(x:number, y:number):void;
            bezierCurveTo(x1:number, y1:number, x2:number, y2:number, x:number, y:number):void;
            quadraticCurveTo(x1:number, y1:number, x:number, y:number):void;
            arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, anticlockwise:any):void;
            drawImage(img:string, x:number, y:number, w:number, h:number, x2?:number, y2?:number, w2?:number, h2?:number):void;
            stroke():void;
            fill():void;
            translate(x:number, y:number):void;
            measureText(text:string):number;
        };

        // jsPDF plugin: fromHTML
        fromHTML(HTML:string | HTMLElement, x:number, y:number, settings?:any, callback?:Function, margins?:any):jsPDF;

        // jsPDF plugin: JavaScript
        addJS(txt:string):jsPDF;

        // jsPDF plugin: PNG
        processPNG(imageData:any, imageIndex:number, alias:string, compression:any, dataAsBinaryString:string):any;

        // jsPDF plugin: split_text_to_size
        getCharWidthsArray(text:string, options?:any):any[];
        getStringUnitWidth(text:string, options?:any):number;
        splitTextToSize(text:string, maxlen:number, options?:any):any;

        // jsPDF plugin: SVG
        addSVG(svgtext:string, x:number, y:number, w?:number, h?:number):jsPDF;

        // jsPDF plugin: total_pages
        putTotalPages(pageExpression:string):jsPDF;
    }
    
    namespace jsPDF {}

    export = jsPDF;
}
