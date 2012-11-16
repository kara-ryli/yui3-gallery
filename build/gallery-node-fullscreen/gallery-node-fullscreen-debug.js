YUI.add('gallery-node-fullscreen', function (Y, NAME) {

var YNode = Y.Node,
  YArray = Y.Array,
  YEvent = Y.Event,
  doc = Y.config.doc,
  FULL_SCREEN_EVENT = "fullscreenchange",
  FUNCTION = "function";

function returnTrue() {
    return true;
}
function returnFalse() {
    return false;
}
function emptyFn() {
}

function fixEventArgs(args, evt) {
  var a = new YArray(args, 0, true);
  a[0] = evt;
  return a;
}

function addFullScreenMethods(obj) {
  var test = obj.test(),
    eventName = obj.event;

  if (test) {
    YArray.each(["isFullScreen", "canGoFullScreen", "requestFullScreen", "cancelFullScreen"], function (method) {
      var fnName = obj[method];
      YNode.addMethod(method, typeof fnName === FUNCTION ?
          function (node) { return fnName.call(node); } :
          function (node) {
              if (typeof node[fnName] === FUNCTION) {
                  return node[fnName]();
              }
          });
    });
    eventName = obj.event;
    // if the event is the standard event, just enabled it
    if (eventName === FULL_SCREEN_EVENT) {
      YNode.DOM_EVENTS[FULL_SCREEN_EVENT] = 1;
    // otherwise, if the event exists, translate the default DOM event into a the standard
    } else if (eventName) {
      YNode.DOM_EVENTS[FULL_SCREEN_EVENT] = Y.Env.evt.plugins[FULL_SCREEN_EVENT] = {
        on: function () {
          return YEvent._attach(fixEventArgs(arguments, eventName));
        },
        detach: function () {
          return YEvent.detach.apply(YEvent, fixEventArgs(arguments, eventName));
        }
      };
    }
  }
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

YNode.SUPPORTS_FULLSCREEN = YArray.some([
  // spec
  {
    test: function () {
      return typeof doc.cancelFullScreen === FUNCTION;
    },
    isFullScreen: function () {
      return doc.fullScreenElement === this;
    },
    canGoFullScreen: returnTrue,
    requestFullScreen: "requestFullScreen",
    cancelFullScreen: function () {
      doc.cancelFullScreen();
    },
    event: FULL_SCREEN_EVENT
  },
  // webkit
  {
    test: function () {
      return Y.UA.webkit >= 533;
    },
    isFullScreen: function () {
        return this.webkitDisplayingFullscreen === true;
    },
    canGoFullScreen: function () {
        // Safari only supports full screen on some elements, and other elements only some of the time.
        return this.webkitSupportsFullscreen === true;
    },
    requestFullScreen: function () {
        if (this.webkitSupportsFullscreen !== false) {
            this.webkitEnterFullscreen();
        }
    },
    cancelFullScreen: function () {
        if (this.webkitDisplayingFullscreen) {
            this.webkitExitFullscreen();
        }
    },
    event: "webkitfullscreenchange"
  },
  // mozilla's method
  {
    test: function () {
      return Y.UA.gecko >= 9;
    },
    isFullScreen: function () {
      return doc.mozFullScreen;
    },
    canGoFullScreen: function () {
        // only defined on iframes
        return this.mozallowfullscreen !== false;
    },
    requestFullScreen: "mozRequestFullScreen",
    cancelFullScreen: function () {
      doc.mozCancelFullScreen();
    },
    event: "mozfullscreenchange"
  }
], addFullScreenMethods);

if (!YNode.SUPPORTS_FULLSCREEN) {
  // stub in methods to prevent errors
  addFullScreenMethods({
    test: returnTrue,
    canGoFullScreen: returnFalse,
    isFullScreen: returnFalse,
    requestFullScreen: emptyFn,
    cancelFullScreen: emptyFn
  });
}


}, '@VERSION@', {"requires": ["event-synthetic", "node-base"]});
