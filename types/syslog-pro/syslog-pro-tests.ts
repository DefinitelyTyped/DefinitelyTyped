import { CEF, Colors, LEEF, RFC, RFC3164, RFC5424, RgbToAnsi, Syslog } from 'syslog-pro';

// test type exports
type SL = Syslog;
type SLO = Syslog.Options;
type SLF = Syslog.Format;
type SLP = Syslog.Protocol;
type RFc = RFC;
type Col = Colors;
type R3164 = RFC3164;
type R3164O = RFC3164.Options;
type R3164MO = RFC3164.MessageOptions;
type R3164S = RFC3164.Severity;
type R5424 = RFC5424;
type R5424O = RFC5424.Options;
type R5424MO = RFC5424.MessageOptions;
type R5424S = RFC5424.Severity;
type LF = LEEF;
type LFO = LEEF.Options;
type LFA = LEEF.Attributes;
type C = CEF;
type CO = CEF.Options;
type CS = CEF.Severity;
type CSN = CEF.SeverityNumber;
type CSS = CEF.SeverityString;
type CE = CEF.Extensions;
type CET = CEF.ExtensionType;

RgbToAnsi('#fffff'); // $ExpectType number
RgbToAnsi('#fffff', true); // $ExpectType number
RgbToAnsi(30); // $ExpectType number
RgbToAnsi(30, true); // $ExpectType number

declare let syslogOptions: Syslog.Options;
declare let syslog: Syslog;
declare let rfc3164Options: RFC3164.Options;
declare let rfc3164: RFC3164;
declare let rfc5424Options: RFC5424.Options;
declare let rfc5424: RFC5424;
declare let rfc: RFC;
declare let leefOptions: LEEF.Options;
declare let leef: LEEF;
declare let cefOptions: CEF.Options;
declare let cef: CEF;
declare const colors: Colors;
declare const leefAttributes: LEEF.Attributes;
declare const cefExtensions: CEF.Extensions;

syslog = new Syslog();
syslogOptions = syslog;
// @ts-expect-error
syslog = syslogOptions;
new Syslog({ target: 'foo' });
new Syslog({ protocol: 'udp' });
new Syslog({ protocol: 'tcp' });
new Syslog({ protocol: 'tls' });
// @ts-expect-error
new Syslog({ protocol: 'foo' });
new Syslog({ port: 123 });
new Syslog({ tcpTimeout: 123 });
new Syslog({ tlsServerCerts: 'foo.cert' });
new Syslog({ tlsServerCerts: ['foo.cert'] });
new Syslog({ tlsServerCerts: ['foo.cert'] as const });
new Syslog({ tlsClientCert: 'foo.cert' });
new Syslog({ tlsClientKey: 'foo.key' });
new Syslog({ format: 'none' });
new Syslog({ format: 'rfc3164' });
new Syslog({ format: 'rfc5424' });
new Syslog({ format: 'leef' });
new Syslog({ format: 'cef' });
// @ts-expect-error
new Syslog({ format: 'foo' });
new Syslog({ rfc3164 });
new Syslog({ rfc3164: rfc3164Options });
// @ts-expect-error
new Syslog({ rfc3164: { foo: 'bar' } });
new Syslog({ rfc5424 });
new Syslog({ rfc5424: rfc5424Options });
// @ts-expect-error
new Syslog({ rfc5424: { foo: 'bar' } });
new Syslog({ leef });
new Syslog({ leef: leefOptions });
// @ts-expect-error
new Syslog({ leef: { foo: 'bar' } });
new Syslog({ cef });
new Syslog({ cef: cefOptions });
// @ts-expect-error
new Syslog({ cef: { foo: 'bar' } });

syslog.target; // $ExpectType string
syslog.protocol; // $ExpectType Protocol
syslog.port; // $ExpectType number
syslog.tcpTimeout; // $ExpectType number
syslog.tlsServerCerts; // $ExpectType readonly string[]
syslog.tlsClientCert; // $ExpectType string | undefined
syslog.tlsClientKey; // $ExpectType string | undefined
syslog.format; // $ExpectType Format
syslog.rfc3164; // $ExpectType RFC3164 | undefined
syslog.rfc5424; // $ExpectType RFC5424 | undefined
syslog.leef; // $ExpectType LEEF | undefined
syslog.cef; // $ExpectType CEF | undefined

