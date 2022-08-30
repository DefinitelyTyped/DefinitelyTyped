import * as pmCollection from 'postman-collection';

// PropertyBaseDefinition tests
const pbDef: pmCollection.PropertyBaseDefinition = {};
pbDef.description; // $ExpectType string | DescriptionDefinition | undefined

// PropertyBase tests
const PropertyBase = pmCollection.PropertyBase;

let pb = new PropertyBase();
pb = new PropertyBase('string definition');
pb = new PropertyBase({ description: 'string description' });
pb = new PropertyBase({ info: {} });
pb = new PropertyBase({ info: { description: 'string description' } });

pb.description; // $ExpectType string | DescriptionDefinition | undefined
pb.findInParents('string'); // $ExpectType PropertyBase<PropertyBaseDefinition>
pb.findInParents('string', el => true); // $ExpectType PropertyBase<PropertyBaseDefinition>

pb.findParentContaining('string', el => true); // $ExpectType PropertyBase<PropertyBaseDefinition>

pb.forEachParent(el => { }); // $ExpectType void
pb.forEachParent({ withRoot: true }, el => { }); // $ExpectType void

pb.meta(); // $ExpectType any

pb.parent(); // $ExpectType PropertyBase<PropertyBaseDefinition> | undefined

pb.setParent(pb); // $ExpectType void

pb.toJSON(); // $ExpectType {}

PropertyBase.propertyIsMeta(null, 'string'); // $ExpectType boolean

PropertyBase.propertyUnprefixMeta(null, '_String'); // $ExpectType string

PropertyBase.toJSON({}); // $ExpectType any

// PropertyDefinition Tests
const propDef: pmCollection.PropertyDefinition = {};
propDef.id; // $ExpectType string | undefined
propDef.name; // $ExpectType string | undefined
propDef.disabled; // $$ExpectType boolean | undefined
propDef.description; // $$ExpectType string | DescriptionDefinition | undefined

// Property Tests
const Property = pmCollection.Property;
let p = new Property();
p = new Property(propDef);
p = new Property({ info: propDef, disabled: true });

p.id; // $ExpectType string
p.name; // $ExpectType string
p.disabled; // $ExpectType boolean

p.describe('string'); // $ExpectType void
p.describe('String', 'string'); // $ExpectType void

p.toObjectResolved(null, []); // $ExpectType {}
p.toObjectResolved({ variables: new pmCollection.VariableList(p, []) }, []); // $ExpectType {}
p.toObjectResolved(null, [], { ignoreOwnVariables: true }); // $ExpectType {}

Property.replaceSubstitutions('string', new pmCollection.VariableList(p, [])); // $ExpectType string
Property.replaceSubstitutionsIn({}, [new pmCollection.VariableList(p, [])], false); // $ExpectType {}

// CertificateDefinition Tests
const certDef: pmCollection.CertificateDefinition = {};
certDef.matches; // $ExpectType string[] | UrlMatchPatternList | undefined
certDef.key; // $ExpectType string | { src?: string | undefined; } | undefined
certDef.cert; // $ExpectType string | { src?: string | undefined; } | undefined
certDef.passphrase; // $ExpectType string | undefined

// Certificate Tests
const certificate = new pmCollection.Certificate({});
certificate.cert; // $ExpectType { src?: string | undefined; }
certificate.key; // $ExpectType { src?: string | undefined; }
certificate.matches; // $ExpectType UrlMatchPatternList
certificate.passphrase; // $ExpectType string

certificate.canApplyTo('string'); // $ExpectType boolean
certificate.canApplyTo(new pmCollection.Url({ host: 'string', path: 'string' })); // $ExpectType boolean

certificate.update({}); // $ExpectType void

pmCollection.Certificate.isCertificate(certificate); // $ExpectType boolean

