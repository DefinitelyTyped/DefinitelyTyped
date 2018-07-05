
var array = [1, 2, 3, 4];
from(array).each(function (value, key) {
    console.log('Value ' + value + ' at index ' + key);
});