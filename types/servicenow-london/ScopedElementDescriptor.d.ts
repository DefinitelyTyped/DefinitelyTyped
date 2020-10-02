/**
 * The scoped GlideElementDescriptor API provides information about individual fields.
 *
 * There is no constructor for this class. Use the GlideElement `getED()` method to obtain a
 * GlideElementDescriptor object.
 *
 * Actual type com.glide.db.ElementDescriptor (JavaObject).
 */
interface ScopedElementDescriptor {
    /**
     * Returns the encryption type used for attachments on the element's table.
     *
     * @returns The encryption type used on attachments. Returns null if attachments on the element's
     * table are not being encrypted.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.getAttachmentEncryptionType();
     * gs.info(isEdge);
     * // null
     */
    getAttachmentEncryptionType(): string;

    /**
     * Returns the element's encryption type.
     *
     * @returns The element's encryption type. Returns null if the element is not
     * encrypted.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * sEdge = ed.getEncryptionType();
     * gs.info(isEdge);
     * // null
     */
    getEncryptionType(): string;

    /**
     * Returns the element's internal data type.
     *
     * @returns The element's internal data type.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.getInternalType();
     * gs.info(isEdge);
     */
    getInternalType(): string;

    /**
     * Returns the element's label.
     *
     * @returns The element's label.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.getLabel();
     * gs.info(isEdge);
     * // Priority
     */
    getLabel(): string;

    /**
     * Returns the element's length.
     *
     * @returns The element's size.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.getLength();
     * gs.info(isEdge);
     * // 40
     */
    getLength(): number;

    /**
     * Returns the element's name.
     *
     * @returns The element's name.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.getName();
     * gs.info(isEdge);
     * // priority
     */
    getName(): string;

    /**
     * Returns the element's plural label.
     *
     * @returns The element's plural label.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.query();
     * var ed = gr.getED();
     * gs.info(ed.getPlural());
     * // Incidents
     */
    getPlural(): string;

    /**
     * Returns true if an encrypted attachment has been added to the table.
     *
     * @returns Returns true if an encrypted attachment has been added to the table.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.hasAttachmentsEncrypted();
     * gs.info(isEdge);
     * // false
     */
    hasAttachmentsEncrypted(): boolean;

    /**
     * Returns true if the element is an automatically generated or system field.
     *
     * @returns True if the element is automatically generated or a system field.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * isEdge = ed.isAutoOrSysID();
     * gs.info(isEdge);
     * // false
     */
    isAutoOrSysID(): boolean;

    /**
     * Returns true if the element is defined as a dropdown choice in its dictionary
     * definition.
     *
     * @returns Returns true if the element is defined as a dropdown choice. Returns true even
     * if there are no entries defined in the choice table. The last choice type,
     * suggestion, does not return true.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isChoiceTable = ed.isChoiceTable();
     * gs.info(isChoiceTable);
     * // true
     */
    isChoiceTable(): boolean;

    /**
     * Returns true if an element is encrypted.
     *
     * @returns Returns true if the element is encrypted, false otherwise.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isEdge = ed.isEdgeEncrypted();
     * gs.info(isEdge)
     * // false
     */
    isEdgeEncrypted(): boolean;

    /**
     * Returns true if the element is a virtual element.
     *
     * A virtual element is a calculated field as set by the dictionary definition of the field.
     * Virtual fields cannot be encrypted.
     *
     * @returns Returns true if the element is a virtual element.
     * @example
     *
     * var grInc = new GlideRecord('incident');
     * grInc.query('priority', '1');
     *
     * var field = grInc.getElement('priority');
     * var ed = field.getED();
     *
     * var isVirtual = ed.isVirtual();
     * gs.info(isVirtual);
     * // false
     */
    isVirtual(): boolean;
}
