declare namespace adone {
    namespace error {
        class Exception extends Error {
            constructor(message?: string | Error, captureStackTrace?: boolean);
        }
        class Runtime extends Exception { }
        class IncompleteBufferError extends Exception { }
        class NotImplemented extends Exception { }
        class IllegalState extends Exception { }
        class NotValid extends Exception { }
        class Unknown extends Exception { }
        class NotExists extends Exception { }
        class Exists extends Exception { }
        class Empty extends Exception { }
        class InvalidAccess extends Exception { }
        class NotSupported extends Exception { }
        class InvalidArgument extends Exception { }
        class InvalidNumberOfArguments extends Exception { }
        class NotFound extends Exception { }
        class Timeout extends Exception { }
        class Incorrect extends Exception { }
        class NotAllowed extends Exception { }
        class LimitExceeded extends Exception { }
        class Encoding extends Exception { }
        class Network extends Exception { }
        class Bind extends Exception { }
        class Connect extends Exception { }
        class Database extends Exception { }
        class DatabaseInitialization extends Exception { }
        class DatabaseOpen extends Exception { }
        class DatabaseRead extends Exception { }
        class DatabaseWrite extends Exception { }
        class NetronIllegalState extends Exception { }
        class NetronPeerDisconnected extends Exception { }
        class NetronTimeout extends Exception { }
    }
}
