import ThrowableDiagnostic, { Diagnostic } from '@parcel/diagnostic';

const diag: Diagnostic = {
    message: 'Failure!',
    filePath: __filename,
    codeFrame: {
        codeHighlights: {
            start: {
                line: 1,
                column: 1,
            },
            end: {
                line: 1,
                column: 2,
            },
        },
    },
};

try {
    throw new ThrowableDiagnostic({
        diagnostic: [diag],
    });
} catch (e) {
    if (e instanceof ThrowableDiagnostic) {
        console.log('success');
    }
}
