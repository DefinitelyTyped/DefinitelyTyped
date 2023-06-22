export = SecurityPolicy;
declare function SecurityPolicy(
    computerAddress: string,
    computerName: string,
    userKey: number
): void;
declare class SecurityPolicy {
    constructor(computerAddress: string, computerName: string, userKey: number);
    computerAddress: string;
    computerName: string;
    userKey: string;
    networkUtilities: NetworkUtilities;
    securityPolicies: import('../dataset/DataSet.js');
    groupsAndUsers: import('../dataset/DataSet.js');
    networks: import('../dataset/DataSet.js');
    hosts: import('../dataset/DataSet.js');
    computerPolicyKey: number;
    userPolicyKey: number;
    hostKeys: any[];
    networkKeys: any[];
    private initialize;
    checkComputer(): boolean;
    checkEnabledApplication(appId: SecurityPolicyApplication): boolean;
    validateLogin(appId: string): void;
    checkEngineRestartAllowed(): boolean;
}
declare namespace SecurityPolicy {
    export { userCanAccessRemotely, SecurityPolicyApplication };
}
import NetworkUtilities = require('../net/NetworkUtilities.js');
interface SecurityPolicyApplication {
    IDE: string;
    iWeb: string;
    FrameworkHTML: string;
}
declare function userCanAccessRemotely(userKey: number): boolean;
