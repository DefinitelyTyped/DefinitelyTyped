import {
  SmartCardAccessMode,
  SmartCardConnection,
  SmartCardConnectionStatus,
  SmartCardConnectOptions,
  SmartCardContext,
  SmartCardDisposition,
  SmartCardError,
  SmartCardErrorOptions,
  SmartCardGetStatusChangeOptions,
  SmartCardProtocol,
  SmartCardReaderStateFlagsIn,
  SmartCardReaderStateIn,
  SmartCardResponseCode,
  SmartCardTransactionCallback,
  SmartCardTransactionOptions,
  SmartCardTransmitOptions,
} from "isolated-web-apps";

const bufferSource: BufferSource = new ArrayBuffer(10);
const controlCode = 1234;
const tag = 0x80;

async function testSmartCardApi() {
  // --------------------------------------------------------------------------------
  // Synchronous Type Definitions (Enums, Interfaces)
  // --------------------------------------------------------------------------------

  const responseCode: SmartCardResponseCode = "no-service";
  // $ExpectType "no-service"
  responseCode;

  const protocolT0: SmartCardProtocol = "t0";
  // $ExpectType "t0"
  protocolT0;

  const accessModeShared: SmartCardAccessMode = "shared";
  // $ExpectType "shared"
  accessModeShared;

  const dispositionLeave: SmartCardDisposition = "leave";
  // $ExpectType "leave"
  dispositionLeave;

  const flagsIn: SmartCardReaderStateFlagsIn = {
    present: true,
    unaware: false,
  };
  // $ExpectType boolean | undefined
  flagsIn.unavailable;
  // $ExpectType boolean | undefined
  flagsIn.unaware;

  const readerStateIn: SmartCardReaderStateIn = {
    readerName: "Reader A",
    currentState: flagsIn,
    currentCount: 5,
  };
  // $ExpectType string
  readerStateIn.readerName;

  const status: SmartCardConnectionStatus = {
    readerName: "Reader A",
    state: "present",
  };
  // $ExpectType SmartCardConnectionState
  status.state;

  // --------------------------------------------------------------------------------
  // SmartCardError
  // --------------------------------------------------------------------------------

  const errorOptions: SmartCardErrorOptions = {
    responseCode: "removed-card",
  };

  const error = new SmartCardError(
    "Card removed during transaction.",
    errorOptions,
  );
  // $ExpectType SmartCardError
  error;

  // $ExpectType SmartCardResponseCode
  error.responseCode;
  // $ExpectType string
  error.name; // Inherited from DOMException

  // @ts-expect-error invalid response code
  new SmartCardError("Msg", { responseCode: "invalid-code" });

  // --------------------------------------------------------------------------------
  // SmartCardResourceManager (Navigator Augmentation)
  // --------------------------------------------------------------------------------
  if (navigator.smartCard) {
    const resourceManager = navigator.smartCard;
    // $ExpectType SmartCardResourceManager
    resourceManager;

    // $ExpectType Promise<SmartCardContext>
    resourceManager.establishContext();
  }

  const context: SmartCardContext = {} as SmartCardContext;

  // --------------------------------------------------------------------------------
  // SmartCardContext
  // --------------------------------------------------------------------------------

  const readersPromise = context.listReaders();
  // $ExpectType Promise<string[]>
  readersPromise;

  const statusOptions: SmartCardGetStatusChangeOptions = {
    timeout: 1000 as DOMHighResTimeStamp,
    signal: {} as AbortSignal,
  };
  const statusChangePromise = context.getStatusChange(
    [readerStateIn],
    statusOptions,
  );
  // $ExpectType Promise<SmartCardReaderStateOut[]>
  statusChangePromise;

  const connectOptions: SmartCardConnectOptions = {
    preferredProtocols: ["t1", "raw"],
  };
  const connectPromise = context.connect(
    readerStateIn.readerName,
    "exclusive",
    connectOptions,
  );
  // $ExpectType Promise<SmartCardConnectResult>
  connectPromise;

  // --------------------------------------------------------------------------------
  // SmartCardConnection
  // --------------------------------------------------------------------------------

  const connection: SmartCardConnection = {} as SmartCardConnection;

  // $ExpectType Promise<undefined>
  connection.disconnect("unpower");

  // $ExpectType Promise<undefined>
  connection.disconnect();

  const transmitOptions: SmartCardTransmitOptions = {
    protocol: "t1",
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

  const transactionCallback: SmartCardTransactionCallback = async () => "reset";
  const transactionOptions: SmartCardTransactionOptions = {
    signal: {} as AbortSignal,
  };

  // $ExpectType Promise<undefined>
  connection.startTransaction(transactionCallback, transactionOptions);
}
