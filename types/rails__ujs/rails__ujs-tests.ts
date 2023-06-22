import * as Rails from '@rails/ujs';

if (!window._rails_loaded) {
    Rails.start();
}

fetch('https://example.com', {
    method: 'POST',
    headers: {
        'X-CSRF-Token': Rails.csrfToken()!,
    },
});

const formData = new FormData();
formData.append('_method', 'delete');
formData.append(Rails.csrfParam()!, Rails.csrfToken()!);

// @ts-expect-error
formData.append(Rails.csrfParam(), Rails.csrfToken());

Rails.delegate(document, '#batch_checkbox_all', 'change', ({ target }) => {
    Array.from(document.querySelectorAll<HTMLInputElement>('.batch-checkbox input[type="checkbox"]'), content => {
        content.checked = (target as HTMLInputElement).checked;
    });
});

Rails.delegate(window, '#batch_checkbox_all', 'change', console.log);

Rails.loadCSPNonce();
Rails.cspNonce();
Rails.CSRFProtection(new XMLHttpRequest());
Rails.refreshCSRFTokens();

const element = document.querySelector<HTMLDivElement>('.foo');
if (element) {
    // prettier-ignore
    Rails.delegate(element, '#batch_checkbox_all', 'click', function(e) {
        // $ExpectType HTMLElement
        const element = this;

        // $ExpectType MouseEvent
        const event = e;

        console.log(event, element);
    });

    Rails.delegate(element, '#batch_checkbox_all', 'custom-event', (e: Event) => {
        console.log(e);
    });

    Rails.fire(element, 'custom-event', { value: 1 });

    Rails.getData(element, 'test');
    Rails.setData(element, 'test', { a: 1 });

    Rails.matches(element, '.hoge');

    Rails.matches(element, Rails.linkClickSelector);
    Rails.matches(element, Rails.buttonClickSelector);

    Rails.confirm('are you sure ?');
    Rails.confirm('are you sure ?', element);

    Rails.enableElement(element);
    Rails.disableElement(element);

    Rails.href(element);

    element.addEventListener('click', e => {
        Rails.preventInsignificantClick(e);
        Rails.handleDisabledElement(e);
        Rails.enableElement(e);
        Rails.disableElement(e);
        Rails.stopEverything(e);
        Rails.handleConfirm(e);
        Rails.handleMethod(e);
        Rails.handleRemote(e);
        Rails.formSubmitButtonClick(e);
        Rails.preventInsignificantClick(e);
    });
}

const $element = Rails.$('.foo') as HTMLDivElement[];

if (element) {
    const url = 'https://example.com';
    Rails.ajax({
        type: 'GET',
        url,
        data: new FormData(),
        dataType: 'json',
        beforeSend(xhr, options) {
            if (Rails.fire(element, 'ajax:beforeSend', [xhr, options])) {
                return Rails.fire(element, 'ajax:send', [xhr]);
            } else {
                Rails.fire(element, 'ajax:stopped');
                return false;
            }
        },
        success(...args) {
            return Rails.fire(element, 'ajax:success', args);
        },
        error(...args) {
            return Rails.fire(element, 'ajax:error', args);
        },
        complete(...args) {
            return Rails.fire(element, 'ajax:complete', args);
        },
        crossDomain: Rails.isCrossDomain(url),
        withCredentials: false,
    });
}
