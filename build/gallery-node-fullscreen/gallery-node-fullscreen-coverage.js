if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-node-fullscreen/gallery-node-fullscreen.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-node-fullscreen/gallery-node-fullscreen.js",
    code: []
};
_yuitest_coverage["build/gallery-node-fullscreen/gallery-node-fullscreen.js"].code=["YUI.add('gallery-node-fullscreen', function (Y, NAME) {","","var YNode = Y.Node,","  YArray = Y.Array,","  YEvent = Y.Event,","  doc = Y.config.doc,","  FULL_SCREEN_EVENT = \"fullscreenchange\",","  FUNCTION = \"function\";","","function returnTrue() {","    return true;","}","function returnFalse() {","    return false;","}","function emptyFn() {","}","","function fixEventArgs(args, evt) {","  var a = new YArray(args, 0, true);","  a[0] = evt;","  return a;","}","","function addFullScreenMethods(obj) {","  var test = obj.test(),","    eventName = obj.event;","","  if (test) {","    YArray.each([\"isFullScreen\", \"canGoFullScreen\", \"requestFullScreen\", \"cancelFullScreen\"], function (method) {","      var fnName = obj[method];","      YNode.addMethod(method, typeof fnName === FUNCTION ?","          function (node) { return fnName.call(node); } :","          function (node) {","              if (typeof node[fnName] === FUNCTION) {","                  return node[fnName]();","              }","          });","    });","    eventName = obj.event;","    // if the event is the standard event, just enabled it","    if (eventName === FULL_SCREEN_EVENT) {","      YNode.DOM_EVENTS[FULL_SCREEN_EVENT] = 1;","    // otherwise, if the event exists, translate the default DOM event into a the standard","    } else if (eventName) {","      YNode.DOM_EVENTS[FULL_SCREEN_EVENT] = Y.Env.evt.plugins[FULL_SCREEN_EVENT] = {","        on: function () {","          return YEvent._attach(fixEventArgs(arguments, eventName));","        },","        detach: function () {","          return YEvent.detach.apply(YEvent, fixEventArgs(arguments, eventName));","        }","      };","    }","  }","  return test;","}","","/**","If the current node is full sceen.","@method isFullScreen","@return {Boolean} Whether or not the element is full screen","**/","/**","If the current node can enter full sceen.","@method canGoFullScreen","@return {Boolean} Whether or not the element can go full screen","**/","/**","Attempts to enter full screen mode.","@method requestFullScreen","**/","/**","Attempts to exit full screen mode.","@method cancelFullScreen","**/","/**","Whether or not full screen is supported.","@property SUPPORTS_FULL_SCREEN","@type Boolean","@static","**/","/**"," Fullscreen change event."," @event fullscreenchange"," @param type {string} 'fullscreenchange'"," @param fn {function} the callback to execute"," @param context optional context object"," @param args 0..n additional arguments to provide to the listener."," @return {EventHandle} the detach handle"," **/","","YNode.SUPPORTS_FULLSCREEN = YArray.some([","  // spec","  {","    test: function () {","      return typeof doc.cancelFullScreen === FUNCTION;","    },","    isFullScreen: function () {","      return doc.fullScreenElement === this;","    },","    canGoFullScreen: returnTrue,","    requestFullScreen: \"requestFullScreen\",","    cancelFullScreen: function () {","      doc.cancelFullScreen();","    },","    event: FULL_SCREEN_EVENT","  },","  // webkit","  {","    test: function () {","      return Y.UA.webkit >= 533;","    },","    isFullScreen: function () {","        return this.webkitDisplayingFullscreen === true;","    },","    canGoFullScreen: function () {","        // Safari only supports full screen on some elements, and other elements only some of the time.","        return this.webkitSupportsFullscreen === true;","    },","    requestFullScreen: function () {","        if (this.webkitSupportsFullscreen !== false) {","            this.webkitEnterFullscreen();","        }","    },","    cancelFullScreen: function () {","        if (this.webkitDisplayingFullscreen) {","            this.webkitExitFullscreen();","        }","    },","    event: \"webkitfullscreenchange\"","  },","  // mozilla's method","  {","    test: function () {","      return Y.UA.gecko >= 9;","    },","    isFullScreen: function () {","      return doc.mozFullScreen;","    },","    canGoFullScreen: function () {","        // only defined on iframes","        return this.mozallowfullscreen !== false;","    },","    requestFullScreen: \"mozRequestFullScreen\",","    cancelFullScreen: function () {","      doc.mozCancelFullScreen();","    },","    event: \"mozfullscreenchange\"","  }","], addFullScreenMethods);","","if (!YNode.SUPPORTS_FULLSCREEN) {","  // stub in methods to prevent errors","  addFullScreenMethods({","    test: returnTrue,","    canGoFullScreen: returnFalse,","    isFullScreen: returnFalse,","    requestFullScreen: emptyFn,","    cancelFullScreen: emptyFn","  });","}","","","}, '@VERSION@', {\"requires\": [\"event-synthetic\", \"node-base\"]});"];
_yuitest_coverage["build/gallery-node-fullscreen/gallery-node-fullscreen.js"].lines = {"1":0,"3":0,"10":0,"11":0,"13":0,"14":0,"16":0,"19":0,"20":0,"21":0,"22":0,"25":0,"26":0,"29":0,"30":0,"31":0,"32":0,"33":0,"35":0,"36":0,"40":0,"42":0,"43":0,"45":0,"46":0,"48":0,"51":0,"56":0,"93":0,"97":0,"100":0,"105":0,"112":0,"115":0,"119":0,"122":0,"123":0,"127":0,"128":0,"136":0,"139":0,"143":0,"147":0,"153":0,"155":0};
_yuitest_coverage["build/gallery-node-fullscreen/gallery-node-fullscreen.js"].functions = {"returnTrue:10":0,"returnFalse:13":0,"emptyFn:16":0,"fixEventArgs:19":0,"(anonymous 3):33":0,"}:34":0,"(anonymous 2):30":0,"on:47":0,"detach:50":0,"addFullScreenMethods:25":0,"test:96":0,"isFullScreen:99":0,"cancelFullScreen:104":0,"test:111":0,"isFullScreen:114":0,"canGoFullScreen:117":0,"requestFullScreen:121":0,"cancelFullScreen:126":0,"test:135":0,"isFullScreen:138":0,"canGoFullScreen:141":0,"cancelFullScreen:146":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-node-fullscreen/gallery-node-fullscreen.js"].coveredLines = 45;
_yuitest_coverage["build/gallery-node-fullscreen/gallery-node-fullscreen.js"].coveredFunctions = 23;
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 1);
YUI.add('gallery-node-fullscreen', function (Y, NAME) {

_yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 3);
var YNode = Y.Node,
  YArray = Y.Array,
  YEvent = Y.Event,
  doc = Y.config.doc,
  FULL_SCREEN_EVENT = "fullscreenchange",
  FUNCTION = "function";

_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 10);
function returnTrue() {
    _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "returnTrue", 10);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 11);
