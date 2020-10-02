// Type definitions for non-npm package kamailio-kemi 5.3
// Project: https://github.com/kamailio/kamailio/
// Definitions by: bonan <https://github.com/bonan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Types and comments extracted from:
// https://kamailio.org/docs/tutorials/5.3.x/kamailio-kemi-framework/

export {};
declare global {
    const KSR: typeof KamailioKemi;
}

declare namespace KamailioKemi {
    // Allowed flags
    type Flag = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31;

    // Write a log message to DEBUG level
    export function dbg(logStr: string): void;

    // Write a log message to ERROR level.
    export function err(logStr: string): void;

    // Write a log message to INFO level.
    export function info(logStr: string): void;

    // Set the internal flag to add rport parameter to local generated Via header.
    export function add_local_rport(): boolean;

    // Adds a tcp port alias for the current connection (if tcp). Useful if you want to send all the trafic to
    // port_alias through the same connection this request came from (it could help for firewall or nat traversal).
    // When the aliased connection is closed (e.g. it is idle for too much time), all the port aliases are removed.
    export function add_tcp_alias(port: number): void;

    // Adds the port from the message via as an alias to TCP connection. See add_tcp_alias(int port) for more details.
    export function add_tcp_alias_via(): number;

    // Set the flag for "rport" handling (send the reply based on source address instead of Via header).
    export function force_rport(): boolean;

    // Return true if the value of the parameter matches the method type of the SIP message.
    export function is_method(method: string): boolean;

    /*
     * Return true if SIP method of the currently processed message is matching
     * one of the corresponding characters given as parameter.
     * Matching the method is done based on corresponding characters:
     *
     * I - INVITE
     * A - ACK
     * B - BYE
     * C - CANCEL
     * R - REGISTER
     * M - MESSAGE
     * O - OPTIONS
     * S - SUBSCRIBE
     * P - PUBLISH
     * N - NOTIFY
     * U - UPDATE
     * K - KDMQ
     * G - GET
     * T - POST
     * V - PUT
     * D - DELETE
     */
    export function is_method_in(method: string): boolean;

    // Helpers for common methods
    export function is_INVITE(): boolean;
    export function is_ACK(): boolean;
    export function is_BYE(): boolean;
    export function is_CANCEL(): boolean;
    export function is_REGISTER(): boolean;
    export function is_MESSAGE(): boolean;
    export function is_SUBSCRIBE(): boolean;
    export function is_PUBLISH(): boolean;
    export function is_NOTIFY(): boolean;
    export function is_OPTIONS(): boolean;
    export function is_INFO(): boolean;
    export function is_UPDATE(): boolean;
    export function is_PRACK(): boolean;

    // Return true of the URI address provided as parameter matches a local socket (IP) or local domain.
    export function is_myself(uri: string): boolean;

    // Return true if the URI in From header matches a local socket (IP) or local domain.
    export function is_myself_furi(): boolean;

    // Return true if the R-URI matches a local socket (IP) or local domain.
    export function is_myself_ruri(): boolean;

    // Return true if the URI in To header matches a local socket (IP) or local domain.
    export function is_myself_turi(): boolean;

    // Write a log message specifying the level value.
    export function log(level: "dbg"|"info"|"warn"|"crit"|"err", msg: string): void;

    // Set the SIP message/transaction flag at the index provided by the parameter. The flag parameter has to be a number from 0 to 31.
    export function setflag(flag: Flag): boolean;

    // Reset the SIP message/transaction flag at the index provided by the parameter. The flag parameter has to be a number from 0 to 31.
    export function resetflag(flag: Flag): boolean;

    // Return true if the message/transaction flag at the index provided by the parameter is set (the bit has value 1).
    export function isflagset(flag: Flag): boolean;

    // Set the branch flag at the index provided by the parameter. The flag parameter has to be a number from 0 to 31.
    export function setbflag(flag: Flag): boolean;

    // Reset the branch flag at the index provided by the parameter. The flag parameter has to be a number from 0 to 31.
    export function resetbflag(flag: Flag): boolean;

    // Return true if the branch flag at the index provided by the parameter is set (the bit has value 1).
    export function isbflagset(flag: Flag): boolean;

    // Set the flag at the index provided by the first parameter to the branch number specified by the second parameter.
    // The flag parameter has to be a number from 0 to 31.
    // The branch parameter should be between 0 and 12 (a matter of max_branches global parameter).
    export function setbiflag(flag: Flag, branch: number): boolean;

    // Reset a branch flag by position and branch index.
    export function resetbiflag(flag: Flag, branch: number): boolean;

    // Test if a branch flag is set by position and branch index.
    export function isbiflagset(flag: Flag, branch: number): boolean;

    // Set a script flag
    export function setsflag(flag: Flag): boolean;

    // Reset a script flag
    export function resetsflag(flag: Flag): boolean;

    // Test if a script flag is set
    export function issflagset(flag: Flag): boolean;

    // Set request URI
    export function seturi(uri: string): boolean;

    // Set request user
    export function setuser(usr: string): boolean;

    // Set request host
    export function sethost(host: string): boolean;

    // Set destination URI
    export function setdsturi(uri: string): boolean;

    // Reset the destination URI (aka: outbound proxy address, dst_uri, $du).
    export function resetdsturi(): boolean;

    // Test if destination URI is set.
    export function isdsturiset(): boolean;

    // Set the DROP flag, so at the end of KEMI script execution, the SIP request branch or the SIP response is not forwarded.
    export function set_drop(): void;
    export function set_advertised_address(addr: string): number;
    export function set_advertised_port(port: string): number;
    export function set_forward_close(): boolean;
    export function set_forward_no_connect(): boolean;
    export function set_reply_close(): boolean;
    export function set_reply_no_connect(): boolean;

    // Forward the SIP request in stateless mode to the address set in destination URI ($du), or,
    // if this is not set, to the address in request URI ($ru).
    export function forward(): number;

    // Forward the SIP request in stateless mode to the address provided in the SIP URI parameter.
    export function forward_uri(uri: string): number;

