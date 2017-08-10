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
    setTimeout(new_timeout: any);
    setRequestID(request_id: any);
    setUserName(user_name: string);
    setLogger(logger: any);
    setRequest(request_lib: any);
    setMangler(mangle_lib: any);
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    listImages(cb: Function);
    getImage(id: any, cb: Function);
    queueImage(data: any, cb: Function);
    uploadImage(id: any, stream: any, cb: Function);
    updateImage(id: any, data: any, cb: Function);
    removeImage(id: any, cb: Function);
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

    setTimeout(new_timeout: any);
    setRequestID(request_id: any);
    setUserName(user_name: string);
    setLogger(logger: any);
    setRequest(request_lib: any);
    setMangler(mangle_lib: any);
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    getToken(username: string, password: string, cb: Function);
    getProjectTokenForReal(auth_data: any, cb: Function);
    getProjectToken(access_token:any, project_id:any, cb: Function);
    getProjectTokenByName(access_token:any, domain_id:any, project_name:string, cb: Function);
    listProjects(admin_access_token: any, cb: Function);
    listUserProjects(username:any, access_token: any, cb: Function);
    getProjectByName(admin_access_token: any, project_name:any, cb: Function);
    listRoles(project_token:any, cb: Function);
    listRoleAssignments(project_token:any, project_id:any, cb: Function);
    addRoleAssignment(project_token:any, project_id:any, entry_id:any, entry_type:any, role_id: any, cb: Function);
    removeRoleAssignment(project_token:any, project_id:any, entry_id:any, entry_type:any, role_id: any, cb: Function);
    listMetaEnvironments(auth_token:any, cb: Function);
    listMetaOwningGroups(auth_token:any, cb: Function);
    listProjectMeta(project_token:any, project_id:any, cb: Function);
    updateProjectMeta(project_token:any, project_id:any,new_meta:any, cb: Function);
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
    setTimeout(new_timeout: any);
    setRequestID(request_id: any);
    setUserName(user_name: string);
    setLogger(logger: any);
    setRequest(request_lib: any);
    setMangler(mangle_lib: any);
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    listNetworks(cb: Function);
    getNetwork(network_id:string, cb: Function);
    listSubnets(cb: Function);
    getSubnet(subnet_id:any, cb: Function);
    listRouters(cb: Function);
    getRouter(router_id:any, cb: Function);
    createFloatingIp(floating_network_id:any, cb: Function);
    listFloatingIps(options:any, cb: Function);
    getFloatingIp(ip_id:any, cb: Function);
    updateFloatingIp(ip_id:any, port_id:any,cb: Function);
    removeFloatingIp(ip_id:any, cb: Function);
    listPorts(options:any, cb: Function);
    getPort(port_id:any,cb: Function);
    updatePort(port_id:any, data:any, cb: Function);
    listSecurityGroups(project_id:any, cb: Function);
    getSecurityGroup(group_id:any, cb: Function);
    createSecurityGroup(group_name:any, data:any, cb: Function);
    updateSecurityGroup(group_id:any, data:any, cb: Function);
    removeSecurityGroup(group_id:any, cb: Function);
    listSecurityGroupRules(cb: Function);
    getSecurityGroupRule(rule_id:any, cb: Function);
    createSecurityGroupRule(group_id:any, data:any, cb: Function);
    removeSecurityGroupRule(rule_id:any, cb: Function);
    listLoadBalancers(cb: Function);
    getLoadBalancer(lb_id:any, cb: Function);
    createLoadBalancer(tenant_id:any, vip_subnet_id:any, cb: Function);
    updateLoadBalancer(lb_id:any, data:any, cb: Function);
    removeLoadBalancer(lb_id:any, cb: Function);
    listLBListeners(cb: Function);
    getLBListener(lb_id:any, cb: Function);
    createLBListener(tenant_id:any, loadbalancer_id:any, description:any, protocol:any, data:any, cb: Function);
    updateLBListener(listener_id:any, data:any, cb: Function);
    removeLBListener(listener_id:any, cb: Function);
    listLBPools(cb: Function);
    getLBPool(pool_id:any, cb: Function);
    createLBPool(tenant_id:any, protocol:any, lb_algorithm:any, listener_id:any, data:any, cb: Function);
    updateLBPool(pool_id:any, data:any, cb: Function);
    removeLBPool(pool_id:any, cb: Function);
    listLBPoolMembers(pool_id:any, cb: Function);
    getLBPoolMember(pool_id:any, member_id:any, cb: Function);
    createLBPoolMember(pool_id:any, tenant_id:any, address:any, protocol_port:any, data:any, cb: Function);
    updateLBPoolMember(pool_id:any, member_id:any, data:any, cb: Function);
    removeLBPoolMember(pool_id:any, member_id:any, cb: Function);
    listLBHealthMonitors(cb: Function);
    getLBHealthMonitor(health_monitor_id:any, cb: Function);
    createLBHealthMonitor(tenant_id:any, type:any, delay:any, timeout:any, max_retries:any, pool_id:any, data:any, cb: Function);
    updateLBHealthMonitor(health_monitor_id:any, data:any, cb: Function);
    removeLBHealthMonitor(health_monitor_id:any, cb: Function);
    getLBStats(lb_id:any, cb: Function);
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
    setTimeout(new_timeout: any);
    setRequestID(request_id: any);
    setUserName(user_name: string);
    setLogger(logger: any);
    setRequest(request_lib: any);
    setRetries(retries:number);
    setRetryDelay(retry_delay:number);
    getRequestOptions(path: string, json_value:any):RequestOption;
    listLoadBalancers(cb:Function);
    getLoadBalancer(lb_id: string, cb:Function);
    createLoadBalancer(project_id:string, data:any,cb:Function);
    updateLoadBalancer(lb_id:string, data:any,cb:Function);
    removeLoadBalancer(lb_id:string, cb:Function);
    listLBListeners(cb:Function);
    getLBListener(listener_id: string, cb:Function);
    createLBListener(loadbalancer_id:string, protocol:any, data:any,cb:Function);
    updateLBListener(listener_id:string, data:any,cb:Function);
    removeLBListener(listener_id: string, cb:Function);
    listLBPools(cb:Function);
    getLBPool(pool_id: string, cb:Function);
    createLBPool(protocol:any, lb_algorithm:any, data:any,cb:Function);
    updateLBPool(pool_id:string, data:any,cb:Function);
    removeLBPool(pool_id:string, cb:Function);
    listLBPoolMembers(pool_id:string, cb:Function);
    getLBPoolMember(pool_id:string, member_id:string,cb:Function);
    createLBPoolMember(pool_id:string, address:any, protocol_port:any, data:any,cb:Function);
    updateLBPoolMember(pool_id:string, member_id:string, data:any,cb:Function);
    removeLBPoolMember(pool_id:string, member_id:string,cb:Function);
    listLBHealthMonitors(cb:Function);
    getLBHealthMonitor(health_monitor_id:string,cb:Function);
    createLBHealthMonitor(pool_id:string, type:any, delay:number, timeout:number, max_retries:number, data:any,cb:Function);
    updateLBHealthMonitor(health_monitor_id:string, data:any,cb:Function);
    removeLBHealthMonitor(health_monitor_id:string,cb:Function);
    getLBStats(lb_id:string,cb:Function);
}  

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
    setTimeout(new_timeout: any);
    setRequestID(request_id: any);
    setUserName(user_name: string);
    setLogger(logger: any);
    setRequest(request_lib: any);
    setMangler(mangle_lib: any);
    getRequestOptions(path: string, json_value: any, extra_headers: any):RequestOption;
    listServers(cb:Function);
    getServer(id:string, cb:Function);
    createServer(data:any, cb:Function);
    renameServer(id:string, name:string, cb:Function);
    resizeServer(id:string, flavor:any,cb:Function);
    confirmResizeServer(id: string, cb:Function);
    revertResizeServer(id:string, cb:Function);
    removeServer(id:string,cb:Function);
    rebootServer(id:string, cb:Function);
    forceRebootServer(id: string, cb:Function);
    stopServer(id: string, cb:Function);
    startServer(id: string, cb:Function);
    pauseServer(id: string, cb:Function);
    suspendServer(id: string, cb:Function);
    resumeServer(is: string, cb:Function);
    getServerConsoleURL(type: any, id: string, cb:Function);
    getServerLog(id: string, length: any, cb:Function);
    createServerImage(id: string , data: any,cb:Function);
    setServerMetadata(id: string , data: any,cb:Function);
    listFlavors(cb:Function);
    getFlavor(id: string ,cb:Function);
    listFloatingIps(cb:Function);
    getFloatingIp(id: string, cb:Function);
    createFloatingIp(data: any,cb:Function);
    removeFloatingIp(id: string, cb:Function);
    associateFloatingIp(instance_id:any, ip_address: any,cb:Function);
    disassociateFloatingIp(instance_id:any, ip_address: any,cb:Function);
    listFloatingIpPools(cb:Function);
    getFloatingIpPool(id: string, cb:Function);
    listAvailabilityZones(cb:Function);
    getAvailabilityZone(id: string, cb:Function);
    listKeyPairs(cb:Function);
    getKeyPair(id: string, cb:Function);
    createKeyPair(name:string, public_key: any,cb:Function);
    removeKeyPair(id:string,cb:Function);
    getQuotaSet(project_id:string, cb:Function);
    setQuotaSet(project_id:string, data: any,cb:Function);
    getTenantUsage(project_id:string, start_date_obj:any, end_date_obj: any,cb:Function);
    assignSecurityGroup(security_group_name:string, instance_id:string, cb:Function);
    removeSecurityGroup(security_group_name: string, instance_id:string, cb:Function);
    getImageMetaData(id:string, cb:Function);
    setImageMetaData(id:string, data:any, cb:Function);
}

export interface Project{
    general_token: string;
    project_token: string;
    glance: Glance;
    neutron: Neutron;
    nova: Nova;
    octavia: Octavia;
}

export class getSimpleProject{
    constructor(username: string, password: string, project_id: string, keystone_url: string, cb: Function);
}