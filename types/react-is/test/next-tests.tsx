/// <reference types="../../react/experimental"/>
import * as React from 'react';
import * as ReactIs from 'react-is';
import 'react-is/next';

// Suspense
ReactIs.isSuspenseList(<React.SuspenseList children={<div />} />); // true
ReactIs.typeOf(<React.SuspenseList children={<div />} />) === ReactIs.SuspenseList; // true
