// see: https://www.npmjs.com/package/node-snap7#api
// see: https://github.com/mathiask88/node-snap7-testsuite
// see: http://definitelytyped.org/guides/contributing.html


import snap7 = require("node-snap7");

// Playing Variables ...

let l_TSAP = ['02', '00'];
let r_TSAP = ['02', '00'];

let localTSAP = parseInt(l_TSAP.join(''), 16);
let remoteTSAP = parseInt(r_TSAP.join(''), 16);
let buffer = new Buffer(20);

let multivarsRead: snap7.MultiVarRead[] = [
  {
    "Area": snap7.Area.S7AreaDB,
    "WordLen": snap7.WordLen.S7WLByte,
    "DBNumber": 1,
    "Start": 0,
    "Amount": 1
  },
  {
    "Area": snap7.Area.S7AreaCT,
    "WordLen": snap7.WordLen.S7WLCounter,
    "Start": 0,
    "Amount": 8
  },
  {
    "Area": snap7.Area.S7AreaPA,
    "WordLen": snap7.WordLen.S7WLByte,
    "Start": 0,
    "Amount": 16
  }
];

let multivarsWrite: snap7.MultiVarWrite[] = [
  {
    "Area": snap7.Area.S7AreaDB,
    "WordLen": snap7.WordLen.S7WLByte,
    "DBNumber": 1,
    "Start": 0,
    "Amount": 1,
    "Data": new Buffer(10)
  },
  {
    "Area": snap7.Area.S7AreaCT,
    "WordLen": snap7.WordLen.S7WLCounter,
    "Start": 0,
    "Amount": 8,
    "Data": new Buffer(10)
  },
  {
    "Area": snap7.Area.S7AreaPA,
    "WordLen": snap7.WordLen.S7WLByte,
    "Start": 0,
    "Amount": 16,
    "Data": new Buffer(10)
  }
];
let datetime = new Date();



//Test Functions ...

function test_synchron(): void {

  let s7client = new snap7.S7Client();
 
  //API - Control functions
  s7client.Connect();
  s7client.ConnectTo('172.20.30.96', 0, 2);
  s7client.SetConnectionParams("", localTSAP, remoteTSAP);
  s7client.SetConnectionType(snap7.ConnectionType.CONNTYPE_BASIC);
  s7client.Disconnect();
  s7client.GetParam(snap7.ParamNumber.DstRef);
  s7client.SetParam(snap7.ParamNumber.PDURequest, 8);

  //API - Data I/O functions
  s7client.ReadArea(snap7.Area.S7AreaDB, 100, 0, 10, snap7.WordLen.S7WLByte);
  s7client.WriteArea(snap7.Area.S7AreaDB, 100, 0, 10, snap7.WordLen.S7WLDWord, buffer);
  s7client.DBRead(100, 0, 10);
  s7client.DBWrite(100, 0, 10, buffer);
  s7client.ABRead(0, 10);
  s7client.ABWrite(100, 10, buffer);
  s7client.EBRead(0, 10);
  s7client.EBWrite(100, 10, buffer);
  s7client.MBRead(0, 10);
  s7client.MBWrite(100, 10, buffer);
  s7client.TMRead(0, 10);
  s7client.TMWrite(100, 10, buffer);
  s7client.CTRead(0, 10);
  s7client.CTWrite(100, 10, buffer);

  let ret_ReadMultiVars = s7client.ReadMultiVars(multivarsRead);
  let ret_WriteMultiVars = s7client.WriteMultiVars(multivarsWrite);

  //API - Directory functions
  s7client.ListBlocks();
  s7client.ListBlocksOfType(snap7.BlockType.Block_DB);
  s7client.GetAgBlockInfo(snap7.BlockType.Block_DB, 100);
  s7client.GetPgBlockInfo(buffer);

  //API - Block oriented functions
  s7client.FullUpload(snap7.BlockType.Block_DB, 100);
  s7client.Upload(snap7.BlockType.Block_DB, 100);
  s7client.Download(100, buffer);
  s7client.Delete(snap7.BlockType.Block_DB, 100);
  s7client.DBGet(100);
  s7client.DBFill(100, 'a');

  //API - Date/Time functions
  s7client.GetPlcDateTime();
  s7client.SetPlcDateTime(datetime)
  s7client.SetPlcSystemDateTime();

  //API - System info functions
  s7client.ReadSZL(1, 10);
  s7client.ReadSZLList();
  s7client.GetOrderCode();
  s7client.GetCpuInfo();
  s7client.GetCpInfo();

  //API - PLC control functions
  s7client.PlcHotStart();
  s7client.PlcColdStart();
  s7client.PlcStop();
  s7client.CopyRamToRom(100);
  s7client.Compress(100);

  //API - Security functions
  s7client.SetSessionPassword("abc");
  s7client.ClearSessionPassword();
  s7client.GetProtection();

  //API - Properties
  s7client.ExecTime();
  s7client.LastError();
  s7client.PduRequested();
  s7client.PduLength();
  s7client.PlcStatus();
  s7client.Connected();
  s7client.ErrorText(0);

}




