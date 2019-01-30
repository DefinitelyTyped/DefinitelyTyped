import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';

const options: JSX.Element[] = [
    <div key='1'>1</div>,
    <div key='2'>2</div>,
];

const props: InfiniteScroll.InfiniteScrollProps = {
    dataLength: 4,
    hasMore: true,
    endMessage: 'The end.',
    loader: <h3>Loading...</h3>,
    next: () => null,
};

<InfiniteScroll {...props}>{options}</InfiniteScroll>;
