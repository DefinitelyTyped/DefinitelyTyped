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
    * @brief 纤程信号量对象
    * @detail 信号量对象管理一个内部计数器，此计数器调用 acquire 或者 wait 后减一，调用 release 或者 post 后加一。,计数器不会减至负数，因为 acquire 和 wait 在发现数值为 0 的时候，会休眠当前纤程，直至其它纤程通过 release 或 post 增加计数器的值。,,信号量常用的场合是限制资源并发使用，以及生产者/消费者模式的应用。,,以数据库请求为例，限制资源并发使用的情形：,```JavaScript,var maxconnections = 5;,var l = new coroutine.Semaphore(maxconnections);,,......,,l.acquire();,var conn = connectdb(),.....,conn.close();,l.release();,```,,生产者/消费者模式通常则将信号量与队列配合使用。生产者向队列中加入数据，并 post 一个信号，消费者则先 wait 信号，获取信号后去队查询取数据。
    */
/// <reference path="Lock.d.ts" />
declare class Class_Semaphore extends Class_Lock {
    
    
    
    /**
     * 
     * @brief 信号量构造函数
     * @param value 计数器初始数值
     * 
     * 
     * 
     */
    constructor(value?: number/** = 1*/);

    /**
     * 
     * @brief 等待一个信号量，等同于 acquire(true)
     * 
     * 
     */
    wait(): void;

    /**
     * 
     * @brief 释放一个信号量，等同于 release()
     * 
     * 
     */
    post(): void;

    /**
     * 
     * @brief 尝试获取一个信号，如不能获取，则立即返回并返回 false，等同于 acquire(false)
     * @return 获取成功则返回 true
     * 
     * 
     * 
     */
    trywait(): boolean;

} /** endof class */

/** endof `module Or Internal Object` */


