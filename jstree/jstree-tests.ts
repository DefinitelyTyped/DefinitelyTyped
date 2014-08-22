/// <reference path="jstree.d.ts" />

// gets version of lib
var version: string = $.jstree.version;

// create new instance
var instance1: JSTree = $('div').jstree();

// get existing reference
var existingReference: JSTree = $.jstree.reference('sds');

// advanced tree creation
var advancedTree = $("#briefcasetree").jstree({
        plugins: ['contextmenu', 'dnd', 'state', 'types', 'unique'],
        core: {
            check_callback: true,
            data: {
                cache: false,
                url: 'Briefcase/GetProjectTree',
                async: true,
                type: 'GET',
                dataType: 'json'
            }
        },
        types: {
            max_depth: -2,
            max_children: -2,
            valid_children: ['root_folder_all', 'root_folder'],
            types: {
                root_folder_all: {
                    valid_children: ['sub_folder_all'],
                    start_drag: false,
                    move_node: false,
                    delete_node: false,
                    remove: false
                },
                sub_folder_all: {
                    valid_children: ['sub_folder_all', 'saved_all'],
                    start_drag: false,
                    move_node: false,
                    delete_node: false,
                    remove: false
                },
                saved_all: {
                    valid_children: [],
                    start_drag: false,
                    move_node: false,
                    delete_node: false,
                    remove: false
                },
                root_folder: {
                    valid_children: ['sub_folder'],
                    start_drag: false,
                    move_node: false,
                    delete_node: false,
                    remove: false
                },
                sub_folder: {
                    valid_children: ['sub_folder', 'saved_single']
                },
                saved_single: {
                    valid_children: 'none'
                }
            }
        }
    });

