import * as React from 'react';

import { UncontrolledAlertProps          } from './Alert';
import { UncontrolledButtonDropdownProps } from './ButtonDropdown';
import { UncontrolledDropdownProps       } from './Dropdown';
import { UncontrolledTooltipProps        } from './Tooltip';
import { UncontrolledCollapseProps       } from './Collapse';

export class UncontrolledAlert<T = {}> extends React.Component<UncontrolledAlertProps<T>> {}
export class UncontrolledButtonDropdown<T = {}> extends React.Component<UncontrolledButtonDropdownProps<T>> {}
export class UncontrolledDropdown<T = {}> extends React.Component<UncontrolledDropdownProps<T>> {}
export class UncontrolledTooltip<T = {}> extends React.Component<UncontrolledTooltipProps<T>> {}
export class UncontrolledCollapse<T = {}> extends React.Component<UncontrolledCollapseProps<T>> {}

export { UncontrolledAlertProps          } from './Alert';
export { UncontrolledButtonDropdownProps } from './ButtonDropdown';
export { UncontrolledDropdownProps       } from './Dropdown';
export { UncontrolledTooltipProps        } from './Tooltip';
export { UncontrolledCollapseProps       } from './Collapse';
