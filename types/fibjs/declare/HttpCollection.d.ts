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
    * @brief http 容器对象，用于 http header，cookie，query，form，等数据的存储与组织
    * @detail 
    */

declare class Class_HttpCollection extends Class__object {
    
    
    
    /**
     * 
     * @brief 清除容器数据
     * 
     * 
     */
    clear(): void;

    /**
     * 
     * @brief 检查容器内是否存在指定键值的数据
     * @param name 指定要检查的键值
     * @return 返回键值是否存在
     * 
     * 
     * 
     */
    has(name: string): boolean;

    /**
     * 
     * @brief 查询指定键值的第一个值
     * @param name 指定要查询的键值
     * @return 返回键值所对应的值，若不存在，则返回 undefined
     * 
     * 
     * 
     */
    first(name: string): any;

    /**
     * 
     * @brief 查询指定键值的全部值
     * @param name 指定要查询的键值
     * @return 返回键值所对应全部值的数组，若数据不存在，则返回 null
     * 
     * 
     * 
     */
    all(name: string): any[];

    /**
     * 
     * @brief 添加一个键值数据，添加数据并不修改已存在的键值的数据
     * @param map 指定要添加的键值数据字典
     * 
     * 
     * 
     */
    add(map: object): void;

    /**
     * 
     * @brief 添加一个键值数据，添加数据并不修改已存在的键值的数据
     * @param name 指定要添加的键值
     * @param value 指定要添加的数据
     * 
     * 
     * 
     */
    add(name: string, value: any): void;

    /**
     * 
     * @brief 设定一个键值数据，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余数据
     * @param map 指定要设定的键值数据字典
     * 
     * 
     * 
     */
    set(map: object): void;

    /**
     * 
     * @brief 设定一个键值数据，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余数据
     * @param name 指定要设定的键值
     * @param value 指定要设定的数据
     * 
     * 
     * 
     */
    set(name: string, value: any): void;

    /**
     * 
     * @brief 删除指定键值的全部值
     * @param name 指定要删除的键值
     * 
     * 
     * 
     */
    remove(name: string): void;

} /** endof class */

/** endof `module Or Internal Object` */


