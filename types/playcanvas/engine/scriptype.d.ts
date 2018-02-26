interface ScriptType {
    name: string;

    /**
     * Interface to define public script attributes available in the editor. 
     * @type {{ [key: string]: pc.AttributesArgs }}
     * @memberof Script
     */
    attributes?: { [key: string]: pc.AttributesArgs };

    /**
     * initialize is called if defined when script is about to run for the first time.
     * @memberof ScriptType
     */
    initialize?(): void;
    
    /**
     * postInitialize will run after all initialize methods are executed in the  
     * same tick or enabling chain of actions.
     * @memberof ScriptType
     */
    postInitialize?(): void;

    /**
     * update is called if defined for enabled (running state) scripts on each tick.
     * @param {number} dt 
     * @memberof ScriptType
     */
    update?(dt: number): void;

    /**
     * postUpdate is called if defined for enabled (running state) scripts on each tick,  
     * after update.
     * @memberof ScriptType
     */
    postUpdate?(): void;

    /**
     * This method will be called when a ScriptType that already exists in the registry   
     * gets redefined. If the new ScriptType has a `swap` method in its prototype, 
     * then it will be executed to perform hot-reload at runtime. 
     * @memberof ScriptType
     */
    swap?(): void;
}