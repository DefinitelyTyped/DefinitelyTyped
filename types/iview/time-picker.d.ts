// Type definitions for iview 3.0.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from "vue";

export interface TimePicker extends Vue {
  /**
   * 显示类型，可选值为 time、timerange
   * @default time
   */
  type?: 'time' | 'timerange';
  /**
   * 时间，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的时间格式，点击右边查看
   * 注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
   * 名称	  说明	                示例
   * yyyy   年份（四位）	        2016
   * yy	    年份（两位）	        16
   * MM	    月份（两位）	        01
   * M	    月份（一位）	        1
   * MMMM   月份（英文）	        January
   * MMM   月份（英文简写）	      Jan
   * dd	    日期（两位）	        01
   * d	    日期（一位）        	1
   * Do	    日期（简写）        	1st
   * DD	    星期（两位）        	00
   * D	    星期（一位）        	0
   * dddd   星期（英文）        	Monday
   * ddd  	星期（英文简写）	     Mon
   * HH	    小时（24小时制两位）   01
   * H	    小时（24小时制一位）   1
   * hh	    小时（12小时制两位）   01
   * h	    小时（12小时制一位）   1
   * mm	    分钟（两位）          01
   * m	    分钟（一位）          1
   * ss	    秒钟（两位）          01
   * s	    秒钟（一位）          1
   * SSS    毫秒（三位）          019
   * SS     毫秒（两位）          01
   * S	    毫秒（一位）          1
   * A    	上午与下午（大写）	   AM/PM
   * a	    上午与下午（小写）    am/pm
   * ZZ     时区	+0800
   */
  value?: Date;
  /**
   * 展示的时间格式
   * @default HH:mm:ss
   * 名称	  说明	                示例
   * yyyy   年份（四位）	        2016
   * yy	    年份（两位）	        16
   * MM	    月份（两位）	        01
   * M	    月份（一位）	        1
   * MMMM   月份（英文）	        January
   * MMM   月份（英文简写）	      Jan
   * dd	    日期（两位）	        01
   * d	    日期（一位）        	1
   * Do	    日期（简写）        	1st
   * DD	    星期（两位）        	00
   * D	    星期（一位）        	0
   * dddd   星期（英文）        	Monday
   * ddd  	星期（英文简写）	     Mon
   * HH	    小时（24小时制两位）   01
   * H	    小时（24小时制一位）   1
   * hh	    小时（12小时制两位）   01
   * h	    小时（12小时制一位）   1
   * mm	    分钟（两位）          01
   * m	    分钟（一位）          1
   * ss	    秒钟（两位）          01
   * s	    秒钟（一位）          1
   * SSS    毫秒（三位）          019
   * SS     毫秒（两位）          01
   * S	    毫秒（一位）          1
   * A    	上午与下午（大写）	   AM/PM
   * a	    上午与下午（小写）    am/pm
   * ZZ     时区	+0800
   */
  format?: string;
  /**
   * 下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。
   * 例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。
   * @default []
   */
  steps?: any[];
  /**
   * 时间选择器出现的位置，可选值为
   * top,top-start,top-end
   * bottom,bottom-start,bottom-end
   * left,left-start,left-end
   * right,right-start,right-end
   * @default bottom-start
   */
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /**
   * 占位文本
   * @default 空
   */
  placeholder?: string;
  /**
  * 是否显示底部控制栏
   * @default false
  */
  confirm?: boolean;
  /**
  * 手动控制时间选择器的显示状态，true 为显示，false 为收起。
  * 使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用,
  * @default null
  */
  open?: boolean;
  /**
  * 尺寸，可选值为large、small、default或者不设置
  */
  size?: '' | 'large' | 'small' | 'default';
  /**
  * 是否禁用选择器
   * @default false
  */
  disabled?: boolean;
  /**
  * 是否显示清除按钮
   * @default true
  */
  clearable?: boolean;
  /**
  * 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效
   * @default false
  */
  readonly?: boolean;
  /**
  * 文本框是否可以输入，只在没有使用 slot 时有效
   * @default true
  */
  editable?: boolean;
  /**
  * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
  建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
  */
  transfer?: boolean;
  /**
  * 给表单元素设置 id，详见 Form 用法。
  */
  'element-id'?: boolean;
  /**
  * 时间发生变化时触发	已经格式化后的时间，比如 09:41:00
  */
  $emit(eventName: 'on-change', value: string): this;
  /**
  * 弹出浮层和关闭浮层时触发
  */
  $emit(eventName: 'on-open-change', value: boolean): this;
  /**
  * 点击确定按钮时触发
  */
  $emit(eventName: 'on-ok'): this;
  /**
  * 在清空日期时触发
  */
  $emit(eventName: 'on-clear'): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例
     */
    '': VNode[];
  };
}