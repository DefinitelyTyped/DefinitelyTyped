import * as QueryAnalyzer from '@nginstack/dev-tools/lib/database/QueryAnalyzer';

QueryAnalyzer.getTxtExecutionPlan('query', { disableHeader: true }); // $ExpectType string
QueryAnalyzer.getHtmlExecutionPlan('query', { disableHeader: true }); // $ExpectType string

function testMajorVersions(prior: number, current: number): boolean {
    return current > prior;
}
testMajorVersions(64, 65); // $ExpectType boolean