return true;
}
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 13);
function returnFalse() {
    _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "returnFalse", 13);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 14);
return false;
}
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 16);
function emptyFn() {
}

_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 19);
function fixEventArgs(args, evt) {
  _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "fixEventArgs", 19);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 20);
var a = new YArray(args, 0, true);
  _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 21);
a[0] = evt;
  _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 22);
return a;
}

_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 25);
function addFullScreenMethods(obj) {
  _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "addFullScreenMethods", 25);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 26);
var test = obj.test(),
    eventName = obj.event;

  _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 29);
if (test) {
    _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 30);
YArray.each(["isFullScreen", "canGoFullScreen", "requestFullScreen", "cancelFullScreen"], function (method) {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "(anonymous 2)", 30);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 31);
var fnName = obj[method];
      _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 32);
YNode.addMethod(method, typeof fnName === FUNCTION ?
          function (node) { _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "(anonymous 3)", 33);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 33);
return fnName.call(node); } :
          function (node) {
              _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "}", 34);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 35);
if (typeof node[fnName] === FUNCTION) {
                  _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 36);
return node[fnName]();
              }
          });
    });
    _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 40);
eventName = obj.event;
    // if the event is the standard event, just enabled it
    _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 42);
if (eventName === FULL_SCREEN_EVENT) {
      _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 43);
