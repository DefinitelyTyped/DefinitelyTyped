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
    * @brief 文件系统处理模块
    * @detail 使用方法：,```JavaScript,var fs = require('fs');,```
    */
declare module "fs" {
    

    module fs {
        
        /**
         * 
         * @brief seek 方式常量，移动到绝对位置
         * 
         * 
         */
        export const SEEK_SET = 0;
        
        /**
         * 
         * @brief seek 方式常量，移动到当前位置的相对位置
         * 
         * 
         */
        export const SEEK_CUR = 1;
        
        /**
         * 
         * @brief seek 方式常量，移动到文件结尾的相对位置
         * 
         * 
         */
        export const SEEK_END = 2;
        
        
        /**
         * 
         * ! fs模块的常量对象
         * 
         * 
         */
        export const constants: Object;
        
        
        
        
        /**
         * 
         * @brief 查询指定的文件或目录是否存在
         * @param path 指定要查询的路径
         * @return 返回 True 表示文件或目录存在
         * 
         * 
         * @async
         */
        export function exists(path: string): boolean;
    
        /**
         * 
         * @brief 查询用户对指定的文件的权限
         * @param path 指定要查询的路径
         * @param mode 指定查询的权限,默认为文件是否存在
         * 
         * 
         * @async
         */
        export function access(path: string, mode?: number/** = 0*/): void;
    
        /**
         * 
         * @brief 创建硬链接文件, windows 下不支持此方法
         * @param oldPath 源文件
         * @param newPath 将要被创建的文件
         * 
         * 
         * @async
         */
        export function link(oldPath: string, newPath: string): void;
    
        /**
         * 
         * @brief 删除指定的文件
         * @param path 指定要删除的路径
         * 
         * 
         * @async
         */
        export function unlink(path: string): void;
    
        /**
         * 
         * @brief 创建一个目录
         * @param path 指定要创建的目录名
         * @param mode 指定文件权限，Windows 忽略此参数
         * 
         * 
         * @async
         */
        export function mkdir(path: string, mode?: number/** = 0777*/): void;
    
        /**
         * 
         * @brief 删除一个目录
         * @param path 指定要删除的目录名
         * 
         * 
         * @async
         */
        export function rmdir(path: string): void;
    
        /**
         * 
         * @brief 重新命名一个文件
         * @param from 指定更名的文件
         * @param to 指定要修改的新文件名
         * 
         * 
         * @async
         */
        export function rename(from: string, to: string): void;
    
        /**
         * 
         * @brief 复制一个文件
         * @param from 指定更名的文件
         * @param to 指定要修改的新文件名
         * 
         * 
         * @async
         */
        export function copy(from: string, to: string): void;
    
        /**
         * 
         * @brief 设置指定文件的访问权限，Windows 不支持此方法
         * @param path 指定操作的文件
         * @param mode 指定设定的访问权限
         * 
         * 
         * @async
         */
        export function chmod(path: string, mode: number): void;
    
        /**
         * 
         * @brief 设置指定文件的访问权限，若文件是软连接则不改变指向文件的权限，只在macOS、BSD 系列平台上可用
         * @param path 指定操作的文件
         * @param mode 指定设定的访问权限
         * 
         * 
         * @async
         */
        export function lchmod(path: string, mode: number): void;
    
        /**
         * 
         * @brief 设置指定文件的拥有者，Windows 不支持此方法
         * @param path 指定设置的文件
         * @param uid 文件拥有者用户id
         * @param gid 文件拥有者组id
         * 
         * 
         * @async
         */
        export function chown(path: string, uid: number, gid: number): void;
    
        /**
         * 
         * @brief 设置指定文件的拥有者，如果指定的文件是软连接则不会改变其指向文件的拥有者，Windows 不支持此方法
         * @param path 指定设置的文件
         * @param uid 文件拥有者用户id
         * @param gid 文件拥有者组id
         * 
         * 
         * @async
         */
        export function lchown(path: string, uid: number, gid: number): void;
    
        /**
         * 
         * @brief 查询指定文件的基础信息
         * @param path 指定查询的文件
         * @return 返回文件的基础信息
         * 
         * 
         * @async
         */
        export function stat(path: string): Class_Stat;
    
