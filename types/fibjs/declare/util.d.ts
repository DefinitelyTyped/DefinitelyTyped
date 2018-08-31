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





/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="EventInfo.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HandlerEx.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="Int64.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="Stats.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="SubProcess.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="ZmqSocket.d.ts" />

/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
	* @brief 常用工具模块
	* @detail 
	*/
declare module "util" {
	

	module util {
		
		
		
		/**
		 * 
		 * @brief 数据统计对象，用以构建应用运行时数据收集，参见 Stats 对象。
		 * 
		 * 
		 */
		export class Stats extends Class_Stats {}
		
		
		/**
		 * 
		 * @brief LRU(least recently used) 缓存对象，参见 LruCache 对象。
		 * 
		 * 
		 */
		export class LruCache extends Class_LruCache {}
		
		
		
		
		/**
		 * 
		 * @brief 按照指定的格式格式化变量
		 * 
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * @return 返回格式化后的字符串
		 * 
		 * 
		 * 
		 */
		export function format(fmt: string, ...args: any[]): string;
	
		/**
		 * 
		 * @brief 格式格式化变量
		 * 
		 * @param args 可选参数列表
		 * @return 返回格式化后的字符串
		 * 
		 * 
		 * 
		 */
		export function format(...args: any[]): string;
	
		/**
		 * 
		 * @brief 从一个构造函数 constructor 继承原型方法到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。
		 * 
		 * @param constructor 初始的构造函数
		 * @param superConstructor 被继承的超类
		 * 
		 * 
		 * 
		 */
		export function inherits(constructor: any, superConstructor: any): void;
	
		/**
		 * 
		 * @brief 方法返回 obj 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面。
		 * 
		 * @param obj 指定需要处理的对象
		 * @param options 指定格式控制选项
		 * @return 返回格式化后的字符串
		 * 
		 * 
		 * 
		 */
		export function inspect(obj: object, options?: object/** = v8::Object::New(isolate)*/): string;
	
