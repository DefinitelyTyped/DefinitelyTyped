/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
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

/** } /** endof `module Or Internal Object` */


