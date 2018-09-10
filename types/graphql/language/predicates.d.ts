import { ASTNode } from "./ast";

export function isDefinitionNode(node: ASTNode): boolean;

export function isExecutableDefinitionNode(node: ASTNode): boolean;

export function isSelectionNode(node: ASTNode): boolean;

export function isValueNode(node: ASTNode): boolean;

export function isTypeNode(node: ASTNode): boolean;

export function isTypeSystemDefinitionNode(node: ASTNode): boolean;

export function isTypeDefinitionNode(node: ASTNode): boolean;

export function isTypeSystemExtensionNode(node: ASTNode): boolean;

export function isTypeExtensionNode(node: ASTNode): boolean;
