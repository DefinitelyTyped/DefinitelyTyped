import Gantt from 'frappe-gantt';

const tasks = [
    {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2016-12-28',
        end: '2016-12-31',
        progress: 20,
        dependencies: 'Task 2, Task 3'
    }
];
const gantt1 = new Gantt('#gantt', tasks);

gantt1.change_view_mode('Week');
gantt1.refresh(tasks);

new Gantt('#gantt', tasks, {
    on_click: (task) => { },
    on_date_change: (task, start, end) => { },
    on_progress_change: (task, progress) => { },
    on_view_change: (mode) => { }
});

new Gantt('#gantt', tasks, {
    custom_popup_html: (task) => {
        const end_date = task._end.format('MMM D');
        return `
        <div class="details-container">
          <h5>${task.name}</h5>
          <p>Expected to finish by ${end_date}</p>
          <p>${task.progress}% completed!</p>
        </div>
      `;
    }
});
