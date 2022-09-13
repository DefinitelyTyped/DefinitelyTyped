export interface TransposeMdiv {
    [xmlId: string]: string;
}
export interface EngravingDefaults {
    arrowShaftThickness: number;
    barlineSeparation: number;
    beamSpacing: number;
    beamThickness: number;
    bracketThickness: number;
    dashedBarlineDashLength: number;
    dashedBarlineGapLength: number;
    dashedBarlineThickness: number;
    hairpinThickness: number;
    legerLineExtension: number;
    legerLineThickness: number;
    lyricLineThickness: number;
    octaveLineThickness: number;
    pedalLineThickness: number;
    repeatBarlineDotSeparation: number;
    repeatEndingLineThickness: number;
    slurEndpointThickness: number;
    slurMidpointThickness: number;
    staffLineThickness: number;
    stemThickness: number;
    subBracketThickness: number;
    textEnclosureThickness: number;
    thickBarlineThickness: number;
    thinBarlineThickness: number;
    tieEndpointThickness: number;
    tieMidpointThickness: number;
    tupletBracketThickness: number;
}

export interface VerovioOptions {
    /**********************
     * Base short options *
     **********************/

    /**
     * Select input format from: "abc", "darms", "humdrum", "mei", "pae", "xml" (musicxml)
     *
     * default: "mei"
     */
    inputFrom?: string;

    /**
     * (int) Scale of the output in percent
     *
     * default: 100
     *
     * max: 1000
     *
     * min: 1
     */
    scale?: number;

    /**
     * (int) Seed the random number generator for XML IDs (default is random)
     *
     * default: 0
     *
     * max: 2147483647
     *
     * min: 0
     */
    xmlIdSeed?: number;

    /****************************************
     * Input and page configuration options *
     ****************************************/

    /**
     * Adjust the page height to the height of the content
     *
     * default: false
     */
    adjustPageHeight?: boolean;

    /**
     * Adjust the page width to the width of the content
     *
     * default: false
     */
    adjustPageWidth?: boolean;

    /**
     * Define page and system breaks layout
     *
     * default: "auto"
     */
    breaks?: 'none' | 'auto' | 'line' | 'smart' | 'encoded';

    /**
     * (double) In smart breaks mode, the portion of system width usage at which an encoded sb will be used
     *
     * default: 0.66
     *
     * max: 1
     *
     * min: 0
     */
    breaksSmartSb?: number;

    /**
     * Control condensed score layout
     *
     * default: "auto"
     */
    condense?: 'none' | 'auto' | 'encoded';

    /**
     * When condensing a score also condense the first page
     *
     * default: false
     */
    condenseFirstPage?: boolean;

    /**
     * When condensing a score never condense the last system
     *
     * default: false
     */
    condenseNotLastSystem?: boolean;

    /**
     * When condensing a score also condense pages with a tempo change
     *
     * default: false
     */
    condenseTempoPages?: boolean;

    /**
     * Specify the linear spacing factor
     *
     * default: false
     */
    evenNoteSpacing?: boolean;

    /**
     * Expand all referenced elements in the expansion <xml:id>
     *
     * default: ""
     */
    expand?: string;

    /**
     * Control footer layout
     *
     * default: "auto"
     */
    footer?: 'none' | 'auto' | 'encoded' | 'always';

    /**
     * Control header layout
     *
     * default: "auto"
     */
    header?: 'none' | 'auto' | 'encoded';

    /**
     * Include type attributes when importing from Humdrum
     *
     * default: false
     */
    humType?: boolean;

    /**
     * Justify spacing vertically to fill the page
     *
     * default: false
     */
    justifyVertically?: boolean;

    /**
     * The landscape paper orientation flag
     *
     * default: false
     */
    landscape?: boolean;

    /**
     * Render ligatures as bracket instead of original notation
     *
     * default: false
     */
    ligatureAsBracket?: boolean;