rfc = rfc3164;
// @ts-expect-error
rfc = rfc3164Options;
rfc = rfc5424;
// @ts-expect-error
rfc = rfc5424Options;

rfc.extendedColor; // $ExpectType boolean
rfc.emergency('foo'); // $ExpectType Promise<string>
rfc.emer('foo'); // $ExpectType Promise<string>
rfc.alert('foo'); // $ExpectType Promise<string>
rfc.critical('foo'); // $ExpectType Promise<string>
rfc.crit('foo'); // $ExpectType Promise<string>
rfc.error('foo'); // $ExpectType Promise<string>
rfc.err('foo'); // $ExpectType Promise<string>
rfc.warning('foo'); // $ExpectType Promise<string>
rfc.warn('foo'); // $ExpectType Promise<string>
rfc.notice('foo'); // $ExpectType Promise<string>
rfc.note('foo'); // $ExpectType Promise<string>
rfc.informational('foo'); // $ExpectType Promise<string>
rfc.info('foo'); // $ExpectType Promise<string>
rfc.log('foo'); // $ExpectType Promise<string>
rfc.debug('foo'); // $ExpectType Promise<string>
rfc.setColor({ emergencyColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ emergencyColor: 30 }); // $ExpectType true
rfc.setColor({ alertColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ alertColor: 30 }); // $ExpectType true
rfc.setColor({ criticalColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ criticalColor: 30 }); // $ExpectType true
rfc.setColor({ errorColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ errorColor: 30 }); // $ExpectType true
rfc.setColor({ warningColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ warningColor: 30 }); // $ExpectType true
rfc.setColor({ noticeColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ noticeColor: 30 }); // $ExpectType true
rfc.setColor({ informationalColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ informationalColor: 30 }); // $ExpectType true
rfc.setColor({ debugColor: '#ffffff' }); // $ExpectType true
rfc.setColor({ debugColor: 30 }); // $ExpectType true

rfc3164Options = rfc3164;
// @ts-expect-error
rfc3164 = rfc3164Options;
rfc3164 = new RFC3164();
new RFC3164({ applicationName: 'foo' });
new RFC3164({ hostname: 'bar' });
new RFC3164({ facility: 2 });
new RFC3164({ color: true });
new RFC3164({ extendedColor: true });
new RFC3164({ colors });
new RFC3164({ server: syslog });
new RFC3164({ server: syslogOptions });
new RFC3164({ server: false });

rfc3164.applicationName; // $ExpectType string
rfc3164.hostname; // $ExpectType string
rfc3164.facility; // $ExpectType number
rfc3164.color; // $ExpectType boolean
rfc3164.extendedColor; // $ExpectType boolean
rfc3164.server; // $ExpectType Syslog | undefined

rfc3164.buildMessage('foo'); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 0 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 1 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 2 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 3 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 4 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 5 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 6 }); // $ExpectType string
rfc3164.buildMessage('foo', { severity: 7 }); // $ExpectType string
// @ts-expect-error
rfc3164.buildMessage('foo', { severity: 8 });
rfc3164.buildMessage('foo', { msgColor: 30 }); // $ExpectType string
rfc3164.send('foo', { severity: 1 }); // $ExpectType Promise<string>
rfc3164.send('foo', { msgColor: 30 }); // $ExpectType Promise<string>
rfc3164.emergency('foo'); // $ExpectType Promise<string>
rfc3164.emer('foo'); // $ExpectType Promise<string>
rfc3164.alert('foo'); // $ExpectType Promise<string>
rfc3164.critical('foo'); // $ExpectType Promise<string>
rfc3164.crit('foo'); // $ExpectType Promise<string>
rfc3164.error('foo'); // $ExpectType Promise<string>
rfc3164.err('foo'); // $ExpectType Promise<string>
rfc3164.warning('foo'); // $ExpectType Promise<string>
rfc3164.warn('foo'); // $ExpectType Promise<string>
rfc3164.notice('foo'); // $ExpectType Promise<string>
rfc3164.note('foo'); // $ExpectType Promise<string>
rfc3164.informational('foo'); // $ExpectType Promise<string>
rfc3164.info('foo'); // $ExpectType Promise<string>
rfc3164.log('foo'); // $ExpectType Promise<string>
rfc3164.debug('foo'); // $ExpectType Promise<string>
rfc3164.setColor(colors); // $ExpectType true

