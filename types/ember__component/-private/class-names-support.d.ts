import Mixin from "@ember/object/mixin";

interface ClassNamesSupport {
    /**
     * A list of properties of the view to apply as class names. If the property is a string value,
     * the value of that string will be applied as a class name.
     *
     * If the value of the property is a Boolean, the name of that property is added as a dasherized
     * class name.
     *
     * If you would prefer to use a custom value instead of the dasherized property name, you can
     * pass a binding like this: `classNameBindings: ['isUrgent:urgent']`
     *
     * This list of properties is inherited from the component's superclasses as well.
     */
    classNameBindings: string[];
    /**
     * Standard CSS class names to apply to the view's outer element. This
     * property automatically inherits any class names defined by the view's
     * superclasses as well.
     */
    classNames: string[];
}
declare const ClassNamesSupport: Mixin<ClassNamesSupport>;
export default ClassNamesSupport;
