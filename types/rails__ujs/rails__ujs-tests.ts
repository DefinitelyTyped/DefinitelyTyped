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

// $ExpectError
formData.append(Rails.csrfParam(), Rails.csrfToken());

Rails.delegate(document, '#batch_checkbox_all', 'change', ({ target }) => {
    Array.from(document.querySelectorAll<HTMLInputElement>('.batch-checkbox input[type="checkbox"]'), content => {
        content.checked = (target as HTMLInputElement).checked;
    });
});

Rails.delegate(window, '#batch_checkbox_all', 'change', console.log);

const element = document.querySelector<HTMLDivElement>('.foo');
if (element) {
    Rails.delegate(element, '#batch_checkbox_all', 'change', console.log);
    Rails.fire(element, 'custom-event', { value: 1 });

    Rails.getData(element, 'test');
    Rails.setData(element, 'test', { a: 1 });
}

const $element = Rails.$('.foo') as HTMLDivElement[];

if (element) {
    const url = 'https://example.com';
    Rails.ajax({
        type: 'GET',
        url: url,
        data: new FormData(),
        dataType: 'json',
        beforeSend: function (xhr, options) {
            if (Rails.fire(element, 'ajax:beforeSend', [xhr, options])) {
                return Rails.fire(element, 'ajax:send', [xhr]);
            } else {
                Rails.fire(element, 'ajax:stopped');
                return false;
            }
        },
        success: function (...args) {
            return Rails.fire(element, 'ajax:success', args);
        },
        error: function (...args) {
            return Rails.fire(element, 'ajax:success', args);
        },
        complete: function (...args) {
            return Rails.fire(element, 'ajax:success', args);
        },
        crossDomain: Rails.isCrossDomain(url),
        withCredentials: false,
    });
}
