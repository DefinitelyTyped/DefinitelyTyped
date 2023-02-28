import { IconAdd16 } from '@dhis2/ui-icons';
import * as React from 'react';

const icon = <IconAdd16 />;
const iconWithColor = <IconAdd16 color={'white'} />;
// @ts-expect-error
const iconWithInvalidProp = <IconAdd16 resize={true} />;
