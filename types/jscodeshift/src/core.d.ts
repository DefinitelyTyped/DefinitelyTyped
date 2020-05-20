import nodes = require("ast-types/gen/nodes");
import recast = require("recast");
import Collection = require("./Collection");
import template = require("./template");
import VariableDeclarator = require("./collections/VariableDeclarator");
import JSXElement = require("./collections/JSXElement");

declare namespace core {
    type Parser = recast.Parser;

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
        /** The absolute path to the current file. */
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

    type ASTPath<N = ASTNode> = recast.NodePath<N, N>;

    interface Core {
        (source: string, options?: Options): Collection.Collection<any>;
        (source: ASTNode | ASTNode[] | ASTPath | ASTPath[]): Collection.Collection<any>;

        registerMethods: typeof Collection.registerMethods;

        types: typeof recast.default.types;

        match(
            path: ASTNode | ASTPath,
            filter: ((path: ASTNode) => boolean) | ASTNode
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

    type JSCodeshift = Core & recast.NamedTypes & recast.Builders;
    type Collection =  Collection.Collection<any>;

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
        (file: FileInfo, api: API, options: Options): string | null | undefined | void;
    }

    type ASTNode = nodes.ASTNode;

    type AnyTypeAnnotation = nodes.AnyTypeAnnotation;
    type ArrayExpression = nodes.ArrayExpression;
    type ArrayPattern = nodes.ArrayPattern;
    type ArrayTypeAnnotation = nodes.ArrayTypeAnnotation;
    type ArrowFunctionExpression = nodes.ArrowFunctionExpression;
    type AssignmentExpression = nodes.AssignmentExpression;
    type AssignmentPattern = nodes.AssignmentPattern;
    type AwaitExpression = nodes.AwaitExpression;
    type BigIntLiteral = nodes.BigIntLiteral;
    type BinaryExpression = nodes.BinaryExpression;
    type BindExpression = nodes.BindExpression;
    type Block = nodes.Block;
    type BlockStatement = nodes.BlockStatement;
    type BooleanLiteral = nodes.BooleanLiteral;
    type BooleanLiteralTypeAnnotation = nodes.BooleanLiteralTypeAnnotation;
    type BooleanTypeAnnotation = nodes.BooleanTypeAnnotation;
    type BreakStatement = nodes.BreakStatement;
    type CallExpression = nodes.CallExpression;
    type CatchClause = nodes.CatchClause;
    type ClassBody = nodes.ClassBody;
    type ClassDeclaration = nodes.ClassDeclaration;
    type ClassExpression = nodes.ClassExpression;
    type ClassImplements = nodes.ClassImplements;
    type ClassMethod = nodes.ClassMethod;
    type ClassPrivateMethod = nodes.ClassPrivateMethod;
    type ClassPrivateProperty = nodes.ClassPrivateProperty;
    type ClassProperty = nodes.ClassProperty;
    type ClassPropertyDefinition = nodes.ClassPropertyDefinition;
    type Comment = nodes.Comment;
    type CommentBlock = nodes.CommentBlock;
    type CommentLine = nodes.CommentLine;
    type ComprehensionBlock = nodes.ComprehensionBlock;
    type ComprehensionExpression = nodes.ComprehensionExpression;
    type ConditionalExpression = nodes.ConditionalExpression;
    type ContinueStatement = nodes.ContinueStatement;
    type DebuggerStatement = nodes.DebuggerStatement;
    type Declaration = nodes.Declaration;
    type DeclareClass = nodes.DeclareClass;
    type DeclaredPredicate = nodes.DeclaredPredicate;
    type DeclareExportAllDeclaration = nodes.DeclareExportAllDeclaration;
    type DeclareExportDeclaration = nodes.DeclareExportDeclaration;
    type DeclareFunction = nodes.DeclareFunction;
    type DeclareInterface = nodes.DeclareInterface;
    type DeclareModule = nodes.DeclareModule;
    type DeclareModuleExports = nodes.DeclareModuleExports;
    type DeclareOpaqueType = nodes.DeclareOpaqueType;
    type DeclareTypeAlias = nodes.DeclareTypeAlias;
    type DeclareVariable = nodes.DeclareVariable;
    type Decorator = nodes.Decorator;
    type Directive = nodes.Directive;
    type DirectiveLiteral = nodes.DirectiveLiteral;
    type DoExpression = nodes.DoExpression;
    type DoWhileStatement = nodes.DoWhileStatement;
    type EmptyStatement = nodes.EmptyStatement;
    type EmptyTypeAnnotation = nodes.EmptyTypeAnnotation;
    type ExistentialTypeParam = nodes.ExistentialTypeParam;
    type ExistsTypeAnnotation = nodes.ExistsTypeAnnotation;
    type ExportAllDeclaration = nodes.ExportAllDeclaration;
    type ExportBatchSpecifier = nodes.ExportBatchSpecifier;
    type ExportDeclaration = nodes.ExportDeclaration;
    type ExportDefaultDeclaration = nodes.ExportDefaultDeclaration;
    type ExportDefaultSpecifier = nodes.ExportDefaultSpecifier;
    type ExportNamedDeclaration = nodes.ExportNamedDeclaration;
    type ExportNamespaceSpecifier = nodes.ExportNamespaceSpecifier;
    type ExportSpecifier = nodes.ExportSpecifier;
    type Expression = nodes.Expression;
    type ExpressionStatement = nodes.ExpressionStatement;
    type File = nodes.File;
    type Flow = nodes.Flow;
    type FlowPredicate = nodes.FlowPredicate;
    type FlowType = nodes.FlowType;
    type ForAwaitStatement = nodes.ForAwaitStatement;
    type ForInStatement = nodes.ForInStatement;
    type ForOfStatement = nodes.ForOfStatement;
    type ForStatement = nodes.ForStatement;
    type Function = nodes.Function;
    type FunctionDeclaration = nodes.FunctionDeclaration;
    type FunctionExpression = nodes.FunctionExpression;
    type FunctionTypeAnnotation = nodes.FunctionTypeAnnotation;
    type FunctionTypeParam = nodes.FunctionTypeParam;
    type GeneratorExpression = nodes.GeneratorExpression;
    type GenericTypeAnnotation = nodes.GenericTypeAnnotation;
    type Identifier = nodes.Identifier;
    type IfStatement = nodes.IfStatement;
    type Import = nodes.Import;
    type ImportDeclaration = nodes.ImportDeclaration;
    type ImportDefaultSpecifier = nodes.ImportDefaultSpecifier;
    type ImportNamespaceSpecifier = nodes.ImportNamespaceSpecifier;
    type ImportSpecifier = nodes.ImportSpecifier;
    type InferredPredicate = nodes.InferredPredicate;
    type InterfaceDeclaration = nodes.InterfaceDeclaration;
    type InterfaceExtends = nodes.InterfaceExtends;
    type InterfaceTypeAnnotation = nodes.InterfaceTypeAnnotation;
    type InterpreterDirective = nodes.InterpreterDirective;
    type IntersectionTypeAnnotation = nodes.IntersectionTypeAnnotation;
    type JSXAttribute = nodes.JSXAttribute;
    type JSXClosingElement = nodes.JSXClosingElement;
    type JSXClosingFragment = nodes.JSXClosingFragment;
    type JSXElement = nodes.JSXElement;
    type JSXEmptyExpression = nodes.JSXEmptyExpression;
    type JSXExpressionContainer = nodes.JSXExpressionContainer;
    type JSXFragment = nodes.JSXFragment;
    type JSXIdentifier = nodes.JSXIdentifier;
    type JSXMemberExpression = nodes.JSXMemberExpression;
    type JSXNamespacedName = nodes.JSXNamespacedName;
    type JSXOpeningElement = nodes.JSXOpeningElement;
    type JSXOpeningFragment = nodes.JSXOpeningFragment;
    type JSXSpreadAttribute = nodes.JSXSpreadAttribute;
    type JSXSpreadChild = nodes.JSXSpreadChild;
    type JSXText = nodes.JSXText;
    type LabeledStatement = nodes.LabeledStatement;
    type Line = nodes.Line;
    type Literal = nodes.Literal;
    type LogicalExpression = nodes.LogicalExpression;
    type MemberExpression = nodes.MemberExpression;
    type MemberTypeAnnotation = nodes.MemberTypeAnnotation;
    type MetaProperty = nodes.MetaProperty;
    type MethodDefinition = nodes.MethodDefinition;
    type MixedTypeAnnotation = nodes.MixedTypeAnnotation;
    type ModuleSpecifier = nodes.ModuleSpecifier;
    type NewExpression = nodes.NewExpression;
    type Node = nodes.Node;
    type Noop = nodes.Noop;
    type NullableTypeAnnotation = nodes.NullableTypeAnnotation;
    type NullLiteral = nodes.NullLiteral;
    type NullLiteralTypeAnnotation = nodes.NullLiteralTypeAnnotation;
    type NullTypeAnnotation = nodes.NullTypeAnnotation;
    type NumberLiteralTypeAnnotation = nodes.NumberLiteralTypeAnnotation;
    type NumberTypeAnnotation = nodes.NumberTypeAnnotation;
    type NumericLiteral = nodes.NumericLiteral;
    type NumericLiteralTypeAnnotation = nodes.NumericLiteralTypeAnnotation;
    type ObjectExpression = nodes.ObjectExpression;
    type ObjectMethod = nodes.ObjectMethod;
    type ObjectPattern = nodes.ObjectPattern;
    type ObjectProperty = nodes.ObjectProperty;
    type ObjectTypeAnnotation = nodes.ObjectTypeAnnotation;
    type ObjectTypeCallProperty = nodes.ObjectTypeCallProperty;
    type ObjectTypeIndexer = nodes.ObjectTypeIndexer;
    type ObjectTypeInternalSlot = nodes.ObjectTypeInternalSlot;
    type ObjectTypeProperty = nodes.ObjectTypeProperty;
    type ObjectTypeSpreadProperty = nodes.ObjectTypeSpreadProperty;
    type OpaqueType = nodes.OpaqueType;
    type OptionalCallExpression = nodes.OptionalCallExpression;
    type OptionalMemberExpression = nodes.OptionalMemberExpression;
    type ParenthesizedExpression = nodes.ParenthesizedExpression;
    type Pattern = nodes.Pattern;
    type Position = nodes.Position;
    type Printable = nodes.Printable;
    type PrivateName = nodes.PrivateName;
    type Program = nodes.Program;
    type Property = nodes.Property;
    type PropertyPattern = nodes.PropertyPattern;
    type QualifiedTypeIdentifier = nodes.QualifiedTypeIdentifier;
    type RegExpLiteral = nodes.RegExpLiteral;
    type RestElement = nodes.RestElement;
    type RestProperty = nodes.RestProperty;
    type ReturnStatement = nodes.ReturnStatement;
    type SequenceExpression = nodes.SequenceExpression;
    type SourceLocation = nodes.SourceLocation;
    type Specifier = nodes.Specifier;
    type SpreadElement = nodes.SpreadElement;
    type SpreadElementPattern = nodes.SpreadElementPattern;
    type SpreadProperty = nodes.SpreadProperty;
    type SpreadPropertyPattern = nodes.SpreadPropertyPattern;
    type Statement = nodes.Statement;
    type StringLiteral = nodes.StringLiteral;
    type StringLiteralTypeAnnotation = nodes.StringLiteralTypeAnnotation;
    type StringTypeAnnotation = nodes.StringTypeAnnotation;
    type Super = nodes.Super;
    type SwitchCase = nodes.SwitchCase;
    type SwitchStatement = nodes.SwitchStatement;
    type TaggedTemplateExpression = nodes.TaggedTemplateExpression;
    type TemplateElement = nodes.TemplateElement;
    type TemplateLiteral = nodes.TemplateLiteral;
    type ThisExpression = nodes.ThisExpression;
    type ThisTypeAnnotation = nodes.ThisTypeAnnotation;
    type ThrowStatement = nodes.ThrowStatement;
    type TryStatement = nodes.TryStatement;
    type TSAnyKeyword = nodes.TSAnyKeyword;
    type TSArrayType = nodes.TSArrayType;
    type TSAsExpression = nodes.TSAsExpression;
    type TSBooleanKeyword = nodes.TSBooleanKeyword;
    type TSCallSignatureDeclaration = nodes.TSCallSignatureDeclaration;
    type TSConditionalType = nodes.TSConditionalType;
    type TSConstructorType = nodes.TSConstructorType;
    type TSConstructSignatureDeclaration = nodes.TSConstructSignatureDeclaration;
    type TSDeclareFunction = nodes.TSDeclareFunction;
    type TSDeclareMethod = nodes.TSDeclareMethod;
    type TSEnumDeclaration = nodes.TSEnumDeclaration;
    type TSEnumMember = nodes.TSEnumMember;
    type TSExportAssignment = nodes.TSExportAssignment;
    type TSExpressionWithTypeArguments = nodes.TSExpressionWithTypeArguments;
    type TSExternalModuleReference = nodes.TSExternalModuleReference;
    type TSFunctionType = nodes.TSFunctionType;
    type TSHasOptionalTypeAnnotation = nodes.TSHasOptionalTypeAnnotation;
    type TSHasOptionalTypeParameters = nodes.TSHasOptionalTypeParameters;
    type TSImportEqualsDeclaration = nodes.TSImportEqualsDeclaration;
    type TSIndexedAccessType = nodes.TSIndexedAccessType;
    type TSIndexSignature = nodes.TSIndexSignature;
    type TSInferType = nodes.TSInferType;
    type TSInterfaceBody = nodes.TSInterfaceBody;
    type TSInterfaceDeclaration = nodes.TSInterfaceDeclaration;
    type TSIntersectionType = nodes.TSIntersectionType;
    type TSLiteralType = nodes.TSLiteralType;
    type TSMappedType = nodes.TSMappedType;
    type TSMethodSignature = nodes.TSMethodSignature;
    type TSModuleBlock = nodes.TSModuleBlock;
    type TSModuleDeclaration = nodes.TSModuleDeclaration;
    type TSNamespaceExportDeclaration = nodes.TSNamespaceExportDeclaration;
    type TSNeverKeyword = nodes.TSNeverKeyword;
    type TSNonNullExpression = nodes.TSNonNullExpression;
    type TSNullKeyword = nodes.TSNullKeyword;
    type TSNumberKeyword = nodes.TSNumberKeyword;
    type TSObjectKeyword = nodes.TSObjectKeyword;
    type TSOptionalType = nodes.TSOptionalType;
    type TSParameterProperty = nodes.TSParameterProperty;
    type TSParenthesizedType = nodes.TSParenthesizedType;
    type TSPropertySignature = nodes.TSPropertySignature;
    type TSQualifiedName = nodes.TSQualifiedName;
    type TSRestType = nodes.TSRestType;
    type TSStringKeyword = nodes.TSStringKeyword;
    type TSSymbolKeyword = nodes.TSSymbolKeyword;
    type TSThisType = nodes.TSThisType;
    type TSTupleType = nodes.TSTupleType;
    type TSType = nodes.TSType;
    type TSTypeAliasDeclaration = nodes.TSTypeAliasDeclaration;
    type TSTypeAnnotation = nodes.TSTypeAnnotation;
    type TSTypeAssertion = nodes.TSTypeAssertion;
    type TSTypeLiteral = nodes.TSTypeLiteral;
    type TSTypeOperator = nodes.TSTypeOperator;
    type TSTypeParameter = nodes.TSTypeParameter;
    type TSTypeParameterDeclaration = nodes.TSTypeParameterDeclaration;
    type TSTypeParameterInstantiation = nodes.TSTypeParameterInstantiation;
    type TSTypePredicate = nodes.TSTypePredicate;
    type TSTypeQuery = nodes.TSTypeQuery;
    type TSTypeReference = nodes.TSTypeReference;
    type TSUndefinedKeyword = nodes.TSUndefinedKeyword;
    type TSUnionType = nodes.TSUnionType;
    type TSUnknownKeyword = nodes.TSUnknownKeyword;
    type TSVoidKeyword = nodes.TSVoidKeyword;
    type TupleTypeAnnotation = nodes.TupleTypeAnnotation;
    type TypeAlias = nodes.TypeAlias;
    type TypeAnnotation = nodes.TypeAnnotation;
    type TypeCastExpression = nodes.TypeCastExpression;
    type TypeofTypeAnnotation = nodes.TypeofTypeAnnotation;
    type TypeParameter = nodes.TypeParameter;
    type TypeParameterDeclaration = nodes.TypeParameterDeclaration;
    type TypeParameterInstantiation = nodes.TypeParameterInstantiation;
    type UnaryExpression = nodes.UnaryExpression;
    type UnionTypeAnnotation = nodes.UnionTypeAnnotation;
    type UpdateExpression = nodes.UpdateExpression;
    type VariableDeclaration = nodes.VariableDeclaration;
    type VariableDeclarator = nodes.VariableDeclarator;
    type Variance = nodes.Variance;
    type VoidTypeAnnotation = nodes.VoidTypeAnnotation;
    type WhileStatement = nodes.WhileStatement;
    type WithStatement = nodes.WithStatement;
    type YieldExpression = nodes.YieldExpression;
}

declare const core: core.JSCodeshift;
export = core;
