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
    * @brief x509 撤销证书对象
    * @detail X509Crl 对象属于 crypto 模块，创建：,```JavaScript,var k = new crypto.X509Crl();,```
    */

declare class Class_X509Crl extends Class__object {
    
    
    
    /**
     * 
     * @brief X509Crl 构造函数
     * 
     * 
     */
    constructor();

    /**
     * 
     * @brief 加载一个 DER 格式的撤销证书，可多次调用
     * @param derCrl DER 格式的撤销证书
     * 
     * 
     * 
     */
    load(derCrl: Class_Buffer): void;

    /**
     * 
     * @brief 加载一个 PEM 格式的撤销证书，可多次调用
     * @param pemCrl PEM 格式的撤销证书
     * 
     * 
     * 
     */
    load(pemCrl: string): void;

    /**
     * 
     * @brief 加载一个 PEM/DER 格式的撤销证书，可多次调用
     * @param filename 撤销证书文件名
     * 
     * 
     * 
     */
    loadFile(filename: string): void;

    /**
     * 
     * @brief 导出已经加载的撤销证书
     * @return 以数组方式导出撤销证书链
     * 
     * 
     * 
     */
    dump(): any[];

    /**
     * 
     * @brief 清空已经加载的撤销证书
     * 
     * 
     * 
     */
    clear(): void;

} /** endof class */

/** endof `module Or Internal Object` */


