function test(testContext: webvis.ContextAPI): void {
    const attachmentId: number = testContext.createAttachment(webvis.AttachmentType.JSON);

    testContext.setAttachmentData(attachmentId, { test: "test" });

    testContext.fetchAttachmentData(attachmentId).then((data: any) => {
        console.log(data);
    });

    testContext.removeAttachment(attachmentId);

    testContext.registerListener([webvis.EventType.ATTACHMENT_CREATED], (event: webvis.AttachmentCreatedEvent) => {
        console.log("Attachment created", event.attachmentID, event.dataType);
    });

    testContext.registerListener(
        [webvis.EventType.ATTACHMENT_DATA_CHANGED],
        (event: webvis.AttachmentDataChangedEvent) => {
            console.log("Attachment changed", event.attachmentID, event.data);
        },
    );

    testContext.registerListener([webvis.EventType.ATTACHMENT_REMOVED], (event: webvis.AttachmentRemovedEvent) => {
        console.log("Attachment removed", event.attachmentID);
    });
}