// PropertyList Tests
const pList = new pmCollection.PropertyList<pmCollection.Certificate>('Certificate', null, []);
pList.add(certificate); // $ExpectType void
pList.all(); // $ExpectType Certificate[]
pList.append(certificate); // $ExpectType void
pList.assimilate(pList, false); // $ExpectType void
pList.assimilate([certificate], false); // ExpectType void
pList.clear(); // $ExpectType void
pList.count(); // $ExpectType number
pList.each((el: pmCollection.Certificate) => { }); // $ExpectType void
pList.each((el: pmCollection.Certificate) => { }, pList); // $ExpectType void
pList.eachParent((el: any) => { }); // $ExpectType void
pList.eachParent((el: any) => { }, pList); // $ExpectType void
pList.filter(el => true, pList); // $ExpectType Certificate[]
pList.find(el => true, pList); // $ExpectType Certificate
pList.get('string'); // $ExpectType any
pList.has('string'); // $ExpectType boolean
pList.has('string', null); // $ExpectType boolean
pList.has(certificate); // $ExpectType boolean
pList.idx(1); // ExpectType Certificate
pList.indexOf('string'); // ExpectType number
pList.insert(certificate, 'string'); // ExpectType void
pList.insert(certificate, certificate); // ExpectType void
pList.insertAfter(certificate, 'string'); // ExpectType void
pList.insertAfter(certificate, certificate); // ExpectType void
pList.map(el => el); // ExpectType any
pList.map(el => el, pList); // ExpectType any
pList.one('string'); // ExpectType Certificate
pList.populate([]); // ExpectType void
pList.remove(el => true, pList); // ExpectType void
pList.remove('string', pList); // ExpectType void
pList.remove(certificate, pList); // $ExpectType void
pList.repopulate(null); // $ExpectType void
pList.toJSON(); // $ExpectType any
pList.toObject(true, true, true, true); // $ExpectType any
pList.toString(); // $ExpectType string
pList.upsert(certificate); // $ExpectType boolean | null
pmCollection.PropertyList.isPropertyList(pList); // $ExpectType boolean

// CertificateList Tests
const certList = new pmCollection.CertificateList(null, [pList]);
certList.resolveOne('string'); // $ExpectType CertificateDefinition
pmCollection.CertificateList.isCertificateList(certList); // $ExpectType boolean

// ItemGroupDefinition Tests
const igDef: pmCollection.ItemGroupDefinition = {};
igDef.item; // $ExpectType (ItemGroupDefinition | ItemDefinition)[] | undefined
igDef.auth; // $ExpectType RequestAuthDefinition | undefined
igDef.event; // $ExpectType EventDefinition[] | undefined

// ItemGroup Tests
const ig = new pmCollection.ItemGroup<pmCollection.Certificate>();
ig.auth; // $ExpectType RequestAuth | undefined
ig.items; // $ExpectType PropertyList<Certificate | ItemGroup<Certificate>>
ig.events; // $ExpectType EventList

ig.authorizeRequestsUsing('string'); // $ExpectType void
ig.authorizeRequestsUsing({}); // $ExpectType void
ig.authorizeRequestsUsing('string', new pmCollection.VariableList(ig, [])); // $ExpectType void

ig.forEachItem(el => { }); // $ExpectType void
ig.forEachItemGroup(el => { }); // $ExpectType void

ig.oneDeep('string'); // $ExpectType Certificate

pmCollection.ItemGroup.isItemGroup(ig); // $ExpectType boolean

// CollectionDefinition Tests
const colDef: pmCollection.CollectionDefinition = {};
colDef.info; // $ExpectType { id?: string | undefined; name?: string | undefined; version?: string | undefined; } | undefined
colDef.variable; // $ExpectType VariableDefinition[] | undefined

let collection: pmCollection.Collection;
collection = new pmCollection.Collection();
collection = new pmCollection.Collection({});
collection = new pmCollection.Collection({}, []);

collection.events; // $ExpectType EventList
collection.variables; // $ExpectType VariableList
collection.version; // $ExpectType Version | undefined

collection.syncVariablesFrom({}); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined
collection.syncVariablesFrom({}, true); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined

collection.syncVariablesTo({}); // ExpectType $ExpectType { [key: string]: VariableDefinition; }

collection.toJSON(); // $ExpectType CollectionDefinition

pmCollection.Collection.isCollection(collection); // $ExpectType boolean

// CookieDefinition Tests
const cookieDef: pmCollection.CookieDefinition = {
  domain: 'string',
  path: 'string',
};
cookieDef.key; // $ExpectType string | undefined
cookieDef.value; // ExpectType string | undefined
cookieDef.expires; // $ExpectType string | number | Date | undefined
cookieDef.maxAge; // $ExpectType number | undefined
cookieDef.domain; // $ExpectType string
cookieDef.path; // $ExpectType string
cookieDef.secure; // $ExpectType boolean | undefined
cookieDef.httpOnly; // $ExpectType boolean | undefined
cookieDef.hostOnly; // $ExpectType boolean | undefined
cookieDef.session; // $ExpectType boolean | undefined
cookieDef.extensions; // $ExpectType { key: string; value: string; }[] | undefined

