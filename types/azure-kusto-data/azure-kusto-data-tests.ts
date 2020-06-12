import { Client, KustoConnectionStringBuilder, ClientRequestProperties } from 'azure-kusto-data';

const connectionString = "https://clustername.kusto.windows.net";

const kcsb = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(connectionString, 'appid', 'appkey', 'authorityId');
const client1 = new Client(kcsb);
client1.execute("db", "TableName | limit 1", (err, results) => {
    if (err) throw err;
    console.log(results.primaryResults[0].toString());
});

KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(connectionString, 'appid', 'appkey', 'authorityId');
KustoConnectionStringBuilder.withAadApplicationCertificateAuthentication(connectionString, 'appid', 'certificate', 'thumbprint', 'authorityId');
KustoConnectionStringBuilder.withAadManagedIdentities(connectionString);
KustoConnectionStringBuilder.withAadManagedIdentities(connectionString, 'msi_endpoint', 'msi_secret');
KustoConnectionStringBuilder.withAadUserPasswordAuthentication(connectionString, 'username', 'password');
KustoConnectionStringBuilder.withAadUserPasswordAuthentication(connectionString, 'username', 'password', 'authorityId');
KustoConnectionStringBuilder.withAadDeviceAuthentication(connectionString, 'authId');
KustoConnectionStringBuilder.withAadDeviceAuthentication(connectionString, 'authId', tokenResponse => {
    console.log(`Open ${tokenResponse.verificationUrl} and use ${tokenResponse.userCode} code to authorize.`);
});

const client2 = new Client("http://cluster.region.kusto.windows.net");
const clientRequestProps = new ClientRequestProperties();
clientRequestProps.setOption("servertimeout", 1000 * 60);
client2.executeQuery("db", "Table | count", (err: any, results: any) => {
    console.log(results);
}, clientRequestProps);
