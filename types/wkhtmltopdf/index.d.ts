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
declare function wkhtmltopdf(
    html: string,
    options?: Options,
    callback?: (err: Error, stream: NodeJS.ReadWriteStream) => void,
): NodeJS.ReadWriteStream;
/**
 * Call wkhtmltopdf and write PDF
 * If options.output is defined the file will be returned in the stream
 *
 * @param url URL to convert to PDF
 * @param [options] Options
 * @param [callback] Callback
 */
declare function wkhtmltopdf(
    url: string,
    options?: Options,
    callback?: (err: Error, stream: NodeJS.ReadWriteStream) => void,
): NodeJS.ReadWriteStream;
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
    collate?: boolean | undefined;
    /** Do not collate when printing multiple copies */
    noCollate?: boolean | undefined;
    /** Number of copies to print into the pdf file (default 1) */
    copies?: number | undefined;
    /** Change the dpi explicitly (this has no effect on X11 based systems) (default 96) */
    dpi?: number | undefined;
    /** PDF will be generated in grayscale */
    grayscale?: boolean | undefined;
    /** When embedding images scale them down to this dpi (default 600) */
    imageDpi?: number | undefined;
    /** When jpeg compressing images use this quality (default 94) */
    imageQuality?: number | undefined;
    /** Set log level (default info) */
    logLevel?: "none" | "error" | "warn" | "info" | undefined;
    /** Generates lower quality pdf/ps. Useful to shrink the result document space */
    lowquality?: boolean | undefined;
    /** Set the page bottom margin in unitreal (e.g 10mm 2cm 0.5in) */
    marginBottom?: string | undefined;
    /** Set the page left margin in unitreal (e.g 10mm 2cm 0.5in) (default 10mm) */
    marginLeft?: string | undefined;
    /** Set the page right margin in unitreal (e.g 10mm 2cm 0.5in) (default 10mm) */
    marginRight?: string | undefined;
    /** Set the page top margin in unitreal (e.g 10mm 2cm 0.5in) */
    marginTop?: string | undefined;
    /** Set orientation to Landscape or Portrait (default Portrait) */
    orientation?: "Landscape" | "Portrait" | undefined;
    /** Page height in unitreal (e.g 10mm 2cm 0.5in) */
    pageHeight?: string | undefined;
    /** Set paper size to: A4, Letter, etc. (default A4) */
    pageSize?:
        | "A0"
        | "A1"
        | "A2"
        | "A3"
        | "A4"
        | "A5"
        | "A6"
        | "A7"
        | "A8"
        | "A9"
        | "B0"
        | "B1"
        | "B10"
        | "B2"
        | "B3"
        | "B4"
        | "B5"
        | "B6"
        | "B7"
        | "B8"
        | "B9"
        | "C5E"
        | "Comm10E"
        | "DLE"
        | "Executive"
        | "Folio"
        | "Ledger"
        | "Legal"
        | "Letter"
        | "Tabloid"
        | undefined;
    /** Page width in unitreal (e.g 10mm 2cm 0.5in) */
    pageWidth?: string | undefined;
    /** Do not use lossless compression on pdf objects */
    noPdfCompression?: boolean | undefined;
    /** Debug prints stderr messages */
    debug?: boolean | ((data: Buffer) => void) | undefined;
    /** debugStdOut prints any stdout warning messages */
    debugStdOut?: boolean | undefined;
    /** The title of the generated pdf file (The title of the first document is used if not specified) */
    title?: string | undefined;
    /** Ignore warnings */
    ignore?: ReadonlyArray<string | RegExp> | undefined;
    /** If defined only output to this path */
    output?: string | undefined;

    /*******************
     * Outline options *
     *******************/
    // Dump the default TOC xsl style sheet to stdout */
    dumpDefaultTocXsl?: boolean | undefined;
    /** Dump the outline to a file */
    dumpOutline?: string | undefined;
    /** Put an outline into the pdf (default) */
    outline?: boolean | undefined;
    /** Do not put an outline into the pdf */
    noOutline?: boolean | undefined;
    /** Set the depth of the outline (default 4) */
    outlineDepth?: boolean | undefined;

    /****************
     * Page options *
     ****************/

    /** Allow the file or files from the specified folder to be loaded (repeatable) */
    allow?: ReadonlyArray<string> | undefined;
    /** Do print background (default) */
    background?: boolean | undefined;
    /** Do not print background */
    noBackground?: boolean | undefined;
    /** Bypass proxy for host (repeatable) */
    bypassProxyFor?: ReadonlyArray<string> | undefined;
    /** Web cache directory */
    cacheDir?: string | undefined;
    /** Use this SVG file when rendering checked checkboxes */
    checkboxCheckedSvg?: string | undefined;
    /** Use this SVG file when rendering unchecked checkboxes */
    checkboxSvg?: string | undefined;
    /** Set an additional cookie (repeatable), value should be url encoded. */
    cookie?: ReadonlyArray<[string, string]> | undefined;
    /** Set an additional HTTP header (repeatable) */
    customHeader?: ReadonlyArray<[string, string]> | undefined;
    /** Add HTTP headers specified by --custom-header for each resource request. */
    customHeaderPropagation?: boolean | undefined;
    /** Do not add HTTP headers specified by --custom-header for each resource request. */
    noCustomHeaderPropagation?: boolean | undefined;
    /** Show javascript debugging output */
    debugJavascript?: boolean | undefined;
    /** Do not show javascript debugging output (default) */
    noDebugJavascript?: boolean | undefined;
    /**
     * Add a default header, with the name of the page to the left, and the page number to the right, this is short for:
     * --header-left='[webpage]'
     * --header-right='[page]/[toPage]' --top 2cm
     * --header-line
     */
    defaultHeader?: boolean | undefined;
    /** Set the default text encoding, for input */
    encoding?: string | undefined;
    /** Do not make links to remote web pages */
    disableExternalLinks?: boolean | undefined;
    /** Make links to remote web pages (default) */
    enableExternalLinks?: boolean | undefined;
    /** Do not turn HTML form fields into pdf form fields (default) */
    disableForms?: boolean | undefined;
    /** Turn HTML form fields into pdf form fields */
    enableForms?: boolean | undefined;
    /** Do load or print images (default) */
    images?: boolean | undefined;
    /** Do not load or print images */
    noImages?: boolean | undefined;
    /** Do not make local links */
    disableInternalLinks?: boolean | undefined;
    /** Make local links (default) */
    enableInternalLinks?: boolean | undefined;
    /** Do not allow web pages to run javascript */
    disableJavascript?: boolean | undefined;
    /** Do allow web pages to run javascript (default) */
    enableJavascript?: boolean | undefined;
    /** Wait some milliseconds for javascript finish (default 200) */
    javascriptDelay?: number | undefined;
    /** Keep relative external links as relative external links */
    keepRelativeLinks?: boolean | undefined;
    /** Specify how to handle pages that fail to load: abort, ignore or skip (default abort) */
    loadErrorHandling?: "abort" | "ignore" | "skip" | undefined;
    /** Specify how to handle media files that fail to load: abort, ignore or skip (default ignore) */
    loadMediaErrorHandling?: "abort" | "ignore" | "skip" | undefined;
    /** Do not allowed conversion of a local file to read in other local files, unless explicitly allowed with --allow (default) */
    disableLocalFileAccess?: boolean | undefined;
    /** Allowed conversion of a local file to read in other local files. */
    enableLocalFileAccess?: boolean | undefined;
    /** Minimum font size */
    minimumFontSize?: number | undefined;
    /** Do not include the page in the table of contents and outlines */
    excludeFromOutline?: boolean | undefined;
    /** Include the page in the table of contents and outlines (default) */
    includeInOutline?: boolean | undefined;
    /** Set the starting page number (default 0) */
    pageOffset?: number | undefined;
    /** HTTP Authentication password */
    password?: string | undefined;
    /** Disable installed plugins (default) */
    disablePlugins?: boolean | undefined;
    /** Enable installed plugins (plugins will likely not work) */
    enablePlugins?: boolean | undefined;
    /** Add an additional post field */
    post?: ReadonlyArray<[string, string]> | undefined;
    /** Post an additional file (repeatable) */
    postFile?: ReadonlyArray<[string, string]> | undefined;
    /** Use print media-type instead of screen */
    printMediaType?: boolean | undefined;
    /** Do not use print media-type instead of screen (default) */
    noPrintMediaType?: boolean | undefined;
    /** Use a proxy */
    proxy?: string | undefined;
    /** Use the proxy for resolving hostnames */
    proxyHostnameLookup?: boolean | undefined;
    /** Use this SVG file when rendering checked radiobuttons */
    radiobuttonCheckedSvg?: string | undefined;
    /** Use this SVG file when rendering unchecked radiobuttons */
    radiobuttonSvg?: string | undefined;
    /** Resolve relative external links into absolute links (default) */
    resolveRelativeLinks?: boolean | undefined;
    /** Run this additional javascript after the page is done loading (repeatable) */
    runScript?: ReadonlyArray<string> | undefined;
    /** Disable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio non-constant */
    disableSmartShrinking?: boolean | undefined;
    /** Enable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio non-constant (default) */
    enableSmartShrinking?: boolean | undefined;
    /** Path to the ssl client cert public key in OpenSSL PEM format, optionally followed by intermediate ca and trusted certs */
    sslCrtPath?: string | undefined;
    /** Password to ssl client cert private key */
    sslKeyPassword?: string | undefined;
    /** Path to ssl client cert private key in OpenSSL PEM format */
    sslKeyPath?: string | undefined;
    /** Stop slow running javascripts (default) */
    stopSlowScripts?: boolean | undefined;
    /** Do not Stop slow running javascripts */
    noStopSlowScripts?: boolean | undefined;
    /** Do not link from section header to toc (default) */
    disableTocBackLinks?: boolean | undefined;
    /** Link from section header to toc */
    enableTocBackLinks?: boolean | undefined;
    /** Specify a user style sheet, to load with every page */
    userStyleSheet?: string | undefined;
    /** HTTP Authentication username */
    username?: string | undefined;
    /**
     * Set viewport size if you have custom scrollbars or css attribute overflow to emulate window size
     * Format "1280x1024"
     */
    viewportSize?: string | undefined;
    /** Wait until window.status is equal to this string before rendering page */
    windowStatus?: string | undefined;
    /** Use this zoom factor (default 1) */
    zoom?: number | undefined;

    /*****************************
     * Header and footer options *
     *****************************/

    /** Centered footer text */
    footerCenter?: string | undefined;
    /** Set footer font name (default Arial) */
    footerFontName?: string | undefined;
    /** Set footer font size (default 12) */
    footerFontSize?: number | undefined;
    /** Adds a html footer should be an URL */
    footerHtml?: string | undefined;
    /** Left aligned footer text */
    footerLeft?: string | undefined;
    /** Display line above the footer */
    footerLine?: boolean | undefined;
    /** Do not display line above the footer (default) */
    noFooterLine?: boolean | undefined;
    /** Right aligned footer text */
    footerRight?: string | undefined;
    /** Spacing between footer and content in mm (default 0) */
    footerSpacing?: number | undefined;

    /** Centered header text */
    headerCenter?: string | undefined;
    /** Set header font name (default Arial) */
    headerFontName?: string | undefined;
    /** Set header font size (default 12) */
    headerFontSize?: number | undefined;
    /** Adds a html header should be an URL */
    headerHtml?: string | undefined;
    /** Left aligned header text */
    headerLeft?: string | undefined;
    /** Display line above the header */
    headerLine?: boolean | undefined;
    /** Do not display line above the header (default) */
    noHeaderLine?: boolean | undefined;
    /** Right aligned header text */
    headerRight?: string | undefined;
    /** Spacing between header and content in mm (default 0) */
    headerSpacing?: number | undefined;
    /** Replace [name] with value in header and footer (repeatable) */
    replace?: ReadonlyArray<[string, string]> | undefined;

    /***************
     * TOC options *
     ***************/
    /** Do not use dotted lines in the toc */
    disableDottedLines?: boolean | undefined;
    /** The header text of the toc (default Table of Contents) */
    tocHeaderText?: string | undefined;
    /** For each level of headings in the toc indent by this length (default 1em) */
    tocLevelIndentation?: string | undefined;
    /** Do not link from toc to sections */
    disableTocLinks?: boolean | undefined;
    /** For each level of headings in the toc the font is scaled by this factor (default 0.8) */
    tocTextSizeShrink?: number | undefined;
    /** Use the supplied xsl style sheet for printing the table of contents */
    xslStyleSheet?: string | undefined;

    /**************************************
     * Special keys for node implementation
     **************************************/
    /** Cover object */
    cover?: string | undefined;
    /** TOC object */
    toc?: string | undefined;
    /** Page object */
    page?: string | undefined;
}

export = wkhtmltopdf;
