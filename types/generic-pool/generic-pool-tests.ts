import * as genericPool from "generic-pool";

class Connection {
    connected: boolean;
}

const factory = {
    create: (): Promise<Connection> => {
        return new Promise<Connection>(resolve => {
            const conn = new Connection();
            resolve(conn);
        });
    },
    destroy: (conn: Connection): Promise<undefined> => {
        return new Promise<undefined>(resolve => {
            conn.connected = false;
            resolve();
        });
    },
    validate: (conn: Connection): Promise<boolean> => {
        return new Promise<boolean>(resolve => {
            return conn.connected;
        });
    }
};

const opts = {
    max: 10,
    min: 2,
    maxWaitingClients: 2,
    testOnBorrow: true,
    acquireTimeoutMillis: 100,
    fifo: true,
    priorityRange: 5,
    autostart: false,
    evictionRunIntervalMillis: 200,
    numTestsPerRun: 3,
    softIdleTimeoutMillis: 100,
    idleTimeoutMillis: 5000
};

const pool = genericPool.createPool<Connection>(factory, opts);

pool.acquire()
    .then((conn: Connection) => {
        return pool.release(conn);
    }).then(() => {
        return pool.acquire(5);
    }).then((conn: Connection) => {
        return pool.destroy(conn);
    }).then(() => {
        return pool.clear();
    }).then((results: undefined[]) => {
    });

pool.on('factoryCreateError', (err: Error) => {
});

pool.on('factoryDestroyError', (err: Error) => {
});
