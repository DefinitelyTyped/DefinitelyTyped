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
    * @brief 信息摘要对象
    * @detail 
    */

declare class Class_Digest extends Class__object {
    
    /**
     * class prop 
     *
     * 
     * @brief 查询当前信息摘要算法的摘要字节数
     * 
     * @readonly
     * @type Integer
     */
    
    size: number
    
    
    
    /**
     * 
     * @brief 更新二进制摘要信息
     * @param data 二进制数据块
     * @return 返回信息摘要对象本身
     * 
     * 
     * 
     */
    update(data: Class_Buffer): Class_Digest;

    /**
     * 
     * @brief 计算并返回摘要
     * @param codec 指定编码格式，允许值为："buffer", "hex", "base64", "utf8", 或者系统支持的字符集
     * @return 返回指定编码的摘要表示
     * 
     * 
     * 
     */
    digest(codec?: string/** = "buffer"*/): any;

} /** endof class */

/** endof `module Or Internal Object` */


