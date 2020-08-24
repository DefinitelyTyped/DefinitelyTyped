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
    * @brief HeapGraphNode表示堆视图中的一个节点
    * @detail 
    */

declare class Class_HeapGraphNode extends Class__object {
    
    /**
     * class prop 
     *
     * 
     * @brief 节点类型，可能的值：
     * - profiler.Node_Hidden,         隐藏节点，当显示给用户时可以被过滤掉
     * - profiler.Node_Array,          数组
     * - profiler.Node_String,         字符串
     * - profiler.Node_Object,         JS对象（字符串和数组除外）
     * - profiler.Node_Code,           编译后的代码
     * - profiler.Node_Closure,        函数闭包
     * - profiler.Node_RegExp,         正则表达式
     * - profiler.Node_HeapNumber,     堆中排好序的数字
     * - profiler.Node_Native,         Native对象（非v8堆上的）
     * - profiler.Node_Synthetic,      Synthetic对象
     * - profiler.Node_ConsString,     拼接的字符串
     * - profiler.Node_SlicedString,   分割的字符串
     * - profiler.Node_Symbol,         符号（ES6）
     * - profiler.Node_SimdValue,      堆中排好序的SIMD值(ES7)
     * 
     * 
     * @readonly
     * @type Integer
     */
    
    type: number
    
    /**
     * class prop 
     *
     * 
     * @brief 节点名称
     * 
     * @readonly
     * @type String
     */
    
    name: string
    
    /**
     * class prop 
     *
     * 
     * @brief 节点的描述
     * 
     * @readonly
     * @type String
     */
    
    description: string
    
    /**
     * class prop 
     *
     * 
     * @brief 节点ID
     * 
     * @readonly
     * @type Integer
     */
    
    id: number
    
    /**
     * class prop 
     *
     * 
     * @brief 节点大小，单位为字节
     * 
     * @readonly
     * @type Integer
     */
    
    shallowSize: number
    
    /**
     * class prop 
     *
     * 
     * @brief 子节点列表，由HeapGraphEdge类型对象组成
     * 
     * @readonly
     * @type NArray
     */
    
    childs: any[]
    
    
    
} /** endof class */

/** endof `module Or Internal Object` */