rfc5424Options = rfc5424;
// @ts-expect-error
rfc5424 = rfc5424Options;
rfc5424 = new RFC5424();
new RFC5424({ applicationName: 'foo' });
new RFC5424({ hostname: 'bar' });
new RFC5424({ timestamp: true });
new RFC5424({ timestampUTC: true });
new RFC5424({ timestampMS: true });
new RFC5424({ timestampTZ: true });
new RFC5424({ includeStructuredData: true });
new RFC5424({ utf8BOM: true });
new RFC5424({ color: true });
new RFC5424({ extendedColor: true });
new RFC5424({ colors });
new RFC5424({ server: syslog });
new RFC5424({ server: syslogOptions });
new RFC5424({ server: false });

rfc5424.applicationName; // $ExpectType string
rfc5424.hostname; // $ExpectType string
rfc5424.timestamp; // $ExpectType boolean
rfc5424.timestampUTC; // $ExpectType boolean
rfc5424.timestampTZ; // $ExpectType boolean
rfc5424.timestampMS; // $ExpectType boolean
rfc5424.includeStructuredData; // $ExpectType boolean
rfc5424.utf8BOM; // $ExpectType boolean
rfc5424.color; // $ExpectType boolean
rfc5424.extendedColor; // $ExpectType boolean
rfc5424.server; // $ExpectType Syslog | undefined

rfc5424.buildMessage('foo'); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 0 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 1 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 2 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 3 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 4 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 5 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 6 }); // $ExpectType string
rfc5424.buildMessage('foo', { severity: 7 }); // $ExpectType string
// @ts-expect-error
rfc5424.buildMessage('foo', { severity: 8 });
rfc5424.buildMessage('foo', { facility: 30 }); // $ExpectType string
rfc5424.buildMessage('foo', { pid: 1 }); // $ExpectType string
rfc5424.buildMessage('foo', { id: 1 }); // $ExpectType string
rfc5424.buildMessage('foo', { id: 1 }); // $ExpectType string
rfc5424.buildMessage('foo', { msgStructuredData: ['foo'] }); // $ExpectType string
rfc5424.buildMessage('foo', { msgStructuredData: ['foo'] as const }); // $ExpectType string
rfc5424.buildMessage('foo', { msgColor: 30 }); // $ExpectType string
rfc5424.send('foo', { severity: 1 }); // $ExpectType Promise<string>
rfc5424.send('foo', { facility: 30 }); // $ExpectType Promise<string>
rfc5424.send('foo', { pid: 1 }); // $ExpectType Promise<string>
rfc5424.send('foo', { id: 1 }); // $ExpectType Promise<string>
rfc5424.send('foo', { id: 1 }); // $ExpectType Promise<string>
rfc5424.send('foo', { msgStructuredData: ['foo'] }); // $ExpectType Promise<string>
rfc5424.send('foo', { msgStructuredData: ['foo'] as const }); // $ExpectType Promise<string>
rfc5424.send('foo', { msgColor: 30 }); // $ExpectType Promise<string>
rfc5424.emergency('foo'); // $ExpectType Promise<string>
rfc5424.emer('foo'); // $ExpectType Promise<string>
rfc5424.alert('foo'); // $ExpectType Promise<string>
rfc5424.critical('foo'); // $ExpectType Promise<string>
rfc5424.crit('foo'); // $ExpectType Promise<string>
rfc5424.error('foo'); // $ExpectType Promise<string>
rfc5424.err('foo'); // $ExpectType Promise<string>
rfc5424.warning('foo'); // $ExpectType Promise<string>
rfc5424.warn('foo'); // $ExpectType Promise<string>
rfc5424.notice('foo'); // $ExpectType Promise<string>
rfc5424.note('foo'); // $ExpectType Promise<string>
rfc5424.informational('foo'); // $ExpectType Promise<string>
rfc5424.info('foo'); // $ExpectType Promise<string>
rfc5424.log('foo'); // $ExpectType Promise<string>
rfc5424.debug('foo'); // $ExpectType Promise<string>
rfc5424.setColor(colors); // $ExpectType true

