

// gets version of lib
var version: string = $.jstree.version;

// create new instance
var instance1: JSTree = $('div').jstree();

$('div').jstree('open_node', '#branch');

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

var a = $('a').jstree();

// test search node
a.search('test', false, true);

//test redraw node
a.redraw_node($('#node1'), false, false, false);

//test clear buffer
a.clear_buffer();

//tree with new unique plugin parameters
var treeWithUnique = $('#treeWithUnique').jstree({
     unique: {
         case_sensitive: true,
         duplicate: (name: string, counter: number): string => {
             return name + ' ( ' + counter.toString() + ' )';
         }
     }
});

// tree with new core properties
var treeWithNewCoreProperties = $('#treeWithNewCoreProperties').jstree({
    core: {
        worker: true,
        force_text: true,
    }
});

// tree with new checkbox properties
var treeWithNewCheckboxProperties = $('#treeWithNewCheckboxProperties').jstree({
    checkbox: {
        cascade: '',
        tie_selection: true
    }
});


var tree = $('a').jstree();
tree.move_node('a', 'b', 0, (node: any, new_par: any, pos: any) => { }, true, true);
tree.copy_node('a', 'b', 0, (node: any, new_par: any, pos: any) => { }, true, true);

// #10271 jstree - get_path params not marked to be optional
tree.get_path('nodeId');
tree.get_path('nodeId', '/');
tree.get_path('nodeId', '/', true);



var coreThemes: JSTreeStaticDefaultsCoreThemes = {
    ellipsis:true
};

// tree with new theme elipsis
var treeWithNewCoreProperties = $('#treeWithNewEllipsisProperties').jstree({
    core: {
        themes: coreThemes
    }
});
