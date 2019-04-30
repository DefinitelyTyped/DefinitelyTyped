import {
    ASTNode,
    DefinitionNode,
    ExecutableDefinitionNode,
    SelectionNode,
    ValueNode,
    TypeNode,
    TypeSystemDefinitionNode,
    TypeDefinitionNode,
    TypeSystemExtensionNode,
    TypeExtensionNode,
} from "./ast";

export function isDefinitionNode(node: ASTNode): node is DefinitionNode;

export function isExecutableDefinitionNode(node: ASTNode): node is ExecutableDefinitionNode;

export function isSelectionNode(node: ASTNode): node is SelectionNode;

export function isValueNode(node: ASTNode): node is ValueNode;

export function isTypeNode(node: ASTNode): node is TypeNode;

export function isTypeSystemDefinitionNode(node: ASTNode): node is TypeSystemDefinitionNode;

export function isTypeDefinitionNode(node: ASTNode): node is TypeDefinitionNode;

export function isTypeSystemExtensionNode(node: ASTNode): node is TypeSystemExtensionNode;

export function isTypeExtensionNode(node: ASTNode): node is TypeExtensionNode;
