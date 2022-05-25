import { auth, cartridge, code, instance, job, slas, user, webdav } from "sfcc-ci";

auth.auth('test_client_id', 'test_client_secret', (err: any, response: any) => { });

cartridge.add('instance', 'cartridge', 'position', 'target', 'siteid', 'verbose', 'token', () => { });

code.list('instance', 'token', () => { });
code.deploy('instance', 'archive', 'token', {}, () => { });
code.activate('instance', 'code_version', 'token', () => { });
code.compare('instance', 'localDirectories', {}).then(() => { });

instance.upload('instance', 'file', 'token', {}, () => { });
instance.import('instance', 'file_name', 'token', () => { });

job.run('instance', 'job_id', [], 'token', () => { });
job.status('instance', 'job_id', 'job_execution_id', 'token', () => { });

slas.tenant.add('tenantId', 'shortcode', 'description', 'merchantName', 'contact', 'emailAddress', 'filename').then(() => { });
slas.tenant.get('tenantId', 'shortcode').then(() => { });
slas.tenant.list('shortcode').then(() => { });
slas.tenant.delete('tenantId', 'shortcode').then(() => { });

slas.client.add('tenantId', 'shortcode', 'file', 'clientid', 'clientname', 'privateclient', 'ecomtenant', 'ecomsite', 'secret', 'channels', 'scopes', 'redirecturis').then(() => { });
slas.client.get('tenantId', 'shortcode', 'clientId').then(() => {});
slas.client.list('shortcode', 'tenantId').then(() => {});
slas.client.delete('tenantId', 'shortcode', 'clientId').then(() => {});

user.create ('org', 'user', 'mail', 'firstName', 'lastName', 'token').then(() => {});
user.list('org', 'role', 'login', 1, 'sortBy', 'token').then(() => {});
user.update ('login', 'changes', 'token').then(() => {});
user.grant ('login', 'role', 'scope', 'token').then(() => {});
user.revoke ('login', 'role', 'scope', 'token').then(() => {});
user.delete ('login', true, 'token').then(() => {});
user.createLocal ('instance', 'login', 'user', 'token').then(() => {});
user.searchLocal ('instance', 'login', 'query', 'role', 'sortBy', 'count', 'start', 'token').then(() => {});
user.updateLocal ('instance', 'login', 'changes', 'token').then(() => {});
user.grantLocal ('instance', 'login', 'role', 'token').then(() => {});
user.revokeLocal ('instance', 'login', 'role', 'token').then(() => {});
user.deleteLocal ('instance', 'login', 'token').then(() => {});

webdav.upload('instance', 'path', 'file', 'token', {}, () => {});
