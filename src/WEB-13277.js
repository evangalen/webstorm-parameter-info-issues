// WEB-13277: JSDoc parameter info: @param's for non existing function arguments leads to another additional parameter info line
// ====================================================================================================================

// Place the cursor between the () and do a View -> "Parameter Info" (shortcut Windows/Linux: Ctrl+P, OSX: Meta+P)
_.template();

// Notice that WebStorm (besides issue #1 and #2) returns 2 flavors of the same method, one that contains "resourceURL"
// and "variable" and another one that doesn't.
//
//                                                             _.template();
//                                                                       |
//  +--------------------------------------------------------------------+------------------------------------------------------------------+
//  | Note, http, http, [string] text, [Object] data, [Object, optional] options, [string, optional] sourceURL, [string, optional] variable |
//  | [string] text, [Object] data, [{escape?: RegExp, evaluate?: RegExp, imports?: Object, interpolate?: RegExp}, optional] options        |
//  +---------------------------------------------------------------------------------------------------------------------------------------+
//
//
// As it turns out the "resourceURL" and "variable" actually doesn't exist on the function.
// So maybe that's causing (optionally in combination with issue #1 and / or #2) the 2 variations:
//
//  /**
//    * A micro-templating method that handles arbitrary delimiters, preserves
//    * whitespace, and correctly escapes quotes within interpolated code.
//    *
//    * Note: In the development build, `_.template` utilizes sourceURLs for easier
//    * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
//    *
//    * For more information on precompiling templates see:
//    * http://lodash.com/custom-builds
//    *
//    * For more information on Chrome extension sandboxes see:
//    * http://developer.chrome.com/stable/extensions/sandboxingEval.html
//    *
//    * @static
//    * @memberOf _
//    * @category Utilities
//    * @param {string} text The template text.
//    * @param {Object} data The data object used to populate the text.
//    * @param {Object} [options] The options object.
//    * @param {RegExp} [options.escape] The "escape" delimiter.
//    * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
//    * @param {Object} [options.imports] An object to import into the template as local variables.
//    * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
//    * @param {string} [sourceURL] The sourceURL of the template's compiled source.
//    * @param {string} [variable] The data object variable name.
//    * @returns {Function|string} Returns a compiled function when no `data` object
//    *  is given, else it returns the interpolated text.
//    * @example
//    * ...
//    */