    /**
     * Convert mensural sections to measure-based MEI
     *
     * default: false
     */
    mensuralToMeasure?: boolean;

    /**
     * (double) The last system is only justified if the unjustified width is greater than this percent
     *
     * default: 0.8
     *
     * max: 1
     *
     * min: 0
     */
    minLastJustification?: number;

    /**
     * Specify that the output in the SVG is given in mm (default is px)
     *
     * default: false
     */
    mmOutput?: boolean;

    /**
     * Move score definition (clef, keySig, meterSig, etc.) from scoreDef to staffDef
     *
     * default: false
     */
    moveScoreDefinitionToStaff?: boolean;

    /**
     * Do not justify the system
     *
     * default: false
     */
    noJustification?: boolean;

    /**
     * Render open control events
     *
     * default: false
     */
    openControlEvents?: boolean;

    /**
     * Writes MEI out with no line indenting or non-content newlines.
     *
     * default: false
     */
    outputFormatRaw?: boolean;

    /**
     * (int) Output indentation value for MEI and SVG
     *
     * default: 3
     *
     * max: 10
     *
     * min: 1
     */
    outputIndent?: number;

    /**
     * Output indentation with tabulation for MEI and SVG
     *
     * default: false
     */
    outputIndentTab?: boolean;

    /**
     * Output SMuFL characters as XML entities instead of hex byte codes
     *
     * default: false
     */
    outputSmuflXmlEntities?: boolean;

    /**
     * (int) The page height
     *
     * default: 2970
     *
     * max: 60000
     *
     * min: 100
     */
    pageHeight?: number;

    /**
     * (int) The page bottom margin
     *
     * default: 50
     *
     * max: 500
     *
     * min: 0
     */
    pageMarginBottom?: number;

    /**
     * (int) The page left margin
     *
     * default: 50
     *
     * max: 500
     *
     * min: 0
     */
    pageMarginLeft?: number;

    /**
     * (int) The page right margin
     *
     * default: 50
     *
     * max: 500
     *
     * min: 0
     */
    pageMarginRight?: number;

    /**
     * (int) The page top margin
     *
     * default: 50
     *
     * max: 500
     *
     * min: 0
     */
    pageMarginTop?: number;

    /**
     * (int) The page width
     *
     * default: 2100
     *
     * max: 60000
     *
     * min: 100
     */
    pageWidth?: number;

    /**
     * The global pedal style
     *
     * default: "auto"
     */
    pedalStyle?: 'auto' | 'line' | 'pedstar' | 'altpedstar';

    /**
     * Preserves the analytical markup in MEI
     *
     * default: false
     */
    preserveAnalyticalMarkup?: boolean;

    /**
     * Remove XML IDs in the MEI output that are not referenced
     *
     * default: false
     */
    removeIds?: boolean;

    /**
     * Display the total runtime on command-line
     *
     * default: false
     */
    showRuntime?: boolean;

    /**
     * Scale down page content to fit the page height if needed
     *
     * default: false
     */
    shrinkToFit?: boolean;

    /**
     * Align staccato and staccatissimo articulations with center of the note
     *
     * default: false
     */
    staccatoCenter?: boolean;

    /**
     * Add additional attribute for graphical elements in SVG as "data-*", for example, "note@pname" would add a "data-pname" to all note elements
     *
     * default: []
     */
    svgAdditionalAttribute?: string[];

    /**
     * Include bounding boxes in SVG output
     *
     * default: false
     */
    svgBoundingBoxes?: boolean;

    /**
     * CSS (as a string) to be added to the SVG output
     *
     * default: ""
     */
    svgCss?: string;

    /**
     * Writes SVG out with no line indenting or non-content newlines
     *
     * default: false
     */
    svgFormatRaw?: boolean;

    /**
     * Write data-id and data-class attributes for JS usage and id clash avoidance
     *
     * default: false
     */
    svgHtml5?: boolean;

