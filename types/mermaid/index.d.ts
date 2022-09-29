// Type definitions for mermaid 9.1
// Project: https://github.com/knsv/mermaid#readme
// Definitions by: Geoffrey Gilmore <https://github.com/ggilmore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The object containing configurations specific for flowcharts.
 */
export interface FlowChartConfig {
    /**
     * Amount of padding around the diagram as a whole.
     *
     * The amount of padding around the diagram as a whole so that embedded diagrams have margins, expressed in pixels.
     *
     * @default 8
     */
    diagramPadding?: number;

    /**
     * Flag for setting whether or not a html tag should be used for rendering labels on the edges.
     *
     * @default true
     */
    htmlLabels?: boolean;

    /**
     * Defines the spacing between nodes on the same level.
     *
     * Pertains to horizontal spacing for TB (top to bottom) or BT (bottom to top) graphs, and the vertical spacing for LR as well as RL graphs.
     *
     * @default 50
     */
    nodeSpacing?: number;

    /**
     * Defines the spacing between nodes on different levels.
     *
     * Pertains to vertical spacing for TB (top to bottom) or BT (bottom to top), and the horizontal spacing for LR as well as RL graphs.
     *
     * @default 50
     */
    rankSpacing?: number;

    /**
     * Defines how mermaid renders curves for flowcharts.
     *
     * @default 'basis'
     */
    curve?: 'basis' | 'cardinal' | 'linear';

    /**
     * When this flag is set the height and width is set to 100% and is then scaling with the available space if not the absolute space required is used.
     *
     * @default true
     */
    useMaxWidth?: boolean;

    /**
     * Decides which rendering engine that is to be used for the rendering. Legal values are?: dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid.
     *
     * @default 'dagre-d3'
     */
    defaultRenderer?: 'dagre-d3' | 'dagre-wrapper';
}

/**
 * The object containing configurations specific for sequence diagrams
 */
export interface SequenceConfig {
    /**
     * Width of the activation rect.
     *
     * @default 10
     */
    activationWidth?: number;

    /**
     * Margin to the right and left of the sequence diagram
     *
     * @default 50
     */
    diagramMarginX?: number;

    /**
     * Margin to the over and under the sequence diagram
     *
     * @default 10
     */
    diagramMarginY?: number;

    /**
     * Margin between actors
     *
     * @default 10
     */
    actorMargin?: number;

    /**
     * Width of actor boxes
     *
     * @default 150
     */
    width?: number;

    /**
     * Height of actor boxes
     *
     * @default 65
     */
    height?: number;

    /**
     * Margin around loop boxes
     *
     * @default 10
     */
    boxMargin?: number;

    /**
     * Margin around the text in loop/alt/opt boxes
     *
     * @default 5
     */
    boxTextMargin?: number;

    /**
     * Margin around notes
     *
     * @default 10
     */
    noteMargin?: number;

    /**
     * Space between messages
     *
     * @default 35
     */
    messageMargin?: number;

    /**
     * Multiline message alignment
     *
     * @default 'center'
     */
    messageAlign?: 'center' | 'left' | 'right';

    /**
     * Mirror actors under diagram
     *
     * @default true
     */
    mirrorActors?: boolean;

    /**
     * Forces actor popup menus to always be visible (to support E2E testing).
     *
     * @default false
     */
    forceMenus?: boolean;

    /**
     * Prolongs the edge of the diagram downwards
     *
     * Depending on css styling this might need adjustment.
     *
     * @default 1
     */
    bottomMarginAdj?: number;

    /**
     * When this flag is set to true, the height and width is set to 100% and is then scaling with the available space. If set to false, the absolute space required is used.
     *
     * @default true
     */
    useMaxWidth?: boolean;

    /**
     * Display curve arrows as right angles
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a curve
     *
     * @default false
     */
    rightAngles?: boolean;

    /**
     * This will show the node numbers
     *
     * @default false
     */
    showSequenceNumbers?: boolean;

