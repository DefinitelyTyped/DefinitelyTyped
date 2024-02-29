/**
 * Behavior3JS
 * ===========
 *
 * * * *
 *
 * **Behavior3JS** is a Behavior Tree library written in JavaScript. It
 * provides structures and algorithms that assist you in the task of creating
 * intelligent agents for your game or application. Check it out some features
 * of Behavior3JS:
 *
 * - Based on the work of (Marzinotto et al., 2014), in which they propose a
 *   **formal**, **consistent** and **general** definition of Behavior Trees;
 * - **Optimized to control multiple agents**: you can use a single behavior
 *   tree instance to handle hundreds of agents;
 * - It was **designed to load and save trees in a JSON format**, in order to
 *   use, edit and test it in multiple environments, tools and languages;
 * - A **cool visual editor** which you can access online;
 * - Several **composite, decorator and action nodes** available within the
 *   library. You still can define your own nodes, including composites and
 *   decorators;
 * - **Completely free**, the core module and the visual editor are all
 *   published under the MIT License, which means that you can use them for
 *   your open source and commercial projects;
 * - **Lightweight**!
 *
 * Visit http://behavior3.com to know more!
 *
 * ## Core Classes and Functions
 *
 * This library include the following core structures...
 *
 * **Public:**
 *
 * - **BehaviorTree**: the structure that represents a Behavior Tree;
 * - **Blackboard**: represents a "memory" in an agent and is required to to
 *   run a `BehaviorTree`;
 * - **Composite**: base class for all composite nodes;
 * - **Decorator**: base class for all decorator nodes;
 * - **Action**: base class for all action nodes;
 * - **Condition**: base class for all condition nodes;
 *
 * **Internal:**
 *
 * - **Tick**: used as container and tracking object through the tree during
 *   the tick signal;
 * - **BaseNode**: the base class that provide all common node features;
 *
 * *Some classes are used internally on Behavior3JS, but you may need to access
 * its functionalities eventually, specially the `Tick` object.*
 *
 * **Nodes:**
 *
 * - **Composite Nodes**: Sequence, Priority, MemSequence, MemPriority.
 * - **Decorators**: Inverter, Limiter, MaxTime, Repeater,
 *   RepeaterUntilFailure, RepeaterUntilSuccess.
 * - **Actions**: Succeeder, Failer, Error, Runner, Wait.
 *
 * ## The list of all constants in B3.
 *
 * NAME                | VALUE
 * ------------------- | ----------------------
 * VERSION             | depends on the version
 *                     |
 * **Node State**      |
 * SUCCESS             | 1
 * FAILURE             | 2
 * RUNNING             | 3
 * ERROR               | 4
 *                     |
 * **Node categories** |
 * COMPOSITE           | 'composite'
 * DECORATOR           | 'decorator'
 * ACTION              | 'action'
 * CONDITION           | 'condition'
 */
declare namespace b3 {
    /**
     * This function is used to create unique IDs for trees and nodes.
     *
     * (consult http://www.ietf.org/rfc/rfc4122.txt).
     */
    function createUUID(): string;

    /**
     * The BaseNode class is used as super class to all nodes in BehaviorJS. It
     * comprises all common variables and methods that a node must have to
     * execute.
     *
     * **IMPORTANT:** Do not inherit from this class, use `Composite`,
     * `Decorator`, `Action` or `Condition`, instead.
     *
     * The attributes are specially designed to serialization of the node in a
     * JSON format. In special, the `parameters` attribute can be set into the
     * visual editor (thus, in the JSON file), and it will be used as parameter
     * on the node initialization at `BehaviorTree.load`.
     *
     * BaseNode also provide 5 callback methods, which the node implementations
     * can override. They are `enter`, `open`, `tick`, `close` and `exit`. See
     * their documentation to know more. These callbacks are called inside the
     * `_execute` method, which is called in the tree traversal.
     */
    class BaseNode {
        /**
         * Initialization method.
         */
        constructor({ category, name, title, description, properties }?: {
            category?: string | undefined;
            name?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            properties?: any;
        });

        /**
         * This is the main method to propagate the tick signal to this node. This
         * method calls all callbacks: `enter`, `open`, `tick`, `close`, and
         * `exit`. It only opens a node if it is not already open. In the same
         * way, this method only close a node if the node  returned a status
         * different of `RUNNING`.
         */
        _execute(tick: Tick): number;

        /**
         * Wrapper for enter method.
         */
        _enter(tick: Tick): void;

        /**
         * Wrapper for open method.
         */
        _open(tick: Tick): void;

