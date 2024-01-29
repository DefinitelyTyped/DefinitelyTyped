import { Client, PrestoQueryError, PrestoRequestError } from "presto-client";

const client = new Client({
    user: "test",
    timeout: 60,
});

client.execute({
    query: "SELECT count(*) as cnt FROM tblname WHERE ...",
    catalog: "hive",
    schema: "default",
    source: "nodejs-client",
    timeout: 60,
    state: (error, query_id, stats) => {
        // do something with query stats
    },
    columns: (error, columns) => {
        // do something with data
        for (const column of columns) {
            console.log(column.type);
            console.log(column.typeSignature.arguments);
            console.log(column.typeSignature.rawType);
            console.log(column.typeSignature.literalArguments);
            console.log(column.typeSignature.typeArguments);
        }
    },
    data: (error, data, columns, stats) => {
        // do something with data
    },
    retry: () => {
        // do something when query retries
    },
    success: (error, stats) => {
        // do something now that query is done
    },
    error: error => {
        // handle the error
    },
});

const requestError: PrestoRequestError = {
    message: "execution error:SQL statement is empty",
    error: undefined,
    code: 400,
};

const prestoQueryError: PrestoQueryError = {
    message: "line 1:8: Unexpected parameters (varchar(1), integer) for function pow. Expected: pow(double, double) ",
    errorCode: 1,
    errorName: "SYNTAX_ERROR",
    errorType: "USER_ERROR",
    boolean: false,
    errorLocation: { lineNumber: 1, columnNumber: 8 },
    failureInfo: {
        type: "com.facebook.presto.sql.analyzer.SemanticException",
        message:
            "line 1:8: Unexpected parameters (varchar(1), integer) for function pow. Expected: pow(double, double) ",
        suppressed: [],
        stack: [
            "com.facebook.presto.sql.analyzer.ExpressionAnalyzer.resolveFunction(ExpressionAnalyzer.java:1787)",
            "com.facebook.presto.sql.analyzer.ExpressionAnalyzer$Visitor.visitFunctionCall(ExpressionAnalyzer.java:1071)",
            "com.facebook.presto.sql.analyzer.ExpressionAnalyzer$Visitor.visitFunctionCall(ExpressionAnalyzer.java:380)",
            "com.facebook.presto.sql.tree.FunctionCall.accept(FunctionCall.java:136)",
            "com.facebook.presto.sql.tree.StackableAstVisitor.process(StackableAstVisitor.java:26)",
            "com.facebook.presto.sql.analyzer.ExpressionAnalyzer$Visitor.process(ExpressionAnalyzer.java:403)",
            "com.facebook.presto.sql.analyzer.ExpressionAnalyzer.analyze(ExpressionAnalyzer.java:341)",
            "com.facebook.presto.sql.analyzer.ExpressionAnalyzer.analyzeExpression(ExpressionAnalyzer.java:1876)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.analyzeExpression(StatementAnalyzer.java:2748)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.analyzeSelect(StatementAnalyzer.java:2573)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.visitQuerySpecification(StatementAnalyzer.java:1642)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.visitQuerySpecification(StatementAnalyzer.java:339)",
            "com.facebook.presto.sql.tree.QuerySpecification.accept(QuerySpecification.java:138)",
            "com.facebook.presto.sql.tree.AstVisitor.process(AstVisitor.java:27)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:353)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:361)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.visitQuery(StatementAnalyzer.java:1115)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.visitQuery(StatementAnalyzer.java:339)",
            "com.facebook.presto.sql.tree.Query.accept(Query.java:105)",
            "com.facebook.presto.sql.tree.AstVisitor.process(AstVisitor.java:27)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:353)",
            "com.facebook.presto.sql.analyzer.StatementAnalyzer.analyze(StatementAnalyzer.java:331)",
            "com.facebook.presto.sql.analyzer.Analyzer.analyzeSemantic(Analyzer.java:97)",
            "com.facebook.presto.sql.analyzer.BuiltInQueryAnalyzer.analyze(BuiltInQueryAnalyzer.java:80)",
            "com.facebook.presto.execution.SqlQueryExecution.<init>(SqlQueryExecution.java:203)",
            "com.facebook.presto.execution.SqlQueryExecution.<init>(SqlQueryExecution.java:107)",
            "com.facebook.presto.execution.SqlQueryExecution$SqlQueryExecutionFactory.createQueryExecution(SqlQueryExecution.java:941)",
            "com.facebook.presto.dispatcher.LocalDispatchQueryFactory.lambda$createDispatchQuery$0(LocalDispatchQueryFactory.java:167)",
            "com.google.common.util.concurrent.TrustedListenableFutureTask$TrustedFutureInterruptibleTask.runInterruptibly(TrustedListenableFutureTask.java:125)",
            "com.google.common.util.concurrent.InterruptibleTask.run(InterruptibleTask.java:57)",
            "com.google.common.util.concurrent.TrustedListenableFutureTask.run(TrustedListenableFutureTask.java:78)",
            "java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)",
            "java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)",
            "java.base/java.lang.Thread.run(Thread.java:829)",
        ],
        errorLocation: { lineNumber: 1, columnNumber: 8 },
    },
};

