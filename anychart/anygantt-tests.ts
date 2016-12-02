/// <reference path="index.d.ts"/>
anychart.onDocumentReady(function () {
    // data
    var data = [
        {
            id: '1',
            optimistic: 20,
            pessimistic: 60,
            mostLikely: 35, name: '1',
            fullName: 'Formalize Specs'
        },
        {
            id: '2',
            optimistic: 21,
            pessimistic: 42,
            mostLikely: 33,
            name: '2',
            dependsOn: ['1'],
            fullName: 'Design Hardware'
        },
        {
            id: '3',
            optimistic: 15,
            pessimistic: 25,
            mostLikely: 20,
            name: '3',
            dependsOn: ['1'],
            fullName: 'Layout Manual'
        },
        {
            id: '4',
            optimistic: 30,
            pessimistic: 50,
            mostLikely: 43,
            name: '4',
            dependsOn: ['1'],
            fullName: 'Design Software'
        },
        {
            id: '5',
            optimistic: 10,
            pessimistic: 18,
            mostLikely: 12,
            name: '5',
            dependsOn: ['2'],
            fullName: 'Breadboard Hardware'
        },
        {
            id: '6',
            optimistic: 17,
            pessimistic: 28,
            mostLikely: 23,
            name: '6',
            dependsOn: ['3'],
            fullName: 'Finish Manual'
        },
        {
            id: '7',
            optimistic: 17,
            pessimistic: 35,
            mostLikely: 27,
            name: '7',
            dependsOn: ['5'],
            fullName: 'Test hardware'
        },
        {
            id: '8',
            optimistic: 10,
            pessimistic: 21,
            mostLikely: 16,
            name: '8',
            dependsOn: ['4', '7'],
            fullName: 'Release Hardware'
        },
        {
            id: '9',
            optimistic: 25,
            pessimistic: 43,
            mostLikely: 31,
            name: '9',
            dependsOn: ['4'],
            fullName: 'Complete Software'
        },
        {
            id: '10',
            optimistic: 7,
            pessimistic: 11,
            mostLikely: 9,
            name: '10',
            dependsOn: ['6'],
            fullName: 'Release Manual'
        },
        {
            id: '11',
            optimistic: 19,
            pessimistic: 31,
            mostLikely: 25,
            name: '11',
            dependsOn: ['8'],
            fullName: 'Manufacture Hardware'
        },
        {
            id: '12',
            optimistic: 5,
            pessimistic: 12,
            mostLikely: 7,
            name: '12',
            dependsOn: ['9'],
            fullName: 'Release Software'
        },
        {
            id: '13',
            optimistic: 12,
            pessimistic: 20,
            mostLikely: 15,
            name: '13',
            dependsOn: ['10'],
            fullName: 'Print Manuals'
        }
    ];

    // set filling method for tree
    var treeData = anychart.data.tree(data, anychart.enums.TreeFillingMethod.AS_TABLE);
    // create PERT chart
    var chart = anychart.pert();
    // set spacing between milestones
    chart.horizontalSpacing('15.75%');
    // set padding for chart
    chart.padding([25, 50, 0, 50]);
    // set data
    chart.data(treeData);

    // get duration project
    var duration = Math.ceil(chart.getStat(anychart.enums.Statistics.PERT_CHART_PROJECT_DURATION));
    // get deviation project
    var deviation = Math.ceil(chart.getStat(anychart.enums.Statistics.PERT_CHART_CRITICAL_PATH_STANDARD_DEVIATION));

    // set title text
    var title = chart.title();
    title.enabled(true);
    title.useHtml(true);
    title.text(
        "PC Card with PERT Chart" +
        "<br>" + "Project duration: " +
        duration + '&plusmn;' +
        deviation + ' days'
    );
    title.padding([0, 0, 35, 0]);

    // set settings for tasks
    var tasks = chart.tasks();
    // format upper label tasks
    tasks.upperLabels().textFormatter(function () {
        return this.item.get('fullName');
    });
    // format lower label tasks
    tasks.lowerLabels().textFormatter(function () {
        // format time for tasks
        return timeTask(this.duration);
    });
    decorateLabels(tasks);

    // create tasks tooltip
    var tasksTooltip = tasks.tooltip();
    // tooltip settings
    tasksTooltip.separator().enabled(true);
    tasksTooltip.titleFormatter(function () {
        // return fullName from data
        return this.item.get('fullName');
    });
    tasksTooltip.title().useHtml(true);

    // set settings for critical tasks
    var critTasks = chart.criticalPath().tasks();
    // format upper label tasks
    critTasks.upperLabels().textFormatter(function () {
        return this.item.get('fullName');
    });
    critTasks.stroke('1 #D5A1DD');
    // format lower label tasks
    critTasks.lowerLabels().textFormatter(function () {
        // format time for tasks
        return timeTask(this.duration);
    });
    critTasks.color('#9E44B6');
    decorateLabels(critTasks);

    // create tasks tooltip
    var critTasksTooltip = critTasks.tooltip();
    // tooltip settings
    critTasksTooltip.separator().enabled(true);
    critTasksTooltip.titleFormatter(function () {
        // return fullName from data
        return this.item.get('fullName');
    });
    critTasksTooltip.title().useHtml(true);

    // set settings for milestones
    var milestones = chart.milestones();
    milestones.labels().textFormatter(function () {
        if (this['creator']) {
            var name = this['creator'].get('name');
            return this['isStart'] ? ('S ' + name) : ('F ' + name);
        } else {
            return this['isStart'] ? 'Start' : 'Finish';
        }
    });
    milestones.fill(function () {
        return this['creator'] ? '#9DACFF' : this['isStart'] ? '#a5b3b3' : '#60727b';
    });
    milestones.hoverFill(function () {
        return this['creator'] ? anychart.color.lighten('#9DACFF', 0.25) : this['isStart'] ? '#60727b' : '#60727b';
    });
    milestones.hoverStroke(function () {
        return this['creator'] ? '1.5 #9DACFF' : null;
    });
    milestones.tooltip().textFormatter(defaultMilestoneTooltipTextFormatter);


    // set settings for critical milestones
    var critMilestones = chart.criticalPath().milestones();
    // format labels
    critMilestones.labels().textFormatter(function () {
        if (this['creator']) {
            var name = this['creator'].get('name');
            return this['isStart'] ? ('S ' + name) : ('F ' + name);
        } else {
            return '>>';
        }
    });
    // fill color for critMilestones item
    critMilestones.fill(function () {
        return this['creator'] ? '#A489D4' : this['isStart'] ? '#60727b' : '#60727b';
    });
    // hoverFill color for critMilestones item
    critMilestones.hoverFill(function () {
        return this['creator'] ? anychart.color.lighten('#A489D4', 0.25) : this['isStart'] ? '#60727b' : '#60727b';
    });
    // hoverStroke color for critMilestones item
    critMilestones.hoverStroke(function () {
        return this['creator'] ? '1.5 #A489D4' : null;
    });
    critMilestones.tooltip().textFormatter(defaultMilestoneTooltipTextFormatter);


    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
});

