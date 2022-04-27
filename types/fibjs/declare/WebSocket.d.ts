/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
    * @brief WebSocket 包协议转换处理器
    * @detail 用以将 Http 协议转换为 WebSocket 包协议消息。创建方式：,```JavaScript,var ws = require('ws');,var http = require('http');,,var serv = new http.Server(8811, ws.upgrade((conn) => {,conn.onmessage = msg => {,    conn.send(new Date());,};,}));,,serv.run(r => 0);,,var sock = new ws.Socket('ws://127.0.0.1:8811');,sock.on('open', () => {,    setInterval(() => {,        sock.send('get date');,    }, 1000);,});,,sock.onmessage = evt => {,  console.log(evt.data);,},```
    */
/// <reference path="EventEmitter.d.ts" />
declare class Class_WebSocket extends Class_EventEmitter {
    
    /**
     * class prop 
     *
     * 
     * @brief 查询当前对象连接的服务器
     * 
     * @readonly
     * @type String
     */
    
    url: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询当前对象连接时的协议
     * 
     * @readonly
     * @type String
     */
    
    protocol: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询当前对象连接的源
     * 
     * @readonly
     * @type String
     */
    
    origin: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询当前对象的连接状态，参见 ws
     * 
     * @readonly
     * @type Integer
     */
    
    readyState: number
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和绑定连接成功事件，相当于 on("open", func);
     * 
     * 
     * @type Function
     */
    
    onopen: Function
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和绑定接受到对方消息的事件，相当于 on("message", func);
     * 
     * 
     * @type Function
     */
    
    onmessage: Function
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和绑定连接关闭的事件，相当于 on("close", func);
     * 
     * 
     * @type Function
     */
    
    onclose: Function
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和绑定错误发生的事件，相当于 on("error", func);
     * 
     * 
     * @type Function
     */
    
    onerror: Function
    
    
    
    /**
     * 
     * @brief WebSocket 构造函数
     * @param url 指定连接的服务器
     * @param protocol 指定握手协议，缺省为 ""
     * @param origin 指定握手时模拟的源
     * 
     * 
     * 
     */
    constructor(url: string, protocol?: string/** = ""*/, origin?: string/** = ""*/);

    /**
     * 
     * @brief 关闭当前连接，此操作会向对方发送 CLOSE 数据包，并等待对方响应
     * @param code 指定关闭的代码，允许值为 3000-4999 或者 1000，缺省为 1000
     * @param reason 指定关闭的原因，缺省为 ""
     * 
     * 
     * 
     */
    close(code?: number/** = 1000*/, reason?: string/** = ""*/): void;

    /**
     * 
     * @brief 向对方发送一段文本
     * @param data 指定发送的文本
     * 
     * 
     * 
     */
    send(data: string): void;

    /**
     * 
     * @brief 向对方发送一段二进制数据
     * @param data 指定发送的二进制数据
     * 
     * 
     * 
     */
    send(data: Class_Buffer): void;

    /**
     * 
     * @brief 维持 fibjs 进程不退出，在对象绑定期间阻止 fibjs 进程退出
     * @return 返回当前对象
     * 
     * 
     * 
     */
    ref(): Class_WebSocket;

    /**
     * 
     * @brief 允许 fibjs 进程退出，在对象绑定期间允许 fibjs 进程退出
     * @return 返回当前对象
     * 
     * 
     * 
     */
    unref(): Class_WebSocket;

} /** endof class */

/** endof `module Or Internal Object` */


