// Type definitions for openstack-wrapper 2.1.6
// Project: https://www.npmjs.com/package/openstack-wrapper
// Definitions by: Sanjay Madane <https://github.com/sanjaymadane>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface RequestOption{
    uri?: string;
    headers?: any,
    json?: any,
    timeout?: any,
    metricRequestID?: string,
    metricUserName?: string,
    metricLogger?: any
}
export interface Project{
    general_token: string;
    project_token: string;
    glance: Glance;
    neutron: Neutron;
    nova: Nova;
    octavia: Octavia;
}

export function getSimpleProject(username: string, password: string, project_id: string, keystone_url: string, cb: Function):void;

export class Nova {
    request: any;
    mangler:any;
    mangleObject:any;
    url:any;
    token:any;
    timeout:any;
    request_id:any;
    user_name:any;
    logger:any;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any):void;
    setRequestID(request_id: any):void;
    setUserName(user_name: string):void;
    setLogger(logger: any):void;
    setRequest(request_lib: any):void;
    setMangler(mangle_lib: any):void;
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    listServers(cb:Function):any;
    getServer(id:string, cb:Function):any;
    createServer(data:any, cb:Function):any;
    renameServer(id:string, name:string, cb:Function):any;
    resizeServer(id:string, flavor:any,cb:Function):any;
    confirmResizeServer(id: string, cb:Function):any;
    revertResizeServer(id:string, cb:Function):any;
    removeServer(id:string,cb:Function):any;
    rebootServer(id:string, cb:Function):any;
    forceRebootServer(id: string, cb:Function):any;
    stopServer(id: string, cb:Function):any;
    startServer(id: string, cb:Function):any;
    pauseServer(id: string, cb:Function):any;
    suspendServer(id: string, cb:Function):any;
    resumeServer(is: string, cb:Function):any;
    getServerConsoleURL(type: any, id: string, cb:Function):any;
    getServerLog(id: string, length: any, cb:Function):any;
    createServerImage(id: string , data: any,cb:Function):any;
    setServerMetadata(id: string , data: any,cb:Function):any;
    listFlavors(cb:Function):any;
    getFlavor(id: string ,cb:Function):any;
    listFloatingIps(cb:Function):any;
    getFloatingIp(id: string, cb:Function):any;
    createFloatingIp(data: any,cb:Function):any;
    removeFloatingIp(id: string, cb:Function):any;
    associateFloatingIp(instance_id:any, ip_address: any,cb:Function):any;
    disassociateFloatingIp(instance_id:any, ip_address: any,cb:Function):any;
    listFloatingIpPools(cb:Function):any;
    getFloatingIpPool(id: string, cb:Function):any;
    listAvailabilityZones(cb:Function):any;
    getAvailabilityZone(id: string, cb:Function):any;
    listKeyPairs(cb:Function):any;
    getKeyPair(id: string, cb:Function):any;
    createKeyPair(name:string, public_key: any,cb:Function):any;
    removeKeyPair(id:string,cb:Function):any;
    getQuotaSet(project_id:string, cb:Function):any;
    setQuotaSet(project_id:string, data: any,cb:Function):any;
    getTenantUsage(project_id:string, start_date_obj:any, end_date_obj: any,cb:Function):any;
    assignSecurityGroup(security_group_name:string, instance_id:string, cb:Function):any;
    removeSecurityGroup(security_group_name: string, instance_id:string, cb:Function):any;
    getImageMetaData(id:string, cb:Function):any;
    setImageMetaData(id:string, data:any, cb:Function):any;
}

export class Glance {
    request: any;
    mangler:any;
    mangleObject:any;
    url:any;
    token:any;
    timeout:any;
    request_id:any;
    user_name:any;
    logger:any;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any):void;
    setRequestID(request_id: any):void;
    setUserName(user_name: string):void;
    setLogger(logger: any):void;
    setRequest(request_lib: any):void;
    setMangler(mangle_lib: any):void;
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    listImages(cb: Function):any;
    getImage(id: any, cb: Function):any;
    queueImage(data: any, cb: Function):any;
    uploadImage(id: any, stream: any, cb: Function):any;
    updateImage(id: any, data: any, cb: Function):any;
    removeImage(id: any, cb: Function):any;
}

