// Type definitions for zingchart 2.8
// Project: https://github.com/zingchart
// Definitions by: Mike Schultz <https://github.com/mike-schultz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3
import * as zingchart from '.';
export as namespace zingchart;
export function render(config: object): null;

export interface data {
   globals?: globals;
   graphset?: [graphset];
   gui?: gui;
   history?: history;
   refresh?: refresh;
}
export interface globals {
   /**
    * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
    * ing completely opaque. Note that values require a leading zero before the decimal. 0.3 | 0.9 | ...
    */
   alpha?: number;
   /**
    * Sets the border color of the object, applicable to closed shapes. "none" | "transparent" | "#1A237E" | "purple" | ...
    */
   'border-color'?: string;
   /**
    * Sets the border radius of the object, applicable to closed shapes. "3px" | "7px" | ...
    */
   'border-radius'?: number;
   /**
    * Sets the border width of the object, applicable to closed shapes. 4 | "6px" | ...
    */
   'border-width'?: number;
   /**
    * Sets the font color of the object. "none" | "transparent" | "#1A237E" | "purple" | ...
    */
   'font-color'?: string;
   /**
    * Sets the font family of the object. "Arial" | "Tahoma,Verdana" | ...
    */
   'font-family'?: string;
   /**
    * Sets the font size of the object. 12 | "20px" | ...
    */
   'font-size'?: number;
   /**
    * Sets the font weight of the object. "normal" | "bold"
    */
   'font-weight'?: string;
   /**
    * Sets the line color of the object, applicable to non-closed shapes. "none" | "transparent" | "#1A237E" | "purple" | ...
    */
   'line-color'?: string;
   /**
    * Sets the line style of the object, applicable to non-closed shapes. "solid" | "dashed" | "dotted" | "dashdot"
    */
   'line-style'?: string;
   /**
    * Sets the line width of the object, applicable to non-closed shapes. 4 | "6px" | ...
    */
   'line-width'?: number;
}
export interface graphset {
   /**
    * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
    * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
    */
   alpha?: number;
   /**
    * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
    * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
    *  15, 15)" | ...
    */
   'background-color'?: string;
   /**
    * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
    */
   'border-color'?: string;
   /**
    * Sets the border radius (rounded corners) of the object. "3px" | "10px"
    */
   'border-radius'?: any;
   /**
    * Sets the border width of the object. 1 | 3 | | "6px" | ...
    */
   'border-width'?: number;
   /**
    * Sets the height of the object. 10 | "20px" | 0.3 | "30%" | ...
    */
   height?: number;
   /**
    * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
    */
   'line-style'?: string;
   /**
    * The type of the chart "line" | "bar"...
    */
   type?: string;
   /**
    * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
    */
   width?: number;
   '3d-aspect'?: {
       /**
        * Sets the view angle when using the isometric 3D engine. Value can be between 0 and 90, with the default viewing angle being 45°. 5
        *  | 10 | ...
        */
       angle?: number;
       /**
        * Sets the Z depth for a 3D chart type displayed in either isometric or true 3D. 5 | 10 | ...
        */
       depth?: number;
       /**
        * Sets whether the chart uses a true 3D engine or an isometric view. Disabling true3d forces an isometric view. true | false | 1 | 0
        */
       true3d?: boolean;
       /**
        * Sets the X rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type. 5 | 10 | ...
        */
       'x-angle'?: number;
       /**
        * Sets the Y rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type. 5 | 10 | ...
        */
       'y-angle'?: number;
       /**
        * Sets the Z rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type. 5 | 10 | ...
        */
       'z-angle'?: number;
       /**
        * Sets the perspective zoom for the true 3D view. The default zoom level is 1.0. Note that a leading 0 is required before the decima
        * l for values less than 1.0. 1 | 1.5 | 0.8 | ...
        */
       zoom?: number;
   };
   arrows?: [
       {
           /**
            * Sets the text's font angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the arrow's label font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Text displayed in a label over the arrow. "Upturn" | "10% decrease" | ...
            */
           text?: string;
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the arrow head width and head height. The first numeric entry in the array sets the head width and the second entry sets the
            * head height. [...]
            */
           aspect?: any;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the direction of the arrow "top" | "bottom" | "left" | "right"
            */
           direction?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the length of the arrow. 50 | 100 | ...
            */
           length?: number;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           from?: {
               /**
                * Sets the arrow's starting point to that of a charted value. The plot value refers to the set of values in a series, and the index
                * refers to the specific value within that series. For example, node:plot=0,index=10 sets the starting point of the arrow at the 11t
                * h value within the 1st set of values in the series. Note that 0 refers to the first value or set of values, with 1 being the secon
                * d value or set of values, and so on. "node:index=4" | "node:plot=0,index=1" | ...
                */
               hook?: string;
               /**
                * Sets an x-offset for the arrow's starting point. Can be used to make adjustments to an arrow's starting x ordinate or hook point.
                * 10 | 56 | ...
                */
               'offset-x'?: number;
               /**
                * Sets a y-offset for the arrow's starting point. Can be used to make adjustments to an arrow's starting y ordinate or hook point. 1
                * 0 | 56 | ...
                */
               'offset-y'?: number;
               /**
                * Sets the x ordinate for an arrow's starting point. Ordinates are counted in pixels, starting from the top-left corner of the chart
                * . 100 | 450 | ...
                */
               x?: number;
               /**
                * Sets the y ordinate for an arrow's starting point. Ordinates are counted in pixels, starting from the top-left corner of the chart
                * . 100 | 450 | ...
                */
               y?: number;
           };
           to?: {
               /**
                * Sets the arrow's end point to that of a charted value. The plot value refers to the set of values in a series, and the index refer
                * s to the specific value within that series. For example, node:plot=0,index=10 sets the end point of the arrow at the 11th value wi
                * thin the 1st set of values in the series. Note that 0 refers to the first value or set of values, with 1 being the second value or
                *  set of values, and so on. "node:index=4" | "node:plot=0,index=1" | ...
                */
               hook?: string;
               /**
                * Sets an x-offset for the arrow's end point. Can be used to make adjustments to an arrow's end x ordinate or hook point. 10 | 56 |
                * ...
                */
               'offset-x'?: number;
               /**
                * Sets a y-offset for the arrow's end point. Can be used to make adjustments to an arrow's end y ordinate or hook point. 10 | 56 | .
                * ..
                */
               'offset-y'?: number;
               /**
                * Sets the x ordinate for an arrow's end point. Ordinates are counted in pixels, starting from the top-left corner of the chart. 100
                *  | 450 | ...
                */
               x?: number;
               /**
                * Sets the y ordinate for an arrow's end point. Ordinates are counted in pixels, starting from the top-left corner of the chart. 100
                *  | 450 | ...
                */
               y?: number;
           };
       },
   ];
   crosshair?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * X-Axis Crosshairs Only: When true, plot nodes will be highlighted only when the guide is directly next to the node. When false (th
        * e default setting), the plot nodes closest to the guide will be highlighted. true | false | 1 | 0
        */
       exact?: boolean;
       /**
        * Sets the line color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
        * en each line segment. 4 | "6px" | ...
        */
       'line-gap-size'?: any;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
        * t of line. 4 | "6px" | ...
        */
       'line-segment-size'?: any;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object. 4 | "6px" | ...
        */
       'line-width'?: any;
       /**
        * Reverses the order of items in plotLabel. Generally used with positive stacked charts.
        */
       'reverse-series'?: boolean;
       /**
        * X-Axis Crosshairs Only: For graphsets with multiple chart objects, setting the attribute to true in "crosshair-x" will allow you t
        * o use crosshairs across all charts simultaneously. true | false | 1 | 0
        */
       shared?: boolean;
       /**
        * X-Axis Crosshairs Only: Sets the mode used to display crosshair plot-labels. When set to "move" (the default setting), plot-labels
        *  for all nodes will be displayed. The "hover" setting will allow only one plot-label to be displayed at a time, with the visibilit
        * y of each label being triggered when the user hovers over a node. "move" | "hover"
        */
       trigger?: string;
       /**
        * Y-Axis Crosshairs Only: Sets the type of the "crosshair-y", either in single mode (one line for all scales) or multiple (a line fo
        * r every plot). "single" | "multiple"
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       marker?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See the square points between the lines. "none" | "transparent"
            * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See the square points between the lines. 4 | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: number;
           /**
            * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
            * ear6 | gear7 | gear8
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'plot-label'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Clips text that runs longer than the width of the parent object. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the text's color of the crosshair xy label when you hover over the graph items. "none" | "transparent" | "#f00" | "#f00 #00f"
            *  | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the rotation angle of the crosshair xy label when you hover over the graph items. Similar with angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color of the crosshair xy label when you hover over the graph items. Similar with color. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family of the crosshair xy label when you hover over the graph items. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size of the crosshair xy label when you hover over the graph items. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style of the crosshair xy label when you hover over the graph items. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight of the crosshair xy label when you hover over the graph items. Similar with bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text of the crosshair xy label when you hover over the graph items is displayed with italic characters or not . t
            * rue | false | 1 | 0
            */
           italic?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * To separate the plot labels so that a label appears for each series. You can assign unique text and styling to each label by going
            *  to the "series" array. In each series object, create a "guide-label"object, where you can place your series-specific text and sty
            * ling attributes. true | false | 1 | 0
            */
           multiple?: boolean;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
            * arts are rendered using SVG. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Allows the underlying data to be 'transformed' to a new format if it was in that format originally. For example, if data is coded
            * as a date and time, and 'type':'date' is specified as an attribute of this object, '1311261385209' will display 'Wed, 19 of May 05
            * :00 PM' if '%D, %d %M %h:%i %A' is specified under the transform attribute of scale-x. {...}
            */
           transform?: any;
           /**
            * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
            * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
            * "
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       'scale-label'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text of the scale label is displayed with bold characters or not. To see this, hover over the axis to the bottom.
            *  true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Sets the text's color of the crosshair xy label when you hover over the graph items. "none" | "transparent" | "#f00" | "#f00 #00f"
            *  | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the rotation angle of the crosshair xy label when you hover over the graph items. Similar with angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color of the crosshair xy label when you hover over the graph items. Similar with color. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family of the crosshair xy label when you hover over the graph items. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size of the crosshair xy label when you hover over the graph items. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style of the crosshair xy label when you hover over the graph items. Similar with italic. "none" | "italic" |
            *  "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight of the crosshair xy label when you hover over the graph items. Similar with bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text of the crosshair xy label when you hover over the graph items is displayed with italic characters or not . t
            * rue | false | 1 | 0
            */
           italic?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * X-Axis Crosshair Scale Labels Only: Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
            * arts are rendered using SVG. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Allows the underlying data to be 'transformed' to a new format if it was in that format originally. For example, if data is coded
            * as a date and time, and 'type':'date' is specified as an attribute of this object, '1311261385209' will display 'Wed, 19 of May 05
            * :00 PM' if '%D, %d %M %h:%i %A' is specified under the transform attribute of scale-x. {...}
            */
           transform?: any;
           /**
            * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
            * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
            * "
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
   };
   csv?: {
       /**
        * In case of fixed width column format of the CSV data, specifies the dimensions for each column. Some csv files are formatted based
        *  on the idea of "fixed sized columns", not by the standard comma or semicolon "separator". So, the columns array holds the number
        * of characters for each column so that the parser will be able to split each line in the correct way [...]
        */
       columns?: any;
       /**
        * Sets the CSV data directly embedded in the JSON, as a string. However new-line characters are not allowed in the definition of an
        * attribute in json syntax, and therefore the row separator character will likely need also be overridden with the "row-separator" a
        * ttribute if "data-string" is used in place of "url". "Apple,25,34\r\nPear,-16,10\r\nLemon,22,-5\r\nOrange,41,21" | ...
        */
       'data-string'?: string;
       /**
        * Specifies if the CSV data contains descriptive headers for each column as the first or second row (depending on title presence). t
        * rue | false | 1 | 0
        */
       'horizontal-labels'?: boolean;
       /**
        * Specifies if the CSV data should be processed in a mirrored way (per line instead of per column). Note the different format used f
        * or the data-string. true | false | 1 | 0
        */
       mirrored?: boolean;
       /**
        * Sets the separator between the data rows when using a data-string instead of an external .CSV file. The default value is "\r\n". "
        * _" | "&" | "\r\n" | ...
        */
       'row-separator'?: string;
       /**
        * Specifies whether or not each column in the csv data should have its own scale on the chart. true | false | 1 | 0
        */
       'separate-scales'?: boolean;
       /**
        * Sets the separator between the data cells, default is ",". Any single character can be used as a separator. "*" | "/" | "," | ...
        */
       separator?: string;
       /**
        * Smart-Scales will analyze the CSV data to determine if each column of data is of a different enough type of data to deserve a sepa
        * rate scale. If it is, smart-scales will assign the unique data columns to separate scales. true | false | 1 | 0
        */
       'smart-scales'?: boolean;
       /**
        * Specifies if the CSV data contains a descriptive title on the first line. If this attribute it not included, then the library look
        * s at the data to decide if the first line is intended to be a title or not. If it thinks it is, The first line will become the tit
        * le of the graph. If there is a title line in the CSV and "title":"true" is set, the first line will be the graph title, but if "ti
        * tle":"false" is specified, that first line will become a scale-label. true | false | 1 | 0
        */
       title?: boolean;
       /**
        * Sets the url for the CSV data source. "http://www.domain.com/link.php" | "%FILEPATH%/fruit.csv" | "/resources/datacsv.txt" | ...
        */
       url?: string;
       /**
        * Specifies if the CSV data contains descriptive headers for each row. true | false | 1 | 0
        */
       'vertical-labels'?: boolean;
   };
   heatmap?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * TODO: description of async attribute true | false | 1 | 0
        */
       async?: boolean;
       /**
        * Sets the blur radius of the heatmap regions. 10 | 20 | ...
        */
       blur?: number;
       /**
        * Sets the type of blur shape. "circle" | "square" | ...
        */
       'brush-typebrushType'?: string;
       /**
        * Sets the blur shapes to composite or not. true | false | 1 | 0
        */
       composite?: boolean;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
       /**
        * Sets whether or not the data is sorted. true | false | 1 | 0
        */
       'sort-datasortData'?: boolean;
       graph?: {
           /**
            * Sets the key-scale value "scale-k" | "scale-v" | ...
            */
           'key-scalekeyScale'?: string;
           /**
            * Sets the value-scale value "scale-x" | "scale-y" | ...
            */
           'val-scalevalScale'?: string;
       };
       tooltip?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. For graph plot tooltip. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. For graph plot tooltip. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). For graph plot to
            * oltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. For graph plot tooltip. "
            * none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. For graph plot tooltip.
            * "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". For graph plot tooltip. "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. For graph plot tooltip. "image.png" |
            *  ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. For graph plot tooltip. "0 0" | "50 100" | "80%
            *  60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. For graph plot tooltip. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(1
            * 00, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. For grap
            * h plot tooltip. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object. For graph plot tooltip. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. For graph plot tooltip. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. For graph plot tooltip. 4 | "6px
            * " | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. For graph plot tooltip. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. For graph plot tooltip. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. For graph plot tooltip. "top" | "right" | "
            * bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. For graph plot tooltip. 4 | "6px"
            * | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off extra text. Use with width. For graph plot tooltip. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the text's color of the tooltip. Similar with font-color. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00
            * f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Allows you to set the number of decimal places displayed for each value. 2 | 3 | 10 | ...
            */
           decimals?: number;
           /**
            * Allows you to set the decimal mark displayed for each value. "." | "," | " " | ...
            */
           'decimals-separator'?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. For graph plot tooltip. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. For graph plot tooltip. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the rotation angle of the text of the tooltip. Similar with angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color of the tooltip. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100,
            *  15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family of the tooltip. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size of the tooltip. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style of the tooltip. Similar with italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight of the tooltip. Similar with bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. For graph p
            * lot tooltip. "#f00 #0f0 #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. For gra
            * ph plot tooltip. "0.1 0.5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. For graph plot tooltip. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
            */
           item?: string;
           /**
            * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
            */
           map?: string;
           /**
            * Sets the object's margins. For graph plot tooltip. Works with output flash. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           margin?: any;
           /**
            * Sets the object's bottom margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-bottom'?: any;
           /**
            * Sets the object's left margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-left'?: any;
           /**
            * Sets the object's right margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-right'?: any;
           /**
            * Sets the object's top margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-top'?: any;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." For graph plot tooltip. Works with output canvas and svg. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. For graph plot tooltip. Works with output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text of the tooltip. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Specifies where tooltips are fixed relative to their node values. Refer to the applicable chart types page for more information. O
            * ptions by Chart Type: "node:top" | "node:center" | "node:out" | ...
            */
           placement?: string;
           /**
            * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
            *  For graph plot tooltip.
            */
           position?: string;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the character used to separate thousands. "," | "." | " " | ...
            */
           'thousands-separator'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. For graph plot tooltip. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
           /**
            * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
            */
           'z-index'?: number;
       };
   };
   images?: [
       {
           /**
            * Sets the image source. Source can be the path to a local image file or a web image's location. Acceptable file formats include PNG
            * , GIF, JPEG, and TIFF.
            */
           src?: string;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's position relative to it's container. Similar results can be obtained by setting margin and margin-... attributes
            * .
            */
           position?: string;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
           /**
            * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
            */
           'z-index'?: number;
       },
   ];
   labels?: [
       {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Allows you to set the label's anchor position to the center of a chart. "c"
            */
           anchor?: string;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Truncates text based on the setting of width. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
            * 15)" | ...
            */
           color?: string;
           /**
            * Sets the style of the cursor when hovering over the label. "hand" | "normal"
            */
           cursor?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
            * | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Hooks the label to a specific node or scale index. The plot value refers to the index of a series object, and index refers to the
            * specific value within that series. "node:index=4" | "node:plot=0,index=1" | "scale:name=scale-y,index=3" | "scale:value=1420501300
            * 000" (timestamp) |...
            */
           hook?: string;
           /**
            * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
            */
           italic?: boolean;
           /**
            * Prevents hooked labels from showing outside of the plotarea none | xy
            */
           limit?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the url's target for the link associated with the object. Use with "url". "_blank" | ...
            */
           target?: string;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
            * arts are rendered using SVG. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
            * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the URL for the link associated with the object. "http://www.domain.com/link.php" | "link.asp" | ...
            */
           url?: string;
           /**
            * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
            * "
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
           'callout-tip'?: {
               /**
                * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
                * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
                * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
                *  15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
                */
               'border-color'?: string;
               /**
                * Sets the border width of the object. 1 | 3 | | "6px" | ...
                */
               'border-width'?: number;
               /**
                * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
                */
               'line-color'?: string;
               /**
                * Sets the line width of the object. 1 | 3 | | "6px" | ...
                */
               'line-width'?: number;
               /**
                * Sets the size of the object. 4 | "6px" | ...
                */
               size?: number;
               /**
                * Sets the shape type of the object. "circle" | "diamond" | "cross" | "arrow"
                */
               type?: string;
           };
       },
   ];
   legend?: {
       /**
        * Forces the plotarea to consider the legend positioning and prevent overlapping with it. true | false | 1 | 0
        */
       'adjust-layout'?: boolean;
       /**
        * Automatically aligns the legend and adjusts "plotarea" margins accordingly. "left" | "center" | "right"
        */
       align?: string;
       /**
        * Sets the transparency of the object. The higher the value, the less transparent the object appears. Requires the formatting 0.x. 0
        * .3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the object's bottom border style. Accepts solid, dotted, and dashed. Also accepts named colors. If color is not set properly,
        *  will default to black. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. The higher the value, the more rounded the corners appear. 4 | "6px" | "6px
        * 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length for an extension line off the tip of the callout arrow. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets a location for the point of the tip of the callout arrow. Uses XY coordinates. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset for the origin of the callout arrow. Uses positive or negative values to move the arrow right/left/up/down. 4 | "6
        * px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets which edge will be the location for the object's callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * Sets legend to be collapsed by default true | false | 1 | 0
        */
       collapse?: boolean;
       /**
        * Sets the handler used to drag the legend: icon will create a dragging icon on the legend header, which will be the only area on wh
        * ich you can click and drag, header will make the whole header object active for dragging the legend. "header" | "icon"
        */
       'drag-handler'?: string;
       /**
        * Sets whether the legend can be dragged or not. true | false | 1 | 0
        */
       draggable?: boolean;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient (more than 2 colors). To be used with gradient-stops. "#f00 #0f0 #00f" | ..
        * .
        */
       'gradient-colors'?: string;
       /**
        * Sets the position for the introduction of each color for a complex background gradient (more than 2 colors). To be used with gradi
        * ent-colors. "0.1 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * An alias for the "highlight" attribute in the "plot" object. Highlights the corresponding plot when the legend item is moused over
        * . true | false | 1 | 0
        */
       'highlight-plot'?: boolean;
       /**
        * Sets the layout for the legend items. "horizontal" | "h" | "vertical" | "v" | "row x col" | "x col" | "row x" | "float"
        */
       layout?: string;
       /**
        * Sets the object's margin/s from the top-left of the chart. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum number of items displayed on the legend. To be used with overflow. 5 | 10 | ...
        */
       'max-items'?: number;
       /**
        * Sets whether the legend can be minimized or not.
        */
       minimize?: boolean;
       /**
        * Sets an X offset to apply when positioning the legend. A positive value moves the legend to the right. A negative value moves the
        * legend to the left. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the legend. A positive value moves the legend down. A negative value moves the legend up
        * . 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the display mode for legend items beyond max-items setting: none will display all items, hidden will display just top max-ite
        * ms items, page will enable the pagination module, scrollwill enable legend scrolling, with top max-items items per page. To be use
        * d with max-item. "none" | "hidden" | "page" | "scroll"
        */
       overflow?: string;
       /**
        * Reverses the items in the legend
        */
       'reverse-series'?: boolean;
       /**
        * Sets the object's position relative to its container. Similar results can be obtained by setting [margin] and [margin-...] attribu
        * tes. Uses x,y coordinates originating from the top left of the chart.
        */
       position?: string;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. The higher the value, the less transparent the shadow will be. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * For graphsets with multiple chart objects, setting this attribute to true within the legend object of each chart will allow you to
        *  use one legend to toggle data on or off for each chart simultaneously. It should be noted that while each chart must have a legen
        * d object, the visible attribute can be set to false to hide a legend. true | false | 1 | 0
        */
       shared?: any;
       /**
        * Sets the action performed on legend item toggle: hide will simply hide the respective plot, remove will repaint the chart without
        * considering the respective plot, disabled will not generate any action for the legend items/markers. "hide" | "remove" | "disabled
        * "
        */
       'toggle-action'?: string;
       /**
        * Automatically aligns the legend and adjusts "plotarea" margins accordingly. "top" | "middle" | "bottom"
        */
       'vertical-align'?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       footer?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not in the Footer of the Legend. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. Defaults to 1px if border
            * -width is not set. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. Defaults to dark gray if
            * border-color is not set. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Clips the text to a specified width. Requires width. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the text's color in the Footer of the Legend. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15
            * )" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. Affects the angle of a linear fill or the position of a radial fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets a Y offset to apply to the fill. Affects position of gradient stops on a linear fill or the position of a radial fill. 4 | "6
            * px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the rotation angle of the Footer of the Legend. Similar with angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color of the Footer of the Legend. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow
            * " | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size of the Footer of the Legend. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style of the Footer of the Legend. Similar with italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight of the Footer of the Legend. Similar with bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text of the Footer of the Legend is displayed with italic characters or not. Similar with font-weight. true | fal
            * se | 1 | 0
            */
           italic?: boolean;
           /**
            * Sets the maximum number of characters displayed by the text label of the Footer of the Legend. If value is smaller than the length
            *  of the text, the original text will be trimmed and '...' will be appended at the end. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's bottom padding around the text of the Footer of the Legend. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text of the Footer of the Legend. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text of the Footer of the Legend. padding-left here may push the text out of the contain
            * ing legend if the number is big enough. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text of the Footer of the Legend. padding-right here will not push the text out of the
            * containing legend. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text of the Footer of the Legend. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the text content of the object of the Footer of the Legend. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the box of the Footer of the Legend. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency of the Footer of the Legend. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration of the Footer of the Legend. Similar with underline. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text of the Footer of the Legend is displayed with underlined characters or not. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the text's vertical alignment relative to the object's box of the Footer of the Legend. "top" | "middle" | "bottom"
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. Requires width. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       header?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not in the Header of the Legend. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Defaults to black if border-color is not set. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Defaults to 1px if border-width is not set. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Requires border-color. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off the text at a specified width. Requires a setting for width. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the text's color in the Header of the Legend. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15
            * )" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the rotation angle of the Header of the Legend. Similar with angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color of the Header of the Legend. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow
            * " | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family of the Footer of the Legend. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size of the Header of the Legend. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style of the Header of the Legend. Similar with italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight of the Header of the Legend. Similar with bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text of the Header of the Legend is displayed with italic characters or not. true | false | 1 | 0
            */
           italic?: boolean;
           /**
            * Sets the maximum number of characters displayed by the text label of the Header of the Legend. If value is smaller than the length
            *  of the text, the original text will be trimmed and '...' will be appended at the end. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's bottom padding around the text of the Header of the Legend. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text of the Header of the Legend. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text of the Header of the Legend. padding-left here may push the text out of the contain
            * ing legend if the number is big enough. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text of the Header of the Legend. padding-right here will not push the text out of the
            * containing legend. 4 | "6px" | ...
            */
           'padding-right'?: number;
           /**
            * Sets the object's top padding around the text of the Header of the Legend. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the text content of the object of the Header of the Legend. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the box of the Header of the Legend. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency of the Header of the Legend. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration of the Header of the Legend. Similar with underline. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text of the Header of the Legend is displayed with underlined characters or not. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the text's vertical alignment relative to the object's box of the Header of the Legend. "top" | "middle" | "bottom"
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. Requires a widthsetting. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       icon?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-colorfor closed shapes. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-widthfor closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
       };
       'item-off'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | .../p>
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
            * | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
       };
       item?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
            * | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets if the legend marker has a small horizontal line through its middle. true | false | 1 | 0
            */
           'show-line'?: boolean;
           /**
            * Sets the visibility of the legend item's marker. true | false | 1 | 0
            */
           'show-marker'?: boolean;
           /**
            * Sets the action performed on legend item toggle: hide will simply hide the respective plot, remove will repaint the chart without
            * considering the respective plot, disabled will not generate any action for the legend items/markers. Equivalent of legend's toggle
            * -action. "hide" | "remove" | "disabled"
            */
           'toggle-action'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
       };
       marker?: {
           /**
            * Sets if the legend marker has a small horizontal line through its middle. true | false | 1 | 0
            */
           'show-line'?: boolean;
           /**
            * Sets the action performed on legend item toggle: hide will simply hide the respective plot, remove will repaint the chart without
            * considering the respective plot, disabled will not generate any action for the legend items/markers. Equivalent of legend's toggle
            * -action. "hide" | "remove" | "disabled"
            */
           'toggle-action'?: string;
           /**
            * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
            * ear6 | gear7 | gear8
            */
           type?: string;
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-colorfor closed shapes. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-widthfor closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           'highlight-state'?: {
               /**
                * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
                * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
                * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
                *  15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
                */
               'border-color'?: string;
               /**
                * Sets the border width of the object. 1 | 3 | | "6px" | ...
                */
               'border-width'?: number;
               /**
                * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
                */
               'line-color'?: string;
               /**
                * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
                */
               'line-style'?: string;
               /**
                * Sets the line width of the object. 1 | 3 | | "6px" | ...
                */
               'line-width'?: number;
               /**
                * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
                * ear6 | gear7 | gear8
                */
               type?: string;
           };
       };
       'page-off'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'page-on'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'page-status'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off extra text in the legend box if width is set. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets whether the text is displayed with bold characters or not. "#f00" | "rgb(100,15,15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. "#f00" | "blue" | "rgb(100,15,15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. ""Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique" | ...
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. "normal" | "bold" | ...
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. true | false | | 1 | 0
            */
           italic?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: number;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, starting with t
            * he top and going clockwise. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right" | ...
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration. Similar to underline. "none" | "underline" | ...
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. true | false | 1 | 0
            */
           underline?: string;
           /**
            * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "Middle" | "Bottom
            * "
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       scroll?: {
           bar?: {
               /**
                * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
                * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
                * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
                *  15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the styling for the bottom border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a s
                * tring. "1px solid green" | "3px dotted purple" | ...
                */
               'border-bottom'?: any;
               /**
                * Sets the styling for the left border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a str
                * ing. "1px solid green" | "3px dotted purple" | ...
                */
               'border-left'?: any;
               /**
                * Sets the border radius (rounded corners) of the object. The higher the value, the more rounded the corners appear. 4 | "6px" | "6p
                * x 10px 3px 5px" | "-10px" | ...
                */
               'border-radius'?: any;
               /**
                * Sets the styling for the right border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a st
                * ring. "1px solid green" | "3px dotted purple" | ...
                */
               'border-right'?: any;
               /**
                * Sets the styling for the top border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a stri
                * ng. "1px solid green" | "3px dotted purple" | ...
                */
               'border-top'?: any;
               /**
                * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
                */
               width?: any;
           };
           handle?: {
               /**
                * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
                * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
                * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
                *  15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the styling for the bottom border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a s
                * tring. "1px solid green" | "3px dotted purple" | ...
                */
               'border-bottom'?: any;
               /**
                * Sets the styling for the left border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a str
                * ing. "1px solid green" | "3px dotted purple" | ...
                */
               'border-left'?: any;
               /**
                * Sets the border radius (rounded corners) of the object. The higher the value, the more rounded the corners appear. 4 | "6px" | "6p
                * x 10px 3px 5px" | "-10px" | ...
                */
               'border-radius'?: any;
               /**
                * Sets the styling for the right border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a st
                * ring. "1px solid green" | "3px dotted purple" | ...
                */
               'border-right'?: any;
               /**
                * Sets the styling for the top border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a stri
                * ng. "1px solid green" | "3px dotted purple" | ...
                */
               'border-top'?: any;
               /**
                * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
                */
               width?: any;
           };
       };
       tooltip?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius (rounded corners) of the object. "3px" | "10px"
            */
           'border-radius'?: any;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object text. "none" | "transparent" | "purple" | "#33ccff" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object text. "Courier" | "Georgia" | "Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object text. 12 | "20px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object text. "normal" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the height of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: number;
           /**
            * Sets the padding around the object text. "10%" | "25px" ...
            */
           padding?: number;
           /**
            * To create sticky tooltips. Use this with the "timeout" attribute, which allows you to specify how long you want the tooltips to "s
            * tick" to the chart. true | false | 1 |0
            */
           sticky?: boolean;
           /**
            * Specifies what text to display in the tooltips. "Legend Tooltips" | "%t %plot-description" | "..."
            */
           text?: string;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * To create sticky tooltips. Provide a value in milliseconds. Use this with the "sticky" attribute, which specifies whether or not t
            * ooltips will "stick" to the chart. "30000 | 10000 | ...
            */
           timeout?: number;
           /**
            * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: number;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
   };
   'media-rules'?: [
       {
           /**
            * Sets the maximum chart height in pixels. 600 | 400 | 300
            */
           'max-height'?: number;
           /**
            * Sets the maximum chart width in pixels. 1000 | 800 | 600
            */
           'max-width'?: number;
           /**
            * Sets the minimum chart height in pixels. 600 | 400 | 300
            */
           'min-height'?: number;
           /**
            * Sets the minimum chart width in pixels. 1000 | 800 | 600
            */
           'min-width'?: number;
           /**
            * Removes the object (legend, title) from the chart at that specified breakpoint. Use the attribute to save screen space at smaller
            * breakpoints. true | false
            */
           visible?: boolean;
       },
   ];
   'no-data'?: {
       /**
        * Sets the text's horizontal alignment to one of the three applicable values, relative to the object's box. "left" | "center" | "rig
        * ht"
        */
       align?: string;
       /**
        * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
        * "
        */
       'vertical-align'?: string;
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
        */
       bold?: boolean;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
        * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
        * 15)" | ...
        */
       color?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
        * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
        * | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight. Similar to bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
        */
       italic?: boolean;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
        * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
        * 10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the text content of the object. "Some Text" | ...
        */
       text?: string;
       /**
        * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
        */
       'text-align'?: string;
       /**
        * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
        * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
        * arts are rendered using SVG. "none" | "underline"
        */
       'text-decoration'?: string;
       /**
        * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
        * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
        */
       underline?: boolean;
       /**
        * Sets the URL for the link associated with the object. "http://www.domain.com/link.php" | "link.asp" | ...
        */
       url?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
        */
       'wrap-text'?: boolean;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
   };
   options?: {
       /**
        * To set the layout of the word cloud. "spiral" | "flow-center" | "flow-top"
        */
       aspect?: string;
       /**
        * To define words to be excluded from the word cloud, e.g., "and" or "the". [...]
        */
       ignore?: any;
       /**
        * When the "color-type" attribute is set to "color", use this attribute to set the color of the text in the word cloud. "red" | "#3F
        * 51B5" | ...
        */
       color?: string;
       /**
        * To set the type of color arrangement applied to the word cloud. Use the "color" value with the "color" attribute. Use the "palette
        * " value with the "palette" array. "random" (default) | "color" | "palette"
        */
       'color-type'?: string;
       /**
        * To set the maximum font size. 20 | "30px" | ...
        */
       'max-font-size'?: any;
       /**
        * To set the maximum number of items displayed in the word cloud. 100 | 30 | ...
        */
       'max-items'?: any;
       /**
        * To set the minimum font size. 10 | "12px" | ...
        */
       'min-font-size'?: any;
       /**
        * To set the minimum length of the words displayed in the word cloud. 3 | 5 | ...
        */
       'min-length'?: any;
       /**
        * When the "color-type" attribute is set to "palette", use this attribute to set the color palette of the word cloud. [...]
        */
       palette?: any;
       /**
        * To set whether every one or two words rotates 90 degrees. true | false (default)
        */
       rotate?: boolean;
       /**
        * To control the step metering. Use this with the "step-radius" attribute. 45 | 90 | ...
        */
       'step-angle'?: any;
       /**
        * To control the step metering. Use this with the "step-angle" attribute. 30 | 50 | ...
        */
       'step-radius'?: any;
       /**
        * To provide the data for the word cloud. (Alternatively, data can be provided through a "words" array.) "text data..." | ...
        */
       text?: string;
       /**
        * To set the type of item to be analyzed: words or characters. "word" (default) | "character"
        */
       token?: string;
       button?: {
           /**
            * To set the text of the button 3m | 2015 | all
            */
           text?: string;
           /**
            * To set multiplier for count ytd | all | year | month | week | day | hour | minute
            */
           type?: string;
           /**
            * Offset from start to zoom. This attribute is coupled with the type attribute to determine where to set the zoom level. 1 | 2 | 3
            */
           count?: any;
       };
       'context-menu'?: {
           /**
            * To set the visibility of the object. true | false
            */
           visible?: boolean;
           button?: {
               /**
                * To style the closing context menu button. Use the lineColor attribute to specify the button color. {...}
                */
               close?: any;
               /**
                * To style the opening context menu button. Use the lineColor attribute to specify the button color. {...}
                */
               open?: any;
           };
           items?: [
               {
                   /**
                    * To specify the font color of the context menu items. 'gray' | '##666699'
                    */
                   'font-color'?: any;
                   /**
                    * To display or remove the Save Image context menu item. true | false
                    */
                   image?: boolean;
                   /**
                    * To display or remove the Lock/Unlock Scrolling context menu item. true | false
                    */
                   lock?: boolean;
                   /**
                    * Use the object to display or remove individual Share Image context menu items: email, facebook, twitter, and linkedin. {...}
                    */
                   share?: any;
               },
           ];
       };
       indicator?: {
           /**
            * To set the visibility of the object. true | false
            */
           visible?: boolean;
           npv?: {
               /**
                * To set the number of decimals that will be displayed. 0 | 1 |2 | ...
                */
               decimals?: number;
               /**
                * To set the font color. 'gray' | '#666699' | ...
                */
               'font-color'?: any;
               /**
                * To set the font family. 'Arial' | 'Georgia' | ...
                */
               'font-family'?: string;
               /**
                * To set the font size. 30 | 24 | 16 | ...
                */
               'font-size'?: number;
               /**
                * To set the font style. 'normal' | 'italic'
                */
               'font-style'?: string;
               /**
                * To set the font weight. 'normal' | 'bold'
                */
               'font-weight'?: string;
               /**
                * To set the visibility of the object. true | false
                */
               visible?: boolean;
           };
           title?: {
               /**
                * To set the font color. 'gray' | '#666699' | ...
                */
               'font-color'?: any;
               /**
                * To set the font family. 'Arial' | 'Georgia' | ...
                */
               'font-family'?: string;
               /**
                * To set the font size. 30 | 24 | 16 | ...
                */
               'font-size'?: number;
               /**
                * To set the font style. 'normal' | 'italic'
                */
               'font-style'?: string;
               /**
                * To set the font weight. 'normal' | 'bold'
                */
               'font-weight'?: string;
               /**
                * To set the visibility of the object. true | false
                */
               visible?: boolean;
           };
           value?: {
               /**
                * To set the font color. 'gray' | '#666699' | ...
                */
               'font-color'?: any;
               /**
                * To set the font family. 'Arial' | 'Georgia' | ...
                */
               'font-family'?: string;
               /**
                * To set the font size. 30 | 24 | 16 | ...
                */
               'font-size'?: number;
               /**
                * To set the font style. 'normal' | 'italic'
                */
               'font-style'?: string;
               /**
                * To set the font weight. 'normal' | 'bold'
                */
               'font-weight'?: string;
               /**
                * To set the visibility of the object. true | false
                */
               visible?: boolean;
           };
       };
       style?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
            * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
            * , 15)' | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius of the object. 2 | 3 | '5px' | ...
            */
           'border-radius'?: number;
           /**
            * Sets the border width of the object. 1 | 3 | '6px' | ...
            */
           'border-width'?: number;
           /**
            * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
            */
           'font-family'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the padding of the object. 3 | '5px' | '10px' | ...
            */
           padding?: number;
           /**
            * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
            * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           'text-alpha'?: number;
           'hover-state'?: {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                * , 15, 15)' | ...
                */
               'background-color'?: string;
               /**
                * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                * , 15)' | ...
                */
               'border-color'?: string;
               /**
                * Sets the border radius of the object. 2 | 3 | '5px' | ...
                */
               'border-radius'?: number;
               /**
                * Sets the border width of the object. 1 | 3 | '6px' | ...
                */
               'border-width'?: number;
               /**
                * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                */
               'font-color'?: any;
               /**
                * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                */
               'line-style'?: string;
               /**
                * Sets the padding of the object. 3 | '5px' | '10px' | ...
                */
               padding?: number;
               /**
                * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
                * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                */
               'text-alpha'?: number;
           };
           tooltip?: {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                * , 15, 15)' | ...
                */
               'background-color'?: string;
               /**
                * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
                * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               'border-alpha'?: number;
               /**
                * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                * , 15)' | ...
                */
               'border-color'?: string;
               /**
                * Sets the border radius of the object. 2 | 3 | '5px' | ...
                */
               'border-radius'?: number;
               /**
                * Sets the border width of the object. 1 | 3 | '6px' | ...
                */
               'border-width'?: number;
               /**
                * Sets the font angle of the object. -45 | 115 | ...
                */
               'font-angle'?: number;
               /**
                * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                */
               'font-color'?: any;
               /**
                * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
                */
               'font-family'?: string;
               /**
                * Sets the font size of the object. 12 | "20px" | ...
                */
               'font-size'?: number;
               /**
                * Sets the font style of the object. "normal" | "italic"
                */
               'font-style'?: string;
               /**
                * Sets the font weight of the object. "normal" | "bold"
                */
               'font-weight'?: string;
               /**
                * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                */
               'line-style'?: string;
               /**
                * Sets the padding of the object. 3 | '5px' | '10px' | ...
                */
               padding?: number;
               /**
                * Sets the text to be displayed in the tooltips. "%text: %hits" | ...
                */
               text?: any;
               /**
                * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
                * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                */
               'text-alpha'?: number;
               /**
                * Sets the visibility of the object. true | false (default)
                */
               visible?: boolean;
           };
       };
       violin?: {
           /**
            * To set the trim. true | false | 0 | 1
            */
           trim?: boolean;
           /**
            * To set the jitter width. 0 | .5 | 1 | 2 | ...
            */
           jitter?: any;
           /**
            * To set the `rounding-factor` on median edges. 0 | .5 | 1 | 2 | ...
            */
           roundingFactor?: any;
           /**
            * To set the `mean-factor` width. 0 | .5 | 1 | 2 | ...
            */
           meanFactor?: any;
           /**
            * To set the styling of the violin object. {}
            */
           style?: any;
       };
       words?: [
           {
               /**
                * To set the word count. 5 | 20 | 100 | ...
                */
               count?: any;
               /**
                * To set the word. "Flowers" | "Freesia" | "Peony" | ...
                */
               text?: string;
           },
       ];
   };
   plot?: {
       /**
        * Sets the transparency level of backgrounds, borders, and lines. Values must range between 0.0 and 1.0, with 0.0 being completely t
        * ransparent and 1.0 being completely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Modifies how data points appear on a chart. Refer to the applicable chart types page for more information. Options by Chart Type:
        * "segmented" | "spline" | "stepped" | "jumped" | "cone" | "histogram" | ...
        */
       aspect?: string;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use "gradient-c
        * olors" and "gradient-stops". "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with "background-color-2". "none" | "transparent"
        * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with "background-color-1". "none" | "transparent"
        *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the "background-repeat" value is "no-repeat". "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Nested Pie Charts Only: This attribute is used to set the space between band in nested pie charts ("type":"nestedpie"). 5 | 10 | .
        * ..
        */
       'band-space'?: number;
       /**
        * Bar Charts and Bullet Charts Only: Sets the max width of bars. "10" | "10%" | "10px"
        */
       'bar-max-width'?: number;
       /**
        * Bar Charts and Bullet Charts Only: Sets the amount of space between each bar in a single plot index. "10" | "10%" | "10px"
        */
       'bar-space'?: number;
       /**
        * Bar Charts and Bullet Charts Only: Sets the width of each bar. "10" | "10%" | "10px"
        */
       'bar-width'?: number;
       /**
        * Bar Charts and Bullet Charts Only: Defines how much the bars in each plot index should overlap. "10" | "10%" | "10px"
        */
       'bars-overlap'?: number;
       /**
        * Bar Charts and Bullet Charts Only: Defines the spacing to the left of the bars at each index position. "10" | "10%" | "10px"
        */
       'bars-space-left'?: number;
       /**
        * Bar Charts and Bullet Charts Only: Defines the spacing to the right of the bars at each index position. "10" | "10%" | "10px"
        */
       'bars-space-right'?: number;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also "line-color" for closed shapes. "none" | "transparent"
        * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
        * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also "line-width" for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the "callout-position". 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * By defalut null values within series arrays will create a blank space within a plot. Setting connected-nulls to true will connect
        * values through a null data point. true | false | 1 | 0
        */
       'connect-nulls'?: boolean;
       /**
        * Area Charts Only: Sets whether the contour lines on area plots will be on top of all areas or will be hidden by the next area plot
        *  on top of it. You will notice when the attribute is set to true the lines are all set above the shaded regions. true | false | 1
        * | 0
        */
       'contour-on-top'?: boolean;
       /**
        * Sets the style of the cursor when hovering over a node. "hand" | "normal"
        */
       cursor?: string;
       /**
        * This attribute allows you to create custom tokens and associate static or dynamic data to them. This attribute can be used almost
        * anywhere in a chart. "Some Text" | ...
        */
       'data-...'?: string;
       /**
        * Using the decimals attribute will allow you to set the number of decimal places associated to each value. 5 | 10 | ...
        */
       decimals?: number;
       /**
        * The "decimals-separator": attribute allows you to set what type of punctuation the will be used in the decimal place. "." | "," |
        * ...
        */
       'decimals-separator'?: string;
       /**
        * This attribute sets description text for the plot which can be addressed in various areas with the %plot-description token. "Some
        * Text" | ...
        */
       description?: string;
       /**
        * By default ZingChart uses sampling when rendering charts. This helps improve rendering speeds and typically does not effect the ap
        * pearance of the chart. However, using the attribute "exact": true within the "plot": { } object forces ZingChart to render all nod
        * es. true | false | 1 | 0
        */
       exact?: boolean;
       /**
        * This attribute sets the values to scientific notation true | false | 1 | 0
        */
       exponent?: boolean;
       /**
        * This attribute set the number of decimals to be used when using exponents for scientific notation 5 | 10 | ...
        */
       exponentDecimals?: number;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Bullet Charts Only: Accepts numerical values. Determines where goals are set for all plots. The "goals": [ ] values can also be se
        * t individually within each value set. [45, 70, 60]
        */
       goals?: any;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with "gradient-stops". "#f00 #0f
        * 0 #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with "gradient-colors". "0.1
        * 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * When true, automatically selects all nodes with the same scale index as the selected node. The selection-mode attribute must also
        * be set. true | false | 1 | 0
        */
       'group-selections'?: boolean;
       /**
        * Venn Diagrams Only: This attribute allow you to set the values for the area to be shared between each node. [30]
        */
       join?: any;
       /**
        * The "legend-text": attribute is typically used within "series": [ ] value sets. Using this attribute allows you to associate both
        * a "text":" " and "legend-text":" " to each value set "Some Text" | ...
        */
       'legend-text'?: string;
       /**
        * Sets the line color of the object, applicable on non-closed shapes. See also "border-color"for closed shapes. "none" | "transparen
        * t" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Can be used to create custom dashed or dotted lines when used with "line-segment-size". This will control the size of the gaps bet
        * ween each line segment. 4 | "6px" | ...
        */
       'line-gap-size'?: any;
       /**
        * Can be used to create custom dashed or dotted lines when used with "line-gap-size". This will control the size of the visible segm
        * ent of line. 4 | "6px" | ...
        */
       'line-segment-size'?: any;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object, applicable on non-closed shapes. See also "border-width" for closed shapes. 4 | "6px" | ...
        */
       'line-width'?: any;
       /**
        * Applies to charts such as line and area which have markers. When there are too many markers for the chart ZingChart does not displ
        * ay all markers. Example 1000 nodes on a 300px wide chart. Setting max-nodes will override the default setting and force nodes to b
        * e displayed. 5 | 10 | ...
        */
       'max-nodes'?: number;
       /**
        * Heat Maps Only: Sets a maximum ratio applied to the value of the node when calculating its aspect. 0 | 0.4 | ...
        */
       'max-ratio'?: number;
       /**
        * Bubble Charts and Bubble Pie Charts Only: Defines the maximum size of the bubble if the value representing size is not sharing the
        *  same ratio with the value scale. 5 | 10 | ...
        */
       'max-size'?: number;
       /**
        * Sets the maximum numbers of nodes for which a tracking area will be created. This is best used to optimize charts with large sets
        * of data. 5 | 10 | ...
        */
       'max-trackers'?: number;
       /**
        * Sets whether or not a node is wrapped equally before and after its position. true | false | 1 | 0
        */
       'mid-point'?: boolean;
       /**
        * Heat Maps Only: Sets a minimum ratio applied to the value of the node when calculating its aspect. 0 | 0.4 | ...
        */
       'min-ratio'?: number;
       /**
        * Bubble Charts and Bubble Pie Charts Only: Defines the minimum size of the bubble if the value representing size is not sharing the
        *  same ratio with the value scale. 5 | 10 | ...
        */
       'min-size'?: number;
       /**
        * Sets whether monotone interpolation is used for charts using the "spline" aspect. true | false | 1 | 0
        */
       monotone?: boolean;
       /**
        * Setting "multiplier": true will take large numbers such as thousands, millions, etc and replace the full number with an abbreviate
        * d notation with a short unit such as K, M, B, etc true | false | 1 | 0
        */
       multiplier?: boolean;
       /**
        * This attribute will determine how negative values are handled. When using "format":"$%v" setting "negation":"currency" will move t
        * he - symbol to the outside of the $ sign. When using "negation" within the "plot": { } object you will see changes in things such
        * as tooltips or anywhere else series data is used to populate values. You need to set "negation" in things such as "scale-y": { } s
        * eparately. "standard" | "currency"
        */
       negation?: string;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Pie Charts Only: Use this to transform the shape of the pie slices.
        */
       'pie-transformpieTransform'?: string;
       /**
        * Pie Charts Only: Provides the ability to rotate the chart. 5 | 10 | ...
        */
       'ref-angle'?: number;
       /**
        * Heat Maps Only: Sets the value (default 'plot-max') which is used as a reference for calculating node aspect. "plot-max" | "plot-t
        * otal" | "chart-max" | "chart-total"
        */
       reference?: string;
       /**
        * By default ZingChart uses sampling when rendering large datasets. If you are trying to render 10000 data points on a chart which i
        * s only 500px wide there is not enough space for each data point. ZingChart will automatically determine which data points to show.
        *  The "sampling-step": attribute allows you to set the step for sampling. For example if you have 10000 data points and set "sampli
        * ng-step":10 it will show point 1,10,20,... Also note the "exact": true attribute if you want to force all data points. 5 | 10 | ..
        * .
        */
       'sampling-step'?: number;
       /**
        * Specifies the scales used by the series item. scale-x,scale-y | scale-x,scale-y-2 | ...
        */
       scales?: string;
       /**
        * Bubble Charts and Bubble Pie Charts Only: Sets the method used to relate the bubble numerical value to it's aspect. "radius" | "sq
        * rt" | "area"
        */
       scaling?: string;
       /**
        * When scrolling is enabled for a chart, ZingChart automatically samples the data in order to maintain performance during the re-ren
        * dering of the chart that occurs during scrolling. By default, ZingChart will automatically sample every other item (scroll-step-mu
        * ltiplier:2). Setting scroll-step-multiplier to 1 will force the library to sample every data point, essentially disabling sampling
        * . 5 | 10 | ...
        */
       'scroll-step-multiplier'?: number;
       /**
        * Line Charts and Area Charts Only: Allows you to specify whether tooltips are activated by the markers and lines (default) or the m
        * arkers only. true (default) | false
        */
       'segment-trackers'?: boolean;
       /**
        * A boolean to smart sample and render data at a sampled size. Used in conjuction with exact:false true | false
        */
       'smart-sampling'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Setting "short": true will abbreviate long numbers such as 100000 to 1K or 1000000 to 1M. When set within the "plot": {} object th
        * is change will be noticed anywhere values are pulled from series data. This can also be used in places such as "scale-y, scale-x,
        * etc" true | false | 1 | 0
        */
       short?: boolean;
       /**
        * By default when setting "short": true ZingChart will round to the nearest short unit (ie 100000 to 100K and 1000000 to 1M). You ca
        * n set the short-unit and ZingChart will round all numbers to that unit. Note when setting this within the "plot": { } object the c
        * hanges will only effect values which are pulled from the series values. Things such as scale are set separately. "k" | "K" | "m" |
        *  "M" | "b" | "B"
        */
       'short-unit'?: string;
       /**
        * On bar charts, when the value of a bar is 0, setting `show-zero`: true will add 1 pixel to the height of the bar so that it is onl
        * y just visible. true | false | 1 | 0
        */
       'show-zero'?: boolean;
       /**
        * Bubble Charts and Bubble Pie Charts Only: Sets a multiplier (default 1) used to increase/decrease the bubble size 5 | 10 | ...
        */
       'size-factor'?: number;
       /**
        * Nested Pie Charts Only: Sets the initial offset of the pie layers when making a nestedpie 5 | 10 | ...
        */
       'slice-start'?: number;
       /**
        * Using the "stack": attribute allows you to assign which plot index you want to each value set associated with when using a stacked
        *  chart. 5 | 10 | ...
        */
       stack?: number;
       /**
        * Setting "stacked": true will take each of the "series": [ ] value sets and stack them on top of one another true | false | 1 | 0
        */
       stacked?: boolean;
       /**
        * Applicable on aspect=stepped, sets the location of the stepping relative to two consecutive nodes. "before" | "middle" | "after"
        */
       'step-start'?: string;
       /**
        * Sets the url's target for the link associated with the object. Use with "url". "_blank" | ...
        */
       target?: string;
       /**
        * Sets the thickness of pie3d charts. 5 | 10 | ...
        */
       thickness?: number;
       /**
        * When you set the "thousands-separator": attribute the punctuation which is used will be placed to separate digits which go into 1,
        * 000's 10,000's etc. When placed in the "plot": { } object this will only effect values which are pulled directly from the series d
        * ata. Objects such as "scale-y": { }, "scale-x": { }, etc..., will need to be set separately. "." | "," | ...
        */
       'thousands-separator'?: string;
       /**
        * Using the "tooltip-text":" " attribute allows you to set text for tooltips. This can also be done using a variety of other tokens
        * "Some Text" | ...
        */
       'tooltip-text'?: string;
       /**
        * Sets the URL for the link associated with the object. "http://www.domain.com/link.php" | "link.asp" | ...
        */
       url?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the z-axis end point on 3d charts. 10 | "10px" | ...
        */
       'z-end'?: number;
       /**
        * Sets the z-axis start point on 3d charts. 10 | "10px" | ...
        */
       'z-start'?: number;
       animation?: {
           '1'?: any;
           '2'?: any;
           '3'?: any;
           '4'?: any;
           '5'?: any;
           '6'?: any;
           '7'?: any;
           '8'?: any;
           '9'?: any;
           '10'?: any;
           '11'?: any;
           '12'?: any;
           '13'?: any;
           /**
            * Sets the delay in milliseconds between each step of the animation. 5 | 10 | ...
            */
           delay?: number;
           /**
            * Determines whether or not animation occurs when a change is made to the chart via an API event (e.g., adding node, adding plot, re
            * moving node). true (default) | false | 1 | 0
            */
           'on-change'?: boolean;
           'on-legend-toggle'?: any;
           /**
            * Sets the animation effect. Numeric Code String Name 1 `ANIMGATION_FADE_IN` 2 `ANIMATION_EXPAND_VERTICAL` 3 `ANIMATION_EXPAND_TOP`
            * 4 `ANIMATION_EXPAND_BOTTOM` 5 `ANIMGATION_FADE_IN` 6 `ANIMATION_EXPAND_RIGHT` 7 `ANIMATION_EXPAND_HORIZONTAL` 8 `ANIMATION_SLIDE_L
            * EFT` 9 `ANIMATION_SLIDE_RIGHT` 10 `ANIMATION_SLIDE_TOP` 11 `ANIMATION_SLIDE_BOTTOM` 12 `ANIMATION_UNFOLD_HORIZONTAL` 13 `ANIMATION
            * _UNFOLD_VERTICAL`
            */
           effect?: number;
       };
       'background-marker'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the type of the object/shape. "pie" | "circle" | "star5" | ...
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
       };
       'background-state'?: {
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
       };
       error?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
       };
       errors?: [{}];
       goal?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: any;
           /**
            * Sets the border color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: any;
           /**
            * Sets the border radius of the object, for rounded corners. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: number;
           /**
            * Sets the border width of the object. 4 | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the height of the object. 10 | "20px"
            */
           height?: number;
           /**
            * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Only applies to Horizontal Bar Charts: Sets the width of the object. 10 | "20px"
            */
           width?: number;
       };
       'guide-label'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Note that values require the leading 0 before the decimal point. Use with "background-color" attribute. 0.3 | 0.4 |
            *  0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#FF0
            * 000", "#0000FF"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "#f00" | "#f00 #00f" | "red yel
            * low" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 4 | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object. 4 | "6px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object. "none" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object. "none" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the padding around the text of the object. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the crosshair plot label text to be displayed for that series. You can provide any combination of alphanumeric characters and
            * /or ZingChart tokens. "%v widgets" | "Top Sales: %v" | "$%v" | "%v %t" | "..."
            */
           text?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'highlight-marker'?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | | "6px" | ...
            */
           'line-width'?: number;
       };
       'highlight-state'?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | | "6px" | ...
            */
           'line-width'?: number;
       };
       'hover-marker'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
            * ear6 | gear7 | gear8
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'hover-state'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Area Charts Only: Sets the transparency level of the area below a line. Values must range between 0.0 and 1.0, with 0.0 being comp
            * letely transparent and 1.0 being completely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.9
            * | ...
            */
           'alpha-area'?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'legend-item'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. Requires Legend. Used only inside individual
            *  series rather than Plot. See red text in upper right box. Works with output flash. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See red text in
            *  upper right box. Works with output canvas and svg. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). Requires Legend.
            * Used only inside individual series rather than Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f
            * " | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. Requires Legend. Used onl
            * y inside individual series rather than Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red
            *  yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. Requires Legend. Used on
            * ly inside individual series rather than Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "re
            * d yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". Requires Legend. Used only inside individual series rathe
            * r than Plot. See red text in upper right box. "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. Requires Legend. Used only inside ind
            * ividual series rather than Plot. See red text in upper right box. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. Requires Legend. Used only inside individual se
            * ries rather than Plot. See red text in upper right box. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. Requires Legend. Used only inside individual series rather than Plot. See red te
            * xt in upper right box. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not. Requires Legend. Used only inside individual series rather than Pl
            * ot. See red text in upper right box. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. Requires Legend. Used only inside individual seri
            * es rather than Plot. See red text in upper right box. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object. Requires Legend. Used only inside individual series rather than Plot. See red text in upper r
            * ight box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. Requires Legend. Used only inside individual series
            *  rather than Plot. See red text in upper right box. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. Requires
            *  Legend. Used only inside individual series rather than Plot. See red text in upper right box. 4 | "6px" | "6px 10px 3px 5px" | "-
            * 10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series ra
            * ther than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series r
            * ather than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series rathe
            * r than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series rath
            * er than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. Requires Legend. Used only inside individual serie
            * s rather than Plot. See red text in upper right box. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object. Requires Legend. Used only inside individual series rather than Plot. See red text in upper r
            * ight box. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. Requires Legend. Used only inside individual series rather than Plot. See
            *  red text in upper right box. Works with output canvas and svg. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. Requires Legend. Used only inside individual se
            * ries rather than Plot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. Requires Legend. Used only insid
            * e individual series rather than Plot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart.. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right b
            * ox. Works with output canvas and svg. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. Requires Legend. Used only inside individual series rather than Pl
            * ot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. Requires Legend. Used only inside individua
            * l series rather than Plot. See red text in upper right box. Works with output canvas and svg. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. Requires Legend. Used only inside
            * individual series rather than Plot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Sets the color of the text in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text i
            * n upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Sets the style of the cursor when hovering over a node. "hand" | "normal"
            */
           cursor?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. Requires Legend. Used only inside individual series rather th
            * an Plot. See red text in upper right box. Works with output canvas and svg. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See red text in upper
            *  right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See red text in upper
            *  right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. Requires Legend. Used only inside individual series rather than
            *  Plot. See red text in upper right box. Works with output canvas and svg. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. For the text in the legend box. Requires Legend. Used only ins
            * ide individual series rather than Plot. See red text in upper right box. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the font color of the text in the legend box. Works like color. Requires Legend. Used only inside individual series rather th
            * an Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text
            * in upper right box. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text in
            *  upper right box. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text i
            * n upper right box. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight in the legend box. Similar to bold. Requires Legend. Used only inside individual series rather than Pl
            * ot. See red text in upper right box. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. Requires Le
            * gend. Used only inside individual series rather than Plot. See red text in upper right box. Works with output canvas and svg. "#f0
            * 0 #0f0 #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. Require
            * s Legend. Used only inside individual series rather than Plot. See red text in upper right box. Works with output canvas and svg.
            * "0.1 0.5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box. W
            * orks with output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. For the legend box. Similar to font-style. Requires Legend. Used
            *  only inside individual series rather than Plot. See red text in upper right box. true | false | 1 | 0
            */
           italic?: boolean;
           /**
            * Sets the object's margins. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box.
            * Works with output canvas and svg. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           margin?: any;
           /**
            * Sets the object's bottom margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right
            *  box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'margin-bottom'?: any;
           /**
            * Sets the object's left margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right b
            * ox. Works with output canvas and svg. 4 | "6px" | ...
            */
           'margin-left'?: any;
           /**
            * Sets the object's right margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right
            * box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'margin-right'?: any;
           /**
            * Sets the object's top margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right bo
            * x. Works with output canvas and svg. 4 | "6px" | ...
            */
           'margin-top'?: any;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." Requires Legend. Used only inside individual series rather than Plot. See red text in uppe
            * r right box. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box. Works w
            * ith output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
            *  See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
            *  See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * To specify the order of the legend items in the legend. 1 | 2 | 3 | 4 | ...
            */
           order?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, starting with t
            * he top and going clockwise. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box.
            *  10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. For single item in Legend. Requires Legend. Used only inside individual series r
            * ather than Plot. See red text in upper right box. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. For single item in Legend. Requires Legend. Used only inside individual series rat
            * her than Plot. See red text in upper right box. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. For single item in Legend. Requires Legend. Used only inside individual series ra
            * ther than Plot. See red text in upper right box. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. For single item in Legend. Requires Legend. Used only inside individual series rath
            * er than Plot. See red text in upper right box. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. For single item in Legend. Requires Legend. Used only inside individual series
            *  rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. true | fa
            * lse | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. For single item in Legend. Req
            * uires Legend. Used only inside individual series rather than Plot. See red text in upper right box. Works with output flash. Has l
            * imited effect on HTML5 implementation. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. For single item in Legend. Requires Legend. Used only inside individual series
            *  rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. -45 | 115
            *  | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. For single item in Legend. Requires Legend. Used only inside individual se
            * ries rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. 4 | "
            * 6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. For single item in Legend. Requires Legend. Used only inside individual series rather
            * than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. "none" | "transpa
            * rent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. For single item in Legend. Requires Legend. Used only inside individual serie
            * s rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. 4 | "6px
            * " | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the text content of the object. For single item in Legend. Requires Legend. Used only inside individual series rather than Pl
            * ot. See red text in upper right box. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. For single item in Legend. Requires Legend. Used only inside in
            * dividual series rather than Plot. See red text in upper right box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. For single item in Legend. Requires Legend. Used
            * only inside individual series rather than Plot. See red text in upper right box. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration. Similar to underline. For single item in Legend. Requires Legend. Used only inside individual series r
            * ather than Plot. See red text in upper right box. Use output canvas or flash. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. For single item in Legend. Requires Legend. Used only inside
            *  individual series rather than Plot. See red text in upper right box. Use output canvas or flash. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets whether the text will wrap, depending on the width of the object. For single item in Legend. Requires Legend. Used only insid
            * e individual series rather than Plot. See red text in upper right box. Use output canvas or flash. "top" | "middle" | "bottom"
            */
           'vertical-align'?: string;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. See red text in upper right box. Use output canvas or flash
            * . true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       'legend-marker'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. Requires Legend. Used only inside individual
            *  series rather than Plot. See the shape to the left of the text in the upper right box. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See the shape t
            * o the left of the text in the upper right box. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. For the shape to the left of the Legend text. Colors can be entered by name (e.g. "red",
            * "blue", "yellow"), in hexadecimal notation (e.g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0
            * ,0,255)", "rgb(255,255,0)"). Requires Legend. Used only inside individual series rather than Plot. See the orange shape to the lef
            * t of the text in the upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. Requires Legend. Used onl
            * y inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "none" | "transparent"
            * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. Requires Legend. Used on
            * ly inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". Requires Legend. Used only inside individual series rathe
            * r than Plot. See the shape to the left of the text in the upper right box. "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. Requires Legend. Used only inside ind
            * ividual series rather than Plot. See the shape to the left of the text in the upper right box. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. Requires Legend. Used only inside individual se
            * ries rather than Plot. See the shape to the left of the text in the upper right box. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. Requires Legend. Used only inside individual series rather than Plot. See the sh
            * ape to the left of the text in the upper right box. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. Requires Legend. Used onl
            * y inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "none" | "transparent"
            * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. See also line-color for c
            * losed shapes. Requires Legend. Used only inside individual series rather than Plot. See the shape to the left of the text in the u
            * pper right box. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the style of the cursor when hovering over a node. "hand" | "normal"
            */
           cursor?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. Requires Legend. Used only inside individual series rather th
            * an Plot. See the shape to the left of the text in the upper right box. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See the shape to the
            * left of the text in the upper right box. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See the shape to the
            * left of the text in the upper right box. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. Requires Legend. Used only inside individual series rather than
            *  Plot. See the shape to the left of the text in the upper right box. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. Requires Le
            * gend. Used only inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "#f00 #0f
            * 0 #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. Require
            * s Legend. Used only inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "0.1
            * 0.5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
            *  See the shape to the left of the text in the upper right box. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
            *  See the shape to the left of the text in the upper right box. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the size of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See the shape to the left
            *  of the text in the upper right box. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the type of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See the shape to the left
            *  of the text in the upper right box. "pie" | "circle" | "star5" | ...
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. Requires Legend. Used only in
            * side individual series rather than Plot. See the shapes to the left of the text in the upper right box. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the X position of the object. Requires Legend. Used only inside individual series rather than Plot. See the shapes to the lef
            * t of the text in the upper right box. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. Requires Legend. Used only inside individual series rather than Plot. See the shapes to the lef
            * t of the text in the upper right box. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
       };
       marker?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. See the square points between the lines. 0.3
            *  | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. See the square points between the lines. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. See the square points between the lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "
            * rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. See the square points bet
            * ween the lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. See the square points be
            * tween the lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". Used with background-image. See the square points between
            *  the lines. "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. See the square points between the lin
            * es. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. See the square points between the lines. "0 0"
            * | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. See the square points between the lines. "no-repeat" | "repeat" | "repeat-x" | "
            * repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See the square points between the lines. "none" | "transparent"
            * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See the square points between the lines. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. See the square points between the lines. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. See the square points between the lines. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. See the square points between the lines. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. See the square points between the lines. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
            */
           map?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
            * ear6 | gear7 | gear8
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
           /**
            * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
            */
           'z-index'?: number;
       };
       preview?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Area Chart only: Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely trans
            * parent and 1.0 being completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           'alpha-area'?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 2 | 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * To set the stock preview chart type: area chart or line chart. "area" (default) | "line"
            */
           type?: string;
       };
       rules?: [
           {
               /**
                * A rule allows you to include logic in order to apply a set of attributes only to certain aspects of your chart that meet the crite
                * ria specified within each "rule": group. You can include any number of "rule": groups nested within a "rules": set. Place the desi
                * red attribute or attributes within each "rule": group to apply those attributes to the areas that fulfill the requirement. The eff
                * ect of rules depends largely on the placement of the "rules": set within your JSON code. In the above example, the styling attribu
                * tes within each rule will be applied to the scale-y guide. "%c == 2" | "%v <= 0" | "%v > 0" | ...
                */
               rule?: string;
           },
       ];
       'selected-marker'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. See the boxes at each point when clicked. Wo
            * rks with output flash. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the type of the object/shape. "pie" | "circle" | "star5" | ...
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
       };
       'selected-state'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
       };
       tooltip?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. For graph plot tooltip. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. For graph plot tooltip. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). For graph plot to
            * oltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. For graph plot tooltip. "
            * none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. For graph plot tooltip.
            * "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". For graph plot tooltip. "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. For graph plot tooltip. "image.png" |
            *  ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. For graph plot tooltip. "0 0" | "50 100" | "80%
            *  60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. For graph plot tooltip. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(1
            * 00, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. For grap
            * h plot tooltip. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. For graph plot tooltip. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object. For graph plot tooltip. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. For graph plot tooltip. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. For graph plot tooltip. 4 | "6px
            * " | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. For graph plot tooltip. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. For graph plot tooltip. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. For graph plot tooltip. "top" | "right" | "
            * bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. For graph plot tooltip. 4 | "6px"
            * | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off extra text. Use with width. For graph plot tooltip. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the text's color of the tooltip. Similar with font-color. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00
            * f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Allows you to set the number of decimal places displayed for each value. 2 | 3 | 10 | ...
            */
           decimals?: number;
           /**
            * Allows you to set the decimal mark displayed for each value. "." | "," | " " | ...
            */
           'decimals-separator'?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. For graph plot tooltip. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. For graph plot tooltip. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the rotation angle of the text of the tooltip. Similar with angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the text's color of the tooltip. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100,
            *  15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family of the tooltip. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size of the tooltip. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style of the tooltip. Similar with italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight of the tooltip. Similar with bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. For graph p
            * lot tooltip. "#f00 #0f0 #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. For gra
            * ph plot tooltip. "0.1 0.5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. For graph plot tooltip. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
            */
           item?: string;
           /**
            * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
            */
           map?: string;
           /**
            * Sets the object's margins. For graph plot tooltip. Works with output flash. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           margin?: any;
           /**
            * Sets the object's bottom margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-bottom'?: any;
           /**
            * Sets the object's left margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-left'?: any;
           /**
            * Sets the object's right margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-right'?: any;
           /**
            * Sets the object's top margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
            */
           'margin-top'?: any;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." For graph plot tooltip. Works with output canvas and svg. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. For graph plot tooltip. Works with output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets an Y offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text of the tooltip. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text of the tooltip. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Specifies where tooltips are fixed relative to their node values. Refer to the applicable chart types page for more information. O
            * ptions by Chart Type: "node:top" | "node:center" | "node:out" | ...
            */
           placement?: string;
           /**
            * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
            *  For graph plot tooltip.
            */
           position?: string;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the character used to separate thousands. "," | "." | " " | ...
            */
           'thousands-separator'?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. For graph plot tooltip. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
           /**
            * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
            */
           'z-index'?: number;
       };
       trend?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | | "6px" | ...
            */
           'line-width'?: number;
       };
       'value-box'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Note that values require the leading 0 before the decimal point. Use with "background-color" attribute. 0.3 | 0.4 |
            *  0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object. A positive value will turn it in a clockwise direction. A negative value will turn it in a
            * counterclockwise direction. -90 | 270 | 180 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#FF0
            * 000", "#0000FF"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). One color will set a solid background color. Two colors
            * will, by default, create a horizontal gradient. For more complex gradients, use "gradient-colors" and "gradient-stops". "none" | "
            * transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a two-color background gradient. To be used with "background-color-2". "none" | "transparent" | "#f00" | "
            * #f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a two-color background gradient. To be used with "background-color-1". "none" | "transparent" | "#f00" |
            * "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction(s) in which the background image is being stretched. Works with "background-image". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the "background-repeat" attribute is set to "no-repeat". "0 0" | "50 100" | "80% 60%" | .
            * ..
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. Works with "background-image". "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the border color of the object, applicable on closed shapes. See the "line-color" attribute for closed shapes. "none" | "tran
            * sparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See the "line-width" attribute for closed shapes. 4 | "6px" | ..
            * .
            */
           'border-width'?: any;
           /**
            * Sets whether or not the object will have a callout arrow. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Allows you to set the number of decimal places displayed for each value. 2 | 3 | 10 | ...
            */
           decimals?: number;
           /**
            * Allows you to set the decimal mark displayed for each value. "." | "," | " " | ...
            */
           'decimals-separator'?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the object. 5 | "10px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets a Y offset to apply to the object. 5 | "10px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the font color of the value box text. Similar to the "color" attribute. "none" | "transparent" | "#f00" | "#f00 #00f" | "red
            * yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the value box text. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the value box text. 4 | "6px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the value box text. Similar to the "italic" attribute. "none" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the value box text. Similar to the "bold" attribute. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the colors for a complex background gradient consisting of two or more colors. Use with the "gradient-stops" attribute. Works
            *  with output svg. "#f00 #0f0 #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of two or more colors. Use with the "gradient-colors" attribu
            * te. Works with output svg. "0.1 0.5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets an X offset to apply when positioning the object. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the padding around the text of the object. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Specifies where the value boxes are placed in relation to the data points. Options by chart type: "in" | "out" | "auto" | "left" |
            *  "right" | "over" | ...
            */
           placement?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets whether or not the object's shadow is visible. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the character used to separate thousands. "," | "." | " " | ...
            */
           'thousands-separator'?: string;
           /**
            * Specifies which value boxes are displayed. By default, all values in a series are displayed. You can also display the minimum, max
            * imum, first, last, and/or no values. "all" | "min" | "max" | "first" | "last" | none" | "min,max" | "first,last,min,max" | ...
            */
           type?: string;
           /**
            * Sets the visibility of the value box object. Allows you to turn off the object without removing lines of JSON. true | false | 1 |
            * 0
            */
           visible?: boolean;
           connector?: {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                * mpletely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the line color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'line-color'?: string;
               /**
                * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
                */
               'line-style'?: string;
               /**
                * Sets the line width of the object. 4 | "6px" | ...
                */
               'line-width'?: any;
           };
           joined?: {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                * mpletely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                * , 15, 15)' | ...
                */
               'background-color'?: string;
               /**
                * Sets the border color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                */
               'border-color'?: string;
               /**
                * Sets the border radius of the object. 2 | 3 | '5px' | ...
                */
               'border-radius'?: number;
               /**
                * Sets the border width of the object. 1 | 3 | '6px' | ...
                */
               'border-width'?: number;
               /**
                * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                */
               'font-color'?: string;
               /**
                * Sets the font size of the object. 10 | 12 | '20px' | ...
                */
               'font-size'?: number;
               /**
                * Sets the padding of the object. 3 | '5px' | '10px' | ...
                */
               padding?: number;
               /**
                * Sets the joined venn diagram text to display. 'Joined' | '%joined-value' | ...
                */
               text?: string;
           };
           shared?: {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                * mpletely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                * , 15, 15)' | ...
                */
               'background-color'?: string;
               /**
                * Sets the border color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                */
               'border-color'?: string;
               /**
                * Sets the border radius of the object. 2 | 3 | '5px' | ...
                */
               'border-radius'?: number;
               /**
                * Sets the border width of the object. 1 | 3 | '6px' | ...
                */
               'border-width'?: number;
               /**
                * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                */
               'font-color'?: string;
               /**
                * Sets the font size of the object. 10 | 12 | '20px' | ...
                */
               'font-size'?: number;
               /**
                * Sets the padding of the object. 3 | '5px' | '10px' | ...
                */
               padding?: number;
               /**
                * Sets the shared venn diagram text to display. 'Shared' | '%shared-value' | ...
                */
               text?: string;
           };
       };
   };
   plotarea?: {
       /**
        * If true, it is similar with setting margin:"dynamic", added with adjust-layout attributes on title and legend. true | false | 1 |
        * 0
        */
       'adjust-layout'?: boolean;
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
        * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
        */
       item?: string;
       /**
        * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
        */
       map?: string;
       /**
        * Sets the object's margin/s. The plotarea object also accepts "dynamic" as value for the margin attribute, in which case it analyze
        * s the scale labels and change the plotarea size accordingly in order to fit all scale labels. "dynamic" | 10 | "5px" | "10 20" | "
        * 5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's top margin. The plotarea object also accepts "dynamic" as value for the margin attribute, in which case it analy
        * zes the scale labels and change the plotarea size accordingly in order to fit all scale labels. "dynamic" | 10 | "5px" | "10 20" |
        *  "5px 10px 15px 20px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's top margin. The plotarea object also accepts "dynamic" as value for the margin attribute, in which case it analy
        * zes the scale labels and change the plotarea size accordingly in order to fit all scale labels. "dynamic" | 10 | "5px" | "10 20" |
        *  "5px 10px 15px 20px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's top margin. The plotarea object also accepts "dynamic" as value for the margin attribute, in which case it analy
        * zes the scale labels and change the plotarea size accordingly in order to fit all scale labels. "dynamic" | 10 | "5px" | "10 20" |
        *  "5px 10px 15px 20px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. The plotarea object also accepts "dynamic" as value for the margin attribute, in which case it analy
        * zes the scale labels and change the plotarea size accordingly in order to fit all scale labels. "dynamic" | 10 | "5px" | "10 20" |
        *  "5px 10px 15px 20px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets an additional margin specifically to the bottom of the plotarea when using dynamic margins. Offset will only be set if there
        * is a scale object on the bottom of the chart. "dynamic" | 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       'margin-bottom-offset'?: any;
       /**
        * Sets an additional margin specifically to the left of the plotarea when using dynamic margins. Offset will only be set if there is
        *  a scale object on the left of the chart. "dynamic" | 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       'margin-left-offset'?: any;
       /**
        * Sets an additional margin specifically to the left of the plotarea when using dynamic margins. Offset will only be set if there is
        *  a scale object on the right of the chart. "dynamic" | 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       'margin-right-offset'?: any;
       /**
        * Sets an additional margin specifically to the top of the plotarea when using dynamic margins. Offset will only be set if there is
        * a scale object on the top of the chart. "dynamic" | 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       'margin-top-offset'?: any;
       /**
        * Sets the tolerance of the mask (in number of pixels) that covers the plotarea to allow objects to overflow outside of the plotarea
        * . 4 | "6px" | ...
        */
       'mask-tolerance'?: number;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
        */
       position?: string;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   preview?: {
       /**
        * Forces the plotarea to consider the preview object positioning and prevent overlapping with it. true | false | 1 | 0
        */
       'adjust-layout'?: boolean;
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets whether the chart is updated when the preview active area is being moved. Default is false for classic theme and true for lig
        * ht/dark themes. The graph will update only when a the mouse is released. true | false | 1 | 0
        */
       live?: boolean;
       /**
        * Sets the object's margins. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the minimum width of preview's active area. 5 | 10 | ...
        */
       'min-distance'?: number;
       /**
        * Sets the object's position relative to its container. Similar results can be obtained by setting marginand margin-... attributes.
        */
       position?: string;
       /**
        * Sets whether the zoom level is preserved when a chart is altered or reloaded. true | false | 1 | 0
        */
       'preserve-zoom'?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets the "x" position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the "y" position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       active?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
       };
       handle?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the styling for the bottom border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a s
            * tring. "1px solid green" | "3px dotted purple" | ...
            */
           'border-bottom'?: any;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the styling for the left border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a str
            * ing. "1px solid green" | "3px dotted purple" | ...
            */
           'border-left'?: any;
           /**
            * Sets the border radius (rounded corners) of the object. The higher the value, the more rounded the corners appear. 4 | "6px" | "6p
            * x 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the styling for the right border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a st
            * ring. "1px solid green" | "3px dotted purple" | ...
            */
           'border-right'?: any;
           /**
            * Sets the styling for the top border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a stri
            * ng. "1px solid green" | "3px dotted purple" | ...
            */
           'border-top'?: any;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
       };
       label?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. In the scale-x / scale-y label. See the red
            * text. Works for output flash. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. In the scale-x / scale-y label. See the red text. Works for output canvas and svg. -4
            * 5 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). In the scale-x /
            * scale-y label. See the red text. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. See the red text. Works f
            * or output canvas and svg. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not in the scale-x / scale-y label. See the red text. true | false | 1
            * | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off extra text. Use with width. For the scale-x / scale-y label. See the red text. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the object's font color. Similar to font-color. For the scale-x / scale-y label. See the red text. "none" | "transparent" | "
            * #f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. For the scale-x / scale-y label. See the red text. -45 | 115
            * | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. For the scale-x / scale-y label. See the red text. "linear" | "
            * radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. For the scale-x / scale-y label. See the red text. "none" | "transparent" | "#f00"
            *  | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. For the scale-x / scale-y label. See the red text. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. For the scale-x / scale-y label. See the red text. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. For the scale-x / scale-y label. See the red text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. For the scale-x / scale-y label. See the red text. Works with output canvas and svg. 10 | "20px" | 0.3 |
            *  "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. For the scale-x / scale-y label. See the red text. true | false
            * | 1 | 0
            */
           italic?: boolean;
           /**
            * If set to 'true', scale labels will lock in place and not rotate based upon the viewing angle in 3D charts.
            */
           'lock-rotation'?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "...". For the scale-x / scale-y label. See the red text. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration. Similar to underline. For output canvas and flash. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. For output canvas and flash. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the visibility of the object. For the label. Used with output canvas and svg. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       mask?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
       };
   };
   'scale-k'?: {
       /**
        * On a radar chart, the “aspect” attribute allows you to change the chart’s shape from star/spider (default) to circular. 'star' (de
        * fault) | 'circle'
        */
       aspect?: string;
       /**
        * Allows you to set the format for your scale-k values. You can use a combination of text and tokens (%v represents the scale values
        * ), e.g., “%v°” or “Variable %v”. 'Value: %v'
        */
       format?: string;
       /**
        * Allows you to set custom labels for each step along scale-k. [...]
        */
       labels?: any;
       /**
        * Used to set the minimum, maximum, and step scale values on scale-k. E.g., for “values”: “0:330:30”, 0 is the minimum, 330 is the m
        * aximum, and 30 is the step. "0:100:10" | [1,3,5,7] | ...
        */
       values?: any;
       /**
        * Used to hide the k-axis. true | false
        */
       visible?: boolean;
       guide?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the line color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
           items?: [
               {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the background color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
               },
           ];
       };
       item?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the angle of the object. -45 | 30 | 120 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
            * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
            * , 15)' | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius of the object. 2 | 3 | '5px' | ...
            */
           'border-radius'?: number;
           /**
            * Sets the border width of the object. 1 | 3 | '6px' | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object. 10 | 12 | '20px' | ...
            */
           'font-size'?: number;
           /**
            * Sets the font style of the object. 'italic' | 'normal'
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object. 'bold' | 'normal'
            */
           'font-weight'?: string;
           /**
            * Sets the padding of the object 3 | '5px' | '10px' | ...
            */
           padding?: number;
           /**
            * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
            * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           'text-alpha'?: number;
       };
       tick?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 4 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the placement of the object. 'outer' | 'inner' | 'cross'
            */
           placement?: string;
           /**
            * Sets the size of the object. 4 | '6px' | ...
            */
           size?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
       };
       tooltip?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius (rounded corners) of the object. "3px" | "10px"
            */
           'border-radius'?: any;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object text. "none" | "transparent" | "purple" | "#33ccff" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object text. "Courier" | "Georgia" | "Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object text. 12 | "20px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object text. "normal" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the height of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: number;
           /**
            * Sets the padding around the object text. "10%" | "25px" ...
            */
           padding?: number;
           /**
            * To create sticky tooltips. Use this with the "timeout" attribute, which allows you to specify how long you want the tooltips to "s
            * tick" to the chart. true | false | 1 |0
            */
           sticky?: boolean;
           /**
            * Specifies what text to display in the tooltips. Use with the %scale-value (%v) token. "Scale Tooltips" | "%v Days" | "..."
            */
           text?: string;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * To create sticky tooltips. Provide a value in milliseconds. Use this with the "sticky" attribute, which specifies whether or not t
            * ooltips will "stick" to the chart. "30000 | 10000 | ...
            */
           timeout?: number;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: number;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
   };
   'scale-r'?: {
       /**
        * Gauge Charts Only: To set custom labels that correspond to each tick mark on the scale. If there are more tick marks than labels,
        * the default scale values will be used for the remaining labels. ['A', 'B', 'C', 'D', 'E'] | ...
        */
       labels?: any;
       /**
        * Gauge Charts Only: To set the number of minor tick marks displayed between the major tick marks. 9 | 5 | 2 | ...
        */
       'minor-ticks'?: number;
       /**
        * Gauge Charts Only: To set the minimum, maximum, and step scale values. '0:10' | '0:25:5' | ...
        */
       values?: any;
       center?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
            * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
            * , 15)' | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 1 | 3 | '6px' | ...
            */
           'border-width'?: number;
           /**
            * Sets the size of the pivot point. 4 | "6px" | ...
            */
           size?: number;
           /**
            * Sets the shape of the pivot point. 'circle' | 'diamond' | 'star5' | 'gear9' | ...
            */
           type?: string;
           /**
            * Sets the x-coordinate position of the pivot point. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
           /**
            * Sets the y-coordinate position of the pivot point. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: number;
       };
       guide?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the line color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699',
            * '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15,
            * 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
       };
       item?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the angle of the object. 'auto' | 30 | 90 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
            * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
            * , 15)' | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius of the object. 2 | 3 | '5px' | ...
            */
           'border-radius'?: number;
           /**
            * Sets the border width of the object. 1 | 3 | '6px' | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object. 10 | 12 | '20px' | ...
            */
           'font-size'?: number;
           /**
            * Sets the font style of the object. 'italic' | 'normal'
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object. 'bold' | 'normal'
            */
           'font-weight'?: string;
           /**
            * Sets the placement of the object. Negative values move the scale items inward. Positive values move the scale items outward. 0 | -
            * 20 | 30 | ...
            */
           offsetR?: number;
           /**
            * Sets the padding of the object. 3 | '5px' | '10px' | ...
            */
           padding?: number;
           /**
            * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
            * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the visibility of the object.
            */
           visible?: boolean;
       };
       markers?: [
           {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                * , 15, 15)' | ...
                */
               'background-color'?: string;
               /**
                * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                * , 15)' | ...
                */
               'border-color'?: string;
               /**
                * Sets the border radius of the object. 2 | 3 | '5px' | ...
                */
               'border-radius'?: number;
               /**
                * Sets the border width of the object. 1 | 3 | '6px' | ...
                */
               'border-width'?: number;
               /**
                * Sets the line color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699',
                * '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15,
                * 15)' | ...
                */
               'line-color'?: string;
               /**
                * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                */
               'line-style'?: string;
               /**
                * Sets the line width of the object. 1 | 3 | '6px' | ...
                */
               'line-width'?: number;
               /**
                * Sets an ending offset for the scale marker. 0.1 | ...
                */
               'offset-end'?: number;
               /**
                * Sets a starting offset for the scale marker. 0.5 | ...
                */
               'offset-start'?: number;
               /**
                * Sets the range of the scale marker. Provide one value for line scale markers and two values (starting and ending) for area scale m
                * arkers. [60] | [20,40] | ...
                */
               range?: any;
               /**
                * Sets the scale marker type: area or line. 'area' | 'line'
                */
               type?: string;
               label?: {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the angle of the object. 'auto' | 30 | 90 | ...
                    */
                   angle?: number;
                   /**
                    * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                    * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                    * , 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                    * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                    * , 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border radius of the object. 2 | 3 | '5px' | ...
                    */
                   'border-radius'?: number;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
                   /**
                    * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'font-color'?: string;
                   /**
                    * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
                    */
                   'font-family'?: string;
                   /**
                    * Sets the font size of the object. 10 | 12 | '20px' | ...
                    */
                   'font-size'?: number;
                   /**
                    * Sets the font style of the object. 'italic' | 'normal'
                    */
                   'font-style'?: string;
                   /**
                    * Sets the font weight of the object. 'bold' | 'normal'
                    */
                   'font-weight'?: string;
                   /**
                    * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                    */
                   'line-style'?: string;
                   /**
                    * Sets the placement of the object. Negative values move the scale items inward. Positive values move the scale items outward. 0 | -
                    * 20 | 30 | ...
                    */
                   offsetR?: number;
                   /**
                    * Sets the padding of the object. 3 | '5px' | '10px' | ...
                    */
                   padding?: number;
                   /**
                    * Sets the text alignment of the object. 'left' | 'center' | 'right'
                    */
                   'text-align'?: string;
                   /**
                    * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
                    * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   'text-alpha'?: number;
                   /**
                    * Sets the width of the object. 50 | '200px' | ...
                    */
                   width?: number;
               };
           },
       ];
       'minor-guide'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699',
            * '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15,
            * 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
       };
       'minor-tick'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699',
            * '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15,
            * 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the placement of the object. 'outer' | 'inner' | 'cross'
            */
           placement?: string;
           /**
            * Sets the size of the object. 10 | '16px' | ...
            */
           size?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
       };
       ring?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
            * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
            * , 15)' | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 1 | 3 | '6px' | ...
            */
           'border-width'?: number;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the size of the object. 30 | '40px' | ...
            */
           size?: number;
           items?: [
               {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                    * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                    * , 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                    * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                    * , 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
                   /**
                    * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                    */
                   'line-style'?: string;
                   /**
                    * Sets the size of the object. 30 | '40px' | ...
                    */
                   size?: number;
               },
           ];
       };
       tick?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699',
            * '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15,
            * 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the placement of the object. 'outer' | 'inner' | 'cross'
            */
           placement?: string;
           /**
            * Sets the size of the object. 30 | '40px' | ...
            */
           size?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
       };
   };
   'scale-v'?: {
       /**
        * Allows you to set the format for your scale-v values. You can use a combination of text and tokens (%v represents the scale values
        * ), e.g., “%v°” or “Variable %v”. 'Value: %v'
        */
       format?: string;
       /**
        * Allows you to set custom labels for each step along scale-v. Note that if there are more steps than provided labels, the default v
        * alues will be used for the remaining labels. [...]
        */
       labels?: any;
       /**
        * Used to set the minimum, maximum, and step scale values on scale-v. E.g., for “values”: “0:100:25”, 0 is the minimum, 100 is the m
        * aximum, and 25 is the step. "0:100:10" | [1,3,5,7] | ...
        */
       values?: any;
       /**
        * Used to hide the v-axis. true | false
        */
       visible?: boolean;
       guide?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the line color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
           items?: [
               {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the background color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'background-color'?: string;
               },
           ];
       };
       item?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the angle of the object. -45 | 30 | 120 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
            * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
            * , 15, 15)' | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
            * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
            * , 15)' | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius of the object. 2 | 3 | '5px' | ...
            */
           'border-radius'?: number;
           /**
            * Sets the border width of the object. 1 | 3 | '6px' | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object. 10 | 12 | '20px' | ...
            */
           'font-size'?: number;
           /**
            * Sets the font style of the object. 'italic' | 'normal'
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object. 'bold' | 'normal'
            */
           'font-weight'?: string;
           /**
            * Sets the padding of the object 3 | '5px' | '10px' | ...
            */
           padding?: number;
           /**
            * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
            * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
            */
           'text-alpha'?: number;
       };
       'ref-line'?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 1 | 3 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
       };
       tick?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
            * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
            */
           'line-color'?: string;
           /**
            * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. 4 | '6px' | ...
            */
           'line-width'?: number;
           /**
            * Sets the placement of the object. 'outer' | 'inner' | 'cross'
            */
           placement?: string;
           /**
            * Sets the size of the object. 4 | '6px' | ...
            */
           size?: number;
           /**
            * Sets the visibility of the object. true | false
            */
           visible?: boolean;
       };
       tooltip?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius (rounded corners) of the object. "3px" | "10px"
            */
           'border-radius'?: any;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object text. "none" | "transparent" | "purple" | "#33ccff" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object text. "Courier" | "Georgia" | "Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object text. 12 | "20px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object text. "normal" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the height of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: number;
           /**
            * Sets the padding around the object text. "10%" | "25px" ...
            */
           padding?: number;
           /**
            * To create sticky tooltips. Use this with the "timeout" attribute, which allows you to specify how long you want the tooltips to "s
            * tick" to the chart. true | false | 1 |0
            */
           sticky?: boolean;
           /**
            * Specifies what text to display in the tooltips. Use with the %scale-value (%v) token. "Scale Tooltips" | "%v Days" | "..."
            */
           text?: string;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * To create sticky tooltips. Provide a value in milliseconds. Use this with the "sticky" attribute, which specifies whether or not t
            * ooltips will "stick" to the chart. "30000 | 10000 | ...
            */
           timeout?: number;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: number;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
   };
   'scale-x'?: {
       /**
        * true | false | 1 | 0
        */
       'auto-fit'?: boolean;
       /**
        * Sets whether the scale values will be displayed in scientific notation. Particularly useful when dealing with large numbers. true
        * | false | 1 | 0
        */
       exponent?: boolean;
       /**
        * Sets the number of decimals that will be displayed when using scientific notation. Use with the 'exponent' attribute. 5 | 10 | ...
        */
       'exponent-decimals'?: number;
       /**
        * ''horizontal' | 'h' | 'vertical' | 'v' | 'row x col' | 'x col' | 'row x' | 'float''
        */
       layout?: string;
       /**
        * Sets the color of the axis line. 'none' | 'transparent' | '#f00' | '#f00 #00f' | 'red yellow' | 'rgb(100, 15, 15)' | ...
        */
       'line-color'?: string;
       /**
        * Sets the gap size in case of a non-contiguous line style. 4 | '6px' | ...
        */
       'line-gap-size'?: any;
       /**
        * Sets the segment size in case of a non-contiguous line style. 4 | '6px' | ...
        */
       'line-segment-size'?: any;
       /**
        * Logarithmic Scales only: To set the base value, which defaults to Math.E (Euler's number, the base of natural logarithms). Math.E
        * | 10 | 2 | ...
        */
       'log-base'?: any;
       /**
        * Sets the object's margin/s. 10 | '5px' | '10 20' | '5px 10px 15px 20px' | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. 4 | '6px' | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. 4 | '6px' | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. 4 | '6px' | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. 4 | '6px' | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum number of labels that will display along the axis. 5 | 10 | ...
        */
       'max-labels'?: number;
       /**
        * Sets the maximum number of ticks to display on the x axis. 5 | 10 | ...
        */
       'max-ticks'?: number;
       /**
        * Sets the maximum value for the x axis. 'max-value': is one of the multiple ways you can set x axis values. Commonly used with time
        *  series data. Also see 'mix-value': and 'step': 4 | '6px' | ...
        */
       'max-value'?: number;
       /**
        * Sets the number of minor tick marks displayed between the major tick marks. Note that this attribute is required to style the mino
        * r tick marks and/or guides. 5 | 10 | ...
        */
       'minor-ticks'?: number;
       /**
        * Setting 'mirrored': true will reverse/mirror the x axis values. 'scale-x': {} values will read right to left. true | false | 1 | 0
        */
       mirrored?: boolean;
       /**
        * Sets the negative symbol just outside of the formatted value. 'standard' | 'currency'
        */
       negation?: string;
       /**
        * Sets an offset from the end of the plotted data. This will cause the data to appear as if it were 'squeezed' from the right side.
        * 4 | '6px' | '5%' | 35%' | ...
        */
       'offset-end'?: number;
       /**
        * Sets an offset at the start of the plotted data. This will cause the data to appear as if it were 'squeezed' from the left side. 4
        *  | '6px' | '5%' | '35%' | ...
        */
       'offset-start'?: number;
       /**
        * Sets an x offset that will be applied to the scale-x object. 4 | '6px' | ...
        */
       'offset-x'?: any;
       /**
        * Sets the placement of the scale object. 'default' | 'opposite'
        */
       placement?: string;
       /**
        * To change the scale type from linear (default) to logarithmic. 'lin' | 'log'
        */
       progression?: string;
       /**
        * Used on radial charts (pie, radar, gauge) to specify the starting angle of the nodes. -45 | 115 | ...
        */
       'ref-angle'?: number;
       /**
        * To set the value the reference line is drawn at. 1 | 5 | 10 | ...
        */
       'ref-value'?: number;
       /**
        * 5 | 10 | ...
        */
       'scale-factor'?: number;
       /**
        * Setting to true will cause the values on the x axis to use an abbreviated notation with a short unit such as K,M,B, etc. true | fa
        * lse | 1 | 0
        */
       short?: boolean;
       /**
        * Specifies which unit of measure to use when short is set to true. K | M | B | KB | MB | GB | TB | PB
        */
       'short-unit'?: string;
       /**
        * ['A', 'B'] | ...
        */
       'show-labels'?: any;
       /**
        * Sets the size of the object/shape. 4 | '6px' | ...
        */
       size?: any;
       /**
        * An alternative way to create category scale labels. Similar to a 'labels' array, the 'values' array also acts as a maximum scale v
        * alue. [1, 7, 9] | ['Jan', 'Feb', 'Mar', 'Apr'] | ['Q1', 'Q2', 'Q3', 'Q4']
        */
       values?: any;
       /**
        * You can set the 'scale-x': { } to 'visible': false to hide the x axis. The x-axis will still calculate plots correctly, however yo
        * u will not be able to see the x axis line or any of the attributes such as scale values. If you simply want to hide the x axis lin
        * e you can utilize 'line-color':'none'. This will remove the visibility of the x axis line and still allow you to style ticks, item
        * s, etc separately, true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * When zooming is enabled, setting zoom-snap to true snaps the zoom area to the nearest data node as a zoom area is selected. By def
        * ault, zoom-snap is set to false. true | false | 1 | 0
        */
       'zoom-snap'?: boolean;
       guide?: {
           /**
            * Sets the transparency of the scale-x / scale-y guide. See the red lines. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the scale-x / scale-y guide. See the blue background in between the red lines. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the line color of the scale-x / scale-y guide. See the red lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow
            * " | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * When using a dashed or dotted line-type, this will set the size of each gap between line segments. Can be used with line-segment-s
            * ize to create unique dashed or dotted lines. For the scale-x / scale-y guide. See the space between red lines. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * When using a dashed or dotted line-type, this will set the size of each visible segment of line. Can be used with line-gap-size to
            *  create unique dashed or dotted lines. For the scale-x / scale-y guide. See the red lines. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the scale-x / scale-y guide. See the red lines. "solid" | "dotted" | "dashed" | "da
            * shdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. For the scale-x / scale-y guide. See the red lines. 4 | "6px"
            * | ...
            */
           'line-width'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           items?: [
               {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the background color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
               },
           ];
       };
       item?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. 0....1
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a two-color background gradient of the object. To be used with background-color-2. "none" | "transparent"
            * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a two-color background gradient of the object. To be used with background-color-1. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
            * 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
            * | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
            */
           italic?: boolean;
           /**
            * If set to 'true', scale labels will lock in place and not rotate based upon the viewing angle in 3D charts. true | false | 1 | 0
            */
           'lock-rotation'?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
            * arts are rendered using SVG. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
            * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       label?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. In the scale-x / scale-y label. See the red
            * text. Works for output flash. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. In the scale-x / scale-y label. See the red text. Works for output canvas and svg. -4
            * 5 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). In the scale-x /
            * scale-y label. See the red text. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. See the red text. Works f
            * or output canvas and svg. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not in the scale-x / scale-y label. See the red text. true | false | 1
            * | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off extra text. Use with width. For the scale-x / scale-y label. See the red text. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the object's font color. Similar to font-color. For the scale-x / scale-y label. See the red text. "none" | "transparent" | "
            * #f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. For the scale-x / scale-y label. See the red text. -45 | 115
            * | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. For the scale-x / scale-y label. See the red text. "linear" | "
            * radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. For the scale-x / scale-y label. See the red text. "none" | "transparent" | "#f00"
            *  | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. For the scale-x / scale-y label. See the red text. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. For the scale-x / scale-y label. See the red text. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. For the scale-x / scale-y label. See the red text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. For the scale-x / scale-y label. See the red text. Works with output canvas and svg. 10 | "20px" | 0.3 |
            *  "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. For the scale-x / scale-y label. See the red text. true | false
            * | 1 | 0
            */
           italic?: boolean;
           /**
            * If set to 'true', scale labels will lock in place and not rotate based upon the viewing angle in 3D charts.
            */
           'lock-rotation'?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "...". For the scale-x / scale-y label. See the red text. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration. Similar to underline. For output canvas and flash. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. For output canvas and flash. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the visibility of the object. For the label. Used with output canvas and svg. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       markers?: [
           {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
                * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the rotation angle of the object/shape. -45 | 115 | ...
                */
               angle?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
                * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
                * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
                * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
                * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color-1'?: string;
               /**
                * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
                *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color-2'?: string;
               /**
                * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
                */
               'background-fit'?: string;
               /**
                * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
                */
               'background-image'?: string;
               /**
                * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
                */
               'background-position'?: string;
               /**
                * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
                */
               'background-repeat'?: string;
               /**
                * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
                * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'border-color'?: string;
               /**
                * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
                */
               'border-width'?: any;
               /**
                * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
                */
               'fill-angle'?: number;
               /**
                * Sets an X offset to apply to the fill. 4 | "6px" | ...
                */
               'fill-offset-x'?: any;
               /**
                * Sets an Y offset to apply to the fill. 4 | "6px" | ...
                */
               'fill-offset-y'?: any;
               /**
                * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
                */
               'fill-type'?: string;
               /**
                * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
                * #00f" | ...
                */
               'gradient-colors'?: string;
               /**
                * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
                * 5 0.9" | ...
                */
               'gradient-stops'?: string;
               /**
                * Allows you to set how the label is aligned with the chart. "normal" | "opposite" | "auto"
                */
               'label-alignment'?: string;
               /**
                * Allows you to set how the label is placed on a graph. "normal" | "opposite" | "auto"
                */
               'label-placement'?: string;
               /**
                * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
                * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'line-color'?: string;
               /**
                * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
                * en each line segment. 4 | "6px" | ...
                */
               'line-gap-size'?: any;
               /**
                * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
                * t of line. 4 | "6px" | ...
                */
               'line-segment-size'?: any;
               /**
                * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
                */
               'line-style'?: string;
               /**
                * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
                */
               'line-width'?: any;
               /**
                * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
                */
               'offset-x'?: any;
               /**
                * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
                */
               'offset-y'?: any;
               /**
                * Setting 'placement' to 'top' will overlay the marker on top of your charted data. By default, markers are set to 'placement':'bott
                * om', which will place the marker behind your charted data. top | bottom
                */
               placement?: string;
               /**
                * To indicate the range you want the scale marker to span. Without specification, that range is based on the scale indexes. Add a "v
                * alue-range" attribute and set the value to true to set the range based on the scale values. Line scale markers accept one or two r
                * ange values. One value specifies the point that the scale marker is drawn at, similar to a reference line. Two values specify the
                * starting and ending points, appearing as an angled line. Area scale markers accept two or four range values. Two values specify th
                * e starting and ending points, always appearing as a rectangle shape. Four values specify the connecting points of the scale marker
                * , allowing you to create various trapezoid shapes. [1] | [3,4] | [3,4,5,6] | ...
                */
               range?: any;
               /**
                * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
                */
               shadow?: boolean;
               /**
                * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
                * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               'shadow-alpha'?: number;
               /**
                * Sets the angle of the shadow underneath the object. -45 | 115 | ...
                */
               'shadow-angle'?: number;
               /**
                * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
                */
               'shadow-blur'?: any;
               /**
                * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
                * .
                */
               'shadow-color'?: string;
               /**
                * Sets the distance between the shadow and the object. 4 | "6px" | ...
                */
               'shadow-distance'?: any;
               /**
                * Sets the marker type to either a single line or a marker that will cover an area. "line" | "area"
                */
               type?: string;
               /**
                * To use with the "range" array. When set to true, the scale marker (area or line) accommodates values, including Unix timestamps, a
                * s your starting and ending values. E.g., "range": [30,34] or "range": [1420491600000,1422651600000]. true | false (default) | 1 |
                * 0
                */
               'value-range'?: boolean;
               /**
                * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
                */
               visible?: boolean;
               label?: {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the angle of the object. 'auto' | 30 | 90 | ...
                    */
                   angle?: number;
                   /**
                    * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                    * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                    * , 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                    * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                    * , 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border radius of the object. 2 | 3 | '5px' | ...
                    */
                   'border-radius'?: number;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
                   /**
                    * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'font-color'?: string;
                   /**
                    * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
                    */
                   'font-family'?: string;
                   /**
                    * Sets the font size of the object. 10 | 12 | '20px' | ...
                    */
                   'font-size'?: number;
                   /**
                    * Sets the font style of the object. 'italic' | 'normal'
                    */
                   'font-style'?: string;
                   /**
                    * Sets the font weight of the object. 'bold' | 'normal'
                    */
                   'font-weight'?: string;
                   /**
                    * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                    */
                   'line-style'?: string;
                   /**
                    * Sets the padding of the object. 3 | '5px' | '10px' | ...
                    */
                   padding?: number;
                   /**
                    * Sets the text alignment of the object. 'left' | 'center' | 'right'
                    */
                   'text-align'?: string;
                   /**
                    * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
                    * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   'text-alpha'?: number;
                   /**
                    * Sets the width of the object. 50 | '200px' | ...
                    */
                   width?: number;
               };
           },
       ];
       'minor-guide'?: {
           /**
            * Sets the transparency of the scale-x minor-guide. See the red dashes in the background. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'minor-tick'?: {
           /**
            * Sets the transparency of the scale-x minor-tick. See the red lines across the bottom between the ticks. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. See the red lines across the bottom between the ticks. "none" | "transparent" | "#f00" | "#f00
            * #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. See the red lines across the bottom between the ticks. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. See the red lines across the bottom between the ticks. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. See the red lines across the bottom between the ticks. "solid" | "dotte
            * d" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. See the red lines across the bottom between the ticks. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Determines the placement of minor tick marks along an axis line. inner | cross | outer
            */
           placement?: string;
           /**
            * Sets the visibility of the object. See the red lines across the bottom between the ticks. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'ref-line'?: {
           /**
            * Sets the transparency of the scale-x ref-line. See the orange bar. Works for output canvas and svg. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the scale-x ref-line. See the yellow bar. Works for output canvas and svg. "none" | "transparent" | "#f00"
            * | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. See the space between orange bar. Works for output canvas and svg. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. See the length of the pieces of the orange bar. Works for output canvas and svg. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. See the orange dots. Works for output canvas and svg. "solid" | "dotted
            * " | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. See the orange bars. Works for output canvas and svg. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
       };
       rules?: [
           {
               /**
                * Allows you to specify what portions of a chart to apply selected attributes to. '%v > 0' | '%v >= 5' | ...
                */
               rule?: string;
           },
       ];
       tick?: {
           /**
            * Sets the transparency of the tick. In the example, the scale-x ticks are vertical lines | in red in between the months. 0.3 | 0.9
            * | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Determines the placement of tick marks along an axis line. inner | cross | outer
            */
           placement?: string;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. Has limited effect on HTML5 im
            * plementation. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. Has limited effect on HTML5 implementation. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. Has limited effect on HTML5 implementation. "none" | "transparent" | "#f00" | "#f00 #0
            * 0f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       tooltip?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius (rounded corners) of the object. "3px" | "10px"
            */
           'border-radius'?: any;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object text. "none" | "transparent" | "purple" | "#33ccff" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object text. "Courier" | "Georgia" | "Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object text. 12 | "20px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object text. "normal" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the height of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: number;
           /**
            * Sets the padding around the object text. "10%" | "25px" ...
            */
           padding?: number;
           /**
            * To create sticky tooltips. Use this with the "timeout" attribute, which allows you to specify how long you want the tooltips to "s
            * tick" to the chart. true | false | 1 |0
            */
           sticky?: boolean;
           /**
            * Specifies what text to display in the tooltips. Use with the %scale-value (%v) token. "Scale Tooltips" | "%v Days" | "..."
            */
           text?: string;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * To create sticky tooltips. Provide a value in milliseconds. Use this with the "sticky" attribute, which specifies whether or not t
            * ooltips will "stick" to the chart. "30000 | 10000 | ...
            */
           timeout?: number;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: number;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       transform?: {
           /**
            * To format your date values. Use this attribute with the `type` value (set to `true`). Token Description `%A` Displays the ante or
            * post meridiem time in upper case letters: AM or PM. `%a` Displays the ante or post meridiem time in lower case letters: am or pm.
            * `%D` Displays the day of the week in abbreviated form: Sun, Mon, Tue, Wed, Thu, Fri. `%d` Displays the day's date without a leadin
            * g 0 if the date is single digit. `%dd` Displays the day's date with a leading 0 if the date is single digit. `%G` Displays the hou
            * r in 24-hour format without a leading 0. `%g` Displays the hour in 12-hour format without a leading 0. `%H` Displays the hour in 2
            * 4-hour format with a leading 0 if the hour is single digit. `%h` Displays the hour in 12-hour format with a leading 0 if the hour
            * is single digit. `%i` Displays the minutes. `%M` Displays the month in abbreviated form: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, S
            * ep, Oct, Nov and Dec. `%m` Displays the month numerically without a leading 0 if the date is single digit. `%mm` Display the month
            *  numerically with a leading 0 if the month is single digit. `%q` Displays the milliseconds. `%s` Displays the seconds. `%Y` Displa
            * ys the year in 4-digit format. `%y` Displays the year in 2-digit format.
            */
           all?: string;
           '`%A`'?: any;
           '`%a`'?: any;
           '`%D`'?: any;
           '`%d`'?: any;
           '`%dd`'?: any;
           '`%G`'?: any;
           '`%g`'?: any;
           '`%H`'?: any;
           '`%h`'?: any;
           '`%i`'?: any;
           '`%M`'?: any;
           '`%m`'?: any;
           '`%mm`'?: any;
           '`%q`'?: any;
           '`%s`'?: any;
           '`%Y`'?: any;
           '`%y`'?: any;
           guide?: {
               /**
                * Sets the transparency of the scale-x / scale-y guide. See the red lines. 0.3 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the line color of the scale-x / scale-y guide. See the red lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow
                * " | "rgb(100, 15, 15)" | ...
                */
               'line-color'?: string;
               /**
                * Sets the style applied to lines and borders of the scale-x / scale-y guide. See the red lines. "solid" | "dotted" | "dashed" | "da
                * shdot"
                */
               'line-style'?: string;
               /**
                * Sets the line width of the object, applicable on non-closed shapes. For the scale-x / scale-y guide. See the red lines. 4 | "6px"
                * | ...
                */
               'line-width'?: any;
               /**
                * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
                */
               visible?: boolean;
           };
           item?: {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
                * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the rotation angle of the object/shape. -45 | 115 | ...
                */
               angle?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
                * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
                * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
                * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
                * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color-1'?: string;
               /**
                * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
                *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color-2'?: string;
               /**
                * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
                */
               'background-fit'?: string;
               /**
                * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
                */
               'background-image'?: string;
               /**
                * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
                */
               'background-position'?: string;
               /**
                * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
                */
               'background-repeat'?: string;
               /**
                * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
                */
               bold?: boolean;
               /**
                * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
                */
               'border-bottom'?: string;
               /**
                * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
                * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'border-color'?: string;
               /**
                * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
                */
               'border-left'?: string;
               /**
                * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
                * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
                * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
                * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
                */
               'border-radius'?: any;
               /**
                * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
                * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
                */
               'border-radius-bottom-left'?: any;
               /**
                * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
                * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
                */
               'border-radius-bottom-right'?: any;
               /**
                * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
                * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
                */
               'border-radius-top-left'?: any;
               /**
                * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
                * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
                */
               'border-radius-top-right'?: any;
               /**
                * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
                */
               'border-right'?: string;
               /**
                * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
                * es. "2px solid #f00" | ...
                */
               'border-top'?: string;
               /**
                * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
                */
               'border-width'?: any;
               /**
                * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
                */
               callout?: boolean;
               /**
                * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
                */
               'callout-extension'?: any;
               /**
                * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
                */
               'callout-height'?: any;
               /**
                * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
                * top left corner of the chart. [200, 50] | ...
                */
               'callout-hook'?: any;
               /**
                * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
                * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
                */
               'callout-offset'?: any;
               /**
                * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
                */
               'callout-position'?: string;
               /**
                * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
                */
               'callout-width'?: any;
               /**
                * Cuts off extra text. Use with width. true | false | 1 | 0
                */
               'clip-text'?: boolean;
               /**
                * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
                * 15)" | ...
                */
               color?: string;
               /**
                * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
                */
               'fill-angle'?: number;
               /**
                * Sets an X offset to apply to the fill. 4 | "6px" | ...
                */
               'fill-offset-x'?: any;
               /**
                * Sets an Y offset to apply to the fill. 4 | "6px" | ...
                */
               'fill-offset-y'?: any;
               /**
                * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
                */
               'fill-type'?: string;
               /**
                * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
                * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
                */
               'font-angle'?: number;
               /**
                * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
                * | ...
                */
               'font-color'?: string;
               /**
                * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
                */
               'font-family'?: string;
               /**
                * Sets the text's font size. 4 | "6px" | ...
                */
               'font-size'?: any;
               /**
                * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
                */
               'font-style'?: string;
               /**
                * Sets the text's font weight. Similar to bold. "normal" | "bold"
                */
               'font-weight'?: string;
               /**
                * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
                * #00f" | ...
                */
               'gradient-colors'?: string;
               /**
                * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
                * 5 0.9" | ...
                */
               'gradient-stops'?: string;
               /**
                * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
                */
               height?: any;
               /**
                * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
                */
               italic?: boolean;
               /**
                * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
                * en each line segment. 4 | "6px" | ...
                */
               'line-gap-size'?: any;
               /**
                * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
                * t of line. 4 | "6px" | ...
                */
               'line-segment-size'?: any;
               /**
                * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
                */
               'line-style'?: string;
               /**
                * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
                * the text is cut and appended with "..." 5 | 10 | ...
                */
               'max-chars'?: number;
               /**
                * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
                * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
                */
               'max-width'?: any;
               /**
                * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
                */
               'offset-x'?: any;
               /**
                * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
                */
               'offset-y'?: any;
               /**
                * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
                * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
                * 10 20" | "5px 10px 15px 20px" | ...
                */
               padding?: any;
               /**
                * Sets the object's bottom padding around the text. 4 | "6px" | ...
                */
               'padding-bottom'?: any;
               /**
                * Sets the object's left padding around the text. 4 | "6px" | ...
                */
               'padding-left'?: any;
               /**
                * Sets the object's right padding around the text. 4 | "6px" | ...
                */
               'padding-right'?: any;
               /**
                * Sets the object's top padding around the text. 4 | "6px" | ...
                */
               'padding-top'?: any;
               /**
                * Renders text right-to-left. Default value is false. true | false | 1 | 0
                */
               'rtl (right-to-left)'?: boolean;
               /**
                * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
                */
               shadow?: boolean;
               /**
                * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
                * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               'shadow-alpha'?: number;
               /**
                * Sets the angle of the shadow underneath the object. -45 | 115 | ...
                */
               'shadow-angle'?: number;
               /**
                * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
                */
               'shadow-blur'?: any;
               /**
                * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
                * .
                */
               'shadow-color'?: string;
               /**
                * Sets the distance between the shadow and the object. 4 | "6px" | ...
                */
               'shadow-distance'?: any;
               /**
                * Sets the text content of the object. "Some Text" | ...
                */
               text?: string;
               /**
                * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
                */
               'text-align'?: string;
               /**
                * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
                * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
                */
               'text-alpha'?: number;
               /**
                * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
                * arts are rendered using SVG. "none" | "underline"
                */
               'text-decoration'?: string;
               /**
                * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
                * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
                */
               underline?: boolean;
               /**
                * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
                * "
                */
               'vertical-align'?: string;
               /**
                * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
                */
               visible?: boolean;
               /**
                * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
                */
               width?: any;
               /**
                * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
                */
               'wrap-text'?: boolean;
           };
       };
   };
   'scale-y'?: {
       /**
        * Sets the text's transparency of the scale-y (The vertical scale line on the chart). 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. -45 | 115 | ...
        */
       angle?: number;
       /**
        * true | false | 1 | 0
        */
       'auto-fit'?: boolean;
       /**
        * Sets the number of decimals which will be displayed as scale-y values. Note this attribute does round the values to fit within the
        *  define number of decimals. 5 | 10 | ...
        */
       decimals?: number;
       /**
        * Sets the separator to be used in place of the default decimal point. Any string or character can be used to replace the decimal. '
        * .' | ',' | ...
        */
       'decimals-separator'?: string;
       /**
        * Sets whether the scale values will be displayed in scientific notation. Particularly useful when dealing with large numbers. true
        * | false | 1 | 0
        */
       exponent?: boolean;
       /**
        * Sets the number of decimals that will be displayed when using scientific notation. Use with the 'exponent' attribute. 5 | 10 | ...
        */
       'exponent-decimals'?: number;
       /**
        * To format the appearance of the scale values. Use with the %scale-value (%v) token. '%v%' | '$%v' | '%v' | ...
        */
       format?: string;
       /**
        * To force all of the scale items to display. It is generally used with the 'max-items' attribute. true | false | 1 | 0
        */
       'items-overlap'?: boolean;
       /**
        * Allows you to set custom labels that correspond to each of the ticks on a scale. If there are more ticks than labels, the default
        * values will be used for the remaining labels. ['Jan', 'Feb', 'Mar', ...] | ...
        */
       labels?: any;
       /**
        * ''horizontal' | 'h' | 'vertical' | 'v' | 'row x col' | 'x col' | 'row x' | 'float''
        */
       layout?: string;
       /**
        * Sets the color of the axis line. 'none' | 'transparent' | '#f00' | '#f00 #00f' | 'red yellow' | 'rgb(100, 15, 15)' | ...
        */
       'line-color'?: string;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
        * en each line segment. 4 | '6px' | ...
        */
       'line-gap-size'?: any;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
        * t of line. 4 | '6px' | ...
        */
       'line-segment-size'?: any;
       /**
        * Sets the line style of the axis line. 'solid' | 'dotted' | 'dashed' | 'dashdot'
        */
       'line-style'?: string;
       /**
        * Sets the width of the axis line. 4 | '6px' | ...
        */
       'line-width'?: any;
       /**
        * Logarithmic Scales only: To set the base value, which defaults to Math.E (Euler's number, the base of natural logarithms). Math.E
        * | 10 | 2 | ...
        */
       'log-base'?: any;
       /**
        * Sets the object's margin/s. 10 | '5px' | '10 20' | '5px 10px 15px 20px' | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. 4 | '6px' | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. 4 | '6px' | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. 4 | '6px' | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. 4 | '6px' | ...
        */
       'margin-top'?: any;
       /**
        * Sets the max number of values displaying along the bottom horizontal line. 5 | 10 | ...
        */
       'max-items'?: number;
       /**
        * To set the maximum number of scale items displayed. It is generally used with the 'items-overlap'attribute. 5 | 10 | ...
        */
       'max-labels'?: number;
       /**
        * Sets the maximum number of ticks to display on the y axis. 5 | 10 | ...
        */
       'max-ticks'?: number;
       /**
        * Sets the maximum value for the y axis. 'max-value': is one of the multiple ways you can set y axis values. Commonly used with time
        *  series data. Also see 'mix-value': and 'step': 4 | '6px' | ...
        */
       'max-value'?: number;
       /**
        * Sets the minimum value for the y axis. 'min-value': is one of the multiple ways you can set y axis values. Commonly used with time
        *  series data. Also see 'max-value': and 'step': 'auto' | 4 | '6px' | ...
        */
       'min-value'?: number;
       /**
        * Sets the number of minor tick marks displayed between the major tick marks. Note that this attribute is required to style the mino
        * r tick marks and/or guides. 5 | 10 | ...
        */
       'minor-ticks'?: number;
       /**
        * Setting 'mirrored': true will flip/mirror the y axis values. 'scale-y': {} values will read top to bottom. true | false | 1 | 0
        */
       mirrored?: boolean;
       /**
        * Setting 'multiplier': true will abbreviate long numbers as small digits with a short unit indicator such as K, M, B true | false |
        *  1 | 0
        */
       multiplier?: boolean;
       /**
        * Sets the negative symbol just outside of the formatted value. 'standard' | 'currency'
        */
       negation?: string;
       /**
        * Sets an offset on both sides of the plotted data. This will cause the data to appear as if it were 'squeezed' together. 4 | '6px'
        * | ...
        */
       offset?: number;
       /**
        * Sets an offset from the end of the plotted data. This will cause the data to appear as if it were 'squeezed' from the top side. 4
        * | '6px' | '5%' | 35%' | ...
        */
       'offset-end'?: number;
       /**
        * Sets an offset at the start of the plotted data. This will cause the data to appear as if it were 'squeezed' from the bottom side.
        *  4 | '6px' | '5%' | 35%' | ...
        */
       'offset-start'?: number;
       /**
        * Sets an x offset that will be applied to the scale-y object. 4 | '6px' | ...
        */
       'offset-x'?: any;
       /**
        * Sets a y offset that will be applied to the scale-y object. 4 | '6px' | ...
        */
       'offset-y'?: any;
       /**
        * Sets the placement of the scale object. 'default' | 'opposite'
        */
       placement?: string;
       /**
        * To change the scale type from linear (default) to logarithmic. 'lin' | 'log'
        */
       progression?: string;
       /**
        * Used on radial charts (pie, radar, gauge) to specify the starting angle of the nodes. -45 | 115 | ...
        */
       'ref-angle'?: number;
       /**
        * To set the value the reference line is drawn at. 5 | 10 | ...
        */
       'ref-value'?: number;
       /**
        * Sets the scale of the y axis 5 | 10 | ...
        */
       'scale-factor'?: number;
       /**
        * Setting to true will cause the values on the y axis to use an abbreviated notation with a short unit such as K,M,B, etc. true | fa
        * lse | 1 | 0
        */
       short?: boolean;
       /**
        * Specifies which unit of measure to use when short is set to true. K | M | B | KB | MB | GB | TB | PB
        */
       'short-unit'?: string;
       /**
        * Specifies which labels will be visible on the y axis. ['A', 'B'] | ...
        */
       'show-labels'?: any;
       /**
        * Sets the size of the object/shape. 4 | '6px' | ...
        */
       size?: any;
       /**
        * Auto size-factor automatically scales a pie chart to allow all value-box objects to appear without clipping. 'auto'
        */
       'size-factor'?: string;
       /**
        * Sets the characters used to separate thousands in larger numbers. '.' | ',' | ...
        */
       'thousands-separator'?: string;
       /**
        * An alternative way to create category scale labels. Similar to a 'labels' array, the 'values' array also acts as a maximum scale v
        * alue. [1, 7, 9] | ['Jan', 'Feb', 'Mar', 'Apr'] | ['Q1', 'Q2', 'Q3', 'Q4']
        */
       values?: any;
       /**
        * You can set the 'scale-y': { } to 'visible': false to hide the y axis. The y-axis will still calculate plots correctly, however yo
        * u will not be able to see the x axis line or any of the attributes such as scale values. If you simply want to hide the x axis lin
        * e you can utilize 'line-color':'none'. This will remove the visibility of the x axis line and still allow you to style ticks, item
        * s, etc separately, true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * When zooming is enabled, setting zoom-snap to true snaps the zoom area to the nearest data node as a zoom area is selected. By def
        * ault, zoom-snap is set to false. true | false | 1 | 0
        */
       'zoom-snap'?: boolean;
       guide?: {
           /**
            * Sets the transparency of the scale-x / scale-y guide. See the red lines. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the scale-x / scale-y guide. See the blue background in between the red lines. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the line color of the scale-x / scale-y guide. See the red lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow
            * " | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * When using a dashed or dotted line-type, this will set the size of each gap between line segments. Can be used with line-segment-s
            * ize to create unique dashed or dotted lines. For the scale-x / scale-y guide. See the space between red lines. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * When using a dashed or dotted line-type, this will set the size of each visible segment of line. Can be used with line-gap-size to
            *  create unique dashed or dotted lines. For the scale-x / scale-y guide. See the red lines. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the scale-x / scale-y guide. See the red lines. "solid" | "dotted" | "dashed" | "da
            * shdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. For the scale-x / scale-y guide. See the red lines. 4 | "6px"
            * | ...
            */
           'line-width'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           items?: [
               {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the background color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
               },
           ];
       };
       item?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. 0....1
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a two-color background gradient of the object. To be used with background-color-2. "none" | "transparent"
            * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a two-color background gradient of the object. To be used with background-color-1. "none" | "transparent"
            *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
            * 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
            * | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
            */
           italic?: boolean;
           /**
            * If set to 'true', scale labels will lock in place and not rotate based upon the viewing angle in 3D charts. true | false | 1 | 0
            */
           'lock-rotation'?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
            * arts are rendered using SVG. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
            * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       label?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. In the scale-x / scale-y label. See the red
            * text. Works for output flash. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. In the scale-x / scale-y label. See the red text. Works for output canvas and svg. -4
            * 5 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). In the scale-x /
            * scale-y label. See the red text. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. See the red text. Works f
            * or output canvas and svg. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets whether the text is displayed with bold characters or not in the scale-x / scale-y label. See the red text. true | false | 1
            * | 0
            */
           bold?: boolean;
           /**
            * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-bottom'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-left'?: string;
           /**
            * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
            * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
            * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
            * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
            * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-left'?: any;
           /**
            * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
            * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-bottom-right'?: any;
           /**
            * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
            * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-left'?: any;
           /**
            * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
            * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
            */
           'border-radius-top-right'?: any;
           /**
            * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
            */
           'border-right'?: string;
           /**
            * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
            * es. "2px solid #f00" | ...
            */
           'border-top'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
            */
           callout?: boolean;
           /**
            * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
            */
           'callout-extension'?: any;
           /**
            * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
            */
           'callout-height'?: any;
           /**
            * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
            * top left corner of the chart. [200, 50] | ...
            */
           'callout-hook'?: any;
           /**
            * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
            * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
            */
           'callout-offset'?: any;
           /**
            * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
            */
           'callout-position'?: string;
           /**
            * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
            */
           'callout-width'?: any;
           /**
            * Cuts off extra text. Use with width. For the scale-x / scale-y label. See the red text. true | false | 1 | 0
            */
           'clip-text'?: boolean;
           /**
            * Sets the object's font color. Similar to font-color. For the scale-x / scale-y label. See the red text. "none" | "transparent" | "
            * #f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           color?: string;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. For the scale-x / scale-y label. See the red text. -45 | 115
            * | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. For the scale-x / scale-y label. See the red text. "linear" | "
            * radial"
            */
           'fill-type'?: string;
           /**
            * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
            * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
            */
           'font-angle'?: number;
           /**
            * Sets the object's font color. Similar to color. For the scale-x / scale-y label. See the red text. "none" | "transparent" | "#f00"
            *  | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets the text's font family. For the scale-x / scale-y label. See the red text. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the text's font size. For the scale-x / scale-y label. See the red text. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the text's font style. Similar to italic. For the scale-x / scale-y label. See the red text. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the text's font weight. Similar to bold. For the scale-x / scale-y label. See the red text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the object's height. For the scale-x / scale-y label. See the red text. Works with output canvas and svg. 10 | "20px" | 0.3 |
            *  "30%" | ...
            */
           height?: any;
           /**
            * Sets whether the text is displayed with italic characters or not. For the scale-x / scale-y label. See the red text. true | false
            * | 1 | 0
            */
           italic?: boolean;
           /**
            * If set to 'true', scale labels will lock in place and not rotate based upon the viewing angle in 3D charts.
            */
           'lock-rotation'?: boolean;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "...". For the scale-x / scale-y label. See the red text. 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
            * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
            * 10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the object's bottom padding around the text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the object's left padding around the text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the object's right padding around the text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the object's top padding around the text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
            */
           'text-align'?: string;
           /**
            * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
            * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration. Similar to underline. For output canvas and flash. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the text is displayed with underlined characters or not. For output canvas and flash. true | false | 1 | 0
            */
           underline?: boolean;
           /**
            * Sets the visibility of the object. For the label. Used with output canvas and svg. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       markers?: [
           {
               /**
                * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
                * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               alpha?: number;
               /**
                * Sets the rotation angle of the object/shape. -45 | 115 | ...
                */
               angle?: number;
               /**
                * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
                * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
                * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
                * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color'?: string;
               /**
                * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
                * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color-1'?: string;
               /**
                * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
                *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'background-color-2'?: string;
               /**
                * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
                */
               'background-fit'?: string;
               /**
                * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
                */
               'background-image'?: string;
               /**
                * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
                */
               'background-position'?: string;
               /**
                * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
                */
               'background-repeat'?: string;
               /**
                * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
                * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'border-color'?: string;
               /**
                * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
                */
               'border-width'?: any;
               /**
                * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
                */
               'fill-angle'?: number;
               /**
                * Sets an X offset to apply to the fill. 4 | "6px" | ...
                */
               'fill-offset-x'?: any;
               /**
                * Sets an Y offset to apply to the fill. 4 | "6px" | ...
                */
               'fill-offset-y'?: any;
               /**
                * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
                */
               'fill-type'?: string;
               /**
                * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
                * #00f" | ...
                */
               'gradient-colors'?: string;
               /**
                * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
                * 5 0.9" | ...
                */
               'gradient-stops'?: string;
               /**
                * Allows you to set how the label is aligned with the chart. "normal" | "opposite" | "auto"
                */
               'label-alignment'?: string;
               /**
                * Allows you to set how the label is placed on the chart. "normal" | "opposite" | "auto"
                */
               'label-placement'?: string;
               /**
                * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
                * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
                */
               'line-color'?: string;
               /**
                * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
                * en each line segment. 4 | "6px" | ...
                */
               'line-gap-size'?: any;
               /**
                * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
                * t of line. 4 | "6px" | ...
                */
               'line-segment-size'?: any;
               /**
                * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
                */
               'line-style'?: string;
               /**
                * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
                */
               'line-width'?: any;
               /**
                * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
                */
               'offset-x'?: any;
               /**
                * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
                */
               'offset-y'?: any;
               /**
                * Setting 'placement' to 'top' will overlay the marker on top of your charted data. By default, markers are set to 'placement':'bott
                * om', which will place the marker behind your charted data. top | bottom
                */
               placement?: string;
               /**
                * To indicate the range you want the scale marker to span. Without specification, that range is based on the scale indexes. Add a "v
                * alue-range" attribute and set the value to true to set the range based on the scale values. Line scale markers accept one or two r
                * ange values. One value specifies the point that the scale marker is drawn at, similar to a reference line. Two values specify the
                * starting and ending points, appearing as an angled line. Area scale markers accept two or four range values. Two values specify th
                * e starting and ending points, always appearing as a rectangle shape. Four values specify the connecting points of the scale marker
                * , allowing you to create various trapezoid shapes. [1] | [3,4] | [3,4,5,6] | ...
                */
               range?: any;
               /**
                * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
                */
               shadow?: boolean;
               /**
                * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
                * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
                */
               'shadow-alpha'?: number;
               /**
                * Sets the angle of the shadow underneath the object. -45 | 115 | ...
                */
               'shadow-angle'?: number;
               /**
                * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
                */
               'shadow-blur'?: any;
               /**
                * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
                * .
                */
               'shadow-color'?: string;
               /**
                * Sets the distance between the shadow and the object. 4 | "6px" | ...
                */
               'shadow-distance'?: any;
               /**
                * Sets the marker type to either a single line or a marker that will cover an area. "line" | "area"
                */
               type?: string;
               /**
                * To use with the "range" array. When set to true, the scale marker (area or line) accommodates values, including Unix timestamps, a
                * s your starting and ending values. E.g., "range": [30,34] or "range": [1420491600000,1422651600000]. true | false (default) | 1 |
                * 0
                */
               'value-range'?: boolean;
               /**
                * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
                */
               visible?: boolean;
               label?: {
                   /**
                    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 being co
                    * mpletely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   alpha?: number;
                   /**
                    * Sets the angle of the object. 'auto' | 30 | 90 | ...
                    */
                   angle?: number;
                   /**
                    * Sets the background color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666
                    * 699', '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100
                    * , 15, 15)' | ...
                    */
                   'background-color'?: string;
                   /**
                    * Sets the border color of the object. Colors can be entered by name (e.g., 'purple', 'blue'), hexadecimal notation (e.g., '#666699'
                    * , '#33ccff'), or RGB notation (e.g., 'rgb(255,0,0)', 'rgb(0,0,255)'). 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15
                    * , 15)' | ...
                    */
                   'border-color'?: string;
                   /**
                    * Sets the border radius of the object. 2 | 3 | '5px' | ...
                    */
                   'border-radius'?: number;
                   /**
                    * Sets the border width of the object. 1 | 3 | '6px' | ...
                    */
                   'border-width'?: number;
                   /**
                    * Sets the font color of the object. 'none' | 'transparent' | 'purple' | '#33ccff' | 'rgb(100, 15, 15)' | ...
                    */
                   'font-color'?: string;
                   /**
                    * Sets the font family of the object. 'Arial' | 'Tahoma,Verdana' | ...
                    */
                   'font-family'?: string;
                   /**
                    * Sets the font size of the object. 10 | 12 | '20px' | ...
                    */
                   'font-size'?: number;
                   /**
                    * Sets the font style of the object. 'italic' | 'normal'
                    */
                   'font-style'?: string;
                   /**
                    * Sets the font weight of the object. 'bold' | 'normal'
                    */
                   'font-weight'?: string;
                   /**
                    * Sets the line style of the object. 'solid' | 'dotted' | 'dashed' | 'dashdot'
                    */
                   'line-style'?: string;
                   /**
                    * Sets the padding of the object. 3 | '5px' | '10px' | ...
                    */
                   padding?: number;
                   /**
                    * Sets the text alignment of the object. 'left' | 'center' | 'right'
                    */
                   'text-align'?: string;
                   /**
                    * Sets the text transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 bei
                    * ng completely opaque. Note that the leading zero is required before the decimal. 0.3 | 0.4 | 0.9 | ...
                    */
                   'text-alpha'?: number;
                   /**
                    * Sets the width of the object. 50 | '200px' | ...
                    */
                   width?: number;
               };
           },
       ];
       'minor-guide'?: {
           /**
            * Sets the transparency of the scale-x minor-guide. See the red dashes in the background. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'minor-tick'?: {
           /**
            * Sets the transparency of the scale-x minor-tick. See the red lines across the bottom between the ticks. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object. See the red lines across the bottom between the ticks. "none" | "transparent" | "#f00" | "#f00
            * #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. See the red lines across the bottom between the ticks. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. See the red lines across the bottom between the ticks. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. See the red lines across the bottom between the ticks. "solid" | "dotte
            * d" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. See the red lines across the bottom between the ticks. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Determines the placement of minor tick marks along an axis line. inner | cross | outer
            */
           placement?: string;
           /**
            * Sets the visibility of the object. See the red lines across the bottom between the ticks. true | false | 1 | 0
            */
           visible?: boolean;
       };
       'ref-line'?: {
           /**
            * Sets the transparency of the scale-x ref-line. See the orange bar. Works for output canvas and svg. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the scale-x ref-line. See the yellow bar. Works for output canvas and svg. "none" | "transparent" | "#f00"
            * | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. See the space between orange bar. Works for output canvas and svg. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. See the length of the pieces of the orange bar. Works for output canvas and svg. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. See the orange dots. Works for output canvas and svg. "solid" | "dotted
            * " | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object. See the orange bars. Works for output canvas and svg. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
       };
       rules?: [
           {
               /**
                * Allows you to specify what portions of a chart to apply selected attributes to. '%v > 0' | '%v >= 5' | ...
                */
               rule?: string;
           },
       ];
       tick?: {
           /**
            * Sets the transparency of the tick. In the example, the scale-x ticks are vertical lines | in red in between the months. 0.3 | 0.9
            * | ...
            */
           alpha?: number;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Determines the placement of tick marks along an axis line. inner | cross | outer
            */
           placement?: string;
           /**
            * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. Has limited effect on HTML5 im
            * plementation. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. Has limited effect on HTML5 implementation. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. Has limited effect on HTML5 implementation. "none" | "transparent" | "#f00" | "#f00 #0
            * 0f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
       };
       tooltip?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'border-alpha'?: number;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border radius (rounded corners) of the object. "3px" | "10px"
            */
           'border-radius'?: any;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object text. "none" | "transparent" | "purple" | "#33ccff" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object text. "Courier" | "Georgia" | "Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object text. 12 | "20px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object text. "normal" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the height of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: number;
           /**
            * Sets the padding around the object text. "10%" | "25px" ...
            */
           padding?: number;
           /**
            * To create sticky tooltips. Use this with the "timeout" attribute, which allows you to specify how long you want the tooltips to "s
            * tick" to the chart. true | false | 1 |0
            */
           sticky?: boolean;
           /**
            * Specifies what text to display in the tooltips. Use with the %scale-value (%v) token. "Scale Tooltips" | "%v Days" | "..."
            */
           text?: string;
           /**
            * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
            * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * To create sticky tooltips. Provide a value in milliseconds. Use this with the "sticky" attribute, which specifies whether or not t
            * ooltips will "stick" to the chart. "30000 | 10000 | ...
            */
           timeout?: number;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: number;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
       };
       transform?: {
           /**
            * The text of the scale label, can use tokens for day, hour, minute, year etc to add in such information, ONLY if "type"="date" has
            * been specified in this transform object. If values for both "text" and "all" have been specified, the value in "text" will be used
            * . 'Month of %M' | '%d' | ...
            */
           text?: string;
           /**
            * To convert Unix timestamps into dates. Use this attribute with the all attribute. 'date'
            */
           type?: string;
           /**
            * To set the time-series scale to linear (uniform) or non-linear. true | false | 1 | 0
            */
           uniform?: boolean;
       };
   };
   scale?: {
       /**
        * To modify the size of the chart. Provide a value in relation to 1.0 or 100%. 0.3 | 0.9 | "30%" | "90%" | ...
        */
       'size-factor'?: number;
   };
   'scroll-x-scroll-y'?: {
       /**
        * Sets an x offset that will be applied to the scroll-x object. 4 | '6px' | ...
        */
       'offset-x'?: any;
       /**
        * Sets a y offset that will be applied to the scroll-x object. 4 | '6px' | ...
        */
       'offset-y'?: any;
       bar?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border radius (rounded corners) of the object. The higher the value, the more rounded the corners appear. 4 | "6px" | "6p
            * x 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * X-Axis Scrollbar only: Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Y-Axis Scrollbar only: Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
       };
       handle?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the styling for the bottom border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a s
            * tring. "1px solid green" | "3px dotted purple" | ...
            */
           'border-bottom'?: any;
           /**
            * Sets the styling for the left border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a str
            * ing. "1px solid green" | "3px dotted purple" | ...
            */
           'border-left'?: any;
           /**
            * Sets the border radius (rounded corners) of the object. The higher the value, the more rounded the corners appear. 4 | "6px" | "6p
            * x 10px 3px 5px" | "-10px" | ...
            */
           'border-radius'?: any;
           /**
            * Sets the styling for the right border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a st
            * ring. "1px solid green" | "3px dotted purple" | ...
            */
           'border-right'?: any;
           /**
            * Sets the styling for the top border. Provide border width, line style (solid, dotted, dashed, dashdot), and border color in a stri
            * ng. "1px solid green" | "3px dotted purple" | ...
            */
           'border-top'?: any;
           /**
            * X-Axis Scrollbar only: Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Y-Axis Scrollbar only: Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
       };
   };
   series?: [series];
   shapes?: [
       {
           /**
            * Sets the end angle of a pie shape. "10" | "212" | ...
            */
           'angle-end'?: number;
           /**
            * Sets the beginning angle of a pie shape. "10" | "212" | ...
            */
           'angle-start'?: number;
           /**
            * Sets the height of the shape "10" | "212" | ...
            */
           height?: number;
           /**
            * Id of the shape "myShape" | "Square2" | ...
            */
           id?: string;
           /**
            * Sets the radius of the inner ring of a pie shape. "10" | "42" | ...
            */
           slice?: number;
           /**
            * Sets the width of the shape "10" | "212" | ...
            */
           width?: number;
           /**
            * Sets the transparency of the object. The higher the value, the less transparent the object appears. Value ranges from 0.1 to 1 Req
            * uires the formatting 0.x 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-1'?: string;
           /**
            * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
            *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color-2'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. Relies on border-width se
            * tting. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. Defaults to black when border-color is not defined. See also lin
            * e-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear fill is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. Positive value moves the offset right. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets a Y offset to apply to the fill. With a radial fill, positive value moves the offset down. With a linear fill, affects locati
            * on of the gradient stop. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient (more than 2 colors) of the object. Used with gradient stops. "#f00 #0f0 #0
            * 0f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets a set of steps corresponding for each color for a complex background gradient (more than 2 colors) of the object. Paired with
            *  gradient-colors. "0.1 0.5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
            */
           item?: string;
           /**
            * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
            * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'line-color'?: string;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
            * en each line segment. 4 | "6px" | ...
            */
           'line-gap-size'?: any;
           /**
            * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
            * t of line. 4 | "6px" | ...
            */
           'line-segment-size'?: any;
           /**
            * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
            */
           'line-style'?: string;
           /**
            * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
            */
           'line-width'?: any;
           /**
            * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
            */
           map?: string;
           /**
            * Sets a radial offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-r'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the coordinates of the object/shape points. [ [10,10], [10,20], [20,20], [20,10], [10,10] ] | ...
            */
           points?: any;
           /**
            * Sets whether the object gets a shadow or not. true | false | 1 | 0
            */
           shadow?: boolean;
           /**
            * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
            * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'shadow-alpha'?: number;
           /**
            * Sets the angle of the shadow underneath the object. -45 | 115 | ...
            */
           'shadow-angle'?: number;
           /**
            * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
            */
           'shadow-blur'?: any;
           /**
            * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
            * .
            */
           'shadow-color'?: string;
           /**
            * Sets the distance between the shadow and the object. 4 | "6px" | ...
            */
           'shadow-distance'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the type of the object/shape. "rect" | "circle" | "star5" | "star9" | "square" | "diamond" | "triangle" | "plus" | "cross" |
            * "line" | "poly" | "pie" | ...
            */
           type?: string;
           /**
            * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
           /**
            * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
            */
           'z-index'?: number;
       },
   ];
   source?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. In this case, the alpha is applied to the ba
        * ckground of the object. To affect the alpha of text, use text-alpha. 0....1
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * For source, bold is the default. true | false | 1 | 0
        */
       bold?: boolean;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Requires border-width. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Requires border-width and defaults to black if there is no border-color specified. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Requires border-width. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * Truncates text based on the setting of width. true | false | 1 | 0
        */
       'clip-text'?: boolean;
       /**
        * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
        * 15)" | ...
        */
       color?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Works with fill-angle to position gradient. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Works with fill-angle to position gradient. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
        * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
        * | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight. Similar to bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
        */
       italic?: boolean;
       /**
        * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
        */
       item?: string;
       /**
        * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
        */
       map?: string;
       /**
        * Margin is set from top-left of the chart. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
        * the text is cut and appended with "..." 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
        * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
        * 10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
        *  For source, applying width may also make this more apparent. "50 75" | "50px 75px"
        */
       position?: string;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * For source, this may require position in order to be visible. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the text content of the object. "Some Text" | ...
        */
       text?: string;
       /**
        * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
        */
       'text-align'?: string;
       /**
        * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
        * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
        * arts are rendered using SVG. "none" | "underline"
        */
       'text-decoration'?: string;
       /**
        * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
        * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
        */
       underline?: boolean;
       /**
        * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
        * "
        */
       'vertical-align'?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
        */
       'wrap-text'?: boolean;
       /**
        * Negative values move the object left from the left edge of the chart. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Positive values move the object down from the top of the chart. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   subtitle?: {
       /**
        * Sets the transparency of the object. Requires that background-color be set. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow"
        * | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow"
        *  | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets whether the text is displayed with bold characters or not in the subtitle. true | false | 1 | 0
        */
       bold?: boolean;
       /**
        * Sets the object's bottom border style. Defaults to black when color is not set properly. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. Requires border width. See also line-color for closed shapes. "n
        * one" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Operates like border-bottom. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. The higher the value, the more rounded the corners appear. 4 | "6px" | "6px
        * 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Operates like border-bottom. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Operates like border-bottom. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. If no border-color is set
        * , will display in black. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether or not the object will have a callout arrow. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length for extension line off the tip of the callout arrow. Requires border-width. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets a location for the point of the tip of the callout arrow. Uses XY coordinates. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset for the origin of the callout arrow. Uses positive or negative values to move the arrow right/left/up/down. 4 | "6
        * px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets which edge will be the location for the object's callout arrow. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * Cuts off extra text. Use with width. true | false | 1 | 0
        */
       'clip-text'?: boolean;
       /**
        * Sets the color of the text in the subtitle. Similar with font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow"
        * | "rgb(100, 15, 15)" | ...
        */
       color?: string;
       /**
        * Sets the angle of the axis along which the linear fill is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the fill type. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the rotation angle of the subtitle text. Similar with angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the color of the subtitle text. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100,
        * 15, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the font family of the subtitle text. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the font size of the subtitle text. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the font style of the subtitle text. Similar with italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the font weight of the subtitle text. Similar with bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets whether the text of the subtitle is displayed with italic characters or not. Similar with font-weight. true | false | 1 | 0
        */
       italic?: boolean;
       /**
        * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
        */
       item?: string;
       /**
        * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
        */
       map?: string;
       /**
        * Sets the object's margin/s by positioning it within the specified area. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's left margin. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's margin from the top of the chart. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum number of characters displayed in the text label of the subtitle. If value is smaller than the length of the text
        * , the original text will be trimmed and '...' will be appended at the end. 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's padding around the text of the subtitle. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text of the subtitle. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text of the subtitle. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text of the subtitle. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text of the subtitle. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
        */
       position?: string;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the text content of the object of the subtitle. Defaults to gray when font-color is not set. "Some Text" | ...
        */
       text?: string;
       /**
        * Sets the text's horizontal alignment relative to the box of the subtitle. "left" | "center" | "right"
        */
       'text-align'?: string;
       /**
        * Sets the transparency of the subtitle text. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the text decoration for the subtitle text. Similar with underline. "none" | "underline"
        */
       'text-decoration'?: string;
       /**
        * Sets whether the text of the subtitle is displayed with underlined characters or not. true | false | 1 | 0
        */
       underline?: boolean;
       /**
        * Sets the text's vertical alignment relative to the subtitle object's box . "top" | "middle" | "bottom"
        */
       'vertical-align'?: string;
       /**
        * Sets the visibility of the object. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. May truncate text. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Forces wrapping of the text inside a confined box width. Requires a setting for width. Without text wrap, text will be truncated.
        * true | false | 1 | 0
        */
       'wrap-text'?: boolean;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   title?: {
       /**
        * Forces the plotarea to consider the title positioning and prevent overlapping with it. true | false | 1 | 0
        */
       'adjust-layout'?: boolean;
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow"
        * | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow"
        *  | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets whether the text is displayed with bold characters or not in the title. true | false | 1 | 0
        */
       bold?: boolean;
       /**
        * Sets the object's bottom border style. Defaults to black when color is not set properly. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. Requires border width. See also line-color for closed shapes. "n
        * one" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Operates like border-bottom. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. The higher the value, the more rounded the corners appear. 4 | "6px" | "6px
        * 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Operates like border-bottom. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Operates like border-bottom. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. If no border-color is set
        * , will display in black.. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets if the object will have a callout arrow. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length for extension line off the tip of the callout arrow. Requires border-width. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets a location for the point of the tip of the callout arrow. Uses XY coordinates. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset for the origin of the callout arrow. Uses positive or negative values to move the arrow right/left/up/down. 4 | "6
        * px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets which edge will be the location for the object's callout arrow. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * true | false | 1 | 0
        */
       'clip-text'?: boolean;
       /**
        * Sets the text's color in the title. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       color?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the rotation angle of the title. Similar with angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the text's color of the title. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 1
        * 5, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family of the title. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size of the title. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style of the title. Similar with italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight of the title. Similar with bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets whether the text of the title is displayed with italic characters or not. Similar with font-weight. true | false | 1 | 0
        */
       italic?: boolean;
       /**
        * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
        */
       item?: string;
       /**
        * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
        */
       map?: string;
       /**
        * Sets the object's margin/s. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum number of characters displayed by the text label of the title. If value is smaller than the length of the text, t
        * he original text will be trimmed and '...' will be appended at the end. 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's bottom padding around the text of the title. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text of the title. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text of the title. padding-left here may push the text out of the containing legend if t
        * he number is big enough. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text of the title. padding-right here will not push the text out of the containing lege
        * nd. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text of the title. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
        */
       position?: string;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the text content of the title. "Some Text" | ...
        */
       text?: string;
       /**
        * Sets the text's horizontal alignment relative to the box of the text. "left" | "center" | "right"
        */
       'text-align'?: string;
       /**
        * Sets the text's transparency of the title. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the text's decoration of the title. Similar with underline. "none" | "underline"
        */
       'text-decoration'?: string;
       /**
        * Sets whether the text of the title is displayed with underlined characters or not. true | false | 1 | 0
        */
       underline?: boolean;
       /**
        * Sets the text's vertical alignment relative to the object's box of the title. "top" | "middle" | "bottom"
        */
       'vertical-align'?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
        */
       'wrap-text'?: boolean;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   tooltip?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. For graph plot tooltip. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. For graph plot tooltip. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). For graph plot to
        * oltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. For graph plot tooltip. "
        * none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. For graph plot tooltip.
        * "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". For graph plot tooltip. "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. For graph plot tooltip. "image.png" |
        *  ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. For graph plot tooltip. "0 0" | "50 100" | "80%
        *  60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. For graph plot tooltip. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'border-alpha'?: number;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(1
        * 00, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. For grap
        * h plot tooltip. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object. For graph plot tooltip. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. For graph plot tooltip. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. For graph plot tooltip. 4 | "6px
        * " | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart. For graph plot tooltip. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the callout-position. For graph plot tooltip. 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. For graph plot tooltip. "top" | "right" | "
        * bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. For graph plot tooltip. 4 | "6px"
        * | ...
        */
       'callout-width'?: any;
       /**
        * Cuts off extra text. Use with width. For graph plot tooltip. true | false | 1 | 0
        */
       'clip-text'?: boolean;
       /**
        * Sets the text's color of the tooltip. Similar with font-color. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00
        * f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       color?: string;
       /**
        * Allows you to set the number of decimal places displayed for each value. 2 | 3 | 10 | ...
        */
       decimals?: number;
       /**
        * Allows you to set the decimal mark displayed for each value. "." | "," | " " | ...
        */
       'decimals-separator'?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. For graph plot tooltip. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. For graph plot tooltip. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the rotation angle of the text of the tooltip. Similar with angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the text's color of the tooltip. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100,
        *  15, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family of the tooltip. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size of the tooltip. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style of the tooltip. Similar with italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight of the tooltip. Similar with bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. For graph p
        * lot tooltip. "#f00 #0f0 #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. For gra
        * ph plot tooltip. "0.1 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. For graph plot tooltip. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets the item id of the map on which the object/shape is being added. "itemid" | ...
        */
       item?: string;
       /**
        * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
        */
       map?: string;
       /**
        * Sets the object's margins. For graph plot tooltip. Works with output flash. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
        * the text is cut and appended with "..." For graph plot tooltip. Works with output canvas and svg. 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. For graph plot tooltip. Works with output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets an Y offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's padding around the text of the tooltip. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Specifies where tooltips are fixed relative to their node values. Refer to the applicable chart types page for more information. O
        * ptions by Chart Type: "node:top" | "node:center" | "node:out" | ...
        */
       placement?: string;
       /**
        * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
        *  For graph plot tooltip.
        */
       position?: string;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
        * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the character used to separate thousands. "," | "." | " " | ...
        */
       'thousands-separator'?: string;
       /**
        * Allows the underlying data to be 'transformed' to a new format if it was in that format originally. For example, if data is coded
        * as a date and time, and 'type':'date' is specified as an attribute of this object, '1311261385209' will display 'Wed, 19 of May 05
        * :00 PM' if '%D, %d %M %h:%i %A' is specified under the transform attribute of scale-x. {...}
        */
       transform?: any;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets whether the text will wrap, depending on the width of the object. For graph plot tooltip. true | false | 1 | 0
        */
       'wrap-text'?: boolean;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   widget?: {
       /**
        * Type of the widget. The zingchart.widgets.myWidget object must exist and define a "parse" method returning an object with "graphs"
        * , "labels" and "shapes" collections which will be injected in the original JSON. "myWidget" | ...
        */
       type?: string;
   };
   zoom?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 1 | 3 | | "6px" | ...
        */
       'border-width'?: any;
       /**
        * API charts only: Sets whether the zoom level is preserved on chart data alteration or reloads. true | false | 1 | 0
        */
       'preserve-zoom'?: boolean;
       label?: {
           /**
            * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
            * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
            * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
            *  15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 1 | 3 | | "6px" | ...
            */
           'border-width'?: number;
           /**
            * Sets the font color of the object text. "none" | "transparent" | "purple" | "#33ccff" | ...
            */
           'font-color'?: string;
           /**
            * Sets the font family of the object text. "Courier" | "Georgia" | "Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the font size of the object text. 12 | "20px" | ...
            */
           'font-size'?: string;
           /**
            * Sets the font style of the object text. "normal" | "italic"
            */
           'font-style'?: string;
           /**
            * Sets the font weight of the object text. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the padding around the object text. "10%" | "25px" ...
            */
           padding?: number;
           /**
            * Sets the visibility of the object. true | false | 1 | 0
            */
           visible?: boolean;
       };
   };
}
export interface gui {
   behaviors?: [
       {
           /**
            * To enable or disable individual context menu item behaviors. "all" | "none"
            */
           enabled?: string;
           /**
            * To specify the behavior ID of the context menu item that is being accessed. "3D" | "LogScale" | "LinScale" | ...
            */
           id?: string;
       },
   ];
   'context-menu'?: {
       /**
        * To fix the position of the context menu to one side of the chart. true | false
        */
       docked?: boolean;
       /**
        * Empties all default context-menu items, leaving just the "About ZingChart" button. true | false | 1 | 0
        */
       empty?: boolean;
       /**
        * To position the context menu button on the left or right side of the chart. left | right
        */
       position?: string;
       button?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the background color of the object. A single color will create a solid background, while two colors will create a gradient. "
            * none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the width of the object's border. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
            * | ...
            */
           'font-color'?: string;
           /**
            * Sets the object's font family. "Arial" | "Tahoma,Verdana" | ...
            */
           'font-family'?: string;
           /**
            * Sets the object's font size. 4 | "6px" | ...
            */
           'font-size'?: any;
           /**
            * Sets the object's font style. Similar to italic. "none" | "italic" | "oblique"
            */
           'font-style'?: string;
           /**
            * Sets the object's font weight. Similar to bold. "normal" | "bold"
            */
           'font-weight'?: string;
           /**
            * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
            */
           height?: any;
           /**
            * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
            * the text is cut and appended with "..." 5 | 10 | ...
            */
           'max-chars'?: number;
           /**
            * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
            * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
            */
           'max-width'?: any;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the padding around the object's text. Up to four values can be used to set the padding around the text, with the first value
            * being the top padding, the second value being the right padding, the third value being the bottom padding, and the fourth value be
            * ing the left padding. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
            */
           padding?: any;
           /**
            * Sets the bottom padding for the object's text. 4 | "6px" | ...
            */
           'padding-bottom'?: any;
           /**
            * Sets the left padding for the object's text. 4 | "6px" | ...
            */
           'padding-left'?: any;
           /**
            * Sets the right padding for the object's text. 4 | "6px" | ...
            */
           'padding-right'?: any;
           /**
            * Sets the top padding for the object's text. 4 | "6px" | ...
            */
           'padding-top'?: any;
           /**
            * Renders text right-to-left. Default value is false. true | false | 1 | 0
            */
           'rtl (right-to-left)'?: boolean;
           /**
            * Sets the text content of the object. "Some Text" | ...
            */
           text?: string;
           /**
            * Sets the horizontal alignment for the object's text. Horizontal alignment can be left, center, or right. "left" | "center" | "righ
            * t"
            */
           'text-align'?: string;
           /**
            * Sets the transparency of the object's text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 bei
            * ng completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           'text-alpha'?: number;
           /**
            * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
            * arts are rendered using SVG. "none" | "underline"
            */
           'text-decoration'?: string;
           /**
            * Sets whether the context-menu button is visible or not. true | false | 1 | 0
            */
           visible?: boolean;
           /**
            * Sets the width of the object. 10 | "20px" | 0.3 | "30%" | ...
            */
           width?: any;
           /**
            * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
            */
           'wrap-text'?: boolean;
           /**
            * Sets the X position of the object. The context-menu gear object must be positioned separately. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. The context-menu gear object must be positioned separately. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
       };
       'custom-items'?: [
           {
               /**
                * Sets a JavaScript function/portion of code that will be executed when the respective menu item is selected. "doSomething()" | "ale
                * rt(1)" | ...
                */
               function?: string;
               /**
                * Sets the ID of the menu item. "myid" | "f1" | ...
                */
               id?: string;
               /**
                * Sets the text for the menu item. "New Menu Item" | ...
                */
               text?: string;
           },
       ];
       gear?: {
           /**
            * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
            * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
            */
           alpha?: number;
           /**
            * Sets the rotation angle of the object/shape. -45 | 115 | ...
            */
           angle?: number;
           /**
            * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
            * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
            * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
            * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
            */
           'background-fit'?: string;
           /**
            * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
            */
           'background-image'?: string;
           /**
            * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
            */
           'background-position'?: string;
           /**
            * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
            */
           'background-repeat'?: string;
           /**
            * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
            * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
            */
           'fill-angle'?: number;
           /**
            * Sets an X offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-x'?: any;
           /**
            * Sets an Y offset to apply to the fill. 4 | "6px" | ...
            */
           'fill-offset-y'?: any;
           /**
            * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
            */
           'fill-type'?: string;
           /**
            * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
            * #00f" | ...
            */
           'gradient-colors'?: string;
           /**
            * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
            * 5 0.9" | ...
            */
           'gradient-stops'?: string;
           /**
            * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-x'?: any;
           /**
            * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
            */
           'offset-y'?: any;
           /**
            * Sets the size of the object/shape. 4 | "6px" | ...
            */
           size?: any;
           /**
            * Sets the type of icon displayed on mobile devices to tap to bring up the drop-down menu. gear4 can be specified, this means that t
            * he gear icon shown will have four sprockets protruding from it. Gears can range from 3-9. star4 has 4 points, while star9 has 9 po
            * ints. Stars can range from 3-9 also. "gear4" | "gear9" | "star4" | "star9" | ...
            */
           type?: string;
           /**
            * Sets the X position of the object. The context-menu button object must be positioned separately. 10 | "20px" | 0.3 | "30%" | ...
            */
           x?: any;
           /**
            * Sets the Y position of the object. The context-menu button object must be positioned separately. 10 | "20px" | 0.3 | "30%" | ...
            */
           y?: any;
       };
       item?: {
           /**
            * Sets the background color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'background-color'?: string;
           /**
            * Sets the border color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'border-color'?: string;
           /**
            * Sets the border width of the object. 4 | "6px" | ...
            */
           'border-width'?: any;
           /**
            * Sets the font color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
            */
           'font-color'?: string;
           /**
            * Sets how the context menu item appears when a user hovers over it. Use the backgroundColor and fontColor attributes. {...}
            */
           'hover-state'?: any;
       };
   };
}
export interface history {
   /**
    * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
    * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
    */
   alpha?: number;
   /**
    * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
    * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
    * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
    * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'background-color'?: string;
   /**
    * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
    * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'background-color-1'?: string;
   /**
    * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
    *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'background-color-2'?: string;
   /**
    * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
    */
   'background-fit'?: string;
   /**
    * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
    */
   'background-image'?: string;
   /**
    * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
    */
   'background-position'?: string;
   /**
    * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
    */
   'background-repeat'?: string;
   /**
    * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
    */
   'border-bottom'?: string;
   /**
    * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
    * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'border-color'?: string;
   /**
    * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
    */
   'border-left'?: string;
   /**
    * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
    * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
    * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
    * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
    */
   'border-radius'?: any;
   /**
    * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
    * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-bottom-left'?: any;
   /**
    * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
    * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-bottom-right'?: any;
   /**
    * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
    * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-top-left'?: any;
   /**
    * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
    * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-top-right'?: any;
   /**
    * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
    */
   'border-right'?: string;
   /**
    * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
    * es. "2px solid #f00" | ...
    */
   'border-top'?: string;
   /**
    * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
    */
   'border-width'?: any;
   /**
    * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
    */
   callout?: boolean;
   /**
    * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
    */
   'callout-extension'?: any;
   /**
    * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
    */
   'callout-height'?: any;
   /**
    * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
    * top left corner of the chart. [200, 50] | ...
    */
   'callout-hook'?: any;
   /**
    * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
    * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
    */
   'callout-offset'?: any;
   /**
    * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
    */
   'callout-position'?: string;
   /**
    * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
    */
   'callout-width'?: any;
   /**
    * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
    */
   'fill-angle'?: number;
   /**
    * Sets an X offset to apply to the fill. 4 | "6px" | ...
    */
   'fill-offset-x'?: any;
   /**
    * Sets an Y offset to apply to the fill. 4 | "6px" | ...
    */
   'fill-offset-y'?: any;
   /**
    * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
    */
   'fill-type'?: string;
   /**
    * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
    * #00f" | ...
    */
   'gradient-colors'?: string;
   /**
    * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
    * 5 0.9" | ...
    */
   'gradient-stops'?: string;
   /**
    * Sets the object's height. 10 | "20px" | 0.3 | "30%" | ...
    */
   height?: any;
   /**
    * Sets the object's margin/s. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
    */
   margin?: any;
   /**
    * Sets the object's bottom margin. 4 | "6px" | ...
    */
   'margin-bottom'?: any;
   /**
    * Sets the object's left margin. 4 | "6px" | ...
    */
   'margin-left'?: any;
   /**
    * Sets the object's right margin. 4 | "6px" | ...
    */
   'margin-right'?: any;
   /**
    * Sets the object's top margin. 4 | "6px" | ...
    */
   'margin-top'?: any;
   /**
    * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
    */
   position?: string;
   /**
    * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
    */
   shadow?: boolean;
   /**
    * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
    * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
    */
   'shadow-alpha'?: number;
   /**
    * Sets the angle of the shadow underneath the object. -45 | 115 | ...
    */
   'shadow-angle'?: number;
   /**
    * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
    */
   'shadow-blur'?: any;
   /**
    * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
    * .
    */
   'shadow-color'?: string;
   /**
    * Sets the distance between the shadow and the object. 4 | "6px" | ...
    */
   'shadow-distance'?: any;
   /**
    * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
    */
   visible?: boolean;
   /**
    * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
    */
   width?: any;
   /**
    * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
    */
   x?: any;
   /**
    * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
    */
   y?: any;
   'item-off'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
   };
   item?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
   };
}
export interface refresh {
   /**
    * Sets the type of data refresh, full being the only option at loader's level. "full"
    */
   type?: string;
   /**
    * Defines the specific type of feed. http | js | websockets
    */
   transport?: string;
   /**
    * The url path for the feed. feed() | https://myPhpFunction.php | wss://websockets.zingchart.com:8889
    */
   url?: string;
   /**
    * Sets the timeout between two refresh operations. If value is smaller than 50, seconds are assumed, otherwise milliseconds are assu
    * med. 5 | 10 | ...
    */
   interval?: number;
   /**
    * Sets the max amount of nodes visible in the graph. 5 | 10 | ...
    */
   'max-ticks'?: number;
   /**
    * The number of nodes before starting the feed from 0 again. 500 | 1000 | ...
    */
   'reset-timeout'?: number;
   /**
    * Enabling true will allow dynamic value range of the scale pertaining to the values. false (default) | true
    */
   'adjust-scale'?: boolean;
   curtain?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets whether the text is displayed with bold characters or not. true | false | 1 | 0
        */
       bold?: string;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
        * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length of the extension that extends beyond the tip of the callout arrow. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the callout-position. 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * Sets the object's font color. Similar to font-color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15,
        * 15)" | ...
        */
       color?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
        * will rotate the object by that number of degrees counter-clockwise. Similar to angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the object's font color. Similar to color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)"
        * | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style. Similar to italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight. Similar to bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets whether the text is displayed with italic characters or not. true | false | 1 | 0
        */
       italic?: boolean;
       /**
        * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
        * the text is cut and appended with "..." 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, with the first
        * value affecting the top padding, the second value affecting the right padding, and so on, in a clockwise direction. 10 | "5px" | "
        * 10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the text content of the object. "Some Text" | ...
        */
       text?: string;
       /**
        * Sets the text's horizontal alignment relative to the object's box. "left" | "center" | "right"
        */
       'text-align'?: string;
       /**
        * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
        * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the text's decoration to use underlined characters. Similar to underline. May not display properly in Mozilla Firefox when ch
        * arts are rendered using SVG. "none" | "underline"
        */
       'text-decoration'?: string;
       /**
        * Sets whether the text is displayed with underlined characters or not. Similar to text-decoration. May not display properly in Mozi
        * lla Firefox when charts are rendered using SVG. true | false | 1 | 0
        */
       underline?: boolean;
       /**
        * Sets the text's vertical alignment to one of the three applicable values, relative to the object's box. "top" | "middle" | "bottom
        * "
        */
       'vertical-align'?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets whether the text will wrap, depending on the width of the object. true | false | 1 | 0
        */
       'wrap-text'?: boolean;
   };
}
export interface series {
   /**
    * Sets the transparency level of backgrounds, borders, and lines. Values must range between 0.0 and 1.0, with 0.0 being completely t
    * ransparent and 1.0 being completely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.9 | ...
    */
   alpha?: number;
   /**
    * Modifies how data points appear on a chart. Refer to the applicable chart types page for more information. Options by Chart Type:
    * "segmented" | "spline" | "stepped" | "jumped" | "cone" | "histogram" | ...
    */
   aspect?: string;
   /**
    * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
    * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
    * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use "gradient-c
    * olors" and "gradient-stops". "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'background-color'?: string;
   /**
    * Sets the first color of a 2 color background gradient of the object. To be used with "background-color-2". "none" | "transparent"
    * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'background-color-1'?: string;
   /**
    * Sets the second color of a 2 color background gradient of the object. To be used with "background-color-1". "none" | "transparent"
    *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'background-color-2'?: string;
   /**
    * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
    */
   'background-fit'?: string;
   /**
    * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
    */
   'background-image'?: string;
   /**
    * Sets the position of the background when the "background-repeat" value is "no-repeat". "0 0" | "50 100" | "80% 60%" | ...
    */
   'background-position'?: string;
   /**
    * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
    */
   'background-repeat'?: string;
   /**
    * Nested Pie Charts Only: This attribute is used to set the space between band in nested pie charts ("type":"nestedpie"). 5 | 10 | .
    * ..
    */
   'band-space'?: number;
   /**
    * Bar Charts and Bullet Charts Only: Sets the amount of space between each bar in a single plot index. "10" | "10%" | "10px"
    */
   'bar-space'?: number;
   /**
    * Bar Charts and Bullet Charts Only: Sets the width of each bar. "10" | "10%" | "10px"
    */
   'bar-width'?: number;
   /**
    * Bar Charts and Bullet Charts Only: Defines how much the bars in each plot index should overlap. "10" | "10%" | "10px"
    */
   'bars-overlap'?: number;
   /**
    * Bar Charts and Bullet Charts Only: Defines the spacing to the left of the bars at each index position. "10" | "10%" | "10px"
    */
   'bars-space-left'?: number;
   /**
    * Bar Charts and Bullet Charts Only: Defines the spacing to the right of the bars at each index position. "10" | "10%" | "10px"
    */
   'bars-space-right'?: number;
   /**
    * Sets the border color of the object, applicable on closed shapes. See also "line-color" for closed shapes. "none" | "transparent"
    * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'border-color'?: string;
   /**
    * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
    * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
    * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. A negati
    * ve value will cut a corner off without rounding. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
    */
   'border-radius'?: any;
   /**
    * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
    * e sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-bottom-left'?: any;
   /**
    * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
    * te sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-bottom-right'?: any;
   /**
    * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
    * harper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-top-left'?: any;
   /**
    * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
    * sharper corners. A negative value will cut a corner off without rounding. 4 | "6px" | "-6px" | -4 | ...
    */
   'border-radius-top-right'?: any;
   /**
    * Sets the border width of the object, applicable on closed shapes. See also "line-width" for closed shapes. 4 | "6px" | ...
    */
   'border-width'?: any;
   /**
    * Sets whether an object will have a callout arrow or not. true | false | 1 | 0
    */
   callout?: boolean;
   /**
    * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. 4 | "6px" | ...
    */
   'callout-height'?: any;
   /**
    * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
    * top left corner of the chart. [200, 50] | ...
    */
   'callout-hook'?: any;
   /**
    * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
    * row up, down, left, or right depending on the "callout-position". 4 | "6px" | ...
    */
   'callout-offset'?: any;
   /**
    * Sets the position for the object's callout arrow. The position is "bottom" by default. "top" | "right" | "bottom" | "left"
    */
   'callout-position'?: string;
   /**
    * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. 4 | "6px" | ...
    */
   'callout-width'?: any;
   /**
    * Area Charts Only: Sets whether the contour lines on area plots will be on top of all areas or will be hidden by the next area plot
    *  on top of it. You will notice when the attribute is set to true the lines are all set above the shaded regions. true | false | 1
    * | 0
    */
   'contour-on-top'?: boolean;
   /**
    * By defalut null values within series arrays will create a blank space within a plot. Setting connect-nulls to true will connect va
    * lues through a null data point. true | false | 1 | 0
    */
   'connect-nulls'?: boolean;
   /**
    * Sets the style of the cursor when hovering over a node. "hand" | "normal"
    */
   cursor?: string;
   /**
    * This attribute allows you to create custom tokens and associate static or dynamic data to them. This attribute can be used almost
    * anywhere in a chart. "Some Text" | ...
    */
   'data-...'?: string;
   /**
    * This attribute allows you to click and drag a bar's height in a bar chart. true | false | 1 | 0
    */
   'data-dragging'?: boolean;
   /**
    * Using the decimals attribute will allow you to set the number of decimal places associated to each value. 5 | 10 | ...
    */
   decimals?: number;
   /**
    * The "decimals-separator": attribute allows you to set what type of punctuation the will be used in the decimal place. "." | "," |
    * ...
    */
   'decimals-separator'?: string;
   /**
    * This attribute sets description text for the plot which can be addressed in various areas with the %plot-description token. "Some
    * Text" | ...
    */
   description?: string;
   /**
    * By default ZingChart uses sampling when rendering charts. This helps improve rendering speeds and typically does not effect the ap
    * pearance of the chart. However, using the attribute "exact": true within the "plot": { } object forces ZingChart to render all nod
    * es. true | false | 1 | 0
    */
   exact?: boolean;
   /**
    * This attribute sets the values to scientific notation true | false | 1 | 0
    */
   exponent?: boolean;
   /**
    * This attribute set the number of decimals to be used when using exponents for scientific notation 5 | 10 | ...
    */
   'exponent-decimals'?: number;
   /**
    * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
    */
   'fill-angle'?: number;
   /**
    * Sets an X offset to apply to the fill. 4 | "6px" | ...
    */
   'fill-offset-x'?: any;
   /**
    * Sets an Y offset to apply to the fill. 4 | "6px" | ...
    */
   'fill-offset-y'?: any;
   /**
    * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
    */
   'fill-type'?: string;
   /**
    * Bullet Charts Only: Accepts numerical values. Determines where goals are set for all plots. The "goals": [ ] values can also be se
    * t individually within each value set. [45, 70, 60]
    */
   goals?: any;
   /**
    * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with "gradient-stops". "#f00 #0f
    * 0 #00f" | ...
    */
   'gradient-colors'?: string;
   /**
    * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with "gradient-colors". "0.1
    * 0.5 0.9" | ...
    */
   'gradient-stops'?: string;
   /**
    * When true, automatically selects all nodes with the same scale index as the selected node. The selection-mode attribute must also
    * be set. true | false | 1 | 0
    */
   'group-selections'?: boolean;
   /**
    * Venn Diagrams Only: This attribute allow you to set the values for the area to be shared between each node. [30]
    */
   join?: any;
   /**
    * The "legend-text": attribute is typically used within "series": [ ] value sets. Using this attribute allows you to associate both
    * a "text":" " and "legend-text":" " to each value set "Some Text" | ...
    */
   'legend-text'?: string;
   /**
    * Sets the line color of the object, applicable on non-closed shapes. See also "border-color" for closed shapes. "none" | "transpare
    * nt" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
    */
   'line-color'?: string;
   /**
    * Can be used to create custom dashed or dotted lines when used with "line-segment-size". This will control the size of the gaps bet
    * ween each line segment. 4 | "6px" | ...
    */
   'line-gap-size'?: any;
   /**
    * Can be used to create custom dashed or dotted lines when used with "line-gap-size". This will control the size of the visible segm
    * ent of line. 4 | "6px" | ...
    */
   'line-segment-size'?: any;
   /**
    * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
    */
   'line-style'?: string;
   /**
    * Sets the line width of the object, applicable on non-closed shapes. See also "border-width" for closed shapes. 4 | "6px" | ...
    */
   'line-width'?: any;
   /**
    * Applies to charts such as line and area which have markers. When there are too many markers for the chart ZingChart does not displ
    * ay all markers. Example 1000 nodes on a 300px wide chart. Setting max-nodes will override the default setting and force nodes to b
    * e displayed. 5 | 10 | ...
    */
   'max-nodes'?: number;
   /**
    * Heat Maps Only: Sets a maximum ratio applied to the value of the node when calculating its aspect. 0 | 0.4 | ...
    */
   'max-ratio'?: number;
   /**
    * Bubble Charts and Bubble Pie Charts Only: Defines the maximum size of the bubble if the value representing size is not sharing the
    *  same ratio with the value scale. 5 | 10 | ...
    */
   'max-size'?: number;
   /**
    * Sets the maximum numbers of nodes for which a tracking area will be created. This is best used to optimize charts with large sets
    * of data. 5 | 10 | ...
    */
   'max-trackers'?: number;
   /**
    * Sets whether or not a node is wrapped equally before and after its position. true | false | 1 | 0
    */
   'mid-point'?: boolean;
   /**
    * Heat Maps Only: Sets a minimum ratio applied to the value of the node when calculating its aspect. 0 | 0.4 | ...
    */
   'min-ratio'?: number;
   /**
    * Bubble Charts and Bubble Pie Charts Only: Defines the minimum size of the bubble if the value representing size is not sharing the
    *  same ratio with the value scale. 5 | 10 | ...
    */
   'min-size'?: number;
   /**
    * Sets whether monotone interpolation is used for charts using the "spline" aspect. true | false | 1 | 0
    */
   monotone?: boolean;
   /**
    * Setting "multiplier": true will take large numbers such as thousands, millions, etc and replace the full number with an abbreviate
    * d notation with a short unit such as K, M, B, etc true | false | 1 | 0
    */
   multiplier?: boolean;
   /**
    * This attribute will determine how negative values are handled. When using "format":"$%v" setting "negation":"currency" will move t
    * he - symbol to the outside of the $ sign. When using "negation" within the "plot": { } object you will see changes in things such
    * as tooltips or anywhere else series data is used to populate values. You need to set "negation" in things such as "scale-y": { } s
    * eparately. "standard" | "currency"
    */
   negation?: string;
   /**
    * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
    */
   'offset-x'?: any;
   /**
    * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
    */
   'offset-y'?: any;
   /**
    * Bar, Line and Area Charts only Include object in any series to override style displayed in the preview window. {...}
    */
   'preview-state'?: any;
   /**
    * Pie Charts Only: Provides the ability to rotate the chart. 5 | 10 | ...
    */
   'ref-angle'?: number;
   /**
    * Heat Maps Only: Sets the value (default 'plot-max') which is used as a reference for calculating node aspect. "plot-max" | "plot-t
    * otal" | "chart-max" | "chart-total"
    */
   reference?: string;
   /**
    * By default ZingChart uses sampling when rendering large datasets. If you are trying to render 10000 data points on a chart which i
    * s only 500px wide there is not enough space for each data point. ZingChart will automatically determine which data points to show.
    *  The "sampling-step": attribute allows you to set the step for sampling. For example if you have 10000 data points and set "sampli
    * ng-step":10 it will show point 1,10,20,... Also note the "exact": true attribute if you want to force all data points. 5 | 10 | ..
    * .
    */
   'sampling-step'?: number;
   /**
    * Specifies the scales used by the series item. scale-x,scale-y | scale-x,scale-y-2 | ...
    */
   scales?: string;
   /**
    * Bubble Charts and Bubble Pie Charts Only: Sets the method used to relate the bubble numerical value to it's aspect. "radius" | "sq
    * rt" | "area"
    */
   scaling?: string;
   /**
    * When scrolling is enabled for a chart, ZingChart automatically samples the data in order to maintain performance during the re-ren
    * dering of the chart that occurs during scrolling. By default, ZingChart will automatically sample every other item (scroll-step-mu
    * ltiplier:2). Setting scroll-step-multiplier to 1 will force the library to sample every data point, essentially disabling sampling
    * . 5 | 10 | ...
    */
   'scroll-step-multiplier'?: number;
   /**
    * Line Charts and Area Charts Only: Allows you to specify whether tooltips are activated by the markers and lines (default) or the m
    * arkers only. true (default) | false
    */
   'segment-trackers'?: boolean;
   /**
    * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
    */
   shadow?: boolean;
   /**
    * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
    * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
    */
   'shadow-alpha'?: number;
   /**
    * Sets the angle of the shadow underneath the object. -45 | 115 | ...
    */
   'shadow-angle'?: number;
   /**
    * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
    */
   'shadow-blur'?: any;
   /**
    * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
    * .
    */
   'shadow-color'?: string;
   /**
    * Sets the distance between the shadow and the object. 4 | "6px" | ...
    */
   'shadow-distance'?: any;
   /**
    * Setting "short": true will abbreviate long numbers such as 100000 to 1K or 1000000 to 1M. When set within the "plot": {} object th
    * is change will be noticed anywhere values are pulled from series data. This can also be used in places such as "scale-y, scale-x,
    * etc" true | false | 1 | 0
    */
   short?: boolean;
   /**
    * By default when setting "short": true ZingChart will round to the nearest short unit (ie 100000 to 100K and 1000000 to 1M). You ca
    * n set the short-unit and ZingChart will round all numbers to that unit. Note when setting this within the "plot": { } object the c
    * hanges will only effect values which are pulled from the series values. Things such as scale are set separately. "k" | "K" | "m" |
    *  "M" | "b" | "B"
    */
   'short-unit'?: string;
   /**
    * On bar charts, when the value of a bar is 0, setting `show-zero`: true will add 1 pixel to the height of the bar so that it is onl
    * y just visible. true | false | 1 | 0
    */
   'show-zero'?: boolean;
   /**
    * Bubble Charts and Bubble Pie Charts Only: Sets a multiplier (default 1) used to increase/decrease the bubble size 5 | 10 | ...
    */
   'size-factor'?: number;
   /**
    * Nested Pie Charts Only: Sets the initial offset of the pie layers when making a nestedpie 5 | 10 | ...
    */
   'slice-start'?: number;
   /**
    * Using the "stack": attribute allows you to assign which plot index you want to each value set associated with when using a stacked
    *  chart. 5 | 10 | ...
    */
   stack?: number;
   /**
    * Setting "stacked": true will take each of the "series": [ ] value sets and stack them on top of one another true | false | 1 | 0
    */
   stacked?: boolean;
   /**
    * Applicable on aspect=stepped, sets the location of the stepping relative to two consecutive nodes. "before" | "middle" | "after"
    */
   'step-start'?: string;
   /**
    * Sets the url's target for the link associated with the object. Use with "url". "_blank" | ...
    */
   target?: string;
   /**
    * Sets the thickness of pie3d charts. 5 | 10 | ...
    */
   thickness?: number;
   /**
    * When you set the "thousands-separator": attribute the punctuation which is used will be placed to separate digits which go into 1,
    * 000's 10,000's etc. When placed in the "plot": { } object this will only effect values which are pulled directly from the series d
    * ata. Objects such as "scale-y": { }, "scale-x": { }, etc..., will need to be set separately. "." | "," | ...
    */
   'thousands-separator'?: string;
   /**
    * Using the "tooltip-text":" " attribute allows you to set text for tooltips. This can also be done using a variety of other tokens
    * "Some Text" | ...
    */
   'tooltip-text'?: string;
   /**
    * Sets the URL for the link associated with the object. "http://www.domain.com/link.php" | "link.asp" | ...
    */
   url?: string;
   /**
    * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
    */
   visible?: boolean;
   /**
    * Sets the z-axis end point on 3d charts. 10 | "10px" | ...
    */
   'z-end'?: number;
   /**
    * Sets the z-axis start point on 3d charts. 10 | "10px" | ...
    */
   'z-start'?: number;
   animation?: {
       /**
        * Sets the delay in milliseconds between each step of the animation. 5 | 10 | ...
        */
       delay?: number;
       /**
        * Sets the type of animation effect. ANIMATION_FADE_IN | ANIMATION_EXPAND_VERTICAL | 1 | 2 | ...
        */
       effect?: number;
       /**
        * Sets the method used for each animation effect. ANIMATION_LINEAR | ANIMATION_BACK_EASE_OUT | 0 | 1 | ...
        */
       method?: number;
       /**
        * Determines whether or not animation occurs when a change is made to the chart via an API event (e.g., adding node, adding plot, re
        * moving node). true (default) | false | 1 | 0
        */
       'on-change'?: boolean;
       /**
        * Determines whether or not animation occurs when users toggle legend items on and off. Note that in the "legend" object, the "toggl
        * e-action" attribute must be set to "remove". true (default) | false | 1 | 0
        */
       'on-legend-toggle'?: boolean;
       /**
        * Determines animation groups. ANIMATION_NO_SEQUENCE | ANIMATION_BY_PLOT | 0 | 1 | ...
        */
       sequence?: number;
       /**
        * Sets the length of the animation in milliseconds. ANIMATION_SLOW | ANIMATION_FAST | 1000 | 4000 | ...
        */
       speed?: number;
   };
   'background-marker'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
       /**
        * Sets the type of the object/shape. "pie" | "circle" | "star5" | ...
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
   };
   'background-state'?: {
       /**
        * Sets the rotation angle of the object/shape. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
   };
   error?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the line color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
        * en each line segment. 4 | "6px" | ...
        */
       'line-gap-size'?: any;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
        * t of line. 4 | "6px" | ...
        */
       'line-segment-size'?: any;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
        */
       'line-width'?: any;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
   };
   errors?: [{}];
   goal?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Note that values require the leading zero before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: any;
       /**
        * Sets the border color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: any;
       /**
        * Sets the border radius of the object, for rounded corners. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: number;
       /**
        * Sets the border width of the object. 4 | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the height of the object. 10 | "20px"
        */
       height?: number;
       /**
        * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
        */
       'line-style'?: string;
   };
   'guide-label'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Note that values require the leading 0 before the decimal point. Use with "background-color" attribute. 0.3 | 0.4 |
        *  0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#FF0
        * 000", "#0000FF"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "#f00" | "#f00 #00f" | "red yel
        * low" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 4 | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the font color of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the font family of the object. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the font size of the object. 4 | "6px" | ...
        */
       'font-size'?: string;
       /**
        * Sets the font style of the object. "none" | "italic"
        */
       'font-style'?: string;
       /**
        * Sets the font weight of the object. "none" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
        */
       'line-style'?: string;
       /**
        * Sets the padding around the text of the object. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the crosshair plot label text to be displayed for that series. You can provide any combination of alphanumeric characters and
        * /or ZingChart tokens. "%v widgets" | "Top Sales: %v" | "$%v" | "%v %t" | "..."
        */
       text?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
   };
   'highlight-marker'?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 1 | 3 | | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object. 1 | 3 | | "6px" | ...
        */
       'line-width'?: number;
       /**
        * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
        * ear6 | gear7 | gear8
        */
       type?: string;
   };
   'highlight-state'?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 1 | 3 | | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object. 1 | 3 | | "6px" | ...
        */
       'line-width'?: number;
   };
   'hover-marker'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
        * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
        * en each line segment. 4 | "6px" | ...
        */
       'line-gap-size'?: any;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
        * t of line. 4 | "6px" | ...
        */
       'line-segment-size'?: any;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
        */
       'line-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets an Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
       /**
        * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
        * ear6 | gear7 | gear8
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
   };
   'hover-state'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Area Charts Only: Sets the transparency level of the area below a line. Values must range between 0.0 and 1.0, with 0.0 being comp
        * letely transparent and 1.0 being completely opaque. Note that values require the leading zero before the decimal point. 0.3 | 0.9
        * | ...
        */
       'alpha-area'?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the line color of the object, applicable on non-closed shapes. See also border-color for closed shapes. "none" | "transparent
        * " | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-segment-size. This will control the size of the gaps betwe
        * en each line segment. 4 | "6px" | ...
        */
       'line-gap-size'?: any;
       /**
        * Can be used to create custom dashed or dotted lines when used with line-gap-size. This will control the size of the visible segmen
        * t of line. 4 | "6px" | ...
        */
       'line-segment-size'?: any;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object, applicable on non-closed shapes. See also border-width for closed shapes. 4 | "6px" | ...
        */
       'line-width'?: any;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
   };
   'legend-item'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. Requires Legend. Used only inside individual
        *  series rather than Plot. See red text in upper right box. Works with output flash. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See red text in
        *  upper right box. Works with output canvas and svg. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). Requires Legend.
        * Used only inside individual series rather than Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f
        * " | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. Requires Legend. Used onl
        * y inside individual series rather than Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red
        *  yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. Requires Legend. Used on
        * ly inside individual series rather than Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "re
        * d yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". Requires Legend. Used only inside individual series rathe
        * r than Plot. See red text in upper right box. "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. Requires Legend. Used only inside ind
        * ividual series rather than Plot. See red text in upper right box. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. Requires Legend. Used only inside individual se
        * ries rather than Plot. See red text in upper right box. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. Requires Legend. Used only inside individual series rather than Plot. See red te
        * xt in upper right box. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets whether the text is displayed with bold characters or not. Requires Legend. Used only inside individual series rather than Pl
        * ot. See red text in upper right box. true | false | 1 | 0
        */
       bold?: boolean;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. Requires Legend. Used only inside individual seri
        * es rather than Plot. See red text in upper right box. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object. Requires Legend. Used only inside individual series rather than Plot. See red text in upper r
        * ight box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. Requires Legend. Used only inside individual series
        *  rather than Plot. See red text in upper right box. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. Requires
        *  Legend. Used only inside individual series rather than Plot. See red text in upper right box. 4 | "6px" | "6px 10px 3px 5px" | "-
        * 10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series ra
        * ther than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series r
        * ather than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series rathe
        * r than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. Requires Legend. Used only inside individual series rath
        * er than Plot. See red text in upper right box. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. Requires Legend. Used only inside individual serie
        * s rather than Plot. See red text in upper right box. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object. Requires Legend. Used only inside individual series rather than Plot. See red text in upper r
        * ight box. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. Requires Legend. Used only inside individual series rather than Plot. See
        *  red text in upper right box. Works with output canvas and svg. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the length of the extension that extends beyond the tip of the callout arrow. Requires Legend. Used only inside individual se
        * ries rather than Plot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'callout-extension'?: any;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. Requires Legend. Used only insid
        * e individual series rather than Plot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart.. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right b
        * ox. Works with output canvas and svg. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the callout-position. Requires Legend. Used only inside individual series rather than Pl
        * ot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. Requires Legend. Used only inside individua
        * l series rather than Plot. See red text in upper right box. Works with output canvas and svg. "top" | "right" | "bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. Requires Legend. Used only inside
        * individual series rather than Plot. See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'callout-width'?: any;
       /**
        * Sets the color of the text in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text i
        * n upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       color?: string;
       /**
        * Sets the style of the cursor when hovering over a node. "hand" | "normal"
        */
       cursor?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. Requires Legend. Used only inside individual series rather th
        * an Plot. See red text in upper right box. Works with output canvas and svg. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See red text in upper
        *  right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See red text in upper
        *  right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. Requires Legend. Used only inside individual series rather than
        *  Plot. See red text in upper right box. Works with output canvas and svg. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the object's font angle. A positive value will rotate the object by that number of degrees clockwise, while a negative value
        * will rotate the object by that number of degrees counter-clockwise. For the text in the legend box. Requires Legend. Used only ins
        * ide individual series rather than Plot. See red text in upper right box. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the font color of the text in the legend box. Works like color. Requires Legend. Used only inside individual series rather th
        * an Plot. See red text in upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text
        * in upper right box. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text in
        *  upper right box. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style in the legend box. Requires Legend. Used only inside individual series rather than Plot. See red text i
        * n upper right box. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight in the legend box. Similar to bold. Requires Legend. Used only inside individual series rather than Pl
        * ot. See red text in upper right box. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. Requires Le
        * gend. Used only inside individual series rather than Plot. See red text in upper right box. Works with output canvas and svg. "#f0
        * 0 #0f0 #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. Require
        * s Legend. Used only inside individual series rather than Plot. See red text in upper right box. Works with output canvas and svg.
        * "0.1 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box. W
        * orks with output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets whether the text is displayed with italic characters or not. For the legend box. Similar to font-style. Requires Legend. Used
        *  only inside individual series rather than Plot. See red text in upper right box. true | false | 1 | 0
        */
       italic?: boolean;
       /**
        * Sets the object's margins. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box.
        * Works with output canvas and svg. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right
        *  box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right b
        * ox. Works with output canvas and svg. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right
        * box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right bo
        * x. Works with output canvas and svg. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
        * the text is cut and appended with "..." Requires Legend. Used only inside individual series rather than Plot. See red text in uppe
        * r right box. 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box. Works w
        * ith output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
        *  See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets an Y offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
        *  See red text in upper right box. Works with output canvas and svg. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * To specify the order of the legend items in the legend. 1 | 2 | 3 | 4 | ...
        */
       order?: any;
       /**
        * Sets the object's padding around the text. Up to four values can be entered to set the padding for all four sides, starting with t
        * he top and going clockwise. Requires Legend. Used only inside individual series rather than Plot. See red text in upper right box.
        *  10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text. For single item in Legend. Requires Legend. Used only inside individual series r
        * ather than Plot. See red text in upper right box. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text. For single item in Legend. Requires Legend. Used only inside individual series rat
        * her than Plot. See red text in upper right box. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text. For single item in Legend. Requires Legend. Used only inside individual series ra
        * ther than Plot. See red text in upper right box. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text. For single item in Legend. Requires Legend. Used only inside individual series rath
        * er than Plot. See red text in upper right box. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. For single item in Legend. Requires Legend. Used only inside individual series
        *  rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. true | fa
        * lse | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. For single item in Legend. Req
        * uires Legend. Used only inside individual series rather than Plot. See red text in upper right box. Works with output flash. Has l
        * imited effect on HTML5 implementation. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. For single item in Legend. Requires Legend. Used only inside individual series
        *  rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. -45 | 115
        *  | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. For single item in Legend. Requires Legend. Used only inside individual se
        * ries rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. 4 | "
        * 6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. For single item in Legend. Requires Legend. Used only inside individual series rather
        * than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. "none" | "transpa
        * rent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. For single item in Legend. Requires Legend. Used only inside individual serie
        * s rather than Plot. See red text in upper right box. Works with output flash. Has limited effect on HTML5 implementation. 4 | "6px
        * " | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
       /**
        * Sets the text content of the object. For single item in Legend. Requires Legend. Used only inside individual series rather than Pl
        * ot. See red text in upper right box. "Some Text" | ...
        */
       text?: string;
       /**
        * Sets the text's horizontal alignment relative to the object's box. For single item in Legend. Requires Legend. Used only inside in
        * dividual series rather than Plot. See red text in upper right box. "left" | "center" | "right"
        */
       'text-align'?: string;
       /**
        * Sets the text's transparency independent of the object's transparency. Value must be between 0.0 and 1.0, with 0.0 being 100% tran
        * sparent and 1.0 being 100% opaque. The leading 0 before the decimal is required. For single item in Legend. Requires Legend. Used
        * only inside individual series rather than Plot. See red text in upper right box. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the text's decoration. Similar to underline. For single item in Legend. Requires Legend. Used only inside individual series r
        * ather than Plot. See red text in upper right box. Use output canvas or flash. "none" | "underline"
        */
       'text-decoration'?: string;
       /**
        * Sets whether the text is displayed with underlined characters or not. For single item in Legend. Requires Legend. Used only inside
        *  individual series rather than Plot. See red text in upper right box. Use output canvas or flash. true | false | 1 | 0
        */
       underline?: boolean;
       /**
        * Sets whether the text will wrap, depending on the width of the object. For single item in Legend. Requires Legend. Used only insid
        * e individual series rather than Plot. See red text in upper right box. Use output canvas or flash. "top" | "middle" | "bottom"
        */
       'vertical-align'?: string;
       /**
        * Sets the visibility of the object. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets whether the text will wrap, depending on the width of the object. See red text in upper right box. Use output canvas or flash
        * . true | false | 1 | 0
        */
       'wrap-text'?: boolean;
   };
   'legend-marker'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. Requires Legend. Used only inside individual
        *  series rather than Plot. See the shape to the left of the text in the upper right box. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See the shape t
        * o the left of the text in the upper right box. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. For the shape to the left of the Legend text. Colors can be entered by name (e.g. "red",
        * "blue", "yellow"), in hexadecimal notation (e.g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0
        * ,0,255)", "rgb(255,255,0)"). Requires Legend. Used only inside individual series rather than Plot. See the orange shape to the lef
        * t of the text in the upper right box. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. Requires Legend. Used onl
        * y inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "none" | "transparent"
        * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. Requires Legend. Used on
        * ly inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "none" | "transparent"
        *  | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". Requires Legend. Used only inside individual series rathe
        * r than Plot. See the shape to the left of the text in the upper right box. "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. Requires Legend. Used only inside ind
        * ividual series rather than Plot. See the shape to the left of the text in the upper right box. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. Requires Legend. Used only inside individual se
        * ries rather than Plot. See the shape to the left of the text in the upper right box. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. Requires Legend. Used only inside individual series rather than Plot. See the sh
        * ape to the left of the text in the upper right box. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. Requires Legend. Used onl
        * y inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "none" | "transparent"
        * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. See also line-color for c
        * losed shapes. Requires Legend. Used only inside individual series rather than Plot. See the shape to the left of the text in the u
        * pper right box. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the style of the cursor when hovering over a node. "hand" | "normal"
        */
       cursor?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. Requires Legend. Used only inside individual series rather th
        * an Plot. See the shape to the left of the text in the upper right box. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See the shape to the
        * left of the text in the upper right box. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. Requires Legend. Used only inside individual series rather than Plot. See the shape to the
        * left of the text in the upper right box. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. Requires Legend. Used only inside individual series rather than
        *  Plot. See the shape to the left of the text in the upper right box. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. Requires Le
        * gend. Used only inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "#f00 #0f
        * 0 #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. Require
        * s Legend. Used only inside individual series rather than Plot. See the shape to the left of the text in the upper right box. "0.1
        * 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets an X offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
        *  See the shape to the left of the text in the upper right box. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets an Y offset to apply when positioning the object/shape. Requires Legend. Used only inside individual series rather than Plot.
        *  See the shape to the left of the text in the upper right box. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the size of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See the shape to the left
        *  of the text in the upper right box. 4 | "6px" | ...
        */
       size?: any;
       /**
        * Sets the type of the object/shape. Requires Legend. Used only inside individual series rather than Plot. See the shape to the left
        *  of the text in the upper right box. "pie" | "circle" | "star5" | ...
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. Requires Legend. Used only in
        * side individual series rather than Plot. See the shapes to the left of the text in the upper right box. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the X position of the object. Requires Legend. Used only inside individual series rather than Plot. See the shapes to the lef
        * t of the text in the upper right box. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. Requires Legend. Used only inside individual series rather than Plot. See the shapes to the lef
        * t of the text in the upper right box. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
   };
   marker?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. See the square points between the lines. 0.3
        *  | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. See the square points between the lines. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. See the square points between the lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "
        * rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. See the square points bet
        * ween the lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. See the square points be
        * tween the lines. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". Used with background-image. See the square points between
        *  the lines. "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. See the square points between the lin
        * es. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. See the square points between the lines. "0 0"
        * | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. See the square points between the lines. "no-repeat" | "repeat" | "repeat-x" | "
        * repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See the square points between the lines. "none" | "transparent"
        * | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See the square points between the lines. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. See the square points between the lines. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. See the square points between the lines. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. See the square points between the lines. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. See the square points between the lines. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the map id of the map on which the object/shape is being added. "mapid" | ...
        */
       map?: string;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
       /**
        * The type of the marker object to render. square | circle | diamond | triangle | star5 | star6 | star7 | star8 | rpoly5 | gear5 | g
        * ear6 | gear7 | gear8
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   preview?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Area Chart only: Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely trans
        * parent and 1.0 being completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       'alpha-area'?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Sets the line style of the object. "solid" | "dotted" | "dashed" | "dashdot"
        */
       'line-style'?: string;
       /**
        * Sets the line width of the object. 2 | 4 | "6px" | ...
        */
       'line-width'?: any;
       /**
        * To set the stock preview chart type: area chart or line chart. "area" (default) | "line"
        */
       type?: string;
   };
   rules?: [
       {
           /**
            * A rule allows you to include logic in order to apply a set of attributes only to certain aspects of your chart that meet the crite
            * ria specified within each "rule": group. You can include any number of "rule": groups nested within a "rules": set. Place the desi
            * red attribute or attributes within each "rule": group to apply those attributes to the areas that fulfill the requirement. The eff
            * ect of rules depends largely on the placement of the "rules": set within your JSON code. In the above example, the styling attribu
            * tes within each rule will be applied to the scale-y guide. "%c == 2" | "%v <= 0" | "%v > 0" | ...
            */
           rule?: string;
       },
   ];
   'selected-marker'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. See the boxes at each point when clicked. Wo
        * rks with output flash. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets an X offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object/shape. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the size of the object/shape. 4 | "6px" | ...
        */
       size?: any;
       /**
        * Sets the type of the object/shape. "pie" | "circle" | "star5" | ...
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the X position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       x?: any;
       /**
        * Sets the Y position of the object. 10 | "20px" | 0.3 | "30%" | ...
        */
       y?: any;
   };
   'selected-state'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). One color will se
        * t a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-co
        * lors and gradient-stops. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. "none" | "transparent" |
        *  "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. "0 0" | "50 100" | "80% 60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the border color of the object, applicable on closed shapes. See also line-color for closed shapes. "none" | "transparent" |
        * "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See also line-width for closed shapes. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. "#f00 #0f0
        * #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. "0.1 0.
        * 5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
   };
   tooltip?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. For graph plot tooltip. 0.3 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object/shape. For graph plot tooltip. -45 | 115 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.
        * g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"). For graph plot to
        * oltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a 2 color background gradient of the object. To be used with background-color-2. For graph plot tooltip. "
        * none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a 2 color background gradient of the object. To be used with background-color-1. For graph plot tooltip.
        * "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction/s on which the background image is being "stretched". For graph plot tooltip. "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. For graph plot tooltip. "image.png" |
        *  ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the background-repeat value is no-repeat. For graph plot tooltip. "0 0" | "50 100" | "80%
        *  60%" | ...
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. For graph plot tooltip. "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'border-alpha'?: number;
       /**
        * Sets the object's bottom border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-bottom'?: string;
       /**
        * Sets the border color of the object. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(1
        * 00, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the object's left border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-left'?: string;
       /**
        * Sets the object's border radius, for rounded corners. Larger values create rounder corners, while smaller values create sharper co
        * rners. A single value will affect all 4 corners, while multiple values will have separate effects on each corner, with the first v
        * alue affecting the top-left corner, the second value affecting the top-right corner, and so on, in a clockwise direction. For grap
        * h plot tooltip. 4 | "6px" | "6px 10px 3px 5px" | "-10px" | ...
        */
       'border-radius'?: any;
       /**
        * Sets the object's bottom-left border radius, for rounded corners. Larger values create rounder corners, while smaller values creat
        * e sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-left'?: any;
       /**
        * Sets the object's bottom-right border radius, for rounded corners. Larger values create rounder corners, while smaller values crea
        * te sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-bottom-right'?: any;
       /**
        * Sets the object's top-left border radius, for rounded corners. Larger values create rounder corners, while smaller values create s
        * harper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-left'?: any;
       /**
        * Sets the object's top-right border radius, for rounded corners. Larger values create rounder corners, while smaller values create
        * sharper corners. A negative value will cut a corner off without rounding. For graph plot tooltip. 4 | "6px" | "-6px" | -4 | ...
        */
       'border-radius-top-right'?: any;
       /**
        * Sets the object's right border style. Accepts solid, dashed, and dotted styles. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-right'?: string;
       /**
        * Sets the object's top border style. Values must include the border width, style, and color. Accepts solid, dashed, and dotted styl
        * es. For graph plot tooltip. "2px solid #f00" | ...
        */
       'border-top'?: string;
       /**
        * Sets the border width of the object. For graph plot tooltip. 4 | "6px" | ...
        */
       'border-width'?: any;
       /**
        * Sets whether an object will have a callout arrow or not. For graph plot tooltip. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Sets the height of the object's callout arrow. A larger value will create a taller callout arrow. For graph plot tooltip. 4 | "6px
        * " | ...
        */
       'callout-height'?: any;
       /**
        * Sets the point of the tip of the callout arrow to a specified coordinate on the chart, with the starting point of [0,0] being the
        * top left corner of the chart. For graph plot tooltip. [200, 50] | ...
        */
       'callout-hook'?: any;
       /**
        * Sets the offset along the callout direction of the arrow's base. Positive and negative values can be used to offset the callout ar
        * row up, down, left, or right depending on the callout-position. For graph plot tooltip. 4 | "6px" | ...
        */
       'callout-offset'?: any;
       /**
        * Sets the position for the object's callout arrow. The position is "bottom" by default. For graph plot tooltip. "top" | "right" | "
        * bottom" | "left"
        */
       'callout-position'?: string;
       /**
        * Sets the width of the object's callout arrow. A larger value will create a wider callout arrow. For graph plot tooltip. 4 | "6px"
        * | ...
        */
       'callout-width'?: any;
       /**
        * Cuts off extra text. Use with width. For graph plot tooltip. true | false | 1 | 0
        */
       'clip-text'?: boolean;
       /**
        * Sets the text's color of the tooltip. Similar with font-color. For graph plot tooltip. "none" | "transparent" | "#f00" | "#f00 #00
        * f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       color?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. For graph plot tooltip. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets an Y offset to apply to the fill. For graph plot tooltip. 4 | "6px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to either linear or radial. For graph plot tooltip. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the rotation angle of the text of the tooltip. Similar with angle. -45 | 115 | ...
        */
       'font-angle'?: number;
       /**
        * Sets the text's color of the tooltip. Similar with color. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100,
        *  15, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the text's font family of the tooltip. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the text's font size of the tooltip. 4 | "6px" | ...
        */
       'font-size'?: any;
       /**
        * Sets the text's font style of the tooltip. Similar with italic. "none" | "italic" | "oblique"
        */
       'font-style'?: string;
       /**
        * Sets the text's font weight of the tooltip. Similar with bold. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets a set of colors for a complex background gradient consisting of 2 or more colors. To be used with gradient-stops. For graph p
        * lot tooltip. "#f00 #0f0 #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of 2 or more colors. To be used with gradient-colors. For gra
        * ph plot tooltip. "0.1 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the object's height. For graph plot tooltip. 10 | "20px" | 0.3 | "30%" | ...
        */
       height?: any;
       /**
        * Sets the object's margins. For graph plot tooltip. Works with output flash. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       margin?: any;
       /**
        * Sets the object's bottom margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-bottom'?: any;
       /**
        * Sets the object's left margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-left'?: any;
       /**
        * Sets the object's right margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-right'?: any;
       /**
        * Sets the object's top margin. For graph plot tooltip. Works with output flash. 4 | "6px" | ...
        */
       'margin-top'?: any;
       /**
        * Sets the maximum numbers of characters displayed in the object. The value determines how many characters will be displayed before
        * the text is cut and appended with "..." For graph plot tooltip. Works with output canvas and svg. 5 | 10 | ...
        */
       'max-chars'?: number;
       /**
        * Sets the maximum width of the text box. If text is longer than the max-width value, it will overlap the box or will wrap if wrap-t
        * ext is set to true. For graph plot tooltip. Works with output canvas and svg. 10 | "20px" | 0.3 | "30%" | ...
        */
       'max-width'?: any;
       /**
        * Sets an X offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets an Y offset to apply when positioning the object/shape. For graph plot tooltip. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the object's padding around the text of the tooltip. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Sets the object's bottom padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-bottom'?: any;
       /**
        * Sets the object's left padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-left'?: any;
       /**
        * Sets the object's right padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-right'?: any;
       /**
        * Sets the object's top padding around the text of the tooltip. 4 | "6px" | ...
        */
       'padding-top'?: any;
       /**
        * Specifies where tooltips are fixed relative to their node values. Refer to the applicable chart types page for more information. O
        * ptions by Chart Type: "node:top" | "node:center" | "node:out" | ...
        */
       placement?: string;
       /**
        * Sets the object's position relative to it's container. Similar results can be obtained by setting marginand margin-... attributes.
        *  For graph plot tooltip.
        */
       position?: string;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether the object's shadow is visible or not. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the shadow of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and
        * 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'shadow-alpha'?: number;
       /**
        * Sets the angle of the shadow underneath the object. -45 | 115 | ...
        */
       'shadow-angle'?: number;
       /**
        * Sets the blur effect size for the shadow of the object. Has limited effect on HTML5 implementation. 4 | "6px" | ...
        */
       'shadow-blur'?: any;
       /**
        * Sets the color of the shadow of the object. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ..
        * .
        */
       'shadow-color'?: string;
       /**
        * Sets the distance between the shadow and the object. 4 | "6px" | ...
        */
       'shadow-distance'?: any;
       /**
        * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
        * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
       /**
        * Sets the object's width. 10 | "20px" | 0.3 | "30%" | ...
        */
       width?: any;
       /**
        * Sets whether the text will wrap, depending on the width of the object. For graph plot tooltip. true | false | 1 | 0
        */
       'wrap-text'?: boolean;
       /**
        * Sets the z position of the object. Objects with higher z indexes will appear "above" those with lower z index values. 5 | 10 | ...
        */
       'z-index'?: number;
   };
   'trend-down'?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 1 | 3 | | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Sets the line width of the object. 1 | 3 | | "6px" | ...
        */
       'line-width'?: number;
   };
   'trend-equal'?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 1 | 3 | | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Sets the line width of the object. 1 | 3 | | "6px" | ...
        */
       'line-width'?: number;
   };
   'trend-up'?: {
       /**
        * Sets the transparency level of the object. Values must range between 0.0 and 1.0, with 0.0 being completely transparent and 1.0 be
        * ing completely opaque. Note that values require the leading 0 before the decimal point. 0.3 | 0.4 | 0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#666
        * 699", #33ccff"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). "none" | "transparent" | "purple" | "#33ccff" | "rgb(100,
        *  15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the border color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object. 1 | 3 | | "6px" | ...
        */
       'border-width'?: number;
       /**
        * Sets the line color of the object. "none" | "transparent" | "purple" | "#33ccff" | "rgb(100, 15, 15)" | ...
        */
       'line-color'?: string;
       /**
        * Sets the line width of the object. 1 | 3 | | "6px" | ...
        */
       'line-width'?: number;
   };
   'value-box'?: {
       /**
        * Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Note that values require the leading 0 before the decimal point. Use with "background-color" attribute. 0.3 | 0.4 |
        *  0.9 | ...
        */
       alpha?: number;
       /**
        * Sets the rotation angle of the object. A positive value will turn it in a clockwise direction. A negative value will turn it in a
        * counterclockwise direction. -90 | 270 | 180 | ...
        */
       angle?: number;
       /**
        * Sets the background color of the object. Colors can be entered by name (e.g., "purple", "blue"), hexadecimal notation (e.g., "#FF0
        * 000", "#0000FF"), or RGB notation (e.g., "rgb(255,0,0)", "rgb(0,0,255)"). One color will set a solid background color. Two colors
        * will, by default, create a horizontal gradient. For more complex gradients, use "gradient-colors" and "gradient-stops". "none" | "
        * transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color'?: string;
       /**
        * Sets the first color of a two-color background gradient. To be used with "background-color-2". "none" | "transparent" | "#f00" | "
        * #f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-1'?: string;
       /**
        * Sets the second color of a two-color background gradient. To be used with "background-color-1". "none" | "transparent" | "#f00" |
        * "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'background-color-2'?: string;
       /**
        * Sets the direction(s) in which the background image is being stretched. Works with "background-image". "x" | "y" | "xy"
        */
       'background-fit'?: string;
       /**
        * Sets a background image for the object. Value can be a local file or a web image's location. "image.png" | ...
        */
       'background-image'?: string;
       /**
        * Sets the position of the background when the "background-repeat" attribute is set to "no-repeat". "0 0" | "50 100" | "80% 60%" | .
        * ..
        */
       'background-position'?: string;
       /**
        * Sets the repeating mode for the background image. Works with "background-image". "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
        */
       'background-repeat'?: string;
       /**
        * Sets the transparency of the border. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comp
        * letely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'border-alpha'?: number;
       /**
        * Sets the border color of the object, applicable on closed shapes. See the "line-color" attribute for closed shapes. "none" | "tran
        * sparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...
        */
       'border-color'?: string;
       /**
        * Sets the border width of the object, applicable on closed shapes. See the "line-width" attribute for closed shapes. 4 | "6px" | ..
        * .
        */
       'border-width'?: any;
       /**
        * Sets whether or not the object will have a callout arrow. true | false | 1 | 0
        */
       callout?: boolean;
       /**
        * Allows you to set the number of decimal places displayed for each value. 2 | 3 | 10 | ...
        */
       decimals?: number;
       /**
        * Allows you to set the decimal mark displayed for each value. "." | "," | " " | ...
        */
       'decimals-separator'?: string;
       /**
        * Sets the angle of the axis along which the linear gradient is drawn. -45 | 115 | ...
        */
       'fill-angle'?: number;
       /**
        * Sets an X offset to apply to the object. 5 | "10px" | ...
        */
       'fill-offset-x'?: any;
       /**
        * Sets a Y offset to apply to the object. 5 | "10px" | ...
        */
       'fill-offset-y'?: any;
       /**
        * Sets the background gradient fill type to linear or radial. "linear" | "radial"
        */
       'fill-type'?: string;
       /**
        * Sets the font color of the object. Similar to the "color" attribute. "none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow"
        * | "rgb(100, 15, 15)" | ...
        */
       'font-color'?: string;
       /**
        * Sets the font family of the object. "Arial" | "Tahoma,Verdana" | ...
        */
       'font-family'?: string;
       /**
        * Sets the font size of the object. 4 | "6px" | ...
        */
       'font-size'?: string;
       /**
        * Sets the font style of the object. Similar to the "italic" attribute. "none" | "italic"
        */
       'font-style'?: string;
       /**
        * Sets the font weight of the object. Similar to the "bold" attribute. "normal" | "bold"
        */
       'font-weight'?: string;
       /**
        * Sets the colors for a complex background gradient consisting of two or more colors. Use with the "gradient-stops" attribute. Works
        *  with output svg. "#f00 #0f0 #00f" | ...
        */
       'gradient-colors'?: string;
       /**
        * Sets the gradient stops for a complex background gradient consisting of two or more colors. Use with the "gradient-colors" attribu
        * te. Works with output svg. "0.1 0.5 0.9" | ...
        */
       'gradient-stops'?: string;
       /**
        * Sets the style applied to lines and borders of the object. "solid" | "dotted" | "dashed" | "dashdot"
        */
       'line-style'?: string;
       /**
        * Sets an X offset to apply when positioning the object. 4 | "6px" | ...
        */
       'offset-x'?: any;
       /**
        * Sets a Y offset to apply when positioning the object. 4 | "6px" | ...
        */
       'offset-y'?: any;
       /**
        * Sets the padding of the object. 10 | "5px" | "10 20" | "5px 10px 15px 20px" | ...
        */
       padding?: any;
       /**
        * Specifies where the value boxes are placed in relation to the data points. Options by chart type: "in" | "out" | "auto" | "left" |
        *  "right" | "over" | ...
        */
       placement?: any;
       /**
        * Renders text right-to-left. Default value is false. true | false | 1 | 0
        */
       'rtl (right-to-left)'?: boolean;
       /**
        * Sets whether or not the object's shadow is visible. Has limited effect on HTML5 implementation. true | false | 1 | 0
        */
       shadow?: boolean;
       /**
        * Sets the transparency of the text. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being comple
        * tely opaque. Please note that values also require the leading 0 before the decimal. 0.3 | 0.9 | ...
        */
       'text-alpha'?: number;
       /**
        * Sets the character used to separate thousands. "," | "." | " " | ...
        */
       'thousands-separator'?: string;
       /**
        * Specifies which value boxes are displayed. By default, all values in a series are displayed. You can also display the minimum, max
        * imum, first, last, and/or no values. "all" | "min" | "max" | "first" | "last" | none" | "min,max" | "first,last,min,max" | ...
        */
       type?: string;
       /**
        * Sets the visibility of the object. Allows you to turn off the object without removing lines of JSON. true | false | 1 | 0
        */
       visible?: boolean;
   };
   values?: any;
}
