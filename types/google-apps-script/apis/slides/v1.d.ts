// Type definitions for Google Apps Script 2018-10-02
// Project: https://developers.google.com/apps-script/
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  export module Slides_v1 {
    //// FILE: color.proto ////
    // An RGB color.
    export interface RgbColor {
      // The red component of the color, from 0.0 to 1.0.
      red: number
      // The green component of the color, from 0.0 to 1.0.
      green: number
      // The blue component of the color, from 0.0 to 1.0.
      blue: number
    }

    // A themeable solid color value.
    export interface OpaqueColor {
      // The kind of color value.
      kind: {
        // An opaque RGB color.
        rgb_color: RgbColor
        // An opaque theme color.
        theme_color: ThemeColorType
      }
    }

    // A color that can either be fully opaque or fully transparent.
    export interface OptionalColor {
      // If set, this will be used as an opaque color. If unset, this represents
      // a transparent color.
      opaque_color: OpaqueColor
    }

    // The palette of predefined colors for a page.
    export interface ColorScheme {
      // The ThemeColorType and corresponding concrete color pairs.
      colors: ThemeColorPair[]
    }

    // Theme color types.
    //
    // Contain a ColorScheme that defines a mapping of
    // these theme color types to concrete colors.
    export enum ThemeColorType {
      // Unspecified theme color. This value should not be used.
      THEME_COLOR_TYPE_UNSPECIFIED,
      // Represents the first dark color.
      DARK1,
      // Represents the first light color.
      LIGHT1,
      // Represents the second dark color.
      DARK2,
      // Represents the second light color.
      LIGHT2,
      // Represents the first accent color.
      ACCENT1,
      // Represents the second accent color.
      ACCENT2,
      // Represents the third accent color.
      ACCENT3,
      // Represents the fourth accent color.
      ACCENT4,
      // Represents the fifth accent color.
      ACCENT5,
      // Represents the sixth accent color.
      ACCENT6,
      // Represents the color to use for hyperlinks.
      HYPERLINK,
      // Represents the color to use for visited hyperlinks.
      FOLLOWED_HYPERLINK,
      // Represents the first text color.
      TEXT1,
      // Represents the first background color.
      BACKGROUND1,
      // Represents the second text color.
      TEXT2,
      // Represents the second background color.
      BACKGROUND2,
    }

    // A pair mapping a theme color type to the concrete color it represents.
    export interface ThemeColorPair {
      // The type of the theme color.
      type: ThemeColorType
      // The concrete color corresponding to the theme color type above.
      color: RgbColor
    }

    // A color and position in a gradient band.
    export interface ColorStop {
      // The color of the gradient stop.
      color: OpaqueColor
      // The alpha value of this color in the gradient band. Defaults to 1.0,
      // fully opaque.
      alpha: number
      // The relative position of the color stop in the gradient band measured
      // in percentage. The value should be in the interval [0.0, 1.0].
      position: number
    }

    //// FILE: dimension.proto ////
    // Units of measurement.
    export enum Unit {
      // The units are unknown.
      UNIT_UNSPECIFIED,
      // An English Metric Unit (EMU) is defined as 1/360,000 of a centimeter
      // and thus there are 914,400 EMUs per inch, and 12,700 EMUs per point.
      EMU,
      // A point, 1/72 of an inch.
      PT,
    }

    // A magnitude in a single direction in the specified units.
    export interface Dimension {
      // The magnitude.
      magnitude: number
      // The units for magnitude.
      unit: Unit
    }

    // A width and height.
    export interface Size {
      // The width of the object.
      width: Dimension
      // The height of the object.
      height: Dimension
    }

    //// FILE: model.proto ////
    // A location of a single table cell within a table.
    export interface TableCellLocation {
      // The 0-based row index.
      row_index: number

      // The 0-based column index.
      column_index: number
    }

    // Common properties for a page element.
    //
    // Note: When you initially create a PageElement, the API may modify
    // the values of both `size` and `transform`, but the
    // visual size will be unchanged.
    export interface PageElementProperties {
      // The object ID of the page where the element is located.
      page_object_id: string

      // The size of the element.
      size: Size

      // The transform for the element.
      transform: AffineTransform
    }

    // The general text content. The text must reside in a compatible shape (e.g.
    // text box or rectangle) or a table cell in a page.
    export interface TextContent {
      // The text contents broken down into its component parts, including styling
      // information. This property is read-only.
      text_elements: TextElement[]
      // The bulleted lists contained in this text, keyed by list ID.
      lists: string[]
    }


    // Predefined layout types.
    // These are commonly found layouts in presentations. However, there is no
    // guarantee that these layouts are present in the current master as they
    // could have been deleted or not part of the used theme. Additionally,
    // the placeholders on each layout may have been changed.
    export enum PredefinedLayout {
      // Unspecified layout.
      PREDEFINED_LAYOUT_UNSPECIFIED,
      // Blank layout, with no placeholders.
      BLANK,
      // Layout with a caption at the bottom.
      CAPTION_ONLY,
      // Layout with a title and a subtitle.
      TITLE,
      // Layout with a title and body.
      TITLE_AND_BODY,
      // Layout with a title and two columns.
      TITLE_AND_TWO_COLUMNS,
      // Layout with only a title.
      TITLE_ONLY,
      // Layout with a section title.
      SECTION_HEADER,
      // Layout with a title and subtitle on one side and description on the other.
      SECTION_TITLE_AND_DESCRIPTION,
      // Layout with one title and one body, arranged in a single column.
      ONE_COLUMN_TEXT,
      // Layout with a main point.
      MAIN_POINT,
      // Layout with a big number heading.
      BIG_NUMBER,
    }

    // A Google Slides presentation.
    export interface Presentation {
      // The ID of the presentation.
      presentation_id: string
      // The size of pages in the presentation.
      page_size: Size
      // The slides in the presentation.
      // A slide inherits properties from a slide layout.
      slides: Page[]
      // The title of the presentation.
      title: string
      // The slide masters in the presentation. A slide master contains all common
      // page elements and the common properties for a set of layouts. They serve
      // three purposes:
      //
      // - Placeholder shapes on a master contain the default text styles and shape
      //   properties of all placeholder shapes on pages that use that master.
      // - The master page properties define the common page properties inherited by
      //   its layouts.
      // - Any other shapes on the master slide will appear on all slides using that
      //   master, regardless of their layout.
      masters: Page[]
      // The layouts in the presentation. A layout is a template that determines
      // how content is arranged and styled on the slides that inherit from that
      // layout.
      layouts: Page[]
      // The locale of the presentation, as an IETF BCP 47 language tag.
      locale: string
      // The revision ID of the presentation. Can be used in update requests
      // to assert that the presentation revision hasn't changed since the last
      // read operation. Only populated if the user has edit access to the
      // presentation.
      //
      // The format of the revision ID may change over time, so it should be treated
      // opaquely. A returned revision ID is only guaranteed to be valid for 24
      // hours after it has been returned and cannot be shared across users. If the
      // revision ID is unchanged between calls, then the presentation has not
      // changed. Conversely, a changed ID (for the same presentation and user)
      // usually means the presentation has been updated; however, a changed ID can
      // also be due to internal factors such as ID format changes.
      revision_id: string
      // The notes master in the presentation. It serves three purposes:
      //
      // - Placeholder shapes on a notes master contain the default text styles and
      //   shape properties of all placeholder shapes on notes pages. Specifically,
      //   a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a
      //   `BODY` placeholder shape contains the speaker notes.
      // - The notes master page properties define the common page properties
      //   inherited by all notes pages.
      // - Any other shapes on the notes master will appear on all notes pages.
      //
      // The notes master is read-only.
      notes_master: Page
    }

    // The type of a page.
    enum PagePageType {
      // A slide page.
      SLIDE,
      // A master slide page.
      MASTER,
      // A layout page.
      LAYOUT,
      // A notes page.
      NOTES,
      // A notes master page.
      NOTES_MASTER,
    }

    // A page in a presentation.
    export interface Page {
      // The object ID for this page. Object IDs used by
      // Page and PageElement share the same namespace.
      object_id: string
      // The type of the page.
      page_type: PagePageType
      // The page elements rendered on the page.
      page_elements: PageElement[]
      // Properties that are specific for each page type. Masters do not require
      // any additional properties.
      properties: {
        // Slide specific properties. Only set if page_type = SLIDE.
        slide_properties: SlideProperties
        // Layout specific properties. Only set if page_type = LAYOUT.
        layout_properties: LayoutProperties
        // Notes specific properties. Only set if page_type = NOTES.
        notes_properties: NotesProperties
        // Master specific properties. Only set if page_type = MASTER.
        master_properties: MasterProperties
      }

      // The revision ID of the presentation containing this page. Can be used in
      // update requests to assert that the presentation revision hasn't changed
      // since the last read operation. Only populated if the user has edit access
      // to the presentation.
      //
      // The format of the revision ID may change over time, so it should be treated
      // opaquely. A returned revision ID is only guaranteed to be valid for 24
      // hours after it has been returned and cannot be shared across users. If the
      // revision ID is unchanged between calls, then the presentation has not
      // changed. Conversely, a changed ID (for the same presentation and user)
      // usually means the presentation has been updated; however, a changed ID can
      // also be due to internal factors such as ID format changes.
      revision_id: string
      // The properties of the page.
      page_properties: PageProperties
    }

    // The page background fill.
    interface PagePropertiesPageBackgroundFill {
      // The background fill property state.
      //
      // Updating the fill on a page will implicitly update this field to
      // `RENDERED`, unless another value is specified in the same request. To
      // have no fill on a page, set this field to `NOT_RENDERED`. In this case,
      // any other fill fields set in the same request will be ignored.
      property_state: PropertyState,
      // The kind of background fill.
      kind: {
        // Solid color fill.
        solid_fill: SolidFill,
        // Stretched picture fill.
        stretched_picture_fill: StretchedPictureFill,
      }
    }

    // The properties of the Page.
    //
    // The page will inherit properties from the parent page. Depending on the page
    // type the hierarchy is defined in either SlideProperties or
    // LayoutProperties.
    export interface PageProperties {
      // The background fill of the page. If unset, the background fill is inherited
      // from a parent page if it exists. If the page has no parent, then the
      // background fill defaults to the corresponding fill in the Slides editor.
      page_background_fill: PagePropertiesPageBackgroundFill,
      // The color scheme of the page. If unset, the color scheme is inherited from
      // a parent page. If the page has no parent, the color scheme uses a default
      // Slides color scheme. This field is read-only.
      color_scheme: ColorScheme,
    }

    // The properties of Page that are only
    // relevant for pages with page_type SLIDE.
    export interface SlideProperties {
      // The object ID of the layout that this slide is based on. This property is
      // read-only.
      layout_object_id: string
      // The object ID of the master that this slide is based on. This property is
      // read-only.
      master_object_id: string
      // The notes page that this slide is associated with. It defines the visual
      // appearance of a notes page when printing or exporting slides with speaker
      // notes. A notes page inherits properties from the notes master.
      // The placeholder shape with type BODY on the notes page contains the speaker
      // notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field.
      // The notes page is read-only except for the text content and styles of the
      // speaker notes shape. This property is read-only.
      notes_page: Page,
    }

    // The properties of Page are only
    // relevant for pages with page_type LAYOUT.
    export interface LayoutProperties {
      // The object ID of the master that this layout is based on.
      master_object_id: string
      // The name of the layout.
      name: string
      // The human-readable name of the layout.
      display_name: string
    }

    // The properties of Page that are only
    // relevant for pages with page_type NOTES.
    export interface NotesProperties {
      // The object ID of the shape on this notes page that contains the speaker
      // notes for the corresponding slide.
      // The actual shape may not always exist on the notes page. Inserting text
      // using this object ID will automatically create the shape. In this case, the
      // actual shape may have different object ID. The `GetPresentation` or
      // `GetPage` action will always return the latest object ID.
      speaker_notes_object_id: string
    }

    // The properties of Page that are only
    // relevant for pages with page_type MASTER.
    export interface MasterProperties {
      // The human-readable name of the master.
      display_name: string
    }

    // A visual element rendered on a page.
    // (== resource_for v1.presentations.pages.pageElements ==)
    export interface PageElement {
      // The object ID for this page element. Object IDs used by
      // Page and PageElement share the same namespace.
      object_id: string
      // The size of the page element.
      size: Size
      // The transform of the page element.
      //
      // The visual appearance of the page element is determined by its absolute
      // transform. To compute the absolute transform, preconcatenate a page
      // element's transform with the transforms of all of its parent groups. If the
      // page element is not in a group, its absolute transform is the same as the
      // value in this field.
      //
      // The initial transform for the newly created Group is always the identity transform.
      transform: AffineTransform
      // The title of the page element. Combined with description to display alt
      // text.
      title: string
      // The description of the page element. Combined with title to display alt
      // text.
      description: string
      // The kind of element that this PageElement represents. Each message
      // contains any properties that are specific to that kind of page element.
      element_kind: {
        // A collection of page elements joined as a single unit.
        element_group: Group
        // A generic shape.
        shape: Shape
        // An image page element.
        image: Image
        // A video page element.
        video: Video
        // A line page element.
        line: Line
        // A table page element.
        table: Table
        // A word art page element.
        word_art: WordArt
        // A linked chart embedded from Google Sheets. Unlinked charts are
        // represented as images.
        sheets_chart: SheetsChart
      }
    }

    // A PageElement kind representing a joined collection of PageElements.
    export interface Group {
      // The collection of elements in the group. The minimum size of a group is 2.
      children: PageElement[]
    }

    // The shape types.
    export enum ShapeType {
      // The shape type that is not predefined.
      TYPE_UNSPECIFIED,
      // Text box shape.
      TEXT_BOX,
      // Rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'rect'.
      RECTANGLE,
      // Round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
      // 'roundRect'
      ROUND_RECTANGLE,
      // Ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'ellipse'
      ELLIPSE,
      // Curved arc shape. Corresponds to ECMA-376 ST_ShapeType 'arc'
      ARC,
      // Bent arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentArrow'
      BENT_ARROW,
      // Bent up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentUpArrow'
      BENT_UP_ARROW,
      // Bevel shape. Corresponds to ECMA-376 ST_ShapeType 'bevel'
      BEVEL,
      // Block arc shape. Corresponds to ECMA-376 ST_ShapeType 'blockArc'
      BLOCK_ARC,
      // Brace pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracePair'
      BRACE_PAIR,
      // Bracket pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracketPair'
      BRACKET_PAIR,
      // Can shape. Corresponds to ECMA-376 ST_ShapeType 'can'
      CAN,
      // Chevron shape. Corresponds to ECMA-376 ST_ShapeType 'chevron'
      CHEVRON,
      // Chord shape. Corresponds to ECMA-376 ST_ShapeType 'chord'
      CHORD,
      // Cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloud'
      CLOUD,
      // Corner shape. Corresponds to ECMA-376 ST_ShapeType 'corner'
      CORNER,
      // Cube shape. Corresponds to ECMA-376 ST_ShapeType 'cube'
      CUBE,
      // Curved down arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedDownArrow'
      CURVED_DOWN_ARROW,
      // Curved left arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedLeftArrow'
      CURVED_LEFT_ARROW,
      // Curved right arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedRightArrow'
      CURVED_RIGHT_ARROW,
      // Curved up arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedUpArrow'
      CURVED_UP_ARROW,
      // Decagon shape. Corresponds to ECMA-376 ST_ShapeType 'decagon'
      DECAGON,
      // Diagonal stripe shape. Corresponds to ECMA-376 ST_ShapeType 'diagStripe'
      DIAGONAL_STRIPE,
      // Diamond shape. Corresponds to ECMA-376 ST_ShapeType 'diamond'
      DIAMOND,
      // Dodecagon shape. Corresponds to ECMA-376 ST_ShapeType 'dodecagon'
      DODECAGON,
      // Donut shape. Corresponds to ECMA-376 ST_ShapeType 'donut'
      DONUT,
      // Double wave shape. Corresponds to ECMA-376 ST_ShapeType 'doubleWave'
      DOUBLE_WAVE,
      // Down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrow'
      DOWN_ARROW,
      // Callout down arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'downArrowCallout'
      DOWN_ARROW_CALLOUT,
      // Folded corner shape. Corresponds to ECMA-376 ST_ShapeType 'foldedCorner'
      FOLDED_CORNER,
      // Frame shape. Corresponds to ECMA-376 ST_ShapeType 'frame'
      FRAME,
      // Half frame shape. Corresponds to ECMA-376 ST_ShapeType 'halfFrame'
      HALF_FRAME,
      // Heart shape. Corresponds to ECMA-376 ST_ShapeType 'heart'
      HEART,
      // Heptagon shape. Corresponds to ECMA-376 ST_ShapeType 'heptagon'
      HEPTAGON,
      // Hexagon shape. Corresponds to ECMA-376 ST_ShapeType 'hexagon'
      HEXAGON,
      // Home plate shape. Corresponds to ECMA-376 ST_ShapeType 'homePlate'
      HOME_PLATE,
      // Horizontal scroll shape. Corresponds to ECMA-376 ST_ShapeType
      // 'horizontalScroll'
      HORIZONTAL_SCROLL,
      // Irregular seal 1 shape. Corresponds to ECMA-376 ST_ShapeType
      // 'irregularSeal1'
      IRREGULAR_SEAL_1,
      // Irregular seal 2 shape. Corresponds to ECMA-376 ST_ShapeType
      // 'irregularSeal2'
      IRREGULAR_SEAL_2,
      // Left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrow'
      LEFT_ARROW,
      // Callout left arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'leftArrowCallout'
      LEFT_ARROW_CALLOUT,
      // Left brace shape. Corresponds to ECMA-376 ST_ShapeType 'leftBrace'
      LEFT_BRACE,
      // Left bracket shape. Corresponds to ECMA-376 ST_ShapeType 'leftBracket'
      LEFT_BRACKET,
      // Left right arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'leftRightArrow'
      LEFT_RIGHT_ARROW,
      // Callout left right arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'leftRightArrowCallout'
      LEFT_RIGHT_ARROW_CALLOUT,
      // Left right up arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'leftRightUpArrow'
      LEFT_RIGHT_UP_ARROW,
      // Left up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftUpArrow'
      LEFT_UP_ARROW,
      // Lightning bolt shape. Corresponds to ECMA-376 ST_ShapeType
      // 'lightningBolt'
      LIGHTNING_BOLT,
      // Divide math shape. Corresponds to ECMA-376 ST_ShapeType 'mathDivide'
      MATH_DIVIDE,
      // Equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathEqual'
      MATH_EQUAL,
      // Minus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMinus'
      MATH_MINUS,
      // Multiply math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMultiply'
      MATH_MULTIPLY,
      // Not equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathNotEqual'
      MATH_NOT_EQUAL,
      // Plus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathPlus'
      MATH_PLUS,
      // Moon shape. Corresponds to ECMA-376 ST_ShapeType 'moon'
      MOON,
      // No smoking shape. Corresponds to ECMA-376 ST_ShapeType 'noSmoking'
      NO_SMOKING,
      // Notched right arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'notchedRightArrow'
      NOTCHED_RIGHT_ARROW,
      // Octagon shape. Corresponds to ECMA-376 ST_ShapeType 'octagon'
      OCTAGON,
      // Parallelogram shape. Corresponds to ECMA-376 ST_ShapeType 'parallelogram'
      PARALLELOGRAM,
      // Pentagon shape. Corresponds to ECMA-376 ST_ShapeType 'pentagon'
      PENTAGON,
      // Pie shape. Corresponds to ECMA-376 ST_ShapeType 'pie'
      PIE,
      // Plaque shape. Corresponds to ECMA-376 ST_ShapeType 'plaque'
      PLAQUE,
      // Plus shape. Corresponds to ECMA-376 ST_ShapeType 'plus'
      PLUS,
      // Quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrow'
      QUAD_ARROW,
      // Callout quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'quadArrowCallout'
      QUAD_ARROW_CALLOUT,
      // Ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon'
      RIBBON,
      // Ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon2'
      RIBBON_2,
      // Right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrow'
      RIGHT_ARROW,
      // Callout right arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'rightArrowCallout'
      RIGHT_ARROW_CALLOUT,
      // Right brace shape. Corresponds to ECMA-376 ST_ShapeType 'rightBrace'
      RIGHT_BRACE,
      // Right bracket shape. Corresponds to ECMA-376 ST_ShapeType 'rightBracket'
      RIGHT_BRACKET,
      // One round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
      // 'round1Rect'
      ROUND_1_RECTANGLE,
      // Two diagonal round corner rectangle shape. Corresponds to ECMA-376
      // ST_ShapeType 'round2DiagRect'
      ROUND_2_DIAGONAL_RECTANGLE,
      // Two same-side round corner rectangle shape. Corresponds to ECMA-376
      // ST_ShapeType 'round2SameRect'
      ROUND_2_SAME_RECTANGLE,
      // Right triangle shape. Corresponds to ECMA-376 ST_ShapeType 'rtTriangle'
      RIGHT_TRIANGLE,
      // Smiley face shape. Corresponds to ECMA-376 ST_ShapeType 'smileyFace'
      SMILEY_FACE,
      // One snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
      // 'snip1Rect'
      SNIP_1_RECTANGLE,
      // Two diagonal snip corner rectangle shape. Corresponds to ECMA-376
      // ST_ShapeType 'snip2DiagRect'
      SNIP_2_DIAGONAL_RECTANGLE,
      // Two same-side snip corner rectangle shape. Corresponds to ECMA-376
      // ST_ShapeType 'snip2SameRect'
      SNIP_2_SAME_RECTANGLE,
      // One snip one round corner rectangle shape. Corresponds to ECMA-376
      // ST_ShapeType 'snipRoundRect'
      SNIP_ROUND_RECTANGLE,
      // Ten pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star10'
      STAR_10,
      // Twelve pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star12'
      STAR_12,
      // Sixteen pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star16'
      STAR_16,
      // Twenty four pointed star shape. Corresponds to ECMA-376 ST_ShapeType
      // 'star24'
      STAR_24,
      // Thirty two pointed star shape. Corresponds to ECMA-376 ST_ShapeType
      // 'star32'
      STAR_32,
      // Four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star4'
      STAR_4,
      // Five pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star5'
      STAR_5,
      // Six pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star6'
      STAR_6,
      // Seven pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star7'
      STAR_7,
      // Eight pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star8'
      STAR_8,
      // Striped right arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'stripedRightArrow'
      STRIPED_RIGHT_ARROW,
      // Sun shape. Corresponds to ECMA-376 ST_ShapeType 'sun'
      SUN,
      // Trapezoid shape. Corresponds to ECMA-376 ST_ShapeType 'trapezoid'
      TRAPEZOID,
      // Triangle shape. Corresponds to ECMA-376 ST_ShapeType 'triangle'
      TRIANGLE,
      // Up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrow'
      UP_ARROW,
      // Callout up arrow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'upArrowCallout'
      UP_ARROW_CALLOUT,
      // Up down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upDownArrow'
      UP_DOWN_ARROW,
      // U-turn arrow shape. Corresponds to ECMA-376 ST_ShapeType 'uturnArrow'
      UTURN_ARROW,
      // Vertical scroll shape. Corresponds to ECMA-376 ST_ShapeType
      // 'verticalScroll'
      VERTICAL_SCROLL,
      // Wave shape. Corresponds to ECMA-376 ST_ShapeType 'wave'
      WAVE,
      // Callout wedge ellipse shape. Corresponds to ECMA-376 ST_ShapeType
      // 'wedgeEllipseCallout'
      WEDGE_ELLIPSE_CALLOUT,
      // Callout wedge rectangle shape. Corresponds to ECMA-376 ST_ShapeType
      // 'wedgeRectCallout'
      WEDGE_RECTANGLE_CALLOUT,
      // Callout wedge round rectangle shape. Corresponds to ECMA-376 ST_ShapeType
      // 'wedgeRoundRectCallout'
      WEDGE_ROUND_RECTANGLE_CALLOUT,
      // Alternate process flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartAlternateProcess'
      FLOW_CHART_ALTERNATE_PROCESS,
      // Collate flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartCollate'
      FLOW_CHART_COLLATE,
      // Connector flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartConnector'
      FLOW_CHART_CONNECTOR,
      // Decision flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartDecision'
      FLOW_CHART_DECISION,
      // Delay flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDelay'
      FLOW_CHART_DELAY,
      // Display flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartDisplay'
      FLOW_CHART_DISPLAY,
      // Document flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartDocument'
      FLOW_CHART_DOCUMENT,
      // Extract flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartExtract'
      FLOW_CHART_EXTRACT,
      // Input output flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartInputOutput'
      FLOW_CHART_INPUT_OUTPUT,
      // Internal storage flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartInternalStorage'
      FLOW_CHART_INTERNAL_STORAGE,
      // Magnetic disk flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartMagneticDisk'
      FLOW_CHART_MAGNETIC_DISK,
      // Magnetic drum flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartMagneticDrum'
      FLOW_CHART_MAGNETIC_DRUM,
      // Magnetic tape flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartMagneticTape'
      FLOW_CHART_MAGNETIC_TAPE,
      // Manual input flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartManualInput'
      FLOW_CHART_MANUAL_INPUT,
      // Manual operation flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartManualOperation'
      FLOW_CHART_MANUAL_OPERATION,
      // Merge flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMerge'
      FLOW_CHART_MERGE,
      // Multi-document flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartMultidocument'
      FLOW_CHART_MULTIDOCUMENT,
      // Offline storage flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartOfflineStorage'
      FLOW_CHART_OFFLINE_STORAGE,
      // Off-page connector flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartOffpageConnector'
      FLOW_CHART_OFFPAGE_CONNECTOR,
      // Online storage flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartOnlineStorage'
      FLOW_CHART_ONLINE_STORAGE,
      // Or flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOr'
      FLOW_CHART_OR,
      // Predefined process flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartPredefinedProcess'
      FLOW_CHART_PREDEFINED_PROCESS,
      // Preparation flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartPreparation'
      FLOW_CHART_PREPARATION,
      // Process flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartProcess'
      FLOW_CHART_PROCESS,
      // Punched card flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartPunchedCard'
      FLOW_CHART_PUNCHED_CARD,
      // Punched tape flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartPunchedTape'
      FLOW_CHART_PUNCHED_TAPE,
      // Sort flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSort'
      FLOW_CHART_SORT,
      // Summing junction flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartSummingJunction'
      FLOW_CHART_SUMMING_JUNCTION,
      // Terminator flow shape. Corresponds to ECMA-376 ST_ShapeType
      // 'flowChartTerminator'
      FLOW_CHART_TERMINATOR,
      // East arrow shape.
      ARROW_EAST,
      // Northeast arrow shape.
      ARROW_NORTH_EAST,
      // North arrow shape.
      ARROW_NORTH,
      // Speech shape.
      SPEECH,
      // Star burst shape.
      STARBURST,
      // Teardrop shape. Corresponds to ECMA-376 ST_ShapeType 'teardrop'
      TEARDROP,
      // Ellipse ribbon shape. Corresponds to ECMA-376 ST_ShapeType
      // 'ellipseRibbon'
      ELLIPSE_RIBBON,
      // Ellipse ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType
      // 'ellipseRibbon2'
      ELLIPSE_RIBBON_2,
      // Callout cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloudCallout'
      CLOUD_CALLOUT,
      // Custom shape.
      CUSTOM,
    }

    // A PageElement kind representing a
    // generic shape that does not have a more specific classification.
    interface Shape {
      // The shape types.
      //
      // Many of these shapes correspond to predefined shapes from the ECMA-376
      // standard. More information on those shapes can be found in the description
      // of the "ST_ShapeType" simple type in section 20.1.10.55 of "Office Open XML
      // File Formats - Fundamentals and Markup Language Reference", part 1 of
      // [ECMA-376 4th
      // edition](http://www.ecma-international.org/publications/standards/Ecma-376.htm).

      // The type of the shape.
      shape_type: ShapeType
      // The text content of the shape.
      text: TextContent
      // The properties of the shape.
      shape_properties: ShapeProperties
      // Placeholders are shapes that are inherit from corresponding placeholders on
      // layouts and masters.
      //
      // If set, the shape is a placeholder shape and any inherited properties
      // can be resolved by looking at the parent placeholder identified by the
      // parent_object_id field.
      placeholder: Placeholder
    }

    // The type of the placeholder.
    export enum PlaceholderType {
      // Default value, signifies it is not a placeholder.
      NONE,
      // Body text.
      BODY,
      // Chart or graph.
      CHART,
      // Clip art image.
      CLIP_ART,
      // Title centered.
      CENTERED_TITLE,
      // Diagram.
      DIAGRAM,
      // Date and time.
      DATE_AND_TIME,
      // Footer text.
      FOOTER,
      // Header text.
      HEADER,
      // Multimedia.
      MEDIA,
      // Any content type.
      OBJECT,
      // Picture.
      PICTURE,
      // Number of a slide.
      SLIDE_NUMBER,
      // Subtitle.
      SUBTITLE,
      // Table.
      TABLE,
      // Slide title.
      TITLE,
      // Slide image.
      SLIDE_IMAGE,
    }

    // The placeholder information that uniquely identifies a placeholder shape.
    export interface Placeholder {
      // The type of a placeholder shape.
      //
      // Many of these placeholder types correspond to placeholder ids from the
      // ECMA-376 standard. More information on those shapes can be found in the
      // description of the "ST_PlaceholderType" type in section 19.7.10 of "Office
      // Open XML File Formats - Fundamentals and Markup Language Reference", part
      // 1 of [ECMA-376 4th
      // edition](http://www.ecma-international.org/publications/standards/Ecma-376.htm).
      // The type of the placeholder.
      type: PlaceholderType
      // The index of the placeholder. If the same placeholder types are present in
      // the same page, they would have different index values.
      index: number
      // The object ID of this shape's parent placeholder.
      // If unset, the parent placeholder shape does not exist, so the shape does
      // not inherit properties from any other shape.
      parent_object_id: string
    }

    // The shape background fill.
    interface ShapePropertiesShapeBackgroundFill {
      // The background fill property state.
      //
      // Updating the fill on a shape will implicitly update this field to
      // `RENDERED`, unless another value is specified in the same request. To
      // have no fill on a shape, set this field to `NOT_RENDERED`. In this case,
      // any other fill fields set in the same request will be ignored.
      property_state: PropertyState
      // The kind of background fill.
      kind: {
        // Solid color fill.
        solid_fill: SolidFill
      }
    }

    // The properties of a Shape.
    //
    // If the shape is a placeholder shape as determined by the
    // placeholder field, then these
    // properties may be inherited from a parent placeholder shape.
    // Determining the rendered value of the property depends on the corresponding
    // property_state field value.
    export interface ShapeProperties {
      // The background fill of the shape. If unset, the background fill is
      // inherited from a parent placeholder if it exists. If the shape has no
      // parent, then the default background fill depends on the shape type,
      // matching the defaults for new shapes created in the Slides editor.
      shape_background_fill: ShapePropertiesShapeBackgroundFill
      // The outline of the shape. If unset, the outline is inherited from a
      // parent placeholder if it exists. If the shape has no parent, then the
      // default outline depends on the shape type, matching the defaults for
      // new shapes created in the Slides editor.
      outline: Outline
      // The shadow properties of the shape. If unset, the shadow is inherited from
      // a parent placeholder if it exists. If the shape has no parent, then the
      // default shadow matches the defaults for new shapes created in the Slides
      // editor. This property is read-only.
      shadow: Shadow
      // The hyperlink destination of the shape. If unset, there is no link. Links
      // are not inherited from parent placeholders.
      link: Link
      // The alignment of the content in the shape. If unspecified,
      // the alignment is inherited from a parent placeholder if it exists. If the
      // shape has no parent, the default alignment matches the alignment for new
      // shapes created in the Slides editor.
      content_alignment: ContentAlignment
    }

    // The types of content alignment.
    //
    // Derived from a subset of the values of the "ST_TextAnchoringType" simple type
    // in section 20.1.10.59 of "Office Open XML File Formats - Fundamentals and
    // Markup Language Reference", part 1 of [ECMA-376 4th edition]
    // (http://www.ecma-international.org/publications/standards/Ecma-376.htm).
    export enum ContentAlignment {
      // An unspecified content alignment. The content alignment is inherited from
      // the parent if it exists.
      CONTENT_ALIGNMENT_UNSPECIFIED,
      // An unsupported content alignment.
      CONTENT_ALIGNMENT_UNSUPPORTED,
      // An alignment that aligns the content to the top of the content holder.
      // Corresponds to ECMA-376 ST_TextAnchoringType 't'.
      TOP,
      // An alignment that aligns the content to the middle of the content
      // holder. Corresponds to ECMA-376 ST_TextAnchoringType 'ctr'.
      MIDDLE,
      // An alignment that aligns the content to the bottom of the content
      // holder. Corresponds to ECMA-376 ST_TextAnchoringType 'b'.
      BOTTOM,
    }

    // A PageElement kind representing an image.
    export interface Image {
      // An URL to an image with a default lifetime of 30 minutes.
      // This URL is tagged with the account of the requester. Anyone with the URL
      // effectively accesses the image as the original requester. Access to the
      // image may be lost if the presentation's sharing settings change.
      content_url: string
      // The properties of the image.
      image_properties: ImageProperties
      // The source URL is the URL used to insert the image. The source URL can be
      // empty.
      source_url: string
    }

    // The properties of the Image.
    export interface ImageProperties {
      // The crop properties of the image. If not set, the image is not cropped.
      // This property is read-only.
      crop_properties: CropProperties
      // The transparency effect of the image. The value should be in the interval
      // [0.0, 1.0], where 0 means no effect and 1 means completely transparent.
      // This property is read-only.
      transparency: number
      // The brightness effect of the image. The value should be in the interval
      // [-1.0, 1.0], where 0 means no effect. This property is read-only.
      brightness: number
      // The contrast effect of the image. The value should be in the interval
      // [-1.0, 1.0], where 0 means no effect. This property is read-only.
      contrast: number
      // The recolor effect of the image. If not set, the image is not recolored.
      // This property is read-only.
      recolor: Recolor
      // The outline of the image. If not set, the image has no outline.
      outline: Outline
      // The shadow of the image. If not set, the image has no shadow. This property
      // is read-only.
      shadow: Shadow
      // The hyperlink destination of the image. If unset, there is no link.
      link: Link
    }

    // The video sources.
    enum VideoSource {
      // The video source is unspecified.
      SOURCE_UNSPECIFIED,
      // The video source is YouTube.
      YOUTUBE,
      // The video source is Google Drive.
      DRIVE,
    }

    // A PageElement kind representing a video.
    export interface Video {
      // An URL to a video. The URL is valid as long as the source video exists and
      // sharing settings do not change.
      url: string
      // The video source.
      source: VideoSource
      // The video source's unique identifier for this video.
      id: string
      // The properties of the video.
      video_properties: VideoProperties
    }

    // The properties of the Video.
    export interface VideoProperties {
      // The outline of the video. The default outline matches the defaults for new
      // videos created in the Slides editor.
      outline: Outline
      // Whether to enable video autoplay when the page is displayed in present
      // mode. Defaults to false.
      auto_play: boolean
      // The time at which to start playback, measured in seconds from the beginning
      // of the video.
      // If set, the start time should be before the end time.
      // If you set this to a value that exceeds the video's length in seconds, the
      // video will be played from the last second.
      // If not set, the video will be played from the beginning.
      start: number
      // The time at which to end playback, measured in seconds from the beginning
      // of the video.
      // If set, the end time should be after the start time.
      // If not set or if you set this to a value that exceeds the video's length,
      // the video will be played until its end.
      end: number
      // Whether to mute the audio during video playback. Defaults to false.
      mute: boolean
    }

    // Derived from a subset of the values of the "ST_ShapeType" simple type in
    // section 20.1.10.55 of "Office Open XML File Formats - Fundamentals and
    // Markup Language Reference", part 1 of [ECMA-376 4th edition]
    // (http://www.ecma-international.org/publications/standards/Ecma-376.htm).
    enum LineType {
      // An unspecified line type.
      TYPE_UNSPECIFIED,
      // Straight connector 1 form. Corresponds to ECMA-376 ST_ShapeType
      // 'straightConnector1'.
      STRAIGHT_CONNECTOR_1,
      // Bent connector 2 form. Corresponds to ECMA-376 ST_ShapeType
      // 'bentConnector2'.
      BENT_CONNECTOR_2,
      // Bent connector 3 form. Corresponds to ECMA-376 ST_ShapeType
      // 'bentConnector3'.
      BENT_CONNECTOR_3,
      // Bent connector 4 form. Corresponds to ECMA-376 ST_ShapeType
      // 'bentConnector4'.
      BENT_CONNECTOR_4,
      // Bent connector 5 form. Corresponds to ECMA-376 ST_ShapeType
      // 'bentConnector5'.
      BENT_CONNECTOR_5,
      // Curved connector 2 form. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedConnector2'.
      CURVED_CONNECTOR_2,
      // Curved connector 3 form. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedConnector3'.
      CURVED_CONNECTOR_3,
      // Curved connector 4 form. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedConnector4'.
      CURVED_CONNECTOR_4,
      // Curved connector 5 form. Corresponds to ECMA-376 ST_ShapeType
      // 'curvedConnector5'.
      CURVED_CONNECTOR_5,
      // Straight line. Corresponds to ECMA-376 ST_ShapeType 'line'. This line
      // type is not a connector.
      STRAIGHT_LINE,
    }

    // A PageElement kind representing a
    // non-connector line, straight connector, curved connector, or bent connector.
    export interface Line {
      // The properties of the line.
      line_properties: LineProperties
      // The type of the line.
      line_type: LineType
    }

    // The catgory of a Line.
    export enum LineCategory {
      // Unspecified line category.
      LINE_CATEGORY_UNSPECIFIED,
      // Straight connectors, including straight connector 1.
      STRAIGHT,
      // Bent connectors, including bent connector 2 to 5.
      BENT,
      // Curved connectors, including curved connector 2 to 5.
      CURVED,
    }

    // The fill of the line.
    export interface LinePropertiesLineFill {
      // The kind of line fill.
      kind: {
        // Solid color fill.
        solid_fill: SolidFill
      }
    }

    // The kinds of start and end forms with which linear geometry can be
    // rendered. Some values are based on the "ST_LineEndType" simple type
    // described in section 20.1.10.33 of "Office Open XML File Formats -
    // Fundamentals and Markup Language Reference", part 1 of [ECMA-376 4th
    // edition](http://www.ecma-international.org/publications/standards/Ecma-376.htm).
    export enum LinePropertiesArrowStyle {
      // An unspecified arrow style.
      ARROW_STYLE_UNSPECIFIED,
      // No arrow.
      NONE,
      // Arrow with notched back. Corresponds to ECMA-376 ST_LineEndType value
      // 'stealth'.
      STEALTH_ARROW,
      // Filled arrow. Corresponds to ECMA-376 ST_LineEndType value 'triangle'.
      FILL_ARROW,
      // Filled circle. Corresponds to ECMA-376 ST_LineEndType value 'oval'.
      FILL_CIRCLE,
      // Filled square.
      FILL_SQUARE,
      // Filled diamond. Corresponds to ECMA-376 ST_LineEndType value 'diamond'.
      FILL_DIAMOND,
      // Hollow arrow.
      OPEN_ARROW,
      // Hollow circle.
      OPEN_CIRCLE,
      // Hollow square.
      OPEN_SQUARE,
      // Hollow diamond.
      OPEN_DIAMOND,
    }

    // The properties of the Line.
    //
    // When unset, these fields default to values that match the appearance of
    // new lines created in the Slides editor.
    export interface LineProperties {
      // The fill of the line. The default line fill matches the defaults for new
      // lines created in the Slides editor.
      line_fill: LinePropertiesLineFill
      // The thickness of the line.
      weight: Dimension
      // The dash style of the line.
      dash_style: DashStyle
      // The style of the arrow at the beginning of the line.
      start_arrow: LinePropertiesArrowStyle
      // The style of the arrow at the end of the line.
      end_arrow: LinePropertiesArrowStyle
      // The hyperlink destination of the line. If unset, there is no link.
      link: Link
    }

    // A PageElement kind representing a table.
    export interface Table {
      // Number of rows in the table.
      rows: number
      // Number of columns in the table.
      columns: number
      // Properties and contents of each row.
      //
      // Cells that span multiple rows are contained in only one of these rows and
      // have a row_span greater than 1.
      table_rows: TableRow[]
      // Properties of each column.
      table_columns: TableColumnProperties[]
      // Properties of horizontal cell borders.
      //
      // A table's horizontal cell borders are represented as a grid. The grid has
      // one more row than the number of rows in the table and the same number of
      // columns as the table. For example, if the table is 3 x 3, its horizontal
      // borders will be represented as a grid with 4 rows and 3 columns.
      horizontal_border_rows: TableBorderRow[]
      // Properties of vertical cell borders.
      //
      // A table's vertical cell borders are represented as a grid. The grid has the
      // same number of rows as the table and one more column than the number of
      // columns in the table. For example, if the table is 3 x 3, its vertical
      // borders will be represented as a grid with 3 rows and 4 columns.
      vertical_border_rows: TableBorderRow[]
    }

    // Properties of each column in a table.
    export interface TableColumnProperties {
      // Width of a column.
      column_width: Dimension
    }

    // Properties and contents of each row in a table.
    export interface TableRow {
      // Height of a row.
      row_height: Dimension
      // Properties of the row.
      table_row_properties: TableRowProperties
      // Properties and contents of each cell.
      //
      // Cells that span multiple columns are represented only once with a
      // column_span greater than 1. As a result, the length of this
      // collection does not always match the number of columns of the entire table.
      table_cells: TableCell[]
    }

    // Properties of each row in a table.
    export interface TableRowProperties {
      // Minimum height of the row. The row will be rendered in the Slides editor at
      // a height equal to or greater than this value in order to show all the text
      // in the row's cell(s).
      min_row_height: Dimension
    }

    // Properties and contents of each table cell.
    export interface TableCell {
      // The location of the cell within the table.
      location: TableCellLocation
      // Row span of the cell.
      row_span: number
      // Column span of the cell.
      column_span: number
      // The text content of the cell.
      text: TextContent
      // The properties of the table cell.
      table_cell_properties: TableCellProperties
    }

    // The table cell background fill.
    export interface TableCellPropertiesTableCellBackgroundFill {
      // The background fill property state.
      //
      // Updating the fill on a table cell will implicitly update this field
      // to `RENDERED`, unless another value is specified in the same request. To
      // have no fill on a table cell, set this field to `NOT_RENDERED`. In this
      // case, any other fill fields set in the same request will be ignored.
      property_state: PropertyState
      // The kind of background fill.
      kind: {
        // Solid color fill.
        solid_fill: SolidFill
      }
    }

    // The properties of the TableCell.
    export interface TableCellProperties {
      // The background fill of the table cell. The default fill matches the fill
      // for newly created table cells in the Slides editor.
      table_cell_background_fill: TableCellPropertiesTableCellBackgroundFill
      // The alignment of the content in the table cell. The default alignment
      // matches the alignment for newly created table cells in the Slides editor.
      content_alignment: ContentAlignment
    }

    // Contents of each border row in a table.
    export interface TableBorderRow {
      // Properties of each border cell. When a border's adjacent table cells are
      // merged, it is not included in the response.
      table_border_cells: TableBorderCell[]
    }

    // The properties of each border cell.
    export interface TableBorderCell {
      // The location of the border within the border table.
      location: TableCellLocation
      // The border properties.
      table_border_properties: TableBorderProperties
    }

    // The fill of the border.
    export interface TableBorderPropertiesTableBorderFill {
      // The kind of fill.
      kind: {
        // Solid fill.
        solid_fill: SolidFill
      }
    }

    // The border styling properties of the TableBorderCell.
    export interface TableBorderProperties {
      // The fill of the table border.
      table_border_fill: TableBorderPropertiesTableBorderFill
      // The thickness of the border.
      weight: Dimension
      // The dash style of the border.
      dash_style: DashStyle
    }

    // A table range represents a reference to a subset of a table.
    //
    // It's important to note that the cells specified by a table range do not
    // necessarily form a rectangle. For example, let's say we have a 3 x 3 table
    // where all the cells of the last row are merged together. The table looks
    // like this:
    //
    //      [   ][   ][   ]
    //      [   ][   ][   ]
    //      [             ]
    //
    // A table range with location = (0, 0), row span = 3 and column span = 2
    // specifies the following cells:
    //
    //      [ x ][ x ][   ]
    //      [ x ][ x ][   ]
    //      [      x      ]
    //
    export interface TableRange {
      // The starting location of the table range.
      location: TableCellLocation
      // The row span of the table range.
      row_span: number
      // The column span of the table range.
      column_span: number
    }

    // A PageElement kind representing word art.
    export interface WordArt {
      // The text rendered as word art.
      rendered_text: string
    }

    // A PageElement kind representing a linked chart embedded from Google Sheets.
    export interface SheetsChart {
      // The ID of the Google Sheets spreadsheet that contains the source chart.
      spreadsheet_id: string
      // The ID of the specific chart in the Google Sheets spreadsheet that is
      // embedded.
      chart_id: number
      // The URL of an image of the embedded chart, with a default lifetime of 30
      // minutes. This URL is tagged with the account of the requester. Anyone with
      // the URL effectively accesses the image as the original requester. Access to
      // the image may be lost if the presentation's sharing settings change.
      content_url: string
      // The properties of the Sheets chart.
      sheets_chart_properties: SheetsChartProperties
    }

    // The properties of the SheetsChart.
    export interface SheetsChartProperties {
      // The kind of Sheets chart properties.
      kind: {
        // The properties of the embedded chart image.
        chart_image_properties: ImageProperties
      }
    }

    //// FILE: properties.proto ////
    // The possible states of a property.
    enum PropertyState {
      // If a property's state is RENDERED, then the element has the corresponding
      // property when rendered on a page. If the element is a placeholder shape as
      // determined by the placeholder
      // field, and it inherits from a placeholder shape, the corresponding field
      // may be unset, meaning that the property value is inherited from a parent
      // placeholder. If the element does not inherit, then the field will contain
      // the rendered value. This is the default value.
      RENDERED,
      // If a property's state is NOT_RENDERED, then the element does not have the
      // corresponding property when rendered on a page. However, the field may
      // still be set so it can be inherited by child shapes. To remove a property
      // from a rendered element, set its property_state to NOT_RENDERED.
      NOT_RENDERED,
      // If a property's state is INHERIT, then the property state uses the value of
      // corresponding `property_state` field on the parent shape. Elements that do
      // not inherit will never have an INHERIT property state.
      INHERIT,
    }

    // The stretched picture fill. The page or page element is filled entirely with
    // the specified picture. The picture is stretched to fit its container.
    export interface StretchedPictureFill {
      // Reading the content_url:
      //
      // An URL to a picture with a default lifetime of 30 minutes.
      // This URL is tagged with the account of the requester. Anyone with the URL
      // effectively accesses the picture as the original requester. Access to the
      // picture may be lost if the presentation's sharing settings change.
      //
      // Writing the content_url:
      //
      // The picture is fetched once at insertion time and a copy is stored for
      // display inside the presentation. Pictures must be less than 50MB in size,
      // cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF
      // format.
      //
      // The provided URL can be at most 2 kB in length.
      //
      content_url: string,
      // The original size of the picture fill. This field is read-only.
      size: Size,
    }

    // A solid color fill. The page or page element is filled entirely with the
    // specified color value.
    //
    // If any field is unset, its value may be inherited from a parent placeholder
    // if it exists.
    export interface SolidFill {
      // The color value of the solid fill.
      color: OpaqueColor,
      // The fraction of this `color` that should be applied to the pixel.
      // That is, the final pixel color is defined by the equation:
      //
      //   pixel color = alpha * (color) + (1.0 - alpha) * (background color)
      //
      // This means that a value of 1.0 corresponds to a solid color, whereas
      // a value of 0.0 corresponds to a completely transparent color.
      alpha: number
    }

    // The fill of the outline.
    interface OutlineOutlineFill {
      // The kind of outline fill.
      kind: {
        // Solid color fill.
        solid_fill: SolidFill
      }
    }

    // The outline of a PageElement.
    //
    // If these fields are unset, they may be inherited from a parent placeholder
    // if it exists. If there is no parent, the fields will default to the value
    // used for new page elements created in the Slides editor, which may depend on
    // the page element kind.
    export interface Outline {
      // Solid color fill.
      solid_fill: SolidFill
      // The fill of the outline.
      outline_fill: OutlineOutlineFill
      // The thickness of the outline.
      weight: Dimension
      // The dash style of the outline.
      dash_style: DashStyle
      // The outline property state.
      //
      // Updating the outline on a page element will implicitly update this field
      // to `RENDERED`, unless another value is specified in the same request. To
      // have no outline on a page element, set this field to `NOT_RENDERED`. In
      // this case, any other outline fields set in the same request will be
      // ignored.
      property_state: PropertyState
    }

    // The kinds of dashes with which linear geometry can be rendered. These
    // values are based on the "ST_PresetLineDashVal" simple type described in
    // section 20.1.10.48 of "Office Open XML File Formats - Fundamentals and
    // Markup Language Reference", part 1 of [ECMA-376 4th
    // edition](http://www.ecma-international.org/publications/standards/Ecma-376.htm).
    export enum DashStyle {
      // Unspecified dash style.
      DASH_STYLE_UNSPECIFIED,
      // Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'.
      // This is the default dash style.
      SOLID,
      // Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.
      DOT,
      // Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.
      DASH,
      // Alternating dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal
      // value 'dashDot'.
      DASH_DOT,
      // Line with large dashes. Corresponds to ECMA-376 ST_PresetLineDashVal
      // value 'lgDash'.
      LONG_DASH,
      // Alternating large dashes and dots. Corresponds to ECMA-376
      // ST_PresetLineDashVal value 'lgDashDot'.
      LONG_DASH_DOT,
    }

    // Defines reference positions in a rectangle.
    export enum RectanglePosition {
      // Unspecified.
      RECTANGLE_POSITION_UNSPECIFIED,
      // Top left.
      TOP_LEFT,
      // Top center.
      TOP_CENTER,
      // Top right.
      TOP_RIGHT,
      // Left center.
      LEFT_CENTER,
      // Center.
      CENTER,
      // Right center.
      RIGHT_CENTER,
      // Bottom left.
      BOTTOM_LEFT,
      // Bottom center.
      BOTTOM_CENTER,
      // Bottom right.
      BOTTOM_RIGHT,
    }

    // The shadow types.
    export enum ShadowType {
      // Unspecified shadow type.
      SHADOW_TYPE_UNSPECIFIED,
      // Outer shadow.
      OUTER,
    }

    // The shadow properties of a page element.
    //
    // If these fields are unset, they may be inherited from a parent placeholder
    // if it exists. If there is no parent, the fields will default to the value
    // used for new page elements created in the Slides editor, which may depend on
    // the page element kind.
    export interface Shadow {
      // The type of the shadow.
      type: ShadowType,
      // Transform that encodes the translate, scale, and skew of the shadow,
      // relative to the alignment position.
      transform: AffineTransform,
      // The alignment point of the shadow, that sets the origin for translate,
      // scale and skew of the shadow.
      alignment: RectanglePosition,
      // The radius of the shadow blur. The larger the radius, the more diffuse the
      // shadow becomes.
      blur_radius: Dimension,
      // The shadow color value.
      color: OpaqueColor,
      // The alpha of the shadow's color, from 0.0 to 1.0.
      alpha: number
      // Whether the shadow should rotate with the shape.
      rotate_with_shape: boolean
      // The shadow property state.
      //
      // Updating the shadow on a page element will implicitly update this field to
      // `RENDERED`, unless another value is specified in the same request. To have
      // no shadow on a page element, set this field to `NOT_RENDERED`. In this
      // case, any other shadow fields set in the same request will be ignored.
      property_state: PropertyState
    }

    // The crop properties of an object enclosed in a container. For example, an
    // Image.
    //
    // The crop properties is represented by the offsets of four edges which define
    // a crop rectangle. The offsets are measured in percentage from the
    // corresponding edges of the object's original bounding rectangle towards
    // inside, relative to the object's original dimensions.
    //
    // - If the offset is in the interval (0, 1), the corresponding edge of crop
    // rectangle is positioned inside of the object's original bounding rectangle.
    // - If the offset is negative or greater than 1, the corresponding edge of crop
    // rectangle is positioned outside of the object's original bounding rectangle.
    // - If the left edge of the crop rectangle is on the right side of its right
    // edge, the object will be flipped horizontally.
    // - If the top edge of the crop rectangle is below its bottom edge, the object
    // will be flipped vertically.
    // - If all offsets and rotation angle is 0, the object is not cropped.
    //
    // After cropping, the content in the crop rectangle will be stretched to fit
    // its container.
    export interface CropProperties {
      // The offset specifies the left edge of the crop rectangle that is located to
      // the right of the original bounding rectangle left edge, relative to the
      // object's original width.
      left_offset: number
      // The offset specifies the right edge of the crop rectangle that is located
      // to the left of the original bounding rectangle right edge, relative to the
      // object's original width.
      right_offset: number
      // The offset specifies the top edge of the crop rectangle that is located
      // below the original bounding rectangle top edge, relative to the object's
      // original height.
      top_offset: number
      // The offset specifies the bottom edge of the crop rectangle that is located
      // above the original bounding rectangle bottom edge, relative to the object's
      // original height.
      bottom_offset: number
      // The rotation angle of the crop window around its center, in radians.
      // Rotation angle is applied after the offset.
      angle: number
    }

    // A recolor effect applied on an image.
    export enum RecolorName {
      // No recolor effect. The default value.
      NONE,
      // A recolor effect that lightens the image using the page's first available
      // color from its color scheme.
      LIGHT1,
      // A recolor effect that lightens the image using the page's second
      // available color from its color scheme.
      LIGHT2,
      // A recolor effect that lightens the image using the page's third available
      // color from its color scheme.
      LIGHT3,
      // A recolor effect that lightens the image using the page's forth available
      // color from its color scheme.
      LIGHT4,
      // A recolor effect that lightens the image using the page's fifth available
      // color from its color scheme.
      LIGHT5,
      // A recolor effect that lightens the image using the page's sixth available
      // color from its color scheme.
      LIGHT6,
      // A recolor effect that lightens the image using the page's seventh
      // available color from its color scheme.e.
      LIGHT7,
      // A recolor effect that lightens the image using the page's eighth
      // available color from its color scheme.
      LIGHT8,
      // A recolor effect that lightens the image using the page's ninth available
      // color from its color scheme.
      LIGHT9,
      // A recolor effect that lightens the image using the page's tenth available
      // color from its color scheme.
      LIGHT10,
      // A recolor effect that darkens the image using the page's first available
      // color from its color scheme.
      DARK1,
      // A recolor effect that darkens the image using the page's second available
      // color from its color scheme.
      DARK2,
      // A recolor effect that darkens the image using the page's third available
      // color from its color scheme.
      DARK3,
      // A recolor effect that darkens the image using the page's fourth available
      // color from its color scheme.
      DARK4,
      // A recolor effect that darkens the image using the page's fifth available
      // color from its color scheme.
      DARK5,
      // A recolor effect that darkens the image using the page's sixth available
      // color from its color scheme.
      DARK6,
      // A recolor effect that darkens the image using the page's seventh
      // available color from its color scheme.
      DARK7,
      // A recolor effect that darkens the image using the page's eighth available
      // color from its color scheme.
      DARK8,
      // A recolor effect that darkens the image using the page's ninth available
      // color from its color scheme.
      DARK9,
      // A recolor effect that darkens the image using the page's tenth available
      // color from its color scheme.
      DARK10,
      // A recolor effect that recolors the image to grayscale.
      GRAYSCALE,
      // A recolor effect that recolors the image to negative grayscale.
      NEGATIVE,
      // A recolor effect that recolors the image using the sepia color.
      SEPIA,
      // Custom recolor effect. Refer to `recolor_stops` for the concrete
      // gradient.
      CUSTOM,
    }

    // A recolor effect applied on an image.
    export interface Recolor {
      // The recolor effect is represented by a gradient, which is a list of color
      // stops.
      //
      // The colors in the gradient will replace the corresponding colors at
      // the same position in the color palette and apply to the image. This
      // property is read-only.
      recolor_stops: ColorStop[],
      // The name of the recolor effect.
      //
      // The name is determined from the `recolor_stops` by matching the gradient
      // against the colors in the page's current color scheme. This property is
      // read-only.
      name: RecolorName,
    }

    //// FILE: requests.proto ////

    //// FILE: slides.proto ////
    // GetPage, CreatePresentation, BatchUpdatePresentation, GetPageThumbnail are not used.
    // TODO export top level methods

    //// FILE: text.proto ////
    // A TextElement describes the content of a range of indices in the text content
    // of a Shape or TableCell.
    interface TextElement {
      // The zero-based start index of this text element, in Unicode code units.
      start_index: number
      // The zero-based end index of this text element, exclusive, in Unicode code
      // units.
      end_index: number
      // The kind of text that this element represents.
      kind: {
        // A marker representing the beginning of a new paragraph.
        //
        // The `start_index` and `end_index` of this TextElement represent the
        // range of the paragraph. Other TextElements with an index range contained
        // inside this paragraph's range are considered to be part of this
        // paragraph. The range of indices of two separate paragraphs will never
        // overlap.
        paragraph_marker: ParagraphMarker
        // A TextElement representing a run of text where all of the characters
        // in the run have the same TextStyle.
        //
        // The `start_index` and `end_index` of TextRuns will always be fully
        // contained in the index range of a single `paragraph_marker` TextElement.
        // In other words, a TextRun will never span multiple paragraphs.
        text_run: TextRun
        // A TextElement representing a spot in the text that is dynamically
        // replaced with content that can change over time.
        auto_text: AutoText
      }
    }

    // A TextElement kind that represents the beginning of a new paragraph.
    interface ParagraphMarker {
      // The paragraph's style
      style: ParagraphStyle
      // The bullet for this paragraph. If not present, the paragraph does not
      // belong to a list.
      bullet: Bullet
    }

    // A List describes the look and feel of bullets belonging to paragraphs
    // associated with a list. A paragraph that is part of a list has an implicit
    // reference to that list's ID.
    interface List {
      // The ID of the list.
      list_id: string
      // A map of nesting levels to the properties of bullets at the associated
      // level. A list has at most nine levels of nesting, so the possible values
      // for the keys of this map are 0 through 8, inclusive.
      nesting_level: Map<number, NestingLevel>
    }

    // Describes the bullet of a paragraph.
    interface Bullet {
      // The ID of the list this paragraph belongs to.
      list_id: string
      // The nesting level of this paragraph in the list.
      nesting_level: number
      // The rendered bullet glyph for this paragraph.
      glyph: string
      // The paragraph specific text style applied to this bullet.
      bullet_style: TextStyle
    }

    // Contains properties describing the look and feel of a list bullet at a given
    // level of nesting.
    interface NestingLevel {
      // The style of a bullet at this level of nesting.
      bullet_style: TextStyle
    }

    // A TextElement kind that represents a run of text that all has the same
    // styling.
    interface TextRun {
      // The text of this run.
      content: string
      // The styling applied to this run.
      style: TextStyle
    }

    // The types of auto text
    enum AutoTextType {
      // An unspecified autotext type.
      TYPE_UNSPECIFIED,
      // Type for autotext that represents the current slide number.
      SLIDE_NUMBER
    }

    // A TextElement kind that represents auto text.
    interface AutoText {
      // The type of this auto text.
      type: AutoTextType
      // The rendered content of this auto text, if available.
      content: string,
      // The styling applied to this auto text.
      style: TextStyle
    }

    // The types of text alignment for a paragraph.
    enum ParagraphStyleAlignment {
      // The paragraph alignment is inherited from the parent.
      ALIGNMENT_UNSPECIFIED,
      // The paragraph is aligned to the start of the line. Left-aligned for
      // LTR text, right-aligned otherwise.
      START,
      // The paragraph is centered.
      CENTER,
      // The paragraph is aligned to the end of the line. Right-aligned for
      // LTR text, left-aligned otherwise.
      END,
      // The paragraph is justified.
      JUSTIFIED,
    }

    // The directions text can flow in.
    enum ParagraphStyleTextDirection {
      // The text direction is inherited from the parent.
      TEXT_DIRECTION_UNSPECIFIED,
      // The text goes from left to right.
      LEFT_TO_RIGHT,
      // The text goes from right to left.
      RIGHT_TO_LEFT,
    }

    // The different modes for paragraph spacing.
    enum ParagraphStyleSpacingMode {
      // The spacing mode is inherited from the parent.
      SPACING_MODE_UNSPECIFIED,
      // Paragraph spacing is always rendered.
      NEVER_COLLAPSE,
      // Paragraph spacing is skipped between list elements.
      COLLAPSE_LISTS,
    }

    // Styles that apply to a whole paragraph.
    //
    // If this text is contained in a shape with a parent placeholder, then these
    // paragraph styles may be inherited from the parent. Which paragraph styles
    // are inherited depend on the nesting level of lists:
    //
    // * A paragraph not in a list will inherit its paragraph style from the
    //   paragraph at the 0 nesting level of the list inside the parent placeholder.
    // * A paragraph in a list will inherit its paragraph style from the paragraph
    //   at its corresponding nesting level of the list inside the parent
    //   placeholder.
    //
    // Inherited paragraph styles are represented as unset fields in this message.
    interface ParagraphStyle {
      // The amount of space between lines, as a percentage of normal, where normal
      // is represented as 100.0. If unset, the value is inherited from the parent.
      line_spacing: number,

      // The text alignment for this paragraph.
      alignment: ParagraphStyleAlignment

      // The amount indentation for the paragraph on the side that corresponds to
      // the start of the text, based on the current text direction. If unset, the
      // value is inherited from the parent.
      indent_start: Dimension,

      // The amount indentation for the paragraph on the side that corresponds to
      // the end of the text, based on the current text direction. If unset, the
      // value is inherited from the parent.
      indent_end: Dimension,

      // The amount of extra space above the paragraph. If unset, the value is
      // inherited from the parent.
      space_above: Dimension,

      // The amount of extra space below the paragraph. If unset, the value is
      // inherited from the parent.
      space_below: Dimension,

      // The amount of indentation for the start of the first line of the paragraph.
      // If unset, the value is inherited from the parent.
      indent_first_line: Dimension,

      // The text direction of this paragraph. If unset, the value defaults to
      // LEFT_TO_RIGHT] since text direction is not inherited.
      direction: ParagraphStyleTextDirection

      // The spacing mode for the paragraph.
      spacing_mode: ParagraphStyleSpacingMode
    }

    // The ways in which text can be vertically offset from its normal position.
    enum TextStyleBaselineOffset {
      // The text's baseline offset is inherited from the parent.
      BASELINE_OFFSET_UNSPECIFIED,
      // The text is not vertically offset.
      NONE,
      // The text is vertically offset upwards (superscript).
      SUPERSCRIPT,
      // The text is vertically offset downwards (subscript).
      SUBSCRIPT,
    }

    // Represents a font family and weight used to style a TextRun.
    interface TextStyleWeightedFontFamily {
      // The font family of the text.
      //
      // The font family can be any font from the Font menu in Slides or from
      // [Google Fonts](https://fonts.google.com/). If the font name is
      // unrecognized, the text is rendered in `Arial`.
      font_family: string

      // The rendered weight of the text. This field can have any value that is a
      // multiple of `100` between `100` and `900`, inclusive. This range
      // corresponds to the numerical values described in the CSS 2.1
      // Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness),
      // with non-numerical values disallowed. Weights greater than or equal to
      // `700` are considered bold, and weights less than `700`are not bold. The
      // default value is `400` ("normal").
      weight: number
    }

    // Represents the styling that can be applied to a TextRun.
    //
    // If this text is contained in a shape with a parent placeholder, then these text styles may be
    // inherited from the parent. Which text styles are inherited depend on the
    // nesting level of lists:
    //
    // * A text run in a paragraph that is not in a list will inherit its text style
    //   from the the newline character in the paragraph at the 0 nesting level of
    //   the list inside the parent placeholder.
    // * A text run in a paragraph that is in a list will inherit its text style
    //   from the newline character in the paragraph at its corresponding nesting
    //   level of the list inside the parent placeholder.
    //
    // Inherited text styles are represented as unset fields in this message. If
    // text is contained in a shape without a parent placeholder, unsetting these
    // fields will revert the style to a value matching the defaults in the Slides
    // editor.
    interface TextStyle {
      // The background color of the text. If set, the color is either opaque or
      // transparent, depending on if the `opaque_color` field in it is set.
      background_color: OptionalColor,

      // The color of the text itself. If set, the color is either opaque or
      // transparent, depending on if the `opaque_color` field in it is set.
      foreground_color: OptionalColor,

      // Whether or not the text is rendered as bold.
      bold: boolean,

      // Whether or not the text is italicized.
      italic: boolean,

      // The font family of the text.
      //
      // The font family can be any font from the Font menu in Slides or from
      // [Google Fonts] (https://fonts.google.com/). If the font name is
      // unrecognized, the text is rendered in `Arial`.
      //
      // Some fonts can affect the weight of the text. If an update request
      // specifies values for both `font_family` and `bold`, the explicitly-set
      // `bold` value is used.
      font_family: string,

      // The size of the text's font. When read, the `font_size` will specified in
      // points.
      font_size: Dimension

      // The hyperlink destination of the text. If unset, there is no link. Links
      // are not inherited from parent text.
      //
      // Changing the link in an update request causes some other changes to the
      // text style of the range:
      //
      // * When setting a link, the text foreground color will be set to
      //   ThemeColorType.HYPERLINK and the text will
      //   be underlined. If these fields are modified in the same
      //   request, those values will be used instead of the link defaults.
      // * Setting a link on a text range that overlaps with an existing link will
      //   also update the existing link to point to the new URL.
      // * Links are not settable on newline characters. As a result, setting a link
      //   on a text range that crosses a paragraph boundary, such as `"ABC\n123"`,
      //   will separate the newline character(s) into their own text runs. The
      //   link will be applied separately to the runs before and after the newline.
      // * Removing a link will update the text style of the range to match the
      //   style of the preceding text (or the default text styles if the preceding
      //   text is another link) unless different styles are being set in the same
      //   request.
      link: Link

      // The text's vertical offset from its normal position.
      //
      // Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically
      // rendered in a smaller font size, computed based on the `font_size` field.
      // The `font_size` itself is not affected by changes in this field.
      baseline_offset: TextStyleBaselineOffset

      // Whether or not the text is in small capital letters.
      small_caps: boolean,

      // Whether or not the text is struck through.
      strikethrough: boolean,

      // Whether or not the text is underlined.
      underline: boolean,

      // The font family and rendered weight of the text.
      //
      // This field is an extension of `font_family` meant to support explicit font
      // weights without breaking backwards compatibility. As such, when reading the
      // style of a range of text, the value of `weighted_font_family#font_family`
      // will always be equal to that of `font_family`. However, when writing, if
      // both fields are included in the field mask (either explicitly or through
      // the wildcard `"*"`), their values are reconciled as follows:
      //
      // * If `font_family` is set and `weighted_font_family` is not, the value of
      //   `font_family` is applied with weight `400` ("normal").
      // * If both fields are set, the value of `font_family` must match that of
      //   `weighted_font_family#font_family`. If so, the font family and weight of
      //   `weighted_font_family` is applied. Otherwise, a 400 bad request error is
      //   returned.
      // * If `weighted_font_family` is set and `font_family` is not, the font
      //   family and weight of `weighted_font_family` is applied.
      // * If neither field is set, the font family and weight of the text inherit
      //   from the parent. Note that these properties cannot inherit separately
      //   from each other.
      //
      // If an update request specifies values for both `weighted_font_family` and
      // `bold`, the `weighted_font_family` is applied first, then `bold`.
      //
      // If `weighted_font_family#weight` is not set, it defaults to `400`.
      //
      // If `weighted_font_family` is set, then `weighted_font_family#font_family`
      // must also be set with a non-empty value. Otherwise, a 400 bad request error
      // is returned.
      weighted_font_family: TextStyleWeightedFontFamily
    }

    // The kinds of relative links.
    enum RelativeSlideLinkLink {
      // An unspecified relative slide link.
      RELATIVE_SLIDE_LINK_UNSPECIFIED,
      // A link to the next slide.
      NEXT_SLIDE,
      // A link to the previous slide.
      PREVIOUS_SLIDE,
      // A link to the first slide in the presentation.
      FIRST_SLIDE,
      // A link to the last slide in the presentation.
      LAST_SLIDE,
    }

    // The kinds of links.
    interface LinkKind {
      // If set, indicates this is a link to the external web page at this URL.
      url: string
      // If set, indicates this is a link to a slide in this presentation,
      // addressed by its position.
      relative_link: RelativeSlideLinkLink
      // If set, indicates this is a link to the specific page in this
      // presentation with this ID. A page with this ID may not exist.
      page_object_id: string
      // If set, indicates this is a link to the slide at this zero-based index
      // in the presentation. There may not be a slide at this index.
      slide_index: number
    }

    // A hypertext link.
    interface Link {
      // The kinds of links.
      kind: LinkKind
    }

    //// FILE: transform.proto ////
    interface AffineTransform {
      // The X coordinate scaling element.
      scale_x: number

      // The Y coordinate scaling element.
      scale_y: number

      // The X coordinate shearing element.
      shear_x: number

      // The Y coordinate shearing element.
      shear_y: number

      // The X coordinate translation element.
      translate_x: number

      // The Y coordinate translation element.
      translate_y: number

      // The units for translate elements.
      unit: Unit
    }
  }
}
