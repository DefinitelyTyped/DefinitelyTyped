// Type definitions for wkhtmltopdf 0.3
// Project: https://github.com/devongovett/node-wkhtmltopdf
// Definitions by: Jasper <https://github.com/digijap>
//                 Rens de Wolf <https://github.com/rensdewolf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is based on wkhtmltopdf version 0.12.6
// Source: https://wkhtmltopdf.org/usage/wkhtmltopdf.txt

/// <reference types="node"/>

/**
 * Call wkhtmltopdf and write PDF
 * If options.output is defined the file will be returned in the stream
 *
 * @param html HTML to convert to PDF
 * @param [options] Options
 */
declare function wkhtmltopdf(html: string, options?: Options, callback?: (err: Error, stream: NodeJS.ReadWriteStream) => void): NodeJS.ReadWriteStream;
/**
 * Call wkhtmltopdf and write PDF
 * If options.output is defined the file will be returned in the stream
 *
 * @param url URL to convert to PDF
 * @param [options] Options
 * @param [callback] Callback
 */
declare function wkhtmltopdf(url: string, options?: Options, callback?: (err: Error, stream: NodeJS.ReadWriteStream) => void): NodeJS.ReadWriteStream;
/**
 * Call wkhtmltopdf and write PDF
 * If options.output is defined the file will be returned in the stream
 *
 * @param inputStream Input stream of html
 * @param [options] Options
 * @param [callback] Callback
 */
declare function wkhtmltopdf(inputStream: NodeJS.ReadStream, options?: Options): NodeJS.ReadWriteStream;

declare namespace wkhtmltopdf {
    /**
     * Set the path to the wkhtmltopdf executable
     * Default: wkhtmltopdf
     */
    let command: string;
    /**
     * Set the path to the shell where wkhtmltopdf gets executed in
     * Default: /bin/bash
     */
    let shell: string;
}

interface Options {
    /******************
     * Global options *
     ******************/

    /** Collate when printing multiple copies (default) */
    collate?: boolean;
    /** Do not collate when printing multiple copies */
    noCollate?: boolean;
    /** Number of copies to print into the pdf file (default 1) */
    copies?: number;
    /** Change the dpi explicitly (this has no effect on X11 based systems) (default 96) */
    dpi?: number;
    /** PDF will be generated in grayscale */
    grayscale?: boolean;
    /** When embedding images scale them down to this dpi (default 600) */
    imageDpi?: number;
    /** When jpeg compressing images use this quality (default 94) */
    imageQuality?: number;
    /** Set log level (default info) */
    logLevel?: "none"|"error"|"warn"|"info";
    /** Generates lower quality pdf/ps. Useful to shrink the result document space */
    lowquality?: boolean;
    /** Set the page bottom margin in unitreal (e.g 10mm 2cm 0.5in) */
    marginBottom?: string;
    /** Set the page left margin in unitreal (e.g 10mm 2cm 0.5in) (default 10mm) */
    marginLeft?: string;
    /** Set the page right margin in unitreal (e.g 10mm 2cm 0.5in) (default 10mm) */
    marginRight?: string;
    /** Set the page top margin in unitreal (e.g 10mm 2cm 0.5in) */
    marginTop?: string;
    /** Set orientation to Landscape or Portrait (default Portrait) */
    orientation?: "Landscape"|"Portrait";
    /** Page height in unitreal (e.g 10mm 2cm 0.5in) */
    pageHeight?: string;
    /** Set paper size to: A4, Letter, etc. (default A4) */
    pageSize?: "A0"|"A1"|"A2"|"A3"|"A4"|"A5"|"A6"|"A7"|"A8"|"A9"|
                "B0"|"B1"|"B10"|"B2"|"B3"|"B4"|"B5"|"B6"|"B7"|"B8"|"B9"|
                "C5E"|"Comm10E"|"DLE"|"Executive"|"Folio"|"Ledger"|"Legal"|"Letter"|"Tabloid";
    /** Page width in unitreal (e.g 10mm 2cm 0.5in) */
    pageWidth?: string;
    /** Do not use lossless compression on pdf objects */
    noPdfCompression?: boolean;
    /** Debug prints stderr messages */
    debug?: boolean|((data: Buffer) => void);
    /** debugStdOut prints any stdout warning messages */
    debugStdOut?: boolean;
    /** The title of the generated pdf file (The title of the first document is used if not specified) */
    title?: string;
    /** Ignore warnings */
    ignore?: ReadonlyArray<string|RegExp>;
    /** If defined only output to this path */
    output?: string;