// Cookie Tests

let cookie = new pmCollection.Cookie();
cookie = new pmCollection.Cookie(cookieDef);
cookie.name; // $ExpectType string | undefined
cookie.domain; // $ExpectType string
cookie.expires; // $ExpectType Date
cookie.extensions; // $ExpectType { key: string; value: string; }[] | undefined
cookie.hostOnly; // $ExpectType boolean | undefined
cookie.httpOnly; // $ExpectType boolean | undefined
cookie.maxAge; // $ExpectType number | undefined
cookie.path; // $ExpectType string
cookie.secure; // $ExpectType boolean | undefined
cookie.session; // $ExpectType boolean | undefined
cookie.value; // $ExpectType string | undefined
cookie.update(cookieDef); // $ExpectType void
cookie.valueOf(); // $ExpectType string
pmCollection.Cookie.isCookie({}); // $ExpectType boolean
const parsed = pmCollection.Cookie.parse('string'); // $ExpectType CookieDefinition
const unparsed = pmCollection.Cookie.unparseSingle(parsed); // $ExpectType string
pmCollection.Cookie.stringify(parsed); // $ExpectType string
// CookieList Tests

const cookieList = new pmCollection.CookieList(null, [cookie]);

pmCollection.CookieList.isCookieList(cookieList); // $ExpectType boolean

// DescriptionDefinition Tests

const descDef: pmCollection.DescriptionDefinition = {
  content: 'string',
  type: 'string',
};
descDef.content; // $ExpectType string
descDef.type; // $ExpectType string | undefined

// Description Tests

let desc = new pmCollection.Description();
desc = new pmCollection.Description('string');
desc = new pmCollection.Description(descDef);

desc.content; // $ExpectType string
desc.type; // $ExpectType string

desc.toJSON(); // $ExpectType DescriptionDefinition
desc.toString(); // $ExpectType string
desc.update('string'); // $ExpectType void
desc.update('string', 'string'); // $ExpectType void
desc.update(descDef); // $ExpectType void

pmCollection.Description.isDescription(desc); // $ExpectType boolean

// EventDefinition Tests

const eventDesc: pmCollection.EventDefinition = {
  script: 'string',
};
eventDesc.listen; // $ExpectType string | undefined
eventDesc.script; // $ExpectType string | string[] | ScriptDefinition | Script

// Event Tests

const event = new pmCollection.Event(eventDesc);
event.listen; // $ExpectType string | undefined
event.script; // $ExpectType Script

event.update(eventDesc); // $ExpectType void

// EventList Tests

const eventList = new pmCollection.EventList(null, [event]);
eventList.listeners('string'); // $ExpectType Event[]
eventList.listenersOwn('string'); // $ExpectType Event[]

pmCollection.EventList.isEventList(eventList); // $ExpectType boolean

// FormParamDefinition Tests

const fpDef: pmCollection.FormParamDefinition = {};
fpDef.key; // $ExpectType string | undefined
fpDef.value; // $ExpectType any

// FormParam Tests

const fp = new pmCollection.FormParam(fpDef);
fp.key; // $ExpectType string
fp.value; // $ExpectType any

fp.toString(); // $ExpectType string
fp.valueOf(); // $ExpectType any

// HeaderDefinition Tests

const headerDef: pmCollection.HeaderDefinition = {
  key: 'string',
  value: 'string',
};
headerDef.key; // $ExpectType string | undefined
headerDef.value; // $ExpectType string | undefined
headerDef.system; // $ExpectType boolean | undefined

// Header Tests

let header = new pmCollection.Header('string');
header = new pmCollection.Header('string', 'string');
header = new pmCollection.Header(headerDef);

header.key; // $ExpectType string
header.value; // $ExpectType string

header.toString(); // $ExpectType string

header.update(headerDef); // $ExpectType void

header.valueOf(); // $ExpectType string

pmCollection.Header.create('string'); // $ExpectType Header
pmCollection.Header.create('string', 'string'); // $ExpectType Header
pmCollection.Header.create(headerDef, 'string'); // $ExpectType Header

pmCollection.Header.isHeader(header); // $ExpectType boolean

pmCollection.Header.parse('string'); // $ExpectType HeaderDefinition[]

pmCollection.Header.parseSingle('string'); // $ExpectType HeaderDefinition

