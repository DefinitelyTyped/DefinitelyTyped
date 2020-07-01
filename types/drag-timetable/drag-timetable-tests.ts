import DragTimetable = require("drag-timetable");

const instance = DragTimetable.create(document.getElementById("timetable_container"), { hourStart: 0, hourEnd: 24 });

instance.addTask({id: 1, start: 9, end: 11, text: 'Task 1 - Get this stuff done!'}, true);
instance.addTask({id: 2, start: 12, end: 13, text: 'Task 2 - Get that stuff done!'}, true);

instance.setMoveCallback((task: any) => {
    console.log('task moved: ' + task.id);
});

instance.setClickCallback((task: any) => {
    console.log('task clicked: ' + task.id);
});
