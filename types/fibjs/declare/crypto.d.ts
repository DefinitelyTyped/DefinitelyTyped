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
	* @brief 加密算法模块
	* @detail 使用方法：,```JavaScript,var crypto = require('crypto');,```
	*/
declare module "crypto" {
	

	module crypto {
		
		/**
		 * 
		 * @brief 指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
		 * 
		 * 
		 */
		export const AES = 1;
		
		/**
		 * 
		 * @brief 指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
		 * 
		 * 
		 */
		export const CAMELLIA = 2;
		
		/**
		 * 
		 * @brief 指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const DES = 3;
		
		/**
		 * 
		 * @brief 指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const DES_EDE = 4;
		
		/**
		 * 
		 * @brief 指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const DES_EDE3 = 5;
		
		/**
		 * 
		 * @brief 指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR
		 * 
		 * 
		 */
		export const BLOWFISH = 6;
		
		/**
		 * 
		 * @brief 指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key
		 * 
		 * 
		 */
		export const ARC4 = 7;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 ECB
		 * 
		 * 
		 */
		export const ECB = 1;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CBC
		 * 
		 * 
		 */
		export const CBC = 2;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CFB64
		 * 
		 * 
		 */
		export const CFB64 = 3;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CFB128
		 * 
		 * 
		 */
		export const CFB128 = 4;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 OFB
		 * 
		 * 
		 */
		export const OFB = 5;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CTR
		 * 
		 * 
		 */
		export const CTR = 6;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 GCM
		 * 
		 * 
		 */
		export const GCM = 7;
		
		/**
		 * 
		 * @brief 指定流密码模式
		 * 
		 * 
		 */
		export const STREAM = 8;
		
		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CCM
		 * 
		 * 
		 */
		export const CCM = 9;
		
		/**
		 * 
		 * @brief 指定填充模式为 PKCS7
		 * 
		 * 
		 */
		export const PKCS7 = 0;
		
		/**
		 * 
		 * @brief 指定填充模式为 ONE_AND_ZEROS
		 * 
		 * 
		 */
		export const ONE_AND_ZEROS = 1;
		
		/**
		 * 
		 * @brief 指定填充模式为 ZEROS_AND_LEN
		 * 
		 * 
		 */
		export const ZEROS_AND_LEN = 2;
		
		/**
		 * 
		 * @brief 指定填充模式为 ZEROS
		 * 
		 * 
		 */
		export const ZEROS = 3;
		
		/**
		 * 
		 * @brief 指定填充模式为 NOPADDING
		 * 
		 * 
		 */
		export const NOPADDING = 4;
		
		
		
		/**
		 * 
		 * @brief Cipher 构造函数，参见 Cipher
		 * 
		 * 
		 */
		export class Cipher extends Class_Cipher {}
		
		
		/**
		 * 
		 * @brief PKey 构造函数，参见 PKey
		 * 
		 * 
		 */
		export class PKey extends Class_PKey {}
		
		
		/**
		 * 
		 * @brief X509Cert 构造函数，参见 X509Cert
		 * 
		 * 
		 */
		export class X509Cert extends Class_X509Cert {}
		
		
		/**
		 * 
		 * @brief X509Crl 构造函数，参见 X509Crl
		 * 
		 * 
		 */
		export class X509Crl extends Class_X509Crl {}
		
		
		/**
		 * 
		 * @brief X509Req 构造函数，参见 X509Req
		 * 
		 * 
		 */
		export class X509Req extends Class_X509Req {}
		
		
		
		
		/**
		 * 
		 * @brief 根据给定的算法名称创建一个信息摘要对象
		 * @param algo 指定信息摘要对象的算法
		 * @return 返回信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function createHash(algo: string): Class_Digest;
	
		/**
		 * 
		 * @brief 根据给定的算法名称创建一个 hmac 信息摘要对象
		 * @param algo 指定信息摘要对象的算法
		 * @param key 二进制签名密钥
		 * @return 返回信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function createHmac(algo: string, key: Class_Buffer): Class_Digest;
	
		/**
		 * 
		 * @brief 加载一个 PEM/DER 格式的密钥文件
		 * @param filename 密钥文件名
		 * @param password 解密密码
		 * @return 返回包含密钥的对象
		 * 
		 * 
		 * 
		 */
		export function loadPKey(filename: string, password?: string/** = ""*/): Class_PKey;
	
		/**
		 * 
		 * @brief 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
		 * 
		 * loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
		 * @param filename 证书文件名
		 * @return 返回包含证书的对象
		 * 
		 * 
		 * 
		 */
		export function loadCert(filename: string): Class_X509Cert;
	
		/**
		 * 
		 * @brief 加载一个 PEM/DER 格式的撤销证书，可多次调用
		 * @param filename 撤销证书文件名
		 * @return 返回包含撤销证书的对象
		 * 
		 * 
		 * 
		 */
		export function loadCrl(filename: string): Class_X509Crl;
	
		/**
		 * 
		 * @brief 加载一个 PEM/DER 格式的证书请求，可多次调用
		 * @param filename 证书请求文件名
		 * @return 返回包含请求证书的对象
		 * 
		 * 
		 * 
		 */
		export function loadReq(filename: string): Class_X509Req;
	
		/**
		 * 
		 * @brief 生成指定尺寸的随机数，使用 havege 生成器
		 * @param size 指定生成的随机数尺寸
		 * @return 返回生成的随机数
		 * 
		 * 
		 * @async
		 */
		export function randomBytes(size: number): Class_Buffer;
	
		/**
		 * 
		 * @brief 生成指定尺寸的低强度随机数，使用快速的算法
		 * @param size 指定生成的随机数尺寸
		 * @return 返回生成的随机数
		 * 
		 * 
		 * @async
		 */
		export function simpleRandomBytes(size: number): Class_Buffer;
	
		/**
		 * 
		 * @brief 生成指定尺寸的伪随机数，使用 entropy 生成器
		 * @param size 指定生成的随机数尺寸
		 * @return 返回生成的随机数
		 * 
		 * 
		 * @async
		 */
		export function pseudoRandomBytes(size: number): Class_Buffer;
	
		/**
		 * 
		 * @brief 生成给定数据的可视化字符图像
		 * @param data 指定要展示的数据
		 * @param title 指定字符图像的标题，多字节字符会导致宽度错误
		 * @param size 字符图像尺寸
		 * @return 返回生成的可视化字符串图像
		 * 
		 * 
		 * 
		 */
		export function randomArt(data: Class_Buffer, title: string, size?: number/** = 8*/): string;
	
		/**
		 * 
		 * @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algo 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf1(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algo: number): Class_Buffer;
	
		/**
		 * 
		 * @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algoName 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf1(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algoName: string): Class_Buffer;
	
		/**
		 * 
		 * @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algo 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf2(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algo: number): Class_Buffer;
	
		/**
		 * 
		 * @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algoName 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf2(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algoName: string): Class_Buffer;
	
	} /** end of `module crypto` */
	export = crypto
}

/** endof `module Or Internal Object` */