    // Special declaration of debugger and enum to avoid using reserved words
    namespace _debugger {
        function dbg_pv_dump(): number;
        function dbg_pv_dump_ex(mask: number, level: number): number;
    }

    namespace _enum {
        function enum_i_query_suffix(vsuffix: string): number;
        function enum_pv_query(ve164: string): number;
        function enum_pv_query_suffix(ve164: string, vsuffix: string): number;
        function enum_pv_query_suffix_service(ve164: string, vsuffix: string, vservice: string): number;
        function enum_query(): number;
        function enum_query_suffix(vsuffix: string): number;
        function enum_query_suffix_service(vsuffix: string, vservice: string): number;
        function i_enum_query(): number;
        function i_enum_query_suffix_service(vsuffix: string, vservice: string): number;
        function is_from_user_enum(): number;
        function is_from_user_enum_suffix(vsuffix: string): number;
        function is_from_user_enum_suffix_service(vsuffix: string, vservice: string): number;
    }

    // noinspection ReservedWordAsName
    // TypeScript Version: 2.2
    export {
        _debugger as debugger,
        _enum as enum
    };

    export namespace pv {
        // Return the value of pseudo-variable `pvname`.
        // The returned value can be string or integer
        function get(pvname: string): string|number|null;

        // Same as get(), but returns empty string on null
        function gete(pvname: string): string|number;

        // Same as get(), but returns `vn` on null
        function getvn(pvname: string, vn: number): string|number;

        // Return the value of pseudo-variable pvname if it is different than $null or
        // the parameter vs if the variable is having the $null value.
        function getvs(pvname: string, vn: number): string|number;

        // Return the value of pseudo-variable pvname if it is different than $null or the string <<null>> if the
        // variable is having the $null value. This should be used instead of KSR.pv.get(...) in the scripting
        // languages that throw and error when attempting to print a NULL (or NIL) value.
        function getw(pvname: string): string|number;

        // Set the value of pseudo-variable pvname to integer value provided by parameter val.
        function seti(pvname: string, val: number): void;

        // Set the value of pseudo-variable pvname to string value provided by parameter val.
        function sets(pvname: string, val: string): void;

        // Set the value of pseudo-variable pvname to $null.
        function unset(pvname: string): void;

        // Return true if pseudo-variable pvname is $null.
        function is_null(pvname: string): boolean;
    }

    export namespace hdr {
        // Append header to current SIP message (request or reply). It will be added after the last header.
        function append(hdr: string): number;

        // Append header to current SIP message (request or reply).
        // It will be added after the first header matching the name hdrName.
        function append_after(hdr: string, hdrName: string): number;

        // Insert header to current SIP message (request or reply).
        // It will be added before the first header.
        function insert(hdr: string): number;

        // Insert header to current SIP message (request or reply).
        // It will be added before the header matching the name hdrName.
        function insert_before(hdr: string, hdrName: string): number;

        // Remove all the headers with the name hdrName.
        function remove(hdrName: string): number;

        // Return greater than 0 if a header with the name hdrName exists and less than 0 if there is no such header.
        function is_present(hdrName: string): number;

        // Add a header to the SIP response to be generated by Kamailio for the current SIP request.
        function append_to_reply(hdr: string): number;
    }

    export namespace x {
        // Execute a function (specified by fname) exported by a Kamailio module. Additional parameters must be string
        // and they are passed to the Kamailio module function.
        function modf(name: string, ...params: string[]): number;

        // Equivalent of exit from native kamailio.cfg scripting language, stop the execution of the SIP routing script.
        function exit(): void;

        // Equivalent of drop from native kamailio.cfg scripting language, stop the execution of the SIP routing script
        // and drop routing further the SIP request branch or response.
        function drop(): void;
    }

    export namespace acc {
        // Equivalent of native kamailio.cfg function: acc_db_request("comment", "dbtable").
        function acc_db_request(comment: string, dbtable: string): number;
        // Equivalent of native kamailio.cfg function: acc_log_request("comment").
        function acc_log_request(comment: string): number;
        // Equivalent of native kamailio.cfg function: acc_request("comment", "dbtable").
        function acc_request(comment: string, dbtable: string): number;
    }

    export namespace acc_radius {
        function request(comment: string): number;
    }

    export namespace alias_db {
        function lookup(stable: string): number;
        function lookup_ex(stable: string, sflags: string): number;
    }

    export namespace app_jsdt {
        function dofile(script: string): number;
        function dostring(script: string): number;
        function run(func: string): number;
        function run_p1(func: string, p1: string): number;
        function run_p2(func: string, p1: string, p2: string): number;
        function run_p3(func: string, p1: string, p2: string, p3: string): number;
        function runstring(script: string): number;
    }

    export namespace app_lua {
        function dofile(script: string): number;
        function dostring(script: string): number;
        function run(func: string): number;
        function run_p1(func: string, p1: string): number;
        function run_p2(func: string, p1: string, p2: string): number;
        function run_p3(func: string, p1: string, p2: string, p3: string): number;
        function runstring(script: string): number;
    }

    export namespace app_python {
        function exec(method: string): number;
        function exec_p1(method: string, p1: string): number;
    }

    export namespace app_python3 {
        function exec(method: string): number;
        function exec_p1(method: string, p1: string): number;
    }

    export namespace app_ruby {
        function run(func: string): number;
        function run_p1(func: string, p1: string): number;
        function run_p2(func: string, p1: string, p2: string): number;
        function run_p3(func: string, p1: string, p2: string, p3: string): number;
    }

    export namespace app_sqlang {
        function dofile(script: string): number;
        function dostring(script: string): number;
        function run(func: string): number;
        function run_p1(func: string, p1: string): number;
        function run_p2(func: string, p1: string, p2: string): number;
        function run_p3(func: string, p1: string, p2: string, p3: string): number;
        function runstring(script: string): number;
    }

    export namespace async {
        function route(rn: string, s: number): number;
        function task_route(rn: string): number;
    }

    export namespace auth {
        function auth_challenge(realm: string, flags: number): number;
        function consume_credentials(): number;
        function has_credentials(srealm: string): number;
        function pv_auth_check(srealm: string, spasswd: string, vflags: number, vchecks: number): number;
    }

