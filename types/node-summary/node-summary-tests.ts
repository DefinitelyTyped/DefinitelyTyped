import * as SummaryTool from "node-summary";

const title = '';
const content = '';
SummaryTool.summarize(title, content, (err, summary, dict) => {});

const url = '';
SummaryTool.summarizeFromUrl(url, (err, summary) => {});

const n = 0;
SummaryTool.getSortedSentences(content, n, (err, sorted, dict) => {});