        /**
         * Wrapper for tick method.
         */
        _tick(tick: Tick): number;

        /**
         * Wrapper for close method.
         */
        _close(tick: Tick): void;

        /**
         * Wrapper for exit method.
         */
        _exit(tick: Tick): void;

        /**
         * Enter method, override this to use. It is called every time a node is
         * asked to execute, before the tick itself.
         */
        enter(tick: Tick): void;

        /**
         * Open method, override this to use. It is called only before the tick
         * callback and only if the not isn't closed.
         *
         * Note: a node will be closed if it returned `RUNNING` in the tick.
         */
        open(tick: Tick): void;

        /**
         * Tick method, override this to use. This method must contain the real
         * execution of node (perform a task, call children, etc.). It is called
         * every time a node is asked to execute.
         */
        tick(tick: Tick): void;

        /**
         * Close method, override this to use. This method is called after the tick
         * callback, and only if the tick return a state different from
         * `RUNNING`.
         */
        close(tick: Tick): void;

        /**
         * Exit method, override this to use. Called every time in the end of the
         * execution.
         */
        exit(tick: Tick): void;
    }

    /**
     * Action is the base class for all action nodes. Thus, if you want to create
     * new custom action nodes, you need to inherit from this class. For example,
     * take a look at the Runner action:
     *
     *     class Runner extends b3.Action {
     *       constructor(){
     *         super({name: 'Runner'});
     *       }
     *       tick(tick) {
     *         return b3.RUNNING;
     *       }
     *     };
     */
    class Action extends BaseNode {
        /**
         * Creates an instance of Action.
         */
        constructor(
            { name, title, properties }?: { name?: string | undefined; title?: string | undefined; properties?: any },
        );
    }

    /**
     * The BehaviorTree class, as the name implies, represents the Behavior Tree
     * structure.
     *
     * There are two ways to construct a Behavior Tree: by manually setting the
     * root node, or by loading it from a data structure (which can be loaded
     * from a JSON). Both methods are shown in the examples below and better
     * explained in the user guide.
     *
     * The tick method must be called periodically, in order to send the tick
     * signal to all nodes in the tree, starting from the root. The method
     * `BehaviorTree.tick` receives a target object and a blackboard as
     * parameters. The target object can be anything: a game agent, a system, a
     * DOM object, etc. This target is not used by any piece of Behavior3JS,
     * i.e., the target object will only be used by custom nodes.
     *
     * The blackboard is obligatory and must be an instance of `Blackboard`. This
     * requirement is necessary due to the fact that neither `BehaviorTree` or
     * any node will store the execution variables in its own object (e.g., the
     * BT does not store the target, information about opened nodes or number of
     * times the tree was called). But because of this, you only need a single
     * tree instance to control multiple (maybe hundreds) objects.
     *
     * Manual construction of a Behavior Tree
     * --------------------------------------
     *
     *     var tree = new b3.BehaviorTree();
     *
     *     tree.root = new b3.Sequence({children:[
     *       new b3.Priority({children:[
     *         new MyCustomNode(),
     *         new MyCustomNode()
     *       ]}),
     *       ...
     *     ]});
     *
     * Loading a Behavior Tree from data structure
     * -------------------------------------------
     *
     *     var tree = new b3.BehaviorTree();
     *
     *     tree.load({
     *       'title'       : 'Behavior Tree title'
     *       'description' : 'My description'
     *       'root'        : 'node-id-1'
     *       'nodes'       : {
     *         'node-id-1' : {
     *           'name'        : 'Priority', // this is the node type
     *           'title'       : 'Root Node',
     *           'description' : 'Description',
     *           'children'    : ['node-id-2', 'node-id-3'],
     *         },
     *         ...
     *       }
     *     })
     */
    class BehaviorTree {
        /**
         * Initialization method.
         */
        constructor();

        /**
         * This method loads a Behavior Tree from a data structure, populating this
         * object with the provided data. Notice that, the data structure must
         * follow the format specified by Behavior3JS. Consult the guide to know
         * more about this format.
         *
         * You probably want to use custom nodes in your BTs, thus, you need to
         * provide the `names` object, in which this method can find the nodes by
         * `names[NODE_NAME]`. This variable can be a namespace or a dictionary,
         * as long as this method can find the node by its name, for example:
         *
         *     //json
         *     ...
         *     'node1': {
         *       'name': MyCustomNode,
         *       'title': ...
         *     }
         *     ...
         *
         *     //code
         *     var bt = new b3.BehaviorTree();
         *     bt.load(data, {'MyCustomNode':MyCustomNode})
         */
        load(data: any, names?: any): void;

