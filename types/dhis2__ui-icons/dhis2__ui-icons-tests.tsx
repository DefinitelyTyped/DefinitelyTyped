import { IconAdd16 } from '@dhis2/ui-icons';
import * as React from "react";

const emptyIcon = <IconAdd16 />;
const iconWithColor = <IconAdd16 color={'white'} />;
const iconWithInvalidProp = <IconAdd16 resize={true} />; // $ExpectError