    /**
     * This sets the font size of the actor's description
     *
     * @default 14
     */
    actorFontSize?: number;

    /**
     * This sets the font family of the actor's description
     *
     * @default '"Open Sans", sans-serif'
     */
    actorFontFamily?: string;

    /**
     * This sets the font weight of the actor's description
     *
     * @default 400
     */
    actorFontWeight?: number;

    /**
     * This sets the font size of actor-attached notes
     *
     * @default 14
     */
    noteFontSize?: number;

    /**
     * This sets the font family of actor-attached notes.
     *
     * @default '"trebuchet ms", verdana, arial, sans-serif'
     */
    noteFontFamily?: string;

    /**
     * This sets the font weight of the note's description
     *
     * @default 400
     */
    noteFontWeight?: number;

    /**
     * This sets the text alignment of actor-attached notes
     *
     * @default 'center'
     */
    noteAlign?: 'center' | 'left' | 'right';

    /**
     * This sets the font size of actor messages
     *
     * @default 16
     */
    messageFontSize?: number;

    /**
     * This sets the font family of actor messages
     *
     * @default '"trebuchet ms", verdana, arial, sans-serif'
     */
    messageFontFamily?: string;

    /**
     * This sets the font weight of the message's description
     *
     * @default 400
     */
    messageFontWeight?: number;

    /**
     * This sets the auto-wrap state for the diagram
     *
     * @default false
     */
    wrap?: boolean;

    /**
     * This sets the auto-wrap padding for the diagram (sides only)
     *
     * @default 0
     */
    wrapPadding?: number;

    /**
     * This sets the width of the loop-box (loop, alt, opt, par)
     *
     * @default 50
     */
    labelBoxWidth?: number;

    /**
     * This sets the height of the loop-box (loop, alt, opt, par)
     *
     * @default 20
     */
    labelBoxHeight?: number;
}

/**
 * The object containing configurations specific for gantt diagrams
 */
export interface GanttConfig {
    /**
     * Margin top for the text over the gantt diagram
     *
     * @default 25
     */
    titleTopMargin?: number;

    /**
     * The height of the bars in the graph
     *
     * @default 20
     */
    barHeight?: number;

    /**
     * The margin between the different activities in the gantt diagram
     *
     * @default 4
     */
    barGap?: number;

    /**
     * Margin between title and gantt diagram and between axis and gantt diagram.
     *
     * @default 50
     */
    topPadding?: number;

    /**
     * The space allocated for the section name to the right of the activities
     *
     * @default 75
     */
    rightPadding?: number;

    /**
     * The space allocated for the section name to the left of the activities
     *
     * @default 75
     */
    leftPadding?: number;

    /**
     * Vertical starting position of the grid lines
     *
     * @default 35
     */
    gridLineStartPadding?: number;

    /**
     * Font size
     *
     * @default 11
     */
    fontSize?: number;

    /**
     * Font size for sections
     *
     * @default 11
     */
    sectionFontSize?: number;

    /**
     * The number of alternating section styles
     *
     * @default 4
     */
    numberSectionStyles?: number;

    /**
     * Datetime format of the axis
     *
     * This might need adjustment to match your locale and preferences
     *
     * @default '%Y-%m-%d'
     */
    axisFormat?: string;

    /**
     * When this flag is set the height and width is set to 100% and is then scaling with the available space if not the absolute space required is used.
     *
     * @default true
     */
    useMaxWidth?: boolean;

    /**
     * When this flag is set date labels will be added to the top of the chart
     *
     * @default false
     */
    topAxis?: boolean;
}

/**
 * The object containing configurations specific for journey diagrams
 */
export interface JourneyConfig {
    /**
     * Margin to the right and left of the sequence diagram
     *
     * @default 50
     */
    diagramMarginX?: number;

    /**
     * Margin to the over and under the sequence diagram.
     *
     * @default 10
     */
    diagramMarginY?: number;

