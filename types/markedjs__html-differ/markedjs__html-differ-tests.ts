/// <reference types="node" />

import fs = require('fs');
import { HtmlDiffer } from '@markedjs/html-differ';
import logger = require('@markedjs/html-differ/lib/logger');

const html1 = fs.readFileSync('1.html', 'utf-8');
const html2 = fs.readFileSync('2.html', 'utf-8');

const options = {
    ignoreAttributes: [],
    compareAttributesAsJSON: [],
    ignoreWhitespaces: true,
    ignoreComments: true,
    ignoreEndTags: false,
    ignoreDuplicateAttributes: false,
};

const htmlDiffer = new HtmlDiffer(options);

const diff = htmlDiffer.diffHtml(html1, html2);
const isEqual = htmlDiffer.isEqual(html1, html2);
const res = logger.getDiffText(diff, { charsAroundDiff: 40 });

logger.logDiffText(diff, { charsAroundDiff: 40 });