    /*******************
     * Outline options *
     *******************/
    // Dump the default TOC xsl style sheet to stdout */
    dumpDefaultTocXsl?: boolean;
    /** Dump the outline to a file */
    dumpOutline?: string;
    /** Put an outline into the pdf (default) */
    outline?: boolean;
    /** Do not put an outline into the pdf */
    noOutline?: boolean;
    /** Set the depth of the outline (default 4) */
    outlineDepth?: boolean;

    /****************
     * Page options *
     ****************/

    /** Allow the file or files from the specified folder to be loaded (repeatable) */
    allow?: ReadonlyArray<string>;
    /** Do print background (default) */
    background?: boolean;
    /** Do not print background */
    noBackground?: boolean;
    /** Bypass proxy for host (repeatable) */
    bypassProxyFor?: ReadonlyArray<string>;
    /** Web cache directory */
    cacheDir?: string;
    /** Use this SVG file when rendering checked checkboxes */
    checkboxCheckedSvg?: string;
    /** Use this SVG file when rendering unchecked checkboxes */
    checkboxSvg?: string;
    /** Set an additional cookie (repeatable), value should be url encoded. */
    cookie?: ReadonlyArray<[string, string]>;
    /** Set an additional HTTP header (repeatable) */
    customHeader?: ReadonlyArray<[string, string]>;
    /** Add HTTP headers specified by --custom-header for each resource request. */
    customHeaderPropagation?: boolean;
    /** Do not add HTTP headers specified by --custom-header for each resource request. */
    noCustomHeaderPropagation?: boolean;
    /** Show javascript debugging output */
    debugJavascript?: boolean;
    /** Do not show javascript debugging output (default) */
    noDebugJavascript?: boolean;
    /**
     * Add a default header, with the name of the page to the left, and the page number to the right, this is short for:
     * --header-left='[webpage]'
     * --header-right='[page]/[toPage]' --top 2cm
     * --header-line
     */
    defaultHeader?: boolean;
    /** Set the default text encoding, for input */
    encoding?: string;
    /** Do not make links to remote web pages */
    disableExternalLinks?: boolean;
    /** Make links to remote web pages (default) */
    enableExternalLinks?: boolean;
    /** Do not turn HTML form fields into pdf form fields (default) */
    disableForms?: boolean;
    /** Turn HTML form fields into pdf form fields */
    enableForms?: boolean;
    /** Do load or print images (default) */
    images?: boolean;
    /** Do not load or print images */
    noImages?: boolean;
    /** Do not make local links */
    disableInternalLinks?: boolean;
    /** Make local links (default) */
    enableInternalLinks?: boolean;
    /** Do not allow web pages to run javascript */
    disableJavascript?: boolean;
    /** Do allow web pages to run javascript (default) */
    enableJavascript?: boolean;
    /** Wait some milliseconds for javascript finish (default 200) */
    javascriptDelay?: number;
    /** Keep relative external links as relative external links */
    keepRelativeLinks?: boolean;
    /** Specify how to handle pages that fail to load: abort, ignore or skip (default abort) */
    loadErrorHandling?: "abort"|"ignore"|"skip";
    /** Specify how to handle media files that fail to load: abort, ignore or skip (default ignore) */
    loadMediaErrorHandling?: "abort"|"ignore"|"skip";
    /** Do not allowed conversion of a local file to read in other local files, unless explicitly allowed with --allow (default) */
    disableLocalFileAccess?: boolean;
    /** Allowed conversion of a local file to read in other local files. */
    enableLocalFileAccess?: boolean;
    /** Minimum font size */
    minimumFontSize?: number;
    /** Do not include the page in the table of contents and outlines */
    excludeFromOutline?: boolean;
    /** Include the page in the table of contents and outlines (default) */
    includeInOutline?: boolean;
    /** Set the starting page number (default 0) */
    pageOffset?: number;
    /** HTTP Authentication password */
    password?: string;
    /** Disable installed plugins (default) */
    disablePlugins?: boolean;
    /** Enable installed plugins (plugins will likely not work) */
    enablePlugins?: boolean;
    /** Add an additional post field */
    post?: ReadonlyArray<[string, string]>;
    /** Post an additional file (repeatable) */
    postFile?: ReadonlyArray<[string, string]>;
    /** Use print media-type instead of screen */
    printMediaType?: boolean;
    /** Do not use print media-type instead of screen (default) */
    noPrintMediaType?: boolean;
    /** Use a proxy */
    proxy?: string;
    /** Use the proxy for resolving hostnames */
    proxyHostnameLookup?: boolean;
    /** Use this SVG file when rendering checked radiobuttons */
    radiobuttonCheckedSvg?: string;
    /** Use this SVG file when rendering unchecked radiobuttons */
    radiobuttonSvg?: string;
    /** Resolve relative external links into absolute links (default) */
    resolveRelativeLinks?: boolean;
    /** Run this additional javascript after the page is done loading (repeatable) */
    runScript?: ReadonlyArray<string>;
    /** Disable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio non-constant */
    disableSmartShrinking?: boolean;
    /** Enable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio non-constant (default) */
    enableSmartShrinking?: boolean;
    /** Path to the ssl client cert public key in OpenSSL PEM format, optionally followed by intermediate ca and trusted certs */
    sslCrtPath?: string;
    /** Password to ssl client cert private key */
    sslKeyPassword?: string;
    /** Path to ssl client cert private key in OpenSSL PEM format */
    sslKeyPath?: string;
    /** Stop slow running javascripts (default) */
    stopSlowScripts?: boolean;
    /** Do not Stop slow running javascripts */
    noStopSlowScripts?: boolean;
    /** Do not link from section header to toc (default) */
    disableTocBackLinks?: boolean;
    /** Link from section header to toc */
    enableTocBackLinks?: boolean;
    /** Specify a user style sheet, to load with every page */
    userStyleSheet?: string;
    /** HTTP Authentication username */
    username?: string;
    /**
     * Set viewport size if you have custom scrollbars or css attribute overflow to emulate window size
     * Format "1280x1024"
     */
    viewportSize?: string;
    /** Wait until window.status is equal to this string before rendering page */
    windowStatus?: string;
    /** Use this zoom factor (default 1) */
    zoom?: number;