leefOptions = leef;
// @ts-expect-error
leef = leefOptions;
leef = new LEEF();
new LEEF({ vendor: 'foo' });
new LEEF({ product: 'foo' });
new LEEF({ version: 'foo' });
new LEEF({ eventId: 'foo' });
new LEEF({ attributes: leefAttributes });
new LEEF({ syslogHeader: true });
new LEEF({ server: syslog });
new LEEF({ server: syslogOptions });
new LEEF({ server: false });

leef.vendor; // $ExpectType string
leef.product; // $ExpectType string
leef.version; // $ExpectType string
leef.eventId; // $ExpectType string
leef.syslogHeader; // $ExpectType boolean
leef.attributes; // $ExpectType Attributes
leef.server; // $ExpectType Syslog | undefined

leef.buildMessage(); // $ExpectType string
leef.send(); // $ExpectType Promise<string>
leef.send(false); // $ExpectType Promise<string>
leef.send(syslog); // $ExpectType Promise<string>
leef.send(syslogOptions); // $ExpectType Promise<string>

leefAttributes.cat; // $ExpectType string | null | undefined
leefAttributes.devTime; // $ExpectType string | null | undefined
leefAttributes.devTimeFormat; // $ExpectType string | null | undefined
leefAttributes.proto; // $ExpectType string | null | undefined
leefAttributes.sev; // $ExpectType string | null | undefined
leefAttributes.src; // $ExpectType string | null | undefined
leefAttributes.dst; // $ExpectType string | null | undefined
leefAttributes.srcPort; // $ExpectType string | null | undefined
leefAttributes.dstPort; // $ExpectType string | null | undefined
leefAttributes.srcPreNAT; // $ExpectType string | null | undefined
leefAttributes.dstPreNAT; // $ExpectType string | null | undefined
leefAttributes.srcPostNAT; // $ExpectType string | null | undefined
leefAttributes.dstPostNAT; // $ExpectType string | null | undefined
leefAttributes.usrName; // $ExpectType string | null | undefined
leefAttributes.srcMAC; // $ExpectType string | null | undefined
leefAttributes.dstMAC; // $ExpectType string | null | undefined
leefAttributes.srcPreNATPort; // $ExpectType string | null | undefined
leefAttributes.dstPreNATPort; // $ExpectType string | null | undefined
leefAttributes.srcPostNATPort; // $ExpectType string | null | undefined
leefAttributes.dstPostNATPort; // $ExpectType string | null | undefined
leefAttributes.identSrc; // $ExpectType string | null | undefined
leefAttributes.identHostName; // $ExpectType string | null | undefined
leefAttributes.identNetBios; // $ExpectType string | null | undefined
leefAttributes.identGrpName; // $ExpectType string | null | undefined
leefAttributes.identMAC; // $ExpectType string | null | undefined
leefAttributes.vSrc; // $ExpectType string | null | undefined
leefAttributes.vSrcName; // $ExpectType string | null | undefined
leefAttributes.accountName; // $ExpectType string | null | undefined
leefAttributes.srcBytes; // $ExpectType string | null | undefined
leefAttributes.dstBytes; // $ExpectType string | null | undefined
leefAttributes.srcPackets; // $ExpectType string | null | undefined
leefAttributes.dstPackets; // $ExpectType string | null | undefined
leefAttributes.totalPackets; // $ExpectType string | null | undefined
leefAttributes.role; // $ExpectType string | null | undefined
leefAttributes.realm; // $ExpectType string | null | undefined
leefAttributes.policy; // $ExpectType string | null | undefined
leefAttributes.resource; // $ExpectType string | null | undefined
leefAttributes.url; // $ExpectType string | null | undefined
leefAttributes.groupID; // $ExpectType string | null | undefined
leefAttributes.domain; // $ExpectType string | null | undefined
leefAttributes.isLoginEvent; // $ExpectType string | null | undefined
leefAttributes.isLogoutEvent; // $ExpectType string | null | undefined
leefAttributes.identSecondlp; // $ExpectType string | null | undefined
leefAttributes.calLanguage; // $ExpectType string | null | undefined
leefAttributes.AttributeLimits; // $ExpectType string | null | undefined
leefAttributes.calCountryOrRegion; // $ExpectType string | null | undefined
leefAttributes.foo; // $ExpectType string | null | undefined

