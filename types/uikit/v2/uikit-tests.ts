function testDropdown() {
    UIkit.dropdown('#parent');
    UIkit.dropdown($('#parent'));

    const options: UIkit.DropdownOptions = {
        pos: 'bottom-center',
        mode: 'click',
        remaintime: 150,
        justify: false,
        boundary: window,
        delay: 0,
        dropdownSelector: '.uk-dropdown,.uk-dropdown-blank',
        hoverDelayIdle: 200,
        preventflip: 'x',
    };
    const dropdown = UIkit.dropdown('$parent', options);

    dropdown.show();
    dropdown.hide();
    dropdown.hide(true);
    dropdown.hide(false);
}

function testModal() {
    UIkit.modal.alert('Attention!');

    const options: UIkit.ModalOptions = {
        keyboard: true,
        bgclose: true,
        minScrollHeight: 150,
        center: false,
        modal: true,
    };
    UIkit.modal.confirm('Are you sure?', () => {});
    UIkit.modal.confirm('Are you sure?', () => {}, {});
    UIkit.modal.confirm(
        'Are you sure?',
        () => {},
        () => {},
    );
    UIkit.modal.confirm(
        'Are you sure?',
        () => {},
        () => {},
        {},
    );
    UIkit.modal.confirm('Are you sure?', () => {}, {});

    UIkit.modal.prompt('Name:', 'value', (newvalue: string) => {
        // will be executed on submit.
    });
    let modal = UIkit.modal.blockUI('Any content...');
    modal.hide();
    modal.show();
    modal = UIkit.modal('.modalSelector');

    if (modal.isActive()) {
        modal.hide();
    } else {
        modal.show();
    }
}

function testOffCanvas() {
    UIkit.offcanvas.show('#id');
    UIkit.offcanvas.hide();
    UIkit.offcanvas.hide(true);
}

function testLightBox() {
    const element = '#group';
    const lightbox = UIkit.lightbox(element, {
        /* options */
    });
    const lightbox2 = UIkit.lightbox.create([
        { source: 'http://url/to/video.mp4', type: 'video' },
        { source: 'http://url/to/image.jpg', type: 'image' },
    ]);
    lightbox2.show();
    const lightbox3 = UIkit.lightbox(element);
}

function testAutoComplete() {
    UIkit.autocomplete('#group', {});
    UIkit.autocomplete('#group');
}

function testDatepicker() {
    const datepicker = UIkit.datepicker('#element', {});
}

function testHtmlEditor() {
    const htmleditor = UIkit.htmleditor('textarea', {
        /* options */
    });
}

function testSlider() {
    const slider = UIkit.slider('element', {});
}
function testSlideSet() {
    const slideset = UIkit.slideset('element', {});
}
function testSlideShow() {
    const slideshow = UIkit.slideshow('element', {});
}

function testParallax() {
    const parallax = UIkit.parallax('element', {});
}
function testAccordion() {
    const accordion = UIkit.accordion('element', {});
}

function testNotify() {
    UIkit.notify({
        message: 'Bazinga!',
        status: 'info',
        timeout: 5000,
        pos: 'top-center',
    });

    // Shortcuts
    UIkit.notify('My message');
    UIkit.notify('My message', status);
    UIkit.notify('My message', {
        /* options */
    });

    UIkit.notify('Message...', { timeout: 0 });
    UIkit.notify('...', { pos: 'top-center' });
    UIkit.notify('...', { status: 'info' });
}

function testSearch() {
    const search = UIkit.search('element', {});
}

function testNestable() {
    const nestable = UIkit.nestable('element', {});
}
function testSortable() {
    const sortable = UIkit.sortable('element', {});
}
function testStick() {
    const sticky = UIkit.sticky('element', {});
}
function testTimePicker() {
    const timepicker = UIkit.timepicker('element', {});
}

function testTooltip() {
    const tooltip = UIkit.tooltip('element', {});
}

function testUpload() {
    $(() => {
        const progressbar = $('#progressbar');
        const bar = progressbar.find('.uk-progress-bar');
        const settings = {
            action: '/', // upload url
            allow: '*.(jpg|jpeg|gif|png)', // allow only images
            loadstart() {
                bar.css('width', '0%').text('0%');
                progressbar.removeClass('uk-hidden');
            },
            progress(percent: number) {
                percent = Math.ceil(percent);
                bar.css('width', percent + '%').text(percent + '%');
            },
            allcomplete(response: any) {
                bar.css('width', '100%').text('100%');

                setTimeout(() => {
                    progressbar.addClass('uk-hidden');
                }, 250);

                alert('Upload Completed');
            },
        };

        const select = UIkit.uploadSelect($('#upload-select'), settings);
        const drop = UIkit.uploadDrop($('#upload-drop'), settings);
    });

    // Test with object literal
    const select2 = UIkit.uploadSelect($('#upload-select'), {
        action: '/', // upload url
        allow: '*.(jpg|jpeg|gif|png)', // allow only images
        loadstart: () => {},
        progress: (percent: number) => {},
        allcomplete: (response: any) => {},
    });
    const drop2 = UIkit.uploadDrop($('#upload-drop'), {
        action: '/', // upload url
        allow: '*.(jpg|jpeg|gif|png)', // allow only images
        loadstart: () => {},
        progress: (percent: number) => {},
        allcomplete: (response: any) => {},
    });
}
