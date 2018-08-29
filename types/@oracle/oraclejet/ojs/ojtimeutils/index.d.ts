declare namespace oj {  
  class TimeUtils {
    static getDate(pos: number, rangeStartTime: Date|string|number, rangeEndTime: Date|string|number, rangeWidth: number): number;
    static getLength(startTime: Date|string|number, endTime: Date|string|number, rangeStartTime: Date|string|number, rangeEndTime: Date|string|number, rangeWidth: number): number;
    static getPosition(time: Date|string|number, rangeStartTime: Date|string|number, rangeEndTime: Date|string|number, rangeWidth: number): number;
  }

}
