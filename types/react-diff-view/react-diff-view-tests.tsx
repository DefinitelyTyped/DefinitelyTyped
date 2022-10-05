import * as React from 'react';

import { Decoration, Diff, DiffProps, Hunk, HunkType, getChangeKey, parseDiff, Change } from 'react-diff-view';

const renderHunk = (hunk: HunkType) => [
    <Decoration key={'decoration-' + hunk.content}>{hunk.content ?? ''}</Decoration>,
    <Hunk key={'hunk-' + hunk.content} hunk={hunk} />,
];

const DiffFile: React.FC<{
    diffType: DiffProps['diffType'];
    hunks: readonly HunkType[];
}> = ({ diffType, hunks }) => (
    <Diff hunks={hunks} viewType="split" diffType={diffType}>
        {hunks => hunks.flatMap(renderHunk)}
    </Diff>
);

const getWidgets = (hunks: readonly HunkType[]) => {
    const changes = hunks.reduce<Change[]>((result, { changes }) => [...result, ...(changes ?? [])], []);
    const longLines = changes.filter(({ content }) => content.length > 120);
    return longLines.reduce((widgets, change) => {
        const changeKey = getChangeKey(change);

        return {
            ...widgets,
            [changeKey]: <span className="error">Line too long</span>,
        };
    }, {});
};

const App: React.FC<{ diffText: string }> = ({ diffText }) => {
    const files = parseDiff(diffText);

    return (
        <div>
            {files.map(({ hunks }, i) => (
                <Diff diffType="add" key={i} hunks={hunks} widgets={getWidgets(hunks)} viewType="split" />
            ))}
        </div>
    );
};