    /**
     * Removes the xlink: prefix on href attributes for compatibility with some newer browsers
     *
     * default: false
     */
    svgRemoveXlink?: boolean;

    /**
     * Use viewBox on svg root element for easy scaling of document
     *
     * default: false
     */
    svgViewBox?: boolean;

    /**
     * (int) The MEI unit (1⁄2 of the distance between the staff lines)
     *
     * default: 9
     *
     * max: 20
     *
     * min: 6
     */
    unit?: number;

    /**
     * Use brace glyph from current font
     *
     * default: false
     */
    useBraceGlyph?: boolean;

    /**
     * Use information in the <facsimile> element to control the layout
     *
     * default: false
     */
    useFacsimile?: boolean;

    /**
     * Use the pgFooter for all pages
     *
     * default: false
     */
    usePgFooterForAll?: boolean;

    /**
     * Use the pgHeader for all pages
     *
     * default: false
     */
    usePgHeaderForAll?: boolean;

    /**
     * Seed the generator for XML IDs using the checksum of the input data
     *
     * default: false
     */
    xmlIdChecksum?: boolean;

    /**************************
     * General layout options *
     **************************/

    /**
     * (double) The default distance between multiple barlines when locked together
     *
     * default: 0.8
     *
     * max: 2
     *
     * min: 0.5
     */
    barLineSeparation?: number;

    /**
     * (double) The barline width
     *
     * default: 0.3
     *
     * max: 0.8
     *
     * min: 0.1
     */
    barLineWidth?: number;

    /**
     * For notes in beams, stems will stop at first outermost sub-beam without crossing it
     *
     * default: false
     */
    beamFrenchStyle?: boolean;

    /**
     * (int) The maximum beam slope
     *
     * default: 10
     *
     * max: 20
     *
     * min: 0
     */
    beamMaxSlope?: number;

    /**
     * (int) The minimum beam slope
     *
     * default: 0
     *
     * max: 0
     *
     * min: 0
     */
    beamMinSlope?: number;

    /**
     * Mixed beams will be drawn even if there is not enough space
     *
     * default: false
     */
    beamMixedPreserve?: boolean;

    /**
     * (double) The minimal stem length in MEI units used to draw mixed beams
     *
     * default: 3.5
     *
     * max: 8
     *
     * min: 1
     */
    beamMixedStemMin?: number;

    /**
     * (double) The thickness of the system bracket
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0.5
     */
    bracketThickness?: number;

    /**
     * Prevent single measures on the last page by fitting it into previous system
     *
     * default: false
     */
    breaksNoWidow?: boolean;

    /**
     * (double) The dash length of dashed barlines
     *
     * default: 1.14
     *
     * max: 5
     *
     * min: 0.1
     */
    dashedBarLineDashLength?: number;

    /**
     * (double) The gap length of dashed barlines
     *
     * default: 1.14
     *
     * max: 5
     *
     * min: 0.1
     */
    dashedBarLineGapLength?: number;

    /**
     * (double) The default distance from the staff for dynamic marks
     *
     * default: 1
     *
     * max: 16
     *
     * min: 0.5
     */
    dynamDist?: number;

    /**
     * Json describing defaults for engraving SMuFL elements
     */
    engravingDefaults?: EngravingDefaults;

    /**
     * (double) The scale of fingering font compared to default font size
     *
     * default: 0.75
     *
     * max: 1
     *
     * min: 0.25
     */
    fingeringScale?: number;

    /**
     * Set the music font
     *
     * default: "Leipzig"
     */
    font?: string;

    /**
     * (double) The grace size ratio numerator
     *
     * default: 0.75
     *
     * max: 1
     *
     * min: 0.5
     */
    graceFactor?: number;

    /**
     * Align grace notes rhythmically with all staves
     *
     * default: false
     */
    graceRhythmAlign?: boolean;

    /**
     * Align the right position of a grace group with all staves
     *
     * default: false
     */
    graceRightAlign?: boolean;