    /**
     * Margin between actors
     *
     * @default 50
     */
    actorMargin?: number;

    /**
     * Width of actor boxes
     *
     * @default 150
     */
    width?: number;

    /**
     * Height of actor boxes
     *
     * @default 65
     */
    height?: number;

    /**
     * Margin around loop boxes
     *
     * @default 10
     */
    boxMargin?: number;

    /**
     * Margin around the text in loop/alt/opt boxes
     *
     * @default 5
     */
    boxTextMargin?: number;

    /**
     * Margin around notes
     *
     * @default 10
     */
    noteMargin?: number;

    /**
     * Space between messages.
     *
     * @default 35
     */
    messageMargin?: number;

    /**
     * Multiline message alignment
     *
     * @default 'center'
     */
    messageAlign?: 'center' | 'left' | 'right';

    /**
     * Prolongs the edge of the diagram downwards
     *
     * Depending on css styling this might need adjustment.
     *
     * @default 1
     */
    bottomMarginAdj?: number;

    /**
     * When this flag is set the height and width is set to 100% and is then scaling with the available space if not the absolute space required is used.
     *
     * @default true
     */
    useMaxWidth?: boolean;

    /**
     * Curved Arrows become Right Angles
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a curves
     *
     * @default false
     */
    rightAngles?: boolean;

    /**
     * Decides which rendering engine that is to be used for the rendering. Legal values are?: dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid
     *
     * @default 'dagre-d3'
     */
    defaultRenderer?: 'dagre-d3' | 'dagre-wrapper';
}

/**
 * The object containing configurations specific for entity relationship diagrams
 */
export interface ERConfig {
    /**
     * Amount of padding around the diagram as a whole
     *
     * The amount of padding around the diagram as a whole so that embedded diagrams have margins, expressed in pixels
     *
     * @default 20
     */
    diagramPadding?: number;

    /**
     * Directional bias for layout of entities.
     *
     * 'TB' for Top-Bottom, 'BT' for Bottom-Top, 'LR' for Left-Right, or 'RL' for Right to Left.
     *
     * T = top, B = bottom, L = left, and R = right.
     *
     * @default 'TB'
     */
    layoutDirection?: 'BT' | 'LR' | 'RL' | 'TB';

    /**
     * The minimum width of an entity box
     *
     * @default 100
     */
    minEntityWidth?: number;

    /**
     * The minimum height of an entity box
     *
     * @default 75
     */
    minEntityHeight?: number;

    /**
     * Minimum internal padding between text in box and box borders
     *
     * @default 15
     */
    entityPadding?: number;

    /**
     * Stroke color of box edges and lines
     *
     * @default 'gray'
     */
    stroke?: string;

    /**
     * Fill color of entity boxes
     *
     * @default 'honeydew'
     */
    fill?: string;

    /**
     * Font Size in pixels
     *
     * @default 12
     */
    fontSize?: number;

    /**
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on available space. If set to false, the diagram reserves its absolute width.
     *
     * @default true
     */
    useMaxWidth?: boolean;
}

/**
 * The object containing configurations specific for pie diagrams
 */
export interface PieConfig {
    /**
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on available space. If set to false, the diagram reserves its absolute width.
     *
     * @default true
     */
    useMaxWidth?: boolean;
}

/**
 * The object containing configurations specific for req diagrams
 */
export interface RequirementConfig {
    /**
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on available space. If set to false, the diagram reserves its absolute width.
     *
     * @default true
     */
    useMaxWidth?: boolean;
}

/**
 * The object containing configurations specific for c4 diagrams
 */
export interface C4Config {
    /**
     * Margin to the right and left of the c4 diagram
     *
     * @default 50
     */
    diagramMarginX?: number;

    /**
     * Margin to the over and under the c4 diagram
     *
     * @default 10
     */
    diagramMarginY?: number;

    /**
     * Margin between shapes
     *
     * @default 50
     */
    c4ShapeMargin?: number;

