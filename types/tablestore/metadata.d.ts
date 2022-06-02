declare namespace TableStore {
    enum rowExistenceExpectation {
        IGNORE,
        EXPECT_EXIST,
        EXPECT_NOT_EXIST,
    }

    enum Direction {
        FORWARD,
        BACKWARD,
    }

    enum UpdateType {
        PUT,
        DELETE,
        DELETE_ALL,
        INCREMENT,
    }

    enum BatchWriteType {
        PUT,
        UPDATE,
        DELETE,
    }

    enum ReturnType {
        NONE,
        Primarykey,
        AfterModify,
    }

    enum DefinedColumnType {
        DCT_INTEGER,
        DCT_DOUBLE,
        DCT_BOOLEAN,
        DCT_STRING,
    }

    enum PrimaryKeyType {
        INTEGER,
        STRING,
        BINARY,
    }

    enum PrimaryKeyOption {
        AUTO_INCREMENT,
    }

    enum IndexUpdateMode {
        IUM_ASYNC_INDEX,
        IUM_SYNC_INDEX,
    }

    enum IndexType {
        IT_GLOBAL_INDEX,
        IT_LOCAL_INDEX,
    }

    type VirtualData = {
        [K in any]: never;
    };
    const INF_MIN: VirtualData;
    const INF_MAX: VirtualData;
    const PK_AUTO_INCR: VirtualData;
}
