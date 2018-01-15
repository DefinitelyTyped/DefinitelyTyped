declare namespace pc {

    /**
     * @private
     * @function
     * @name pc.inherits
     * @description Implementation of inheritance for JavaScript objects
     * e.g. Class can access all of Base's function prototypes
     * The super classes prototype is available on the derived class as _super
     * @param {Function} Self Constructor of derived class
     * @param {Function} Super Constructor of base class
     * @returns {Function} New instance of Self which inherits from Super
     * @example
     * Base = function () {};
     * Base.prototype.fn = function () {
     *   console.log('base');
     * };
     * Class = function () {}
     * Class = pc.inherits(Class, Base);
     * Class.prototype.fn = function () {
     *   // Call overridden method
     *   Class._super.fn();
     *   console.log('class');
     * };
     *
     * var c = new Class();
     * c.fn(); // prints 'base' then 'class'
     */
    function inherits<T extends Function, U extends Function>(Self: T, Super: U): T & U;
}