export class Keystone {
    request: any;
    mangler:any;
    mangleObject:any;
    url:any;
    timeout:any;
    request_id:any;
    user_name:any;
    logger:any;

    constructor(endpoint_url: string);

    setTimeout(new_timeout: any):void;
    setRequestID(request_id: any):void;
    setUserName(user_name: string):void;
    setLogger(logger: any):void;
    setRequest(request_lib: any):void;
    setMangler(mangle_lib: any):void;
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    getToken(username: string, password: string, cb: Function):any;
    getProjectTokenForReal(auth_data: any, cb: Function):any;
    getProjectToken(access_token:any, project_id:any, cb: Function):any;
    getProjectTokenByName(access_token:any, domain_id:any, project_name:string, cb: Function):any;
    listProjects(admin_access_token: any, cb: Function):any;
    listUserProjects(username:any, access_token: any, cb: Function):any;
    getProjectByName(admin_access_token: any, project_name:any, cb: Function):any;
    listRoles(project_token:any, cb: Function):any;
    listRoleAssignments(project_token:any, project_id:any, cb: Function):any;
    addRoleAssignment(project_token:any, project_id:any, entry_id:any, entry_type:any, role_id: any, cb: Function):any;
    removeRoleAssignment(project_token:any, project_id:any, entry_id:any, entry_type:any, role_id: any, cb: Function):any;
    listMetaEnvironments(auth_token:any, cb: Function):any;
    listMetaOwningGroups(auth_token:any, cb: Function):any;
    listProjectMeta(project_token:any, project_id:any, cb: Function):any;
    updateProjectMeta(project_token:any, project_id:any,new_meta:any, cb: Function):any;
}

export class Neutron {
    request: any;
    mangler:any;
    mangleObject:any;
    url:any;
    token:any;
    timeout:any;
    request_id:any;
    user_name:any;
    logger:any;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any):void;
    setRequestID(request_id: any):void;
    setUserName(user_name: string):void;
    setLogger(logger: any):void;
    setRequest(request_lib: any):void;
    setMangler(mangle_lib: any):void;
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    listNetworks(cb: Function):any;
    getNetwork(network_id:string, cb: Function):any;
    listSubnets(cb: Function):any;
    getSubnet(subnet_id:any, cb: Function):any;
    listRouters(cb: Function):any;
    getRouter(router_id:any, cb: Function):any;
    createFloatingIp(floating_network_id:any, cb: Function):any;
    listFloatingIps(options:any, cb: Function):any;
    getFloatingIp(ip_id:any, cb: Function):any;
    updateFloatingIp(ip_id:any, port_id:any,cb: Function):any;
    removeFloatingIp(ip_id:any, cb: Function):any;
    listPorts(options:any, cb: Function):any;
    getPort(port_id:any,cb: Function):any;
    updatePort(port_id:any, data:any, cb: Function):any;
    listSecurityGroups(project_id:any, cb: Function):any;
    getSecurityGroup(group_id:any, cb: Function):any;
    createSecurityGroup(group_name:any, data:any, cb: Function):any;
    updateSecurityGroup(group_id:any, data:any, cb: Function):any;
    removeSecurityGroup(group_id:any, cb: Function):any;
    listSecurityGroupRules(cb: Function):any;
    getSecurityGroupRule(rule_id:any, cb: Function):any;
    createSecurityGroupRule(group_id:any, data:any, cb: Function):any;
    removeSecurityGroupRule(rule_id:any, cb: Function):any;
    listLoadBalancers(cb: Function):any;
    getLoadBalancer(lb_id:any, cb: Function):any;
    createLoadBalancer(tenant_id:any, vip_subnet_id:any, cb: Function):any;
    updateLoadBalancer(lb_id:any, data:any, cb: Function):any;
    removeLoadBalancer(lb_id:any, cb: Function):any;
    listLBListeners(cb: Function):any;
    getLBListener(lb_id:any, cb: Function):any;
    createLBListener(tenant_id:any, loadbalancer_id:any, description:any, protocol:any, data:any, cb: Function):any;
    updateLBListener(listener_id:any, data:any, cb: Function):any;
    removeLBListener(listener_id:any, cb: Function):any;
    listLBPools(cb: Function):any;
    getLBPool(pool_id:any, cb: Function):any;
    createLBPool(tenant_id:any, protocol:any, lb_algorithm:any, listener_id:any, data:any, cb: Function):any;
    updateLBPool(pool_id:any, data:any, cb: Function):any;
    removeLBPool(pool_id:any, cb: Function):any;
    listLBPoolMembers(pool_id:any, cb: Function):any;
    getLBPoolMember(pool_id:any, member_id:any, cb: Function):any;
    createLBPoolMember(pool_id:any, tenant_id:any, address:any, protocol_port:any, data:any, cb: Function):any;
    updateLBPoolMember(pool_id:any, member_id:any, data:any, cb: Function):any;
    removeLBPoolMember(pool_id:any, member_id:any, cb: Function):any;
    listLBHealthMonitors(cb: Function):any;
    getLBHealthMonitor(health_monitor_id:any, cb: Function):any;
    createLBHealthMonitor(tenant_id:any, type:any, delay:any, timeout:any, max_retries:any, pool_id:any, data:any, cb: Function):any;
    updateLBHealthMonitor(health_monitor_id:any, data:any, cb: Function):any;
    removeLBHealthMonitor(health_monitor_id:any, cb: Function):any;
    getLBStats(lb_id:any, cb: Function):any;
}

