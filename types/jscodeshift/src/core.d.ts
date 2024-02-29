import astTypes = require("ast-types");
import nodePath = require("ast-types/lib/node-path");
import types = require("ast-types/lib/types");
import recast = require("recast");
import Collection = require("./Collection");
import template = require("./template");
import VariableDeclarator = require("./collections/VariableDeclarator");
import JSXElement = require("./collections/JSXElement");

declare namespace core {
    interface Parser {
        parse(source: string, options?: any): types.ASTNode;
    }

    interface Filters {
        JSXElement: JSXElement.FilterMethods;
        VariableDeclarator: VariableDeclarator.FilterMethods;
    }

    interface Mappings {
        JSXElement: JSXElement.MappingMethods;
    }

    interface Plugin {
        (core: Core): void;
    }

    interface FileInfo {
        /** The path to the current file. */
        path: string;
        /** The source code of the current file. */
        source: string;
    }

    interface Stats {
        /**
         * Helper function to collect data during --dry runs.
         * This function keeps a counter for how often it was called with a specific argument.
         * The result is shown in the console. Useful for finding out how many files match a criterion.
         */
        (name: string, quantity?: number): void;
    }

    type ASTPath<N = ASTNode> = nodePath.NodePath<N, N>;

    interface Core {
        (source: string, options?: Options): Collection.Collection<any>;
        (source: ASTNode | ASTNode[] | ASTPath | ASTPath[]): Collection.Collection<any>;

        registerMethods: typeof Collection.registerMethods;

        types: typeof recast.types;

        match(
            path: ASTNode | ASTPath,
            filter: ((path: ASTNode) => boolean) | ASTNode,
        ): boolean;

        /** template, bound to default parser */
        template: template.Template;

        filters: Filters;

        mappings: Mappings;

        /**
         * Utility function for registering plugins.
         *
         * Plugins are simple functions that are passed the core jscodeshift instance.
         * They should extend jscodeshift by calling `registerMethods`, etc.
         * This method guards against repeated registrations (the plugin callback will only be called once).
         */
        use(plugin: Plugin): void;

        /**
         * Returns a version of the core jscodeshift function "bound" to a specific
         * parser.
         */
        withParser(parser: string | Parser): JSCodeshift;
    }

    type JSCodeshift = Core & typeof recast.types.namedTypes & typeof recast.types.builders;
    type Collection<T = any> = Collection.Collection<T>;

    interface API {
        j: JSCodeshift;
        jscodeshift: JSCodeshift;
        stats: Stats;
        report: (msg: string) => void;
    }

    interface Options {
        [option: string]: any;
    }

    interface Transform {
        /**
         * If a string is returned and it is different from passed source, the transform is considered to be successful.
         * If a string is returned but it's the same as the source, the transform is considered to be unsuccessful.
         * If nothing is returned, the file is not supposed to be transformed (which is ok).
         */
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        (file: FileInfo, api: API, options: Options): string | null | undefined | void;
    }

    type ASTNode = astTypes.namedTypes.ASTNode;

