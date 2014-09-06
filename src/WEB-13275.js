// WEB-13275: JSDoc parameter info: word followed by colon (i.e. "Note:") displayed as if parameter
// ====================================================================================================================

// Place the cursor between the () and do a View -> "Parameter Info" (shortcut Windows/Linux: Ctrl+P, OSX: Meta+P)
_.parseInt();

// Notice that WebStorm return extra non-existing parameter called "Note":
//
//                 _.parseInt();
//                           |
//  +------------------------+-----------------------+
//  | Note, [string] value, [number, optional] radix |
//  +------------------------------------------------+
//
//
// As it turns out "Note" is interpreted as a parameter since its format with column in de JSDoc comment:
//
//  /**
//   * Converts the given value into an integer of the specified radix.
//   * If `radix` is `undefined` or `0` a `radix` of `10` is used unless the
//   * `value` is a hexadecimal, in which case a `radix` of `16` is used.
//   *
//   * Note: This method avoids differences in native ES3 and ES5 `parseInt`
//   * implementations. See http://es5.github.io/#E.
//   *
//   * @static
//   * @memberOf _
//   * @category Utilities
//   * @param {string} value The value to parse.
//   * @param {number} [radix] The radix used to interpret the value to parse.
//   * @returns {number} Returns the new integer value.
//   * @example
//   *
//   * _.parseInt('08');
//   * // => 8
//   */
