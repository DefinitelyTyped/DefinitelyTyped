// Type definitions for openstack-wrapper 2.1
// Project: https://www.npmjs.com/package/openstack-wrapper
// Definitions by: Sanjay Madane <https://github.com/sanjaymadane>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface RequestOption {
    uri?: string;
    headers?: any;
    json?: any;
    timeout?: any;
    metricRequestID?: string;
    metricUserName?: string;
    metricLogger?: any;
}

export interface Project {
    general_token: string;
    project_token: string;
    glance: Glance;
    neutron: Neutron;
    nova: Nova;
    octavia: Octavia;
}

export function getSimpleProject(username: string, password: string, project_id: string, keystone_url: string, cb: (...args: any[]) => any): void;

export class Nova {
    request: any;
    mangler: any;
    mangleObject: any;
    url: any;
    token: any;
    timeout: any;
    request_id: any;
    user_name: any;
    logger: any;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any): void;
    setRequestID(request_id: any): void;
    setUserName(user_name: string): void;
    setLogger(logger: any): void;
    setRequest(request_lib: any): void;
    setMangler(mangle_lib: any): void;
    getRequestOptions(path: string, json_value: any, extra_headers: any): RequestOption;
    listServers(cb: (...args: any[]) => any): any;
    getServer(id: string, cb: (...args: any[]) => any): any;
    createServer(data: any, cb: (...args: any[]) => any): any;
    renameServer(id: string, name: string, cb: (...args: any[]) => any): any;
    resizeServer(id: string, flavor: any, cb: (...args: any[]) => any): any;
    confirmResizeServer(id: string, cb: (...args: any[]) => any): any;
    revertResizeServer(id: string, cb: (...args: any[]) => any): any;
    removeServer(id: string, cb: (...args: any[]) => any): any;
    rebootServer(id: string, cb: (...args: any[]) => any): any;
    forceRebootServer(id: string, cb: (...args: any[]) => any): any;
    stopServer(id: string, cb: (...args: any[]) => any): any;
    startServer(id: string, cb: (...args: any[]) => any): any;
    pauseServer(id: string, cb: (...args: any[]) => any): any;
    suspendServer(id: string, cb: (...args: any[]) => any): any;
    resumeServer(is: string, cb: (...args: any[]) => any): any;
    getServerConsoleURL(type: any, id: string, cb: (...args: any[]) => any): any;
    getServerLog(id: string, length: any, cb: (...args: any[]) => any): any;
    createServerImage(id: string , data: any, cb: (...args: any[]) => any): any;
    setServerMetadata(id: string , data: any, cb: (...args: any[]) => any): any;
    listFlavors(cb: (...args: any[]) => any): any;
    getFlavor(id: string, cb: (...args: any[]) => any): any;
    listFloatingIps(cb: (...args: any[]) => any): any;
    getFloatingIp(id: string, cb: (...args: any[]) => any): any;
    createFloatingIp(data: any, cb: (...args: any[]) => any): any;
    removeFloatingIp(id: string, cb: (...args: any[]) => any): any;
    associateFloatingIp(instance_id: any, ip_address: any, cb: (...args: any[]) => any): any;
    disassociateFloatingIp(instance_id: any, ip_address: any, cb: (...args: any[]) => any): any;
    listFloatingIpPools(cb: (...args: any[]) => any): any;
    getFloatingIpPool(id: string, cb: (...args: any[]) => any): any;
    listAvailabilityZones(cb: (...args: any[]) => any): any;
    getAvailabilityZone(id: string, cb: (...args: any[]) => any): any;
    listKeyPairs(cb: (...args: any[]) => any): any;
    getKeyPair(id: string, cb: (...args: any[]) => any): any;
    createKeyPair(name: string, public_key: any, cb: (...args: any[]) => any): any;
    removeKeyPair(id: string, cb: (...args: any[]) => any): any;
    getQuotaSet(project_id: string, cb: (...args: any[]) => any): any;
    setQuotaSet(project_id: string, data: any, cb: (...args: any[]) => any): any;
    getTenantUsage(project_id: string, start_date_obj: any, end_date_obj: any, cb: (...args: any[]) => any): any;
    assignSecurityGroup(security_group_name: string, instance_id: string, cb: (...args: any[]) => any): any;
    removeSecurityGroup(security_group_name: string, instance_id: string, cb: (...args: any[]) => any): any;
    getImageMetaData(id: string, cb: (...args: any[]) => any): any;
    setImageMetaData(id: string, data: any, cb: (...args: any[]) => any): any;
}

export class Glance {
    request: any;
    mangler: any;
    mangleObject: any;
    url: any;
    token: any;
    timeout: any;
    request_id: any;
    user_name: any;
    logger: any;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any): void;
    setRequestID(request_id: any): void;
    setUserName(user_name: string): void;
    setLogger(logger: any): void;
    setRequest(request_lib: any): void;
    setMangler(mangle_lib: any): void;
    getRequestOptions(path: string, json_value: any, extra_headers: any): RequestOption;
    listImages(cb: (...args: any[]) => any): any;
    getImage(id: any, cb: (...args: any[]) => any): any;
    queueImage(data: any, cb: (...args: any[]) => any): any;
    uploadImage(id: any, stream: any, cb: (...args: any[]) => any): any;
    updateImage(id: any, data: any, cb: (...args: any[]) => any): any;
    removeImage(id: any, cb: (...args: any[]) => any): any;
}

