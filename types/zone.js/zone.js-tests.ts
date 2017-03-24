

declare var zone: Zone;

zone.fork().fork({
    beforeTask: function () {
        console.log('from beforeTask');
    }
}).run(function () {
    console.log('from main');
});