YNode.DOM_EVENTS[FULL_SCREEN_EVENT] = 1;
    // otherwise, if the event exists, translate the default DOM event into a the standard
    } else {_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 45);
if (eventName) {
      _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 46);
YNode.DOM_EVENTS[FULL_SCREEN_EVENT] = Y.Env.evt.plugins[FULL_SCREEN_EVENT] = {
        on: function () {
          _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "on", 47);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 48);
return YEvent._attach(fixEventArgs(arguments, eventName));
        },
        detach: function () {
          _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "detach", 50);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 51);
return YEvent.detach.apply(YEvent, fixEventArgs(arguments, eventName));
        }
      };
    }}
  }
  _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 56);
return test;
}

/**
If the current node is full sceen.
@method isFullScreen
@return {Boolean} Whether or not the element is full screen
**/
/**
If the current node can enter full sceen.
@method canGoFullScreen
@return {Boolean} Whether or not the element can go full screen
**/
/**
Attempts to enter full screen mode.
@method requestFullScreen
**/
/**
Attempts to exit full screen mode.
@method cancelFullScreen
**/
/**
Whether or not full screen is supported.
@property SUPPORTS_FULL_SCREEN
@type Boolean
@static
**/
/**
 Fullscreen change event.
 @event fullscreenchange
 @param type {string} 'fullscreenchange'
 @param fn {function} the callback to execute
 @param context optional context object
 @param args 0..n additional arguments to provide to the listener.
 @return {EventHandle} the detach handle
 **/

_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 93);
YNode.SUPPORTS_FULLSCREEN = YArray.some([
  // spec
  {
    test: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "test", 96);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 97);
return typeof doc.cancelFullScreen === FUNCTION;
    },
    isFullScreen: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "isFullScreen", 99);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 100);
return doc.fullScreenElement === this;
    },
    canGoFullScreen: returnTrue,
    requestFullScreen: "requestFullScreen",
    cancelFullScreen: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "cancelFullScreen", 104);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 105);
doc.cancelFullScreen();
    },
    event: FULL_SCREEN_EVENT
  },
  // webkit
  {
    test: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "test", 111);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 112);
return Y.UA.webkit >= 533;
    },
    isFullScreen: function () {
        _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "isFullScreen", 114);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 115);
return this.webkitDisplayingFullscreen === true;
    },
    canGoFullScreen: function () {
        // Safari only supports full screen on some elements, and other elements only some of the time.
        _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "canGoFullScreen", 117);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 119);
return this.webkitSupportsFullscreen === true;
    },
    requestFullScreen: function () {
        _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "requestFullScreen", 121);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 122);
if (this.webkitSupportsFullscreen !== false) {
            _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 123);
this.webkitEnterFullscreen();
        }
    },
    cancelFullScreen: function () {
        _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "cancelFullScreen", 126);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 127);
if (this.webkitDisplayingFullscreen) {
            _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 128);
this.webkitExitFullscreen();
        }
    },
    event: "webkitfullscreenchange"
  },
  // mozilla's method
  {
    test: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "test", 135);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 136);
return Y.UA.gecko >= 9;
    },
    isFullScreen: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "isFullScreen", 138);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 139);
return doc.mozFullScreen;
    },
    canGoFullScreen: function () {
        // only defined on iframes
        _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "canGoFullScreen", 141);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 143);
return this.mozallowfullscreen !== false;
    },
    requestFullScreen: "mozRequestFullScreen",
    cancelFullScreen: function () {
      _yuitest_coverfunc("build/gallery-node-fullscreen/gallery-node-fullscreen.js", "cancelFullScreen", 146);
_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 147);
doc.mozCancelFullScreen();
    },
    event: "mozfullscreenchange"
  }
], addFullScreenMethods);

_yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 153);
if (!YNode.SUPPORTS_FULLSCREEN) {
  // stub in methods to prevent errors
  _yuitest_coverline("build/gallery-node-fullscreen/gallery-node-fullscreen.js", 155);
addFullScreenMethods({
    test: returnTrue,
    canGoFullScreen: returnFalse,
    isFullScreen: returnFalse,
    requestFullScreen: emptyFn,
    cancelFullScreen: emptyFn
  });
}


}, '@VERSION@', {"requires": ["event-synthetic", "node-base"]});
