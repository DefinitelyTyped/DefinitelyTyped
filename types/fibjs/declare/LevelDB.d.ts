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
    * @brief LevelDB 数据库对象
    * @detail 用以创建和管理字典对象，创建方法：,```JavaScript,var db = require("db");,var test = new db.openLevelDB("test.db");,```
    */

declare class Class_LevelDB extends Class__object {
    
    
    
    /**
     * 
     * @brief 检查数据库内是否存在指定键值的数据
     * @param key 指定要检查的键值
     * @return 返回键值是否存在
     * 
     * 
     * @async
     */
    has(key: Class_Buffer): boolean;

    /**
     * 
     * @brief 查询指定键值的值
     * @param key 指定要查询的键值
     * @return 返回键值所对应的值，若不存在，则返回 null
     * 
     * 
     * @async
     */
    get(key: Class_Buffer): Class_Buffer;

    /**
     * 
     * @brief 查询一组指定键值的值
     * @param keys 指定要查询的键值数组
     * @return 返回包含键值得数组
     * 
     * 
     * 
     */
    mget(keys: any[]): any[];

    /**
     * 
     * @brief 设定一个键值数据，键值不存在则插入新数据
     * @param key 指定要设定的键值
     * @param value 指定要设定的数据
     * 
     * 
     * @async
     */
    set(key: Class_Buffer, value: Class_Buffer): void;

    /**
     * 
     * @brief 设定一组键值数据，键值不存在则插入新数据
     * @param map 指定要设定的键值数据字典
     * 
     * 
     * 
     */
    mset(map: object): void;

    /**
     * 
     * @brief 删除一组指定键值的值
     * @param keys 指定要删除的键值数组
     * 
     * 
     * 
     */
    mremove(keys: any[]): void;

    /**
     * 
     * @brief 删除指定键值的全部值
     * @param key 指定要删除的键值
     * 
     * 
     * @async
     */
    remove(key: Class_Buffer): void;

    /**
     * 
     * @brief 枚举数据库中所有的键值对
     * 
     * 回调函数有两个参数，(value, key)
     * 
     * ```JavaScript
     * var db = require("db");
     * var test = new db.openLevelDB("test.db");
     * 
     * test.forEach(function(value, key){
     * ...
     * });
     * ```
     * @param func 枚举回调函数
     * 
     * 
     * 
     */
    forEach(func: Function): void;

    /**
     * 
     * @brief 枚举数据库中键值在 from 和 to 之间的键值对
     * 
     * 回调函数有两个参数，(value, key)
     * 
     * ```JavaScript
     * var db = require("db");
     * var test = new db.openLevelDB("test.db");
     * 
     * test.between("aaa", "bbb", function(value, key){
     * ...
     * });
     * ```
     * @param from 枚举的最小键值，枚举时包含此键值
     * @param to 枚举的最大键值，枚举时不包含此键值
     * @param func 枚举回调函数
     * 
     * 
     * 
     */
    between(from: Class_Buffer, to: Class_Buffer, func: Function): void;

    /**
     * 
     * @brief 在当前数据库上开启一个事务
     * @return 返回一个开启的事务对象
     * 
     * 
     */
    begin(): Class_LevelDB;

    /**
     * 
     * @brief 提交当前事务
     * 
     * 
     */
    commit(): void;

    /**
     * 
     * @brief 关闭当前数据库连接或事务
     * 
     * @async
     */
    close(): void;

} /** endof class */

/** endof `module Or Internal Object` */


