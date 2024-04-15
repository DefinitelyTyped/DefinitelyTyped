/// <reference types="react/experimental"/>
import * as React from "react";
import * as ReactIs from "react-is";
import "react-is/canary";

// Suspense
ReactIs.isSuspenseList(<React.unstable_SuspenseList children={<div />} />); // true
ReactIs.typeOf(<React.unstable_SuspenseList children={<div />} />) === ReactIs.SuspenseList; // true