    /**
     * (double) The haripin size in MEI units
     *
     * default: 3
     *
     * max: 8
     *
     * min: 1
     */
    hairpinSize?: number;

    /**
     * (double) The thickness of the hairpin
     *
     * default: 0.2
     *
     * max: 0.8
     *
     * min: 0.1
     */
    hairpinThickness?: number;

    /**
     * Fonts that emulate hand writing and require special handling
     *
     * default: []
     */
    handwrittenFont?: string[];

    /**
     * (double) The default distance from the staff of harmonic indications
     *
     * default: 1
     *
     * max: 16
     *
     * min: 0.5
     */
    harmDist?: number;

    /**
     * (double) Space between staves inside a braced group justification
     *
     * default: 1
     *
     * max: 10
     *
     * min: 0
     */
    justificationBraceGroup?: number;

    /**
     * (double) Space between staves inside a bracketed group justification
     *
     * default: 1
     *
     * max: 10
     *
     * min: 0
     */
    justificationBracketGroup?: number;

    /**
     * (double) Maximum ratio of justifiable height to page height that can be used for the vertical justification
     *
     * default: 0.3
     *
     * max: 1
     *
     * min: 0
     */
    justificationMaxVertical?: number;

    /**
     * (double) The staff justification
     *
     * default: 1
     *
     * max: 10
     *
     * min: 0
     */
    justificationStaff?: number;

    /**
     * (double) The system spacing justification
     *
     * default: 1
     *
     * max: 10
     *
     * min: 0
     */
    justificationSystem?: number;

    /**
     * (double) The amount by which a ledger line should extend either side of a notehead
     *
     * default: 0.54
     *
     * max: 1
     *
     * min: 0.2
     */
    ledgerLineExtension?: number;

    /**
     * (double) The thickness of the ledger lines
     *
     * default: 0.25
     *
     * max: 0.5
     *
     * min: 0.1
     */
    ledgerLineThickness?: number;

    /**
     * (double) The lyric hyphen and dash length
     *
     * default: 1.2
     *
     * max: 3
     *
     * min: 0.5
     */
    lyricHyphenLength?: number;

    /**
     * (double) The lyric extender line thickness
     *
     * default: 0.25
     *
     * max: 0.5
     *
     * min: 0.1
     */
    lyricLineThickness?: number;

    /**
     * Do not show hyphens at the beginning of a system
     *
     * default: false
     */
    lyricNoStartHyphen?: boolean;

    /**
     * (double) The lyrics size in MEI units
     *
     * default: 4.5
     *
     * max: 8
     *
     * min: 2
     */
    lyricSize?: number;

    /**
     * (double) The minmal margin above the lyrics in MEI units
     *
     * default: 2
     *
     * max: 8
     *
     * min: 0
     */
    lyricTopMinMargin?: number;

    /**
     * Collapse empty verse lines in lyrics
     *
     * default: false
     */
    lyricVerseCollapse?: boolean;

    /**
     * (double) The lyric word space length
     *
     * default: 1.2
     *
     * max: 3
     *
     * min: 0.5
     */
    lyricWordSpace?: number;

    /**
     * (int) The minimal measure width in MEI units
     *
     * default: 15
     *
     * max: 30
     *
     * min: 1
     */
    measureMinWidth?: number;

    /**
     * (int) How frequently to place measure numbers
     *
     * default: 0
     *
     * max: 64
     *
     * min: 0
     */
    mnumInterval?: number;

    /**
     * Rendering style of multiple measure rests
     *
     * default: "auto"
     */
    multiRestStyle?: 'auto' | 'default' | 'block' | 'symbols';

    /**
     * (double) The thickness of the multi rest in unit
     *
     * default: 2
     *
     * max: 6
     *
     * min: 0.5
     */
    multiRestThickness?: number;

