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
    * @brief XmlDocument 对象代表整个 XML 文档
    * @detail XmlDocument 对象是一棵文档树的根，可为我们提供对文档数据的最初（或最顶层）的访问入口。,用于元素节点、文本节点、注释、处理指令等均无法存在于 XmlDocument 之外， XmlDocument 对象同样提供了创建这些对象的方法。 XmlNode 对象提供了一个 ownerDocument 属性，此属性可把它们与在其中创建它们的 XmlDocument 关联起来。
    */
/// <reference path="XmlNode.d.ts" />
declare class Class_XmlDocument extends Class_XmlNode {
    
    /**
     * class prop 
     *
     * 
     * @brief 返回用于文档的编码（在解析时）
     * 
     * 
     * @readonly
     * @type String
     */
    
    inputEncoding: string
    
    /**
     * class prop 
     *
     * 
     * @brief 设置或返回文档是否为 standalone
     * 
     * 
     * 
     * @type Boolean
     */
    
    xmlStandalone: boolean
    
    /**
     * class prop 
     *
     * 
     * @brief 设置或返回文档的 XML 版本
     * 
     * 
     * 
     * @type String
     */
    
    xmlVersion: string
    
    /**
     * class prop 
     *
     * 
     * @brief 返回与文档相关的文档类型声明（Document Type Declaration）
     * 
     * 对于没有 DTD 的 XML 文档，则返回 null。此属性可提供对 XmlDocumentType 对象（ XmlDocument 的一个子节点）的直接访问。
     * 
     * 
     * @readonly
     * @type XmlDocumentType
     */
    
    doctype: Class_XmlDocumentType
    
    /**
     * class prop 
     *
     * 
     * @brief 返回文档的根节点
     * 
     * 
     * @readonly
     * @type XmlElement
     */
    
    documentElement: Class_XmlElement
    
    /**
     * class prop 
     *
     * 
     * @brief 返回 HTML 文档的 head 节点，仅在 html 模式有效
     * 
     * 
     * @readonly
     * @type XmlElement
     */
    
    head: Class_XmlElement
    
    /**
     * class prop 
     *
     * 
     * @brief 返回 HTML 文档的 title 节点的内容，仅在 html 模式有效
     * 
     * 
     * @readonly
     * @type String
     */
    
    title: string
    
    /**
     * class prop 
     *
     * 
     * @brief 返回 HTML 文档的 body 节点，仅在 html 模式有效
     * 
     * 
     * @readonly
     * @type XmlElement
     */
    
    body: Class_XmlElement
    
    
    
    /**
     * 
     * @brief 构造一个 XmlDocument 对象
     * @param type 指定文档对象的类型，缺省为 "text/xml"，若需要处理 html 则需要指定 "text/html"
     * 
     * 
     * 
     */
    constructor(type?: string/** = "text/xml"*/);

    /**
     * 
     * @brief 通过解析一个 XML/HTML 字符串来组成该文档，不支持多语种
     * @param source 要解析的 XML/HTML 文本，取决于文档创建时的类型
     * 
     * 
     * 
     */
    load(source: string): void;

    /**
     * 
     * @brief 通过解析一个二进制 XML/HTML 字符串来组成该文档，并根据语种自动转换
     * @param source 要解析的 XML/HTML 文本，取决于文档创建时的类型
     * 
     * 
     * 
     */
    load(source: Class_Buffer): void;

    /**
     * 
     * @brief 返回带有指定名称的所有元素的一个节点列表
     * 
     * 该方法将返回一个 XmlNodeList 对象（可以作为只读数组处理），该对象存放文档中具有指定标签名的所有 XmlElement 节点，它们存放的顺序就是在源文档中出现的顺序。 XmlNodeList 对象是“活”的，即如果在文档中添加或删除了指定标签名的元素，它的内容会自动进行必要的更新。
     * @param tagName 需检索的标签名。值 "*" 匹配所有的标签
     * @return 文档树中具有指定标记的 XmlElement 节点的 XmlNodeList 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。
     * 
     * 
     * 
     */
    getElementsByTagName(tagName: string): Class_XmlNodeList;

