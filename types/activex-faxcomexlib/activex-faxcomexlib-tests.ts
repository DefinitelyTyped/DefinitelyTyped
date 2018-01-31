/// <reference types="activex-iwshruntimelibrary" />

const collectionToArray = <T>(col: { Item(index: any): T } | SafeArray<T>) => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

const toSafeArray = <T>(...items: T[]): SafeArray<T> => {
    const dict = new ActiveXObject('Scripting.Dictionary');
    items.forEach((x, index) => dict.Add(index, x));
    return dict.Items() as SafeArray<T>;
};

const VB = {
    InputBox: (prompt: string): string => ''
};

const getServer = () => {
    const server = new ActiveXObject('FaxComEx.FaxServer');
    server.Connect('');
    return server;
};

(() => {
    // https://msdn.microsoft.com/en-us/library/windows/desktop/ms693376(v=vs.85).aspx
    const server = new ActiveXObject('FaxComEx.FaxServer');
    const document = new ActiveXObject('FaxComEx.FaxDocument');

    // https://msdn.microsoft.com/en-us/library/windows/desktop/ms692919(v=vs.85).aspx
    server.Connect('');
    server.Connect('computername');
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693502(v=vs.85).aspx
(() => {
    const getInitializedDevice = () => {
        const ret = getServer().GetDevices().ItemById(1);
        ret.ReceiveMode = FAXCOMEXLib.FAX_DEVICE_RECEIVE_MODE_ENUM.fdrmAUTO_ANSWER;
        ret.RingsBeforeAnswer = 5;
        ret.SendEnabled = true;
        return ret;
    };

    // saving configuration
    let device = getInitializedDevice();
    device.Save();

    // abandoning changes to configuration, using the Refresh method
    device = getInitializedDevice();
    device.Refresh();
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693502(v=vs.85).aspx
(() => {
    const incomingJob = getServer().Folders.IncomingQueue.GetJobs().Item(1);
    incomingJob.Refresh();
    const currentPage = incomingJob.CurrentPage;
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms692922(v=vs.85).aspx
(() => {
    const server = getServer();

    WScript.Echo(`Server information:
API Version: ${server.APIVersion}
Debug: ${server.Debug}
Build and version: ${server.MajorBuild}.${server.MinorBuild}.${server.MajorVersion}.${server.MinorVersion}
Server name: ${server.ServerName}`);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693455(v=vs.85).aspx
(() => {
    const activity = getServer().Activity;
    activity.Refresh();

    WScript.Echo(`
${activity.IncomingMessages} incoming messages
${activity.OutgoingMessages} outgoing messages
${activity.RoutingMessages} routing messages
${activity.QueuedMessages} queued messages`);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693400(v=vs.85).aspx
(() => {
    const device = getServer().GetDevices().Item(1);
    device.CSID = 'Accounts payable';
    device.Description = 'Primary fax device';
    device.ReceiveMode = FAXCOMEXLib.FAX_DEVICE_RECEIVE_MODE_ENUM.fdrmAUTO_ANSWER;
    device.RingsBeforeAnswer = 5;
    device.SendEnabled = true;
    device.TSID = 'Accounts payable';
    device.Save();
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms692985(v=vs.85).aspx
(() => {
    const devices = getServer().GetDevices();
    WScript.Echo(`This server has ${devices.Count} fax devices`);
    for (let i = 1; i <= devices.Count; i++) {
        WScript.Echo(`Device ID for device number ${i} is ${devices.Item(i).Id}`);
    }

    collectionToArray(devices).forEach(device => {
        device.Refresh();
        WScript.Echo(`
Device name: ${device.DeviceName}
Provider unique name: ${device.ProviderUniqueName}
Powered off: ${device.PoweredOff}
Receiving now: ${device.ReceivingNow}
Ringing now: ${device.RingingNow}
Sending now: ${device.SendingNow}`);

        const routingMethods = new VBArray(device.UsedRoutingMethods).toArray();
        routingMethods.forEach((guid, index) => {
            WScript.Echo(`Method number ${index} = ${guid}`);
        });

        device.UseRoutingMethod(routingMethods[0], false);
        device.Save();
    });
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693486(v=vs.85).aspx
(() => {
    const outputRuleInfo = (rule: FAXCOMEXLib.FaxOutboundRoutingRule, index?: number) => {
        WScript.Echo(`
Outbound routing rule number: ${index || 'unknown'}
Area code: ${rule.AreaCode}
Country/region code: ${rule.CountryCode}
Device ID: ${rule.DeviceId}
Group name: ${rule.GroupName}
Status: ${rule.Status}
Is device used: ${rule.UseDevice}`
            .trim());
    };

    const server = getServer();
    const device = server.GetDevices().Item(1);
    const id = device.Id;
    const rules = server.OutboundRouting.GetRules();
    const outboundRoutingRules = server.OutboundRouting.GetRules();
    WScript.Echo(`There are ${outboundRoutingRules.Count} outbound routing rules on this server.`);

    collectionToArray(outboundRoutingRules).forEach((rule, index) => {
        rule.Refresh();
        outputRuleInfo(rule, index);

        if (!rule.UseDevice) { return; }
        if (VB.InputBox('Do you want to change the device for this rule (Y/N)?') === 'Y') {
            const newDeviceID = parseInt(VB.InputBox('Enter new device ID'), 10);
            rule.DeviceId = newDeviceID;
            rule.Save();
        }
    });

    const msg = `
Do you want to:
1) display an item based on its country/region and area code,
2) remove an item based on its country/region and area code,
3) remove an item based on its item number, or
4) add a rule?
Input 1, 2, 3, 4, or 0 to exit
`.trim();
    const result = parseInt(VB.InputBox(msg), 10);
    let countryCode: number;
    let areaCode: number;
    let itemNumber: number;
    let rule: FAXCOMEXLib.FaxOutboundRoutingRule;
    switch (result) {
        case 1:
            countryCode = parseInt(VB.InputBox('Enter the country/region code'), 10);
            areaCode = parseInt(VB.InputBox('Enter the area code'), 10);
            rule = outboundRoutingRules.ItemByCountryAndArea(countryCode, areaCode);
            outputRuleInfo(rule);
            break;
        case 2:
            countryCode = parseInt(VB.InputBox('Enter the country/region code'), 10);
            areaCode = parseInt(VB.InputBox('Enter the area code'), 10);
            outboundRoutingRules.RemoveByCountryAndArea(countryCode, areaCode);
            break;
        case 3:
            itemNumber = parseInt(VB.InputBox('Enter the item number'), 10);
            outboundRoutingRules.Remove(itemNumber);
            break;
        case 4:
            countryCode = parseInt(VB.InputBox('Enter the country/region code'), 10);
            areaCode = parseInt(VB.InputBox('Enter the area code'), 10);
            rule = outboundRoutingRules.Add(countryCode, areaCode, true, '', id);
            break;
        default:
            return;
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693408(v=vs.85).aspx
(() => {
    const server = getServer();
    const outboundRouting = server.OutboundRouting;
    const outboundRoutingGroups = outboundRouting.GetGroups();
    const groupName = VB.InputBox('Provide a name for the outbound routing group');
    const outboundRoutingGroup = outboundRoutingGroups.Add(groupName);
    const devices = collectionToArray(server.GetDevices());

    // add the devices to the routing group
    devices.forEach(device => outboundRoutingGroup.DeviceIds.Add(device.Id));
    // move the last device to the top of the order
    outboundRoutingGroup.DeviceIds.SetOrder(devices[devices.length - 1].Id, 1);

    // display the number of devices, and the device ID of the first device,to confirm its location in the order
    const msg = `
Number of devices: ${outboundRoutingGroup.DeviceIds.Count}
ID of first device: ${outboundRoutingGroup.DeviceIds.Item(1)}
`.trim();
    WScript.Echo(msg);

    // remove the first device
    outboundRoutingGroup.DeviceIds.Remove(1);

    WScript.Echo(`There are now ${outboundRoutingGroups.Count} routing groups on the server`);

    collectionToArray(outboundRoutingGroups).forEach((routingGroup, index) => {
        const msg = `
Routing group number: ${index}
Outbound routing group name: ${routingGroup.Name}
Device status: ${routingGroup.Status}
`.trim();
    });

    // allow user to remove a routing group
    if (VB.InputBox('Do you want to remove a routing group (Y/N)?') === 'N') { return; }
    const itemNumber = VB.InputBox('Enter the item number for the group you want to remove');
    outboundRoutingGroups.Remove(itemNumber);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/aa964960(v=vs.85).aspx
(() => {
    const accountSet = getServer().FaxAccountSet;
    const accounts = collectionToArray(accountSet.GetAccounts());
    WScript.Echo(`Number of accounts: ${accounts.length}`);
    accounts.forEach(account => WScript.Echo(account.AccountName));

    const accountName = VB.InputBox('Enter an account name');
    accountSet.AddAccount(accountName);
    accountSet.RemoveAccount(accountName);
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms692952(v=vs.85).aspx
(() => {
    const incomingJobs = collectionToArray(getServer().Folders.IncomingQueue.GetJobs());
    WScript.Echo(`There are ${incomingJobs.length} jobs in the incoming queue.`);
    const n = parseInt(VB.InputBox('Input the number of a job for which you want information'), 10);
    const job = incomingJobs[n - 1];
    WScript.Echo(`
Available operations: ${job.AvailableOperations}
Caller ID: ${job.CallerId}
CSID: ${job.CSID}
Current page: ${job.CurrentPage}
Device ID: ${job.DeviceId}
Extended status: ${job.ExtendedStatus}
Extended status code: ${job.ExtendedStatusCode}
Job ID: ${job.Id}
Job type: ${job.JobType}
Retries: ${job.Retries}
Routing information: ${job.RoutingInformation}
Size: ${job.Size}
Status: ${job.Status}
Transmission start: ${new Date(job.TransmissionStart)}
Transmission end: ${new Date(job.TransmissionEnd)}
TSID: ${job.TSID}
`.trim());

    if (VB.InputBox('Cancel this fax (Y/N)?') === 'Y') {
        job.Cancel();
    }

    if (VB.InputBox('Open this fax (Y/N)?') === 'Y') {
        const fileName = VB.InputBox('Enter path to save');
        job.CopyTiff(fileName);
        new ActiveXObject('WScript.Shell').Run(fileName);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms692914(v=vs.85).aspx
(() => {
    const server = new ActiveXObject('FaxComEx.FaxServer');
    server.Connect('');
    const outgoingQueue = server.Folders.OutgoingQueue;
    outgoingQueue.AgeLimit = 2;
    outgoingQueue.AllowPersonalCoverPages = true;
    outgoingQueue.Blocked = false;
    outgoingQueue.Paused = false;
    outgoingQueue.Branding = true;
    outgoingQueue.DiscountRateStart = new Date(0, 0, 0, 0).getVarDate();
    outgoingQueue.DiscountRateStart = new Date(0, 0, 0, 1).getVarDate();
    outgoingQueue.UseDeviceTSID = true;
    outgoingQueue.Save();
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693393(v=vs.85).aspx
(() => {
    const outgoingQueue = getServer().Folders.OutgoingQueue;
    outgoingQueue.Refresh();
    WScript.Echo(`There are ${outgoingQueue.GetJobs().Count} faxes in the outgoing queue`);
    const inputResult = VB.InputBox('Which fax should be displayed (item number or job name)?');
    const itemNumber = parseInt(inputResult, 10);
    const job =
        isNaN(itemNumber) ?
            outgoingQueue.GetJob(inputResult) :
            outgoingQueue.GetJobs().Item(itemNumber);

    WScript.Echo(`
Available operations: ${job.AvailableOperations}
Broadcast receipts grouped? ${job.GroupBroadcastReceipts}
CSID: ${job.CSID}
Current page: ${job.CurrentPage}
Device ID: ${job.DeviceId}
Document name: ${job.DocumentName}
Extended status: ${job.ExtendedStatus}
Extended status code: ${job.ExtendedStatusCode}
Job ID: ${job.Id}
Original scheduled time: ${new Date(job.OriginalScheduledTime)}
Pages: ${job.Pages}
Priority: ${job.Priority}
Receipt type: ${job.ReceiptType}
`.trim());

    const fileName = VB.InputBox('Enter path to save');
    job.CopyTiff(fileName);
    new ActiveXObject('WScript.Shell').Run(fileName);

    const answer = VB.InputBox(`
Do you want to:
(C) cancel
(P) pause
(R) restart
(E) resume
the job?
`.trim());

    switch (answer) {
        case 'C':
            job.Cancel();
            break;
        case 'P':
            job.Pause();
            break;
        case 'R':
            job.Restart();
            break;
        case 'E':
            job.Resume();
            break;
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms692936(v=vs.85).aspx
(() => {
    const document = new ActiveXObject('FaxComEx.FaxDocument');
    document.Body = 'C:\\docs\\body.txt';
    document.DocumentName = 'My First Fax';
    document.Priority = FAXCOMEXLib.FAX_PRIORITY_TYPE_ENUM.fptHIGH;
    document.Recipients.Add('12225550100', 'Bud');
    document.AttachFaxToReceipt = true;
    document.CoverPageType = FAXCOMEXLib.FAX_COVERPAGE_TYPE_ENUM.fcptSERVER;
    document.Note = 'Here is the info you requested';
    document.ReceiptAddress = 'someone@example.com';
    document.ReceiptType = FAXCOMEXLib.FAX_RECEIPT_TYPE_ENUM.frtMAIL;
    document.ScheduleType = FAXCOMEXLib.FAX_SCHEDULE_TYPE_ENUM.fstSPECIFIC_TIME;
    document.ScheduleTime = new Date(0, 0, 0, 16, 35, 47).getVarDate();
    document.Subject = 'Today\'s fax';

    // set sender properties
    const sender = document.Sender;
    sender.Title = 'Mr.';
    sender.Name = 'Bob';
    sender.City = 'Cleveland Heights';
    sender.State = 'Ohio';
    sender.Company = 'Microsoft';
    sender.Country = 'USA';
    sender.Email = 'someone@microsoft.com';
    sender.FaxNumber = '12165555554';
    sender.HomePhone = '12165555555';
    sender.OfficeLocation = 'Downtown';
    sender.OfficePhone = '12165555553';
    sender.StreetAddress = '123 Main Street';
    sender.TSID = 'Office fax machine';
    sender.ZipCode = '44118';
    sender.BillingCode = '23A54';
    sender.Department = 'Accts Payable';
    sender.SaveDefaultSender();

    const server = getServer();

    const jobID = document.ConnectedSubmit(server);
    WScript.Echo(`The job ID is ${jobID}`);

    server.Disconnect();
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693479(v=vs.85).aspx
(() => {
    const document = new ActiveXObject('FaxComEx.FaxDocument');
    document.Body = 'C:\\docs\\body.txt';
    document.DocumentName = 'My First Fax';

    const recipients = document.Recipients;
    recipients.Add('12225550105', 'H');
    recipients.Add('12225550104', 'N');
    recipients.Add('12225550103', 'G');

    WScript.Echo(`Number of recipients: ${recipients.Count}`);
    collectionToArray(recipients).forEach((recipient, index) =>
        WScript.Echo(`Recipient number ${index}: ${recipient.Name}, ${recipient.FaxNumber}`)
    );

    document.Sender.LoadDefaultSender();
    document.GroupBroadcastReceipts = true;

    const jobIDs = document.Submit('');
    collectionToArray(jobIDs).forEach(jobID => WScript.Echo(`The job ID is ${jobID}`));

    while (recipients.Count > 0) {
        recipients.Remove(1);
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/aa964962(v=vs.85).aspx
(() => {
    const server = getServer();
    const prefetchCount = parseInt(VB.InputBox('How many messages should be prefetched?'), 10);
    server.CurrentAccount.Folders.IncomingArchive.Refresh();
    const messageIterator = server.Folders.IncomingArchive.GetMessages(prefetchCount);
    messageIterator.MoveFirst();
    for (let i = 1; i <= prefetchCount; i++) {
        if (i > 1 && VB.InputBox('View next message? (Y/N)') !== 'Y') { break; }
        const message = messageIterator.Message as FAXCOMEXLib.FaxIncomingMessage;
        if (messageIterator.AtEOF) {
            WScript.Echo(`End of file reached`);
            return;
        }
        if (!message.WasReAssigned) {
            if (VB.InputBox('Message not reassigned. Reassign (Y/N)?') === 'Y') {
                message.Subject = 'Reassigning message';
                message.SenderName = 'Test user';
                message.Recipients = VB.InputBox('Enter username, e.g. Domain\\UserName');
                message.SenderFaxNumber = '1234';
                message.ReAssign();
            }
        }
        messageIterator.MoveNext();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693402(v=vs.85).aspx
(() => {
    const server = getServer();
    const prefetchCount = parseInt(VB.InputBox('How many messages should be prefetched?'), 10);
    server.Folders.OutgoingArchive.Refresh();
    const messageIterator = server.Folders.OutgoingArchive.GetMessages(prefetchCount);
    messageIterator.MoveFirst();
    for (let i = 1; i <= prefetchCount; i++) {
        if (i > 1 && VB.InputBox('View next message? (Y/N)') !== 'Y') { break; }
        if (messageIterator.AtEOF) {
            WScript.Echo(`End of file reached`);
            return;
        }
        const message = messageIterator.Message as FAXCOMEXLib.FaxOutgoingMessage;

        const fileName = VB.InputBox('Enter path to save');
        message.CopyTiff(fileName);
        new ActiveXObject('WScript.Shell').Run(fileName);

        WScript.Echo(`Message information:
CSID: ${message.CSID}
Device name: ${message.DeviceName}
Document name: ${message.DocumentName}
Message ID: ${message.Id}
Original scheduled time: ${new Date(message.OriginalScheduledTime)}
Pages: ${message.Pages}
Recipient fax number: ${message.Recipient.FaxNumber}
Retries: ${message.Retries}
Sender name: ${message.Sender.Name}
Size: ${message.Size}
Subject: ${message.Subject}
Submission ID: ${message.SubmissionId}
Submission time: ${new Date(message.SubmissionTime)}
Transmission end time: ${new Date(message.TransmissionEnd)}
Transmission start time: ${new Date(message.TransmissionStart)}
TSID: ${message.TSID}`);

        if (VB.InputBox('Delete this fax from the archive (Y/N)?') === 'Y') {
            message.Delete();
        }
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693472(v=vs.85).aspx
(() => {
    const server = getServer();
    const outgoingArchive = server.Folders.OutgoingArchive;
    WScript.Echo(`
Age limit: ${outgoingArchive.AgeLimit}
Archive folder: ${outgoingArchive.ArchiveFolder}
High quota mark: ${outgoingArchive.HighQuotaWaterMark}
Low quota water mark: ${outgoingArchive.LowQuotaWaterMark}
Size high: ${outgoingArchive.SizeHigh}
Size low: ${outgoingArchive.SizeLow}
Size quota warning: ${outgoingArchive.SizeQuotaWarning}
Is archive used? ${outgoingArchive.UseArchive}`.trim()
    );

    const newLimit = VB.InputBox('Set new age limit (enter empty value or Cancel to leave unchanged');
    if (newLimit) {
        outgoingArchive.AgeLimit = parseInt(newLimit, 10);
    }

    const messageID = VB.InputBox('Retrieve a message by ID (enter an empty value or press Cancel to exit');
    if (messageID) {
        const fileName = VB.InputBox('Enter path to save');
        outgoingArchive.GetMessage(messageID).CopyTiff(fileName);
        new ActiveXObject('WScript.Shell').Run(fileName);
    }
})();

(() => {
    const server = getServer();
    const messageIterator = server.Folders.OutgoingArchive.GetMessages();
    if (messageIterator.AtEOF) { return; }
    messageIterator.MoveFirst();
    while (!messageIterator.AtEOF) {
        const message = messageIterator.Message;
        WScript.Echo(`
Document name: ${message.DocumentName}
ID: ${message.Id}
Transmission end: ${new Date(message.TransmissionEnd)}
Transmission start: ${new Date(message.TransmissionStart)}
`.trim());
        messageIterator.MoveNext();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms692976(v=vs.85).aspx
(() => {
    const server = getServer();
    const prefetchCount = parseInt(VB.InputBox('How many messages should be prefetched?'), 10);
    server.Folders.IncomingArchive.Refresh();
    const messageIterator = server.Folders.IncomingArchive.GetMessages(prefetchCount);
    messageIterator.MoveFirst();
    for (let i = 1; i <= prefetchCount; i++) {
        if (i > 1 && VB.InputBox('View next message? (Y/N)') !== 'Y') { break; }
        const message = messageIterator.Message as FAXCOMEXLib.FaxIncomingMessage;
        if (messageIterator.AtEOF) {
            WScript.Echo(`End of file reached`);
            return;
        }
        const fileName = VB.InputBox('Enter path to save TIFF file');
        message.CopyTiff(fileName);
        new ActiveXObject('WScript.Shell').Run(fileName);

        messageIterator.MoveNext();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693406(v=vs.85).aspx
(() => {
    const server = getServer();
    const incomingArchive = server.Folders.IncomingArchive;
    incomingArchive.Refresh();
    WScript.Echo(`
High quota water mark: ${incomingArchive.HighQuotaWaterMark}
Low quota water mark: ${incomingArchive.LowQuotaWaterMark}
Archive folder: ${incomingArchive.ArchiveFolder}
Age limit: ${incomingArchive.AgeLimit}
Size high: ${incomingArchive.SizeHigh}
Size low: ${incomingArchive.SizeLow}
Is size quota warning on? ${incomingArchive.SizeQuotaWarning}
Is archive used? ${incomingArchive.UseArchive}
`.trim());

    incomingArchive.AgeLimit = 4;
    incomingArchive.Save();

    const messageID = VB.InputBox('Message ID to retrieve information? (Leave empty, or Cancel, to exit)');
    if (messageID === '') { return; }
    const message = incomingArchive.GetMessage(messageID);
    WScript.Echo(`
Caller ID: ${message.CallerId}
CSID: ${message.CSID}
Device name: ${message.DeviceName}
Message ID: ${message.Id}
Number of pages: ${message.Pages}
Retries: ${message.Retries}
Routing information: ${message.RoutingInformation}
Size: ${message.Size}
Transmission start: ${new Date(message.TransmissionStart)}
Transmission end: ${new Date(message.TransmissionEnd)}
TSID: ${message.TSID}
`.trim());

    if (VB.InputBox('Delete this message from the archive (Y/N)?') === 'Y') {
        message.Delete();
    }
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693401(v=vs.85).aspx
(() => {
    const server = getServer();
    const loggingOptions = server.LoggingOptions;
    const activityLogging = loggingOptions.ActivityLogging;
    const eventLogging = loggingOptions.EventLogging;

    activityLogging.Refresh();
    activityLogging.LogIncoming = true;
    activityLogging.LogOutgoing = true;
    activityLogging.Save();

    eventLogging.Refresh();
    eventLogging.GeneralEventsLevel = FAXCOMEXLib.FAX_LOG_LEVEL_ENUM.fllMED;
    eventLogging.InboundEventsLevel = FAXCOMEXLib.FAX_LOG_LEVEL_ENUM.fllMAX;
    eventLogging.InitEventsLevel = FAXCOMEXLib.FAX_LOG_LEVEL_ENUM.fllMAX;
    eventLogging.OutboundEventsLevel = FAXCOMEXLib.FAX_LOG_LEVEL_ENUM.fllNONE;
    eventLogging.Save();
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693387(v=vs.85).aspx
(() => {
    const server = getServer();
    const receiptOptions = server.ReceiptOptions;
    receiptOptions.Refresh();
    WScript.Echo(`
Allowed receipt types: ${receiptOptions.AllowedReceipts}
Authentication types: ${receiptOptions.AuthenticationType}
SMTP port: ${receiptOptions.SMTPPort}
SMTP sender: ${receiptOptions.SMTPSender}
SMTP server: ${receiptOptions.SMTPSender}
Use for inbound routing? ${receiptOptions.UseForInboundRouting}
`.trim());

    receiptOptions.AllowedReceipts = FAXCOMEXLib.FAX_RECEIPT_TYPE_ENUM.frtMAIL;
    receiptOptions.AuthenticationType = FAXCOMEXLib.FAX_SMTP_AUTHENTICATION_TYPE_ENUM.fsatBASIC;
    receiptOptions.SMTPPort = 25;
    receiptOptions.SMTPSender = 'someone@example.com';
    receiptOptions.SMTPServer = 'My SMTP Server';
    receiptOptions.UseForInboundRouting = true;
    receiptOptions.Save();
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693462(v=vs.85).aspx
(() => {
    const server = getServer();
    collectionToArray(server.GetDeviceProviders()).forEach((provider, index) => {
        WScript.Echo(`
Debug: ${provider.Debug}
Name: ${provider.FriendlyName}
Image name: ${provider.ImageName}
Init error code: ${provider.InitErrorCode}
Build and version: ${provider.MajorBuild}.${provider.MajorVersion}.${provider.MinorBuild}.${provider.MinorVersion}
Status: ${provider.Status}
TAPI provider: ${provider.TapiProviderName}
Unique name: ${provider.UniqueName}
`.trim());

        new VBArray(provider.DeviceIds).toArray().forEach(id => WScript.Echo(id));
    });
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693437(v=vs.85).aspx -- for a fax device
(() => {
    const server = getServer();
    const device = server.GetDevices().Item(1);
    const deviceProperty = toSafeArray(1, 2, 3);
    const propertyName = '{B1F944B9-9A16-45d1-933A-4060A4871AB0}';
    device.SetExtensionProperty(propertyName, deviceProperty);
    new VBArray(device.GetExtensionProperty(propertyName)).toArray().forEach(x => WScript.Echo(x));
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693437(v=vs.85).aspx -- for a fax device
(() => {
    const server = getServer();
    const serverProperty = toSafeArray(4, 2, 3);
    const propertyName = `{AC7D0DEE-B6E5-4a44-AF45-835C58CB44D2}`;
    server.SetExtensionProperty(propertyName, serverProperty);
    new VBArray(server.GetExtensionProperty(propertyName)).toArray().forEach(x => WScript.Echo(x));
})();

// https://msdn.microsoft.com/en-us/library/windows/desktop/ms693013(v=vs.85).aspx
(() => {
    const server = getServer();

    ActiveXObject.on(server, 'OnOutgoingJobAdded', ['pFaxServer', 'bstrJobId'], prm => WScript.Echo('New job added to queue'));

    ActiveXObject.on(server, 'OnOutgoingJobChanged', ['pFaxServer', 'bstrJobId', 'pJobStatus'], prm => {
        const status = prm.pJobStatus;
        WScript.Echo(`
Available operations: ${status.AvailableOperations}
Caller ID: ${status.CallerId}
CSID: ${status.CSID}
Current page: ${status.CurrentPage}
Device ID: ${status.DeviceId}
Extended status: ${status.ExtendedStatus}
Extended status code: ${status.ExtendedStatusCode}
Job type: ${status.JobType}
Pages: ${status.Pages}
Retries: ${status.Retries}
Routing information: ${status.RoutingInformation}
Scheduled time: ${new Date(status.ScheduledTime)}
Size: ${status.Size}
Status: ${status.Status}
Transmission start: ${new Date(status.TransmissionStart)}
TSID: ${status.TSID}
`.trim());

        try {
            WScript.Echo(`Transmission end: ${new Date(status.TransmissionEnd)}`);
        } catch {}
    });

    ActiveXObject.on(server, 'OnServerShutDown', ['pFaxServer'], prm => WScript.Echo('The local fax server has been shut down'));

    server.ListenToServerEvents(
        FAXCOMEXLib.FAX_SERVER_EVENTS_TYPE_ENUM.fsetFXSSVC_ENDED +
        FAXCOMEXLib.FAX_SERVER_EVENTS_TYPE_ENUM.fsetOUT_QUEUE
    );
})();