    /**
     * Padding between shapes
     *
     * @default 20
     */
    c4ShapePadding?: number;

    /**
     * Width of person boxes
     *
     * @default 216
     */
    width?: number;

    /**
     * Height of person boxes
     *
     * @default 60
     */
    height?: number;

    /**
     * Margin around boxes
     *
     * @default 10
     */
    boxMargin?: number;

    /**
     * When this flag is set to true, the height and width is set to 100% and is then scaling with the available space. If set to false, the absolute space required is used.
     *
     * @default true
     */
    useMaxWidth?: boolean;

    /**
     * How many shapes to place in each row.
     *
     * @default 4
     */
    c4ShapeInRow?: number;

    /**
     * How many boundarys to place in each row.
     *
     * @default 2
     */
    c4BoundaryInRow?: number;

    /**
     * This sets the font size of Person shape for the diagram
     *
     * @default 14
     */
    personFontSize?: number;

    /**
     * This sets the font family of Person shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    personFontFamily?: string;

    /**
     * This sets the font weight of Person shape for the diagram
     *
     * @default 'normal'
     */
    personFontWeight?: string;

    /**
     * This sets the font size of External Person shape for the diagram
     *
     * @default 14
     */
    external_personFontSize?: number;

    /**
     * This sets the font family of External Person shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_personFontFamily?: string;

    /**
     * This sets the font weight of External Person shape for the diagram
     *
     * @default 'normal'
     */
    external_personFontWeight?: string;

    /**
     * This sets the font size of System shape for the diagram
     *
     * @default 14
     */
    systemFontSize?: number;

    /**
     * This sets the font family of System shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    systemFontFamily?: string;

    /**
     * This sets the font weight of System shape for the diagram
     *
     * @default 'normal'
     */
    systemFontWeight?: string;

    /**
     * This sets the font size of External System shape for the diagram
     *
     * @default 14
     */
    external_systemFontSize?: number;

    /**
     * This sets the font family of External System shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_systemFontFamily?: string;

    /**
     * This sets the font weight of External System shape for the diagram
     *
     * @default 'normal'
     */
    external_systemFontWeight?: string;

    /**
     * This sets the font size of System DB shape for the diagram
     *
     * @default 14
     */
    system_dbFontSize?: number;

    /**
     * This sets the font family of System DB shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    system_dbFontFamily?: string;

    /**
     * This sets the font weight of System DB shape for the diagram
     *
     * @default 'normal'
     */
    system_dbFontWeight?: string;

    /**
     * This sets the font size of External System DB shape for the diagram
     *
     * @default 14
     */
    external_system_dbFontSize?: number;

    /**
     * This sets the font family of External System DB shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_system_dbFontFamily?: string;

    /**
     * This sets the font weight of External System DB shape for the diagram
     *
     * @default 'normal'
     */
    external_system_dbFontWeight?: string;

    /**
     * This sets the font size of System Queue shape for the diagram
     *
     * @default 14
     */
    system_queueFontSize?: number;

    /**
     * This sets the font family of System Queue shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    system_queueFontFamily?: string;

    /**
     * This sets the font weight of System Queue shape for the diagram
     *
     * @default 'normal'
     */
    system_queueFontWeight?: string;

    /**
     * This sets the font size of External System Queue shape for the diagram
     *
     * @default 14
     */
    external_system_queueFontSize?: number;

    /**
     * This sets the font family of External System Queue shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_system_queueFontFamily?: string;

    /**
     * This sets the font weight of External System Queue shape for the diagram
     *
     * @default 'normal'
     */
    external_system_queueFontWeight?: string;

    /**
     * This sets the font size of Boundary shape for the diagram
     *
     * @default 14
     */
    boundaryFontSize?: number;

    /**
     * This sets the font family of Boundary shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    boundaryFontFamily?: string;

    /**
     * This sets the font weight of Boundary shape for the diagram
     *
     * @default 'normal'
     */
    boundaryFontWeight?: string;

