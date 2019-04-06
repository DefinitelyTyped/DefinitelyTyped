/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.25.0                                                   *
 *   	- date	: Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />






/** module Or Internal Object */
/**
	* @brief ZeroMQ 套接口对象
	* @detail 
	*/

declare class Class_ZmqSocket extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询当前 socket 类型
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	type: number
	
	
	
	/**
	 * 
	 * @brief ZmqSocket 对象构造函数
	 * @param type 指定 socket 类型，缺省为 zmq.PAIR
	 * 
	 * 
	 * 
	 */
	constructor(type?: number/** = undefined*/);

	/**
	 * 
	 * @brief 绑定指定地址和端口
	 * @param addr 指定绑定的地址，如："tcp://*:3000"
	 * 
	 * 
	 * 
	 */
	bind(addr: string): void;

	/**
	 * 
	 * @brief 连接到指定地址的服务器
	 * @param addr 指定连接的地址，如："tcp://*:3000"
	 * 
	 * 
	 * 
	 */
	connect(addr: string): void;

	/**
	 * 
	 * @brief 接收一个数据包
	 * @return 返回接收到的数据包
	 * 
	 * 
	 * @async
	 */
	recv(): Class_Buffer;

	/**
	 * 
	 * @brief 发送一个数据包
	 * @param data 指定发送的数据包
	 * 
	 * 
	 * 
	 */
	send(data: Class_Buffer): void;

	/**
	 * 
	 * @brief 关闭当前 socket
	 * 
	 * 
	 */
	close(): void;

} /** endof class */

/** endof `module Or Internal Object` */


