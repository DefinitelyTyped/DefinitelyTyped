import * as React from 'react';

export class MjmlComment extends React.Component<{ children: string }> { }
export class MjmlConditionalComment extends React.Component<{ children: string; condition: string }> { }
export class MjmlTrackingPixel extends React.Component<{ src: string }> { }
export class MjmlYahooStyle extends React.Component<{ children: string }> { }
