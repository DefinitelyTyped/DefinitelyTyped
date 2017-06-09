$('#myForm').validator();
$('#myForm').validator('update');
$('#myForm').validator('validate');
$('#myForm').validator('destroy');
$('#myForm').validator({
    delay: 500,
    html: false,
    disable: false,
    focus: true,
    feedback: {},
    custom: {}
});
