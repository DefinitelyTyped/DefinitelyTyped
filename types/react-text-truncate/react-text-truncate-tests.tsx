import * as React from "react";
import TextTruncate from "react-text-truncate";

<TextTruncate />;

// @ts-expect-error
<TextTruncate containerClassName={1} />;
<TextTruncate containerClassName="class-name" />;

// @ts-expect-error
<TextTruncate element={2} />;
<TextTruncate element="textarea" />;

// @ts-expect-error
<TextTruncate line="textarea" />;
<TextTruncate line={2} />;
<TextTruncate line={true} />;

// @ts-expect-error
<TextTruncate onCalculated="textarea" />;
<TextTruncate onCalculated={() => {}} />;

// @ts-expect-error
<TextTruncate onTruncated="textarea" />;
<TextTruncate onTruncated={() => {}} />;

// @ts-expect-error
<TextTruncate onToggled="textarea" />;
<TextTruncate
    onToggled={(arg) => {
        arg; // $ExpectType boolean
    }}
/>;

// @ts-expect-error
<TextTruncate text={2} />;
<TextTruncate text="textarea" />;

// @ts-expect-error
<TextTruncate textElement={{}} />;
<TextTruncate textElement={<div />} />;

// @ts-expect-error
<TextTruncate textTruncateChild={{}} />;
<TextTruncate textTruncateChild={<div />} />;

// @ts-expect-error
<TextTruncate truncateText={2} />;
<TextTruncate truncateText="textarea" />;

// @ts-expect-error
<TextTruncate maxCalculateTimes="textarea" />;
<TextTruncate maxCalculateTimes={2} />;
