$('div').nextId('my-prefix');

$.fn.nextId.defaults = {
  prefix: 'id',
  separator: '-'
};
