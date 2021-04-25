'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledComponents = require('styled-components');
var fadeIn = _interopDefault(require('react-animations/lib/fade-in'));
var fadeInLeft = _interopDefault(require('react-animations/lib/fade-in-left'));
var fadeInRight = _interopDefault(require('react-animations/lib/fade-in-right'));
var slideInLeft = _interopDefault(require('react-animations/lib/slide-in-left'));
var slideInRight = _interopDefault(require('react-animations/lib/slide-in-right'));
var bounceInLeft = _interopDefault(require('react-animations/lib/bounce-in-left'));
var bounceInRight = _interopDefault(require('react-animations/lib/bounce-in-right'));
var React = require('react');
var React__default = _interopDefault(React);
var reactIntersectionObserver = require('react-intersection-observer');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var translate3d = function translate3d(a, b, c) {
  return "translate3d(" + a + ", " + b + ", " + c + ")";
};

var fadeInUp = {
  from: {
    opacity: 0,
    transform: /*#__PURE__*/translate3d(0, '50px', 0)
  },
  to: {
    opacity: 1,
    transform: 'none'
  }
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

(function (Animation) {
  Animation["FadeInUp"] = "fade-in-up";
  Animation["FadeIn"] = "fade-in";
  Animation["SlideInLeft"] = "slide-in-left";
  Animation["SlideInRight"] = "slide-in-right";
  Animation["FadeInLeft"] = "fade-in-left";
  Animation["FadeInRight"] = "fade-in-right";
  Animation["BounceInLeft"] = "bounce-in-left";
  Animation["BounceInRight"] = "bounce-in-right";
})(exports.Animation || (exports.Animation = {}));

var RevealGlobalStyles = /*#__PURE__*/styledComponents.createGlobalStyle(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n\n  .", " {\n    animation: ", " 500ms;\n  } \n  \n  .", " {\n    animation: ", " 500ms;\n  }\n  \n  .", " {\n    animation: ", " 500ms;\n  }\n  \n  .", " {\n    animation: ", " 500ms;\n  }\n\n  .", " {\n    animation: ", " 500ms;\n  }\n\n  .", " {\n    animation: ", " 500ms;\n  }\n\n  .", " {\n    animation: ", " 1250ms;\n  }\n\n  .", " {\n    animation: ", " 1250ms;\n  }\n"])), exports.Animation.FadeInUp, /*#__PURE__*/styledComponents.keyframes(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), fadeInUp), exports.Animation.FadeIn, /*#__PURE__*/styledComponents.keyframes(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), fadeIn), exports.Animation.SlideInLeft, /*#__PURE__*/styledComponents.keyframes(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), slideInLeft), exports.Animation.SlideInRight, /*#__PURE__*/styledComponents.keyframes(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), slideInRight), exports.Animation.FadeInLeft, /*#__PURE__*/styledComponents.keyframes(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), fadeInLeft), exports.Animation.FadeInRight, /*#__PURE__*/styledComponents.keyframes(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), fadeInRight), exports.Animation.BounceInLeft, /*#__PURE__*/styledComponents.keyframes(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), bounceInLeft), exports.Animation.BounceInRight, /*#__PURE__*/styledComponents.keyframes(_templateObject9 || (_templateObject9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["", ""])), bounceInRight));

(function (RevealMode) {
  RevealMode[RevealMode["Clone"] = 0] = "Clone";
  RevealMode[RevealMode["Wrap"] = 1] = "Wrap";
})(exports.RevealMode || (exports.RevealMode = {}));

var Reveal = function Reveal(_ref) {
  var children = _ref.children,
      onShowDone = _ref.onShowDone,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? exports.RevealMode.Wrap : _ref$mode,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? exports.Animation.FadeInUp : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      debugName = _ref.debugName,
      style = _ref.style,
      wait = _ref.wait,
      onEnterView = _ref.onEnterView;

  var _useInView = reactIntersectionObserver.useInView({
    triggerOnce: true
  }),
      ref = _useInView[0],
      inView = _useInView[1];

  var _useState = React.useState(false),
      show = _useState[0],
      setShow = _useState[1];

  React.useEffect(function () {
    if (debugName) {
      console.log('Debugging', debugName);
    }

    if (inView) {
      onEnterView && onEnterView();

      if (wait !== true) {
        if (debugName) {
          console.log(debugName + " is in view");
        }

        setTimeout(function () {
          setShow(true);
          onShowDone && onShowDone();

          if (debugName) {
            console.log("showing " + debugName);
          }
        }, delay);
      }
    }
  }, [inView, wait]);
  var className = show ? animation : children.props ? children.props.className : '';
  var extraProps = {
    className: className,
    style: _extends({
      visibility: show ? 'visible' : 'hidden'
    }, style),
    ref: ref
  };

  if (mode === exports.RevealMode.Clone) {
    return React__default.cloneElement(children, extraProps);
  }

  return React__default.createElement("div", Object.assign({}, extraProps), children);
};

var AnimatedTitle = function AnimatedTitle(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 100 : _ref$delay,
      _ref$spaceBetweenWord = _ref.spaceBetweenWords,
      spaceBetweenWords = _ref$spaceBetweenWord === void 0 ? 8 : _ref$spaceBetweenWord,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "delay", "spaceBetweenWords"]);

  var titleStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  };
  var wordStyles = {
    marginRight: spaceBetweenWords
  };
  return React__default.createElement("div", {
    style: titleStyles
  }, children.split(' ').map(function (word, index) {
    return React__default.createElement(Reveal, {
      key: index,
      delay: index * delay,
      style: wordStyles
    }, React__default.createElement("div", Object.assign({}, rest), word));
  }));
};

