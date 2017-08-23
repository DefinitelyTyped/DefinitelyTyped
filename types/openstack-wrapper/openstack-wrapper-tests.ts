import * as OSWrap from 'openstack-wrapper';

const keystone = new OSWrap.Keystone("endpoint-url");
const glance = new OSWrap.Glance("endpoint-url", "auth-token");
const neutron = new OSWrap.Neutron("endpoint-url", "auth-token");
const octavia = new OSWrap.Octavia("endpoint-url", "auth-token");
const nova = new OSWrap.Nova("endpoint-url", "auth-token");