    export namespace auth_db {
        function auth_check(srealm: string, stable: string, iflags: number): number;
        function is_subscriber(suri: string, stable: string, iflags: number): number;
    }

    export namespace auth_ephemeral {
        function autheph_authenticate(susername: string, spassword: string): number;
        function autheph_check(srealm: string): number;
        function autheph_proxy(srealm: string): number;
        function autheph_www(srealm: string): number;
        function autheph_www_method(srealm: string, smethod: string): number;
    }

    export namespace auth_radius {
        function proxy_authorize(srealm: string): number;
        function proxy_authorize_user(srealm: string, suser: string): number;
        function www_authorize(srealm: string): number;
        function www_authorize_user(srealm: string, suser: string): number;
    }

    export namespace auth_xkeys {
        function auth_xkeys_add(shdr: string, skey: string, salg: string, sdata: string): number;
        function auth_xkeys_check(shdr: string, skey: string, salg: string, sdata: string): number;
    }

    export namespace benchmark {
        function bm_log_timer(tname: string): number;
        function bm_start_timer(tname: string): number;
    }

    export namespace blst {
        function blst_add(t: number): number;
        function blst_add_default(): number;
        function blst_add_retry_after(t_min: number, t_max: number): number;
        function blst_clear_ignore(mask: number): number;
        function blst_clear_ignore_all(): number;
        function blst_del(): number;
        function blst_is_blacklisted(): number;
        function blst_rpl_clear_ignore(mask: number): number;
        function blst_rpl_clear_ignore_all(): number;
        function blst_rpl_set_ignore(mask: number): number;
        function blst_rpl_set_ignore_all(): number;
        function blst_set_ignore(mask: number): number;
        function blst_set_ignore_all(): number;
    }

    export namespace call_control {
        function call_control(): number;
    }

    export namespace cfgutils {
        function abort(): number;
        function core_hash(s1: string, s2: string, sz: number): number;
        function lock(lkey: string): number;
        function pkg_status(): number;
        function pkg_summary(): number;
        function rand_event(): number;
        function rand_get_prob(): number;
        function rand_reset_prob(): number;
        function rand_set_prob(percent_par: number): number;
        function shm_status(): number;
        function shm_summary(): number;
        function trylock(lkey: string): number;
        function unlock(lkey: string): number;
    }

    export namespace cnxcc {
        function get_channel_count(sclient: string, pvname: string): number;
        function set_max_channels(sclient: string, max_chan: number): number;
        function set_max_credit(sclient: string, scredit: string, scps: string, initp: number, finishp: number): number;
        function set_max_time(sclient: string, max_secs: number): number;
        function terminate_all(sclient: string): number;
        function update_max_time(sclient: string, secs: number): number;
    }

    export namespace corex {
        function append_branch(): number;
        function append_branch_uri(uri: string): number;
        function append_branch_uri_q(uri: string, q: string): number;
        function has_ruri_user(): number;
        function has_user_agent(): number;
        function isxflagset(fval: number): number;
        function resetxflag(fval: number): number;
        function send_data(uri: string, data: string): number;
        function sendx(uri: string, sock: string, data: string): number;
        function set_recv_socket(ssock: string): number;
        function set_send_socket(ssock: string): number;
        function set_source_address(saddr: string): number;
        function setxflag(fval: number): number;
        function via_add_srvid(fval: number): number;
        function via_add_xavp_params(fval: number): number;
        function via_use_xavp_fields(fval: number): number;
    }

    export namespace counters {
        function add(sname: string, v: number): number;
        function inc(sname: string): number;
        function reset(sname: string): number;
    }

    export namespace crypto {
        function aes_decrypt(ins: string, keys: string, dpv: string): number;
        function aes_encrypt(ins: string, keys: string, dpv: string): number;
    }

    export namespace dialog {
        function dlg_bye(side: string): number;
        function dlg_db_load_callid(callid: string): number;
        function dlg_db_load_extra(): number;
        function dlg_get(sc: string, sf: string, st: string): number;
        function dlg_isflagset(val: number): number;
        function dlg_manage(): number;
        function dlg_resetflag(val: number): number;
        function dlg_set_property(pval: string): number;
        function dlg_set_timeout(to: number): number;
        function dlg_set_timeout_id(to: number, he: number, hi: number): number;
        function dlg_setflag(val: number): number;
        function get_profile_size(sprofile: string, svalue: string, spv: string): number;
        function get_profile_size_static(sprofile: string, spv: string): number;
        function is_in_profile(sprofile: string, svalue: string): number;
        function is_in_profile_static(sprofile: string): number;
        function is_known_dlg(): number;
        function set_dlg_profile(sprofile: string, svalue: string): number;
        function set_dlg_profile_static(sprofile: string): number;
        function unset_dlg_profile(sprofile: string, svalue: string): number;
        function unset_dlg_profile_static(sprofile: string): number;
    }

    export namespace dialplan {
        function dp_match(dpid: number, src: string): number;
        function dp_replace(dpid: number, src: string, dst: string): number;
    }

    export namespace dispatcher {
        function ds_is_from_list(group: number): number;
        function ds_is_from_list_mode(vset: number, vmode: number): number;
        function ds_is_from_list_uri(vset: number, vmode: number, vuri: string): number;
        function ds_is_from_lists(): number;
        function ds_list_exists(set: number): number;
        function ds_load_unset(): number;
        function ds_load_update(): number;
        function ds_mark_dst(): number;
        function ds_mark_dst_state(sval: string): number;
        function ds_next_domain(): number;
        function ds_next_dst(): number;
        function ds_reload(): number;
        function ds_select(set: number, alg: number): number;
        function ds_select_domain(set: number, alg: number): number;
        function ds_select_domain_limit(set: number, alg: number, limit: number): number;
        function ds_select_dst(set: number, alg: number): number;
        function ds_select_dst_limit(set: number, alg: number, limit: number): number;
        function ds_select_limit(set: number, alg: number, limit: number): number;
        function ds_select_routes(srules: string, smode: string): number;
        function ds_select_routes_limit(srules: string, smode: string, rlimit: number): number;
        function ds_set_domain(): number;
        function ds_set_dst(): number;
    }