        /**
         * This method dump the current BT into a data structure.
         *
         * Note: This method does not record the current node parameters. Thus,
         * it may not be compatible with load for now.
         */
        dump(): any;

        /**
         * Propagates the tick signal through the tree, starting from the root.
         *
         * This method receives a target object of any type (Object, Array,
         * DOMElement, whatever) and a `Blackboard` instance. The target object has
         * no use at all for all Behavior3JS components, but surely is important
         * for custom nodes. The blackboard instance is used by the tree and nodes
         * to store execution variables (e.g., last node running) and is obligatory
         * to be a `Blackboard` instance (or an object with the same interface).
         *
         * Internally, this method creates a Tick object, which will store the
         * target and the blackboard objects.
         *
         * Note: BehaviorTree stores a list of open nodes from last tick, if these
         * nodes weren't called after the current tick, this method will close them
         * automatically.
         */
        tick(target: any, blackboard: Blackboard): string;
    }

    /**
     * The Blackboard is the memory structure required by `BehaviorTree` and its
     * nodes. It only have 2 public methods: `set` and `get`. These methods works
     * in 3 different contexts: global, per tree, and per node per tree.
     *
     * Suppose you have two different trees controlling a single object with a
     * single blackboard, then:
     *
     * - In the global context, all nodes will access the stored information.
     * - In per tree context, only nodes sharing the same tree share the stored
     *   information.
     * - In per node per tree context, the information stored in the blackboard
     *   can only be accessed by the same node that wrote the data.
     *
     * The context is selected indirectly by the parameters provided to these
     * methods, for example:
     *
     *     // getting/setting variable in global context
     *     blackboard.set('testKey', 'value');
     *     var value = blackboard.get('testKey');
     *
     *     // getting/setting variable in per tree context
     *     blackboard.set('testKey', 'value', tree.id);
     *     var value = blackboard.get('testKey', tree.id);
     *
     *     // getting/setting variable in per node per tree context
     *     blackboard.set('testKey', 'value', tree.id, node.id);
     *     var value = blackboard.get('testKey', tree.id, node.id);
     *
     * Note: Internally, the blackboard store these memories in different
     * objects, being the global on `_baseMemory`, the per tree on `_treeMemory`
     * and the per node per tree dynamically create inside the per tree memory
     * (it is accessed via `_treeMemory[id].nodeMemory`). Avoid to use these
     * variables manually, use `get` and `set` instead.
     */
    class Blackboard {
        /**
         * Initialization method.
         */
        constructor();

        /**
         * Internal method to retrieve the tree context memory. If the memory does
         * not exist, this method creates it.
         */
        _getTreeMemory(treeScope: string): any;

        /**
         * Internal method to retrieve the node context memory, given the tree
         * memory. If the memory does not exist, this method creates is.
         */
        _getNodeMemory(treeMemory: string, nodeScope: string): any;

        /**
         * Internal method to retrieve the context memory. If treeScope and
         * nodeScope are provided, this method returns the per node per tree
         * memory. If only the treeScope is provided, it returns the per tree
         * memory. If no parameter is provided, it returns the global memory.
         * Notice that, if only nodeScope is provided, this method will still
         * return the global memory.
         */
        _getMemory(treeScope: string, nodeScope: string): any;

        /**
         * Stores a value in the blackboard. If treeScope and nodeScope are
         * provided, this method will save the value into the per node per tree
         * memory. If only the treeScope is provided, it will save the value into
         * the per tree memory. If no parameter is provided, this method will save
         * the value into the global memory. Notice that, if only nodeScope is
         * provided (but treeScope not), this method will still save the value into
         * the global memory.
         */
        set(key: string, value: string, treeScope: string, nodeScope: string): void;

        /**
         * Retrieves a value in the blackboard. If treeScope and nodeScope are
         * provided, this method will retrieve the value from the per node per tree
         * memory. If only the treeScope is provided, it will retrieve the value
         * from the per tree memory. If no parameter is provided, this method will
         * retrieve from the global memory. If only nodeScope is provided (but
         * treeScope not), this method will still try to retrieve from the global
         * memory.
         */
        get(key: string, treeScope: string, nodeScope: string): any;
    }