export class Octavia {
    url:any;
    token:any;
    timeout:any;
    request_id:any;
    user_name:string;
    logger:any;
    retries: number;
    retry_delay: number;

    constructor(endpoint_url: string, auth_token: string);
    setTimeout(new_timeout: any):void;
    setRequestID(request_id: any):void;
    setUserName(user_name: string):void;
    setLogger(logger: any):void;
    setRequest(request_lib: any):void;
    setRetries(retries:number):void;
    setRetryDelay(retry_delay:number):void;
    getRequestOptions(path: string, json_value:any):RequestOption;
    listLoadBalancers(cb:Function):any;
    getLoadBalancer(lb_id: string, cb:Function):any;
    createLoadBalancer(project_id:string, data:any,cb:Function):any;
    updateLoadBalancer(lb_id:string, data:any,cb:Function):any;
    removeLoadBalancer(lb_id:string, cb:Function):any;
    listLBListeners(cb:Function):any;
    getLBListener(listener_id: string, cb:Function):any;
    createLBListener(loadbalancer_id:string, protocol:any, data:any,cb:Function):any;
    updateLBListener(listener_id:string, data:any,cb:Function):any;
    removeLBListener(listener_id: string, cb:Function):any;
    listLBPools(cb:Function):any;
    getLBPool(pool_id: string, cb:Function):any;
    createLBPool(protocol:any, lb_algorithm:any, data:any,cb:Function):any;
    updateLBPool(pool_id:string, data:any,cb:Function):any;
    removeLBPool(pool_id:string, cb:Function):any;
    listLBPoolMembers(pool_id:string, cb:Function):any;
    getLBPoolMember(pool_id:string, member_id:string,cb:Function):any;
    createLBPoolMember(pool_id:string, address:any, protocol_port:any, data:any,cb:Function):any;
    updateLBPoolMember(pool_id:string, member_id:string, data:any,cb:Function):any;
    removeLBPoolMember(pool_id:string, member_id:string,cb:Function):any;
    listLBHealthMonitors(cb:Function):any;
    getLBHealthMonitor(health_monitor_id:string,cb:Function):any;
    createLBHealthMonitor(pool_id:string, type:any, delay:number, timeout:number, max_retries:number, data:any,cb:Function):any;
    updateLBHealthMonitor(health_monitor_id:string, data:any,cb:Function):any;
    removeLBHealthMonitor(health_monitor_id:string,cb:Function):any;
    getLBStats(lb_id:string,cb:Function):any;
}