    /**
     * Use alternative symbols for displaying octaves
     *
     * default: false
     */
    octaveAlternativeSymbols?: boolean;

    /**
     * (double) The thickness of the line used for an octave line
     *
     * default: 0.2
     *
     * max: 1
     *
     * min: 0.1
     */
    octaveLineThickness?: number;

    /**
     * (double) The thickness of the line used for piano pedaling
     *
     * default: 0.2
     *
     * max: 1
     *
     * min: 0.1
     */
    pedalLineThickness?: number;

    /**
     * (double) The default horizontal distance between the dots and the inner barline of a repeat barline
     *
     * default: 0.36
     *
     * max: 1
     *
     * min: 0.1
     */
    repeatBarLineDotSeparation?: number;

    /**
     * (double) Repeat and ending line thickness
     *
     * default: 0.15
     *
     * max: 2
     *
     * min: 0.1
     */
    repeatEndingLineThickness?: number;

    /**
     * (double) Slur curve factor - high value means rounder slurs
     *
     * default: 1
     *
     * max: 5
     *
     * min: 0.2
     */
    slurCurveFactor?: number;

    /**
     * (double) Slur endpoint flexibility - allow more endpoint movement during adjustment
     *
     * default: 0
     *
     * max: 1
     *
     * min: 0
     */
    slurEndpointFlexibility?: number;

    /**
     * (double) The endpoint slur thickness in MEI units
     *
     * default: 0.1
     *
     * max: 0.25
     *
     * min: 0.05
     */
    slurEndpointThickness?: number;

    /**
     * (double) Slur safety distance in MEI units to obstacles
     *
     * default: 1
     *
     * max: 4
     *
     * min: 0.1
     */
    slurMargin?: number;

    /**
     * (int) The maximum slur slope in degrees
     *
     * default: 60
     *
     * max: 85
     *
     * min: 30
     */
    slurMaxSlope?: number;

    /**
     * (double) The midpoint slur thickness in MEI units
     *
     * default: 0.6
     *
     * max: 1.2
     *
     * min: 0.2
     */
    slurMidpointThickness?: number;

    /**
     * (double) Slur symmetry - high value means more symmetric slurs
     *
     * default: 0
     *
     * max: 1
     *
     * min: 0
     */
    slurSymmetry?: number;

    /**
     * (int) Minimum space between staves inside a braced group in MEI units
     *
     * default: 12
     *
     * max: 48
     *
     * min: 0
     */
    spacingBraceGroup?: number;

    /**
     * (int) Minimum space between staves inside a bracketed group in MEI units
     *
     * default: 12
     *
     * max: 48
     *
     * min: 0
     */
    spacingBracketGroup?: number;

    /**
     * Detect long duration for adjusting spacing
     *
     * default: false
     */
    spacingDurDetection?: boolean;

    /**
     * (double) Specify the linear spacing factor
     *
     * default: 0.25
     *
     * max: 1
     *
     * min: 0
     */
    spacingLinear?: number;

    /**
     * (double) Specify the non-linear spacing factor
     *
     * default: 0.6
     *
     * max: 1
     *
     * min: 0
     */
    spacingNonLinear?: number;

    /**
     * (int) The staff minimal spacing in MEI units
     *
     * default: 12
     *
     * max: 48
     *
     * min: 0
     */
    spacingStaff?: number;

    /**
     * (int) The system minimal spacing in MEI units
     *
     * default: 12
     *
     * max: 48
     *
     * min: 0
     */
    spacingSystem?: number;

    /**
     * (double) The staff line width in unit
     *
     * default: 0.15
     *
     * max: 0.3
     *
     * min: 0.1
     */
    staffLineWidth?: number;

    /**
     * (double) The stem width
     *
     * default: 0.2
     *
     * max: 0.5
     *
     * min: 0.1
     */
    stemWidth?: number;

    /**
     * (double) The thickness of system sub-bracket
     *
     * default: 0.2
     *
     * max: 2
     *
     * min: 0.1
     */
    subBracketThickness?: number;