    /**
     * Composite is the base class for all composite nodes. Thus, if you want to
     * create new custom composite nodes, you need to inherit from this class.
     *
     * When creating composite nodes, you will need to propagate the tick signal
     * to the children nodes manually. To do that, override the `tick` method and
     * call the `_execute` method on all nodes. For instance, take a look at how
     * the Sequence node inherit this class and how it call its children:
     *
     *     // Inherit from Composite, using the util function Class.
     *     class Sequence extends Composite {
     *
     *       constructor(){
     *         // Remember to set the name of the node.
     *         super({name: 'Sequence'});
     *       }
     *
     *       // Override the tick function
     *       tick(tick) {
     *
     *         // Iterates over the children
     *         for (var i=0; i<this.children.length; i++) {
     *
     *           // Propagate the tick
     *           var status = this.children[i]._execute(tick);
     *
     *           if (status !== SUCCESS) {
     *               return status;
     *           }
     *         }
     *
     *         return SUCCESS;
     *       }
     *     };
     */
    class Composite extends BaseNode {
        /**
         * Creates an instance of Composite.
         */
        constructor(
            { children, name, title, properties }?: {
                children?: BaseNode[] | undefined;
                name?: string | undefined;
                title?: string | undefined;
                properties?: any;
            },
        );
    }

    /**
     * Condition is the base class for all condition nodes. Thus, if you want to
     * create new custom condition nodes, you need to inherit from this class.
     */
    class Condition extends BaseNode {
        /**
         * Creates an instance of Condition.
         */
        constructor(
            { name, title, properties }?: { name?: string | undefined; title?: string | undefined; properties?: any },
        );
    }

    /**
     * Decorator is the base class for all decorator nodes. Thus, if you want to
     * create new custom decorator nodes, you need to inherit from this class.
     *
     * When creating decorator nodes, you will need to propagate the tick signal
     * to the child node manually, just like the composite nodes. To do that,
     * override the `tick` method and call the `_execute` method on the child
     * node. For instance, take a look at how the Inverter node inherit this
     * class and how it call its children:
     *
     *     // Inherit from Decorator, using the util function Class.
     *     class Inverter extends b3.Decorator {
     *
     *       constructor(){
     *         super({name: 'Invereter'});
     *       }
     *
     *       tick: function(tick) {
     *         if (!this.child) {
     *           return b3.ERROR;
     *         }
     *
     *         // Propagate the tick
     *         var status = this.child._execute(tick);
     *
     *         if (status === b3.SUCCESS) {
     *           status = b3.FAILURE;
     *         } else if (status === b3.FAILURE) {
     *           status = b3.SUCCESS;
     *         }
     *
     *         return status;
     *       }
     *     });
     */
    class Decorator extends BaseNode {
        /**
         * Creates an instance of Decorator.
         */
        constructor(
            { child, name, title, properties }?: {
                child?: BaseNode | undefined;
                name?: string | undefined;
                title?: string | undefined;
                properties?: any;
            },
        );
    }

    /**
     * A new Tick object is instantiated every tick by BehaviorTree. It is passed
     * as parameter to the nodes through the tree during the traversal.
     *
     * The role of the Tick class is to store the instances of tree, debug,
     * target and blackboard. So, all nodes can access these informations.
     *
     * For internal uses, the Tick also is useful to store the open node after
     * the tick signal, in order to let `BehaviorTree` to keep track and close
     * them when necessary.
     *
     * This class also makes a bridge between nodes and the debug, passing the
     * node state to the debug if the last is provided.
     */
    class Tick {
        /**
         * Initialization method.
         */
        constructor();

        /**
         * Called when entering a node (called by BaseNode).
         */
        _enterNode(node: any): void;

        /**
         * Callback when opening a node (called by BaseNode).
         */
        _openNode(node: any): void;

        /**
         * Callback when ticking a node (called by BaseNode).
         */
        _tickNode(node: any): void;

        /**
         * Callback when closing a node (called by BaseNode).
         */
        _closeNode(node: any): void;

        /**
         * Callback when exiting a node (called by BaseNode).
         */
        _exitNode(node: any): void;
    }

