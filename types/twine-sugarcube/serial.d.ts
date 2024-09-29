export interface SerialAPI {
    /**
     * Returns the given code string, and optional data, wrapped within the deserialization reviver. Intended to allow
     * authors to easily create the reviver required to revive their custom object types (classes). The reviver should
     * be returned from an object instance's .toJSON() method, so that the instance may be properly revived upon deserialization.
     * @param code The revival code string.
     * @param data The data that should be made available to the evaluated revival code during deserialization via the
     * special $ReviveData$ variable.
     * WARNING: Attempting to pass the value of an object instance's this directly as the reviveData parameter will
     * trigger out of control recursion in the serializer, so a clone of the instance's own data must be passed instead.
     * @since SugarCube 2.37.0
     * @example
     * Serial.createReviver(<valid JavaScript code string>);             → Without data chunk
     * Serial.createReviver(<valid JavaScript code string>, myOwnData);  → With data chunk
     *
     * // E.g., Assume that you're attempting to revive an instance of a custom class named
     * // `Character`, which is assigned to a story variable named `$pc`. The call
     * // to `Serial.createReviver()` might look something like the following.
     *
     * var ownData = {};
     * Object.keys(this).forEach(function (pn) { ownData[pn] = clone(this[pn]); }, this);
     * return Serial.createReviver('new Character($ReviveData$)', ownData);
     */
    createReviver(code: string, data?: unknown): any[];
}

export {};