    /**
     * This sets the font size of Message shape for the diagram
     *
     * @default 12
     */
    messageFontSize?: number;

    /**
     * This sets the font family of Message shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    messageFontFamily?: string;

    /**
     * This sets the font weight of Message shape for the diagram
     *
     * @default 'normal'
     */
    messageFontWeight?: string;

    /**
     * This sets the font size of Container shape for the diagram
     *
     * @default 14
     */
    containerFontSize?: number;

    /**
     * This sets the font family of Container shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    containerFontFamily?: string;

    /**
     * This sets the font weight of Container shape for the diagram
     *
     * @default 'normal'
     */
    containerFontWeight?: string;

    /**
     * This sets the font size of External Container shape for the diagram
     *
     * @default 14
     */
    external_containerFontSize?: number;

    /**
     * This sets the font family of External Container shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_containerFontFamily?: string;

    /**
     * This sets the font weight of External Container shape for the diagram
     *
     * @default 'normal'
     */
    external_containerFontWeight?: string;

    /**
     * This sets the font size of Container DB shape for the diagram
     *
     * @default 14
     */
    container_dbFontSize?: number;

    /**
     * This sets the font family of Container DB shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    container_dbFontFamily?: string;

    /**
     * This sets the font weight of Container DB shape for the diagram
     *
     * @default 'normal'
     */
    container_dbFontWeight?: string;

    /**
     * This sets the font size of External Container DB shape for the diagram
     *
     * @default 14
     */
    external_container_dbFontSize?: number;

    /**
     * This sets the font family of External Container DB shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_container_dbFontFamily?: string;

    /**
     * This sets the font weight of External Container DB shape for the diagram
     *
     * @default 'normal'
     */
    external_container_dbFontWeight?: string;

    /**
     * This sets the font size of Container Queue shape for the diagram
     *
     * @default 14
     */
    container_queueFontSize?: number;

    /**
     * This sets the font family of Container Queue shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    container_queueFontFamily?: string;

    /**
     * This sets the font weight of Container Queue shape for the diagram
     *
     * @default 'normal'
     */
    container_queueFontWeight?: string;

    /**
     * This sets the font size of External Container Queue shape for the diagram
     *
     * @default 14
     */
    external_container_queueFontSize?: number;

    /**
     * This sets the font family of External Container Queue shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_container_queueFontFamily?: string;

    /**
     * This sets the font weight of External Container Queue shape for the diagram
     *
     * @default 'normal'
     */
    external_container_queueFontWeight?: string;

    /**
     * This sets the font size of Component shape for the diagram
     *
     * @default 14
     */
    componentFontSize?: number;

    /**
     * This sets the font family of Component shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    componentFontFamily?: string;

    /**
     * This sets the font weight of Component shape for the diagram
     *
     * @default 'normal'
     */
    componentFontWeight?: string;

    /**
     * This sets the font size of External Component shape for the diagram
     *
     * @default 14
     */
    external_componentFontSize?: number;

    /**
     * This sets the font family of External Component shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_componentFontFamily?: string;

    /**
     * This sets the font weight of External Component shape for the diagram
     *
     * @default 'normal'
     */
    external_componentFontWeight?: string;

    /**
     * This sets the font size of Component DB shape for the diagram
     *
     * @default 14
     */
    component_dbFontSize?: number;

    /**
     * This sets the font family of Component DB shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    component_dbFontFamily?: string;

    /**
     * This sets the font weight of Component DB shape for the diagram
     *
     * @default 'normal'
     */
    component_dbFontWeight?: string;

    /**
     * This sets the font size of External Component DB shape for the diagram
     *
     * @default 14
     */
    external_component_dbFontSize?: number;

    /**
     * This sets the font family of External Component DB shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_component_dbFontFamily?: string;

    /**
     * This sets the font weight of External Component DB shape for the diagram
     *
     * @default 'normal'
     */
    external_component_dbFontWeight?: string;

