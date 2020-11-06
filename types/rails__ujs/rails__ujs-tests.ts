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

const element = document.querySelector('.foo');
if (element) {
    Rails.delegate(element, '#batch_checkbox_all', 'change', console.log);
    Rails.fire(element, 'custom-event', { value: 1 });
}