    /**
     * The display of system dividers
     *
     * default: "auto"
     */
    systemDivider?: 'none' | 'auto' | 'left' | 'left-right';

    /**
     * (int) Maximun number of systems per page
     *
     * default: 0
     *
     * max: 24
     *
     * min: 0
     */
    systemMaxPerPage?: number;

    /**
     * (double) The thickness of the line text enclosing box
     *
     * default: 0.2
     *
     * max: 0.8
     *
     * min: 0.1
     */
    textEnclosureThickness?: number;

    /**
     * (double) The thickness of the thick barline
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0.5
     */
    thickBarlineThickness?: number;

    /**
     * (double) The Endpoint tie thickness in MEI units
     *
     * default: 0.1
     *
     * max: 0.25
     *
     * min: 0.05
     */
    tieEndpointThickness?: number;

    /**
     * (double) The midpoint tie thickness in MEI units
     *
     * default: 0.5
     *
     * max: 1
     *
     * min: 0.2
     */
    tieMidpointThickness?: number;

    /**
     * (double) The minimum length of tie in MEI units
     *
     * default: 2
     *
     * max: 10
     *
     * min: 0
     */
    tieMinLength?: number;

    /**
     * (double) The thickness of the tuplet bracket
     *
     * default: 0.2
     *
     * max: 0.8
     *
     * min: 0.1
     */
    tupletBracketThickness?: number;

    /**
     * Placement of tuplet number on the side of the note head
     *
     * default: false
     */
    tupletNumHead?: boolean;

    /************************************
     * Element selectors and processing *
     ************************************/

    /**
     * Set the xPath query for selecting <app> child elements, for example: "./rdg[contains(@source, 'source-id')]"; by default the <lem> or the first <rdg> is selected
     *
     * default: []
     */
    appXPathQuery?: string[];

    /**
     * Set the xPath query for selecting <choice> child elements, for example: "./orig"; by default the first child is selected
     *
     * default: []
     */
    choiceXPathQuery?: string[];

    /**
     * Load and render all <mdiv> elements in the MEI files
     *
     * default: false
     */
    mdivAll?: boolean;

    /**
     * Set the xPath query for selecting the <mdiv> to be rendered; only one <mdiv> can be rendered
     *
     * default: ""
     */
    mdivXPathQuery?: string;

    /**
     * Set the xPath query for selecting <subst> child elements, for example: "./del"; by default the first child is selected
     *
     * default: []
     */
    substXPathQuery?: string[];

    /**
     * Transpose the entire content
     *
     * default: ""
     */
    transpose?: string;

    /**
     * Json mapping the mdiv ids to the corresponding transposition
     */
    transposeMdiv?: TransposeMdiv;

    /**
     * Transpose only the selected content and ignore unselected editorial content
     *
     * default: false
     */
    transposeSelectedOnly?: boolean;

    /**
     * Transpose to sounding pitch by evaluating @trans.semi
     *
     * default: false
     */
    transposeToSoundingPitch?: boolean;

    /*******************
     * Element margins *
     *******************/

    /**
     * (double) The margin for artic in MEI units
     *
     * default: 0.75
     *
     * max: 10
     *
     * min: 0
     */
    bottomMarginArtic?: number;

    /**
     * (double) The margin for harm in MEI units
     *
     * default: 1
     *
     * max: 10
     *
     * min: 0
     */
    bottomMarginHarm?: number;

    /**
     * (double) The margin for header in MEI units
     *
     * default: 2
     *
     * max: 24
     *
     * min: 0
     */
    bottomMarginHeader?: number;

    /**
     * (double) The default bottom margin
     *
     * default: 0.5
     *
     * max: 5
     *
     * min: 0
     */
    defaultBottomMargin?: number;

