declare module L {

    export interface ClassExtendOptions {
        /**
          * options is a special property that unlike other objects that you pass 
          * to extend will be merged with the parent one instead of overriding it 
          * completely, which makes managing configuration of objects and default 
          * values convenient.
          */
        options?: any;

        /**
          * includes is a special class property that merges all specified objects 
          * into the class (such objects are called mixins). A good example of this
          * is L.Mixin.Events that event-related methods like on, off and fire 
          * to the class.
          */
        includes?: any;

        /**
          * statics is just a convenience property that injects specified object 
          * properties as the static properties of the class, useful for defining 
          * constants.
          */
        static?: any;
    }

    /**
      * L.Class powers the OOP facilities of Leaflet and is used to create
      * almost all of the Leaflet classes documented.
      */
    export class Class {

        /**
          * You use L.Class.extend to define new classes, but you can use the
          * same method on any class to inherit from it.
          */
        static extend(options: ClassExtendOptions): any;

        /**
          * You can also use the following shortcut when you just need to make
          * one additional method call.
          */
        static addInitHook(methodName: string, ...args: any[]): void;
    }

} 
 
 
