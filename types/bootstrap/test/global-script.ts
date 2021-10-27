// test global script usage

const modal = new bootstrap.Modal('#myModal');
const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]');

// ctor
new bootstrap.Alert('#alert');
new bootstrap.Alert(document.querySelector('#alert')!);
new bootstrap.Modal('#myModal', {});
new bootstrap.Modal(document.querySelector('#myModal')!, {});
