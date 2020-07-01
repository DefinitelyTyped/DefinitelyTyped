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
    * @brief 基础消息对象
    * @detail Message 对象兼容于 mq 各个模块，可用于构建自定义消息处理系统，创建方法：,```JavaScript,var mq = require("mq");,var m = new mq.Message();,```
    */

declare class Class_Message extends Class__object {
    
    /**
     * class prop 
     *
     * 
     * @brief 消息的基本内容
     * 
     * 
     * @type String
     */
    
    value: string
    
    /**
     * class prop 
     *
     * 
     * @brief 消息的基本参数
     * 
     * @readonly
     * @type NArray
     */
    
    params: any[]
    
    /**
     * class prop 
     *
     * 
     * @brief 消息类型
     * 
     * 
     * @type Integer
     */
    
    type: number
    
    /**
     * class prop 
     *
     * 
     * @brief 查询消息的数据
     * 
     * @readonly
     * @type Value
     */
    
    data: any
    
    /**
     * class prop 
     *
     * 
     * @brief 包含消息数据部分的流对象
     * 
     * 
     * @type SeekableStream
     */
    
    body: Class_SeekableStream
    
    /**
     * class prop 
     *
     * 
     * @brief 消息数据部分的长度
     * 
     * @readonly
     * @type Long
     */
    
    length: number
    
    /**
     * class prop 
     *
     * 
     * @brief 查询消息 readFrom 时的流对象
     * 
     * @readonly
     * @type Stream
     */
    
    stream: Class_Stream
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和设置消息处理的最后错误
     * 
     * 
     * @type String
     */
    
    lastError: string
    
    
    
    /**
     * 
     * @brief 消息对象构造函数
     * 
     * 
     */
    constructor();

    /**
     * 
     * @brief 从流内读取指定大小的数据，此方法为 body 相应方法的别名
     * @param bytes 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备
     * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
     * 
     * 
     * @async
     */
    read(bytes?: number/** = -1*/): Class_Buffer;

    /**
     * 
     * @brief 从流内读取剩余的全部数据，此方法为 body 相应方法的别名
     * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
     * 
     * 
     * @async
     */
    readAll(): Class_Buffer;

    /**
     * 
     * @brief 写入给定的数据，此方法为 body 相应方法的别名
     * @param data 给定要写入的数据
     * 
     * 
     * @async
     */
    write(data: Class_Buffer): void;

    /**
     * 
     * @brief 以 JSON 编码写入给定的数据
     * @param data 给定要写入的数据
     * @return 此方法不会返回数据
     * 
     * 
     * 
     */
    json(data: any): any;

    /**
     * 
     * @brief 以 JSON 编码解析消息中的数据
     * @return 返回解析的结果
     * 
     * 
     * 
     */
    json(): any;

    /**
     * 
     * @brief 设置当前消息处理结束，Chain 处理器不再继续后面的事务
     * 
     * 
     */
    end(): void;

    /**
     * 
     * @brief 查询当前消息是否结束
     * @return 结束则返回 true
     * 
     * 
     * 
     */
    isEnded(): boolean;

    /**
     * 
     * @brief 清除消息的内容
     * 
     * 
     */
    clear(): void;

    /**
     * 
     * @brief 发送格式化消息到给定的流对象
     * @param stm 指定接收格式化消息的流对象
     * 
     * 
     * @async
     */
    sendTo(stm: Class_Stream): void;

    /**
     * 
     * @brief 从给定的缓存流对象中读取格式化消息，并解析填充对象
     * @param stm 指定读取格式化消息的流对象
     * 
     * 
     * @async
     */
    readFrom(stm: Class_Stream): void;

} /** endof class */

/** endof `module Or Internal Object` */


