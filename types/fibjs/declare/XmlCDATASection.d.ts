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
    * @brief XmlCDATASection 对象表示文档中的 CDATA 区段
    * @detail XmlCDATASection 接口是 XmlText 接口的子接口，没有定义任何自己的属性和方法。通过从 XmlNode 接口继承 nodeValue 属性，或通过从 XmlCharacterData 接口继承 data 属性，可以访问 CDATA Section 的文本内容。,,虽然通常可以把 XmlCDATASection 节点作为 XmlText 节点处理，但要注意 XmlNode 的 normalize 方法不并入相邻的 CDATA 部分。,,使用 XmlDocument 的 createXmlCDATASection 方法来创建一个 XmlCDATASection 。,,CDATA 区段包含了不会被解析器解析的文本。CDATA 区段中的标签不会被视为标记，同时实体也不会被展开。主要的目的是为了包含诸如 XML 片段之类的材料，而无需转义所有的分隔符。,,在一个 CDATA 中唯一被识别的分隔符是 "]]>"，它可标示 CDATA 区段的结束。CDATA 区段不能进行嵌套。
    */
/// <reference path="XmlText.d.ts" />
declare class Class_XmlCDATASection extends Class_XmlText {
    
    
    
} /** endof class */

/** endof `module Or Internal Object` */