pmCollection.Header.unparse(new pmCollection.HeaderList(null, [header])); // $ExpectType string
pmCollection.Header.unparse([headerDef]); // $ExpectType string
pmCollection.Header.unparse([headerDef], '\n'); // $ExpectType string

pmCollection.Header.unparseSingle(headerDef); // $ExpectType string

// HeaderList Tests

const headerList = new pmCollection.HeaderList(null, [header]);

headerList.contentSize(); // $ExpectType number

pmCollection.HeaderList.isHeaderList(headerList); // $ExpectType boolean

// ItemDefinition Tests

const itemDef: pmCollection.ItemDefinition = {};
itemDef.request; // $ExpectType RequestDefinition | undefined
itemDef.response; // $ExpectType ResponseDefinition[] | undefined
itemDef.events; // $ExpectType EventDefinition[] | undefined

// Item Tests
let item = new pmCollection.Item();
item = new pmCollection.Item(itemDef);

item.events; // $ExpectType EventList
item.request; // $ExpectType Request
item.responses; // $ExpectType PropertyList<Response>

item.authorizeRequestUsing('string'); // $ExpectType void
item.authorizeRequestUsing({}); // $ExpectType void
item.authorizeRequestUsing('string', new pmCollection.VariableList(item, [])); // $ExpectType void

item.getAuth(); // $ExpectType RequestAuth

item.getEvents(); // $ExpectType Event[]
item.getEvents('string'); // $ExpectType Event[]

pmCollection.Item.isItem(item); // $ExpectType boolean

// ProxyConfigDefinition Tests

const proxyConfDef: pmCollection.ProxyConfigDefinition = {};
proxyConfDef.match; // $ExpectType string | { pattern: string; } | UrlMatchPattern | undefined || string | UrlMatchPattern | { pattern: string; } | undefined
proxyConfDef.host; // $ExpectType string | undefined
proxyConfDef.port; // $ExpectType number | undefined
proxyConfDef.tunnel; // $ExpectType boolean | undefined

// ProxyConfig Tests

let proxyConf = new pmCollection.ProxyConfig();
proxyConf = new pmCollection.ProxyConfig(proxyConfDef);

proxyConf.host; // $ExpectType string
proxyConf.match; // $ExpectType UrlMatchPattern
proxyConf.port; // $ExpectType number
proxyConf.tunnel; // $ExpectType boolean

proxyConf.getProtocols(); // $ExpectType string[]

proxyConf.getProxyUrl(); // $ExpectType string

proxyConf.test('string'); // $ExpectType boolean

proxyConf.update(proxyConfDef); // $ExpectType void

proxyConf.updateProtocols(['string']); // $ExpectType void

pmCollection.ProxyConfig.isProxyConfig(proxyConf); // $ExpectType boolean

// ProxyConfigList Tests

const proxyConfigList = new pmCollection.ProxyConfigList(null, [proxyConf]);

proxyConfigList.resolve('string'); // $ExpectType ProxyConfig
proxyConfigList.resolve(new pmCollection.Url({ host: 'string', path: 'string' })); // $ExpectType ProxyConfig

pmCollection.ProxyConfigList.isProxyConfigList(proxyConfigList); // $ExpectType boolean

// QueryParamDefinition Tests

const qpDef: pmCollection.QueryParamDefinition = {
  key: null,
  value: null,
};
qpDef.key; // $ExpectType string | null
qpDef.value; // $ExpectType string | null
qpDef.system; // $ExpectType boolean | undefined

// QueryParam Tests

let qp = new pmCollection.QueryParam('string');
qp = new pmCollection.QueryParam(qpDef);

qp.key; // $ExpectType string | null
qp.value; // $ExpectType string | null
qp.system; // $ExpectType boolean | undefined

qp.toString(); // $ExpectType string

qp.update('string'); // $ExpectType void
qp.update({ key: 'string' }); // $ExpectType void
qp.update({ key: 'string', value: 'string' }); // $ExpectType void

qp.valueOf(); // $ExpectType string

pmCollection.QueryParam._postman_propertyAllowsMultipleValues; // $ExpectType boolean
pmCollection.QueryParam._postman_propertyIndexKey; // $ExpectType string

pmCollection.QueryParam.parse('string'); // $ExpectType QueryParamDefinition[]

pmCollection.QueryParam.parseSingle('string', 1, ['string']); // $ExpectType QueryParamDefinition

pmCollection.QueryParam.unparse([qpDef]); // $ExpectType string
pmCollection.QueryParam.unparse([qpDef], { encode: true }); // $ExpectType string
pmCollection.QueryParam.unparse([qpDef], { encode: true, ignoreDisabled: true }); // $ExpectType string

