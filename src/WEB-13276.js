// WEB-13276: JSDoc parameter info: @param that declares a child property of another @param leads to another additional parameter info line
// ====================================================================================================================

// Place the cursor between the () and do a View -> "Parameter Info" (shortcut Windows/Linux: Ctrl+P, OSX: Meta+P)
_.debounce();

// Notice that WebStorm (besides issue #1) returns 2 flavors of the same method:
//
//                                                 _.debounce();
//                                                           |
//  +--------------------------------------------------------+------------------------------------------------------+
//  | Note, [Function] func, [number] wait, [Object, optional] options                                              |
//  | [Function] func, [number] wait, [{leading?: boolean, maxWait?: number, trailing?: boolean}, optional] options |
//  +---------------------------------------------------------------------------------------------------------------+
//
//
// As it turns out the JSDoc contains 3 @param's to declare child properties of the "options" parameter object:
//
//  /**
//    * Creates a function that will delay the execution of `func` until after
//    * `wait` milliseconds have elapsed since the last time it was invoked.
//    * Provide an options object to indicate that `func` should be invoked on
//    * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
//    * to the debounced function will return the result of the last `func` call.
//    *
//    * Note: If `leading` and `trailing` options are `true` `func` will be called
//    * on the trailing edge of the timeout only if the the debounced function is
//    * invoked more than once during the `wait` timeout.
//    *
//    * @static
//    * @memberOf _
//    * @category Functions
//    * @param {Function} func The function to debounce.
//    * @param {number} wait The number of milliseconds to delay.
//    * @param {object} [options] The options object.
//    * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
//    * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
//    * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
//    * @returns {Function} Returns the new debounced function.
//    * @example
//    * ...
//    */