    export namespace diversion {
        function add_diversion(reason: string): number;
        function add_diversion_uri(reason: string, uri: string): number;
    }

    export namespace dmq {
        function bcast_message(peer_str: string, body_str: string, ct_str: string): number;
        function handle_message(): number;
        function handle_message_rc(returnval: number): number;
        function is_from_node(): number;
        function send_message(peer_str: string, to_str: string, body_str: string, ct_str: string): number;
        function t_replicate(): number;
        function t_replicate_mode(mode: number): number;
    }

    export namespace domain {
        function is_domain_local(sdomain: string): number;
        function is_from_local(): number;
        function is_uri_host_local(): number;
        function lookup_domain(_sdomain: string): number;
        function lookup_domain_prefix(_sdomain: string, _sprefix: string): number;
    }

    export namespace drouting {
        function do_routing(grp_id: number): number;
        function do_routing_furi(): number;
        function goes_to_gw(): number;
        function goes_to_gw_type(type: number): number;
        function is_from_gw(): number;
        function is_from_gw_type(type: number): number;
        function is_from_gw_type_flags(type: number, flags: number): number;
        function next_routing(): number;
        function use_next_gw(): number;
    }

    export namespace evapi {
        function async_relay(sdata: string): number;
        function close(): number;
        function relay(sdata: string): number;
        function relay_multicast(sdata: string, stag: string): number;
        function relay_unicast(sdata: string, stag: string): number;
        function set_tag(stag: string): number;
    }

    export namespace exec {
        function exec_avp(cmd: string): number;
        function exec_dset(cmd: string): number;
        function exec_msg(cmd: string): number;
    }

    export namespace geoip {
        function match(tomatch: string, pvclass: string): number;
    }

    export namespace geoip2 {
        function match(tomatch: string, pvclass: string): number;
    }

    export namespace group {
        function is_user_in(uri: string, grp: string): number;
    }

    export namespace htable {
        function sht_has_name(sname: string, sop: string, sval: string): number;
        function sht_has_str_value(sname: string, sop: string, sval: string): number;
        function sht_iterator_end(iname: string): number;
        function sht_iterator_next(iname: string): number;
        function sht_iterator_start(iname: string, hname: string): number;
        function sht_lock(htname: string, skey: string): number;
        function sht_reset(hname: string): number;
        function sht_rm(hname: string, iname: string): number;
        function sht_rm_name(sname: string, sop: string, sval: string): number;
        function sht_rm_name_re(htname: string, rexp: string): number;
        function sht_rm_value(sname: string, sop: string, sval: string): number;
        function sht_rm_value_re(htname: string, rexp: string): number;
        function sht_setex(htname: string, itname: string, itval: number): number;
        function sht_seti(htname: string, itname: string, itval: number): number;
        function sht_sets(htname: string, itname: string, itval: string): number;
        function sht_setxi(htname: string, itname: string, itval: number, exval: number): number;
        function sht_setxs(htname: string, itname: string, itval: string, exval: number): number;
        function sht_unlock(htname: string, skey: string): number;
    }

    export namespace http_async_client {
        function query(sdata: string, rn: string): number;
    }

    export namespace http_client {
        function curl_connect(con: string, url: string, dpv: string): number;
        function curl_connect_post(con: string, url: string, ctype: string, data: string, dpv: string): number;
        function query(url: string, dpv: string): number;
        function query_post(url: string, post: string, dpv: string): number;
        function query_post_hdrs(url: string, post: string, hdrs: string, dpv: string): number;
    }

    export namespace imc {
        function imc_manager(): number;
    }

    export namespace ipops {
        function compare_ips(_sval1: string, _sval2: string): number;
        function compare_pure_ips(_sval1: string, _sval2: string): number;
        function detailed_ip_type(_sval: string, _dpv: string): number;
        function detailed_ipv4_type(_sval: string, _dpv: string): number;
        function detailed_ipv6_type(_sval: string, _dpv: string): number;
        function dns_int_match_ip(vhn: string, vip: string): number;
        function dns_query(naptrname: string, pvid: string): number;
        function dns_sys_match_ip(vhn: string, vip: string): number;
        function ip_is_in_subnet(_sval1: string, _sval2: string): number;
        function ip_type(sval: string): number;
        function is_in_subnet(_sval1: string, _sval2: string): number;
        function is_ip(sval: string): number;
        function is_ip4(sval: string): number;
        function is_ip6(sval: string): number;
        function is_ip6_reference(sval: string): number;
        function is_ip_rfc1918(sval: string): number;
        function is_pure_ip(sval: string): number;
        function naptr_query(naptrname: string, pvid: string): number;
        function srv_query(naptrname: string, pvid: string): number;
    }

    export namespace jansson {
        function get(spath: string, sdoc: string, spv: string): number;
    }

    export namespace jsonrpcs {
        function exec(scmd: string): number;
    }

    export namespace keepalive {
        function is_alive(dest: string): number;
    }

    export namespace kex {
        function resetdebug(): number;
        function setdebug(lval: number): number;
    }

    export namespace lcr {
        function defunct_gw(defunct_period: number): number;
        function from_any_gw(): number;
        function from_any_gw_addr(addr_str: string, transport: number): number;
        function from_gw(lcr_id: number): number;
        function from_gw_addr(lcr_id: number, addr_str: string, transport: number): number;
        function inactivate_gw(): number;
        function load_gws(lcr_id: number): number;
        function load_gws_furi(lcr_id: number, ruri_user: string, from_uri: string): number;
        function load_gws_ruser(lcr_id: number, ruri_user: string): number;
        function next_gw(): number;
        function to_any_gw(): number;
        function to_any_gw_addr(addr_str: string, transport: number): number;
        function to_gw(lcr_id: number): number;
        function to_gw_addr(lcr_id: number, addr_str: string, transport: number): number;
    }

    export namespace log_custom {
        function log_udp(txt: string): number;
    }