    type AnyTypeAnnotation = astTypes.namedTypes.AnyTypeAnnotation;
    type ArrayExpression = astTypes.namedTypes.ArrayExpression;
    type ArrayPattern = astTypes.namedTypes.ArrayPattern;
    type ArrayTypeAnnotation = astTypes.namedTypes.ArrayTypeAnnotation;
    type ArrowFunctionExpression = astTypes.namedTypes.ArrowFunctionExpression;
    type AssignmentExpression = astTypes.namedTypes.AssignmentExpression;
    type AssignmentPattern = astTypes.namedTypes.AssignmentPattern;
    type AwaitExpression = astTypes.namedTypes.AwaitExpression;
    type BigIntLiteral = astTypes.namedTypes.BigIntLiteral;
    type BigIntLiteralTypeAnnotation = astTypes.namedTypes.BigIntLiteralTypeAnnotation;
    type BigIntTypeAnnotation = astTypes.namedTypes.BigIntTypeAnnotation;
    type BinaryExpression = astTypes.namedTypes.BinaryExpression;
    type BindExpression = astTypes.namedTypes.BindExpression;
    type Block = astTypes.namedTypes.Block;
    type BlockStatement = astTypes.namedTypes.BlockStatement;
    type BooleanLiteral = astTypes.namedTypes.BooleanLiteral;
    type BooleanLiteralTypeAnnotation = astTypes.namedTypes.BooleanLiteralTypeAnnotation;
    type BooleanTypeAnnotation = astTypes.namedTypes.BooleanTypeAnnotation;
    type BreakStatement = astTypes.namedTypes.BreakStatement;
    type CallExpression = astTypes.namedTypes.CallExpression;
    type CatchClause = astTypes.namedTypes.CatchClause;
    type ChainElement = astTypes.namedTypes.ChainElement;
    type ChainExpression = astTypes.namedTypes.ChainExpression;
    type ClassBody = astTypes.namedTypes.ClassBody;
    type ClassDeclaration = astTypes.namedTypes.ClassDeclaration;
    type ClassExpression = astTypes.namedTypes.ClassExpression;
    type ClassImplements = astTypes.namedTypes.ClassImplements;
    type ClassMethod = astTypes.namedTypes.ClassMethod;
    type ClassPrivateMethod = astTypes.namedTypes.ClassPrivateMethod;
    type ClassPrivateProperty = astTypes.namedTypes.ClassPrivateProperty;
    type ClassProperty = astTypes.namedTypes.ClassProperty;
    type ClassPropertyDefinition = astTypes.namedTypes.ClassPropertyDefinition;
    type Comment = astTypes.namedTypes.Comment;
    type CommentBlock = astTypes.namedTypes.CommentBlock;
    type CommentLine = astTypes.namedTypes.CommentLine;
    type ComprehensionBlock = astTypes.namedTypes.ComprehensionBlock;
    type ComprehensionExpression = astTypes.namedTypes.ComprehensionExpression;
    type ConditionalExpression = astTypes.namedTypes.ConditionalExpression;
    type ContinueStatement = astTypes.namedTypes.ContinueStatement;
    type DebuggerStatement = astTypes.namedTypes.DebuggerStatement;
    type Declaration = astTypes.namedTypes.Declaration;
    type DeclareClass = astTypes.namedTypes.DeclareClass;
    type DeclaredPredicate = astTypes.namedTypes.DeclaredPredicate;
    type DeclareExportAllDeclaration = astTypes.namedTypes.DeclareExportAllDeclaration;
    type DeclareExportDeclaration = astTypes.namedTypes.DeclareExportDeclaration;
    type DeclareFunction = astTypes.namedTypes.DeclareFunction;
    type DeclareInterface = astTypes.namedTypes.DeclareInterface;
    type DeclareModule = astTypes.namedTypes.DeclareModule;
    type DeclareModuleExports = astTypes.namedTypes.DeclareModuleExports;
    type DeclareOpaqueType = astTypes.namedTypes.DeclareOpaqueType;
    type DeclareTypeAlias = astTypes.namedTypes.DeclareTypeAlias;
    type DeclareVariable = astTypes.namedTypes.DeclareVariable;
    type Decorator = astTypes.namedTypes.Decorator;
    type Directive = astTypes.namedTypes.Directive;
    type DirectiveLiteral = astTypes.namedTypes.DirectiveLiteral;
    type DoExpression = astTypes.namedTypes.DoExpression;
    type DoWhileStatement = astTypes.namedTypes.DoWhileStatement;
    type EmptyStatement = astTypes.namedTypes.EmptyStatement;
    type EmptyTypeAnnotation = astTypes.namedTypes.EmptyTypeAnnotation;
    type EnumBooleanBody = astTypes.namedTypes.EnumBooleanBody;
    type EnumBooleanMember = astTypes.namedTypes.EnumBooleanMember;
    type EnumDeclaration = astTypes.namedTypes.EnumDeclaration;
    type EnumDefaultedMember = astTypes.namedTypes.EnumDefaultedMember;
    type EnumNumberBody = astTypes.namedTypes.EnumNumberBody;
    type EnumNumberMember = astTypes.namedTypes.EnumNumberMember;
    type EnumStringBody = astTypes.namedTypes.EnumStringBody;
    type EnumStringMember = astTypes.namedTypes.EnumStringMember;
    type EnumSymbolBody = astTypes.namedTypes.EnumSymbolBody;
    type ExistentialTypeParam = astTypes.namedTypes.ExistentialTypeParam;
    type ExistsTypeAnnotation = astTypes.namedTypes.ExistsTypeAnnotation;
    type ExportAllDeclaration = astTypes.namedTypes.ExportAllDeclaration;
    type ExportBatchSpecifier = astTypes.namedTypes.ExportBatchSpecifier;
    type ExportDeclaration = astTypes.namedTypes.ExportDeclaration;
    type ExportDefaultDeclaration = astTypes.namedTypes.ExportDefaultDeclaration;
    type ExportDefaultSpecifier = astTypes.namedTypes.ExportDefaultSpecifier;
    type ExportNamedDeclaration = astTypes.namedTypes.ExportNamedDeclaration;
    type ExportNamespaceSpecifier = astTypes.namedTypes.ExportNamespaceSpecifier;
    type ExportSpecifier = astTypes.namedTypes.ExportSpecifier;
    type Expression = astTypes.namedTypes.Expression;
    type ExpressionStatement = astTypes.namedTypes.ExpressionStatement;
    type File = astTypes.namedTypes.File;
    type Flow = astTypes.namedTypes.Flow;
    type FlowPredicate = astTypes.namedTypes.FlowPredicate;
    type FlowType = astTypes.namedTypes.FlowType;
    type ForAwaitStatement = astTypes.namedTypes.ForAwaitStatement;
    type ForInStatement = astTypes.namedTypes.ForInStatement;
    type ForOfStatement = astTypes.namedTypes.ForOfStatement;
    type ForStatement = astTypes.namedTypes.ForStatement;
    type Function = astTypes.namedTypes.Function;
    type FunctionDeclaration = astTypes.namedTypes.FunctionDeclaration;
    type FunctionExpression = astTypes.namedTypes.FunctionExpression;
    type FunctionTypeAnnotation = astTypes.namedTypes.FunctionTypeAnnotation;
    type FunctionTypeParam = astTypes.namedTypes.FunctionTypeParam;
    type GeneratorExpression = astTypes.namedTypes.GeneratorExpression;
    type GenericTypeAnnotation = astTypes.namedTypes.GenericTypeAnnotation;
    type Identifier = astTypes.namedTypes.Identifier;
    type IfStatement = astTypes.namedTypes.IfStatement;
    type Import = astTypes.namedTypes.Import;
    type ImportDeclaration = astTypes.namedTypes.ImportDeclaration;
    type ImportDefaultSpecifier = astTypes.namedTypes.ImportDefaultSpecifier;
    type ImportExpression = astTypes.namedTypes.ImportExpression;
    type ImportNamespaceSpecifier = astTypes.namedTypes.ImportNamespaceSpecifier;
    type ImportSpecifier = astTypes.namedTypes.ImportSpecifier;
    type InferredPredicate = astTypes.namedTypes.InferredPredicate;
    type InterfaceDeclaration = astTypes.namedTypes.InterfaceDeclaration;
    type InterfaceExtends = astTypes.namedTypes.InterfaceExtends;
    type InterfaceTypeAnnotation = astTypes.namedTypes.InterfaceTypeAnnotation;
    type InterpreterDirective = astTypes.namedTypes.InterpreterDirective;
    type IntersectionTypeAnnotation = astTypes.namedTypes.IntersectionTypeAnnotation;
    type JSXAttribute = astTypes.namedTypes.JSXAttribute;
    type JSXClosingElement = astTypes.namedTypes.JSXClosingElement;
    type JSXClosingFragment = astTypes.namedTypes.JSXClosingFragment;
    type JSXElement = astTypes.namedTypes.JSXElement;
    type JSXEmptyExpression = astTypes.namedTypes.JSXEmptyExpression;
    type JSXExpressionContainer = astTypes.namedTypes.JSXExpressionContainer;
    type JSXFragment = astTypes.namedTypes.JSXFragment;
    type JSXIdentifier = astTypes.namedTypes.JSXIdentifier;
    type JSXMemberExpression = astTypes.namedTypes.JSXMemberExpression;
    type JSXNamespacedName = astTypes.namedTypes.JSXNamespacedName;
    type JSXOpeningElement = astTypes.namedTypes.JSXOpeningElement;
    type JSXOpeningFragment = astTypes.namedTypes.JSXOpeningFragment;
    type JSXSpreadAttribute = astTypes.namedTypes.JSXSpreadAttribute;
    type JSXSpreadChild = astTypes.namedTypes.JSXSpreadChild;
    type JSXText = astTypes.namedTypes.JSXText;
    type LabeledStatement = astTypes.namedTypes.LabeledStatement;
    type Line = astTypes.namedTypes.Line;
    type Literal = astTypes.namedTypes.Literal;
    type LogicalExpression = astTypes.namedTypes.LogicalExpression;
    type MemberExpression = astTypes.namedTypes.MemberExpression;
    type MemberTypeAnnotation = astTypes.namedTypes.MemberTypeAnnotation;
    type MetaProperty = astTypes.namedTypes.MetaProperty;
    type MethodDefinition = astTypes.namedTypes.MethodDefinition;
    type MixedTypeAnnotation = astTypes.namedTypes.MixedTypeAnnotation;
    type ModuleSpecifier = astTypes.namedTypes.ModuleSpecifier;
    type NewExpression = astTypes.namedTypes.NewExpression;
    type Node = astTypes.namedTypes.Node;
    type Noop = astTypes.namedTypes.Noop;
    type NullableTypeAnnotation = astTypes.namedTypes.NullableTypeAnnotation;
    type NullLiteral = astTypes.namedTypes.NullLiteral;
    type NullLiteralTypeAnnotation = astTypes.namedTypes.NullLiteralTypeAnnotation;
    type NullTypeAnnotation = astTypes.namedTypes.NullTypeAnnotation;
    type NumberLiteralTypeAnnotation = astTypes.namedTypes.NumberLiteralTypeAnnotation;
    type NumberTypeAnnotation = astTypes.namedTypes.NumberTypeAnnotation;
    type NumericLiteral = astTypes.namedTypes.NumericLiteral;
    type NumericLiteralTypeAnnotation = astTypes.namedTypes.NumericLiteralTypeAnnotation;
    type ObjectExpression = astTypes.namedTypes.ObjectExpression;
    type ObjectMethod = astTypes.namedTypes.ObjectMethod;
    type ObjectPattern = astTypes.namedTypes.ObjectPattern;
    type ObjectProperty = astTypes.namedTypes.ObjectProperty;
    type ObjectTypeAnnotation = astTypes.namedTypes.ObjectTypeAnnotation;
    type ObjectTypeCallProperty = astTypes.namedTypes.ObjectTypeCallProperty;
    type ObjectTypeIndexer = astTypes.namedTypes.ObjectTypeIndexer;
    type ObjectTypeInternalSlot = astTypes.namedTypes.ObjectTypeInternalSlot;
    type ObjectTypeProperty = astTypes.namedTypes.ObjectTypeProperty;
    type ObjectTypeSpreadProperty = astTypes.namedTypes.ObjectTypeSpreadProperty;
    type OpaqueType = astTypes.namedTypes.OpaqueType;
    type OptionalCallExpression = astTypes.namedTypes.OptionalCallExpression;
    type OptionalMemberExpression = astTypes.namedTypes.OptionalMemberExpression;
    type ParenthesizedExpression = astTypes.namedTypes.ParenthesizedExpression;
    type Pattern = astTypes.namedTypes.Pattern;
    type Position = astTypes.namedTypes.Position;
    type Printable = astTypes.namedTypes.Printable;
    type PrivateName = astTypes.namedTypes.PrivateName;
    type Program = astTypes.namedTypes.Program;
    type Property = astTypes.namedTypes.Property;
    type PropertyPattern = astTypes.namedTypes.PropertyPattern;
    type QualifiedTypeIdentifier = astTypes.namedTypes.QualifiedTypeIdentifier;
    type RegExpLiteral = astTypes.namedTypes.RegExpLiteral;
    type RestElement = astTypes.namedTypes.RestElement;
    type RestProperty = astTypes.namedTypes.RestProperty;
    type ReturnStatement = astTypes.namedTypes.ReturnStatement;
    type SequenceExpression = astTypes.namedTypes.SequenceExpression;
    type SourceLocation = astTypes.namedTypes.SourceLocation;
    type Specifier = astTypes.namedTypes.Specifier;
    type SpreadElement = astTypes.namedTypes.SpreadElement;
    type SpreadElementPattern = astTypes.namedTypes.SpreadElementPattern;
    type SpreadProperty = astTypes.namedTypes.SpreadProperty;
    type SpreadPropertyPattern = astTypes.namedTypes.SpreadPropertyPattern;
    type Statement = astTypes.namedTypes.Statement;
    type StringLiteral = astTypes.namedTypes.StringLiteral;
    type StringLiteralTypeAnnotation = astTypes.namedTypes.StringLiteralTypeAnnotation;
    type StringTypeAnnotation = astTypes.namedTypes.StringTypeAnnotation;
    type Super = astTypes.namedTypes.Super;
    type SwitchCase = astTypes.namedTypes.SwitchCase;
    type SwitchStatement = astTypes.namedTypes.SwitchStatement;
    type SymbolTypeAnnotation = astTypes.namedTypes.SymbolTypeAnnotation;
    type TaggedTemplateExpression = astTypes.namedTypes.TaggedTemplateExpression;
    type TemplateElement = astTypes.namedTypes.TemplateElement;
    type TemplateLiteral = astTypes.namedTypes.TemplateLiteral;
    type ThisExpression = astTypes.namedTypes.ThisExpression;
    type ThisTypeAnnotation = astTypes.namedTypes.ThisTypeAnnotation;
    type ThrowStatement = astTypes.namedTypes.ThrowStatement;
    type TryStatement = astTypes.namedTypes.TryStatement;
    type TSAnyKeyword = astTypes.namedTypes.TSAnyKeyword;
    type TSArrayType = astTypes.namedTypes.TSArrayType;
    type TSAsExpression = astTypes.namedTypes.TSAsExpression;
    type TSBigIntKeyword = astTypes.namedTypes.TSBigIntKeyword;
    type TSBooleanKeyword = astTypes.namedTypes.TSBooleanKeyword;
    type TSCallSignatureDeclaration = astTypes.namedTypes.TSCallSignatureDeclaration;
    type TSConditionalType = astTypes.namedTypes.TSConditionalType;
    type TSConstructorType = astTypes.namedTypes.TSConstructorType;
    type TSConstructSignatureDeclaration = astTypes.namedTypes.TSConstructSignatureDeclaration;
    type TSDeclareFunction = astTypes.namedTypes.TSDeclareFunction;
    type TSDeclareMethod = astTypes.namedTypes.TSDeclareMethod;
    type TSEnumDeclaration = astTypes.namedTypes.TSEnumDeclaration;
    type TSEnumMember = astTypes.namedTypes.TSEnumMember;
    type TSExportAssignment = astTypes.namedTypes.TSExportAssignment;
    type TSExpressionWithTypeArguments = astTypes.namedTypes.TSExpressionWithTypeArguments;
    type TSExternalModuleReference = astTypes.namedTypes.TSExternalModuleReference;
    type TSFunctionType = astTypes.namedTypes.TSFunctionType;
    type TSHasOptionalTypeAnnotation = astTypes.namedTypes.TSHasOptionalTypeAnnotation;
    type TSHasOptionalTypeParameterInstantiation = astTypes.namedTypes.TSHasOptionalTypeParameterInstantiation;
    type TSHasOptionalTypeParameters = astTypes.namedTypes.TSHasOptionalTypeParameters;
    type TSImportEqualsDeclaration = astTypes.namedTypes.TSImportEqualsDeclaration;
    type TSImportType = astTypes.namedTypes.TSImportType;
    type TSIndexedAccessType = astTypes.namedTypes.TSIndexedAccessType;
    type TSIndexSignature = astTypes.namedTypes.TSIndexSignature;
    type TSInferType = astTypes.namedTypes.TSInferType;
    type TSInterfaceBody = astTypes.namedTypes.TSInterfaceBody;
    type TSInterfaceDeclaration = astTypes.namedTypes.TSInterfaceDeclaration;
    type TSIntersectionType = astTypes.namedTypes.TSIntersectionType;
    type TSLiteralType = astTypes.namedTypes.TSLiteralType;
    type TSMappedType = astTypes.namedTypes.TSMappedType;
    type TSMethodSignature = astTypes.namedTypes.TSMethodSignature;
    type TSModuleBlock = astTypes.namedTypes.TSModuleBlock;
    type TSModuleDeclaration = astTypes.namedTypes.TSModuleDeclaration;
    type TSNamedTupleMember = astTypes.namedTypes.TSNamedTupleMember;
    type TSNamespaceExportDeclaration = astTypes.namedTypes.TSNamespaceExportDeclaration;
    type TSNeverKeyword = astTypes.namedTypes.TSNeverKeyword;
    type TSNonNullExpression = astTypes.namedTypes.TSNonNullExpression;
    type TSNullKeyword = astTypes.namedTypes.TSNullKeyword;
    type TSNumberKeyword = astTypes.namedTypes.TSNumberKeyword;
    type TSObjectKeyword = astTypes.namedTypes.TSObjectKeyword;
    type TSOptionalType = astTypes.namedTypes.TSOptionalType;
    type TSParameterProperty = astTypes.namedTypes.TSParameterProperty;
    type TSParenthesizedType = astTypes.namedTypes.TSParenthesizedType;
    type TSPropertySignature = astTypes.namedTypes.TSPropertySignature;
    type TSQualifiedName = astTypes.namedTypes.TSQualifiedName;
    type TSRestType = astTypes.namedTypes.TSRestType;
    type TSStringKeyword = astTypes.namedTypes.TSStringKeyword;
    type TSSymbolKeyword = astTypes.namedTypes.TSSymbolKeyword;
    type TSThisType = astTypes.namedTypes.TSThisType;
    type TSTupleType = astTypes.namedTypes.TSTupleType;
    type TSType = astTypes.namedTypes.TSType;
    type TSTypeAliasDeclaration = astTypes.namedTypes.TSTypeAliasDeclaration;
    type TSTypeAnnotation = astTypes.namedTypes.TSTypeAnnotation;
    type TSTypeAssertion = astTypes.namedTypes.TSTypeAssertion;
    type TSTypeLiteral = astTypes.namedTypes.TSTypeLiteral;
    type TSTypeOperator = astTypes.namedTypes.TSTypeOperator;
    type TSTypeParameter = astTypes.namedTypes.TSTypeParameter;
    type TSTypeParameterDeclaration = astTypes.namedTypes.TSTypeParameterDeclaration;
    type TSTypeParameterInstantiation = astTypes.namedTypes.TSTypeParameterInstantiation;
    type TSTypePredicate = astTypes.namedTypes.TSTypePredicate;
    type TSTypeQuery = astTypes.namedTypes.TSTypeQuery;
    type TSTypeReference = astTypes.namedTypes.TSTypeReference;
    type TSUndefinedKeyword = astTypes.namedTypes.TSUndefinedKeyword;
    type TSUnionType = astTypes.namedTypes.TSUnionType;
    type TSUnknownKeyword = astTypes.namedTypes.TSUnknownKeyword;
    type TSVoidKeyword = astTypes.namedTypes.TSVoidKeyword;
    type TupleTypeAnnotation = astTypes.namedTypes.TupleTypeAnnotation;
    type TypeAlias = astTypes.namedTypes.TypeAlias;
    type TypeAnnotation = astTypes.namedTypes.TypeAnnotation;
    type TypeCastExpression = astTypes.namedTypes.TypeCastExpression;
    type TypeofTypeAnnotation = astTypes.namedTypes.TypeofTypeAnnotation;
    type TypeParameter = astTypes.namedTypes.TypeParameter;
    type TypeParameterDeclaration = astTypes.namedTypes.TypeParameterDeclaration;
    type TypeParameterInstantiation = astTypes.namedTypes.TypeParameterInstantiation;
    type UnaryExpression = astTypes.namedTypes.UnaryExpression;
    type UnionTypeAnnotation = astTypes.namedTypes.UnionTypeAnnotation;
    type UpdateExpression = astTypes.namedTypes.UpdateExpression;
    type VariableDeclaration = astTypes.namedTypes.VariableDeclaration;
    type VariableDeclarator = astTypes.namedTypes.VariableDeclarator;
    type Variance = astTypes.namedTypes.Variance;
    type VoidTypeAnnotation = astTypes.namedTypes.VoidTypeAnnotation;
    type WhileStatement = astTypes.namedTypes.WhileStatement;
    type WithStatement = astTypes.namedTypes.WithStatement;
    type YieldExpression = astTypes.namedTypes.YieldExpression;
}

declare const core: core.JSCodeshift;
export = core;
