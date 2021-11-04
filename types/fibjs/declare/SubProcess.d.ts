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
    * @brief 子进程对象
    * @detail ```JavaScript,var process = require("process");,var sub = process.open("ls");,```
    */
/// <reference path="BufferedStream.d.ts" />
declare class Class_SubProcess extends Class_BufferedStream {
    
    /**
     * class prop 
     *
     * 
     * @brief 读取当前对象指向的进程的 id
     * 
     * 
     * @readonly
     * @type Integer
     */
    
    pid: number
    
    /**
     * class prop 
     *
     * 
     * @brief 读取当前对象指向的进程的标准输入对象
     * 
     * 
     * @readonly
     * @type BufferedStream
     */
    
    stdin: Class_BufferedStream
    
    /**
     * class prop 
     *
     * 
     * @brief 读取当前对象指向的进程的标准输出对象
     * 
     * 
     * @readonly
     * @type BufferedStream
     */
    
    stdout: Class_BufferedStream
    
    
    
    /**
     * 
     * @brief 杀掉当前对象指向的进程，并传递信号
     * @param signal 传递的信号
     * 
     * 
     * 
     */
    kill(signal: number): void;

    /**
     * 
     * @brief 等待当前对象指向的进程结束，并返回进程结束代码
     * @return 进程的结束代码
     * 
     * 
     * @async
     */
    wait(): number;

    /**
     * 
     * @brief 查询当前对象所指向的进程是否存在指定名称的窗口，仅限 windows
     * @param name 窗口名称
     * @return 窗口存在则返回窗口的 rect，否则返回 undefined
     * 
     * 
     * 
     */
    findWindow(name: string): any;

} /** endof class */

/** endof `module Or Internal Object` */