    /*****************************
     * Header and footer options *
     *****************************/

    /** Centered footer text */
    footerCenter?: string;
    /** Set footer font name (default Arial) */
    footerFontName?: string;
    /** Set footer font size (default 12) */
    footerFontSize?: number;
    /** Adds a html footer should be an URL */
    footerHtml?: string;
    /** Left aligned footer text */
    footerLeft?: string;
    /** Display line above the footer */
    footerLine?: boolean;
    /** Do not display line above the footer (default) */
    noFooterLine?: boolean;
    /** Right aligned footer text */
    footerRight?: string;
    /** Spacing between footer and content in mm (default 0) */
    footerSpacing?: number;

    /** Centered header text */
    headerCenter?: string;
    /** Set header font name (default Arial) */
    headerFontName?: string;
    /** Set header font size (default 12) */
    headerFontSize?: number;
    /** Adds a html header should be an URL */
    headerHtml?: string;
    /** Left aligned header text */
    headerLeft?: string;
    /** Display line above the header */
    headerLine?: boolean;
    /** Do not display line above the header (default) */
    noHeaderLine?: boolean;
    /** Right aligned header text */
    headerRight?: string;
    /** Spacing between header and content in mm (default 0) */
    headerSpacing?: number;
    /** Replace [name] with value in header and footer (repeatable) */
    replace?: ReadonlyArray<[string, string]>;

    /***************
     * TOC options *
     ***************/
    /** Do not use dotted lines in the toc */
    disableDottedLines?: boolean;
    /** The header text of the toc (default Table of Contents) */
    tocHeaderText?: string;
    /** For each level of headings in the toc indent by this length (default 1em) */
    tocLevelIndentation?: string;
    /** Do not link from toc to sections */
    disableTocLinks?: boolean;
    /** For each level of headings in the toc the font is scaled by this factor (default 0.8) */
    tocTextSizeShrink?: number;
    /** Use the supplied xsl style sheet for printing the table of contents */
    xslStyleSheet?: string;

    /**************************************
     * Special keys for node implementation
     **************************************/
    /** Cover object */
    cover?: string;
    /** TOC object */
    toc?: string;
    /** Page object */
    page?: string;
}

export = wkhtmltopdf;
