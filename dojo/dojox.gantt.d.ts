// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module dojox {
    
    module gantt {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/contextMenuTab.html
         *
         * 
         * @param id     
         * @param description     
         * @param type     
         * @param showOInfo     
         * @param tabMenu     
         * @param withDefaultValue     
         */
        class contextMenuTab {
            constructor(id: any, description: any, type: any, showOInfo: any, tabMenu: any, withDefaultValue: any);
            /**
             * 
             * @param handler             
             */
            addAction(handler: any): void;
            /**
             * 
             */
            addChildTaskAction(): void;
            /**
             * 
             * @param id             
             * @param name             
             * @param key             
             * @param required             
             */
            addItem(id: any, name: any, key: any, required: any): void;
            /**
             * 
             */
            addProjectAction(): void;
            /**
             * 
             */
            addSuccessorTaskAction(): void;
            /**
             * 
             */
            addTaskAction(): void;
            /**
             * 
             */
            cpProjectAction(): void;
            /**
             * 
             */
            cpUpdateAction(): void;
            /**
             * 
             * @param dateStr             
             */
            decodeDate(dateStr: any): any;
            /**
             * 
             */
            deleteAction(): void;
            /**
             * 
             */
            deleteProjectAction(): void;
            /**
             * 
             */
            durationUpdateAction(): void;
            /**
             * 
             * @param date             
             */
            encodeDate(date: any): String;
            /**
             * 
             */
            hide(): void;
            /**
             * 
             * @param content             
             * @param name             
             * @param value             
             */
            insertData(content: any, name: any, value: any): void;
            /**
             * 
             */
            ownerUpdateAction(): void;
            /**
             * 
             * @param items             
             */
            preValueValidation(items: any): boolean;
            /**
             * 
             */
            ptUpdateAction(): void;
            /**
             * 
             */
            renameProjectAction(): void;
            /**
             * 
             */
            renameTaskAction(): void;
            /**
             * 
             */
            show(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/GanttProjectItem.html
         *
         * 
         * @param configuration     
         */
        class GanttProjectItem extends dojox.gantt.GanttTaskItem {
            constructor(configuration: any);
            /**
             * 
             * @param task             
             */
            addChildTask(task: any): void;
            /**
             * 
             * @param task             
             */
            addTask(task: any): void;
            /**
             * 
             * @param id             
             */
            deleteTask(id: any): void;
            /**
             * 
             * @param id             
             */
            getTaskById(id: any): any;
            /**
             * 
             * @param parentTask             
             * @param id             
             */
            getTaskByIdInTree(parentTask: any, id: any): any;
            /**
             * 
             * @param project             
             */
            setProject(project: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/GanttResourceItem.html
         *
         * 
         * @param ganttchart     
         */
        class GanttResourceItem {
            constructor(ganttchart: any);
            /**
             * 
             */
            buildOwnerTimeConsume(): Object;
            /**
             * 
             */
            buildResource(): Object;
            /**
             * 
             * @param taskNameItem             
             */
            checkWidthTaskNameItem(taskNameItem: any): void;
            /**
             * 
             */
            clearAll(): void;
            /**
             * 
             */
            clearData(): void;
            /**
             * 
             */
            clearItems(): void;
            /**
             * 
             */
            create(): void;
            /**
             * 
             * @param parentNode             
             * @param currentNode             
             */
            createConnectingLinesPN(parentNode: any, currentNode: any): any[];
            /**
             * 
             * @param owner             
             * @param parentNode             
             * @param task             
             */
            createDetailedTaskEntry(owner: any, parentNode: any, task: any): any[];
            /**
             * 
             * @param owner             
             */
            createOwnerEntry(owner: any): Function;
            /**
             * 
             * @param owner             
             * @param posY             
             */
            createOwnerItem(owner: any, posY: any): any;
            /**
             * 
             * @param owner             
             * @param posY             
             */
            createOwnerNameItem(owner: any, posY: any): any;
            /**
             * 
             */
            createPanelNamesOwners(): any;
            /**
             * 
             */
            createPanelOwners(): any;
            /**
             * 
             * @param task             
             * @param posY             
             */
            createTaskItem(task: any, posY: any): any;
            /**
             * 
             * @param owner             
             * @param posY             
             */
            createTaskNameItem(owner: any, posY: any): any;
            /**
             * 
             * @param ownerNameItem             
             */
            createTreeImg(ownerNameItem: any): any;
            /**
             * 
             */
            postAdjustment(): void;
            /**
             * 
             */
            reConstruct(): void;
            /**
             * 
             */
            refresh(): void;
            /**
             * 
             * @param owner             
             * @param item             
             * @param task             
             */
            refreshDetailedTaskEntry(owner: any, item: any, task: any): void;
            /**
             * 
             * @param owner             
             */
            refreshOwnerEntry(owner: any): void;
            /**
             * 
             * @param owner             
             */
            refreshOwnerItem(owner: any): void;
            /**
             * 
             * @param item             
             * @param task             
             */
            refreshTaskItem(item: any, task: any): void;
            /**
             * 
             * @param tItem             
             * @param owner             
             * @param displayType             
             * @param topOffset             
             */
            styleOwnerItem(tItem: any, owner: any, displayType: any, topOffset: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/GanttProjectControl.html
         *
         * 
         * @param ganttChart     
         * @param projectItem     
         */
        class GanttProjectControl {
            constructor(ganttChart: any, projectItem: any);
            /**
             * 
             */
            adjustPanelTime(): void;
            /**
             * 
             */
            checkWidthProjectNameItem(): void;
            /**
             * 
             */
            create(): void;
            /**
             * 
             */
            createDescrProject(): any;
            /**
             * 
             */
            createProjectItem(): any;
            /**
             * 
             */
            createProjectNameItem(): any;
            /**
             * 
             * @param task             
             */
            deleteChildTask(task: any): void;
            /**
             * 
             * @param id             
             */
            deleteTask(id: any): void;
            /**
             * 
             */
            getDescStr(): String;
            /**
             * 
             */
            getDuration(): number;
            /**
             * 
             */
            getPercentCompleted(): any;
            /**
             * 
             * @param id             
             */
            getTaskById(id: any): any;
            /**
             * 
             */
            hideDescrProject(): void;
            /**
             * 
             * @param id             
             * @param name             
             * @param startTime             
             * @param duration             
             * @param percentage             
             * @param previousTaskId             
             * @param taskOwner             
             * @param parentTaskId             
             */
            insertTask(id: any, name: any, startTime: any, duration: any, percentage: any, previousTaskId: any, taskOwner: any, parentTaskId: any): any;
            /**
             * 
             */
            postLoadData(): void;
            /**
             * 
             */
            refresh(): Function;
            /**
             * 
             * @param divDesc             
             */
            refreshDescrProject(divDesc: any): any;
            /**
             * 
             * @param projectItem             
             */
            refreshProjectItem(projectItem: any): any;
            /**
             * 
             * @param width             
             */
            resizeProjectItem(width: any): void;
            /**
             * 
             * @param task             
             * @param id             
             */
            searchTaskInTree(task: any, id: any): any;
            /**
             * 
             * @param name             
             */
            setName(name: any): void;
            /**
             * 
             * @param percentage             
             */
            setPercentCompleted(percentage: any): boolean;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftChildTasks(task: any, height: any): void;
            /**
             * 
             */
            shiftDescrProject(): void;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftNextParentTask(task: any, height: any): void;
            /**
             * 
             * @param project             
             * @param height             
             */
            shiftNextProject(project: any, height: any): void;
            /**
             * 
             * @param height             
             */
            shiftProject(height: any): void;
            /**
             * 
             */
            shiftProjectItem(): void;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftTask(task: any, height: any): void;
            /**
             * 
             */
            showDescrProject(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/TabMenu.html
         *
         * 
         * @param chart     
         */
        class TabMenu {
            constructor(chart: any);
            /**
             * 
             * @param tab             
             */
            addItemMenuPanel(tab: any): void;
            /**
             * 
             */
            buildContent(): void;
            /**
             * 
             */
            clear(): void;
            /**
             * 
             */
            createMenuPanel(): void;
            /**
             * 
             * @param id             
             * @param desc             
             * @param type             
             * @param showOInfo             
             * @param menu             
             * @param withDefaultValue             
             */
            createTab(id: any, desc: any, type: any, showOInfo: any, menu: any, withDefaultValue: any): any;
            /**
             * 
             */
            createTabPanel(): void;
            /**
             * 
             */
            hide(): void;
            /**
             * 
             * @param elem             
             * @param object             
             */
            show(elem: any, object: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/GanttTaskItem.html
         *
         * 
         * @param configuration     
         */
        class GanttTaskItem {
            constructor(configuration: any);
            /**
             * 
             * @param task             
             */
            addChildTask(task: any): void;
            /**
             * 
             * @param project             
             */
            setProject(project: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/GanttTaskControl.html
         *
         * 
         * @param taskInfo     
         * @param project     
         * @param chart     
         */
        class GanttTaskControl {
            constructor(taskInfo: any, project: any, chart: any);
            /**
             * 
             */
            adjustPanelTime(): void;
            /**
             * 
             * @param resourceInfo             
             */
            buildResourceInfo(resourceInfo: any): void;
            /**
             * 
             * @param startTime             
             */
            checkPos(startTime: any): any;
            /**
             * 
             */
            checkPosition(): void;
            /**
             * 
             */
            checkWidthTaskNameItem(): void;
            /**
             * 
             */
            clearPredTask(): void;
            /**
             * 
             */
            create(): Function;
            /**
             * 
             */
            createConnectingLinesDS(): any[];
            /**
             * 
             */
            createConnectingLinesPN(): any[];
            /**
             * 
             */
            createTaskDescItem(): any;
            /**
             * 
             */
            createTaskItem(): any;
            /**
             * 
             */
            createTaskNameItem(): any;
            /**
             * 
             */
            createTreeImg(): any;
            /**
             * 
             */
            endMove(): void;
            /**
             * 
             */
            endResizeItem(): void;
            /**
             * 
             * @param position               OptionalThe tooltip position.             
             */
            getDateOnPosition(position: String[]): any;
            /**
             * 
             */
            getMaxPosPredChildTaskItem(): any;
            /**
             * 
             * @param task             
             */
            getMaxPosPredChildTaskItemInTree(task: any): number;
            /**
             * 
             */
            getMoveInfo(): void;
            /**
             * 
             */
            getResizeInfo(): void;
            /**
             * 
             */
            getTaskOwner(): Object;
            /**
             * 
             * @param task             
             */
            hideChildTasks(task: any): void;
            /**
             * 
             */
            hideDescTask(): void;
            /**
             * 
             * @param task             
             * @param width             
             * @param moveChild             
             */
            moveChildTaskItems(task: any, width: any, moveChild: any): void;
            /**
             * 
             * @param width             
             * @param moveChild             
             */
            moveCurrentTaskItem(width: any, moveChild: any): void;
            /**
             * 
             */
            moveDescTask(): void;
            /**
             * 
             * @param event             
             */
            moveItem(event: any): void;
            /**
             * 
             * @param posX             
             */
            moveTaskItem(posX: any): void;
            /**
             * 
             * @param obj             
             * @param delm             
             */
            objKeyToStr(obj: any, delm: any): String;
            /**
             * 
             */
            postLoadData(): void;
            /**
             * 
             */
            refresh(): Function;
            /**
             * 
             * @param arrLines             
             */
            refreshConnectingLinesDS(arrLines: any): any;
            /**
             * 
             * @param divDesc             
             */
            refreshTaskDesc(divDesc: any): any;
            /**
             * 
             * @param itemControl             
             */
            refreshTaskItem(itemControl: any): any;
            /**
             * 
             * @param event             
             */
            resizeItem(event: any): void;
            /**
             * 
             * @param width             
             */
            resizeTaskItem(width: any): void;
            /**
             * 
             * @param duration             
             */
            setDuration(duration: any): boolean;
            /**
             * 
             * @param name             
             */
            setName(name: any): void;
            /**
             * 
             * @param percentage             
             */
            setPercentCompleted(percentage: any): boolean;
            /**
             * 
             * @param previousTaskId             
             */
            setPreviousTask(previousTaskId: any): boolean;
            /**
             * 
             * @param startTime             
             * @param shiftChild             
             */
            setStartTime(startTime: any, shiftChild: any): boolean;
            /**
             * 
             * @param owner             
             */
            setTaskOwner(owner: any): boolean;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftChildTask(task: any, height: any): void;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftCurrentTasks(task: any, height: any): void;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftNextTask(task: any, height: any): void;
            /**
             * 
             * @param task             
             * @param height             
             */
            shiftTask(task: any, height: any): void;
            /**
             * 
             * @param task             
             * @param isOpen             
             */
            showChildTasks(task: any, isOpen: any): void;
            /**
             * 
             */
            showDescTask(): void;
            /**
             * 
             * @param event             
             */
            startMove(event: any): void;
            /**
             * 
             * @param event             
             */
            startResize(event: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gantt/GanttChart.html
         *
         * 
         * @param configuration     
         * @param node     
         */
        class GanttChart {
            constructor(configuration: any, node: any);
            /**
             * 
             * @param row             
             */
            addDayInPanelTime(row: any): void;
            /**
             * 
             * @param row             
             */
            addHourInPanelTime(row: any): void;
            /**
             * 
             * @param row             
             * @param count             
             * @param month             
             * @param year             
             */
            addMonthInPanelTime(row: any, count: any, month: any, year: any): void;
            /**
             * 
             * @param projectItem             
             */
            addProject(projectItem: any): void;
            /**
             * 
             * @param row             
             * @param count             
             * @param week             
             */
            addWeekInPanelTime(row: any, count: any, week: any): void;
            /**
             * 
             * @param row             
             * @param count             
             * @param year             
             */
            addYearInPanelTime(row: any, count: any, year: any): void;
            /**
             * 
             */
            adjustPanelTime(): void;
            /**
             * 
             * @param parentTask             
             * @param childTaskItems             
             */
            buildChildTasksData(parentTask: any, childTaskItems: any): void;
            /**
             * 
             */
            buildUIContent(): void;
            /**
             * 
             */
            checkHeighPanelTasks(): void;
            /**
             * 
             */
            checkPosition(): void;
            /**
             * 
             * @param parentTask             
             * @param task             
             */
            checkPosParentTask(parentTask: any, task: any): boolean;
            /**
             * 
             * @param parentTask             
             */
            checkPosParentTaskInTree(parentTask: any): any;
            /**
             * 
             * @param predTask             
             * @param task             
             */
            checkPosPreviousTask(predTask: any, task: any): boolean;
            /**
             * 
             */
            clearAll(): void;
            /**
             * 
             */
            clearData(): void;
            /**
             * 
             */
            clearEvents(): void;
            /**
             * 
             */
            clearItems(): void;
            /**
             * 
             * @param parentTask             
             * @param ctask             
             */
            correctPosParentTask(parentTask: any, ctask: any): void;
            /**
             * 
             * @param predTask             
             * @param ctask             
             * @param ctaskObj             
             */
            correctPosPreviousTask(predTask: any, ctask: any, ctaskObj: any): void;
            /**
             * 
             * @param arrChildTasks             
             * @param project             
             */
            createChildItemControls(arrChildTasks: any, project: any): void;
            /**
             * 
             */
            createPanelNamesTasks(): any;
            /**
             * 
             */
            createPanelNamesTasksHeader(): any;
            /**
             * 
             */
            createPanelTasks(): any;
            /**
             * 
             */
            createPanelTime(): any;
            /**
             * 
             * @param project             
             */
            createTasks(project: any): void;
            /**
             * 
             * @param id             
             */
            deleteProject(id: any): void;
            /**
             * 
             * @param childTasks             
             */
            getChildTasksData(childTasks: any): any[];
            /**
             * 
             */
            getCountDays(): any;
            /**
             * 
             */
            getJSONData(): Object;
            /**
             * 
             * @param task             
             */
            getLastChildTask(task: any): any;
            /**
             * 
             * @param task             
             */
            getLastCloseParent(task: any): any;
            /**
             * 
             * @param startTime             
             */
            getPosOnDate(startTime: any): number;
            /**
             * 
             * @param id             
             */
            getProject(id: any): any;
            /**
             * 
             * @param id             
             */
            getProjectItemById(id: any): any;
            /**
             * 
             */
            getStartDate(): any;
            /**
             * 
             * @param duration             
             */
            getWidthOnDuration(duration: any): any;
            /**
             * 
             * @param height             
             */
            incHeightPanelNames(height: any): void;
            /**
             * 
             * @param height             
             */
            incHeightPanelTasks(height: any): void;
            /**
             * 
             */
            init(): Function;
            /**
             * 
             * @param id             
             * @param name             
             * @param startDate             
             */
            insertProject(id: any, name: any, startDate: any): any;
            /**
             * 
             * @param filename             
             */
            loadJSONData(filename: any): void;
            /**
             * 
             * @param content             
             */
            loadJSONString(content: any): void;
            /**
             * 
             * @param parentTask             
             */
            openNode(parentTask: any): void;
            /**
             * 
             * @param parentTask             
             */
            openTree(parentTask: any): void;
            /**
             * 
             */
            postBindEvents(): void;
            /**
             * 
             */
            postLoadData(): void;
            /**
             * 
             * @param count             
             * @param current             
             * @param multi             
             */
            refresh(count: any, current: any, multi: any): void;
            /**
             * 
             */
            refreshController(): void;
            /**
             * 
             * @param pixelsPerDay             
             */
            refreshParams(pixelsPerDay: any): void;
            /**
             * 
             * @param row             
             */
            removeCell(row: any): void;
            /**
             * 
             * @param fileName             
             */
            saveJSONData(fileName: any): void;
            /**
             * 
             * @param project             
             */
            setPreviousTask(project: any): any;
            /**
             * 
             * @param parentTask             
             */
            setPreviousTaskInTree(parentTask: any): any;
            /**
             * 
             * @param parentTask             
             */
            setStartTimeChild(parentTask: any): void;
            /**
             * 
             * @param parenttask             
             */
            sortChildTasks(parenttask: any): any;
            /**
             * 
             * @param a             
             * @param b             
             */
            sortProjStartDate(a: any, b: any): number;
            /**
             * 
             * @param project             
             */
            sortTasksByStartTime(project: any): void;
            /**
             * 
             * @param a             
             * @param b             
             */
            sortTaskStartTime(a: any, b: any): number;
            /**
             * 
             * @param dip             
             */
            switchTeleMicroView(dip: any): void;
        }
    }

}

declare module "dojox/gantt/contextMenuTab" {
    var exp: dojox.gantt.contextMenuTab
    export=exp;
}
declare module "dojox/gantt/GanttProjectControl" {
    var exp: dojox.gantt.GanttProjectControl
    export=exp;
}
declare module "dojox/gantt/GanttProjectItem" {
    var exp: dojox.gantt.GanttProjectItem
    export=exp;
}
declare module "dojox/gantt/GanttResourceItem" {
    var exp: dojox.gantt.GanttResourceItem
    export=exp;
}
declare module "dojox/gantt/GanttChart" {
    var exp: dojox.gantt.GanttChart
    export=exp;
}
declare module "dojox/gantt/GanttTaskControl" {
    var exp: dojox.gantt.GanttTaskControl
    export=exp;
}
declare module "dojox/gantt/TabMenu" {
    var exp: dojox.gantt.TabMenu
    export=exp;
}
declare module "dojox/gantt/GanttTaskItem" {
    var exp: dojox.gantt.GanttTaskItem
    export=exp;
}