    export namespace log_systemd {
        function sd_journal_print(slev: string, stxt: string): number;
        function sd_journal_send_xvap(xname: string): number;
    }

    export namespace maxfwd {
        function is_maxfwd_lt(limit: number): number;
        function process_maxfwd(limit: number): number;
    }

    export namespace mediaproxy {
        function end_media_session(): number;
        function engage_media_proxy(): number;
        function use_media_proxy(): number;
    }

    export namespace misc_radius {
        function does_uri_exist(): number;
        function does_uri_exist_uval(suri: string): number;
        function does_uri_user_exist(): number;
        function does_uri_user_exist_uval(user: string): number;
        function is_user_in(user: string, group: string): number;
        function load_callee_avps(user: string): number;
        function load_caller_avps(user: string): number;
    }

    export namespace mqueue {
        function mq_add(mq: string, key: string, val: string): number;
        function mq_fetch(mq: string): number;
        function mq_pv_free(mq: string): number;
        function mq_size(mq: string): number;
    }

    export namespace msilo {
        function mdump(): number;
        function mdump_uri(owner_s: string): number;
        function mstore(): number;
        function mstore_uri(owner_s: string): number;
    }

    export namespace msrp {
        function cmap_lookup(): number;
        function cmap_save(): number;
        function is_reply(): number;
        function is_request(): number;
        function relay(): number;
        function relay_flags(rtflags: number): number;
        function reply(rcode: string, rtext: string, rhdrs: string): number;
        function reply_flags(rtflags: number): number;
        function set_dst(rtaddr: string, rfsock: string): number;
    }

    export namespace mtree {
        function mt_match(tname: string, tomatch: string, mval: number): number;
    }

    export namespace nat_traversal {
        function client_nat_test(tests: number): number;
        function fix_contact(): number;
        function nat_keepalive(): number;
    }

    export namespace nathelper {
        function add_contact_alias(): number;
        function add_contact_alias_addr(ip_str: string, port_str: string, proto_str: string): number;
        function add_rcv_param(upos: number): number;
        function fix_nated_contact(): number;
        function fix_nated_register(): number;
        function fix_nated_sdp(level: number): number;
        function fix_nated_sdp_ip(level: number, ip: string): number;
        function handle_ruri_alias(): number;
        function is_rfc1918(address: string): number;
        function nat_uac_test(tests: number): number;
        function set_contact_alias(): number;
    }

    export namespace ndb_mongodb {
        function exec(ssrv: string, sdname: string, scname: string, scmd: string, sres: string): number;
        function exec_simple(ssrv: string, sdname: string, scname: string, scmd: string, sres: string): number;
        function find(ssrv: string, sdname: string, scname: string, scmd: string, sres: string): number;
        function find_one(ssrv: string, sdname: string, scname: string, scmd: string, sres: string): number;
        function free_reply(name: string): number;
        function next_reply(name: string): number;
    }

    export namespace ndb_redis {
        function redis_cmd(srv: string, rcmd: string, sres: string): number;
        function redis_cmd_p1(srv: string, rcmd: string, p1: string, sres: string): number;
        function redis_cmd_p2(srv: string, rcmd: string, p1: string, p2: string, sres: string): number;
        function redis_cmd_p3(srv: string, rcmd: string, p1: string, p2: string, p3: string, sres: string): number;
        function redis_free(name: string): number;
    }

    export namespace path {
        function add_path(): number;
        function add_path_received(): number;
        function add_path_received_user(_user: string): number;
        function add_path_received_user_params(_user: string, _params: string): number;
        function add_path_user(_user: string): number;
        function add_path_user_params(_user: string, _params: string): number;
    }

    export namespace pdt {
        function pd_translate(sd: string, md: number): number;
        function pprefix2domain(m: number, s: number): number;
    }

    export namespace permissions {
        function allow_address(addr_group: number, ips: string, port: number): number;
        function allow_address_group(_addr: string, _port: number): number;
        function allow_source_address(addr_group: number): number;
        function allow_source_address_group(): number;
    }

    export namespace phonenum {
        function match(tomatch: string, pvclass: string): number;
    }

    export namespace pike {
        function pike_check_req(): number;
    }

    export namespace pipelimit {
        function pl_check(pipeid: string): number;
        function pl_check_limit(pipeid: string, alg: string, limit: number): number;
        function pl_drop(): number;
        function pl_drop_range(rmin: number, rmax: number): number;
        function pl_drop_retry(rafter: number): number;
    }

    export namespace prefix_route {
        function prefix_route(ruser: string): number;
        function prefix_route_uri(): number;
    }

    export namespace presence {
        function handle_publish(): number;
        function handle_publish_uri(sender_uri: string): number;
        function handle_subscribe(): number;
        function handle_subscribe_uri(wuri: string): number;
        function pres_auth_status(watcher_uri: string, presentity_uri: string): number;
        function pres_has_subscribers(pres_uri: string, wevent: string): number;
        function pres_refresh_watchers(pres: string, event: string, type: number): number;
        function pres_refresh_watchers_file(pres: string, event: string, type: number, file_uri: string, filename: string): number;
        function pres_update_watchers(pres_uri: string, event: string): number;
    }

    export namespace presence_xml {
        function pres_check_activities(pres_uri: string, activity: string): number;
        function pres_check_basic(pres_uri: string, status: string): number;
    }

    export namespace pua {
        function pua_set_publish(): number;
        function pua_update_contact(): number;
    }

    export namespace pvx {
        function evalx(dst: string, fmt: string): number;
        function pv_var_to_xavp(varname: string, xname: string): number;
        function pv_xavp_print(): number;
        function pv_xavp_to_var(xname: string): number;
        function sbranch_append(): number;
        function sbranch_reset(): number;
        function sbranch_set_ruri(): number;
        function xavp_params_explode(sparams: string, sxname: string): number;
        function xavp_params_implode(sxname: string, svname: string): number;
    }

    export namespace rabbitmq {
        function publish(exchange: string, routingkey: string, contenttype: string, messagebody: string): number;
        function publish_consume(exchange: string, routingkey: string, contenttype: string, messagebody: string, dpv: string): number;
    }

