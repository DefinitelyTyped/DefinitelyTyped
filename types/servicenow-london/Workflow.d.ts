declare namespace global {
    class Workflow {
        constructor();
        broadcastEvent(contextId: string, eventName: string): void;
        cancel(record: ScopedGlideRecord): void;
        cancelContext(context: ScopedGlideRecord): void;
        deleteWorkflow(current: ScopedGlideRecord): void;
        fireEvent(eventRecord: ScopedGlideRecord, eventName: string): void;
        fireEventById(eventRecordId: string, eventName: string): void;
        getContexts(record: ScopedGlideRecord): ScopedGlideRecord;
        getEstimatedDeliveryTime(workflowId: string): string;
        getEstimatedDeliveryTimeFromWFVersion(wfVersion: ScopedGlideRecord): string;

        /**
         * Get the return value set by activity "Return Value"
         *
         * @param context wf_context GlideRecord of the context from which you want the return value
         * @return The value set by activity "Return Value" in the workflow
         */
        getReturnValue(context: ScopedGlideRecord): any;
        getRunningFlows(record: ScopedGlideRecord): ScopedGlideRecord;
        getVersion(workflowId: string): ScopedGlideRecord;
        getVersionFromName(workflowName: string): ScopedGlideElement;
        getWorkflowFromName(workflowName: string): string;
        hasWorkflow(record: ScopedGlideRecord): boolean;
        restartWorkflow(record: ScopedGlideRecord, maintainStateFlag?: boolean): void;

        /**
         * Run all flows attached to a current GlideRecord.
         *
         * Calling this method on a current will not implicitly update the current. If the workflow
         * modifies the input current to this method, it is up to the caller to call
         * current.update() to persist these changes.
         *
         * @param record A GlideRecord that holds the current record
         * @param operation A String that holds the operation such as "update", "insert", or perhaps
         * "timer" or some other user defined value.
         */
        runFlows(record: ScopedGlideRecord, operation: GlideRecordOperation): void;

        /**
         * Start a workflow. Internal logic will determine which workflow version should be run. The
         * workflow version to run is either the one checked out to the current user, or the
         * published workflow version. Calling this method on a current will not implicitly update
         * the current. If the workflow modifies the input current to this method, it is up to the
         * caller to call current.update() to persist these changes.
         *
         * @param workflowId The sys_id of the workflow from the wf_workflow table
         * @param current The GlideRecord of the current record to be operated on by the workflow
         * @param operation The String operation for this workflow - not used
         * @param vars JavaScript object of workflow inputs. The key is the variable name, the value
         * is the variable value.
         * @returns The GlideRecord of the wf_context of the running workflow. Do not modify this
         * returned GlideRecord.
         */
        startFlow(
            workflowId: string,
            current: ScopedGlideRecord | null,
            operation: GlideRecordOperation,
            vars?: object
        ): string;

        /**
         * An intermediate method used to start a workflow from the green "run" button on the
         * Graphical Workflow Editor. This should not be used by SNC script writers.
         *
         * @param context GlideRecord on wf_context of the context to start the Workflow engine on
         * @param operation The String event for processing
         */
        startFlowFromContextInsert(
            context: ScopedGlideRecord,
            operation: GlideRecordOperation
        ): void;

        /**
         * An intermediate method used to start a workflow with preloaded values for SLA Timer
         * activity.  This should not be used by SNC script writers
         *
         * @param workflowId The sys_id of a record in table wf_workflow for the workflow to run
         * @param retroactiveMSecs Integer value of seconds to start the workflow on. This is used
         * by SLA Timer activity
         * @param current The GlideRecord of the current record
         * @param operation The String event for processing - not used.
         * @param vars JavaScript object or Java HashMap of workflow inputs. The key is the variable
         * name, the value is the variable value
         * @param withSchedule Boolean value to indicate if a schedule should be used
         */
        startFlowRetroactive(
            workflowID: string,
            retroactiveMSecs: number,
            current: ScopedGlideRecord,
            operation: GlideRecordOperation,
            vars?: object,
            withSchedule?: any
        ): ScopedGlideRecord;
    }
}
