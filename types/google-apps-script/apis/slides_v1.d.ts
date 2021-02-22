// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Slides {
        namespace Collection {
            namespace Presentations {
                interface PagesCollection {
                    // Gets the latest version of the specified page in the presentation.
                    get(presentationId: string, pageObjectId: string): Schema.Page;
                    // Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail
                    // image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
                    getThumbnail(presentationId: string, pageObjectId: string): Schema.Thumbnail;
                    // Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail
                    // image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
                    getThumbnail(presentationId: string, pageObjectId: string, optionalArgs: object): Schema.Thumbnail;
                }
            }
            interface PresentationsCollection {
                Pages?: Collection.Presentations.PagesCollection;
                // Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not
                // valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some
                // information about how they are applied. Other requests do not need to return information; these each return an empty
                // reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates,
                // and only the third one returns information. The response would have two empty replies: the reply to the third request,
                // and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not
                // exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no
                // collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to
                // be applied together atomically.
                batchUpdate(resource: Schema.BatchUpdatePresentationRequest, presentationId: string): Schema.BatchUpdatePresentationResponse;
                // Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the
                // ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided
                // content, are ignored. Returns the created presentation.
                create(resource: Schema.Presentation): Schema.Presentation;
                // Gets the latest version of the specified presentation.
                get(presentationId: string): Schema.Presentation;
            }
        }
        namespace Schema {
            // AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into
            // destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' =
            // scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore
            // composed of these six matrix elements.
            interface AffineTransform {
                // The X coordinate scaling element.
                scaleX?: number;
                // The Y coordinate scaling element.
                scaleY?: number;
                // The X coordinate shearing element.
                shearX?: number;
                // The Y coordinate shearing element.
                shearY?: number;
                // The X coordinate translation element.
                translateX?: number;
                // The Y coordinate translation element.
                translateY?: number;
                // The units for translate elements.
                unit?: string;
            }
            // A TextElement kind that represents auto text.
            interface AutoText {
                // The rendered content of this auto text, if available.
                content?: string;
                // The styling applied to this auto text.
                style?: Schema.TextStyle;
                // The type of this auto text.
                type?: string;
            }
            // The autofit properties of a Shape.
            interface Autofit {
                // The autofit type of the shape. If unspecified, the autofit type is inherited from a parent placeholder if it exists. The
                // field will be automatically set to NONE if a request is made that may affect text fitting within its bounding text box.
                // In this case the font_scale will be applied to the font_size and the line_spacing_reduction will be applied to the
                // line_spacing. Both properties would also be reset to default values.
                autofitType?: string;
                // The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value will be the default
                // value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size will give the font size that is rendered in the
                // editor. This property is read-only.
                fontScale?: number;
                // The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value will be
                // the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing will give the line spacing that is
                // rendered in the editor. This property is read-only.
                lineSpacingReduction?: number;
            }
            // Request message for PresentationsService.BatchUpdatePresentation.
            interface BatchUpdatePresentationRequest {
                // A list of updates to apply to the presentation.
                requests?: Schema.Request[];
                // Provides control over how write requests are executed.
                writeControl?: Schema.WriteControl;
            }
            // Response message from a batch update.
            interface BatchUpdatePresentationResponse {
                // The presentation the updates were applied to.
                presentationId?: string;
                // The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
                replies?: Schema.Response[];
                // The updated write control after applying the request.
                writeControl?: Schema.WriteControl;
            }
            // Describes the bullet of a paragraph.
            interface Bullet {
                // The paragraph specific text style applied to this bullet.
                bulletStyle?: Schema.TextStyle;
                // The rendered bullet glyph for this paragraph.
                glyph?: string;
                // The ID of the list this paragraph belongs to.
                listId?: string;
                // The nesting level of this paragraph in the list.
                nestingLevel?: Integer;
            }
            // The palette of predefined colors for a page.
            interface ColorScheme {
                // The ThemeColorType and corresponding concrete color pairs.
                colors?: Schema.ThemeColorPair[];
            }
            // A color and position in a gradient band.
            interface ColorStop {
                // The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
                alpha?: number;
                // The color of the gradient stop.
                color?: Schema.OpaqueColor;
                // The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval
                // [0.0, 1.0].
                position?: number;
            }
            // Creates an image.
            interface CreateImageRequest {
                // The element properties for the image. When the aspect ratio of the provided size does not match the image aspect ratio,
                // the image is scaled and centered with respect to the size in order to maintain aspect ratio. The provided transform is
                // applied after this operation. The PageElementProperties.size property is optional. If you don't specify the size, the
                // default size of the image is used. The PageElementProperties.transform property is optional. If you don't specify a
                // transform, the image will be placed at the top left corner of the page.
                elementProperties?: Schema.PageElementProperties;
                // A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the
                // presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`);
                // remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the
                // ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
                objectId?: string;
                // The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation.
                // Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The
                // provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url
                // field.
                url?: string;
            }
            // The result of creating an image.
            interface CreateImageResponse {
                // The object ID of the created image.
                objectId?: string;
            }
            // Creates a line.
            interface CreateLineRequest {
                // The category of the line to be created. The exact line type created is determined based on the category and how it's
                // routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes
                // precedence. If you do not specify a value for `category`, but specify a value for `line_category`, then the specified
                // `line_category` value is used. If you do not specify either, then STRAIGHT is used.
                category?: string;
                // The element properties for the line.
                elementProperties?: Schema.PageElementProperties;
                // The category of the line to be created. *Deprecated*: use `category` instead. The exact line type created is determined
                // based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a
                // `line_category`, the `category` takes precedence.
                lineCategory?: string;
                // A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the
                // presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`);
                // remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the
                // ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
                objectId?: string;
            }
            // The result of creating a line.
            interface CreateLineResponse {
                // The object ID of the created line.
                objectId?: string;
            }
            // Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each
            // paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the
            // bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of
            // parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the
            // paragraphs being updated are added to that preceding list.
            interface CreateParagraphBulletsRequest {
                // The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset.
                bulletPreset?: string;
                // The optional table cell location if the text to be modified is in a table cell. If present, the object_id must refer to
                // a table.
                cellLocation?: Schema.TableCellLocation;
                // The object ID of the shape or table containing the text to add bullets to.
                objectId?: string;
                // The range of text to apply the bullet presets to, based on TextElement indexes.
                textRange?: Schema.Range;
            }
            // Creates a new shape.
            interface CreateShapeRequest {
                // The element properties for the shape.
                elementProperties?: Schema.PageElementProperties;
                // A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the
                // presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`);
                // remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the
                // ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated.
                objectId?: string;
                // The shape type.
                shapeType?: string;
            }
            // The result of creating a shape.
            interface CreateShapeResponse {
                // The object ID of the created shape.
                objectId?: string;
            }
            // Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly,
            // spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
            interface CreateSheetsChartRequest {
                // The ID of the specific chart in the Google Sheets spreadsheet.
                chartId?: Integer;
                // The element properties for the chart. When the aspect ratio of the provided size does not match the chart aspect ratio,
                // the chart is scaled and centered with respect to the size in order to maintain aspect ratio. The provided transform is
                // applied after this operation.
                elementProperties?: Schema.PageElementProperties;
                // The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that
                // is not linked.
                linkingMode?: string;
                // A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation.
                // The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters
                // [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be
                // generated.
                objectId?: string;
                // The ID of the Google Sheets spreadsheet that contains the chart.
                spreadsheetId?: string;
            }
            // The result of creating an embedded Google Sheets chart.
            interface CreateSheetsChartResponse {
                // The object ID of the created chart.
                objectId?: string;
            }
            // Creates a new slide.
            interface CreateSlideRequest {
                // The optional zero-based index indicating where to insert the slides. If you don't specify an index, the new slide is
                // created at the end.
                insertionIndex?: Integer;
                // A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the
                // presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`);
                // remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the
                // ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
                objectId?: string;
                // An optional list of object ID mappings from the placeholder(s) on the layout to the placeholder(s) that will be created
                // on the new slide from that specified layout. Can only be used when `slide_layout_reference` is specified.
                placeholderIdMappings?: Schema.LayoutPlaceholderIdMapping[];
                // Layout reference of the slide to be inserted, based on the *current master*, which is one of the following: - The master
                // of the previous slide index. - The master of the first slide, if the insertion_index is zero. - The first master in the
                // presentation, if there are no slides. If the LayoutReference is not found in the current master, a 400 bad request error
                // is returned. If you don't specify a layout reference, then the new slide will use the predefined layout `BLANK`.
                slideLayoutReference?: Schema.LayoutReference;
            }
            // The result of creating a slide.
            interface CreateSlideResponse {
                // The object ID of the created slide.
                objectId?: string;
            }
            // Creates a new table.
            interface CreateTableRequest {
                // Number of columns in the table.
                columns?: Integer;
                // The element properties for the table. The table will be created at the provided size, subject to a minimum size. If no
                // size is provided, the table will be automatically sized. Table transforms must have a scale of 1 and no shear
                // components. If no transform is provided, the table will be centered on the page.
                elementProperties?: Schema.PageElementProperties;
                // A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the
                // presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`);
                // remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the
                // ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
                objectId?: string;
                // Number of rows in the table.
                rows?: Integer;
            }
            // The result of creating a table.
            interface CreateTableResponse {
                // The object ID of the created table.
                objectId?: string;
            }
            // Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the
            // drive, drive.readonly, or drive.file OAuth scopes.
            interface CreateVideoRequest {
                // The element properties for the video. The PageElementProperties.size property is optional. If you don't specify a size,
                // a default size is chosen by the server. The PageElementProperties.transform property is optional. The transform must not
                // have shear components. If you don't specify a transform, the video will be placed at the top left corner of the page.
                elementProperties?: Schema.PageElementProperties;
                // The video source's unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0,
                // the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID
                // is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q.
                id?: string;
                // A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the
                // presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`);
                // remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the
                // ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
                objectId?: string;
                // The video source.
                source?: string;
            }
            // The result of creating a video.
            interface CreateVideoResponse {
                // The object ID of the created video.
                objectId?: string;
            }
            // The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by
            // the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding
            // edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the
            // offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original
            // bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is
            // positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right
            // side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its
            // bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped.
            // After cropping, the content in the crop rectangle will be stretched to fit its container.
            interface CropProperties {
                // The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.
                angle?: number;
                // The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom
                // edge, relative to the object's original height.
                bottomOffset?: number;
                // The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle
                // left edge, relative to the object's original width.
                leftOffset?: number;
                // The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle
                // right edge, relative to the object's original width.
                rightOffset?: number;
                // The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge,
                // relative to the object's original height.
                topOffset?: number;
            }
            // Deletes an object, either pages or page elements, from the presentation.
            interface DeleteObjectRequest {
                // The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page
                // elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting shapes are also
                // deleted.
                objectId?: string;
            }
            // Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each
            // paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
            interface DeleteParagraphBulletsRequest {
                // The optional table cell location if the text to be modified is in a table cell. If present, the object_id must refer to
                // a table.
                cellLocation?: Schema.TableCellLocation;
                // The object ID of the shape or table containing the text to delete bullets from.
                objectId?: string;
                // The range of text to delete bullets from, based on TextElement indexes.
                textRange?: Schema.Range;
            }
            // Deletes a column from a table.
            interface DeleteTableColumnRequest {
                // The reference table cell location from which a column will be deleted. The column this cell spans will be deleted. If
                // this is a merged cell, multiple columns will be deleted. If no columns remain in the table after this deletion, the
                // whole table is deleted.
                cellLocation?: Schema.TableCellLocation;
                // The table to delete columns from.
                tableObjectId?: string;
            }
            // Deletes a row from a table.
            interface DeleteTableRowRequest {
                // The reference table cell location from which a row will be deleted. The row this cell spans will be deleted. If this is
                // a merged cell, multiple rows will be deleted. If no rows remain in the table after this deletion, the whole table is
                // deleted.
                cellLocation?: Schema.TableCellLocation;
                // The table to delete rows from.
                tableObjectId?: string;
            }
            // Deletes text from a shape or a table cell.
            interface DeleteTextRequest {
                // The optional table cell location if the text is to be deleted from a table cell. If present, the object_id must refer to
                // a table.
                cellLocation?: Schema.TableCellLocation;
                // The object ID of the shape or table from which the text will be deleted.
                objectId?: string;
                // The range of text to delete, based on TextElement indexes. There is always an implicit newline character at the end of a
                // shape's or table cell's text that cannot be deleted. `Range.Type.ALL` will use the correct bounds, but care must be
                // taken when specifying explicit bounds for range types `FROM_START_INDEX` and `FIXED_RANGE`. For example, if the text is
                // "ABC", followed by an implicit newline, then the maximum value is 2 for `text_range.start_index` and 3 for
                // `text_range.end_index`. Deleting text that crosses a paragraph boundary may result in changes to paragraph styles and
                // lists as the two paragraphs are merged. Ranges that include only one code unit of a surrogate pair are expanded to
                // include both code units.
                textRange?: Schema.Range;
            }
            // A magnitude in a single direction in the specified units.
            interface Dimension {
                // The magnitude.
                magnitude?: number;
                // The units for magnitude.
                unit?: string;
            }
            // Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following
            // the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position
            // as the original.
            interface DuplicateObjectRequest {
                // The ID of the object to duplicate.
                objectId?: string;
                // The object being duplicated may contain other objects, for example when duplicating a slide or a group page element.
                // This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its
                // values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate
                // may be specified in this map as well, using the same value of the `object_id` field as a key and the newly desired ID as
                // the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation
                // and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may
                // include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less
                // than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If
                // the map is empty or unset, all duplicate objects will receive a new random ID.
                objectIds?: object;
            }
            // The response of duplicating an object.
            interface DuplicateObjectResponse {
                // The ID of the new duplicate object.
                objectId?: string;
            }
            // A PageElement kind representing a joined collection of PageElements.
            interface Group {
                // The collection of elements in the group. The minimum size of a group is 2.
                children?: Schema.PageElement[];
            }
            // Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the
            // children.
            interface GroupObjectsRequest {
                // The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on
                // the same page that are not already in another group. Some page elements, such as videos, tables and placeholder shapes
                // cannot be grouped.
                childrenObjectIds?: string[];
                // A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page
                // elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex
                // `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`).
                // The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
                groupObjectId?: string;
            }
            // The result of grouping objects.
            interface GroupObjectsResponse {
                // The object ID of the created group.
                objectId?: string;
            }
            // A PageElement kind representing an image.
            interface Image {
                // An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone
                // with the URL effectively accesses the image as the original requester. Access to the image may be lost if the
                // presentation's sharing settings change.
                contentUrl?: string;
                // The properties of the image.
                imageProperties?: Schema.ImageProperties;
                // The source URL is the URL used to insert the image. The source URL can be empty.
                sourceUrl?: string;
            }
            // The properties of the Image.
            interface ImageProperties {
                // The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This
                // property is read-only.
                brightness?: number;
                // The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This
                // property is read-only.
                contrast?: number;
                // The crop properties of the image. If not set, the image is not cropped. This property is read-only.
                cropProperties?: Schema.CropProperties;
                // The hyperlink destination of the image. If unset, there is no link.
                link?: Schema.Link;
                // The outline of the image. If not set, the image has no outline.
                outline?: Schema.Outline;
                // The recolor effect of the image. If not set, the image is not recolored. This property is read-only.
                recolor?: Schema.Recolor;
                // The shadow of the image. If not set, the image has no shadow. This property is read-only.
                shadow?: Schema.Shadow;
                // The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1
                // means completely transparent. This property is read-only.
                transparency?: number;
            }
            // Inserts columns into a table. Other columns in the table will be resized to fit the new column.
            interface InsertTableColumnsRequest {
                // The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or
                // right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted
                // to the left (or right) of the merged cell.
                cellLocation?: Schema.TableCellLocation;
                // Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`:
                // insert to the left.
                insertRight?: boolean;
                // The number of columns to be inserted. Maximum 20 per request.
                number?: Integer;
                // The table to insert columns into.
                tableObjectId?: string;
            }
            // Inserts rows into a table.
            interface InsertTableRowsRequest {
                // The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row
                // where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the
                // merged cell.
                cellLocation?: Schema.TableCellLocation;
                // Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above
                // the cell.
                insertBelow?: boolean;
                // The number of rows to be inserted. Maximum 20 per request.
                number?: Integer;
                // The table to insert rows into.
                tableObjectId?: string;
            }
            // Inserts text into a shape or a table cell.
            interface InsertTextRequest {
                // The optional table cell location if the text is to be inserted into a table cell. If present, the object_id must refer
                // to a table.
                cellLocation?: Schema.TableCellLocation;
                // The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based
                // and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme
                // clusters. In these cases, the text will be inserted immediately after the grapheme cluster.
                insertionIndex?: Integer;
                // The object ID of the shape or table where the text will be inserted.
                objectId?: string;
                // The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The
                // paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists
                // and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of
                // neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control
                // characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area
                // (U+E000-U+F8FF) will be stripped out of the inserted text.
                text?: string;
            }
            // The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
            interface LayoutPlaceholderIdMapping {
                // The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a predefined
                // `TITLE_AND_BODY` layout may usually have a TITLE placeholder with index 0 and a BODY placeholder with index 0.
                layoutPlaceholder?: Schema.Placeholder;
                // The object ID of the placeholder on a layout that will be applied to a slide.
                layoutPlaceholderObjectId?: string;
                // A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it
                // must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character
                // or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon
                // (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify
                // an ID, a unique one is generated.
                objectId?: string;
            }
            // The properties of Page are only relevant for pages with page_type LAYOUT.
            interface LayoutProperties {
                // The human-readable name of the layout.
                displayName?: string;
                // The object ID of the master that this layout is based on.
                masterObjectId?: string;
                // The name of the layout.
                name?: string;
            }
            // Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
            interface LayoutReference {
                // Layout ID: the object ID of one of the layouts in the presentation.
                layoutId?: string;
                // Predefined layout.
                predefinedLayout?: string;
            }
            // A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
            interface Line {
                // The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with
                // UpdateLineCategoryRequest.
                lineCategory?: string;
                // The properties of the line.
                lineProperties?: Schema.LineProperties;
                // The type of the line.
                lineType?: string;
            }
            // The properties for one end of a Line connection.
            interface LineConnection {
                // The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have
                // connection sites and therefore cannot be connected to a connector line.
                connectedObjectId?: string;
                // The index of the connection site on the connected page element. In most cases, it corresponds to the predefined
                // connection site index from the ECMA-376 standard. More information on those connection sites can be found in the
                // description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of
                // "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition]
                // (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also
                // be viewed from Slides editor.
                connectionSiteIndex?: Integer;
            }
            // The fill of the line.
            interface LineFill {
                // Solid color fill.
                solidFill?: Schema.SolidFill;
            }
            // The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in
            // the Slides editor.
            interface LineProperties {
                // The dash style of the line.
                dashStyle?: string;
                // The style of the arrow at the end of the line.
                endArrow?: string;
                // The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a
                // "connector" can have an `end_connection`.
                endConnection?: Schema.LineConnection;
                // The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.
                lineFill?: Schema.LineFill;
                // The hyperlink destination of the line. If unset, there is no link.
                link?: Schema.Link;
                // The style of the arrow at the beginning of the line.
                startArrow?: string;
                // The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a
                // "connector" can have a `start_connection`.
                startConnection?: Schema.LineConnection;
                // The thickness of the line.
                weight?: Schema.Dimension;
            }
            // A hypertext link.
            interface Link {
                // If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not
                // exist.
                pageObjectId?: string;
                // If set, indicates this is a link to a slide in this presentation, addressed by its position.
                relativeLink?: string;
                // If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at
                // this index.
                slideIndex?: Integer;
                // If set, indicates this is a link to the external web page at this URL.
                url?: string;
            }
            // A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part
            // of a list has an implicit reference to that list's ID.
            interface List {
                // The ID of the list.
                listId?: string;
                // A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting,
                // so the possible values for the keys of this map are 0 through 8, inclusive.
                nestingLevel?: object;
            }
            // The properties of Page that are only relevant for pages with page_type MASTER.
            interface MasterProperties {
                // The human-readable name of the master.
                displayName?: string;
            }
            // Merges cells in a Table.
            interface MergeTableCellsRequest {
                // The object ID of the table.
                objectId?: string;
                // The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated
                // and stored in the upper-left ("head") cell of the range. If the range is non-rectangular (which can occur in some cases
                // where the range covers cells that are already merged), a 400 bad request error is returned.
                tableRange?: Schema.TableRange;
            }
            // Contains properties describing the look and feel of a list bullet at a given level of nesting.
            interface NestingLevel {
                // The style of a bullet at this level of nesting.
                bulletStyle?: Schema.TextStyle;
            }
            // The properties of Page that are only relevant for pages with page_type NOTES.
            interface NotesProperties {
                // The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual
                // shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape.
                // In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always
                // return the latest object ID.
                speakerNotesObjectId?: string;
            }
            // A themeable solid color value.
            interface OpaqueColor {
                // An opaque RGB color.
                rgbColor?: Schema.RgbColor;
                // An opaque theme color.
                themeColor?: string;
            }
            // A color that can either be fully opaque or fully transparent.
            interface OptionalColor {
                // If set, this will be used as an opaque color. If unset, this represents a transparent color.
                opaqueColor?: Schema.OpaqueColor;
            }
            // The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists.
            // If there is no parent, the fields will default to the value used for new page elements created in the Slides editor,
            // which may depend on the page element kind.
            interface Outline {
                // The dash style of the outline.
                dashStyle?: string;
                // The fill of the outline.
                outlineFill?: Schema.OutlineFill;
                // The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`,
                // unless another value is specified in the same request. To have no outline on a page element, set this field to
                // `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
                propertyState?: string;
                // The thickness of the outline.
                weight?: Schema.Dimension;
            }
            // The fill of the outline.
            interface OutlineFill {
                // Solid color fill.
                solidFill?: Schema.SolidFill;
            }
            // A page in a presentation.
            interface Page {
                // Layout specific properties. Only set if page_type = LAYOUT.
                layoutProperties?: Schema.LayoutProperties;
                // Master specific properties. Only set if page_type = MASTER.
                masterProperties?: Schema.MasterProperties;
                // Notes specific properties. Only set if page_type = NOTES.
                notesProperties?: Schema.NotesProperties;
                // The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
                objectId?: string;
                // The page elements rendered on the page.
                pageElements?: Schema.PageElement[];
                // The properties of the page.
                pageProperties?: Schema.PageProperties;
                // The type of the page.
                pageType?: string;
                // The revision ID of the presentation containing this page. Can be used in update requests to assert that the presentation
                // revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation.
                // The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only
                // guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is
                // unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and
                // user) usually means the presentation has been updated; however, a changed ID can also be due to internal factors such as
                // ID format changes.
                revisionId?: string;
                // Slide specific properties. Only set if page_type = SLIDE.
                slideProperties?: Schema.SlideProperties;
            }
            // The page background fill.
            interface PageBackgroundFill {
                // The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless
                // another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this
                // case, any other fill fields set in the same request will be ignored.
                propertyState?: string;
                // Solid color fill.
                solidFill?: Schema.SolidFill;
                // Stretched picture fill.
                stretchedPictureFill?: Schema.StretchedPictureFill;
            }
            // A visual element rendered on a page.
            interface PageElement {
                // The description of the page element. Combined with title to display alt text. The field is not supported for Group
                // elements.
                description?: string;
                // A collection of page elements joined as a single unit.
                elementGroup?: Schema.Group;
                // An image page element.
                image?: Schema.Image;
                // A line page element.
                line?: Schema.Line;
                // The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement
                // share the same namespace.
                objectId?: string;
                // A generic shape.
                shape?: Schema.Shape;
                // A linked chart embedded from Google Sheets. Unlinked charts are represented as images.
                sheetsChart?: Schema.SheetsChart;
                // The size of the page element.
                size?: Schema.Size;
                // A table page element.
                table?: Schema.Table;
                // The title of the page element. Combined with description to display alt text. The field is not supported for Group
                // elements.
                title?: string;
                // The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To
                // compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent
                // groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The
                // initial transform for the newly created Group is always the identity transform.
                transform?: Schema.AffineTransform;
                // A video page element.
                video?: Schema.Video;
                // A word art page element.
                wordArt?: Schema.WordArt;
            }
            // Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of
            // both `size` and `transform`, but the visual size will be unchanged.
            interface PageElementProperties {
                // The object ID of the page where the element is located.
                pageObjectId?: string;
                // The size of the element.
                size?: Schema.Size;
                // The transform for the element.
                transform?: Schema.AffineTransform;
            }
            // The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the
            // hierarchy is defined in either SlideProperties or LayoutProperties.
            interface PageProperties {
                // The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the
                // color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of
                // the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To
                // update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must
                // be provided. Colors for the remaining ThemeColorTypes will be ignored.
                colorScheme?: Schema.ColorScheme;
                // The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page
                // has no parent, then the background fill defaults to the corresponding fill in the Slides editor.
                pageBackgroundFill?: Schema.PageBackgroundFill;
            }
            // A TextElement kind that represents the beginning of a new paragraph.
            interface ParagraphMarker {
                // The bullet for this paragraph. If not present, the paragraph does not belong to a list.
                bullet?: Schema.Bullet;
                // The paragraph's style
                style?: Schema.ParagraphStyle;
            }
            // Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these
            // paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of
            // lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the
            // list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its
            // corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as
            // unset fields in this message.
            interface ParagraphStyle {
                // The text alignment for this paragraph.
                alignment?: string;
                // The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not
                // inherited.
                direction?: string;
                // The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text
                // direction. If unset, the value is inherited from the parent.
                indentEnd?: Schema.Dimension;
                // The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the
                // parent.
                indentFirstLine?: Schema.Dimension;
                // The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current
                // text direction. If unset, the value is inherited from the parent.
                indentStart?: Schema.Dimension;
                // The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value
                // is inherited from the parent.
                lineSpacing?: number;
                // The amount of extra space above the paragraph. If unset, the value is inherited from the parent.
                spaceAbove?: Schema.Dimension;
                // The amount of extra space below the paragraph. If unset, the value is inherited from the parent.
                spaceBelow?: Schema.Dimension;
                // The spacing mode for the paragraph.
                spacingMode?: string;
            }
            // The placeholder information that uniquely identifies a placeholder shape.
            interface Placeholder {
                // The index of the placeholder. If the same placeholder types are present in the same page, they would have different
                // index values.
                index?: Integer;
                // The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape
                // does not inherit properties from any other shape.
                parentObjectId?: string;
                // The type of the placeholder.
                type?: string;
            }
            // A Google Slides presentation.
            interface Presentation {
                // The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides
                // that inherit from that layout.
                layouts?: Schema.Page[];
                // The locale of the presentation, as an IETF BCP 47 language tag.
                locale?: string;
                // The slide masters in the presentation. A slide master contains all common page elements and the common properties for a
                // set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape
                // properties of all placeholder shapes on pages that use that master. - The master page properties define the common page
                // properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master,
                // regardless of their layout.
                masters?: Schema.Page[];
                // The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the
                // default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE`
                // placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes
                // master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes
                // master appear on all notes pages. The notes master is read-only.
                notesMaster?: Schema.Page;
                // The size of pages in the presentation.
                pageSize?: Schema.Size;
                // The ID of the presentation.
                presentationId?: string;
                // The revision ID of the presentation. Can be used in update requests to assert that the presentation revision hasn't
                // changed since the last read operation. Only populated if the user has edit access to the presentation. The format of the
                // revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be
                // valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between
                // calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually
                // means the presentation has been updated; however, a changed ID can also be due to internal factors such as ID format
                // changes.
                revisionId?: string;
                // The slides in the presentation. A slide inherits properties from a slide layout.
                slides?: Schema.Page[];
                // The title of the presentation.
                title?: string;
            }
            // Specifies a contiguous range of an indexed collection, such as characters in text.
            interface Range {
                // The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.
                endIndex?: Integer;
                // The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX`
                // ranges.
                startIndex?: Integer;
                // The type of range.
                type?: string;
            }
            // A recolor effect applied on an image.
            interface Recolor {
                // The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the
                // colors in the page's current color scheme. This property is read-only.
                name?: string;
                // The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace
                // the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.
                recolorStops?: Schema.ColorStop[];
            }
            // Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE:
            // Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth
            // scopes.
            interface RefreshSheetsChartRequest {
                // The object ID of the chart to refresh.
                objectId?: string;
            }
            // Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are
            // rectangular after being inserted into the presentation and do not take on the forms of the shapes.
            interface ReplaceAllShapesWithImageRequest {
                // If set, this request will replace all of the shapes that contain the given text.
                containsText?: Schema.SubstringMatchCriteria;
                // The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the
                // `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value
                // for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then
                // CENTER_INSIDE is used.
                imageReplaceMethod?: string;
                // The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation.
                // Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The
                // provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url
                // field.
                imageUrl?: string;
                // If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the
                // page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
                pageObjectIds?: string[];
                // The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an
                // `image_replace_method`, the `image_replace_method` takes precedence.
                replaceMethod?: string;
            }
            // The result of replacing shapes with an image.
            interface ReplaceAllShapesWithImageResponse {
                // The number of shapes replaced with images.
                occurrencesChanged?: Integer;
            }
            // Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and
            // centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of
            // the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
            interface ReplaceAllShapesWithSheetsChartRequest {
                // The ID of the specific chart in the Google Sheets spreadsheet.
                chartId?: Integer;
                // The criteria that the shapes must match in order to be replaced. The request will replace all of the shapes that contain
                // the given text.
                containsText?: Schema.SubstringMatchCriteria;
                // The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that
                // is not linked.
                linkingMode?: string;
                // If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the
                // page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
                pageObjectIds?: string[];
                // The ID of the Google Sheets spreadsheet that contains the chart.
                spreadsheetId?: string;
            }
            // The result of replacing shapes with a Google Sheets chart.
            interface ReplaceAllShapesWithSheetsChartResponse {
                // The number of shapes replaced with charts.
                occurrencesChanged?: Integer;
            }
            // Replaces all instances of text matching a criteria with replace text.
            interface ReplaceAllTextRequest {
                // Finds text in a shape matching this substring.
                containsText?: Schema.SubstringMatchCriteria;
                // If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the
                // page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.
                pageObjectIds?: string[];
                // The text that will replace the matched text.
                replaceText?: string;
            }
            // The result of replacing text.
            interface ReplaceAllTextResponse {
                // The number of occurrences changed by replacing all text.
                occurrencesChanged?: Integer;
            }
            // Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
            interface ReplaceImageRequest {
                // The ID of the existing image that will be replaced.
                imageObjectId?: string;
                // The replacement method.
                imageReplaceMethod?: string;
                // The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation.
                // Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The
                // provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url
                // field.
                url?: string;
            }
            // A single kind of update to apply to a presentation.
            interface Request {
                // Creates an image.
                createImage?: Schema.CreateImageRequest;
                // Creates a line.
                createLine?: Schema.CreateLineRequest;
                // Creates bullets for paragraphs.
                createParagraphBullets?: Schema.CreateParagraphBulletsRequest;
                // Creates a new shape.
                createShape?: Schema.CreateShapeRequest;
                // Creates an embedded Google Sheets chart.
                createSheetsChart?: Schema.CreateSheetsChartRequest;
                // Creates a new slide.
                createSlide?: Schema.CreateSlideRequest;
                // Creates a new table.
                createTable?: Schema.CreateTableRequest;
                // Creates a video.
                createVideo?: Schema.CreateVideoRequest;
                // Deletes a page or page element from the presentation.
                deleteObject?: Schema.DeleteObjectRequest;
                // Deletes bullets from paragraphs.
                deleteParagraphBullets?: Schema.DeleteParagraphBulletsRequest;
                // Deletes a column from a table.
                deleteTableColumn?: Schema.DeleteTableColumnRequest;
                // Deletes a row from a table.
                deleteTableRow?: Schema.DeleteTableRowRequest;
                // Deletes text from a shape or a table cell.
                deleteText?: Schema.DeleteTextRequest;
                // Duplicates a slide or page element.
                duplicateObject?: Schema.DuplicateObjectRequest;
                // Groups objects, such as page elements.
                groupObjects?: Schema.GroupObjectsRequest;
                // Inserts columns into a table.
                insertTableColumns?: Schema.InsertTableColumnsRequest;
                // Inserts rows into a table.
                insertTableRows?: Schema.InsertTableRowsRequest;
                // Inserts text into a shape or table cell.
                insertText?: Schema.InsertTextRequest;
                // Merges cells in a Table.
                mergeTableCells?: Schema.MergeTableCellsRequest;
                // Refreshes a Google Sheets chart.
                refreshSheetsChart?: Schema.RefreshSheetsChartRequest;
                // Replaces all shapes matching some criteria with an image.
                replaceAllShapesWithImage?: Schema.ReplaceAllShapesWithImageRequest;
                // Replaces all shapes matching some criteria with a Google Sheets chart.
                replaceAllShapesWithSheetsChart?: Schema.ReplaceAllShapesWithSheetsChartRequest;
                // Replaces all instances of specified text.
                replaceAllText?: Schema.ReplaceAllTextRequest;
                // Replaces an existing image with a new image.
                replaceImage?: Schema.ReplaceImageRequest;
                // Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
                rerouteLine?: Schema.RerouteLineRequest;
                // Ungroups objects, such as groups.
                ungroupObjects?: Schema.UngroupObjectsRequest;
                // Unmerges cells in a Table.
                unmergeTableCells?: Schema.UnmergeTableCellsRequest;
                // Updates the properties of an Image.
                updateImageProperties?: Schema.UpdateImagePropertiesRequest;
                // Updates the category of a line.
                updateLineCategory?: Schema.UpdateLineCategoryRequest;
                // Updates the properties of a Line.
                updateLineProperties?: Schema.UpdateLinePropertiesRequest;
                // Updates the alt text title and/or description of a page element.
                updatePageElementAltText?: Schema.UpdatePageElementAltTextRequest;
                // Updates the transform of a page element.
                updatePageElementTransform?: Schema.UpdatePageElementTransformRequest;
                // Updates the Z-order of page elements.
                updatePageElementsZOrder?: Schema.UpdatePageElementsZOrderRequest;
                // Updates the properties of a Page.
                updatePageProperties?: Schema.UpdatePagePropertiesRequest;
                // Updates the styling of paragraphs within a Shape or Table.
                updateParagraphStyle?: Schema.UpdateParagraphStyleRequest;
                // Updates the properties of a Shape.
                updateShapeProperties?: Schema.UpdateShapePropertiesRequest;
                // Updates the position of a set of slides in the presentation.
                updateSlidesPosition?: Schema.UpdateSlidesPositionRequest;
                // Updates the properties of the table borders in a Table.
                updateTableBorderProperties?: Schema.UpdateTableBorderPropertiesRequest;
                // Updates the properties of a TableCell.
                updateTableCellProperties?: Schema.UpdateTableCellPropertiesRequest;
                // Updates the properties of a Table column.
                updateTableColumnProperties?: Schema.UpdateTableColumnPropertiesRequest;
                // Updates the properties of a Table row.
                updateTableRowProperties?: Schema.UpdateTableRowPropertiesRequest;
                // Updates the styling of text within a Shape or Table.
                updateTextStyle?: Schema.UpdateTextStyleRequest;
                // Updates the properties of a Video.
                updateVideoProperties?: Schema.UpdateVideoPropertiesRequest;
            }
            // Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
            interface RerouteLineRequest {
                // The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The
                // start and end connections of the line must be on different page elements.
                objectId?: string;
            }
            // A single response from an update.
            interface Response {
                // The result of creating an image.
                createImage?: Schema.CreateImageResponse;
                // The result of creating a line.
                createLine?: Schema.CreateLineResponse;
                // The result of creating a shape.
                createShape?: Schema.CreateShapeResponse;
                // The result of creating a Google Sheets chart.
                createSheetsChart?: Schema.CreateSheetsChartResponse;
                // The result of creating a slide.
                createSlide?: Schema.CreateSlideResponse;
                // The result of creating a table.
                createTable?: Schema.CreateTableResponse;
                // The result of creating a video.
                createVideo?: Schema.CreateVideoResponse;
                // The result of duplicating an object.
                duplicateObject?: Schema.DuplicateObjectResponse;
                // The result of grouping objects.
                groupObjects?: Schema.GroupObjectsResponse;
                // The result of replacing all shapes matching some criteria with an image.
                replaceAllShapesWithImage?: Schema.ReplaceAllShapesWithImageResponse;
                // The result of replacing all shapes matching some criteria with a Google Sheets chart.
                replaceAllShapesWithSheetsChart?: Schema.ReplaceAllShapesWithSheetsChartResponse;
                // The result of replacing text.
                replaceAllText?: Schema.ReplaceAllTextResponse;
            }
            // An RGB color.
            interface RgbColor {
                // The blue component of the color, from 0.0 to 1.0.
                blue?: number;
                // The green component of the color, from 0.0 to 1.0.
                green?: number;
                // The red component of the color, from 0.0 to 1.0.
                red?: number;
            }
            // The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if
            // it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides
            // editor, which may depend on the page element kind.
            interface Shadow {
                // The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is
                // read-only.
                alignment?: string;
                // The alpha of the shadow's color, from 0.0 to 1.0.
                alpha?: number;
                // The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.
                blurRadius?: Schema.Dimension;
                // The shadow color value.
                color?: Schema.OpaqueColor;
                // The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless
                // another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`.
                // In this case, any other shadow fields set in the same request will be ignored.
                propertyState?: string;
                // Whether the shadow should rotate with the shape. This property is read-only.
                rotateWithShape?: boolean;
                // Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.
                transform?: Schema.AffineTransform;
                // The type of the shadow. This property is read-only.
                type?: string;
            }
            // A PageElement kind representing a generic shape that does not have a more specific classification.
            interface Shape {
                // Placeholders are shapes that are inherit from corresponding placeholders on layouts and masters. If set, the shape is a
                // placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the
                // Placeholder.parent_object_id field.
                placeholder?: Schema.Placeholder;
                // The properties of the shape.
                shapeProperties?: Schema.ShapeProperties;
                // The type of the shape.
                shapeType?: string;
                // The text content of the shape.
                text?: Schema.TextContent;
            }
            // The shape background fill.
            interface ShapeBackgroundFill {
                // The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless
                // another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this
                // case, any other fill fields set in the same request will be ignored.
                propertyState?: string;
                // Solid color fill.
                solidFill?: Schema.SolidFill;
            }
            // The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these
            // properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on
            // the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by
            // requests that can impact how text fits in the shape.
            interface ShapeProperties {
                // The autofit properties of the shape. This property is only set for shapes that allow text.
                autofit?: Schema.Autofit;
                // The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it
                // exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides
                // editor.
                contentAlignment?: string;
                // The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.
                link?: Schema.Link;
                // The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no
                // parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides
                // editor.
                outline?: Schema.Outline;
                // The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the
                // shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This
                // property is read-only.
                shadow?: Schema.Shadow;
                // The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If
                // the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new
                // shapes created in the Slides editor.
                shapeBackgroundFill?: Schema.ShapeBackgroundFill;
            }
            // A PageElement kind representing a linked chart embedded from Google Sheets.
            interface SheetsChart {
                // The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
                chartId?: Integer;
                // The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of
                // the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be
                // lost if the presentation's sharing settings change.
                contentUrl?: string;
                // The properties of the Sheets chart.
                sheetsChartProperties?: Schema.SheetsChartProperties;
                // The ID of the Google Sheets spreadsheet that contains the source chart.
                spreadsheetId?: string;
            }
            // The properties of the SheetsChart.
            interface SheetsChartProperties {
                // The properties of the embedded chart image.
                chartImageProperties?: Schema.ImageProperties;
            }
            // A width and height.
            interface Size {
                // The height of the object.
                height?: Schema.Dimension;
                // The width of the object.
                width?: Schema.Dimension;
            }
            // The properties of Page that are only relevant for pages with page_type SLIDE.
            interface SlideProperties {
                // The object ID of the layout that this slide is based on. This property is read-only.
                layoutObjectId?: string;
                // The object ID of the master that this slide is based on. This property is read-only.
                masterObjectId?: string;
                // The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or
                // exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with
                // type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the
                // speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes
                // shape. This property is read-only.
                notesPage?: Schema.Page;
            }
            // A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset,
            // its value may be inherited from a parent placeholder if it exists.
            interface SolidFill {
                // The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the
                // equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds
                // to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
                alpha?: number;
                // The color value of the solid fill.
                color?: Schema.OpaqueColor;
            }
            // The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is
            // stretched to fit its container.
            interface StretchedPictureFill {
                // Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account
                // of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture
                // may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at
                // insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot
                // exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
                contentUrl?: string;
                // The original size of the picture fill. This field is read-only.
                size?: Schema.Size;
            }
            // A criteria that matches a specific string of text in a shape or table.
            interface SubstringMatchCriteria {
                // Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case
                // insensitive.
                matchCase?: boolean;
                // The text to search for in the shape or table.
                text?: string;
            }
            // A PageElement kind representing a table.
            interface Table {
                // Number of columns in the table.
                columns?: Integer;
                // Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one
                // more row than the number of rows in the table and the same number of columns as the table. For example, if the table is
                // 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.
                horizontalBorderRows?: Schema.TableBorderRow[];
                // Number of rows in the table.
                rows?: Integer;
                // Properties of each column.
                tableColumns?: Schema.TableColumnProperties[];
                // Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a
                // row_span greater than 1.
                tableRows?: Schema.TableRow[];
                // Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same
                // number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3
                // x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.
                verticalBorderRows?: Schema.TableBorderRow[];
            }
            // The properties of each border cell.
            interface TableBorderCell {
                // The location of the border within the border table.
                location?: Schema.TableCellLocation;
                // The border properties.
                tableBorderProperties?: Schema.TableBorderProperties;
            }
            // The fill of the border.
            interface TableBorderFill {
                // Solid fill.
                solidFill?: Schema.SolidFill;
            }
            // The border styling properties of the TableBorderCell.
            interface TableBorderProperties {
                // The dash style of the border.
                dashStyle?: string;
                // The fill of the table border.
                tableBorderFill?: Schema.TableBorderFill;
                // The thickness of the border.
                weight?: Schema.Dimension;
            }
            // Contents of each border row in a table.
            interface TableBorderRow {
                // Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.
                tableBorderCells?: Schema.TableBorderCell[];
            }
            // Properties and contents of each table cell.
            interface TableCell {
                // Column span of the cell.
                columnSpan?: Integer;
                // The location of the cell within the table.
                location?: Schema.TableCellLocation;
                // Row span of the cell.
                rowSpan?: Integer;
                // The properties of the table cell.
                tableCellProperties?: Schema.TableCellProperties;
                // The text content of the cell.
                text?: Schema.TextContent;
            }
            // The table cell background fill.
            interface TableCellBackgroundFill {
                // The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`,
                // unless another value is specified in the same request. To have no fill on a table cell, set this field to
                // `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
                propertyState?: string;
                // Solid color fill.
                solidFill?: Schema.SolidFill;
            }
            // A location of a single table cell within a table.
            interface TableCellLocation {
                // The 0-based column index.
                columnIndex?: Integer;
                // The 0-based row index.
                rowIndex?: Integer;
            }
            // The properties of the TableCell.
            interface TableCellProperties {
                // The alignment of the content in the table cell. The default alignment matches the alignment for newly created table
                // cells in the Slides editor.
                contentAlignment?: string;
                // The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides
                // editor.
                tableCellBackgroundFill?: Schema.TableCellBackgroundFill;
            }
            // Properties of each column in a table.
            interface TableColumnProperties {
                // Width of a column.
                columnWidth?: Schema.Dimension;
            }
            // A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table
            // range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last
            // row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column
            // span = 2 specifies the following cells: x x [ x x x ]
            interface TableRange {
                // The column span of the table range.
                columnSpan?: Integer;
                // The starting location of the table range.
                location?: Schema.TableCellLocation;
                // The row span of the table range.
                rowSpan?: Integer;
            }
            // Properties and contents of each row in a table.
            interface TableRow {
                // Height of a row.
                rowHeight?: Schema.Dimension;
                // Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span
                // greater than 1. As a result, the length of this collection does not always match the number of columns of the entire
                // table.
                tableCells?: Schema.TableCell[];
                // Properties of the row.
                tableRowProperties?: Schema.TableRowProperties;
            }
            // Properties of each row in a table.
            interface TableRowProperties {
                // Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value
                // in order to show all the text in the row's cell(s).
                minRowHeight?: Schema.Dimension;
            }
            // The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a
            // page.
            interface TextContent {
                // The bulleted lists contained in this text, keyed by list ID.
                lists?: object;
                // The text contents broken down into its component parts, including styling information. This property is read-only.
                textElements?: Schema.TextElement[];
            }
            // A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
            interface TextElement {
                // A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.
                autoText?: Schema.AutoText;
                // The zero-based end index of this text element, exclusive, in Unicode code units.
                endIndex?: Integer;
                // A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent
                // the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are
                // considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.
                paragraphMarker?: Schema.ParagraphMarker;
                // The zero-based start index of this text element, in Unicode code units.
                startIndex?: Integer;
                // A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The
                // `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single
                // `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.
                textRun?: Schema.TextRun;
            }
            // A TextElement kind that represents a run of text that all has the same styling.
            interface TextRun {
                // The text of this run.
                content?: string;
                // The styling applied to this run.
                style?: Schema.TextStyle;
            }
            // Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder,
            // then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of
            // lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in
            // the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a
            // list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the
            // list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is
            // contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the
            // defaults in the Slides editor.
            interface TextStyle {
                // The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color`
                // field in it is set.
                backgroundColor?: Schema.OptionalColor;
                // The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is
                // automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not
                // affected by changes in this field.
                baselineOffset?: string;
                // Whether or not the text is rendered as bold.
                bold?: boolean;
                // The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts]
                // (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect
                // the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set
                // `bold` value is used.
                fontFamily?: string;
                // The size of the text's font. When read, the `font_size` will specified in points.
                fontSize?: Schema.Dimension;
                // The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color`
                // field in it is set.
                foregroundColor?: Schema.OptionalColor;
                // Whether or not the text is italicized.
                italic?: boolean;
                // The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing
                // the link in an update request causes some other changes to the text style of the range: * When setting a link, the text
                // foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified
                // in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that
                // overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on
                // newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\n123"`,
                // will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before
                // and after the newline. * Removing a link will update the text style of the range to match the style of the preceding
                // text (or the default text styles if the preceding text is another link) unless different styles are being set in the
                // same request.
                link?: Schema.Link;
                // Whether or not the text is in small capital letters.
                smallCaps?: boolean;
                // Whether or not the text is struck through.
                strikethrough?: boolean;
                // Whether or not the text is underlined.
                underline?: boolean;
                // The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit
                // font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of
                // `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields
                // are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as
                // follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight
                // `400` ("normal"). * If both fields are set, the value of `font_family` must match that of
                // `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a
                // 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and
                // weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit
                // from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies
                // values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If
                // `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then
                // `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is
                // returned.
                weightedFontFamily?: Schema.WeightedFontFamily;
            }
            // A pair mapping a theme color type to the concrete color it represents.
            interface ThemeColorPair {
                // The concrete color corresponding to the theme color type above.
                color?: Schema.RgbColor;
                // The type of the theme color.
                type?: string;
            }
            // The thumbnail of a page.
            interface Thumbnail {
                // The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged
                // with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access
                // to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same
                // as specified in the `GetPageThumbnailRequest`.
                contentUrl?: string;
                // The positive height in pixels of the thumbnail image.
                height?: Integer;
                // The positive width in pixels of the thumbnail image.
                width?: Integer;
            }
            // Ungroups objects, such as groups.
            interface UngroupObjectsRequest {
                // The object IDs of the objects to ungroup. Only groups that are not inside other groups can be ungrouped. All the groups
                // should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are
                // preserved.
                objectIds?: string[];
            }
            // Unmerges cells in a Table.
            interface UnmergeTableCellsRequest {
                // The object ID of the table.
                objectId?: string;
                // The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and
                // cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If
                // there is text in any of the merged cells, the text will remain in the upper-left ("head") cell of the resulting block of
                // unmerged cells.
                tableRange?: Schema.TableRange;
            }
            // Update the properties of an Image.
            interface UpdateImagePropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value,
                // include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The image properties to update.
                imageProperties?: Schema.ImageProperties;
                // The object ID of the image the updates are applied to.
                objectId?: string;
            }
            // Updates the category of a line.
            interface UpdateLineCategoryRequest {
                // The line category to update to. The exact line type is determined based on the category to update to and how it's routed
                // to connect to other page elements.
                lineCategory?: string;
                // The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be
                // updated. The line may be rerouted after updating its category.
                objectId?: string;
            }
            // Updates the properties of a Line.
            interface UpdateLinePropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid
                // fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field
                // name in the field mask but leave the field itself unset.
                fields?: string;
                // The line properties to update.
                lineProperties?: Schema.LineProperties;
                // The object ID of the line the update is applied to.
                objectId?: string;
            }
            // Updates the alt text title and/or description of a page element.
            interface UpdatePageElementAltTextRequest {
                // The updated alt text description of the page element. If unset the existing value will be maintained. The description is
                // exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of
                // the page element.
                description?: string;
                // The object ID of the page element the updates are applied to.
                objectId?: string;
                // The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to
                // screen readers and other accessibility interfaces. Only use human readable values related to the content of the page
                // element.
                title?: string;
            }
            // Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the
            // page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform
            // for more details.
            interface UpdatePageElementTransformRequest {
                // The apply mode of the transform update.
                applyMode?: string;
                // The object ID of the page element to update.
                objectId?: string;
                // The input transform matrix used to update the page element.
                transform?: Schema.AffineTransform;
            }
            // Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page
            // element in the front may cover the elements that are behind it.
            interface UpdatePageElementsZOrderRequest {
                // The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative
                // Z-orders within these page elements before the operation is maintained.
                operation?: string;
                // The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped.
                pageElementObjectIds?: string[];
            }
            // Updates the properties of a Page.
            interface UpdatePagePropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page
                // background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default
                // value, include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The object ID of the page the update is applied to.
                objectId?: string;
                // The page properties to update.
                pageProperties?: Schema.PageProperties;
            }
            // Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
            interface UpdateParagraphStyleRequest {
                // The location of the cell in the table containing the paragraph(s) to style. If `object_id` refers to a table,
                // `cell_location` must have a value. Otherwise, it must not.
                cellLocation?: Schema.TableCellLocation;
                // The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be
                // specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph
                // alignment, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field
                // mask but leave the field itself unset.
                fields?: string;
                // The object ID of the shape or table with the text to be styled.
                objectId?: string;
                // The paragraph's style.
                style?: Schema.ParagraphStyle;
                // The range of text containing the paragraph(s) to style.
                textRange?: Schema.Range;
            }
            // Update the properties of a Shape.
            interface UpdateShapePropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its
                // default value, include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The object ID of the shape the updates are applied to.
                objectId?: string;
                // The shape properties to update.
                shapeProperties?: Schema.ShapeProperties;
            }
            // Updates the position of slides in the presentation.
            interface UpdateSlidesPositionRequest {
                // The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be
                // between zero and the number of slides in the presentation, inclusive.
                insertionIndex?: Integer;
                // The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation
                // order, without duplicates.
                slideObjectIds?: string[];
            }
            // Updates the properties of the table borders in a Table.
            interface UpdateTableBorderPropertiesRequest {
                // The border position in the table range the updates should apply to. If a border position is not specified, the updates
                // will apply to all borders in the table range.
                borderPosition?: string;
                // The fields that should be updated. At least one field must be specified. The root `tableBorderProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // table border solid fill color, set `fields` to `"tableBorderFill.solidFill.color"`. To reset a property to its default
                // value, include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The object ID of the table.
                objectId?: string;
                // The table border properties to update.
                tableBorderProperties?: Schema.TableBorderProperties;
                // The table range representing the subset of the table to which the updates are applied. If a table range is not
                // specified, the updates will apply to the entire table.
                tableRange?: Schema.TableRange;
            }
            // Update the properties of a TableCell.
            interface UpdateTableCellPropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `tableCellProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // table cell background solid fill color, set `fields` to `"tableCellBackgroundFill.solidFill.color"`. To reset a property
                // to its default value, include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The object ID of the table.
                objectId?: string;
                // The table cell properties to update.
                tableCellProperties?: Schema.TableCellProperties;
                // The table range representing the subset of the table to which the updates are applied. If a table range is not
                // specified, the updates will apply to the entire table.
                tableRange?: Schema.TableRange;
            }
            // Updates the properties of a Table column.
            interface UpdateTableColumnPropertiesRequest {
                // The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table
                // will be updated.
                columnIndices?: Integer[];
                // The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // column width, set `fields` to `"column_width"`. If '"column_width"' is included in the field mask but the property is
                // left unset, the column width will default to 406,400 EMU (32 points).
                fields?: string;
                // The object ID of the table.
                objectId?: string;
                // The table column properties to update. If the value of `table_column_properties#column_width` in the request is less
                // than 406,400 EMU (32 points), a 400 bad request error is returned.
                tableColumnProperties?: Schema.TableColumnProperties;
            }
            // Updates the properties of a Table row.
            interface UpdateTableRowPropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // minimum row height, set `fields` to `"min_row_height"`. If '"min_row_height"' is included in the field mask but the
                // property is left unset, the minimum row height will default to 0.
                fields?: string;
                // The object ID of the table.
                objectId?: string;
                // The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will
                // be updated.
                rowIndices?: Integer[];
                // The table row properties to update.
                tableRowProperties?: Schema.TableRowProperties;
            }
            // Update the styling of text in a Shape or Table.
            interface UpdateTextStyleRequest {
                // The location of the cell in the table containing the text to style. If `object_id` refers to a table, `cell_location`
                // must have a value. Otherwise, it must not.
                cellLocation?: Schema.TableCellLocation;
                // The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be
                // specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to
                // bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but
                // leave the field itself unset.
                fields?: string;
                // The object ID of the shape or table with the text to be styled.
                objectId?: string;
                // The style(s) to set on the text. If the value for a particular style matches that of the parent, that style will be set
                // to inherit. Certain text style changes may cause other changes meant to mirror the behavior of the Slides editor. See
                // the documentation of TextStyle for more information.
                style?: Schema.TextStyle;
                // The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a
                // paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.
                textRange?: Schema.Range;
            }
            // Update the properties of a Video.
            interface UpdateVideoPropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value,
                // include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The object ID of the video the updates are applied to.
                objectId?: string;
                // The video properties to update.
                videoProperties?: Schema.VideoProperties;
            }
            // A PageElement kind representing a video.
            interface Video {
                // The video source's unique identifier for this video.
                id?: string;
                // The video source.
                source?: string;
                // An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.
                url?: string;
                // The properties of the video.
                videoProperties?: Schema.VideoProperties;
            }
            // The properties of the Video.
            interface VideoProperties {
                // Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.
                autoPlay?: boolean;
                // The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be
                // after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played
                // until its end.
                end?: Integer;
                // Whether to mute the audio during video playback. Defaults to false.
                mute?: boolean;
                // The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.
                outline?: Schema.Outline;
                // The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should
                // be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played
                // from the last second. If not set, the video will be played from the beginning.
                start?: Integer;
            }
            // Represents a font family and weight used to style a TextRun.
            interface WeightedFontFamily {
                // The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts]
                // (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.
                fontFamily?: string;
                // The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`,
                // inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section
                // 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than
                // or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").
                weight?: Integer;
            }
            // A PageElement kind representing word art.
            interface WordArt {
                // The text rendered as word art.
                renderedText?: string;
            }
            // Provides control over how write requests are executed.
            interface WriteControl {
                // The revision ID of the presentation required for the write request. If specified and the `required_revision_id` doesn't
                // exactly match the presentation's current `revision_id`, the request will not be processed and will return a 400 bad
                // request error.
                requiredRevisionId?: string;
            }
        }
    }
    // Reads and writes Google Slides presentations.
    interface Slides {
        Presentations?: Slides.Collection.PresentationsCollection;
        // Create a new instance of AffineTransform
        newAffineTransform(): Slides.Schema.AffineTransform;
        // Create a new instance of AutoText
        newAutoText(): Slides.Schema.AutoText;
        // Create a new instance of Autofit
        newAutofit(): Slides.Schema.Autofit;
        // Create a new instance of BatchUpdatePresentationRequest
        newBatchUpdatePresentationRequest(): Slides.Schema.BatchUpdatePresentationRequest;
        // Create a new instance of Bullet
        newBullet(): Slides.Schema.Bullet;
        // Create a new instance of ColorScheme
        newColorScheme(): Slides.Schema.ColorScheme;
        // Create a new instance of ColorStop
        newColorStop(): Slides.Schema.ColorStop;
        // Create a new instance of CreateImageRequest
        newCreateImageRequest(): Slides.Schema.CreateImageRequest;
        // Create a new instance of CreateLineRequest
        newCreateLineRequest(): Slides.Schema.CreateLineRequest;
        // Create a new instance of CreateParagraphBulletsRequest
        newCreateParagraphBulletsRequest(): Slides.Schema.CreateParagraphBulletsRequest;
        // Create a new instance of CreateShapeRequest
        newCreateShapeRequest(): Slides.Schema.CreateShapeRequest;
        // Create a new instance of CreateSheetsChartRequest
        newCreateSheetsChartRequest(): Slides.Schema.CreateSheetsChartRequest;
        // Create a new instance of CreateSlideRequest
        newCreateSlideRequest(): Slides.Schema.CreateSlideRequest;
        // Create a new instance of CreateTableRequest
        newCreateTableRequest(): Slides.Schema.CreateTableRequest;
        // Create a new instance of CreateVideoRequest
        newCreateVideoRequest(): Slides.Schema.CreateVideoRequest;
        // Create a new instance of CropProperties
        newCropProperties(): Slides.Schema.CropProperties;
        // Create a new instance of DeleteObjectRequest
        newDeleteObjectRequest(): Slides.Schema.DeleteObjectRequest;
        // Create a new instance of DeleteParagraphBulletsRequest
        newDeleteParagraphBulletsRequest(): Slides.Schema.DeleteParagraphBulletsRequest;
        // Create a new instance of DeleteTableColumnRequest
        newDeleteTableColumnRequest(): Slides.Schema.DeleteTableColumnRequest;
        // Create a new instance of DeleteTableRowRequest
        newDeleteTableRowRequest(): Slides.Schema.DeleteTableRowRequest;
        // Create a new instance of DeleteTextRequest
        newDeleteTextRequest(): Slides.Schema.DeleteTextRequest;
        // Create a new instance of Dimension
        newDimension(): Slides.Schema.Dimension;
        // Create a new instance of DuplicateObjectRequest
        newDuplicateObjectRequest(): Slides.Schema.DuplicateObjectRequest;
        // Create a new instance of Group
        newGroup(): Slides.Schema.Group;
        // Create a new instance of GroupObjectsRequest
        newGroupObjectsRequest(): Slides.Schema.GroupObjectsRequest;
        // Create a new instance of Image
        newImage(): Slides.Schema.Image;
        // Create a new instance of ImageProperties
        newImageProperties(): Slides.Schema.ImageProperties;
        // Create a new instance of InsertTableColumnsRequest
        newInsertTableColumnsRequest(): Slides.Schema.InsertTableColumnsRequest;
        // Create a new instance of InsertTableRowsRequest
        newInsertTableRowsRequest(): Slides.Schema.InsertTableRowsRequest;
        // Create a new instance of InsertTextRequest
        newInsertTextRequest(): Slides.Schema.InsertTextRequest;
        // Create a new instance of LayoutPlaceholderIdMapping
        newLayoutPlaceholderIdMapping(): Slides.Schema.LayoutPlaceholderIdMapping;
        // Create a new instance of LayoutProperties
        newLayoutProperties(): Slides.Schema.LayoutProperties;
        // Create a new instance of LayoutReference
        newLayoutReference(): Slides.Schema.LayoutReference;
        // Create a new instance of Line
        newLine(): Slides.Schema.Line;
        // Create a new instance of LineConnection
        newLineConnection(): Slides.Schema.LineConnection;
        // Create a new instance of LineFill
        newLineFill(): Slides.Schema.LineFill;
        // Create a new instance of LineProperties
        newLineProperties(): Slides.Schema.LineProperties;
        // Create a new instance of Link
        newLink(): Slides.Schema.Link;
        // Create a new instance of MasterProperties
        newMasterProperties(): Slides.Schema.MasterProperties;
        // Create a new instance of MergeTableCellsRequest
        newMergeTableCellsRequest(): Slides.Schema.MergeTableCellsRequest;
        // Create a new instance of NotesProperties
        newNotesProperties(): Slides.Schema.NotesProperties;
        // Create a new instance of OpaqueColor
        newOpaqueColor(): Slides.Schema.OpaqueColor;
        // Create a new instance of OptionalColor
        newOptionalColor(): Slides.Schema.OptionalColor;
        // Create a new instance of Outline
        newOutline(): Slides.Schema.Outline;
        // Create a new instance of OutlineFill
        newOutlineFill(): Slides.Schema.OutlineFill;
        // Create a new instance of Page
        newPage(): Slides.Schema.Page;
        // Create a new instance of PageBackgroundFill
        newPageBackgroundFill(): Slides.Schema.PageBackgroundFill;
        // Create a new instance of PageElement
        newPageElement(): Slides.Schema.PageElement;
        // Create a new instance of PageElementProperties
        newPageElementProperties(): Slides.Schema.PageElementProperties;
        // Create a new instance of PageProperties
        newPageProperties(): Slides.Schema.PageProperties;
        // Create a new instance of ParagraphMarker
        newParagraphMarker(): Slides.Schema.ParagraphMarker;
        // Create a new instance of ParagraphStyle
        newParagraphStyle(): Slides.Schema.ParagraphStyle;
        // Create a new instance of Placeholder
        newPlaceholder(): Slides.Schema.Placeholder;
        // Create a new instance of Presentation
        newPresentation(): Slides.Schema.Presentation;
        // Create a new instance of Range
        newRange(): Slides.Schema.Range;
        // Create a new instance of Recolor
        newRecolor(): Slides.Schema.Recolor;
        // Create a new instance of RefreshSheetsChartRequest
        newRefreshSheetsChartRequest(): Slides.Schema.RefreshSheetsChartRequest;
        // Create a new instance of ReplaceAllShapesWithImageRequest
        newReplaceAllShapesWithImageRequest(): Slides.Schema.ReplaceAllShapesWithImageRequest;
        // Create a new instance of ReplaceAllShapesWithSheetsChartRequest
        newReplaceAllShapesWithSheetsChartRequest(): Slides.Schema.ReplaceAllShapesWithSheetsChartRequest;
        // Create a new instance of ReplaceAllTextRequest
        newReplaceAllTextRequest(): Slides.Schema.ReplaceAllTextRequest;
        // Create a new instance of ReplaceImageRequest
        newReplaceImageRequest(): Slides.Schema.ReplaceImageRequest;
        // Create a new instance of Request
        newRequest(): Slides.Schema.Request;
        // Create a new instance of RerouteLineRequest
        newRerouteLineRequest(): Slides.Schema.RerouteLineRequest;
        // Create a new instance of RgbColor
        newRgbColor(): Slides.Schema.RgbColor;
        // Create a new instance of Shadow
        newShadow(): Slides.Schema.Shadow;
        // Create a new instance of Shape
        newShape(): Slides.Schema.Shape;
        // Create a new instance of ShapeBackgroundFill
        newShapeBackgroundFill(): Slides.Schema.ShapeBackgroundFill;
        // Create a new instance of ShapeProperties
        newShapeProperties(): Slides.Schema.ShapeProperties;
        // Create a new instance of SheetsChart
        newSheetsChart(): Slides.Schema.SheetsChart;
        // Create a new instance of SheetsChartProperties
        newSheetsChartProperties(): Slides.Schema.SheetsChartProperties;
        // Create a new instance of Size
        newSize(): Slides.Schema.Size;
        // Create a new instance of SlideProperties
        newSlideProperties(): Slides.Schema.SlideProperties;
        // Create a new instance of SolidFill
        newSolidFill(): Slides.Schema.SolidFill;
        // Create a new instance of StretchedPictureFill
        newStretchedPictureFill(): Slides.Schema.StretchedPictureFill;
        // Create a new instance of SubstringMatchCriteria
        newSubstringMatchCriteria(): Slides.Schema.SubstringMatchCriteria;
        // Create a new instance of Table
        newTable(): Slides.Schema.Table;
        // Create a new instance of TableBorderCell
        newTableBorderCell(): Slides.Schema.TableBorderCell;
        // Create a new instance of TableBorderFill
        newTableBorderFill(): Slides.Schema.TableBorderFill;
        // Create a new instance of TableBorderProperties
        newTableBorderProperties(): Slides.Schema.TableBorderProperties;
        // Create a new instance of TableBorderRow
        newTableBorderRow(): Slides.Schema.TableBorderRow;
        // Create a new instance of TableCell
        newTableCell(): Slides.Schema.TableCell;
        // Create a new instance of TableCellBackgroundFill
        newTableCellBackgroundFill(): Slides.Schema.TableCellBackgroundFill;
        // Create a new instance of TableCellLocation
        newTableCellLocation(): Slides.Schema.TableCellLocation;
        // Create a new instance of TableCellProperties
        newTableCellProperties(): Slides.Schema.TableCellProperties;
        // Create a new instance of TableColumnProperties
        newTableColumnProperties(): Slides.Schema.TableColumnProperties;
        // Create a new instance of TableRange
        newTableRange(): Slides.Schema.TableRange;
        // Create a new instance of TableRow
        newTableRow(): Slides.Schema.TableRow;
        // Create a new instance of TableRowProperties
        newTableRowProperties(): Slides.Schema.TableRowProperties;
        // Create a new instance of TextContent
        newTextContent(): Slides.Schema.TextContent;
        // Create a new instance of TextElement
        newTextElement(): Slides.Schema.TextElement;
        // Create a new instance of TextRun
        newTextRun(): Slides.Schema.TextRun;
        // Create a new instance of TextStyle
        newTextStyle(): Slides.Schema.TextStyle;
        // Create a new instance of ThemeColorPair
        newThemeColorPair(): Slides.Schema.ThemeColorPair;
        // Create a new instance of UngroupObjectsRequest
        newUngroupObjectsRequest(): Slides.Schema.UngroupObjectsRequest;
        // Create a new instance of UnmergeTableCellsRequest
        newUnmergeTableCellsRequest(): Slides.Schema.UnmergeTableCellsRequest;
        // Create a new instance of UpdateImagePropertiesRequest
        newUpdateImagePropertiesRequest(): Slides.Schema.UpdateImagePropertiesRequest;
        // Create a new instance of UpdateLineCategoryRequest
        newUpdateLineCategoryRequest(): Slides.Schema.UpdateLineCategoryRequest;
        // Create a new instance of UpdateLinePropertiesRequest
        newUpdateLinePropertiesRequest(): Slides.Schema.UpdateLinePropertiesRequest;
        // Create a new instance of UpdatePageElementAltTextRequest
        newUpdatePageElementAltTextRequest(): Slides.Schema.UpdatePageElementAltTextRequest;
        // Create a new instance of UpdatePageElementTransformRequest
        newUpdatePageElementTransformRequest(): Slides.Schema.UpdatePageElementTransformRequest;
        // Create a new instance of UpdatePageElementsZOrderRequest
        newUpdatePageElementsZOrderRequest(): Slides.Schema.UpdatePageElementsZOrderRequest;
        // Create a new instance of UpdatePagePropertiesRequest
        newUpdatePagePropertiesRequest(): Slides.Schema.UpdatePagePropertiesRequest;
        // Create a new instance of UpdateParagraphStyleRequest
        newUpdateParagraphStyleRequest(): Slides.Schema.UpdateParagraphStyleRequest;
        // Create a new instance of UpdateShapePropertiesRequest
        newUpdateShapePropertiesRequest(): Slides.Schema.UpdateShapePropertiesRequest;
        // Create a new instance of UpdateSlidesPositionRequest
        newUpdateSlidesPositionRequest(): Slides.Schema.UpdateSlidesPositionRequest;
        // Create a new instance of UpdateTableBorderPropertiesRequest
        newUpdateTableBorderPropertiesRequest(): Slides.Schema.UpdateTableBorderPropertiesRequest;
        // Create a new instance of UpdateTableCellPropertiesRequest
        newUpdateTableCellPropertiesRequest(): Slides.Schema.UpdateTableCellPropertiesRequest;
        // Create a new instance of UpdateTableColumnPropertiesRequest
        newUpdateTableColumnPropertiesRequest(): Slides.Schema.UpdateTableColumnPropertiesRequest;
        // Create a new instance of UpdateTableRowPropertiesRequest
        newUpdateTableRowPropertiesRequest(): Slides.Schema.UpdateTableRowPropertiesRequest;
        // Create a new instance of UpdateTextStyleRequest
        newUpdateTextStyleRequest(): Slides.Schema.UpdateTextStyleRequest;
        // Create a new instance of UpdateVideoPropertiesRequest
        newUpdateVideoPropertiesRequest(): Slides.Schema.UpdateVideoPropertiesRequest;
        // Create a new instance of Video
        newVideo(): Slides.Schema.Video;
        // Create a new instance of VideoProperties
        newVideoProperties(): Slides.Schema.VideoProperties;
        // Create a new instance of WeightedFontFamily
        newWeightedFontFamily(): Slides.Schema.WeightedFontFamily;
        // Create a new instance of WordArt
        newWordArt(): Slides.Schema.WordArt;
        // Create a new instance of WriteControl
        newWriteControl(): Slides.Schema.WriteControl;
    }
}
declare const Slides: GoogleAppsScript.Slides;
