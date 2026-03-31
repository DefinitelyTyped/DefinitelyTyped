function test(testContext: webvis.ContextAPI): void {
    const setEntryPromise: Promise<void> = testContext.setMemberProfileEntry("testKey", "testValue");

    const deleteEntryPromise: Promise<void> = testContext.deleteMemberProfileEntry("testKey");

    const members: number[] = testContext.getMembers();

    const memberActionsPromise: Promise<webvis.MemberAction[]> = testContext.requestMemberActions(0);

    const memberPropertiesPromise: Promise<webvis.MemberProperties | undefined> = testContext.requestMemberProperties(
        0,
    );

    const memberName: string | undefined = testContext.getMemberName();

    const useActionPromise: Promise<void> = testContext.useMemberAction(0, webvis.MemberAction.DEMOTE, {
        role: webvis.MemberRole.VIEWER,
    });

    testContext.setMemberName("Test Name");

    testContext.registerListener([webvis.EventType.MEMBER_ACTION_ADDED], (event: webvis.MemberActionAddedEvent) => {
        console.log("MemberAction added", event.memberId, event.memberAction);
    });

    testContext.registerListener([webvis.EventType.MEMBER_ACTION_REMOVED], (event: webvis.MemberActionRemovedEvent) => {
        console.log("MemberAction removed", event.memberId, event.memberAction);
    });

    testContext.registerListener([webvis.EventType.MEMBER_ACTION_USED], (event: webvis.MemberActionUsedEvent) => {
        console.log("MemberAction used", event.sourceMemberId, event.targetMemberId, event.memberAction, event.details);
    });

    testContext.registerListener([webvis.EventType.MEMBER_CREATED], (event: webvis.MemberCreatedEvent) => {
        console.log("Member created", event.memberId, event.memberProperties);
    });

    testContext.registerListener([webvis.EventType.MEMBER_CHANGED], (event: webvis.MemberChangedEvent) => {
        console.log("Member changed", event.memberId, event.memberProperties);
    });

    testContext.registerListener([webvis.EventType.MEMBER_REMOVED], (event: webvis.MemberRemovedEvent) => {
        console.log("Member removed", event.memberId);
    });
}
