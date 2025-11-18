import {
    SmartCardContext,
    SmartCardConnection,
    SmartCardError,
    SmartCardErrorOptions,
    SmartCardResponseCode,
    SmartCardReaderStateIn,
    SmartCardReaderStateFlagsIn,
    SmartCardProtocol,
    SmartCardAccessMode,
    SmartCardDisposition,
    SmartCardGetStatusChangeOptions,
    SmartCardConnectOptions,
    SmartCardConnectionStatus,
    SmartCardTransactionOptions,
    SmartCardTransmitOptions,
    SmartCardTransactionCallback,
} from 'isolated-web-apps';


const bufferSource: BufferSource = new ArrayBuffer(10);
const controlCode = 1234;
const tag = 0x80;

async function testSmartCardApi() {
    // --------------------------------------------------------------------------------
    // Synchronous Type Definitions (Enums, Interfaces)
    // --------------------------------------------------------------------------------

    // SmartCardResponseCode (Enum Test)
    const responseCode: SmartCardResponseCode = 'no-service';
    // $ExpectType "no-service"
    responseCode;

    // SmartCardProtocol (Enum Test)
    const protocolT0: SmartCardProtocol = 't0';
    // $ExpectType "t0"
    protocolT0;

    // SmartCardAccessMode (Enum Test)
    const accessModeShared: SmartCardAccessMode = 'shared';
    // $ExpectType "shared"
    accessModeShared;

    // SmartCardDisposition (Enum Test)
    const dispositionLeave: SmartCardDisposition = 'leave';
    // $ExpectType "leave"
    dispositionLeave;

    // SmartCardReaderStateFlagsIn
    const flagsIn: SmartCardReaderStateFlagsIn = {
        present: true,
        unaware: false,
    };
    // $ExpectType boolean | undefined
    flagsIn.unavailable;
    // $ExpectType boolean | undefined
    flagsIn.unaware;

    // SmartCardReaderStateIn
    const readerStateIn: SmartCardReaderStateIn = {
        readerName: 'Reader A',
        currentState: flagsIn,
        currentCount: 5
    };
    // $ExpectType string
    readerStateIn.readerName;

    // SmartCardConnectionStatus
    const status: SmartCardConnectionStatus = {
        readerName: 'Reader A',
        state: 'present',
    };
    // $ExpectType SmartCardConnectionState
    status.state;

    // --------------------------------------------------------------------------------
    // SmartCardError
    // --------------------------------------------------------------------------------

    const errorOptions: SmartCardErrorOptions = {
        responseCode: 'removed-card',
    };

    // Constructor
    const error = new SmartCardError('Card removed during transaction.', errorOptions);
    // $ExpectType SmartCardError
    error;

    // Property check
    // $ExpectType SmartCardResponseCode
    error.responseCode;
    // $ExpectType string
    error.name; // Inherited from DOMException

    // @ts-expect-error invalid response code
    new SmartCardError('Msg', { responseCode: 'invalid-code' });


    // --------------------------------------------------------------------------------
    // SmartCardResourceManager (Navigator Augmentation)
    // --------------------------------------------------------------------------------
    if (navigator.smartCard) {
        const resourceManager = navigator.smartCard;
        // $ExpectType SmartCardResourceManager
        resourceManager;

        // establishContext()
        const contextPromise = resourceManager.establishContext();
        // $ExpectType Promise<SmartCardContext>
        contextPromise;
    }

    // Dummy context for subsequent tests
    const context: SmartCardContext = {} as SmartCardContext;


    // --------------------------------------------------------------------------------
    // SmartCardContext
    // --------------------------------------------------------------------------------

    // listReaders()
    const readersPromise = context.listReaders();
    // $ExpectType Promise<string[]>
    readersPromise;

    // getStatusChange(readerStates, options?)
    const statusOptions: SmartCardGetStatusChangeOptions = {
        timeout: 1000 as DOMHighResTimeStamp,
        signal: {} as AbortSignal,
    };
    const statusChangePromise = context.getStatusChange([readerStateIn], statusOptions);
    // $ExpectType Promise<SmartCardReaderStateOut[]>
    statusChangePromise;

    // connect(readerName, accessMode, options?)
    const connectOptions: SmartCardConnectOptions = {
        preferredProtocols: ['t1', 'raw'],
    };
    const connectPromise = context.connect(readerStateIn.readerName, 'exclusive', connectOptions);
    // $ExpectType Promise<SmartCardConnectResult>
    connectPromise;

    // Dummy connection for subsequent tests
    const connection: SmartCardConnection = {} as SmartCardConnection;

    // --------------------------------------------------------------------------------
    // SmartCardConnection
    // --------------------------------------------------------------------------------

    // $ExpectType Promise<undefined>
    connection.disconnect('unpower');

    // disconnect() without disposition
    // $ExpectType Promise<undefined>
    connection.disconnect();

    // transmit(sendBuffer, options?)
    const transmitOptions: SmartCardTransmitOptions = {
        protocol: 't1',
    };

    // $ExpectType Promise<ArrayBuffer>
    connection.transmit(bufferSource, transmitOptions);

    // $ExpectType Promise<SmartCardConnectionStatus>
    connection.status();

    // $ExpectType Promise<ArrayBuffer>
    connection.control(controlCode, bufferSource);

    // $ExpectType Promise<ArrayBuffer>
    connection.getAttribute(tag);

    // $ExpectType Promise<undefined>
    connection.setAttribute(tag, bufferSource);

    // startTransaction(transaction, options?)
    const transactionCallback: SmartCardTransactionCallback = async () => 'reset';
    const transactionOptions: SmartCardTransactionOptions = {
        signal: {} as AbortSignal,
    };

    // $ExpectType Promise<undefined>
    connection.startTransaction(transactionCallback, transactionOptions);
}