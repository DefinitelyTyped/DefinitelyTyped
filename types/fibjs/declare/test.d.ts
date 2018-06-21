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
	* @brief 测试套件模块，用以定义管理测试套件
	* @detail 使用方法 ：,,```JavaScript,var test = require('test');,test.setup();,,describe('test', () => {,  before(() => {,      // setup before the whole test,  });,,  beforeEach(() => {,      // setup before each test,  });,,  after(() => {,      // cleanup after the whole test,  });,,  afterEach(() => {,      // cleanup after each test,  });,,  it('case', () => {,      assert.ok(true);,  });,,  // ignored test case,  xit('case', () => {,      assert.ok(true);,  });,,  // ignored test case,  it.skip('case', () => {,      assert.ok(true);,  });,,  // only test case,  oit('case', () => {,      assert.ok(true);,  });,,  // only test case,  it.only('case', () => {,      assert.ok(true);,  });,});,,// async function test,describe('test async', () => {,it('pass case', async() => {,  assert.ok(true);,});,,it('error case', async() => {,    throw new Error('some thing wrong!');,});,});,,// callback function test,// cannot use callback mode in jsc,describe('test callback', () => {,it('pass case', done => {,  setTimeout(() => {,    assert.ok(true);,    done();,  }, 0);,});,,it('error case', done => {,  setTimeout(() => {,    done(new Error('some thing wrong!'));,  }, 0);,});,});,,process.exit(-test.run(console.DEBUG));,```
	*/
declare module "test" {
	
	import consoleNS = require('console')
	import assertNS = require('assert')

	module test {
		
		
		/**
		 * 
		 * @brief 设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75
		 * 
		 * 
		 * 
		 */
		export const slow: number;
		
		
		/**
		 * 
		 * @brief 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
		 * 
		 * 
		 */
		
		export const assert: typeof assertNS
		
		
		
		/**
		 * 
		 * @brief 定义一个测试模块，可嵌套定义
		 * @param name 定义模块名称
		 * @param block 模块初始化代码
		 * 
		 * 
		 * 
		 */
		export function describe(name: string, block: Function): void;
	
		/**
		 * 
		 * @brief 暂停测试的模块定义，test.setup 后可使用 describe.skip 调用
		 * @param name 定义模块名称
		 * @param block 模块初始化代码
		 * 
		 * 
		 * 
		 */
		export function xdescribe(name: string, block: Function): void;
	
		/**
		 * 
		 * @brief 独立测试的模块定义，test.setup 后可使用 describe.only 调用
		 * @param name 定义模块名称
		 * @param block 模块初始化代码
		 * 
		 * 
		 * 
		 */
		export function odescribe(name: string, block: Function): void;
	
		/**
		 * 
		 * @brief 定义一个测试项目
		 * @param name 定义项目名称
		 * @param block 测试内容
		 * 
		 * 
		 * 
		 */
		export function it(name: string, block: Function): void;
	
		/**
		 * 
		 * @brief 暂停测试的项目定义，test.setup 后可使用 it.skip 调用
		 * @param name 定义项目名称
		 * @param block 测试内容
		 * 
		 * 
		 * 
		 */
		export function xit(name: string, block: Function): void;
	
		/**
		 * 
		 * @brief 独立测试的项目定义，test.setup 后可使用 it.only 调用
		 * @param name 定义项目名称
		 * @param block 测试内容
		 * 
		 * 
		 * 
		 */
		export function oit(name: string, block: Function): void;
	
		/**
		 * 
		 * @brief 定义当前测试模块进入事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function before(func: Function): void;
	
		/**
		 * 
		 * @brief 定义当前测试模块退出事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function after(func: Function): void;
	
		/**
		 * 
		 * @brief 定义当前测试模块测试项目进入事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function beforeEach(func: Function): void;
	
		/**
		 * 
		 * @brief 定义当前测试模块测试项目退出事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function afterEach(func: Function): void;
	
		/**
		 * 
		 * @brief 开始执行定义的测试模块
		 * @param loglevel 指定进行测试时的日志输出级别，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告
		 * @return 返回测试用例统计结果，正确则返回 0，错误则返回错误个数
		 * 
		 * 
		 * 
		 */
		export function run(loglevel?: number/** = undefined*/): number;
	
		/**
		 * 
		 * @brief 初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量
		 * 
		 * 
		 */
		export function setup(): void;
	
	} /** end of `module test` */
	export = test
}

/** endof `module Or Internal Object` */