var RevealContext = /*#__PURE__*/React__default.createContext(null);

var RevealProvider = function RevealProvider(_ref) {
  var children = _ref.children,
      _ref$delayBetween = _ref.delayBetween,
      delayBetween = _ref$delayBetween === void 0 ? 200 : _ref$delayBetween,
      _ref$initialDelay = _ref.initialDelay,
      initialDelay = _ref$initialDelay === void 0 ? 0 : _ref$initialDelay,
      _ref$disableDelay = _ref.disableDelay,
      disableDelay = _ref$disableDelay === void 0 ? false : _ref$disableDelay;

  var _useState = React.useState(0),
      lastIndex = _useState[0],
      setLastIndex = _useState[1];

  var _useState2 = React.useState(null),
      firstIndex = _useState2[0],
      setFirstIndex = _useState2[1];

  return React__default.createElement(RevealContext.Provider, {
    value: {
      lastIndex: lastIndex,
      firstIndex: firstIndex,
      setFirstIndex: setFirstIndex,
      setLastIndex: setLastIndex,
      delayBetween: delayBetween,
      initialDelay: initialDelay,
      disableDelay: disableDelay
    }
  }, children);
};

var SequenceElement = function SequenceElement(_ref) {
  var index = _ref.index,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["index", "children"]);

  var revealContext = React.useContext(RevealContext);

  var config = _extends({}, revealContext, rest);

  var delayBetween = config.delayBetween,
      initialDelay = config.initialDelay,
      disableDelay = config.disableDelay,
      mode = config.mode,
      animation = config.animation,
      lastIndex = config.lastIndex,
      setLastIndex = config.setLastIndex,
      firstIndex = config.firstIndex,
      setFirstIndex = config.setFirstIndex;
  var shouldWait = firstIndex === 0;
  var wait = shouldWait ? index > lastIndex : false;
  var isFirstElement = index === 0;
  var firstElementDelay = initialDelay !== undefined ? initialDelay : 0;
  var shouldDisableDelay = disableDelay || firstIndex !== 0;
  var finalDelay = disableDelay ? 0 : isFirstElement ? firstElementDelay : delayBetween;
  return React__default.createElement(Reveal, {
    wait: wait,
    mode: mode,
    animation: animation,
    onShowDone: function onShowDone() {
      return setLastIndex(index + 1);
    },
    onEnterView: function onEnterView() {
      if (firstIndex === null) {
        setFirstIndex(index);
      }
    },
    delay: shouldDisableDelay ? 0 : finalDelay,
    key: index
  }, children);
};

var RevealElements = function RevealElements(_ref) {
  var elements = _ref.elements,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["elements", "children"]);

  return React__default.createElement(RevealProvider, Object.assign({}, rest), elements.map(function (elem, index) {
    return React__default.createElement(SequenceElement, {
      index: index,
      key: index
    }, children(elem, index));
  }));
};

var RevealChildren = function RevealChildren(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(RevealProvider, Object.assign({}, rest), React__default.Children.map(children, function (child, index) {
    return React__default.createElement(SequenceElement, {
      index: index,
      key: index
    }, child);
  }));
};

exports.AnimatedTitle = AnimatedTitle;
exports.Reveal = Reveal;
exports.RevealChildren = RevealChildren;
exports.RevealElements = RevealElements;
exports.RevealGlobalStyles = RevealGlobalStyles;
exports.RevealProvider = RevealProvider;
exports.SequenceElement = SequenceElement;
exports.fadeInUp = fadeInUp;
//# sourceMappingURL=react-genie.cjs.development.js.map