cefOptions = cef;
// @ts-expect-error
cef = cefOptions;
cef = new CEF();
new CEF({ deviceVendor: 'foo' });
new CEF({ deviceProduct: 'foo' });
new CEF({ deviceVersion: 'foo' });
new CEF({ deviceEventClassId: 'foo' });
new CEF({ name: 'foo' });
new CEF({ severity: 'Unknown' });
new CEF({ severity: 'Low' });
new CEF({ severity: 'Medium' });
new CEF({ severity: 'High' });
new CEF({ severity: 'Very-High' });
new CEF({ severity: 0 });
new CEF({ severity: 1 });
new CEF({ severity: 2 });
new CEF({ severity: 3 });
new CEF({ severity: 4 });
new CEF({ severity: 5 });
new CEF({ severity: 6 });
new CEF({ severity: 7 });
new CEF({ severity: 8 });
new CEF({ severity: 9 });
new CEF({ severity: 10 });
// @ts-expect-error
new CEF({ severity: 11 });
// @ts-expect-error
new CEF({ severity: 'foo' });
new CEF({ extensions: cefExtensions });
new CEF({ server: syslog });
new CEF({ server: syslogOptions });
new CEF({ server: false });

cef.deviceVendor; // $ExpectType string
cef.deviceProduct; // $ExpectType string
cef.deviceVersion; // $ExpectType string
cef.deviceEventClassId; // $ExpectType string
cef.name; // $ExpectType string
cef.severity; // $ExpectType Severity
cef.extensions; // $ExpectType Extensions
cef.server; // $ExpectType Syslog | undefined

cef.validate(); // $ExpectType true
cef.buildMessage(); // $ExpectType string
cef.send(); // $ExpectType Promise<string>
cef.send(false); // $ExpectType Promise<string>
cef.send(syslog); // $ExpectType Promise<string>
cef.send(syslogOptions); // $ExpectType Promise<string>

