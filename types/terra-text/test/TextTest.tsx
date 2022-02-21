import * as React from 'react';
import Text from 'terra-text';

const TextAllProps = (
    <Text
        isItalic={true}
        isVisuallyHidden={false}
        isWordWrapped={false}
        fontSize={12}
        fontWeight={200}
    >
        Some Sample Text
    </Text>
);

const TextRequiredProps = (
    <Text>Some Required Sample Text</Text>
);
