import React from 'react';

import { PathProps, FontProps } from './props';

export interface GProps extends PathProps, FontProps {}

export default class G extends React.Component<GProps> {}
