import {
    defaultOptions,
    DataTypes,
    PduTypes,
    Errors,
    Versions,
    Session,
    encode,
    parse,
    compareOids,
    VarBind,
    Packet
} from 'snmp-native';

// defaultOptions

const v_host: string | undefined = defaultOptions.host;
const v_community: string | undefined = defaultOptions.community;
const v_family: 'udp4' | 'udp6' | undefined = defaultOptions.family;
const v_port: number | undefined = defaultOptions.port;
const v_bindPort: number | undefined = defaultOptions.bindPort;
const v_timeouts: number[] | undefined = defaultOptions.timeouts;

// Session

const options = {
    host: 'localhost',
    community: 'public',
    port: 161,
    timeouts: [1000, 2000, 3000],
};

const session = new Session({
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

// Session methods

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

// compareOids

const v_compare: -1 | 0 | 1 = compareOids(str_oid, arr_oid);

// parse

const vp: Packet = parse(Buffer.from(''));
const pdu = vp.pdu;

const vp_version: 0 | 1 = vp.version;
const vp_community: string = vp.community;
const p_type: number = pdu.type;
const p_reqid: number = pdu.reqid;
const p_error: number = pdu.error;
const p_errorIndex: number = pdu.errorIndex;
const p_varbinds: VarBind[] = pdu.varbinds;

// encode

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

const v_encode: Buffer = encode(packet);

// DataTypes

const v_Integer: number = DataTypes.Integer;
const v_OctetString: number = DataTypes.OctetString;
const v_Null: number = DataTypes.Null;
const v_ObjectIdentifier: number = DataTypes.ObjectIdentifier;
const v_Sequence: number = DataTypes.Sequence;
const v_IpAddress: number = DataTypes.IpAddress;
const v_Counter: number = DataTypes.Counter;
const v_Gauge: number = DataTypes.Gauge;
const v_TimeTicks: number = DataTypes.TimeTicks;
const v_Opaque: number = DataTypes.Opaque;
const v_NsapAddress: number = DataTypes.NsapAddress;
const v_Counter64: number = DataTypes.Counter64;
const v_NoSuchObject: number = DataTypes.NoSuchObject;
const v_NoSuchInstance: number = DataTypes.NoSuchInstance;
const v_EndOfMibView: number = DataTypes.EndOfMibView;
const v_PDUBase: number = DataTypes.PDUBase;

// PduTypes

const v_GetRequestPDU: number = PduTypes.GetRequestPDU;
const v_GetNextRequestPDU: number = PduTypes.GetNextRequestPDU;
const v_GetResponsePDU: number = PduTypes.GetResponsePDU;
const v_SetRequestPDU: number = PduTypes.SetRequestPDU;

// Errors

const v_NoError: number = Errors.NoError;
const v_TooBig: number = Errors.TooBig;
const v_NoSuchName: number = Errors.NoSuchName;
const v_BadValue: number = Errors.BadValue;
const v_ReadOnly: number = Errors.ReadOnly;
const v_GenErr: number = Errors.GenErr;
const v_NoAccess: number = Errors.NoAccess;
const v_WrongType: number = Errors.WrongType;
const v_WrongLength: number = Errors.WrongLength;
const v_WrongEncoding: number = Errors.WrongEncoding;
const v_WrongValue: number = Errors.WrongValue;
const v_NoCreation: number = Errors.NoCreation;
const v_InconsistentValue: number = Errors.InconsistentValue;
const v_ResourceUnavailable: number = Errors.ResourceUnavailable;
const v_CommitFailed: number = Errors.CommitFailed;
const v_UndoFailed: number = Errors.UndoFailed;
const v_AuthorizationError: number = Errors.AuthorizationError;
const v_NotWritable: number = Errors.NotWritable;
const v_InconsistentName: number = Errors.InconsistentName;

const v_SNMPv1: number = Versions.SNMPv1;
const v_SNMPv2c: number = Versions.SNMPv2c;
