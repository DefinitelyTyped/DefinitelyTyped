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
    * @brief XmlText 对象表示元素或属性的文本内容
    * @detail XmlText 节点表示 XML 文档中的一系列纯文本。因为纯文本出现在 XML 的元素和属性中，所以 XmlText 节点通常作为 XmlElement 节点和 XmlAttr 节点的子节点出现。,,XmlText 节点继承了 XmlCharacterData 接口，通过从 XmlCharacterData 接口继承的 data 属性或从 XmlNode 接口继承的 nadevalue 属性，可以访问 XmlText 节点的文本内容。,,用从 XmlCharacterData 继承的方法或 XmlText 接口自身定义的 splitText() 方法可以操作 XmlText 节点。使用 XmlDocument 的 createTextNode 来创建一个新的 XmlText 节点。,,XmlText 节点没有子节点。,,关于从文档的子树中删除空 XmlText 节点与合并相邻的 XmlText 节点的方法，请参阅 XmlNode.normalize 方法。
    */
/// <reference path="XmlCharacterData.d.ts" />
declare class Class_XmlText extends Class_XmlCharacterData {
    
    
    
    /**
     * 
     * @brief 按照指定的 offset 把文本节点分割为两个节点
     * 
     * 该方法将在指定的 offset 处把 XmlText 节点分割成两个节点。原始的 XmlText 节点将被修改，使它包含 offset 指定的位置之前的文本内容（但不包括文本内容）。新的 XmlText 节点将被创建，用于存放从 offset 位置（包括该位置上的字符）到原字符结尾的所有字符。新的 XmlText 节点是该方法的返回值。此外，如果原始的 XmlText 节点具有 parentNode，新的 XmlText 节点将插入这个父节点，紧邻在原始节点之后。
     * 
     * XmlCDATASection 接口继承了 XmlText 接口， XmlCDATASection 节点也可以使用该方法 ，只是新创建的节点是 XmlCDATASection 节点，而不是 XmlText 节点。
     * @param offset 规定在何处分割文本节点。开始值以 0 开始
     * @return 从当前节点分割出的 Text 节点
     * 
     * 
     * 
     */
    splitText(offset: number): Class_XmlText;

} /** endof class */

/** endof `module Or Internal Object` */


