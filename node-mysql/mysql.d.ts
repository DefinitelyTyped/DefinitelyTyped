interface mysql
{
    createConnection(config);
    createPool(config);
    createPoolCluster(config);
}

declare var mysql:mysql;