pmCollection.QueryParam.unparseSingle(qpDef, true); // $ExpectType string

// RequestDefinition Tests

const reqDef: pmCollection.RequestDefinition = {
  url: 'string',
};
reqDef.url; // $ExpectType string | UrlDefinition
reqDef.method; // $ExpectType string | undefined
reqDef.header; // $ExpectType HeaderDefinition[] | undefined
reqDef.body; // $ExpectType RequestBodyDefinition | undefined
reqDef.auth; // $ExpectType RequestAuthDefinition | undefined
reqDef.proxy; // $ExpectType ProxyConfigDefinition | undefined
reqDef.certificate; // $ExpectType CertificateDefinition | undefined

// Request Tests
let req = new pmCollection.Request('string');
req = new pmCollection.Request(reqDef);

req.auth; // $ExpectType RequestAuth | undefined
req.body; // $ExpectType RequestBody | undefined
req.certificate; // $ExpectType Certificate | undefined
req.headers; // $ExpectType HeaderList
req.method; // $ExpectType string
req.proxy; // $ExpectType ProxyConfig | undefined
req.url; // $ExpectType Url

req.update(reqDef); // $ExpectType void

req.authorizeUsing('string'); // $ExpectType void
req.authorizeUsing({}); // $ExpectType void
req.authorizeUsing(null); // $ExpectType void
req.authorizeUsing('string', new pmCollection.VariableList(p, []));

req.getHeaders(); // $ExpectType any
req.getHeaders({ ignoreCase: true }); // $ExpectType any
req.getHeaders({ enabled: true }); // $ExpectType any
req.getHeaders({ ignoreCase: true, enabled: true }); // $ExpectType any

req.forEachHeader((header: pmCollection.Header, context: pmCollection.Request) => { }); // $ExpectType void

req.addHeader(header); // $ExpectType void
req.addHeader(headerDef); // $ExpectType void

req.removeHeader('string'); // $ExpectType void
req.removeHeader(header); // $ExpectType void
req.removeHeader(header, { ignoreCase: true }); // $ExpectType void

req.upsertHeader(headerDef); // $ExpectType void

req.addQueryParams('string'); // $ExpectType void
req.addQueryParams([qpDef]); // $ExpectType void

req.removeQueryParams('string'); // $ExpectType void
req.removeQueryParams(['string']); // $ExpectType void
req.removeQueryParams([qpDef]); // $ExpectType void
req.removeQueryParams(qpDef); // $ExpectType void

req.toJSON(); // $ExpectType RequestDefinition

req.clone(); // $ExpectType Request

pmCollection.Request.isRequest(req); // $ExpectType boolean

// RequestAuthDefinition Tests

const reqAuthDef: pmCollection.RequestAuthDefinition = {};
// tslint:disable-next-line
reqAuthDef.type; // $ExpectType "oauth2" | "hawk" | "noauth" | "basic" | "oauth1" | "apikey" | "digest" | "bearer" | "awsv4" | "edgegrid" | "ntlm" | undefined || "basic" | "oauth2" | "hawk" | "noauth" | "oauth1" | "apikey" | "digest" | "bearer" | "awsv4" | "edgegrid" | "ntlm" | undefined

// RequestAuth Tests

let reqAuth = new pmCollection.RequestAuth(reqAuthDef);
reqAuth = new pmCollection.RequestAuth(reqAuthDef, collection);

// tslint:disable-next-line
reqAuth.type; // $ExpectType "oauth2" | "hawk" | "noauth" | "basic" | "oauth1" | "apikey" | "digest" | "bearer" | "awsv4" | "edgegrid" | "ntlm" | undefined || "basic" | "oauth2" | "hawk" | "noauth" | "oauth1" | "apikey" | "digest" | "bearer" | "awsv4" | "edgegrid" | "ntlm" | undefined

reqAuth.update(new pmCollection.VariableList(collection, [])); // $ExpectType void
reqAuth.update({ key: 'string', value: 'string' }); // $ExpectType void
reqAuth.update([{ key: 'string', value: 'string' }]); // $ExpectType void
reqAuth.update([{ key: 'string', value: 'string' }], 'string'); // $ExpectType void

reqAuth.use('string', new pmCollection.VariableList(collection, [])); // $ExpectType void
reqAuth.use('string', { key: 'string', value: 'string' }); // $ExpectType void
reqAuth.use('string', [{ key: 'string', value: 'string' }]); // $ExpectType void

