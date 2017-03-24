function testDropdown() {
    UIkit.dropdown("#parent");
    UIkit.dropdown($("#parent"));

    const options: UIkit.DropdownOptions = {
        pos: 'bottom-center',
        mode: 'click',
        remaintime: 150,
        justify: false,
        boundary: window,
        delay: 0,
        dropdownSelector: '.uk-dropdown,.uk-dropdown-blank',
        hoverDelayIdle: 200,
        preventflip: 'x'
    };
    var dropdown = UIkit.dropdown("$parent", options);

    dropdown.show();
    dropdown.hide();
    dropdown.hide(true);
    dropdown.hide(false);
}

function testModal() {
    UIkit.modal.alert("Attention!");

    const options: UIkit.ModalOptions = {
        keyboard: true,
        bgclose: true,
        minScrollHeight: 150,
        center: false,
        modal: true
    };
    UIkit.modal.confirm("Are you sure?", () => {});
    UIkit.modal.confirm("Are you sure?", () => {}, {});
    UIkit.modal.confirm("Are you sure?", () => {}, () => {});
    UIkit.modal.confirm("Are you sure?", () => {}, () => {}, {});
    UIkit.modal.confirm("Are you sure?", () => {}, {});

    UIkit.modal.prompt("Name:", 'value', (newvalue: string) => {
        // will be executed on submit.
    });
    var modal = UIkit.modal.blockUI("Any content...");
    modal.hide();
    modal.show();
    var modal = UIkit.modal(".modalSelector");

    if (modal.isActive()) {
        modal.hide();
    } else {
        modal.show();
    }
}

function testOffCanvas() {
    UIkit.offcanvas.show("#id");
    UIkit.offcanvas.hide();
    UIkit.offcanvas.hide(true);
}

function testLightBox() {
    var element = "#group";
    var lightbox = UIkit.lightbox(element, {/* options */});
    var lightbox2 = UIkit.lightbox.create([
        {source: 'http://url/to/video.mp4', type: 'video'},
        {source: 'http://url/to/image.jpg', type: 'image'}
    ]);
    lightbox2.show();
    var lightbox3 = UIkit.lightbox(element);
}

function testAutoComplete() {
    UIkit.autocomplete("#group", {});
    UIkit.autocomplete("#group");
}

function testDatepicker() {
    var datepicker = UIkit.datepicker("#element", {});
}

function testHtmlEditor() {
    var htmleditor = UIkit.htmleditor("textarea", {/* options */});
}

function testSlider() {
    var slider = UIkit.slider("element", {});
}
function testSlideSet() {
    var slideset = UIkit.slideset("element", {});
}
function testSlideShow() {
    var slideshow = UIkit.slideshow("element", {});
}

function testParallax() {
    var parallax = UIkit.parallax("element", {});
}
function testAccordion() {
    var accordion = UIkit.accordion("element", {});
}


function testNotify() {
    UIkit.notify({
        message: 'Bazinga!',
        status: 'info',
        timeout: 5000,
        pos: 'top-center'
    });


// Shortcuts
    UIkit.notify('My message');
    UIkit.notify('My message', status);
    UIkit.notify('My message', {/* options */});

    UIkit.notify("Message...", {timeout: 0});
    UIkit.notify("...", {pos: 'top-center'});
    UIkit.notify("...", {status: 'info'});
}


function testSearch() {
    var search = UIkit.search("element", {});
}

function testNestable() {
    var nestable = UIkit.nestable('element', {});
}
function testSortable() {
    var sortable = UIkit.sortable('element', {});
}
function testStick() {
    var sticky = UIkit.sticky('element', {});
}
function testTimePicker() {
    var timepicker = UIkit.timepicker('element', {});
}

function testTooltip() {
    var tooltip = UIkit.tooltip('element', {});
}

function testUpload() {
    $(() => {

        var progressbar = $("#progressbar"),
            bar         = progressbar.find('.uk-progress-bar'),
            settings    = {

                action: '/', // upload url

                allow : '*.(jpg|jpeg|gif|png)', // allow only images

                loadstart() {
                    bar.css("width", "0%").text("0%");
                    progressbar.removeClass("uk-hidden");
                },

                progress(percent: number) {
                    percent = Math.ceil(percent);
                    bar.css("width", percent + "%").text(percent + "%");
                },

                allcomplete(response: any) {

                    bar.css("width", "100%").text("100%");

                    setTimeout(() => {
                        progressbar.addClass("uk-hidden");
                    }, 250);

                    alert("Upload Completed");
                }
            };

        var select = UIkit.uploadSelect($("#upload-select"), settings),
            drop   = UIkit.uploadDrop($("#upload-drop"), settings);
    });

    // Test with object literal
    var select2 = UIkit.uploadSelect($("#upload-select"), {

        action: '/', // upload url

        allow: '*.(jpg|jpeg|gif|png)', // allow only images

        loadstart: () => {

        },

        progress: (percent: number) => {

        },

        allcomplete: (response: any) => {

        }
    });
    var drop2 = UIkit.uploadDrop($("#upload-drop"), {

        action: '/', // upload url

        allow: '*.(jpg|jpeg|gif|png)', // allow only images

        loadstart: () => {

        },

        progress: (percent: number) => {

        },

        allcomplete: (response: any) => {
        }
    });

}
