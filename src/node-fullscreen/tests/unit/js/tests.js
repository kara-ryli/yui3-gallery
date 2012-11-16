YUI.add('module-tests', function (Y) {

    var suite = new Y.Test.Suite('gallery-node-fullscreen');

    suite.add(new Y.Test.Case({
        name: 'Automated Tests',
        'should add full screen methods': function () {
            var NodeProto = Y.Node.prototype;
            Y.Assert.isBoolean(Y.Node.SUPPORTS_FULLSCREEN);
            Y.Assert.isFunction(NodeProto.isFullScreen);
            Y.Assert.isFunction(NodeProto.canGoFullScreen);
            Y.Assert.isFunction(NodeProto.requestFullScreen);
            Y.Assert.isFunction(NodeProto.cancelFullScreen);
            Y.Assert.isNotUndefined(Y.Node.DOM_EVENTS.fullscreenchange);
        }
    }));

    Y.Test.Runner.add(suite);

},'', { requires: [ 'test' ] });
