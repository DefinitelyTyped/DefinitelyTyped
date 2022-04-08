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
    * @brief XmlElement 对象表示 XML 文档中的元素
    * @detail 
    */
/// <reference path="XmlNode.d.ts" />
declare class Class_XmlElement extends Class_XmlNode {
    
    /**
     * class prop 
     *
     * 
     * @brief 查询元素的命名空间的 URI。如果选定的节点无命名空间，则该属性返回 NULL
     * 
     * 
     * @readonly
     * @type String
     */
    
    namespaceURI: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询和设置元素的命名空间前缀。如果选定的节点无命名空间，则该属性返回 NULL
     * 
     * 
     * 
     * @type String
     */
    
    prefix: string
    
    /**
     * class prop 
     *
     * 
     * @brief 查询元素的本地名称。如果选定的节点无命名空间，则该属性等同于 nodeName
     * 
     * 
     * @readonly
     * @type String
     */
    
    localName: string
    
    /**
     * class prop 
     *
     * 
     * @brief 返回元素的标签名
     * 
     * 
     * @readonly
     * @type String
     */
    
    tagName: string
    
    /**
     * class prop 
     *
     * 
     * ! 查询和设置元素的 id 属性
     * 
     * 
     * 
     * @type String
     */
    
    id: string
    
    /**
     * class prop 
     *
     * 
     * ! 查询和设置选定元素的文本。查询时，返回元素节点内所有文本节点的值；设置时，删除所有子节点，并用单个文本节点来替换它们。
     * 
     * 
     * 
     * @type String
     */
    
    textContent: string
    
    /**
     * class prop 
     *
     * 
     * ! 查询和设置选定元素的 HTML 文本，仅在 html 模式有效。查询时，返回元素节点内所有子节点的 HTML 编码；设置时，删除所有子节点，并用指定的 HTML 解码后替换它们。
     * 
     * 
     * 
     * @type String
     */
    
    innerHTML: string
    
    /**
     * class prop 
     *
     * 
     * ! 查询和设置元素的 class 属性，仅在 html 模式有效
     * 
     * 
     * 
     * @type String
     */
    
    className: string
    
    /**
     * class prop 
     *
     * 
     * @brief 返回包含被选节点属性的 NamedNodeMap。如果被选节点不是元素，则该属性返回 NULL。
     * 
     * 
     * @readonly
     * @type XmlNamedNodeMap
     */
    
    attributes: Class_XmlNamedNodeMap
    
    
    
    /**
     * 
     * @brief 通过名称查询属性的值
     * @param name 指定查询的属性名
     * @return 返回属性的值
     * 
     * 
     * 
     */
    getAttribute(name: string): string;

    /**
     * 
     * @brief 通过命名空间 URI 和名称来获取属性值
     * @param namespaceURI 指定查询的命名空间 URI
     * @param localName 指定查询的属性名
     * @return 返回属性的值
     * 
     * 
     * 
     */
    getAttributeNS(namespaceURI: string, localName: string): string;

    /**
     * 
     * @brief 创建或改变某个新属性
     * 
     * 该方法把指定的属性设置为指定的值。如果不存在具有指定名称的属性，该方法将创建一个新属性
     * @param name 指定要设置的属性名
     * @param value 指定要设置的属性值
     * 
     * 
     * 
     */
    setAttribute(name: string, value: string): void;

    /**
     * 
     * @brief 创建或改变具有命名空间的属性
     * 
     * 该方法与 setAttribute 方法类似，只是要创建或设置的属性由命名空间 URI 和限定名（由名字空间前缀、冒号和名字空间中的本地名构成）共同指定。除了可以改变一个属性的值以外，使用该方法还可以改变属性的名字空间前缀
     * @param namespaceURI 指定要设置的命名空间 URI
     * @param qualifiedName 指定要设置的属性名
     * @param value 指定要设置的属性值
     * 
     * 
     * 
     */
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;

    /**
     * 
     * @brief 通过名称删除指定的属性
     * @param name 指定删除的属性名
     * 
     * 
     * 
     */
    removeAttribute(name: string): void;

    /**
     * 
     * @brief 通过命名空间和名称删除指定的属性
     * @param namespaceURI 指定要删除的命名空间 URI
     * @param localName 指定删除的属性名
     * 
     * 
     * 
     */
    removeAttributeNS(namespaceURI: string, localName: string): void;

    /**
     * 
     * @brief 查询当前节点是否拥有指定名称的属性
     * @param name 指定查询的属性名称
     * @return 如果当前元素节点拥有指定属性，则返回 true，否则返回 false
     * 
     * 
     * 
     */
    hasAttribute(name: string): boolean;

    /**
     * 
     * @brief 查询当前节点是否拥有指定命名空间和名称的属性
     * @param namespaceURI 指定要查询的命名空间 URI
     * @param localName 指定查询的属性名称
     * @return 如果当前元素节点拥有指定属性，则返回 true，否则返回 false
     * 
     * 
     * 
     */
    hasAttributeNS(namespaceURI: string, localName: string): boolean;

    /**
     * 
     * @brief 返回拥有指定名称的所有元素的 XmlNodeList
     * 
     * 该方法将遍历指定元素的子孙节点，返回一个 XmlElement 节点的 XmlNodeList 对象，表示所有具有指定标签名的文档元素。元素在返回的数组中的顺序就是它们出现在文档源代码中的顺序。
     * 
     * XmlDocument 接口也定义了 getElementsByTagName 方法，它与该方法相似，但遍历整个文档，而不是遍历某个元素的子孙节点。
     * @param tagName 需检索的标签名。值 "*" 匹配所有的标签
     * @return 节点树中具有指定标记的 XmlElement 节点的 XmlNodeList 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。
     * 
     * 
     * 
     */
    getElementsByTagName(tagName: string): Class_XmlNodeList;

    /**
     * 
     * @brief 返回拥有指定命名空间和名称的所有元素的 XmlNodeList
     * 
     * 该方法与 getElementsByTagName 方法相似，只是想获取的元素的标记名被指定为命名空间 URI 和在命名空间中定义的本地名的组合。
     * @param namespaceURI 指定要查询的命名空间 URI
     * @param localName 需检索的标签名。值 "*" 匹配所有的标签
     * @return 节点树中具有指定标记的 XmlElement 节点的 XmlNodeList 集合。返回的元素节点的顺序就是它们在源文档中出现的顺序。
     * 
     * 
     * 
     */
    getElementsByTagNameNS(namespaceURI: string, localName: string): Class_XmlNodeList;

    /**
     * 
     * @brief 返回拥有指定 id 属性的元素
     * 
     * 该方法将遍历指定元素的子孙节点，返回一个 XmlElement 节点对象，表示第一个具有指定 id 属性的文档元素。。
     * 
     * XmlDocument 接口也定义了 getElementsByTagName 方法，它与该方法相似，但遍历整个文档，而不是遍历某个元素的子孙节点。
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

} /** endof class */

/** endof `module Or Internal Object` */


