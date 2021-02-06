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
    * @brief Smtp对象
    * @detail 
    */

declare class Class_Smtp extends Class__object {
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和设置超时时间 单位毫秒
     * 
     * 
     * @type Integer
     */
    
    timeout: number
    
    /**
     * class prop 
     *
     * 
     * @brief 查询 Smtp 对象当前连接的 Socket
     * 
     * @readonly
     * @type Stream
     */
    
    socket: Class_Stream
    
    
    
    /**
     * 
     * @brief Smtp 对象构造函数
     * 
     * 
     */
    constructor();

    /**
     * 
     * @brief 建立到指定的服务器
     * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
     * 
     * 
     * @async
     */
    connect(url: string): void;

    /**
     * 
     * @brief 发送指定命令，并返回响应，服务器报错则抛出错误
     * @param cmd 命令名
     * @param arg 参数
     * @return 如果成功，返回服务器响应
     * 
     * 
     * @async
     */
    command(cmd: string, arg: string): string;

    /**
     * 
     * @brief 发送 HELO 命令，服务器报错则抛出错误
     * @param hostname 主机名，缺省为“localhost”
     * 
     * 
     * @async
     */
    hello(hostname?: string/** = "localhost"*/): void;

    /**
     * 
     * @brief 用指定的用户及密码登录服务器，服务器报错则抛出错误
     * @param username 用户名
     * @param password 密码
     * 
     * 
     * @async
     */
    login(username: string, password: string): void;

    /**
     * 
     * @brief 指定发件人信箱，服务器报错则抛出错误
     * @param address 发件人信箱
     * 
     * 
     * @async
     */
    from(address: string): void;

    /**
     * 
     * @brief 指定收件人信箱，服务器报错则抛出错误
     * @param address 收件人信箱
     * 
     * 
     * @async
     */
    to(address: string): void;

    /**
     * 
     * @brief 发送文本到收件人，服务器报错则抛出错误
     * @param txt 要发送的文本
     * 
     * 
     * @async
     */
    data(txt: string): void;

    /**
     * 
     * @brief 退出并关闭连接，服务器报错则抛出错误
     * 
     * @async
     */
    quit(): void;

} /** endof class */

/** endof `module Or Internal Object` */