export class Keystone {
    request: any;
    mangler: any;
    mangleObject: any;
    url: any;
    timeout: any;
    request_id: any;
    user_name: any;
    logger: any;

    constructor(endpoint_url: string);

    setTimeout(new_timeout: any): void;
    setRequestID(request_id: any): void;
    setUserName(user_name: string): void;
    setLogger(logger: any): void;
    setRequest(request_lib: any): void;
    setMangler(mangle_lib: any): void;
    getRequestOptions(path: string, json_value: any, extra_headers: any): RequestOption;
    getToken(username: string, password: string, cb: (...args: any[]) => any): any;
    getProjectTokenForReal(auth_data: any, cb: (...args: any[]) => any): any;
    getProjectToken(access_token: any, project_id: any, cb: (...args: any[]) => any): any;
    getProjectTokenByName(access_token: any, domain_id: any, project_name: string, cb: (...args: any[]) => any): any;
    listProjects(admin_access_token: any, cb: (...args: any[]) => any): any;
    listUserProjects(username: any, access_token: any, cb: (...args: any[]) => any): any;
    getProjectByName(admin_access_token: any, project_name: any, cb: (...args: any[]) => any): any;
    listRoles(project_token: any, cb: (...args: any[]) => any): any;
    listRoleAssignments(project_token: any, project_id: any, cb: (...args: any[]) => any): any;
    addRoleAssignment(project_token: any, project_id: any, entry_id: any, entry_type: any, role_id: any, cb: (...args: any[]) => any): any;
    removeRoleAssignment(project_token: any, project_id: any, entry_id: any, entry_type: any, role_id: any, cb: (...args: any[]) => any): any;
    listMetaEnvironments(auth_token: any, cb: (...args: any[]) => any): any;
    listMetaOwningGroups(auth_token: any, cb: (...args: any[]) => any): any;
    listProjectMeta(project_token: any, project_id: any, cb: (...args: any[]) => any): any;
    updateProjectMeta(project_token: any, project_id: any, new_meta: any, cb: (...args: any[]) => any): any;
}

export class Neutron {
    request: any;
    mangler: any;
    mangleObject: any;
    url: any;
    token: any;
    timeout: any;
    request_id: any;
    user_name: any;
    logger: any;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any): void;
    setRequestID(request_id: any): void;
    setUserName(user_name: string): void;
    setLogger(logger: any): void;
    setRequest(request_lib: any): void;
    setMangler(mangle_lib: any): void;
    getRequestOptions(path: string, json_value: any, extra_headers: any): RequestOption;
    listNetworks(cb: (...args: any[]) => any): any;
    getNetwork(network_id: string, cb: (...args: any[]) => any): any;
    listSubnets(cb: (...args: any[]) => any): any;
    getSubnet(subnet_id: any, cb: (...args: any[]) => any): any;
    listRouters(cb: (...args: any[]) => any): any;
    getRouter(router_id: any, cb: (...args: any[]) => any): any;
    createFloatingIp(floating_network_id: any, cb: (...args: any[]) => any): any;
    listFloatingIps(options: any, cb: (...args: any[]) => any): any;
    getFloatingIp(ip_id: any, cb: (...args: any[]) => any): any;
    updateFloatingIp(ip_id: any, port_id: any, cb: (...args: any[]) => any): any;
    removeFloatingIp(ip_id: any, cb: (...args: any[]) => any): any;
    listPorts(options: any, cb: (...args: any[]) => any): any;
    getPort(port_id: any, cb: (...args: any[]) => any): any;
    updatePort(port_id: any, data: any, cb: (...args: any[]) => any): any;
    listSecurityGroups(project_id: any, cb: (...args: any[]) => any): any;
    getSecurityGroup(group_id: any, cb: (...args: any[]) => any): any;
    createSecurityGroup(group_name: any, data: any, cb: (...args: any[]) => any): any;
    updateSecurityGroup(group_id: any, data: any, cb: (...args: any[]) => any): any;
    removeSecurityGroup(group_id: any, cb: (...args: any[]) => any): any;
    listSecurityGroupRules(cb: (...args: any[]) => any): any;
    getSecurityGroupRule(rule_id: any, cb: (...args: any[]) => any): any;
    createSecurityGroupRule(group_id: any, data: any, cb: (...args: any[]) => any): any;
    removeSecurityGroupRule(rule_id: any, cb: (...args: any[]) => any): any;
    listLoadBalancers(cb: (...args: any[]) => any): any;
    getLoadBalancer(lb_id: any, cb: (...args: any[]) => any): any;
    createLoadBalancer(tenant_id: any, vip_subnet_id: any, cb: (...args: any[]) => any): any;
    updateLoadBalancer(lb_id: any, data: any, cb: (...args: any[]) => any): any;
    removeLoadBalancer(lb_id: any, cb: (...args: any[]) => any): any;
    listLBListeners(cb: (...args: any[]) => any): any;
    getLBListener(lb_id: any, cb: (...args: any[]) => any): any;
    createLBListener(tenant_id: any, loadbalancer_id: any, description: any, protocol: any, data: any, cb: (...args: any[]) => any): any;
    updateLBListener(listener_id: any, data: any, cb: (...args: any[]) => any): any;
    removeLBListener(listener_id: any, cb: (...args: any[]) => any): any;
    listLBPools(cb: (...args: any[]) => any): any;
    getLBPool(pool_id: any, cb: (...args: any[]) => any): any;
    createLBPool(tenant_id: any, protocol: any, lb_algorithm: any, listener_id: any, data: any, cb: (...args: any[]) => any): any;
    updateLBPool(pool_id: any, data: any, cb: (...args: any[]) => any): any;
    removeLBPool(pool_id: any, cb: (...args: any[]) => any): any;
    listLBPoolMembers(pool_id: any, cb: (...args: any[]) => any): any;
    getLBPoolMember(pool_id: any, member_id: any, cb: (...args: any[]) => any): any;
    createLBPoolMember(pool_id: any, tenant_id: any, address: any, protocol_port: any, data: any, cb: (...args: any[]) => any): any;
    updateLBPoolMember(pool_id: any, member_id: any, data: any, cb: (...args: any[]) => any): any;
    removeLBPoolMember(pool_id: any, member_id: any, cb: (...args: any[]) => any): any;
    listLBHealthMonitors(cb: (...args: any[]) => any): any;
    getLBHealthMonitor(health_monitor_id: any, cb: (...args: any[]) => any): any;
    createLBHealthMonitor(tenant_id: any, type: any, delay: any, timeout: any, max_retries: any, pool_id: any, data: any, cb: (...args: any[]) => any): any;
    updateLBHealthMonitor(health_monitor_id: any, data: any, cb: (...args: any[]) => any): any;
    removeLBHealthMonitor(health_monitor_id: any, cb: (...args: any[]) => any): any;
    getLBStats(lb_id: any, cb: (...args: any[]) => any): any;
}