    /**
     * This action node returns `ERROR` always.
     */
    class Error extends Action {
        /**
         * Creates an instance of Error.
         */
        constructor();

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * This action node returns `FAILURE` always.
     */
    class Failer extends Action {
        /**
         * Creates an instance of Failer.
         */
        constructor();

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * This action node returns RUNNING always.
     */
    class Runner extends Action {
        /**
         * Creates an instance of Runner.
         */
        constructor();

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * This action node returns `SUCCESS` always.
     */
    class Succeeder extends Action {
        /**
         * Creates an instance of Succeeder.
         */
        constructor();

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * Wait a few seconds.
     */
    class Wait extends Action {
        /**
         * Creates an instance of Wait.
         */
        constructor({ milliseconds }?: { milliseconds?: number | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * MemPriority is similar to Priority node, but when a child returns a
     * `RUNNING` state, its index is recorded and in the next tick the,
     * MemPriority calls the child recorded directly, without calling previous
     * children again.
     */
    class MemPriority extends Composite {
        /**
         * Creates an instance of MemPriority.
         */
        constructor({ children }?: { children?: BaseNode[] | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * MemSequence is similar to Sequence node, but when a child returns a
     * `RUNNING` state, its index is recorded and in the next tick the
     * MemPriority call the child recorded directly, without calling previous
     * children again.
     */
    class MemSequence extends Composite {
        /**
         * Creates an instance of MemSequence.
         */
        constructor({ children }?: { children?: BaseNode[] | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * Priority ticks its children sequentially until one of them returns
     * `SUCCESS`, `RUNNING` or `ERROR`. If all children return the failure state,
     * the priority also returns `FAILURE`.
     */
    class Priority extends Composite {
        /**
         * Creates an instance of Priority.
         */
        constructor({ children }?: { children?: BaseNode[] | undefined });

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * The Sequence node ticks its children sequentially until one of them
     * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the
     * success state, the sequence also returns `SUCCESS`.
     */
    class Sequence extends Composite {
        /**
         * Creates an instance of Sequence.
         */
        constructor({ children }?: { children?: BaseNode[] | undefined });

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * The Inverter decorator inverts the result of the child, returning `SUCCESS`
     * for `FAILURE` and `FAILURE` for `SUCCESS`.
     */
    class Inverter extends Decorator {
        /**
         * Creates an instance of Inverter.
         */
        constructor({ child }?: { child?: BaseNode | undefined });

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * This decorator limit the number of times its child can be called. After a
     * certain number of times, the Limiter decorator returns `FAILURE` without
     * executing the child.
     */
    class Limiter extends Decorator {
        /**
         * Creates an instance of Limiter.
         *
         * Settings parameters:
         *
         * - **maxLoop** (*Integer*) Maximum number of repetitions.
         * - **child** (*BaseNode*) The child node.
         */
        constructor({ child, maxLoop }?: { child?: BaseNode | undefined; maxLoop?: number | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * The MaxTime decorator limits the maximum time the node child can execute.
     * Notice that it does not interrupt the execution itself (i.e., the child
     * must be non-preemptive), it only interrupts the node after a `RUNNING`
     * status.
     */
    class MaxTime extends Decorator {
        /**
         * Creates an instance of MaxTime.
         *
         * - **maxTime** (*Integer*) Maximum time a child can execute.
         * - **child** (*BaseNode*) The child node.
         */
        constructor({ maxTime, child }?: { maxTime?: number | undefined; child?: BaseNode | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * RepeatUntilFailure is a decorator that repeats the tick signal until the
     * node child returns `FAILURE`, `RUNNING` or `ERROR`. Optionally, a maximum
     * number of repetitions can be defined.
     */
    class RepeatUntilFailure extends Decorator {
        /**
         * Creates an instance of RepeatUntilFailure.
         *
         * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
         * - **child** (*BaseNode*) The child node.
         */
        constructor({ maxLoop, child }?: { maxLoop?: number | undefined; child?: BaseNode | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * RepeatUntilSuccess is a decorator that repeats the tick signal until the
     * node child returns `SUCCESS`, `RUNNING` or `ERROR`. Optionally, a maximum
     * number of repetitions can be defined.
     */
    class RepeatUntilSuccess extends Decorator {
        /**
         * Creates an instance of RepeatUntilSuccess.
         *
         * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
         * - **child** (*BaseNode*) The child node.
         */
        constructor({ maxLoop, child }?: { maxLoop?: number | undefined; child?: BaseNode | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    /**
     * Repeater is a decorator that repeats the tick signal until the child node
     * return `RUNNING` or `ERROR`. Optionally, a maximum number of repetitions
     * can be defined.
     */
    class Repeater extends Decorator {
        /**
         * Creates an instance of MaxTime.
         *
         * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
         * - **child** (*BaseNode*) The child node.
         */
        constructor({ maxLoop, child }?: { maxLoop?: number | undefined; child?: BaseNode | undefined });

        /**
         * Open method.
         */
        open(tick: Tick): void;

        /**
         * Tick method.
         */
        tick(tick: Tick): number;
    }

    const VERSION: string;
    const SUCCESS: number;
    const FAILURE: number;
    const RUNNING: number;
    const ERROR: number;
    const COMPOSITE: string;
    const DECORATOR: string;
    const ACTION: string;
    const CONDITION: string;
}
