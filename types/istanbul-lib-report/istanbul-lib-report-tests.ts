import {
    createContext,
    getDefaultWatermarks,
    Watermarks,
    ReportBase,
    ConsoleWriter,
    XmlWriter,
    FileWriter,
} from 'istanbul-lib-report';

import { CoverageMap } from 'istanbul-lib-coverage';

const watermarks: Watermarks = {
    statements: [50, 100],
    branches: [10, 50],
    functions: [50, 99],
    lines: [25, 75],
};

createContext();
createContext({});

const context = createContext({
    dir: 'foo',
    watermarks,
    sourceFinder: (filepath: string) => '',
});

context.watermarks;
context.sourceFinder('foo').trim();

const coverageMap = new CoverageMap({});
const secondContext = createContext({
    defaultSummarizer: 'nested',
    watermarks: {
        statements: [75, 100],
    },
    coverageMap,
});

secondContext.watermarks.functions[1];
secondContext.classForPercent('lines', 50);

const fileWriter: FileWriter = secondContext.writer;

const contentWriter = new ConsoleWriter();
const xmlWriter: XmlWriter = secondContext.getXmlWriter(contentWriter);
xmlWriter.openTag('Coverage', { someAttribute: 'foo' });
xmlWriter.inlineTag('Result', null, `All's well that ends well`);
xmlWriter.closeAll();

const defaultMarks: Watermarks = getDefaultWatermarks();

const report = new ReportBase({
    summarizer: 'nested',
});
report.execute(secondContext);

const secondReport = new ReportBase();
