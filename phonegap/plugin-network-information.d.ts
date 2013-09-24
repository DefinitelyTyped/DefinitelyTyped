interface Connection {
    type: number;
}

declare var Connection: {
    UNKNOWN: number;
    ETHERNET: number;
    WIFI: number;
    CELL_2G: number;
    CELL_3G: number;
    CELL_4G: number;
    NONE: number;
}
declare var Connection: Connection;

interface Navigator {
    connection: Connection;
}