reqAuth.current(); // $ExpectType any

reqAuth.parameters(); // $ExpectType VariableList

reqAuth.clear('string'); // $ExpectType void

pmCollection.RequestAuth.isValidType(reqAuth); // $ExpectType boolean

// RequestBodyDefinition Tests

const reqBodyDef: pmCollection.RequestBodyDefinition = { mode: 'raw' };
reqBodyDef.mode; // $ExpectType string
reqBodyDef.raw; // $ExpectType string | undefined
reqBodyDef.urlencoded; // $ExpectType string | QueryParamDefinition[] | PropertyList<QueryParam> | undefined
reqBodyDef.file; // $ExpectType string | { src: string; } | undefined
reqBodyDef.formdata; // $ExpectType FormParamDefinition[] | PropertyList<FormParam> | undefined

// RequestBody Tests

const reqBody = new pmCollection.RequestBody(reqBodyDef);

reqBody.file; // $ExpectType { src: string; } | undefined
reqBody.formdata; // $ExpectType PropertyList<FormParam> | undefined
reqBody.mode; // $ExpectType string
reqBody.raw; // $ExpectType string | undefined
reqBody.urlencoded; // $ExpectType PropertyList<QueryParam> | undefined

reqBody.update(reqBodyDef); // $ExpectType void

reqBody.toString(); // $ExpectType string

reqBody.isEmpty(); // $ExpectType boolean

pmCollection.RequestBody.MODES.raw; // $ExpectType string
pmCollection.RequestBody.MODES.formdata; // $ExpectType string
pmCollection.RequestBody.MODES.urlencoded; // $ExpectType string
pmCollection.RequestBody.MODES.file; // $ExpectType string

// ResponseDefinition Tests
const respDef: pmCollection.ResponseDefinition = { code: 200, responseTime: 1 };
respDef.code; // $ExpectType number
respDef.header; // $ExpectType HeaderDefinition[] | undefined
respDef.cookie; // $ExpectType CookieDefinition[] | undefined
respDef.body; // $ExpectType string | undefined
respDef.stream; // $ExpectType Buffer | Uint8Array | undefined || Uint8Array | Buffer | undefined
respDef.responseTime; // $ExpectType number
respDef.originalRequest; // $ExpectType RequestDefinition | undefined

// Response Tests
const response = new pmCollection.Response(respDef);
response.body; // $ExpectType string | undefined
response.code; // $ExpectType number
response.cookies; // $ExpectType CookieList
response.headers; // $ExpectType HeaderList
response.originalRequest; // $ExpectType Request | undefined
response.responseTime; // $ExpectType number
response.status; // $ExpectType string
response.stream; // $ExpectType Buffer | Uint8Array | undefined || Uint8Array | Buffer | undefined
response.responseSize; // $ExpectType number | undefined

response.update(respDef); // $ExpectType void

response.toJSON(); // $ExpectType any

response.reason(); // ExpectType string | undefined

response.details(); // $ExpectType { name: string; detail: string; code: number; standardName: string; } | undefined

response.text(); // $ExpectType string | undefined

response.json(); // $ExpectType any

response.dataURI(); // $ExpectType string

response.size(); // $ExpectType number

response.encoding(); // $ExpectType { format: string; source: string; }

pmCollection.Response.createFromNode({ body: 'string', statusCode: 200, elapsedTime: 1 }, []); // $ExpectType Response

pmCollection.Response.isResponse(response); // $ExpectType boolean

// ScriptDefinition Tests

const scriptDef: pmCollection.ScriptDefinition = {};
scriptDef.type; // $ExpectType string | undefined
scriptDef.src; // $ExpectType string | Url | undefined
scriptDef.exec; // $ExpectType string | string[] | undefined

// Script Tests

let script = new pmCollection.Script();
script = new pmCollection.Script(scriptDef);
script = new pmCollection.Script('string');
script = new pmCollection.Script(['string']);

script.exec; // $ExpectType string[] | undefined
script.src; // $ExpectType Url | undefined
script.type; // $ExpectType string

script.update(scriptDef); // $ExpectType void
script.update('string'); // $ExpectType void
script.update(['string']); // $ExpectType void

script.toSource(); // $ExpectType string | undefined

pmCollection.Script.isScript(script); // $ExpectType boolean

// UrlDefinition Tests

