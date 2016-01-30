var ReactElement = require('react/lib/ReactElement');
var ReactUpdates = require('react/lib/ReactUpdates');
var ReactInstanceMap = require('react/lib/ReactInstanceMap');
var assign = require('react/lib/Object.assign');

function setProps(publicInstance, partialProps) {
  var internalInstance = ReactInstanceMap.get(publicInstance);
  var element = internalInstance._pendingElement || internalInstance._currentElement;

	var props = assign({}, element.props, partialProps);

  internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element, props);

  ReactUpdates.enqueueUpdate(internalInstance);
}

module.exports = setProps;
