import copyfiles = require('copyfiles');

copyfiles(['file'], () => {});
copyfiles(['file'], error => {});
copyfiles(['file'], {all: true}, error => {});
copyfiles(['file'], 10, error => {});