        /**
         * 
         * @brief 查询指定文件的基础信息, 和stat不同的是, 当path是一个软连接的时候，返回的将是这个软连接的信息而不是指向的文件的信息
         * @param path 指定查询的文件
         * @return 返回文件的基础信息
         * 
         * 
         * @async
         */
        export function lstat(path: string): Class_Stat;
    
        /**
         * 
         * @brief 读取指定的软连接文件, windows 下不支持此方法
         * @param path 指定读取的软连接文件
         * @return 返回软连接指向的文件名
         * 
         * 
         * @async
         */
        export function readlink(path: string): string;
    
        /**
         * 
         * @brief 返回指定路径的绝对路径，如果指定路径中包含相对路径也会被展开
         * @param path 指定读取的路径
         * @return 返回处理后的绝对路径
         * 
         * 
         * @async
         */
        export function realpath(path: string): string;
    
        /**
         * 
         * @brief 创建软连接文件
         * @param target 目标文件，可以是文件、目录、或不存在的路径
         * @param linkpath 将被创建的软连接文件
         * @param type 创建的软连接类型, 可选类型为'file', 'dir', 'junction', 默认为'file', 该参数只在windows上有效，当为'junction'的时候将要创建的目标路径linkpath必须为绝对路径, 而target则会被自动转化为绝对路径。
         * 
         * 
         * @async
         */
        export function symlink(target: string, linkpath: string, type?: string/** = "file"*/): void;
    
        /**
         * 
         * @brief 修改文件尺寸,如果指定的长度大于源文件大小则用'\0'填充，否则多于的文件内容将丢失
         * @param path 指定被修改文件的路径
         * @param len 指定修改后文件的大小
         * 
         * 
         * @async
         */
        export function truncate(path: string, len: number): void;
    
        /**
         * 
         * @brief 根据文件描述符，读取文件内容
         * @param fd 文件描述符
         * @param buffer 读取结果写入的 Buffer 对象
         * @param offset Buffer 写入偏移量， 默认为 0
         * @param length 文件读取字节数，默认为 0
         * @param position 文件读取位置，默认为当前文件位置
         * @return 实际读取的字节数
         * 
         * 
         * @async
         */
        export function read(fd: number, buffer: Class_Buffer, offset?: number/** = 0*/, length?: number/** = 0*/, position?: number/** = -1*/): number;
    
        /**
         * 
         * @brief 根据文件描述符，改变文件模式。只在 POSIX 系统有效。
         * @param fd 文件描述符
         * @param mode 文件的模式
         * 
         * 
         * @async
         */
        export function fchmod(fd: number, mode: number): void;
    
        /**
         * 
         * @brief 根据文件描述符，改变所有者。只在 POSIX 系统有效。
         * @param fd 文件描述符
         * @param uid 用户id
         * @param gid 组id
         * 
         * 
         * @async
         */
        export function fchown(fd: number, uid: number, gid: number): void;
    
        /**
         * 
         * @brief 根据文件描述符，同步数据到磁盘
         * @param fd 文件描述符
         * 
         * 
         * @async
         */
        export function fdatasync(fd: number): void;
    
        /**
         * 
         * @brief 根据文件描述符，同步数据到磁盘
         * @param fd 文件描述符
         * 
         * 
         * @async
         */
        export function fsync(fd: number): void;
    
        /**
         * 
         * @brief 读取指定目录的文件信息
         * @param path 指定查询的目录
         * @return 返回目录的文件信息数组
         * 
         * 
         * @async
         */
        export function readdir(path: string): any[];
    
        /**
         * 
         * @brief 打开文件，用于读取，写入，或者同时读写
         * 
         * 参数 flags 支持的方式如下：
         * - 'r' 只读方式，文件不存在则抛出错误。
         * - 'r+' 读写方式，文件不存在则抛出错误。
         * - 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
         * - 'w+' 读写方式，文件不存在则自动创建。
         * - 'a' 只写添加方式，文件不存在则自动创建。
         * - 'a+' 读写添加方式，文件不存在则自动创建。
         * @param fname 指定文件名
         * @param flags 指定文件打开方式，缺省为 "r"，只读方式
         * @return 返回打开的文件对象
         * 
         * 
         * @async
         */
        export function openFile(fname: string, flags?: string/** = "r"*/): Class_SeekableStream;
    