function timeTask(duration: number) {
    var days = Math.floor(duration);
    var hours = Math.ceil(24 * (duration - days));
    var daysPart = days != 0 ? 'd:' + days + ' ' : '';
    var hoursPart = hours != 0 ? 'h:' + hours + ' ' : '';

    return daysPart + hoursPart;
}

function decorateLabels(tasks: anychart.core.pert.Tasks) {
    decorateUpperLabels(tasks.upperLabels());
    decorateUpperLabels(tasks.hoverUpperLabels(), true);
    decorateUpperLabels(tasks.selectUpperLabels(), true);
    decorateLowerLabels(tasks.lowerLabels());
    decorateLowerLabels(tasks.hoverLowerLabels(), true);
    decorateLowerLabels(tasks.selectLowerLabels(), true);
}

function decorateUpperLabels(labels: anychart.core.ui.LabelsFactory, opt_isBold?: boolean) {
    labels.textWrap('noWrap');
    labels.padding({'top': 0, 'right': 15, 'bottom': 0, 'left': 15});
    labels.fontSize(10);
    labels.fontWeight(opt_isBold ? 'bold' : 'normal');
}

function decorateLowerLabels(labels: anychart.core.ui.LabelsFactory, opt_isBold?: boolean) {
    labels.textWrap('noWrap');
    labels.padding({'top': 0, 'right': 5, 'bottom': 0, 'left': 5});
    labels.fontSize(9);
    labels.fontOpacity(0.5);
    labels.fontWeight(opt_isBold ? 'bold' : 'normal');
}

function defaultMilestoneTooltipTextFormatter() {
    var result = '';
    var i = 0;
    if (this['successors'] && this['successors'].length) {
        result += 'Successors:';
        for (i = 0; i < this['successors'].length; i++) {
            result += '\n - ' + this['successors'][i].get('fullName');
        }
        if (this['predecessors'] && this['predecessors'].length)
            result += '\n\n';
    }
    if (this['predecessors'] && this['predecessors'].length) {
        result += 'Predecessors:';
        for (i = 0; i < this['predecessors'].length; i++) {
            result += '\n - ' + this['predecessors'][i].get('fullName');
        }
    }
    return result;
}
