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
	* @brief x509 证书对象
	* @detail X509Cert 对象属于 crypto 模块，创建：,```JavaScript,var k = new crypto.X509Cert();,```
	*/

declare class Class_X509Cert extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的版本
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	version: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的序列号
	 * 
	 * @readonly
	 * @type String
	 */
	
	serial: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书颁发者的可分辨名称
	 * 
	 * @readonly
	 * @type String
	 */
	
	issuer: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的主题可分辨名称
	 * 
	 * @readonly
	 * @type String
	 */
	
	subject: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的生效时间
	 * 
	 * @readonly
	 * @type Date
	 */
	
	notBefore: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的到期时间
	 * 
	 * @readonly
	 * @type Date
	 */
	
	notAfter: Date
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书是否是 ca 证书
	 * 
	 * @readonly
	 * @type Boolean
	 */
	
	ca: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的 pathlen
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	pathlen: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的使用范围
	 * 
	 * 结果为全部或部分以下内容：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign
	 * 
	 * 
	 * @readonly
	 * @type String
	 */
	
	usage: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的 Netscape 证书类型
	 * 
	 * 结果为全部或部分以下内容：client, server, email, objsign, reserved, sslCA, emailCA, objCA
	 * 
	 * 
	 * @readonly
	 * @type String
	 */
	
	type: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书的公钥
	 * 
	 * @readonly
	 * @type PKey
	 */
	
	publicKey: Class_PKey
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 获取证书链中得下一个证书
	 * 
	 * @readonly
	 * @type X509Cert
	 */
	
	next: Class_X509Cert
	
	
	
	/**
	 * 
	 * @brief X509Cert 构造函数
	 * 
	 * 
	 */
	constructor();

	/**
	 * 
	 * @brief 加载一个 DER 格式的证书，可多次调用
	 * @param derCert DER 格式的证书
	 * 
	 * 
	 * 
	 */
	load(derCert: Class_Buffer): void;

	/**
	 * 
	 * @brief 加载一个 CRT/PEM/TXT 格式的证书，可多次调用
	 * 
	 * load 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
	 * @param txtCert PEM 格式的证书
	 * 
	 * 
	 * 
	 */
	load(txtCert: string): void;

	/**
	 * 
	 * @brief 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
	 * 
	 * loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
	 * @param filename 证书文件名
	 * 
	 * 
	 * 
	 */
	loadFile(filename: string): void;

	/**
	 * 
	 * @brief 加载自带的缺省根证书
	 * 此证书内容源自：http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt
	 * 
	 * 
	 */
	loadRootCerts(): void;

	/**
	 * 
	 * @brief 使用当前证书链验证给定的证书
	 * @param cert 给定需要验证的证书
	 * @return 如果验证成功则返回 True
	 * 
	 * 
	 * @async
	 */
	verify(cert: Class_X509Cert): boolean;

	/**
	 * 
	 * @brief 导出已经加载的证书
	 * @return 以数组方式导出证书链
	 * 
	 * 
	 * 
	 */
	dump(): any[];

	/**
	 * 
	 * @brief 清空已经加载的证书
	 * 
	 * 
	 */
	clear(): void;

} /** endof class */

/** endof `module Or Internal Object` */


