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
    * @brief 操作系统与文件系统处理模块
    * @detail 使用方法：,```JavaScript,var os = require('os');,```
    */
declare module "os" {
    

    module os {
        
        
        /**
         * 
         * @brief 查询运行环境当前时区
         * 
         * 
         */
        export const timezone: number;
        
        /**
         * 
         * @brief 查询当前运行环境行结尾标识，posix:\"\\n\"；windows:\"\\r\\n\"
         * 
         * 
         */
        export const EOL: string;
        
        /**
         * 
         * @brief 查询当前运行执行文件完整路径
         * 
         * 
         */
        export const execPath: string;
        
        
        /**
         * 
         * @brief Service 构造函数，参见 Service
         * 
         * 
         */
        export class Service extends Class_Service {}
        
        
        
        
        /**
         * 
         * @brief 查询当前运行环境主机名
         * @return 返回主机名
         * 
         * 
         * 
         */
        export function hostname(): string;
    
        /**
         * 
         * @brief 查询当前 CPU 的字节顺序
         * @return 返回字节顺序
         * 
         * 
         * 
         */
        export function endianness(): string;
    
        /**
         * 
         * @brief 查询当前运行环境操作系统名称
         * @return 返回系统名称
         * 
         * 
         * 
         */
        export function type(): string;
    
        /**
         * 
         * @brief 查询当前运行环境操作系统版本
         * @return 返回版本信息
         * 
         * 
         * 
         */
        export function release(): string;
    
        /**
         * 
         * @brief 查询当前用户目录
         * @return 返回目录字符串
         * 
         * 
         * 
         */
        export function homedir(): string;
    
        /**
         * 
         * @brief 查询当前 cpu 环境
         * @return 返回 cpu 类型，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'
         * 
         * 
         * 
         */
        export function arch(): string;
    
        /**
         * 
         * @brief 查询运行环境运行时间，以秒为单位
         * @return 返回表示时间的数值
         * 
         * 
         * 
         */
        export function uptime(): number;
    
        /**
         * 
         * @brief 查询运行环境 1分钟，5分钟，15分钟平均负载
         * @return 返回包含三个负载数据的数组
         * 
         * 
         * 
         */
        export function loadavg(): any[];
    
        /**
         * 
         * @brief 查询运行环境总内存，以字节为单位
         * @return 返回内存数据
         * 
         * 
         * 
         */
        export function totalmem(): number;
    
        /**
         * 
         * @brief 查询运行环境可用内存，以字节为单位
         * @return 返回内存数据
         * 
         * 
         * 
         */
        export function freemem(): number;
    
        /**
         * 
         * @brief 查询当前运行环境 cpu 个数和参数
         * @return 返回包含 cpu 参数的数组，每一项对应一个 cpu
         * 
         * 
         * 
         */
        export function cpus(): any[];
    
        /**
         * 
         * @brief 查询当前运行环境 cpu 个数
         * @return 返回 cpu 个数
         * 
         * 
         * 
         */
        export function cpuNumbers(): number;
    
        /**
         * 
         * @brief 查询当前运行环境临时文件目录
         * @return 返回临时文件目录
         * 
         * 
         * 
         */
        export function tmpdir(): string;
    
        /**
         * 
         * @brief 返回当前有效执行用户信息
         * @param options 用于解释结果字符串的字符编码
         * @return 当前有效执行用户信息
         * 
         * 
         * 
         */
        export function userInfo(options?: object/** = v8::Object::New(isolate)*/): object;
    
        /**
         * 
         * @brief 查询当前运行环境网络信息
         * @return 返回网卡信息
         * 
         * 
         * 
         */
        export function networkInterfaces(): object;
    
        /**
         * 
         * @brief 查询当前主机的打印机信息
         * @return 返回打印机信息
         * 
         * 
         * 
         */
        export function printerInfo(): any[];
    
        /**
         * 
         * @brief 创建一个打印机输出对象
         * @param name 打印机名称
         * @return 返回打印机输出对象
         * 
         * 
         * @async
         */
        export function openPrinter(name: string): Class_BufferedStream;
    
        /**
         * 
         * @brief 查询当前平台名称
         * @return 返回平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'
         * 
         * 
         * 
         */
        export function platform(): string;
    
        /**
         * 
         * @brief 解析时间字符串或查询运行环境当前时间
         * @param tmString 时间字符串，缺省则查询当前时间
         * @return 返回 javascript Date 对象
         * 
         * 
         * 
         */
        export function time(tmString?: string/** = ""*/): Date;
    
        /**
         * 
         * @brief 时间计算函数，根据 part 指定计算时间
         * @param d 指定用于计算 Date 对象
         * @param num 指定运算的数值
         * @param part 指定运算的时间部位，接收值为："year", "month", "day", "hour", "minute", "second"
         * @return 返回 javascript Date 对象
         * 
         * 
         * 
         */
        export function dateAdd(d: Date, num: number, part: string): Date;
    
        /**
         * 
         * @brief 查询当前进程内存使用报告
         * 
         * 内存报告生成类似以下结果：
         * ```JavaScript
         * {
         * "rss": 8622080,
         * "heapTotal": 4083456,
         * "heapUsed": 1621800,
         * "nativeObjects": 122
         * }
         * ```
         * 其中：
         * - rss 返回进程当前占用物理内存大小
         * - heapTotal 返回 v8 引擎堆内存大小
         * - heapUsed 返回 v8 引擎正在使用堆内存大小
         * - nativeObjects 返回当前有效内置对象数
         * @return 返回包含内存报告
         * 
         * 
         * 
         */
        export function memoryUsage(): object;
    
    } /** end of `module os` */
    export = os
}

/** endof `module Or Internal Object` */


