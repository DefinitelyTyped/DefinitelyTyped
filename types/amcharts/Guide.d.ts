import ValueAxis from "./ValueAxis";

/**
 * Guides are straight vertical or horizontal lines or areas supported by AmSerialChart, AmXYChart and AmRadarChart.
 * You can have guides both on value and category axes.
 * To add/remove a guide to an axis, use axis.addGuide(guide)/axis.removeGuide(guide) methods.
 * If you do not set properties such as dashLength, lineAlpha, lineColor, etc - values of the axis are used.
 */
export default class Guide {
   /**
    * If you set it to true, the guide will be displayed above the graphs.
    */
   above: boolean;
   /**
    * Radar chart only. Specifies angle at which guide should start. Affects only fills, not lines.
    */
   angle: number;
   /**
    * Baloon fill color.
    */
   balloonColor: string;
   /**
    * The text which will be displayed if the user rolls-over the guide.
    */
   balloonText: string;
   /**
    * Specifies if label should be bold or not.
    */
   boldLabel: boolean;
   /**
    * Category of the guide (in case the guide is for category axis).
    */
   category: string;
   /**
    * Dash length.
    */
   dashLength: number;
   /**
    * Date of the guide (in case the guide is for category axis and parseDates is set to true).
    */
   date: Date;
   /**
    * Works if a guide is added to CategoryAxis and this axis is non-date-based.
    * If you set it to true, the guide will start (or be placed, if it's not a fill) on the
    * beginning of the category cell and will end at the end of toCategory cell.
    */
   expand: boolean;
   /**
    * Fill opacity. Value range is 0 - 1.
    */
   fillAlpha: number;
   /**
    * Fill color.
    */
   fillColor: string;
   /**
    * Font size of guide label.
    */
   fontSize: string;
   /**
    * Unique id of a Guide. You don't need to set it, unless you want to.
    */
   id: string;
   /**
    * Specifies whether label should be placed inside or outside plot area.
    */
   inside: boolean;
   /**
    * The label which will be displayed near the guide.
    */
   label: string;
   /**
    * Rotation angle of a guide label.
    */
   labelRotation: number;
   /**
    * Line opacity.
    */
   lineAlpha: number;
   /**
    * Line color.
    */
   lineColor: string;
   /**
    * Line thickness.
    */
   lineThickness: number;
   /**
    * Position of guide label. Possible values are "left" or "right" for horizontal axis
    * and "top" or "bottom" for vertical axis.
    */
   position: string;
   /**
    * Tick length.
    */
   tickLength: number;
   /**
    * Radar chart only. Specifies angle at which guide should end. Affects only fills, not lines.
    */
   toAngle: number;
   /**
    * To category of the guide (in case the guide is for category axis).
    */
   toCategory: string;
   /**
    * To date of the guide (in case the guide is for category axis and parseDates is set to true).
    * If you have both date and toDate, the space between these two dates can be filled with color.
    */
   toDate: Date;
   /**
    * To value of the guide (in case the guide is for value axis).
    */
   toValue: number;
   /**
    * Value of the guide (in case the guide is for value axis).
    */
   value: number;
   /**
    * Value axis of a guide. As you can add guides directly to the chart,
    * you might need to specify which which value axis should be used.
    */
   valueAxis: ValueAxis;
}
