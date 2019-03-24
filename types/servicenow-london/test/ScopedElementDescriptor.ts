(function() {
    var gr = new GlideRecord('incident');
    gr.query('priority', '1');
    var field = gr.getElement('priority');
    var ed = field.getED();

    var s = ed.getAttachmentEncryptionType();
    s = ed.getEncryptionType();
    s = ed.getInternalType();
    s = ed.getLabel();
    var n = ed.getLength();
    s = ed.getName();
    s = ed.getPlural();
    var b = ed.hasAttachmentsEncrypted();
    b = ed.isAutoOrSysID();
    b = ed.isChoiceTable();
    b = ed.isEdgeEncrypted();
    b = ed.isVirtual();
})();
