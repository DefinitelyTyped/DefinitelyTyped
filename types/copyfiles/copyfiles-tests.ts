import copyfiles = require('copyfiles');

copyfiles(['file'], () => {});
copyfiles(['file'], error => {});
copyfiles(['file'], {up: true}, error => {});
copyfiles(['file'], {up: 1}, error => {});
copyfiles(['file'], {all: true}, error => {});
copyfiles(['file'], 10, error => {});
