import React = require("react");

export interface PermissionRequiredProps {
    permission: string | string[];
    allMustMatch?: boolean;
}
declare const PermissionRequired: React.FC<PermissionRequiredProps>;
export default PermissionRequired;
