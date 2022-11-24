import React = require('react');
import mergeRefs from 'merge-refs';

mergeRefs(React.createRef(), React.createRef());
mergeRefs(
    (instance: HTMLDivElement | null) => {},
    (instance: HTMLDivElement | null) => {},
);