    /**
     * This sets the font size of Component Queue shape for the diagram
     *
     * @default 14
     */
    component_queueFontSize?: number;

    /**
     * This sets the font family of Component Queue shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    component_queueFontFamily?: string;

    /**
     * This sets the font weight of Component Queue shape for the diagram
     *
     * @default 'normal'
     */
    component_queueFontWeight?: string;

    /**
     * This sets the font size of External Component Queue shape for the diagram
     *
     * @default 14
     */
    external_component_queueFontSize?: number;

    /**
     * This sets the font family of External Component Queue shape for the diagram
     *
     * @default '"Open Sans", sans-serif'
     */
    external_component_queueFontFamily?: string;

    /**
     * This sets the font weight of External Component Queue shape for the diagram
     *
     * @default 'normal'
     */
    external_component_queueFontWeight?: string;

    /**
     * This sets the auto-wrap state for the diagram
     *
     * @default true
     */
    wrap?: boolean;

    /**
     * This sets the auto-wrap padding for the diagram (sides only)
     *
     * @default 0
     */
    wrapPadding?: number;
}

export interface Config {
    /**
     * Built in Themes
     *
     * To disable any pre-defined mermaid theme, use "null".
     */
    theme?: 'dark' | 'default' | 'forest' | 'neutral' | 'null';

    /**
     * Specifies the font to be used in the rendered diagrams.
     *
     * @default '"trebuchet ms", verdana, arial, sans-serif;'
     */
    fontFamily?: string;

    /**
     * This option decides the amount of logging to be used.
     *
     * - Debug: 1
     * - Info: 2
     * - Warn: 3
     * - Error: 4
     * - Fatal: 5
     *
     * @default 'fatal'
     */
    logLevel?: 'debug' | 'error' | 'fatal' | 'info' | 'warn';

    /**
     * Level of trust for parsed diagram.
     *
     * - **strict**: tags in text are encoded, click functionality is disabled
     * - **loose**: tags in text are allowed, click functionality is enabled
     * - **antiscript**: html tags in text are allowed, (only script element is removed), click functionality is enabled
     * - **sandbox**: With this security level all rendering takes place in a sandboxed iframe. This prevent any JavaScript running in the context. This may hinder interactive functionality of the
     *   diagram like scripts, popups in sequence diagram or links to other tabs/targets etc.
     *
     * @default 'strict'
     */
    securityLevel?: 'antiscript' | 'loose' | 'sandbox' | 'strict';

    /**
     * Dictates whether mermaid starts on Page load
     *
     * @default true
     */
    startOnLoad?: boolean;

    /**
     * Controls whether or arrow markers in html code are absolute paths or anchors
     *
     * This matters if you are using base tag settings.
     *
     * @default false
     */
    arrowMarkerAbsolute?: boolean;

    /**
     * This option controls which currentConfig keys are considered secure and can only be changed via call to mermaidAPI.initialize. Calls to mermaidAPI.reinitialize cannot make changes to the
     * `secure` keys in the current currentConfig. This prevents malicious graph directives from overriding a site's default security.
     *
     * @default ['secure', 'securityLevel', 'startOnLoad', 'maxTextSize']
     */
    secure?: Array<keyof Config>;

    /**
     * This option controls if the generated ids of nodes in the SVG are generated randomly or based on a seed. If set to false, the IDs are generated based on the current date and thus are not
     * deterministic. This is the default behaviour.
     *
     * This matters if your files are checked into sourcecontrol e.g. git and should not change unless content is changed.
     *
     * @default false
     */
    deterministicIds?: boolean;

    /**
     * This option is the optional seed for deterministic ids. if set to undefined but deterministicIds is true, a simple number iterator is used. You can set this attribute to base the seed on a
     * static string.
     */
    deterministicIDSeed?: string;

    /**
     * The object containing configurations specific for flowcharts.
     */
    flowchart?: FlowChartConfig;

