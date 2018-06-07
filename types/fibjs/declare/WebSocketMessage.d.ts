/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />


import ws = require('ws')



/** module Or Internal Object */
/**
	* @brief websocket 消息对象
	* @detail 创建方法：,```JavaScript,var ws = require("ws");,,var msg = new ws.Message();,```
	*/
declare class WebSocketMessage extends Message {
	
	/**
		* 
		* @brief 包处理消息对象构造函数
		* @param type websocket 消息类型，缺省为 websocket.BINARY
		* @param masked websocket 消息掩码，缺省为 true
		* @param compress 标记消息是否压缩，缺省为 false
		* @param maxSize 最大包尺寸，以 MB 为单位，缺省为 67108864(64M)
		* 
		* 
		* 
		*/
	constructor(type?: number/** = undefined*/, masked?: boolean/** = true*/, compress?: boolean/** = false*/, maxSize?: number/** = 67108864*/);

} /** endof class */

/** } /** endof `module Or Internal Object` */