let urlDef: pmCollection.UrlDefinition = {
  host: 'string',
  path: 'string',
};
urlDef = {
  host: ['string'],
  path: ['string'],
};

urlDef.auth; // $ExpectType { user: string; password: string; } | undefined
urlDef.hash; // $ExpectType string | undefined
urlDef.host; // $ExpectType string | string[] | undefined
urlDef.path; // $ExpectType string | string[] | undefined
urlDef.port; // $ExpectType string | undefined
urlDef.query; // $ExpectType string | QueryParamDefinition[] | PropertyList<QueryParam> | undefined
urlDef.variable; // $ExpectType VariableDefinition[] | undefined
urlDef.protocol; // $ExpectType string | undefined

// Url Tests

let url = new pmCollection.Url(urlDef);
url = new pmCollection.Url('string');

url.auth; // $ExpectType { user: string; password: string; } | undefined
url.hash; // $ExpectType string | undefined
url.host; // $ExpectType string[] | undefined
url.path; // $ExpectType string[] | undefined
url.port; // $ExpectType string | undefined
url.protocol; // $ExpectType string | undefined
url.query; // $ExpectType PropertyList<QueryParam>
url.variables; // $ExpectType VariableList

url.addQueryParams('string'); // $ExpectType void
url.addQueryParams([qp, qpDef]); // $ExpectType void

url.removeQueryParams('string'); // $ExpectType void
url.removeQueryParams(['string']); // $ExpectType void
url.removeQueryParams(qp); // $ExpectType void
url.removeQueryParams([qp]); // $ExpectType void

url.getRaw(); // $ExpectType string

url.toString(); // $ExpectType string
url.toString(false); // $ExpectType string

url.getPath(); // $ExpectType string
url.getPath({ unresolved: true }); // $ExpectType string

url.getQueryString(); // $ExpectType string
url.getQueryString({ encode: true }); // $ExpectType string
url.getQueryString({ ignoredDisabled: true }); // $ExpectType string
url.getQueryString({ encode: true, ignoredDisabled: true }); // $ExpectType string

url.getPathWithQuery(); // $ExpectType string

url.getHost(); // $ExpectType string

url.getRemote(); // $ExpectType string
url.getRemote({ forcePort: true }); // $ExpectType string

url.getOAuth1BaseUrl(); // $ExpectType string

pmCollection.Url.parse('string'); // $ExpectType UrlDefinition

pmCollection.Url.isUrl(url); // $ExpectType boolean

// UrlMatchPattern Tests
let urlMatch = new pmCollection.UrlMatchPattern('string');
urlMatch = new pmCollection.UrlMatchPattern({ pattern: 'string' });

urlMatch.pattern; // $ExpectType string | undefined

urlMatch.update({ pattern: 'string' }); // $ExpectType void

urlMatch.createMatchPattern(); // $ExpectType { protocols: string[]; host: string; path: RegExp; } | undefined

urlMatch.globPatternToRegexp('string'); // $ExpectType RegExp

urlMatch.testProtocol('string'); // $ExpectType boolean

urlMatch.getProtocols(); // $ExpectType string[]

urlMatch.testHost('string'); // $ExpectType boolean

urlMatch.matchAnyHost({ protocols: [], host: 'string', path: new RegExp('') }); // $ExpectType boolean

urlMatch.matchSuffixHostPattern({ protocols: [], host: 'string', path: new RegExp('') }, 'string'); // $ExpectType boolean

urlMatch.matchAbsoluteHostPattern({ protocols: [], host: 'string', path: new RegExp('') }, 'string'); // $ExpectType boolean

urlMatch.testPath('string'); // $ExpectType boolean

urlMatch.test('string'); // $ExpectType boolean

urlMatch.toString(); // $ExpectType string

urlMatch.toJSON(); // $ExpectType { pattern: string; }

pmCollection.UrlMatchPattern.MATCH_ALL_URLS; // $ExpectType string

pmCollection.UrlMatchPattern.PROTOCOL_DELIMITER; // $ExpectType string

// UrlMatchPatternList Tests
const urlMatchList = new pmCollection.UrlMatchPatternList(collection, []);

urlMatchList.test('string'); // $ExpectType boolean

// VariableDefinition Tests
const varDef: pmCollection.VariableDefinition = {};
varDef.value; // $ExpectType any
varDef.type; // $ExpectType string | undefined
varDef.key; // $ExpectType string | undefined

// Variable Tests
let variable = new pmCollection.Variable(varDef);
variable = new pmCollection.Variable({ key: varDef });

