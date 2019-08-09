import { configureViewport, INITIAL_VIEWPORTS, withViewport } from '@storybook/addon-viewport';

import { storiesOf } from '@storybook/react';

const minimalViewport = {
    name: 'Viewport with minimal amount of configuration',
    styles: {
        width: '450px',
        height: '150px',
    },
};
const maximalViewport = {
    name: 'Viewport that also sets its type',
    styles: {
        width: '230px',
        height: '300px',
    },
    type: 'desktop',
};
configureViewport({
    viewports: { ...INITIAL_VIEWPORTS,    minimalViewport, maximalViewport },
});
configureViewport({
    defaultViewport: 'minimalViewport',
});

const stories = storiesOf('Example of Knobs', module);

stories.addDecorator(withViewport());
stories.addDecorator(withViewport('viewportName'));
stories.addDecorator(withViewport({
    onViewportChange: ({ viewport }) => `Viewport changed: ${viewport.name} (${viewport.type})`,
}));
