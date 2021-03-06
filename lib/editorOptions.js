"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editorOptions = [
  "minLines",
  "maxLines",
  "readOnly",
  "highlightActiveLine",
  "tabSize",
  "enableBasicAutocompletion",
  "enableLiveAutocompletion",
  "enableSnippets"
];
exports.editorOptions = editorOptions;
var editorEvents = [
  "onChange",
  "onFocus",
  "onInput",
  "onBlur",
  "onCopy",
  "onPaste",
  "onSelectionChange",
  "onCursorChange",
  "onScroll",
  "handleOptions",
  "updateRef"
];
exports.editorEvents = editorEvents;
var getAceInstance = function() {
  var ace;
  // Fallback for ace.require when vanilla ACE is hosted over a CDN
  if (window.ace) {
    ace = window.ace;
    ace.acequire = window.ace.require || window.ace.acequire;
  } else {
    ace = require("ace-builds");
  }
  return ace;
};
exports.getAceInstance = getAceInstance;
var debounce = function(fn, delay) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
};
exports.debounce = debounce;
//# sourceMappingURL=editorOptions.js.map
