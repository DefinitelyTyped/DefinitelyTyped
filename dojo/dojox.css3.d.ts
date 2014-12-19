// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module dojox {
    

    module css3 {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/css3/transit.html
         *
         * Performs a transition to hide a node and show another node.
         * This module defines the transit method which is used
         * to transit the specific region of an application from 
         * one view/page to another view/page. This module relies 
         * on utilities provided by dojox/css3/transition for the 
         * transition effects.
         * 
         * @param from     
         * @param to     
         * @param options       OptionalThe argument to specify the transit effect and direction.The effect can be specified in options.transition. Thevalid values are 'slide', 'flip', 'fade', 'none'.The direction can be specified in options.reverse. If itis true, the transit effects will be conducted in thereverse direction to the default direction. Finally the durationof the transition can be overridden by setting the duration property.     
         */
        interface transit{(from: HTMLElement, to: HTMLElement, options?: Object): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/css3/transition.html
         *
         * This module defines the transition utilities which can be used
         * to perform transition effects based on the CSS Transition standard.
         * 
         * @param args       OptionalThe arguments which will be mixed into this transition object.     
         */
        interface transition{(args?: Object): void}
        module transition {
            /**
             * 
             */
            var autoClear: boolean
            /**
             * 
             */
            var deferred: Object
            /**
             * 
             */
            var direction: number
            /**
             * 
             */
            var duration: number
            /**
             * 
             */
            var endState: Object
            /**
             * 
             */
            var in_: boolean
            /**
             * 
             */
            var node: Object
            /**
             * 
             */
            var playing: Object
            /**
             * 
             */
            var startState: Object
            /**
             * The callback which will be called right after the end
             * of the transition effect and before the final state is
             * cleared.
             * 
             */
            interface beforeClear{(): void}
            /**
             * The callback which will be called right before the start
             * of the transition effect.
             * 
             */
            interface beforeStart{(): void}
            /**
             * The method which plays multiple transitions one by one.
             * 
             * @param args The array of transition objects which will be played in a chain.             
             */
            interface chainedPlay{(args: any[]): void}
            /**
             * Method to clear the state after a transition.
             * 
             */
            interface clear{(): void}
            /**
             * Method which is used to create the transition object of fade effect.
             * 
             * @param node The node that the fade transition effect will be applied on.             
             * @param config The cofig arguments which will be mixed into this transition object.             
             */
            interface fade{(node: any, config: any): void}
            /**
             * Method which is used to create the transition object of flip effect.
             * 
             * @param node The node that the flip transition effect will be applied on.             
             * @param config The cofig arguments which will be mixed into this transition object.             
             */
            interface flip{(node: any, config: any): void}
            /**
             * 
             * @param nodes             
             */
            interface getWaitingList{(nodes: any[]): any}
            /**
             * The method which groups multiple transitions and plays 
             * them together.
             * 
             * @param args The array of transition objects which will be played together.             
             */
            interface groupedPlay{(args: any[]): any}
            /**
             * Method to initialize the state for a transition.
             * 
             */
            interface initState{(): void}
            /**
             * Plays the transition effect defined by this transition object.
             * 
             */
            interface play{(): void}
            /**
             * Method which is used to create the transition object of a slide effect.
             * 
             * @param node The node that the slide transition effect will be applied on.             
             * @param config The cofig arguments which will be mixed into this transition object.             
             */
            interface slide{(node: any, config: any): void}
            /**
             * Method to start the transition.
             * 
             */
            interface start{(): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/css3/transition.endState.html
             *
             * 
             */
            interface endState {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/css3/transition.startState.html
             *
             * 
             */
            interface startState {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/css3/transition.playing.html
             *
             * 
             */
            interface playing {
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/css3/fx.html
         *
         * Utilities for animation effects.
         * 
         */
        interface fx {
            /**
             * Returns an animation that does a "bounce" effect on args.node.
             * Vertical bounce animation. The scaleX, scaleY deformation and the
             * jump height (args.jumpHeight) can be specified.
             * 
             * @param args             
             */
            bounce(args: Object): any;
            /**
             * Returns an animation that expands args.node.
             * Scales an element to args.endScale.
             * 
             * @param args             
             */
            expand(args: Object): any;
            /**
             * Returns an animation that flips an element around his y axis.
             * Flips an element around his y axis. The default is a 360deg flip
             * but it is possible to run a partial flip using args.whichAnims.
             * 
             * @param args             
             */
            flip(args: Object): any;
            /**
             * Returns an animation that will do a "puff" effect on the given node.
             * Fades out an element and scales it to args.endScale.
             * 
             * @param args             
             */
            puff(args: Object): any;
            /**
             * Returns an animation that rotates an element.
             * Rotates an element from args.startAngle to args.endAngle.
             * 
             * @param args             
             */
            rotate(args: Object): any;
            /**
             * Returns an animation that shrinks args.node.
             * Shrinks an element, same as expand({ node: node, endScale: .01 });
             * 
             * @param args             
             */
            shrink(args: Object): any;
        }
    }

}

declare module "dojox/css3/transit" {
    var exp: dojox.css3.transit
    export=exp;
}
declare module "dojox/css3/transition" {
    var exp: dojox.css3.transition
    export=exp;
}
declare module "dojox/css3/transition.endState" {
    var exp: dojox.css3.transition.endState
    export=exp;
}
declare module "dojox/css3/transition.playing" {
    var exp: dojox.css3.transition.playing
    export=exp;
}
declare module "dojox/css3/transition.startState" {
    var exp: dojox.css3.transition.startState
    export=exp;
}
declare module "dojox/css3/fx" {
    var exp: dojox.css3.fx
    export=exp;
}
