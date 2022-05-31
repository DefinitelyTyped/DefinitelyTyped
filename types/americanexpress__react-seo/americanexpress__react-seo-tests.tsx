import SEO from '@americanexpress/react-seo';
import * as React from 'react';

/**
 * Main component
 */
const Component = () => (
    <SEO
        title="Lorem Ipsum"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="http://example.com"
        image={{
            src: 'http://example.com/foo.jpg',
        }}
    />
);

export default Component;