    /**
     * (double) The default left margin
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    defaultLeftMargin?: number;

    /**
     * (double) The default right margin
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    defaultRightMargin?: number;

    /**
     * (double) The default top margin
     *
     * default: 0.5
     *
     * max: 6
     *
     * min: 0
     */
    defaultTopMargin?: number;

    /**
     * (double) The margin for accid in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginAccid?: number;

    /**
     * (double) The margin for barLine in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginBarLine?: number;

    /**
     * (double) The margin for beatRpt in MEI units
     *
     * default: 2
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginBeatRpt?: number;

    /**
     * (double) The margin for chord in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginChord?: number;

    /**
     * (double) The margin for clef in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginClef?: number;

    /**
     * (double) The margin for keySig in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginKeySig?: number;

    /**
     * (double) The margin for left barLine in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginLeftBarLine?: number;

    /**
     * (double) The margin for mRest in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginMRest?: number;

    /**
     * (double) The margin for mRpt2 in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginMRpt2?: number;

    /**
     * (double) The margin for mensur in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginMensur?: number;

    /**
     * (double) The margin for meterSig in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginMeterSig?: number;

    /**
     * (double) The margin for multiRest in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginMultiRest?: number;

    /**
     * (double) The margin for multiRpt in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginMultiRpt?: number;

    /**
     * (double) The margin for note in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginNote?: number;

    /**
     * (double) The margin for rest in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginRest?: number;

    /**
     * (double) The margin for right barLine in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginRightBarLine?: number;

    /**
     * (double) The margin for tabDurSym in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    leftMarginTabDurSym?: number;

    /**
     * (double) The right margin for accid in MEI units
     *
     * default: 0.5
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginAccid?: number;

    /**
     * (double) The right margin for barLine in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginBarLine?: number;

    /**
     * (double) The right margin for beatRpt in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginBeatRpt?: number;

    /**
     * (double) The right margin for chord in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginChord?: number;

    /**
     * (double) The right margin for clef in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginClef?: number;

    /**
     * (double) The right margin for keySig in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginKeySig?: number;

    /**
     * (double) The right margin for left barLine in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginLeftBarLine?: number;

    /**
     * (double) The right margin for mRest in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginMRest?: number;

    /**
     * (double) The right margin for mRpt2 in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginMRpt2?: number;

    /**
     * (double) The right margin for mensur in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginMensur?: number;

    /**
     * (double) The right margin for meterSig in MEI units
     *
     * default: 1
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginMeterSig?: number;

    /**
     * (double) The right margin for multiRest in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginMultiRest?: number;

    /**
     * (double) The right margin for multiRpt in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginMultiRpt?: number;

    /**
     * (double) The right margin for note in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginNote?: number;

    /**
     * (double) The right margin for rest in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginRest?: number;

    /**
     * (double) The right margin for right barLine in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginRightBarLine?: number;

    /**
     * (double) The right margin for tabDurSym in MEI units
     *
     * default: 0
     *
     * max: 2
     *
     * min: 0
     */
    rightMarginTabDurSym?: number;

    /**
     * (double) The margin for artic in MEI units
     *
     * default: 0.75
     *
     * max: 10
     *
     * min: 0
     */
    topMarginArtic?: number;

    /**
     * (double) The margin for harm in MEI units
     *
     * default: 1
     *
     * max: 10
     *
     * min: 0
     */
    topMarginHarm?: number;

    /**
     * (double) The margin for footer in MEI units
     *
     * default: 2
     *
     * max: 24
     *
     * min: 0
     */
    topMarginPgFooter?: number;

    /****************
     * Midi options *
     ****************/

    /**
     * Skip cue notes in MIDI output
     *
     * default: false
     */
    midiNoCue?: boolean;

    /**
     * (double) The MIDI tempo adjustment factor
     *
     * default: 1
     *
     * max: 4
     *
     * min: 0.2
     */
    midiTempoAdjustment?: number;
}
