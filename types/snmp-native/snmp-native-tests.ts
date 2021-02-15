import snmp, { VarBind, Packet } from 'snmp-native';

// snmp.defaultOptions

const v_host: string | undefined = snmp.defaultOptions.host;
const v_community: string | undefined = snmp.defaultOptions.community;
const v_family: 'udp4' | 'udp6' | undefined = snmp.defaultOptions.family;
const v_port: number | undefined = snmp.defaultOptions.port;
const v_bindPort: number | undefined = snmp.defaultOptions.bindPort;
const v_timeouts: number[] | undefined = snmp.defaultOptions.timeouts;

// snmp.Session

const options = {
    host: 'localhost',
    community: 'public',
    port: 161,
    timeouts: [1000, 2000, 3000],
};

const session = new snmp.Session({
    ...options,
    family: 'udp6',
    bindPort: 19840,
    msgReceived(message, rinfo) {
        const v_message: Buffer = message;

        const { address, family, port, size } = rinfo;
        const v_address: string = address;
        const v_family: 'IPv4' | 'IPv6' = family;
        const v_port: number = port;
        const v_size: number = size;
    },
});

// snmp.Session methods

const str_oid = '.1.3.6.1.4.1.1.2.3.4';
const arr_oid = [1, 3, 6, 1, 4, 1, 1, 2, 3, 4];
const oids = [str_oid, arr_oid];

function callback(err: Error | null, varbinds: VarBind[]): void {
    const vb = varbinds[0];
    const v_oid: number[] = vb.oid;
    const v_type: number = vb.type;
    const v_value: any = vb.value;
    const v_sendStamp: number = vb.sendStamp;
    const v_receiveStamp: number = vb.receiveStamp;
    const v_valueRaw: Buffer = vb.valueRaw;
    const v_valueHex: string | undefined = vb.valueHex;
}

session.get({ oid: str_oid, }, callback);
session.get({ oid: arr_oid, }, callback);
session.get({ oid: arr_oid, ...options, }, callback);

session.getNext({ oid: str_oid, }, callback);
session.getNext({ oid: arr_oid, }, callback);
session.getNext({ oid: arr_oid, ...options, }, callback);

session.getSubtree({ oid: str_oid, }, callback);
session.getSubtree({ oid: arr_oid, }, callback);
session.getSubtree({ oid: arr_oid, combinedTimeout: 10, }, callback);
session.getSubtree({ oid: arr_oid, combinedTimeout: 10, ...options, }, callback);

session.getAll({ oids, }, callback);
session.getAll({ oids, combinedTimeout: 10, }, callback);
session.getAll({ oids, combinedTimeout: 10, abortOnError: true, }, callback);
session.getAll({ oids, combinedTimeout: 10, abortOnError: true, ...options, }, callback);

session.set({ oid: str_oid, type: 2, value: 10, });
session.set({ oid: arr_oid, type: 2, value: 10, }, callback);
session.set({ oid: arr_oid, type: 2, value: 10, }, callback);
session.set({ oid: arr_oid, type: 2, value: 10, ...options, }, callback);
session.set({ oid: arr_oid, value: null, }, callback);
session.set({ oid: arr_oid, type: null, }, callback);

session.close();

// snmp.compareOids

const v_compare: -1 | 0 | 1 = snmp.compareOids(str_oid, arr_oid);

// snmp.parse

const vp: Packet = snmp.parse(Buffer.from(''));
const pdu = vp.pdu;

const vp_version: 0 | 1 = vp.version;
const vp_community: string = vp.community;
const p_type: number = pdu.type;
const p_reqid: number = pdu.reqid;
const p_error: number = pdu.error;
const p_errorIndex: number = pdu.errorIndex;
const p_varbinds: VarBind[] = pdu.varbinds;

// snmp.encode

const varbinds: VarBind[] = [];
const packet: Packet = {
    version: 0,
    community: 'public',
    pdu: {
        varbinds,
        type: 1,
        reqid: 2,
        error: 3,
        errorIndex: 4,
    },
};

const v_encode: Buffer = snmp.encode(packet);

// snmp.DataTypes

const v_Integer: number = snmp.DataTypes.Integer;
const v_OctetString: number = snmp.DataTypes.OctetString;
const v_Null: number = snmp.DataTypes.Null;
const v_ObjectIdentifier: number = snmp.DataTypes.ObjectIdentifier;
const v_Sequence: number = snmp.DataTypes.Sequence;
const v_IpAddress: number = snmp.DataTypes.IpAddress;
const v_Counter: number = snmp.DataTypes.Counter;
const v_Gauge: number = snmp.DataTypes.Gauge;
const v_TimeTicks: number = snmp.DataTypes.TimeTicks;
const v_Opaque: number = snmp.DataTypes.Opaque;
const v_NsapAddress: number = snmp.DataTypes.NsapAddress;
const v_Counter64: number = snmp.DataTypes.Counter64;
const v_NoSuchObject: number = snmp.DataTypes.NoSuchObject;
const v_NoSuchInstance: number = snmp.DataTypes.NoSuchInstance;
const v_EndOfMibView: number = snmp.DataTypes.EndOfMibView;
const v_PDUBase: number = snmp.DataTypes.PDUBase;

// snmp.PduTypes

const v_GetRequestPDU: number = snmp.PduTypes.GetRequestPDU;
const v_GetNextRequestPDU: number = snmp.PduTypes.GetNextRequestPDU;
const v_GetResponsePDU: number = snmp.PduTypes.GetResponsePDU;
const v_SetRequestPDU: number = snmp.PduTypes.SetRequestPDU;

// snmp.Errors

const v_NoError: number = snmp.Errors.NoError;
const v_TooBig: number = snmp.Errors.TooBig;
const v_NoSuchName: number = snmp.Errors.NoSuchName;
const v_BadValue: number = snmp.Errors.BadValue;
const v_ReadOnly: number = snmp.Errors.ReadOnly;
const v_GenErr: number = snmp.Errors.GenErr;
const v_NoAccess: number = snmp.Errors.NoAccess;
const v_WrongType: number = snmp.Errors.WrongType;
const v_WrongLength: number = snmp.Errors.WrongLength;
const v_WrongEncoding: number = snmp.Errors.WrongEncoding;
const v_WrongValue: number = snmp.Errors.WrongValue;
const v_NoCreation: number = snmp.Errors.NoCreation;
const v_InconsistentValue: number = snmp.Errors.InconsistentValue;
const v_ResourceUnavailable: number = snmp.Errors.ResourceUnavailable;
const v_CommitFailed: number = snmp.Errors.CommitFailed;
const v_UndoFailed: number = snmp.Errors.UndoFailed;
const v_AuthorizationError: number = snmp.Errors.AuthorizationError;
const v_NotWritable: number = snmp.Errors.NotWritable;
const v_InconsistentName: number = snmp.Errors.InconsistentName;