function test_asynchron(): void {
  
  let s7client = new snap7.S7Client();
 
  //API - Control functions
  s7client.Connect(function(err){});
  s7client.ConnectTo('172.20.30.96', 0, 2, function(err){});
  //not asynchron: s7client.SetConnectionParams("", localTSAP, remoteTSAP);
  //not asynchron: s7client.SetConnectionType(snap7.ConnectionType.CONNTYPE_BASIC);
  //not asynchron: s7client.Disconnect();
  //not asynchron: s7client.GetParam(snap7.ParamNumber.DstRef);
  //not asynchron: s7client.SetParam(snap7.ParamNumber.PDURequest, 8);
  
  //API - Data I/O functions
  s7client.ReadArea(snap7.Area.S7AreaDB, 100, 0, 10, snap7.WordLen.S7WLByte, function(err, data){});
  s7client.WriteArea(snap7.Area.S7AreaDB, 100, 0, 10, snap7.WordLen.S7WLDWord, buffer, function(err){});
  s7client.DBRead(100, 0, 10, function(err, data){});
  s7client.DBWrite(100, 0, 10, buffer, function(err){});
  s7client.ABRead(0, 10, function(err, data){});
  s7client.ABWrite(100, 10, buffer, function(err){});
  s7client.EBRead(0, 10, function(err, data){});
  s7client.EBWrite(100, 10, buffer, function(err){});
  s7client.MBRead(0, 10, function(err, data){});
  s7client.MBWrite(100, 10, buffer, function(err){});
  s7client.TMRead(0, 10, function(err, data){});
  s7client.TMWrite(100, 10, buffer, function(err){});
  s7client.CTRead(0, 10, function(err, data){});
  s7client.CTWrite(100, 10, buffer, function(err){});

  s7client.ReadMultiVars(multivarsRead, function(err, data){});
  s7client.WriteMultiVars(multivarsWrite, function(err, data){});
  
  //API - Directory functions
  s7client.ListBlocks(function(err, data){});
  s7client.ListBlocksOfType(snap7.BlockType.Block_DB, function(err, data){});
  s7client.GetAgBlockInfo(snap7.BlockType.Block_DB, 100, function(err, data){});
  //not asynchron: s7client.GetPgBlockInfo(buffer);
  
  //API - Block oriented functions
  s7client.FullUpload(snap7.BlockType.Block_DB, 100, function(err, data){});
  s7client.Upload(snap7.BlockType.Block_DB, 100, function(err, data){});
  s7client.Download(100, buffer, function(err){});
  s7client.Delete(snap7.BlockType.Block_DB, 100, function(err){});
  s7client.DBGet(100, function(err, data){});
  s7client.DBFill(100, 'a', function(err){});
  
  //API - Date/Time functions
  s7client.GetPlcDateTime(function(err, data){});
  s7client.SetPlcDateTime(datetime, function(err){})
  s7client.SetPlcSystemDateTime(function(err){});

  //API - System info functions
  s7client.ReadSZL(1, 10, function(err, data){});
  s7client.ReadSZLList(function(err, data){});
  s7client.GetOrderCode(function(err, data){});
  s7client.GetCpuInfo(function(err, data){});
  s7client.GetCpInfo(function(err, data){});

  //API - PLC control functions
  s7client.PlcHotStart(function(err){});
  s7client.PlcColdStart(function(err){});
  s7client.PlcStop(function(err){});
  s7client.CopyRamToRom(100, function(err){});
  s7client.Compress(100, function(err){});

  //API - Security functions
  s7client.SetSessionPassword("abc", function(err){});
  s7client.ClearSessionPassword(function(err){});
  s7client.GetProtection(function(err, data){});

  //API - Properties
  //not asynchron: s7client.ExecTime();
  //not asynchron: s7client.LastError();
  //not asynchron: s7client.PduRequested();
  //not asynchron: s7client.PduLength();
  s7client.PlcStatus(function(err, data){});
  //not asynchron: s7client.Connected();
  //not asynchron: s7client.ErrorText(0);

}