variable.key; // $ExpectType string | undefined
variable.type; // $ExpectType string
variable.value; // $ExpectType any

variable.get(); // $ExpectType any

variable.set(null); // $ExpectType void

variable.valueOf(null); // $ExpectType any

variable.toString(); // $ExpectType string

variable.cast({}); // $ExpectType any

variable.castIn({}); // $ExpectType any

variable.castOut({}); // $ExpectType any

variable.valueType('string', true); // $ExpectType string

variable.update(varDef); // $ExpectType void

pmCollection.Variable.isVariable(variable); // $ExpectType boolean

pmCollection.Variable.types.string; // $ExpectType StringConstructor
pmCollection.Variable.types.boolean; // $ExpectType BooleanConstructor
pmCollection.Variable.types.number; // $ExpectType NumberConstructor
pmCollection.Variable.types.json; // $ExpectType { in: (val: any) => string; out: (val: string) => any; }
pmCollection.Variable.types.any; // $ExpectType { in: <T>(val: T) => T; out: <T>(val: T) => T; }

// VariableList Tests

const vList = new pmCollection.VariableList(collection, [variable]);

vList.replace('string'); // $ExpectType string
vList.replace('string', vList); // $ExpectType string

vList.substitute('string'); // $ExpectType "string"
vList.substitute({}, vList); // $ExpectType {}
vList.substitute(null, vList, false); // $ExpectType null

vList.syncFromObject({}); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined
vList.syncFromObject({}, false); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined
vList.syncFromObject({}, false, false); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined

vList.syncToObject(); // $ExpectType { [key: string]: VariableDefinition; }
vList.syncToObject({ key: varDef }); // $ExpectType { [key: string]: VariableDefinition; }

pmCollection.VariableList.isVariableList(vList); // $ExpectType boolean

// VariableScopeDefinition Tests
const varScopeDef: pmCollection.VariableScopeDefinition = {};
varScopeDef.values; // $ExpectType VariableDefinition[] | undefined

// VariableScope Tests
let varScope = new pmCollection.VariableScope(varScopeDef, []);
varScope = new pmCollection.VariableScope(vList, []);
varScope = new pmCollection.VariableScope([varDef], []);
varScope = new pmCollection.VariableScope(varScopeDef, [vList]);

varScope.values; // $ExpectType VariableDefinition[] | undefined

varScope.variables(); // ExpectType { [key: string]: VariableDefinition; }

varScope.toObject(false, false); // $ExpectType any

varScope.has('string'); // $ExpectType boolean

varScope.get('string'); // $ExpectType any

varScope.set('string', {}, 'any'); // $ExpectType void

varScope.unset('string'); // $ExpectType void

varScope.clear(); // $ExpectType void

varScope.syncVariablesFrom({}); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined
varScope.syncVariablesFrom({}, false); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined
varScope.syncVariablesFrom({}, false, false); // $ExpectType { created: string[]; updated: string[]; deleted: string[]; } | undefined

varScope.syncVariablesTo(); // $ExpectType { [key: string]: VariableDefinition; }
varScope.syncVariablesTo({ key: varDef }); // $ExpectType { [key: string]: VariableDefinition; }

varScope.toJSON(); // $ExpectType any

varScope.addLayer(vList); // $ExpectType void

pmCollection.VariableScope.isVariableScope(varScope); // $ExpectType boolean

// VersionDefinition Tests
const verDef: pmCollection.VersionDefinition = {};
verDef.build; // $ExpectType string | undefined
verDef.major; // $ExpectType string | undefined
verDef.minor; // $ExpectType string | undefined
verDef.patch; // $ExpectType string | undefined
verDef.prerelease; // $ExpectType string | undefined
verDef.raw; // $ExpectType string | undefined
verDef.version; // $ExpectType string | undefined

// Version Tests
let version = new pmCollection.Version();
version = new pmCollection.Version(verDef);
version = new pmCollection.Version('string');

version.build; // $ExpectType string | undefined
version.major; // $ExpectType string | undefined
version.minor; // $ExpectType string | undefined
version.patch; // $ExpectType string | undefined
version.prerelease; // $ExpectType string | undefined
version.raw; // $ExpectType string | undefined
version.string; // $ExpectType string | undefined

version.set(); // ExpectType void
version.set(verDef); // $ExpectType void
version.set('string'); // $ExpectType void

version.toString(); // $ExpectType string