        /**
         * 
         * @brief 打开文件描述符
         * 
         * 参数 flags 支持的方式如下：
         * - 'r' 只读方式，文件不存在则抛出错误。
         * - 'r+' 读写方式，文件不存在则抛出错误。
         * - 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
         * - 'w+' 读写方式，文件不存在则自动创建。
         * - 'a' 只写添加方式，文件不存在则自动创建。
         * - 'a+' 读写添加方式，文件不存在则自动创建。
         * @param fname 指定文件名
         * @param flags 指定文件打开方式，缺省为 "r"，只读方式
         * @param mode 当创建文件的时候，指定文件的模式，默认 0666
         * @return 返回打开的文件描述符
         * 
         * 
         * @async
         */
        export function open(fname: string, flags?: string/** = "r"*/, mode?: number/** = 0666*/): number;
    
        /**
         * 
         * @brief 关闭文件描述符
         * @param fd 文件描述符
         * 
         * 
         * @async
         */
        export function close(fd: number): void;
    
        /**
         * 
         * @brief 打开文本文件，用于读取，写入，或者同时读写
         * 
         * 参数 flags 支持的方式如下：
         * - 'r' 只读方式，文件不存在则抛出错误。
         * - 'r+' 读写方式，文件不存在则抛出错误。
         * - 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
         * - 'w+' 读写方式，文件不存在则自动创建。
         * - 'a' 只写添加方式，文件不存在则自动创建。
         * - 'a+' 读写添加方式，文件不存在则自动创建。
         * @param fname 指定文件名
         * @param flags 指定文件打开方式，缺省为 "r"，只读方式
         * @return 返回打开的文件对象
         * 
         * 
         * @async
         */
        export function openTextStream(fname: string, flags?: string/** = "r"*/): Class_BufferedStream;
    
        /**
         * 
         * @brief 打开文本文件，并读取内容
         * @param fname 指定文件名
         * @return 返回文件文本内容
         * 
         * 
         * @async
         */
        export function readTextFile(fname: string): string;
    
        /**
         * 
         * @brief 打开二进制文件，并读取内容
         * @param fname 指定文件名
         * @param encoding 指定解码方式，缺省不解码
         * @return 返回文件文本内容
         * 
         * 
         * @async
         */
        export function readFile(fname: string, encoding?: string/** = ""*/): any;
    
        /**
         * 
         * @brief 打开文件，以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:"\n"；windows:"\r\n"
         * @param fname 指定文件名
         * @param maxlines 指定此次读取的最大行数，缺省读取全部文本行
         * @return 返回读取的文本行数组，若无数据可读，或者连接中断，空数组
         * 
         * 
         * 
         */
        export function readLines(fname: string, maxlines?: number/** = -1*/): any[];
    
        /**
         * 
         * @brief 创建文本文件，并写入内容
         * @param fname 指定文件名
         * @param txt 指定要写入的字符串
         * 
         * 
         * @async
         */
        export function writeTextFile(fname: string, txt: string): void;
    
        /**
         * 
         * @brief 创建二进制文件，并写入内容
         * @param fname 指定文件名
         * @param data 指定要写入的二进制数据
         * 
         * 
         * @async
         */
        export function writeFile(fname: string, data: Class_Buffer): void;
    
        /**
         * 
         * @brief 创建二进制文件，并写入内容
         * @param fname 指定文件名
         * @param data 指定要写入的二进制数据
         * 
         * 
         * @async
         */
        export function appendFile(fname: string, data: Class_Buffer): void;
    
        /**
         * 
         * @brief 设置 zip 虚拟文件映射
         * @param fname 指定映射路径
         * @param data 指定映射的 zip 文件数据
         * 
         * 
         * 
         */
        export function setZipFS(fname: string, data: Class_Buffer): void;
    
        /**
         * 
         * @brief 清除 zip 虚拟文件映射
         * @param fname 指定映射路径，缺省清除全部缓存
         * 
         * 
         * 
         */
        export function clearZipFS(fname?: string/** = ""*/): void;
    
    } /** end of `module fs` */
    export = fs
}

/** endof `module Or Internal Object` */


