// gets version of lib
let version: string = $.jstree.version;

// create new instance
let instance1: JSTree = $('div').jstree();

$('div').jstree('open_node', '#branch');

// get existing reference
let existingReference: JSTree = $.jstree.reference('sds');

// advanced tree creation
let advancedTree = $("#briefcasetree").jstree({
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

let a = $('a').jstree();

// test search node
a.search('test', false, true);

// test redraw node
a.redraw_node($('#node1'), false, false, false);

// test clear buffer
a.clear_buffer();

// tree with new unique plugin parameters
let treeWithUnique = $('#treeWithUnique').jstree({
     unique: {
         case_sensitive: true,
         duplicate: (name: string, counter: number): string => {
             return `${name} ( ${counter.toString()} )`;
         }
     }
});

// tree with new core properties
let treeWithNewCoreProperties = $('#treeWithNewCoreProperties').jstree({
    core: {
        worker: true,
        force_text: true,
    }
});

// tree with new checkbox properties
let treeWithNewCheckboxProperties = $('#treeWithNewCheckboxProperties').jstree({
    checkbox: {
        cascade: '',
        tie_selection: true
    }
});

let tree = $('a').jstree();
tree.move_node('a', 'b', 0, (node: any, new_par: any, pos: any) => { }, true, true);
tree.copy_node('a', 'b', 0, (node: any, new_par: any, pos: any) => { }, true, true);

// #10271 jstree - get_path params not marked to be optional
tree.get_path('nodeId');
tree.get_path('nodeId', '/');
tree.get_path('nodeId', '/', true);
tree.settings.core.data = [];

let coreThemes: JSTreeStaticDefaultsCoreThemes = {
    ellipsis: true
};

// tree with new theme elipsis
let treeWithNewEllipsisProperties = $('#treeWithNewEllipsisProperties').jstree({
    core: {
        themes: coreThemes
    }
});

let vakata: VakataStatic = $.vakata;

let testArray: any[] = [];
vakata.attributes(tree.get_node(null), true);
let storage = vakata.storage;
