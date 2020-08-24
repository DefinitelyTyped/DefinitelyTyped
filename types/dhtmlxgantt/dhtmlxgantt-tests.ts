

//date operations
var start: Date = gantt.date.week_start(new Date());
var next: Date = gantt.date.add(new Date(), 1, "week");
var datePos: Date = gantt.dateFromPos(0);

//hotkeys
gantt.keys.edit_cancel = 13;

//config options
gantt.config.details_on_create = true;
gantt.config.scale_height = 40;
gantt.config.xml_date = "%m-%d-%Y";

//templates
gantt.templates.task_class = function (start: Date, end: Date, task: any) {
    if (task.some)
        return "classA";
    else
        return "classB";
}

//locale
gantt.locale.labels.new_task = "New task";

//API
gantt.init("scheduler_here", start);
gantt.load("/data/events");

const wbs: string = gantt.getWBSCode(gantt.getTask(1));

//events
gantt.attachEvent("onBeforeLightbox", function (id?: string) {
    gantt.showTask(id);
});
//gantt enterprise
var gantt2 = Gantt.getGanttInstance();
gantt2.config.xml_date = "format";