const trinoQueryError: PrestoQueryError = {
    message: "line 1:8: Unexpected parameters (varchar(1), integer) for function pow. Expected: pow(double, double)",
    errorCode: 6,
    errorName: "FUNCTION_NOT_FOUND",
    errorType: "USER_ERROR",
    errorLocation: { lineNumber: 1, columnNumber: 8 },
    failureInfo: {
        type: "io.trino.spi.TrinoException",
        message:
            "line 1:8: Unexpected parameters (varchar(1), integer) for function pow. Expected: pow(double, double)",
        cause: {
            type: "io.trino.spi.TrinoException",
            message: "Unexpected parameters (varchar(1), integer) for function pow. Expected: pow(double, double)",
            suppressed: [],
            stack: [
                "io.trino.metadata.FunctionResolver.resolveFunction(FunctionResolver.java:196)",
                "io.trino.metadata.MetadataManager.resolvedFunctionInternal(MetadataManager.java:2146)",
                "io.trino.metadata.MetadataManager.lambda$resolvedFunctionInternal$51(MetadataManager.java:2141)",
                "java.base/java.util.Optional.orElseGet(Optional.java:364)",
                "io.trino.metadata.MetadataManager.resolvedFunctionInternal(MetadataManager.java:2141)",
                "io.trino.metadata.MetadataManager.resolveFunction(MetadataManager.java:2113)",
                "io.trino.tracing.TracingMetadata.resolveFunction(TracingMetadata.java:1104)",
                "io.trino.sql.analyzer.ExpressionAnalyzer$Visitor.visitFunctionCall(ExpressionAnalyzer.java:1257)",
                "io.trino.sql.analyzer.ExpressionAnalyzer$Visitor.visitFunctionCall(ExpressionAnalyzer.java:581)",
                "io.trino.sql.tree.FunctionCall.accept(FunctionCall.java:121)",
                "io.trino.sql.tree.StackableAstVisitor.process(StackableAstVisitor.java:27)",
                "io.trino.sql.analyzer.ExpressionAnalyzer$Visitor.process(ExpressionAnalyzer.java:604)",
                "io.trino.sql.analyzer.ExpressionAnalyzer.analyze(ExpressionAnalyzer.java:485)",
                "io.trino.sql.analyzer.ExpressionAnalyzer.analyzeExpression(ExpressionAnalyzer.java:3440)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.analyzeExpression(StatementAnalyzer.java:4605)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.analyzeSelectSingleColumn(StatementAnalyzer.java:4414)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.analyzeSelect(StatementAnalyzer.java:4200)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuerySpecification(StatementAnalyzer.java:2941)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuerySpecification(StatementAnalyzer.java:482)",
                "io.trino.sql.tree.QuerySpecification.accept(QuerySpecification.java:155)",
                "io.trino.sql.tree.AstVisitor.process(AstVisitor.java:27)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:499)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:507)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuery(StatementAnalyzer.java:1458)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuery(StatementAnalyzer.java:482)",
                "io.trino.sql.tree.Query.accept(Query.java:107)",
                "io.trino.sql.tree.AstVisitor.process(AstVisitor.java:27)",
                "io.trino.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:499)",
                "io.trino.sql.analyzer.StatementAnalyzer.analyze(StatementAnalyzer.java:461)",
                "io.trino.sql.analyzer.Analyzer.analyze(Analyzer.java:97)",
                "io.trino.sql.analyzer.Analyzer.analyze(Analyzer.java:86)",
                "io.trino.execution.SqlQueryExecution.analyze(SqlQueryExecution.java:271)",
                "io.trino.execution.SqlQueryExecution.<init>(SqlQueryExecution.java:206)",
                "io.trino.execution.SqlQueryExecution$SqlQueryExecutionFactory.createQueryExecution(SqlQueryExecution.java:845)",
                "io.trino.dispatcher.LocalDispatchQueryFactory.lambda$createDispatchQuery$0(LocalDispatchQueryFactory.java:154)",
                "io.trino.$gen.Trino_415____20230525_231607_2.call(Unknown Source)",
                "com.google.common.util.concurrent.TrustedListenableFutureTask$TrustedFutureInterruptibleTask.runInterruptibly(TrustedListenableFutureTask.java:131)",
                "com.google.common.util.concurrent.InterruptibleTask.run(InterruptibleTask.java:74)",
                "com.google.common.util.concurrent.TrustedListenableFutureTask.run(TrustedListenableFutureTask.java:82)",
                "java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)",
                "java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)",
                "java.base/java.lang.Thread.run(Thread.java:833)",
            ],
        },
        suppressed: [],
        stack: [
            "io.trino.sql.analyzer.ExpressionAnalyzer$Visitor.visitFunctionCall(ExpressionAnalyzer.java:1269)",
            "io.trino.sql.analyzer.ExpressionAnalyzer$Visitor.visitFunctionCall(ExpressionAnalyzer.java:581)",
            "io.trino.sql.tree.FunctionCall.accept(FunctionCall.java:121)",
            "io.trino.sql.tree.StackableAstVisitor.process(StackableAstVisitor.java:27)",
            "io.trino.sql.analyzer.ExpressionAnalyzer$Visitor.process(ExpressionAnalyzer.java:604)",
            "io.trino.sql.analyzer.ExpressionAnalyzer.analyze(ExpressionAnalyzer.java:485)",
            "io.trino.sql.analyzer.ExpressionAnalyzer.analyzeExpression(ExpressionAnalyzer.java:3440)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.analyzeExpression(StatementAnalyzer.java:4605)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.analyzeSelectSingleColumn(StatementAnalyzer.java:4414)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.analyzeSelect(StatementAnalyzer.java:4200)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuerySpecification(StatementAnalyzer.java:2941)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuerySpecification(StatementAnalyzer.java:482)",
            "io.trino.sql.tree.QuerySpecification.accept(QuerySpecification.java:155)",
            "io.trino.sql.tree.AstVisitor.process(AstVisitor.java:27)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:499)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:507)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuery(StatementAnalyzer.java:1458)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.visitQuery(StatementAnalyzer.java:482)",
            "io.trino.sql.tree.Query.accept(Query.java:107)",
            "io.trino.sql.tree.AstVisitor.process(AstVisitor.java:27)",
            "io.trino.sql.analyzer.StatementAnalyzer$Visitor.process(StatementAnalyzer.java:499)",
            "io.trino.sql.analyzer.StatementAnalyzer.analyze(StatementAnalyzer.java:461)",
            "io.trino.sql.analyzer.Analyzer.analyze(Analyzer.java:97)",
            "io.trino.sql.analyzer.Analyzer.analyze(Analyzer.java:86)",
            "io.trino.execution.SqlQueryExecution.analyze(SqlQueryExecution.java:271)",
            "io.trino.execution.SqlQueryExecution.<init>(SqlQueryExecution.java:206)",
            "io.trino.execution.SqlQueryExecution$SqlQueryExecutionFactory.createQueryExecution(SqlQueryExecution.java:845)",
            "io.trino.dispatcher.LocalDispatchQueryFactory.lambda$createDispatchQuery$0(LocalDispatchQueryFactory.java:154)",
            "io.trino.$gen.Trino_415____20230525_231607_2.call(Unknown Source)",
            "com.google.common.util.concurrent.TrustedListenableFutureTask$TrustedFutureInterruptibleTask.runInterruptibly(TrustedListenableFutureTask.java:131)",
            "com.google.common.util.concurrent.InterruptibleTask.run(InterruptibleTask.java:74)",
            "com.google.common.util.concurrent.TrustedListenableFutureTask.run(TrustedListenableFutureTask.java:82)",
            "java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)",
            "java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)",
            "java.base/java.lang.Thread.run(Thread.java:833)",
        ],
        errorLocation: { lineNumber: 1, columnNumber: 8 },
    },
};
