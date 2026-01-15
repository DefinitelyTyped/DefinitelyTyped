import * as QueryAnalyzer from '@nginstack/dev-tools/lib/database/QueryAnalyzer';

QueryAnalyzer.getTxtExecutionPlan('query', { disableHeader: true }); // $ExpectType string
QueryAnalyzer.getHtmlExecutionPlan('query', { disableHeader: true }); // $ExpectType string

function getVersion(): string {
    return '81.0.1';
}
getVersion(); // $ExpectType string
