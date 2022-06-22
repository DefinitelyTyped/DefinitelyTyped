import * as React from 'react';
import {
    Change,
    Decoration,
    Diff,
    DiffProps,
    DiffType,
    getChangeKey,
    Hunk,
    HunkData,
    markWord,
    parseDiff,
    markEdits,
    tokenize,
} from 'react-diff-view';

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L101-L115
const App = ({ diffText }: { diffText: string }) => {
    const files = parseDiff(diffText);

    const renderFile = ({
        oldRevision,
        newRevision,
        type,
        hunks,
    }: {
        oldRevision: string;
        newRevision: string;
        type: DiffType;
        hunks: HunkData[];
    }) => (
        <Diff key={`${oldRevision}-${newRevision}`} viewType="split" diffType={type} hunks={hunks}>
            {hunks => hunks.map(hunk => <Hunk key={hunk.content} hunk={hunk} />)}
        </Diff>
    );

    return <div>{files.map(renderFile)}</div>;
};

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L123-L128
const filterOutNormalChanges = (hunk: HunkData) => {
    return {
        ...hunk,
        changes: hunk.changes.filter(change => !change.isNormal),
    };
};

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L130-L140
const removeNormalChanges = (ComponentIn: typeof Diff) => {
    const ComponentOut = ({ hunks, ...props }: DiffProps) => {
        const purgedHunks = hunks.map(filterOutNormalChanges);

        return <ComponentIn {...props} hunks={hunks} />;
    };

    ComponentOut.displayName = `removeNormalChanges(${ComponentIn.displayName})`;

    return ComponentOut;
};

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L142
const MyDiff = removeNormalChanges(Diff);

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L211-L217
const renderHunk = (hunk: HunkData) => [
    <Decoration key={'decoration-' + hunk.content}>
        <div />
        <span>{hunk.content}</span>
    </Decoration>,
    <Hunk key={'hunk-' + hunk.content} hunk={hunk} />,
];

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L235-L249
const getWidgets = (hunks: HunkData[]) => {
    const changes = hunks.reduce((result, { changes }) => [...result, ...changes], [] as Change[]);
    const longLines = changes.filter(({ content }) => content.length > 120);
    return longLines.reduce((widgets, change) => {
        const changeKey = getChangeKey(change);

        return {
            ...widgets,
            [changeKey]: <span className="error">Line too long</span>,
        };
    }, {});
};

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L251-L259
const _App = ({ diffText }: { diffText: string }) => {
    const files = parseDiff(diffText);

    return (
        <div>
            {files.map(({ hunks }, i) => (
                // @ts-expect-error diffType is required
                <Diff key={i} hunks={hunks} widgets={getWidgets(hunks)} viewType="split" />
            ))}
        </div>
    );
};

// https://github.dev/otakustay/react-diff-view/blob/v2.4.10/README.md#L476-L488
const options = {
    highlight: true,
    refractor: {} as any,
    oldSource: '',
    language: 'jsx',
    enhancers: [markWord('\r', 'carriage-return'), markWord('\t', 'tab'), markEdits([])],
};

const tokens = tokenize([], options);