    export namespace regex {
        function pcre_match(string: string, regex: string): number;
        function pcre_match_group(string: string, num_pcre: number): number;
    }

    export namespace registrar {
        function add_sock_hdr(hdr_name: string): number;
        function lookup(table: string): number;
        function lookup_branches(_dtable: string): number;
        function lookup_to_dset(table: string, uri: string): number;
        function lookup_uri(table: string, uri: string): number;
        function reg_fetch_contacts(dtable: string, uri: string, profile: string): number;
        function reg_free_contacts(profile: string): number;
        function registered(table: string): number;
        function registered_action(_dtable: string, _uri: string, _f: number, _aflags: number): number;
        function registered_flags(_dtable: string, _uri: string, _f: number): number;
        function registered_uri(_dtable: string, _uri: string): number;
        function save(table: string, flags: number): number;
        function save_uri(table: string, flags: number, uri: string): number;
        function set_q_override(new_q: string): number;
        function unregister(_dtable: string, _uri: string): number;
        function unregister_ruid(_dtable: string, _uri: string, _ruid: string): number;
    }

    export namespace rls {
        function handle_notify(): number;
        function handle_subscribe(): number;
        function handle_subscribe_uri(wuri: string): number;
        function update_subs(uri: string, event: string): number;
    }

    export namespace rr {
        function add_rr_param(sparam: string): number;
        function check_route_param(sre: string): number;
        function is_direction(dir: string): number;
        function loose_route(): number;
        function record_route(): number;
        function record_route_params(params: string): number;
        function remove_record_route(): number;
    }

    export namespace rtjson {
        function init_routes(rdoc: string): number;
        function next_route(): number;
        function push_routes(): number;
        function update_branch(): number;
    }

    export namespace rtpengine {
        function rtpengine_answer(flags: string): number;
        function rtpengine_answer0(): number;
        function rtpengine_delete(flags: string): number;
        function rtpengine_delete0(): number;
        function rtpengine_manage(flags: string): number;
        function rtpengine_manage0(): number;
        function rtpengine_offer(flags: string): number;
        function rtpengine_offer0(): number;
        function set_rtpengine_set(r1: number): number;
        // This function is the sibling function to set_rtpengine_set().
        // The original module function is declared as set_rtpengine_set(setid[, setid2]).
        // In KEMI set_rtpengine_set() takes only the first parameter and set_rtpengine_set2() allows for the second optional parameter to be passed.
        // Please review the documentation for set_rtpengine_set() for more information.
        function set_rtpengine_set2(r1: number, r2: number): number;
        function start_recording(): number;
        function stop_recording(): number;
    }

    export namespace rtpproxy {
        function rtpproxy_answer(flags: string): number;
        function rtpproxy_answer0(): number;
        function rtpproxy_answer_ip(flags: string, mip: string): number;
        function rtpproxy_destroy(flags: string): number;
        function rtpproxy_destroy0(): number;
        function rtpproxy_manage(flags: string): number;
        function rtpproxy_manage0(): number;
        function rtpproxy_manage_ip(flags: string, mip: string): number;
        function rtpproxy_offer(flags: string): number;
        function rtpproxy_offer0(): number;
        function rtpproxy_offer_ip(flags: string, mip: string): number;
        function rtpproxy_stop_stream2uac(): number;
        function rtpproxy_stop_stream2uas(): number;
        function rtpproxy_stream2uac(pname: string, count: number): number;
        function rtpproxy_stream2uas(pname: string, count: number): number;
        function set_rtpproxy_set(rset: number): number;
        function start_recording(): number;
    }

    export namespace sanity {
        function sanity_check(mflags: number, uflags: number): number;
        function sanity_check_defaults(): number;
        function sanity_reply(): number;
    }

    export namespace sca {
        function call_info_update(update_mask: number, uri_to: string, uri_from: string): number;
        function call_info_update_default(): number;
        function call_info_update_mask(umask: number): number;
        function call_info_update_turi(umask: number, sto: string): number;
        function handle_subscribe(): number;
    }

    export namespace sdpops {
        function keep_codecs_by_id(codecs: string, media: string): number;
        function keep_codecs_by_name(codecs: string, media: string): number;
        function remove_codecs_by_id(codecs: string, media: string): number;
        function remove_codecs_by_name(codecs: string, media: string): number;
        function remove_line_by_prefix(prefix: string, media: string): number;
        function remove_media(media: string): number;
        function sdp_content(): number;
        function sdp_content_flags(flags: number): number;
        function sdp_get(avp: string): number;
        function sdp_get_line_startswith(aname: string, sline: string): number;
        function sdp_print(llevel: number): number;
        function sdp_transport(avp: string): number;
        function sdp_with_active_media(media: string): number;
        function sdp_with_ice(): number;
        function sdp_with_media(media: string): number;
    }

    export namespace sipcapture {
        function float2int(_val: string, _coof: string): number;
        function report_capture(_table: string): number;
        function report_capture_cid(_table: string, _cid: string): number;
        function report_capture_data(_table: string, _cid: string, _data: string): number;
        function sip_capture(): number;
        function sip_capture_forward(puri: string): number;
        function sip_capture_mode(_table: string, _cmdata: string): number;
        function sip_capture_table(_table: string): number;
    }

    export namespace sipdump {
        function send(stag: string): number;
    }

    export namespace sipjson {
        function sj_serialize(smode: string, pvn: string): number;
    }

    export namespace siptrace {
        function hlog(message: string): number;
        function hlog_cid(correlationid: string, message: string): number;
        function sip_trace(): number;
        function sip_trace_dst(duri: string): number;
        function sip_trace_dst_cid(duri: string, cid: string): number;
    }

    export namespace siputils {
        function has_totag(): number;
        function is_alphanum(tval: string): number;
        function is_alphanumex(tval: string, eset: string): number;
        function is_first_hop(): number;
        function is_numeric(tval: string): number;
        function is_reply(): number;
        function is_request(): number;
        function is_tel_number(tval: string): number;
        function is_uri(suri: string): number;
        function is_user(suser: string): number;
        function uri_param(sparam: string): number;
        function uri_param_value(sparam: string, svalue: string): number;
    }