    /**
     * The object containing configurations specific for sequence diagrams
     */
    sequence?: SequenceConfig;

    /**
     * The object containing configurations specific for gantt diagrams
     */
    gantt?: GanttConfig;

    /**
     * The object containing configurations specific for journey diagrams
     */
    journey?: JourneyConfig;

    /**
     * The object containing configurations specific for entity relationship diagrams
     */
    er?: ERConfig;

    /**
     * The object containing configurations specific for pie diagrams
     */
    pie?: PieConfig;

    /**
     * The object containing configurations specific for req diagrams
     */
    requirement?: RequirementConfig;

    /**
     * The object containing configurations specific for c4 diagrams
     */
    c4?: C4Config;
}

export interface MermaidAPI {
    /**
     * Function that renders an svg with a graph from a chart definition. Usage example below.
     *
     * ```js
     * mermaidAPI.initialize({
     *   startOnLoad: true,
     * });
     * $(function () {
     *   const graphDefinition = 'graph TB\na-->b';
     *   const cb = function (svgGraph) {
     *     console.log(svgGraph);
     *   };
     *   mermaidAPI.render('id1', graphDefinition, cb);
     * });
     * ```
     *
     * @param id the id of the element to be rendered
     * @param _txt the graph definition
     * @param cb callback which is called after rendering is finished with the svg code as inparam.
     * @param container selector to element in which a div with the graph temporarily will be inserted. In one is
     * provided a hidden div will be inserted in the body of the page instead. The element will be removed when rendering is
     * completed.
     */
    render: (
        id: string,
        _txt: string,
        cb?: (svgCode: string, bindFunctions: (element: Element) => void) => void,
        container?: string | Element,
    ) => string;

    parse: (txt: string) => boolean;

    initialize: (options: Config) => void;

    /**
     * @deprecated
     */
    reinitialize: any;

    /**
     * Returns the current siteConfig base configuration
     */
    getSiteConfig: () => Config;

    /**
     * Sets the siteConfig to desired values.
     *
     * The siteConfig is a protected configuration for repeat use. Calls to reset() will reset the currentConfig to siteConfig. Calls to reset(configApi.defaultConfig) will reset siteConfig and
     * currentConfig to the defaultConfig Note: currentConfig is set in this function Default value: At default, will mirror Global Config
     *
     * @param conf The base currentConfig to use as siteConfig
     */
    updateSiteConfig: (conf: Config) => Config;

    /**
     * Obtains the currentConfig
     *
     * @returns The currentConfig
     */
    getConfig: () => Config;

    /**
     * Sets the currentConfig. The parameter conf is sanitized based on the siteConfig.secure keys. Any values found in conf with key found in siteConfig.secure will be replaced with the
     * corresponding siteConfig value.
     *
     * @param conf The potential currentConfig
     * @returns The currentConfig merged with the sanitized conf
     */
    setConfig: (conf: Config) => Config;

    /**
     * Resets currentConfig to conf.
     *
     * @param conf base set of values, which currentConfig could be reset to.
     */
    reset: (conf?: Config) => void;

    // tslint:disable-next-line: ban-types
    globalReset: Function;

    defaultConfig: Config;
}

export interface Mermaid {
    initialize: MermaidAPI['initialize'];
    mermaidAPI: MermaidAPI;
    parse: MermaidAPI['parse'];
    render: MermaidAPI['render'];

    /**
     * @deprecated
     */
    startOnLoad: boolean;

    /**
     * @deprecated
     */
    htmlLabels: boolean;

    /**
     * @deprecated
     */
    // tslint:disable-next-line: ban-types
    init: Function;

    // tslint:disable-next-line: ban-types
    initThrowsErrors: Function;

    // tslint:disable-next-line: ban-types
    contentLoaded: Function;

    // tslint:disable-next-line: ban-types
    setParseErrorHandler: Function;
}

declare const mermaid: Mermaid;
export default mermaid;
