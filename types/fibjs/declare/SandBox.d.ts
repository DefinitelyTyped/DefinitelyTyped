/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.25.0                                                   *
 *   	- date	: Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
	* @brief 安全沙箱对象，用于管理一个独立的运行空间
	* @detail  所有的代码都运行在自己的沙箱中，全局的 require 会调用当前沙箱加载模块，沙箱会通过 require 传递给加载的沙箱。下面的示例创建一个沙箱，限制只允许访问全局基础模块中的 assert 模块，并添加 a 和 b 两个定制模块：,```JavaScript,var vm = require('vm');,var sbox = new vm.SandBox({,  a: 100,,  b: 200,,  assert: require('assert'),});,,var mod_in_sbox = sbox.require('./path/to/mod');,```
	*/

declare class Class_SandBox extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询沙箱的 global 对象
	 * 
	 * @readonly
	 * @type Object
	 */
	
	global: Object
	
	
	
	/**
	 * 
	 * @brief 构造一个新的安全沙箱对象，并初始化基础模块
	 * @param mods 指定要添加的模块对象字典
	 * 
	 * 
	 * 
	 */
	constructor(mods: Object);

	/**
	 * 
	 * @brief 构造一个新的安全沙箱对象，并初始化基础模块
	 * @param mods 指定要添加的模块对象字典
	 * @param require 自定义 require 函数，当模块不存在时，先调用自定义函数，无返回再从文件中加载
	 * 
	 * 
	 * 
	 */
	constructor(mods: Object, require: Function);

	/**
	 * 
	 * @brief 构造一个独立 Global 新的安全沙箱对象，并初始化基础模块
	 * @param mods 指定要添加的模块对象字典
	 * @param global 指定初始化的 Global 属性
	 * 
	 * 
	 * 
	 */
	constructor(mods: Object, global: Object);

	/**
	 * 
	 * @brief 构造一个独立 Global 新的安全沙箱对象，并初始化基础模块
	 * @param mods 指定要添加的模块对象字典
	 * @param require 自定义 require 函数，当模块不存在时，先调用自定义函数，无返回再从文件中加载
	 * @param global 指定初始化的 Global 属性
	 * 
	 * 
	 * 
	 */
	constructor(mods: Object, require: Function, global: Object);

	/**
	 * 
	 * @brief 向沙箱中添加一个基础模块
	 * @param id 指定要添加的模块名称，此路径与当前运行脚本无关，必须为绝对路径或者模块名
	 * @param mod 指定要添加的模块对象
	 * 
	 * 
	 * 
	 */
	add(id: string, mod: any): void;

	/**
	 * 
	 * @brief 向沙箱中添加一组基础模块
	 * @param mods 指定要添加的模块对象字典，添加的 javascript 模块将会生成一份复制，以避免沙箱修改对象产生互相干扰
	 * 
	 * 
	 * 
	 */
	add(mods: Object): void;

	/**
	 * 
	 * @brief 向沙箱中添加一个脚本模块
	 * @param srcname 指定要添加的脚本名称，srcname 必须包含扩展名，比如 json 或者 js, jsc
	 * @param script 指定要添加的二进制代码
	 * @return 返回加载的模块对象
	 * 
	 * 
	 * 
	 */
	addScript(srcname: string, script: Class_Buffer): any;

	/**
	 * 
	 * @brief 从沙箱中删除指定的基础模块
	 * @param id 指定要删除的模块名称，此路径与当前运行脚本无关，必须为绝对路径或者模块名
	 * 
	 * 
	 * 
	 */
	remove(id: string): void;

	/**
	 * 
	 * @brief 复制当前沙箱，新沙箱包含当前沙箱的模块，以及相同的名称和 require 函数
	 * @return 复制的新沙箱
	 * 
	 * 
	 * 
	 */
	clone(): Class_SandBox;

	/**
	 * 
	 * @brief 运行一个脚本
	 * @param fname 指定要运行的脚本路径，此路径与当前运行脚本无关，必须为绝对路径
	 * @param argv 指定要运行的参数，此参数可在脚本内使用 argv 获取
	 * 
	 * 
	 * 
	 */
	run(fname: string, argv?: any[]/** = v8::Array::New(isolate)*/): void;

	/**
	 * 
	 * @brief 查询一个模块并返回模块完整文件名
	 * @param id 指定要加载的模块名称
	 * @param base 指定查找路径
	 * @return 返回加载的模块完整文件名
	 * 
	 * 
	 * 
	 */
	resolve(id: string, base: string): string;

	/**
	 * 
	 * @brief 加载一个模块并返回模块对象
	 * @param id 指定要加载的模块名称
	 * @param base 指定查找路径
	 * @return 返回加载的模块对象
	 * 
	 * 
	 * 
	 */
	require(id: string, base: string): any;

} /** endof class */

/** endof `module Or Internal Object` */