cefExtensions.deviceAction; // $ExpectType string | null | undefined
cefExtensions.applicationProtocol; // $ExpectType string | null | undefined
cefExtensions.deviceCustomIPv6Address1; // $ExpectType string | null | undefined
cefExtensions['deviceCustomIPv6 Address1Label']; // $ExpectType string | null | undefined
cefExtensions.deviceCustomIPv6Address3; // $ExpectType string | null | undefined
cefExtensions['deviceCustomIPv6Address3 Label']; // $ExpectType string | null | undefined
cefExtensions['deviceCustomIPv6 Address4']; // $ExpectType string | null | undefined
cefExtensions['deviceCustomIPv6 Address4Label']; // $ExpectType string | null | undefined
cefExtensions.deviceEventCategory; // $ExpectType string | null | undefined
cefExtensions.deviceCustomFloatingPoint1; // $ExpectType number | null | undefined
cefExtensions['deviceCustom FloatingPoint1Label']; // $ExpectType string | null | undefined
cefExtensions.deviceCustomFloatingPoint2; // $ExpectType number | null | undefined
cefExtensions['deviceCustomFloatingPoint2 Label']; // $ExpectType string | null | undefined
cefExtensions.deviceCustomFloatingPoint3; // $ExpectType number | null | undefined
cefExtensions['deviceCustom FloatingPoint3Label']; // $ExpectType string | null | undefined
cefExtensions.deviceCustomFloatingPoint4; // $ExpectType number | null | undefined
cefExtensions['deviceCustom FloatingPoint4Label']; // $ExpectType string | null | undefined
cefExtensions.deviceCustomNumber1; // $ExpectType number | null | undefined
cefExtensions.deviceCustomNumber1Label; // $ExpectType string | null | undefined
cefExtensions.DeviceCustomNumber2; // $ExpectType number | null | undefined
cefExtensions.deviceCustomNumber2Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomNumber3; // $ExpectType number | null | undefined
cefExtensions.deviceCustomNumber3Label; // $ExpectType string | null | undefined
cefExtensions.baseEventCount; // $ExpectType number | null | undefined
cefExtensions.deviceCustomString1; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString1Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString2; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString2Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString3; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString3Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString4; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString4Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString5; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString5Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString6; // $ExpectType string | null | undefined
cefExtensions.deviceCustomString6Label; // $ExpectType string | null | undefined
cefExtensions.destinationDnsDomain; // $ExpectType string | null | undefined
cefExtensions.destinationServiceName; // $ExpectType string | null | undefined
cefExtensions['destinationTranslated Address']; // $ExpectType string | null | undefined
cefExtensions.destinationTranslatedPort; // $ExpectType string | null | undefined
cefExtensions.deviceCustomDate1; // $ExpectType string | null | undefined
cefExtensions.deviceCustomDate1Label; // $ExpectType string | null | undefined
cefExtensions.deviceCustomDate2; // $ExpectType string | null | undefined
cefExtensions.deviceCustomDate2Label; // $ExpectType string | null | undefined
cefExtensions.deviceDirection; // $ExpectType number | null | undefined
cefExtensions.deviceDnsDomain; // $ExpectType string | null | undefined
cefExtensions.deviceExternalId; // $ExpectType string | null | undefined
cefExtensions.deviceFacility; // $ExpectType string | null | undefined
cefExtensions.deviceInboundInterface; // $ExpectType string | null | undefined
cefExtensions.deviceNtDomain; // $ExpectType string | null | undefined
cefExtensions.deviceOutboundInterface; // $ExpectType string | null | undefined
cefExtensions.devicePayloadId; // $ExpectType string | null | undefined
cefExtensions.deviceProcessName; // $ExpectType string | null | undefined
cefExtensions.deviceTranslatedAddress; // $ExpectType string | null | undefined
cefExtensions.destinationHostName; // $ExpectType string | null | undefined
cefExtensions.destinationMacAddress; // $ExpectType string | null | undefined
cefExtensions.destinationNtDomain; // $ExpectType string | null | undefined
cefExtensions.destinationProcessId; // $ExpectType number | null | undefined
cefExtensions.destinationUserPrivileges; // $ExpectType string | null | undefined
cefExtensions.destinationProcessName; // $ExpectType string | null | undefined
cefExtensions.destinationPort; // $ExpectType number | null | undefined
cefExtensions.destinationAddress; // $ExpectType string | null | undefined
cefExtensions.deviceTimeZone; // $ExpectType string | null | undefined
cefExtensions.destinationUserId; // $ExpectType string | null | undefined
cefExtensions.destinationUserName; // $ExpectType string | null | undefined
cefExtensions.deviceAddress; // $ExpectType string | null | undefined
cefExtensions.deviceHostName; // $ExpectType string | null | undefined
cefExtensions.deviceMacAddress; // $ExpectType string | null | undefined
cefExtensions.deviceProcessId; // $ExpectType number | null | undefined
cefExtensions.endTime; // $ExpectType string | null | undefined
cefExtensions.externalId; // $ExpectType string | null | undefined
cefExtensions.fileCreateTime; // $ExpectType string | null | undefined
cefExtensions.fileHash; // $ExpectType string | null | undefined
cefExtensions.fileId; // $ExpectType string | null | undefined
cefExtensions.fileModificationTime; // $ExpectType string | null | undefined
cefExtensions.filePath; // $ExpectType string | null | undefined
cefExtensions.filePermission; // $ExpectType string | null | undefined
cefExtensions.fileType; // $ExpectType string | null | undefined
cefExtensions.flexDate1; // $ExpectType string | null | undefined
cefExtensions.flexDate1Label; // $ExpectType string | null | undefined
cefExtensions.flexString1; // $ExpectType string | null | undefined
cefExtensions.flexString1Label; // $ExpectType string | null | undefined
cefExtensions.flexString2; // $ExpectType string | null | undefined
cefExtensions.flexString2Label; // $ExpectType string | null | undefined
cefExtensions.filename; // $ExpectType string | null | undefined
cefExtensions.fileSize; // $ExpectType number | null | undefined
cefExtensions.bytesIn; // $ExpectType number | null | undefined
cefExtensions.message; // $ExpectType string | null | undefined
cefExtensions.oldFileCreateTime; // $ExpectType string | null | undefined
cefExtensions.oldFileHash; // $ExpectType string | null | undefined
cefExtensions.oldFileId; // $ExpectType string | null | undefined
cefExtensions.oldFileModificationTime; // $ExpectType string | null | undefined
cefExtensions.oldFileName; // $ExpectType string | null | undefined
cefExtensions.oldFilePath; // $ExpectType string | null | undefined
cefExtensions.oldFileSize; // $ExpectType number | null | undefined
cefExtensions.oldFileType; // $ExpectType string | null | undefined
cefExtensions.bytesOut; // $ExpectType number | null | undefined
cefExtensions.eventOutcome; // $ExpectType string | null | undefined
cefExtensions.transportProtocol; // $ExpectType string | null | undefined
cefExtensions.Reason; // $ExpectType string | null | undefined
cefExtensions.requestUrl; // $ExpectType string | null | undefined
cefExtensions.requestClientApplication; // $ExpectType string | null | undefined
cefExtensions.requestContext; // $ExpectType string | null | undefined
cefExtensions.requestCookies; // $ExpectType string | null | undefined
cefExtensions.requestMethod; // $ExpectType string | null | undefined
cefExtensions.deviceReceiptTime; // $ExpectType string | null | undefined
cefExtensions.sourceHostName; // $ExpectType string | null | undefined
cefExtensions.sourceMacAddress; // $ExpectType string | null | undefined
cefExtensions.sourceNtDomain; // $ExpectType string | null | undefined
cefExtensions.sourceDnsDomain; // $ExpectType string | null | undefined
cefExtensions.sourceServiceName; // $ExpectType string | null | undefined
cefExtensions.sourceTranslatedAddress; // $ExpectType string | null | undefined
cefExtensions.sourceTranslatedPort; // $ExpectType number | null | undefined
cefExtensions.sourceProcessId; // $ExpectType number | null | undefined
cefExtensions.sourceUserPrivileges; // $ExpectType string | null | undefined
cefExtensions.sourceProcessName; // $ExpectType string | null | undefined
cefExtensions.sourcePort; // $ExpectType number | null | undefined
cefExtensions.sourceAddress; // $ExpectType string | null | undefined
cefExtensions.startTime; // $ExpectType string | null | undefined
cefExtensions.sourceUserId; // $ExpectType string | null | undefined
cefExtensions.sourceUserName; // $ExpectType string | null | undefined
const extType: CEF.ExtensionType | null | undefined = cefExtensions.type;
// @ts-expect-error
const extType1: CEF.ExtensionType | null = cefExtensions.type;
// @ts-expect-error
const extType2: CEF.ExtensionType | undefined = cefExtensions.type;
// @ts-expect-error
const extType3: CEF.ExtensionType = cefExtensions.type;
cefExtensions.agentDnsDomain; // $ExpectType string | null | undefined
cefExtensions.agentNtDomain; // $ExpectType string | null | undefined
cefExtensions.agentTranslatedAddress; // $ExpectType string | null | undefined
cefExtensions['agentTranslatedZone ExternalID']; // $ExpectType string | null | undefined
cefExtensions.agentTranslatedZoneURI; // $ExpectType string | null | undefined
cefExtensions.agentZoneExternalID; // $ExpectType string | null | undefined
cefExtensions.agentZoneURI; // $ExpectType string | null | undefined
cefExtensions.agentAddress; // $ExpectType string | null | undefined
cefExtensions.agentHostName; // $ExpectType string | null | undefined
cefExtensions.agentId; // $ExpectType string | null | undefined
cefExtensions.agentMacAddress; // $ExpectType string | null | undefined
cefExtensions.agentReceiptTime; // $ExpectType string | null | undefined
cefExtensions.agentType; // $ExpectType string | null | undefined
cefExtensions.agentTimeZone; // $ExpectType string | null | undefined
cefExtensions.agentVersion; // $ExpectType string | null | undefined
cefExtensions.customerExternalID; // $ExpectType string | null | undefined
cefExtensions.customerURI; // $ExpectType string | null | undefined
cefExtensions['destinationTranslated ZoneExternalID']; // $ExpectType string | null | undefined
cefExtensions['destinationTranslated ZoneURI']; // $ExpectType string | null | undefined
cefExtensions.destinationZoneExternalID; // $ExpectType string | null | undefined
cefExtensions.destinationZoneURI; // $ExpectType string | null | undefined
cefExtensions['deviceTranslatedZone ExternalID']; // $ExpectType string | null | undefined
cefExtensions.deviceTranslatedZoneURI; // $ExpectType string | null | undefined
cefExtensions.deviceZoneExternalID; // $ExpectType string | null | undefined
cefExtensions.deviceZoneURI; // $ExpectType string | null | undefined
cefExtensions.destinationGeoLatitude; // $ExpectType number | null | undefined
cefExtensions.destinationGeoLongitude; // $ExpectType number | null | undefined
cefExtensions.eventId; // $ExpectType number | null | undefined
cefExtensions.rawEvent; // $ExpectType string | null | undefined
cefExtensions.sourceGeoLatitude; // $ExpectType number | null | undefined
cefExtensions.sourceGeoLongitude; // $ExpectType number | null | undefined
cefExtensions['sourceTranslatedZone ExternalID']; // $ExpectType string | null | undefined
cefExtensions.sourceTranslatedZoneURI; // $ExpectType string | null | undefined
cefExtensions.sourceZoneExternalID; // $ExpectType string | null | undefined
cefExtensions.sourceZoneURI; // $ExpectType string | null | undefined

new Syslog({
    target: 'localhost',
    protocol: 'udp',
    format: 'rfc5424',
}).rfc5424!.info('My Message');

new RFC3164({
    applicationName: 'MyApp',
    color: true,
    extendedColor: true,
    server: {
        target: 'myServer.fqdn',
    },
}).info('My Message');

new RFC5424({
    applicationName: 'MyApp',
    timestamp: true,
    includeStructuredData: true,
    color: true,
    extendedColor: true,
    server: {
        target: 'myServer.fqdn',
    },
}).info('My Message');

new LEEF({
    vendor: 'acme',
    product: 'doohickey1000',
    version: 'alpha',
    eventId: 'hack',
    attributes: {
        cat: 'CC Databreach',
    },
    server: {
        target: 'myServer.fqdn',
    },
}).send();

new CEF({
    deviceVendor: 'acme',
    deviceProduct: 'doohickey1000',
    deviceVersion: 'alpha',
    deviceEventClassId: 'hack',
    name: 'My Reporting Service',
    severity: 'High',
    extensions: {
        rawEvent: 'CC Databreach',
    },
    server: {
        target: 'myServer.fqdn',
    },
}).send();