export class Octavia {
    url: any;
    token: any;
    timeout: any;
    request_id: any;
    user_name: string;
    logger: any;
    retries: number;
    retry_delay: number;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any): void;
    setRequestID(request_id: any): void;
    setUserName(user_name: string): void;
    setLogger(logger: any): void;
    setRequest(request_lib: any): void;
    setRetries(retries: number): void;
    setRetryDelay(retry_delay: number): void;
    getRequestOptions(path: string, json_value: any): RequestOption;
    listLoadBalancers(cb: (...args: any[]) => any): any;
    getLoadBalancer(lb_id: string, cb: (...args: any[]) => any): any;
    createLoadBalancer(project_id: string, data: any, cb: (...args: any[]) => any): any;
    updateLoadBalancer(lb_id: string, data: any, cb: (...args: any[]) => any): any;
    removeLoadBalancer(lb_id: string, cb: (...args: any[]) => any): any;
    listLBListeners(cb: (...args: any[]) => any): any;
    getLBListener(listener_id: string, cb: (...args: any[]) => any): any;
    createLBListener(loadbalancer_id: string, protocol: any, data: any, cb: (...args: any[]) => any): any;
    updateLBListener(listener_id: string, data: any, cb: (...args: any[]) => any): any;
    removeLBListener(listener_id: string, cb: (...args: any[]) => any): any;
    listLBPools(cb: (...args: any[]) => any): any;
    getLBPool(pool_id: string, cb: (...args: any[]) => any): any;
    createLBPool(protocol: any, lb_algorithm: any, data: any, cb: (...args: any[]) => any): any;
    updateLBPool(pool_id: string, data: any, cb: (...args: any[]) => any): any;
    removeLBPool(pool_id: string, cb: (...args: any[]) => any): any;
    listLBPoolMembers(pool_id: string, cb: (...args: any[]) => any): any;
    getLBPoolMember(pool_id: string, member_id: string, cb: (...args: any[]) => any): any;
    createLBPoolMember(pool_id: string, address: any, protocol_port: any, data: any, cb: (...args: any[]) => any): any;
    updateLBPoolMember(pool_id: string, member_id: string, data: any, cb: (...args: any[]) => any): any;
    removeLBPoolMember(pool_id: string, member_id: string, cb: (...args: any[]) => any): any;
    listLBHealthMonitors(cb: (...args: any[]) => any): any;
    getLBHealthMonitor(health_monitor_id: string, cb: (...args: any[]) => any): any;
    createLBHealthMonitor(pool_id: string, type: any, delay: number, timeout: number, max_retries: number, data: any, cb: (...args: any[]) => any): any;
    updateLBHealthMonitor(health_monitor_id: string, data: any, cb: (...args: any[]) => any): any;
    removeLBHealthMonitor(health_monitor_id: string, cb: (...args: any[]) => any): any;
    getLBStats(lb_id: string, cb: (...args: any[]) => any): any;
}
