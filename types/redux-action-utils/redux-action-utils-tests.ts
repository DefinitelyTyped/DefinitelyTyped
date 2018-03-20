
/// <reference types="redux" />

import { actionCreator, optionsActionCreator } from 'redux-action-utils';
import { Action, ActionCreator } from 'redux-action-utils';

let types = {
    ADD_LESSON: 'ADD_LESSON',
    IMPORT_LESSONS: 'IMPORT_LESSONS',
    UPDATE_LESSON: 'UPDATE_LESSON'
};
var type: string;

export default {
    addLesson: actionCreator(types.ADD_LESSON),
    importLessons: actionCreator(types.IMPORT_LESSONS, 'lessons'),
    updateLesson: optionsActionCreator(types.UPDATE_LESSON, 'id', 'update')
};

var ac = actionCreator(types.ADD_LESSON);
var action: Action = ac();
type = action.type;


class ImportLesson {
    lessons: string[];
}

const importLessonAction = actionCreator<ImportLesson>(types.IMPORT_LESSONS, 'lessons');
var importLesson = importLessonAction(['lesson 1', 'lesson 2']);
// → {type: 'IMPORT_LESSONS', lessons: ['lesson 1', 'lesson 2']}

var lessons: string[] = importLesson.lessons;
type = importLesson.type;


class UpdateLesson {
    id: number;
    update: {
        text: string
    }
}

const updateLessonAction = optionsActionCreator<UpdateLesson>(types.UPDATE_LESSON, 'id', 'update');
let updateLesson = updateLessonAction({
    id: 1,
    update: {
        text: '## Lesson 1'
    }
});
/* →
 {
 type: 'UPDATE_LESSON',
 id: 1,
 update: {
 text: '## Lesson 1'
 }
 }
 */

let id: number = updateLesson.id;
type = updateLesson.type;