		/**
		 * 
		 * @brief 检测给定的变量是否不包含任何值(没有可枚举的属性)
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果为空则返回 True
		 * 
		 * 
		 * 
		 */
		export function isEmpty(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是数组
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是数组则返回 True
		 * 
		 * 
		 * 
		 */
		export function isArray(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Boolean
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Boolean 则返回 True
		 * 
		 * 
		 * 
		 */
		export function isBoolean(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Null
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Null 则返回 True
		 * 
		 * 
		 * 
		 */
		export function isNull(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Null 或者 Undefined
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Null 或者 Undefined 则返回 True
		 * 
		 * 
		 * 
		 */
		export function isNullOrUndefined(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是数字
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是数字则返回 True
		 * 
		 * 
		 * 
		 */
		export function isNumber(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是字符串
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是字符串则返回 True
		 * 
		 * 
		 * 
		 */
		export function isString(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Undefined
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Undefined 则返回 True
		 * 
		 * 
		 * 
		 */
		export function isUndefined(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是正则对象
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是正则对象则返回 True
		 * 
		 * 
		 * 
		 */
		export function isRegExp(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是对象
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是对象则返回 True
		 * 
		 * 
		 * 
		 */
		export function isObject(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是日期对象
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是日期对象则返回 True
		 * 
		 * 
		 * 
		 */
		export function isDate(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是错误对象
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是错误对象则返回 True
		 * 
		 * 
		 * 
		 */
		export function isNativeError(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是原始类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是原始类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isPrimitive(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是Symbol类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是Symbol类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isSymbol(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 DataView 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 DataView 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isDataView(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 External 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 External 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isExternal(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Map 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Map 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isMap(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 MapIterator 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 MapIterator 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isMapIterator(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Promise 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Promise 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isPromise(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 AsyncFunction 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 AsyncFunction 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isAsyncFunction(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Set 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Set 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isSet(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 SetIterator 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 SetIterator 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isSetIterator(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 TypedArray 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 TypedArray 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isTypedArray(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是 Uint8Array 类型
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是 Uint8Array 类型则返回 True
		 * 
		 * 
		 * 
		 */
		export function isUint8Array(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是函数对象
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是函数对象则返回 True
		 * 
		 * 
		 * 
		 */
		export function isFunction(v: any): boolean;
	
		/**
		 * 
		 * @brief 检测给定的变量是否是函数 Buffer 对象
		 * 
		 * @param v 给定需要检测的变量
		 * @return 如果是函数 Buffer 对象则返回 True
		 * 
		 * 
		 * 
		 */
		export function isBuffer(v: any): boolean;
	
		/**
		 * 
		 * @brief 查询指定对象是否包含给定的键
		 * 
		 * @param v 给定需要查询的对象
		 * @param key 指定需要查询的键
		 * @return 返回对象的全部键数组
		 * 
		 * 
		 * 
		 */
		export function has(v: any, key: string): boolean;
	
		/**
		 * 
		 * @brief 查询指定对象的全部键数组
		 * 
		 * @param v 给定需要查询的对象
		 * @return 返回对象的全部键数组
		 * 
		 * 
		 * 
		 */
		export function keys(v: any): any[];
	
		/**
		 * 
		 * @brief 查询指定对象的全部值数组
		 * 
		 * @param v 给定需要查询的对象
		 * @return 返回对象的全部值数组
		 * 
		 * 
		 * 
		 */
		export function values(v: any): any[];
	
		/**
		 * 
		 * @brief 克隆给定变量，如果是对象或数组，则复制内容到新对象
		 * 
		 * @param v 给定要克隆的变量
		 * @return 返回克隆结果
		 * 
		 * 
		 * 
		 */
		export function clone(v: any): any;
	
		/**
		 * 
		 * @brief 深度冻结一个对象，被冻结后的对象及其包含的对象都将不允许修改
		 * 
		 * @param v 指定要冻结的对象
		 * 
		 * 
		 * 
		 */
		export function deepFreeze(v: any): void;
	
		/**
		 * 
		 * @brief 将一个或者多个对象的键值扩展到指定对象
		 * 
		 * @param v 指定要扩展的对象
		 * @param objs 指定一个或者多个用于扩展的对象
		 * @return 返回扩展的结果
		 * 
		 * 
		 * 
		 */
		export function extend(v: any, ...objs: any[]): any;
	
		/**
		 * 
		 * @brief 将一个或者多个对象的键值扩展到指定对象，是 extend 的别名
		 * 
		 * @param v 指定要扩展的对象
		 * @param objs 指定一个或者多个用于扩展的对象
		 * @return 返回扩展的结果
		 * 
		 * 
		 * 
		 */
		export function _extend(v: any, ...objs: any[]): any;
	
		/**
		 * 
		 * @brief 返回一个object副本，只过滤出指定键的属性值
		 * 
		 * @param v 指定要过滤的对象
		 * @param objs 指定一个或者多个用于选择的键
		 * @return 返回过滤的结果
		 * 
		 * 
		 * 
		 */
		export function pick(v: any, ...objs: any[]): object;
	
		/**
		 * 
		 * @brief 返回一个object副本，只过排除指定键的属性值
		 * 
		 * @param v 指定要过滤的对象
		 * @param keys 指定一个或者多个用于排除的键
		 * @return 返回排除的结果
		 * 
		 * 
		 * 
		 */
		export function omit(v: any, ...keys: any[]): object;
	
		/**
		 * 
		 * @brief 获取数组的第一个元素
		 * 
		 * @param v 给定要获取的数组
		 * @return 返回获取的元素
		 * 
		 * 
		 * 
		 */
		export function first(v: any): any;
	
		/**
		 * 
		 * @brief 获取数组的开始多个元素
		 * 
		 * @param v 给定要获取的数组
		 * @param n 指定要获取的元素个数
		 * @return 返回获取的元素数组
		 * 
		 * 
		 * 
		 */
		export function first(v: any, n: number): any;
	
		/**
		 * 
		 * @brief 获取数组的第后一个元素
		 * 
		 * @param v 给定要获取的数组
		 * @return 返回获取的元素
		 * 
		 * 
		 * 
		 */
		export function last(v: any): any;
	
		/**
		 * 
		 * @brief 获取数组的结尾多个元素
		 * 
		 * @param v 给定要获取的数组
		 * @param n 指定要获取的元素个数
		 * @return 返回获取的元素数组
		 * 
		 * 
		 * 
		 */
		export function last(v: any, n: number): any;
	
		/**
		 * 
		 * @brief 获取数组的元素去重后的副本
		 * 
		 * @param v 给定要去重的数组
		 * @param sorted 指定数组是否排序，如果指定数组排序，将使用快速算法
		 * @return 返回去重元素后的数组
		 * 
		 * 
		 * 
		 */
		export function unique(v: any, sorted?: boolean/** = false*/): any[];
	
		/**
		 * 
		 * @brief 将一个或者多个数组的值合并成一个值唯一的数组
		 * 
		 * @param arrs 指定一个或者多个用于合并的数组
		 * @return 返回合并的结果
		 * 
		 * 
		 * 
		 */
		export function union(...arrs: any[]): any[];
	
		/**
		 * 
		 * @brief 返回一个包含 arr 数组中排除一个或者多个数组元素的交集
		 * 
		 * @param arrs 指定一个或者多个用于计算交集的数组
		 * @return 返回计算交集的结果
		 * 
		 * 
		 * 
		 */
		export function intersection(...arrs: any[]): any[];
	
		/**
		 * 
		 * @brief 将一个嵌套多层的数组(嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow 参数，数组将只减少一维的嵌套。
		 * 
		 * @param arr 指定需要转换的数组
		 * @param shallow 指定是否只减少一维的嵌套，缺省为 false
		 * @return 返回转换的结果
		 * 
		 * 
		 * 
		 */
		export function flatten(arr: any, shallow?: boolean/** = false*/): any[];
	
		/**
		 * 
		 * @brief 返回一个包含 arr 数组中排除一个或者多个元素后的数组
		 * 
		 * @param arr 指定需要排除的数组
		 * @param els 指定一个或者多个用于排除的元素
		 * @return 返回排除的结果
		 * 
		 * 
		 * 
		 */
		export function without(arr: any, ...els: any[]): any[];
	
		/**
		 * 
		 * @brief 返回一个包含 arr 数组中排除 without 数组元素之后的数组
		 * 
		 * @param list 指定需要排除的数组
		 * @param arrs 指定用于排除的一个或者多个数组
		 * @return 返回排除的结果
		 * 
		 * 
		 * 
		 */
		export function difference(list: any[], ...arrs: any[]): any[];
	
		/**
		 * 
		 * @brief 遍历 list 中的所有元素，按顺序用遍历输出每个元素。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)
		 * 
		 * @param list 指定需要遍历的列表或对象
		 * @param iterator 指定用于遍历的回调函数
		 * @param context 指定调用 iterator 时绑定的 context 对象
		 * @return 返回 list 本身
		 * 
		 * 
		 * 
		 */
		export function each(list: any, iterator: Function, context?: any/** = v8::Undefined(isolate)*/): any;
	
		/**
		 * 
		 * @brief 通过变换函数（iterator迭代器）把 list 中的每个值映射到一个新的数组中。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)
		 * 
		 * @param list 指定需要变换的列表或对象
		 * @param iterator 指定用于变换的回调函数
		 * @param context 指定调用 iterator 时绑定的 context 对象
		 * @return 返回变换的结果
		 * 
		 * 
		 * 
		 */
		export function map(list: any, iterator: Function, context?: any/** = v8::Undefined(isolate)*/): any[];
	
		/**
		 * 
		 * @brief 把 list中 元素归结为一个单独的数值。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(memo, element, index, list)
		 * 
		 * @param list 指定需要归结的列表或对象
		 * @param iterator 指定用于归结的回调函数
		 * @param memo 指定归结的初始值
		 * @param context 指定调用 iterator 时绑定的 context 对象
		 * @return 返回归结的结果
		 * 
		 * 
		 * 
		 */
		export function reduce(list: any, iterator: Function, memo: any, context?: any/** = v8::Undefined(isolate)*/): any;
	
		/**
		 * 
		 * @brief 编译脚本为二进制代码
		 * util.compile 可以将脚本编译为 v8 内部运行数据块(非机器执行代码)。编译以后的代码，保存为 *.jsc 后，可以由 run 和 require 直接加载执行。
		 * 
		 * 由于编译之后，目标代码将不能逆向获取源代码，依赖于 Function.toString 的程序将不能正常运行。
		 * 
		 * @param srcname 指定要添加的脚本名称
		 * @param script 指定要编译的脚本代码
		 * @param mode 编译模式，0: module, 1: script, 2: worker，缺省为 0
		 * @return 返回编译出的二进制代码
		 * 
		 * 
		 * 
		 */
		export function compile(srcname: string, script: string, mode?: number/** = 0*/): Class_Buffer;
	
		/**
		 * 
		 * @brief 包裹 callback 或 async 方法为同步调用
		 * 
		 * util.sync 将 callback 方法或者 async 方法处理为 sync 方法，以方便调用。
		 * 
		 * callback 示例如下：
		 * ```JavaScript
		 * // callback
		 * var util = require('util');
		 * 
		 * function cb_test(a, b, cb) {
		 * setTimeout(() => {
		 * cb(null, a + b);
		 * }, 100);
		 * }
		 * 
		 * var fn_sync = util.sync(cb_test);
		 * console.log(fn_sync(100, 200));
		 * ```
		 * async 示例如下：
		 * ```JavaScript
		 * // async/await
		 * var util = require('util');
		 * 
		 * async function async_test(a, b) {
		 * return a + b;
		 * }
		 * 
		 * var fn_sync = util.sync(async_test);
		 * console.log(fn_sync(100, 200));
		 * ```
		 * 对于未标记为 async 的返回 promise 的函数，可以手动指定 sync 模式：
		 * ```JavaScript
		 * // async/await
		 * var util = require('util');
		 * 
		 * function async_test(a, b) {
		 * return new Promise(function (resolve, reject) {
		 * resolve(a + b);
		 * });
		 * }
		 * 
		 * var fn_sync = util.sync(async_test, true);
		 * console.log(fn_sync(100, 200));
		 * ```
		 * 
		 * @param func 给定需要包裹的方法
		 * @param async_func 指定以 async 函数方式处理 func，为 false 则自动判断
		 * @return 返回同步运行的方法
		 * 
		 * 
		 * 
		 */
		export function sync(func: Function, async_func?: boolean/** = false*/): Function;
	
		/**
		 * 
		 * @brief 查询当前引擎及各组件版本信息
		 * 
		 * ```JavaScript
		 * {
		 * "fibjs": "0.25.0",
		 * "clang": "9.1",
		 * "date": "Jun 12 2018 07:22:40",
		 * "vender": {
		 * "ev": "4.24",
		 * "expat": "2.2.5",
		 * "gd": "2.2.4",
		 * "jpeg": "8.3",
		 * "leveldb": "1.17",
		 * "mongo": "0.7",
		 * "pcre": "8.21",
		 * "png": "1.5.4",
		 * "mbedtls": "2.6.1",
		 * "snappy": "1.1.2",
		 * "sqlite": "3.23.0",
		 * "tiff": "3.9.5",
		 * "uuid": "1.6.2",
		 * "v8": "6.7.288.20",
		 * "v8-snapshot": true,
		 * "zlib": "1.2.7",
		 * "zmq": "3.1"
		 * }
		 * }
		 * ```
		 * @return 返回组件版本对象
		 * 
		 * 
		 * 
		 */
		export function buildInfo(): object;
	
	} /** end of `module util` */
	export = util
}

/** endof `module Or Internal Object` */


