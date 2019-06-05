import * as React from 'react';
import TextTruncate from 'react-text-truncate';

const TruncatedText = () => (
    <TextTruncate
        text="My Text"
        line={2}
        containerClassName="my-container"
        element="span"
        onCalculated={() => {}}
        onTruncated={() => {}}
        onToggled={(truncate: boolean) => {}}
        textElement={<div />}
        textTruncateChild={<div />}
        truncateText="..."
        maxCalculateTimes={5}
    />
);
