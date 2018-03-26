import * as graphql from 'graphql';

///////////////////////////
// graphql               //
///////////////////////////
function graphql_tests() {
    // TODO
}

///////////////////////////
// graphql/language      //
///////////////////////////
function language_ast_tests() {
    // TODO
}

function language_index_tests() {
    // TODO
}

function language_kinds_tests() {
    // TODO
}

function language_lexer_tests() {
    // TODO
}

function language_location_tests() {
    const { Source, getLocation } = graphql;
    const source = new Source('query { hello }');
    const loc = getLocation(source, 6);
}

function language_parser_tests() {
    // TODO
}

function language_printer_tests() {
    // TODO
}

function language_source_tests() {
    const { Source } = graphql;

    new Source('{ hello }');
    new Source('{ hello }', 'source name');
    new Source('{ hello }', 'source name', { line: 1, column: 2 });
}

function language_visitor_tests() {
    const { parse, visit } = graphql;
    const ast = parse('{ hello }');

    visit(ast, {
        enter(node, key, parent, path, ancestors) { },
        leave: {
            Document(node) { },
            Field(node) { },
        }
    });

    visit(ast, {
        Document(node) { },
        Field: {
            enter() { }
        }
    });
}

///////////////////////////
// graphql/type          //
///////////////////////////
function type_definition_tests() {
    // TODO
}

function type_directives_tests() {
    // TODO
}

function type_introspection_tests() {
    // TODO
}

function type_scalars_tests() {
    // TODO
}

function type_schema_tests() {
    // TODO
}

///////////////////////////
// graphql/validation    //
///////////////////////////
function validation_specifiedRules_tests() {
    // TODO
}

function validation_validate_tests() {
    // TODO
}

///////////////////////////
// graphql/execution     //
///////////////////////////
function execution_execute_tests() {
    // TODOS
}

function execution_values_tests() {
    // TODOS
}

///////////////////////////
// graphql/error         //
///////////////////////////
function error_GraphQLError() {
    // TODOS
}

function error_formatError() {
    // TODOS
}

function error_locatedError() {
    // TODOS
}

function error_syntaxError() {
    // TODOS
}

///////////////////////////
// graphql/utilities     //
///////////////////////////
function utilities_TypeInfo_tests() {
    // TODOS
}

function utilities_assertValidName_tests() {
    // TODOS
}

function utilities_astFromValue_tests() {
    // TODOS
}

function utilities_buildASTSchema_tests() {
    // TODOS
}

function utilities_buildClientSchema_tests() {
    // TODOS
}

function utilities_concatAST_tests() {
    // TODOS
}

function utilities_extendSchema_tests() {
    // TODOS
}

function utilities_getOperationAST_tests() {
    // TODOS
}

function utilities_index_tests() {
    // TODOS
}

function utilities_introspectionQuery_tests() {
    // TODOS
}

function utilities_isValidJSValue_tests() {
    // TODOS
}

function utilities_isValidLiteralValue_tests() {
    // TODOS
}

function utilities_schemaPrinter_tests() {
    // TODOS
}

function utilities_separateOperations_tests() {
    // TODOS
}

function utilities_typeComparators_tests() {
    // TODOS
}

function utilities_typeFromAST_tests() {
    // TODOS
}

function utilities_valueFromAST_tests() {
    // TODOS
}
