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
    * @brief 事件对象
    * @detail 通过一个事件达到对一组纤程进行控制的目的（事件对象的状态为bool类型）
    */
/// <reference path="Lock.d.ts" />
declare class Class_Event extends Class_Lock {
    
    
    
    /**
     * 
     * @brief 事件对象构造函数
     * @param value 指定是否等待，为 true 时等待，缺省为 false
     * 
     * 
     * 
     */
    constructor(value?: boolean/** = false*/);

    /**
     * 
     * @brief 判断事件对象是否为真
     * @return 如果事件为真，返回 true
     * 
     * 
     * 
     */
    isSet(): boolean;

    /**
     * 
     * @brief 激活事件（将事件状态改为true），并调用pulse()
     * 
     * 
     */
    set(): void;

    /**
     * 
     * @brief 激活等待该事件的所有纤程
     * 
     * 
     */
    pulse(): void;

    /**
     * 
     * @brief 重置事件（将事件状态改为false）
     * 
     * 
     */
    clear(): void;

    /**
     * 
     * @brief 等待一个事件
     * 
     * 
     */
    wait(): void;

} /** endof class */

/** endof `module Or Internal Object` */