    export namespace sl {
        function send_reply(code: number, reason: string): number;
        function sl_forward_reply(code: string, reason: string): number;
        function sl_reply_error(): number;
        function sl_send_reply(code: number, reason: string): number;
    }

    export namespace speeddial {
        function lookup(stable: string): number;
        function lookup_owner(stable: string, sowner: string): number;
    }

    export namespace sqlops {
        function sql_is_null(sres: string, i: number, j: number): number;
        function sql_num_columns(sres: string): number;
        function sql_num_rows(sres: string): number;
        function sql_query(scon: string, squery: string, sres: string): number;
        function sql_query_async(scon: string, squery: string): number;
        function sql_result_free(sres: string): number;
        function sql_xquery(scon: string, squery: string, xavp: string): number;
    }

    export namespace ss7ops {
        function isup_to_json(proto: number): number;
    }

    export namespace sst {
        function sst_check_min(flag: number): number;
    }

    export namespace statistics {
        function reset_stat(sname: string): number;
        function update_stat(sname: string, sval: number): number;
    }

    export namespace statsc {
        function statsc_reset(): number;
    }

    export namespace statsd {
        function statsd_decr(key: string): number;
        function statsd_gauge(key: string, val: string): number;
        function statsd_incr(key: string): number;
        function statsd_set(key: string, val: string): number;
        function statsd_start(key: string): number;
        function statsd_stop(key: string): number;
    }

    export namespace tcpops {
        function tcp_conid_alive(i_conid: number): number;
        function tcp_conid_state(i_conid: number): number;
        function tcp_enable_closed_event(): number;
        function tcp_enable_closed_event_cid(i_conid: number): number;
        function tcp_keepalive_disable(): number;
        function tcp_keepalive_disable_cid(i_con: number): number;
        function tcp_keepalive_enable(i_idle: number, i_cnt: number, i_intvl: number): number;
        function tcp_keepalive_enable_cid(i_con: number, i_idle: number, i_cnt: number, i_intvl: number): number;
        function tcp_set_connection_lifetime(i_time: number): number;
        function tcp_set_connection_lifetime_cid(i_conid: number, i_time: number): number;
    }

    export namespace textops {
        function append_body_part(txt: string, ct: string): number;
        function append_body_part_cd(txt: string, ct: string, cd: string): number;
        function append_body_part_hex(txt: string, ct: string): number;
        function append_body_part_hex_cd(htxt: string, ct: string, cd: string): number;
        function cmp_istr(s1: string, s2: string): number;
        function cmp_str(s1: string, s2: string): number;
        function filter_body(content_type: string): number;
        function get_body_part(ctype: string, pvname: string): number;
        function get_body_part_raw(ctype: string, pvname: string): number;
        function has_body(): number;
        function has_body_type(ctype: string): number;
        function in_list(subject: string, list: string, vsep: string): number;
        function in_list_prefix(subject: string, list: string, vsep: string): number;
        function is_audio_on_hold(): number;
        function is_present_hf(hname: string): number;
        function is_present_hf_re(ematch: string): number;
        function is_privacy(privacy: string): number;
        function remove_body_part(content_type: string): number;
        function remove_hf_exp(ematch: string, eskip: string): number;
        function remove_hf_re(ematch: string): number;
        function replace(sre: string, sval: string): number;
        function replace_all(sre: string, sval: string): number;
        function replace_body(sre: string, sval: string): number;
        function replace_body_all(sre: string, sval: string): number;
        function replace_body_atonce(sre: string, sval: string): number;
        function replace_body_str(mkey: string, rval: string, rmode: string): number;
        function replace_hdrs(sre: string, sval: string): number;
        function replace_hdrs_str(mkey: string, rval: string, rmode: string): number;
        function replace_str(mkey: string, rval: string, rmode: string): number;
        function search(sre: string): number;
        function search_append(ematch: string, val: string): number;
        function search_append_body(ematch: string, val: string): number;
        function search_body(sre: string): number;
        function search_hf(hname: string, sre: string, flags: string): number;
        function set_body(nb: string, nc: string): number;
        function set_body_multipart(nbody: string, ctype: string, boundary: string): number;
        function set_body_multipart_boundary(boundary: string): number;
        function set_body_multipart_content(nbody: string, ctype: string): number;
        function set_body_multipart_mode(): number;
        function set_reply_body(nb: string, nc: string): number;
        function starts_with(s1: string, s2: string): number;
        function subst(subst: string): number;
        function subst_body(subst: string): number;
        function subst_hf(hname: string, subst: string, flags: string): number;
        function subst_uri(subst: string): number;
        function subst_user(subst: string): number;
    }

    export namespace textopsx {
        function append_hf_value(hexp: string, val: string): number;
        function assign_hf_value(hexp: string, val: string): number;
        function assign_hf_value2(hexp: string, val: string): number;
        function change_reply_status(code: number, reason: string): number;
        function exclude_hf_value(hexp: string, val: string): number;
        function fnmatch(val: string, match: string): number;
        function fnmatch_ex(val: string, match: string, flags: string): number;
        function hf_value_exists(hexp: string, val: string): number;
        function include_hf_value(hexp: string, val: string): number;
        function insert_hf_value(hexp: string, val: string): number;
        function keep_hf(): number;
        function keep_hf_re(sre: string): number;
        function msg_apply_changes(): number;
        function msg_set_buffer(obuf: string): number;
        function remove_body(): number;
        function remove_hf_value(hexp: string): number;
        function remove_hf_value2(hexp: string, val: string): number;
    }

    export namespace tls {
        function is_peer_verified(): number;
    }

