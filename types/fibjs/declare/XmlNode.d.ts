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
	* @brief XmlNode 对象是整个 DOM 的基础数据类型
	* @detail 
	*/

declare class Class_XmlNode extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点的节点类型
	 * 
	 * 不同对象的 nodeType 会返回不同的值：
	 * - XmlElement: ELEMENT_NODE(1)
	 * - XmlAttr: ATTRIBUTE_NODE(2)
	 * - XmlText: TEXT_NODE(3)
	 * - XmlCDATASection: CDATA_SECTION_NODE(4)
	 * - XmlProcessingInstruction: PROCESSING_INSTRUCTION_NODE(7)
	 * - XmlComment: COMMENT_NODE(8)
	 * - XmlDocument: DOCUMENT_NODE(9)
	 * - XmlDocumentType: DOCUMENT_TYPE_NODE(10)
	 * 
	 * 
	 * @readonly
	 * @type Integer
	 */
	
	nodeType: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点的名称，根据其类型
	 * 
	 * 不同对象的 nodeName 会返回不同的值：
	 * - XmlElement: element name
	 * - XmlAttr: 属性名称
	 * - XmlText: \#text
	 * - XmlCDATASection: \#cdata-section
	 * - XmlProcessingInstruction: 返回指定目标 target
	 * - XmlComment: \#comment
	 * - XmlDocument: \#document
	 * - XmlDocumentType: doctype 名称
	 * 
	 * 
	 * @readonly
	 * @type String
	 */
	
	nodeName: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点的名称，根据其类型
	 * 
	 * 不同对象的 nodeName 会返回不同的值：
	 * - XmlElement: null
	 * - XmlAttr: 属性的值
	 * - XmlText: 节点的内容
	 * - XmlCDATASection: 节点的内容
	 * - XmlProcessingInstruction: 返回指定内容 data
	 * - XmlComment: 注释文本
	 * - XmlDocument: null
	 * - XmlDocumentType: null
	 * 
	 * 
	 * 
	 * @type String
	 */
	
	nodeValue: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点的根元素（XmlDocument 对象）
	 * 
	 * 
	 * @readonly
	 * @type XmlDocument
	 */
	
	ownerDocument: Class_XmlDocument
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 可返回某节点的父节点
	 * 
	 * 
	 * @readonly
	 * @type XmlNode
	 */
	
	parentNode: Class_XmlNode
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回指定节点的子节点的节点列表
	 * 
	 * 
	 * @readonly
	 * @type XmlNodeList
	 */
	
	childNodes: Class_XmlNodeList
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点的首个子节点
	 * 
	 * 
	 * @readonly
	 * @type XmlNode
	 */
	
	firstChild: Class_XmlNode
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回节点的最后一个子节点
	 * 
	 * 
	 * @readonly
	 * @type XmlNode
	 */
	
	lastChild: Class_XmlNode
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回某节点之前紧跟的节点（处于同一树层级），如果没有此节点，那么该属性返回 null
	 * 
	 * 
	 * @readonly
	 * @type XmlNode
	 */
	
	previousSibling: Class_XmlNode
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回某个元素之后紧跟的节点（处于同一树层级中），如果无此节点，则属性返回 null
	 * 
	 * 
	 * @readonly
	 * @type XmlNode
	 */
	
	nextSibling: Class_XmlNode
	
	
	
	/**
	 * 
	 * @brief 查询是否存在子节点
	 * @return 存在任何子节点时返回 true，否则返回 false
	 * 
	 * 
	 * 
	 */
	hasChildNodes(): boolean;

	/**
	 * 
	 * @brief 合并相邻的 Text 节点并删除空的 Text 节点
	 * 
	 * 这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。
	 * 
	 * 
	 * 
	 */
	normalize(): void;

	/**
	 * 
	 * @brief 创建指定的节点的精确拷贝
	 * 
	 * 该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。
	 * @param deep 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点
	 * @return 返回所复制的节点
	 * 
	 * 
	 * 
	 */
	cloneNode(deep?: boolean/** = true*/): Class_XmlNode;

	/**
	 * 
	 * @brief 返回在当前节点上匹配指定的命名空间 URI 的前缀
	 * @param namespaceURI 指定匹配的命名空间 URI
	 * @return 返回匹配的前缀，未匹配到返回 null
	 * 
	 * 
	 * 
	 */
	lookupPrefix(namespaceURI: string): string;

	/**
	 * 
	 * @brief 返回在当前节点上匹配指定的前缀的命名空间 URI
	 * @param prefix 指定匹配的前缀
	 * @return 返回匹配的命名空间 URI，未匹配到返回 null
	 * 
	 * 
	 * 
	 */
	lookupNamespaceURI(prefix: string): string;

	/**
	 * 
	 * @brief 在已有的子节点前插入一个新的子节点
	 * 
	 * 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
	 * @param newChild 插入新的节点
	 * @param refChild 在此节点前插入新节点
	 * @return 返回新的子节点
	 * 
	 * 
	 * 
	 */
	insertBefore(newChild: Class_XmlNode, refChild: Class_XmlNode): Class_XmlNode;

	/**
	 * 
	 * @brief 在已有的子节点后插入一个新的子节点
	 * 
	 * 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
	 * @param newChild 插入新的节点
	 * @param refChild 在此节点后插入新节点
	 * @return 返回新的子节点
	 * 
	 * 
	 * 
	 */
	insertAfter(newChild: Class_XmlNode, refChild: Class_XmlNode): Class_XmlNode;

	/**
	 * 
	 * @brief 向节点的子节点列表的末尾添加新的子节点
	 * 
	 * 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
	 * @param newChild 指定添加的节点
	 * @return 返回这个新的子节点
	 * 
	 * 
	 * 
	 */
	appendChild(newChild: Class_XmlNode): Class_XmlNode;

	/**
	 * 
	 * @brief 将某个子节点替换为另一个
	 * 
	 * 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
	 * @param newChild 指定新的节点
	 * @param oldChild 指定被替换的节点
	 * @return 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null
	 * 
	 * 
	 * 
	 */
	replaceChild(newChild: Class_XmlNode, oldChild: Class_XmlNode): Class_XmlNode;

	/**
	 * 
	 * @brief 从子节点列表中删除某个节点
	 * @param oldChild 指定被删除的节点
	 * @return 如删除成功，此方法可返回被删除的节点，如失败，则返回 null
	 * 
	 * 
	 * 
	 */
	removeChild(oldChild: Class_XmlNode): Class_XmlNode;

} /** endof class */

/** endof `module Or Internal Object` */


