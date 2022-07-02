import addressparser = require('addressparser');

const addresses = addressparser('andris <andris@tr.ee>');
console.log(addresses); // [{name: "andris", address:"andris@tr.ee"}]

const composers = addressparser('Composers:"Bach, Sebastian" <sebu@example.com>, mozart@example.com (Mozzie);');
console.log(composers); // [{name: "Composers",group: [{address: "sebu@example.com",name: "Bach, Sebastian"},{address: "mozart@example.com",name: "Mozzie"}]}]