    export namespace tm {
        function t_any_replied(): number;
        function t_any_timeout(): number;
        function t_branch_replied(): number;
        function t_branch_timeout(): number;
        function t_check_status(sexp: string): number;
        function t_check_trans(): number;
        function t_drop_replies(mode: string): number;
        function t_drop_replies_all(): number;
        function t_grep_status(code: number): number;
        function t_is_canceled(): number;
        function t_is_expired(): number;
        function t_is_retr_async_reply(): number;
        function t_is_set(target: string): number;
        function t_load_contacts(): number;
        function t_lookup_cancel(): number;
        function t_lookup_cancel_flags(flags: number): number;
        function t_lookup_request(): number;
        function t_newtran(): number;
        function t_next_contact_flow(): number;
        function t_next_contacts(): number;
        function t_on_branch(rname: string): number;
        function t_on_branch_failure(rname: string): number;
        function t_on_failure(rname: string): number;
        function t_on_reply(rname: string): number;
        function t_relay(): number;
        function t_release(): number;
        function t_replicate(suri: string): number;
        function t_reply(code: number, reason: string): number;
        function t_reset_fr(): number;
        function t_reset_max_lifetime(): number;
        function t_reset_retr(): number;
        function t_retransmit_reply(): number;
        function t_save_lumps(): number;
        function t_send_reply(code: number, reason: string): number;
        function t_set_auto_inv_100(state: number): number;
        function t_set_disable_6xx(state: number): number;
        function t_set_disable_failover(state: number): number;
        function t_set_disable_internal_reply(state: number): number;
        function t_set_fr(fr_inv: number, fr: number): number;
        function t_set_fr_inv(fr_inv: number): number;
        function t_set_max_lifetime(t1: number, t2: number): number;
        function t_set_no_e2e_cancel_reason(state: number): number;
        function t_set_retr(t1: number, t2: number): number;
        function t_uac_send(method: string, ruri: string, nexthop: string, ssock: string, hdrs: string, body: string): number;
        function t_use_uac_headers(): number;
    }

    export namespace tmrec {
        function is_leap_year(y: number): number;
        function is_leap_year_now(): number;
        function match(rv: string): number;
        function match_timestamp(rv: string, ti: number): number;
        function time_period_match(period: string): number;
        function time_period_match_timestamp(period: string, ti: number): number;
    }

    export namespace tmx {
        function t_cancel_branches(mode: string): number;
        function t_cancel_callid(callid_s: string, cseq_s: string, fl: number): number;
        function t_cancel_callid_reason(callid_s: string, cseq_s: string, fl: number, rcode: number): number;
        function t_continue(tindex: number, tlabel: number, cbname: string): number;
        function t_flush_flags(): number;
        function t_flush_xflags(): number;
        function t_is_branch_route(): number;
        function t_is_failure_route(): number;
        function t_is_reply_route(): number;
        function t_is_request_route(): number;
        function t_precheck_trans(): number;
        function t_reply_callid(callid_s: string, cseq_s: string, code: number, status_s: string): number;
        function t_reuse_branch(): number;
        function t_suspend(): number;
    }

    export namespace tsilo {
        function ts_append(_table: string, _ruri: string): number;
        function ts_append_to(tindex: number, tlabel: number, _table: string): number;
        function ts_append_to_uri(tindex: number, tlabel: number, _table: string, _uri: string): number;
        function ts_store(): number;
        function ts_store_uri(puri: string): number;
    }

    export namespace uac {
        function uac_auth(): number;
        function uac_reg_disable(attr: string, val: string): number;
        function uac_reg_enable(attr: string, val: string): number;
        function uac_reg_lookup(userid: string, sdst: string): number;
        function uac_reg_refresh(l_uuid: string): number;
        function uac_reg_request_to(userid: string, imode: number): number;
        function uac_reg_status(sruuid: string): number;
        function uac_replace_from(pdsp: string, puri: string): number;
        function uac_replace_from_uri(puri: string): number;
        function uac_replace_to(pdsp: string, puri: string): number;
        function uac_replace_to_uri(puri: string): number;
        function uac_req_send(): number;
        function uac_restore_from(): number;
        function uac_restore_to(): number;
    }

    export namespace uac_redirect {
        function get_redirects(max_c: number, max_b: number): number;
        function get_redirects_acc(max_c: number, max_b: number, reason: string): number;
        function get_redirects_all(): number;
    }

    export namespace uri_db {
        function check_from(): number;
        function check_to(): number;
        function check_uri(suri: string): number;
        function check_uri_realm(suri: string, susername: string, srealm: string): number;
        function does_uri_exist(): number;
    }

    export namespace userblacklist {
        function check_user_blacklist(suser: string, sdomain: string): number;
        function check_user_blacklist_number(suser: string, sdomain: string, snumber: string): number;
        function check_user_blacklist_table(suser: string, sdomain: string, snumber: string, stable: string): number;
        function check_user_whitelist(suser: string, sdomain: string): number;
        function check_user_whitelist_number(suser: string, sdomain: string, snumber: string): number;
        function check_user_whitelist_table(suser: string, sdomain: string, snumber: string, stable: string): number;
    }

    export namespace utils {
        function xcap_auth_status(watcher_uri: string, presentity_uri: string): number;
    }

    export namespace websocket {
        function close(): number;
        function close_conid(status: number, reason: string, con: number): number;
        function close_reason(status: number, reason: string): number;
        function handle_handshake(): number;
    }

    export namespace xcap_server {
        function xcaps_del(uri: string, path: string): number;
        function xcaps_get(uri: string, path: string): number;
        function xcaps_put(uri: string, path: string, pbody: string): number;
    }

    export namespace xhttp {
        function xhttp_reply(code: number, reason: string, ctype: string, body: string): number;
    }

    export namespace xhttp_pi {
        function dispatch(): number;
    }

    export namespace xhttp_rpc {
        function dispatch(): number;
    }

    export namespace xlog {
        function xalert(lmsg: string): number;
        function xcrit(lmsg: string): number;
        function xdbg(lmsg: string): number;
        function xerr(lmsg: string): number;
        function xinfo(lmsg: string): number;
        function xlog(slevel: string, lmsg: string): number;
        function xnotice(lmsg: string): number;
        function xwarn(lmsg: string): number;
    }

    export namespace xmlrpc {
        function dispatch_rpc(): number;
        function xmlrpc_reply(rcode: number, reason: string): number;
    }
}