    /**
     * 
     * @brief 返回带有指定命名空间和名称的所有元素的一个节点列表
     * 
     * 该方法与 getElementsByTagName() 方法相似，只是它根据命名空间和名称来检索元素。
     * @param namespaceURI 指定检索的命名空间 URI。值 "*" 可匹配所有的标签
     * @param localName 需检索的标签名。值 "*" 匹配所有的标签
     * @return 文档树中具有指定标记的 XmlElement 节点的 XmlNodeList 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。
     * 
     * 
     * 
     */
    getElementsByTagNameNS(namespaceURI: string, localName: string): Class_XmlNodeList;

    /**
     * 
     * @brief 返回拥有指定 id 属性的元素
     * 
     * 该方法将遍历文档的子孙节点，返回一个 XmlElement 节点对象，表示第一个具有指定 id 属性的文档元素。。
     * @param id 需检索的 id
     * @return 节点树中具有指定 id 属性的 XmlElement 节点
     * 
     * 
     * 
     */
    getElementById(id: string): Class_XmlElement;

    /**
     * 
     * @brief 返回带有指定 class 名称的所有元素的一个节点列表
     * 
     * 该方法将返回一个 XmlNodeList 对象（可以作为只读数组处理），该对象存放文档中具有指定 class 名的所有 XmlElement 节点，它们存放的顺序就是在源文档中出现的顺序。 XmlNodeList 对象是“活”的，即如果在文档中添加或删除了指定标签名的元素，它的内容会自动进行必要的更新。
     * @param className 需检索的 class 名称
     * @return 文档树中具有指定 class 名的 XmlElement 节点的 XmlNodeList 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。
     * 
     * 
     * 
     */
    getElementsByClassName(className: string): Class_XmlNodeList;

    /**
     * 
     * @brief 创建元素节点
     * @param tagName 指定元素节点规定名称
     * @return 返回新创建的 XmlElement 节点，具有指定的标签名
     * 
     * 
     * 
     */
    createElement(tagName: string): Class_XmlElement;

    /**
     * 
     * @brief 创建带有指定命名空间的元素节点
     * @param namespaceURI 指定元素节点命名空间 URI
     * @param qualifiedName 指定元素节点规定名称
     * @return 返回新创建的 XmlElement 节点，具有指定的标签名
     * 
     * 
     * 
     */
    createElementNS(namespaceURI: string, qualifiedName: string): Class_XmlElement;

    /**
     * 
     * @brief 创建文本节点
     * @param data 指定此节点的文本
     * @return 返回新创建的 XmlText 节点，表示指定的 data 字符串
     * 
     * 
     * 
     */
    createTextNode(data: string): Class_XmlText;

    /**
     * 
     * @brief 创建注释节点
     * @param data 指定此节点的注释文本
     * @return 返回新创建的 XmlComment 节点，注释文本为指定的 data
     * 
     * 
     * 
     */
    createComment(data: string): Class_XmlComment;

    /**
     * 
     * @brief 创建 XmlCDATASection 节点
     * @param data 指定此节点规定 CDATA 数据
     * @return 返回新创建的 XmlCDATASection 节点，内容为指定的 data
     * 
     * 
     * 
     */
    createCDATASection(data: string): Class_XmlCDATASection;

    /**
     * 
     * @brief 创建 XmlProcessingInstruction 节点
     * @param target 指定处理指令的目标
     * @param data 指定处理指令的内容文本
     * @return 新创建的 ProcessingInstruction 节点
     * 
     * 
     * 
     */
    createProcessingInstruction(target: string, data: string): Class_XmlProcessingInstruction;

} /** endof class */

/** endof `module Or Internal Object` */


