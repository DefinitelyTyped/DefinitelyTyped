/// <reference path="pgwmodal.d.ts" />

var $j: JQueryStatic;
var $z: ZeptoStatic;

function test_open(): void {
    var r: boolean = $j.pgwModal({
        content: 'Modal Example 1'
    });

    $j.pgwModal({
        target: '#modalContent',
        title: 'Modal title 2',
        maxWidth: 800
    });

    $j.pgwModal({
        url: 'modal-test.php',
        loadingContent: '<span style="text-align:center">Loading in progress</span>',
        closable: false,
        titleBar: false
    });
}

function test_action(): void {
    var r1: boolean = $j.pgwModal('close');
    var r2: boolean = $j.pgwModal('reposition');
    var r3: boolean = $j.pgwModal('isOpen');
    var r4: any = $j.pgwModal('getData');
}

function test_equal(): void {
    $j.pgwModal == $z.pgwModal;
}
