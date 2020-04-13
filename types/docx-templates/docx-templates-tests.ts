import createReport from 'docx-templates';

createReport({
    template: 'templates/myTemplate.docx',
    output: 'reports/myReport.docx',
    data: {
        name: 'John',
        surname: 'Appleseed',
    },
});

createReport({
    template: 'templates/myTemplate.docx',
    output: 'reports/myReport.docx',
    data: (query: string) => JSON.parse(query),
});

async function test() {
    const buffer1: Buffer = await createReport({
        output: 'buffer',
        template: 'templates/myTemplate.docx',
        data: {},
    });

    const buffer2 = await createReport({
        output: 'buffer',
        template: buffer1,
        data: {},
    });
}

createReport({
    template: 'templates/myTemplate.docx',
    output: 'reports/myReport.docx',
    additionalJsContext: {
        foo: 'bar',
        qrCode: async (url: string) => {},
    },
    cmdDelimiter: '+++',
    literalXmlDelimiter: '||',
    processLineBreaks: true,
    noSandbox: false,
});
