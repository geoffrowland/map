((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([["index"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*global require,window */

var _GoogleAnalytics = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/Core/GoogleAnalytics */ "./node_modules/terriajs/lib/Core/GoogleAnalytics.js"));

var _ShareDataService = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/Models/ShareDataService */ "./node_modules/terriajs/lib/Models/ShareDataService.js"));

var _raiseErrorToUser = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/Models/raiseErrorToUser */ "./node_modules/terriajs/lib/Models/raiseErrorToUser.js"));

var _registerAnalytics = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/Models/registerAnalytics */ "./node_modules/terriajs/lib/Models/registerAnalytics.js"));

var _registerCatalogMembers = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/Models/registerCatalogMembers */ "./node_modules/terriajs/lib/Models/registerCatalogMembers.js"));

var _registerCustomComponentTypes = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/Custom/registerCustomComponentTypes */ "./node_modules/terriajs/lib/ReactViews/Custom/registerCustomComponentTypes.js"));

var _Terria = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/Models/Terria */ "./node_modules/terriajs/lib/Models/Terria.js"));

var _updateApplicationOnHashChange = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ViewModels/updateApplicationOnHashChange */ "./node_modules/terriajs/lib/ViewModels/updateApplicationOnHashChange.js"));

var _updateApplicationOnMessageFromParentWindow = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ViewModels/updateApplicationOnMessageFromParentWindow */ "./node_modules/terriajs/lib/ViewModels/updateApplicationOnMessageFromParentWindow.js"));

var _ViewState = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViewModels/ViewState */ "./node_modules/terriajs/lib/ReactViewModels/ViewState.js"));

var _BingMapsSearchProviderViewModel = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ViewModels/BingMapsSearchProviderViewModel.js */ "./node_modules/terriajs/lib/ViewModels/BingMapsSearchProviderViewModel.js"));

var _GazetteerSearchProviderViewModel = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ViewModels/GazetteerSearchProviderViewModel.js */ "./node_modules/terriajs/lib/ViewModels/GazetteerSearchProviderViewModel.js"));

var _GnafSearchProviderViewModel = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ViewModels/GnafSearchProviderViewModel.js */ "./node_modules/terriajs/lib/ViewModels/GnafSearchProviderViewModel.js"));

var _defined = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"));

var _render = _interopRequireDefault(__webpack_require__(/*! ./lib/Views/render */ "./lib/Views/render.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var terriaOptions = {
  baseUrl: 'build/TerriaJS'
}; // checkBrowserCompatibility('ui');

// Register all types of catalog members in the core TerriaJS.  If you only want to register a subset of them
// (i.e. to reduce the size of your application if you don't actually use them all), feel free to copy a subset of
// the code in the registerCatalogMembers function here instead.
(0, _registerCatalogMembers["default"])();
(0, _registerAnalytics["default"])();
terriaOptions.analytics = new _GoogleAnalytics["default"](); // Construct the TerriaJS application, arrange to show errors to the user, and start it up.

var terria = new _Terria["default"](terriaOptions); // Register custom components in the core TerriaJS.  If you only want to register a subset of them, or to add your own,
// insert your custom version of the code in the registerCustomComponentTypes function here instead.

(0, _registerCustomComponentTypes["default"])(terria); // Create the ViewState before terria.start so that errors have somewhere to go.

var viewState = new _ViewState["default"]({
  terria: terria
});

if (true) {
  window.viewState = viewState;
} // If we're running in dev mode, disable the built style sheet as we'll be using the webpack style loader.
// Note that if the first stylesheet stops being nationalmap.css then this will have to change.


if (false) {}

module.exports = terria.start({
  // If you don't want the user to be able to control catalog loading via the URL, remove the applicationUrl property below
  // as well as the call to "updateApplicationOnHashChange" further down.
  applicationUrl: window.location,
  configUrl: 'config.json',
  shareDataService: new _ShareDataService["default"]({
    terria: terria
  })
}).otherwise(function (e) {
  (0, _raiseErrorToUser["default"])(terria, e);
}).always(function () {
  try {
    viewState.searchState.locationSearchProviders = [new _BingMapsSearchProviderViewModel["default"]({
      terria: terria,
      key: terria.configParameters.bingMapsKey
    }), new _GazetteerSearchProviderViewModel["default"]({
      terria: terria
    }), new _GnafSearchProviderViewModel["default"]({
      terria: terria
    })]; // Automatically update Terria (load new catalogs, etc.) when the hash part of the URL changes.

    (0, _updateApplicationOnHashChange["default"])(terria, window);
    (0, _updateApplicationOnMessageFromParentWindow["default"])(terria, window); // Create the various base map options.

    var createAustraliaBaseMapOptions = __webpack_require__(/*! terriajs/lib/ViewModels/createAustraliaBaseMapOptions */ "./node_modules/terriajs/lib/ViewModels/createAustraliaBaseMapOptions.js");

    var createGlobalBaseMapOptions = __webpack_require__(/*! terriajs/lib/ViewModels/createGlobalBaseMapOptions */ "./node_modules/terriajs/lib/ViewModels/createGlobalBaseMapOptions.js");

    var selectBaseMap = __webpack_require__(/*! terriajs/lib/ViewModels/selectBaseMap */ "./node_modules/terriajs/lib/ViewModels/selectBaseMap.js");

    var australiaBaseMaps = createAustraliaBaseMapOptions(terria);
    var globalBaseMaps = createGlobalBaseMapOptions(terria, terria.configParameters.bingMapsKey);
    var allBaseMaps = australiaBaseMaps.concat(globalBaseMaps);
    selectBaseMap(terria, allBaseMaps, 'Bing Maps Aerial with Labels', true); // Show a modal disclaimer before user can do anything else.

    if ((0, _defined["default"])(terria.configParameters.globalDisclaimer)) {
      var globalDisclaimer = terria.configParameters.globalDisclaimer;
      var hostname = window.location.hostname;

      if (globalDisclaimer.enableOnLocalhost || hostname.indexOf('localhost') === -1) {
        var message = ''; // Sometimes we want to show a preamble if the user is viewing a site other than the official production instance.
        // This can be expressed as a devHostRegex ("any site starting with staging.") or a negative prodHostRegex ("any site not ending in .gov.au")

        if ((0, _defined["default"])(globalDisclaimer.devHostRegex) && hostname.match(globalDisclaimer.devHostRegex) || (0, _defined["default"])(globalDisclaimer.prodHostRegex) && !hostname.match(globalDisclaimer.prodHostRegex)) {
          message += __webpack_require__(/*! ./lib/Views/DevelopmentDisclaimerPreamble.html */ "./lib/Views/DevelopmentDisclaimerPreamble.html");
        }

        message += __webpack_require__(/*! ./lib/Views/GlobalDisclaimer.html */ "./lib/Views/GlobalDisclaimer.html");
        var options = {
          title: globalDisclaimer.title !== undefined ? globalDisclaimer.title : 'Warning',
          confirmText: globalDisclaimer.buttonTitle || "Ok",
          width: 600,
          height: 550,
          message: message,
          horizontalPadding: 100
        };
        viewState.notifications.push(options);
      }
    } // Update the ViewState based on Terria config parameters.
    // Note: won't do anything unless terriajs version is >7.9.0


    if ((0, _defined["default"])(viewState.afterTerriaStarted)) {
      viewState.afterTerriaStarted();
    }

    (0, _render["default"])(terria, allBaseMaps, viewState);
  } catch (e) {
    console.error(e);
    console.error(e.stack);
  }
});

/***/ }),

/***/ "./lib/Views/DevelopmentDisclaimerPreamble.html":
/*!******************************************************!*\
  !*** ./lib/Views/DevelopmentDisclaimerPreamble.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border:1px solid red; background:hsla(0,50%,50%,0.2); padding: 0.5em;\">\n<h1>Development site</h1>\n\n<p>You are viewing a site other than the official production site. It may not operate as you expect.</p>\n</div>"

/***/ }),

/***/ "./lib/Views/GlobalDisclaimer.html":
/*!*****************************************!*\
  !*** ./lib/Views/GlobalDisclaimer.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<p>This is the global disclaimer shown to all users of this site. It should be replaced with something specific, by modifying <samp>lib/Views/GlobalDisclaimer.html</samp>.\n</div>"

/***/ }),

/***/ "./lib/Views/RelatedMaps.jsx":
/*!***********************************!*\
  !*** ./lib/Views/RelatedMaps.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _MenuPanel = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx */ "./node_modules/terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx"));

var _panel = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/Map/Panels/panel.scss */ "./node_modules/terriajs/lib/ReactViews/Map/Panels/panel.scss"));

var _relatedMaps = _interopRequireDefault(__webpack_require__(/*! ./related-maps.scss */ "./lib/Views/related-maps.scss"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function RelatedMaps(props) {
  var dropdownTheme = {
    inner: _relatedMaps["default"].dropdownInner,
    icon: "gallery"
  };
  return _react["default"].createElement(_MenuPanel["default"], {
    theme: dropdownTheme,
    btnText: "Related Maps",
    smallScreen: props.smallScreen,
    viewState: props.viewState,
    btnTitle: "See related maps"
  }, _react["default"].createElement("div", {
    className: (0, _classnames["default"])(_panel["default"].header)
  }, _react["default"].createElement("label", {
    className: _panel["default"].heading
  }, "Related Maps")), _react["default"].createElement("p", null, "Clicking on a map below will open it in a separate window or tab."), _react["default"].createElement("div", {
    className: (0, _classnames["default"])(_panel["default"].section, _relatedMaps["default"].section)
  }, _react["default"].createElement("a", {
    target: "_blank",
    href: "http://nationalmap.gov.au/renewables/"
  }, _react["default"].createElement("img", {
    className: _relatedMaps["default"].image,
    src: __webpack_require__(/*! ../../wwwroot/images/aremi.jpg */ "./wwwroot/images/aremi.jpg"),
    alt: "AREMI"
  })), _react["default"].createElement("a", {
    target: "_blank",
    className: _relatedMaps["default"].link,
    href: "http://nationalmap.gov.au/renewables/"
  }, "AREMI"), _react["default"].createElement("p", null, "AREMI provides access to Australian spatial data relevant to the Renewable Energy industry, sourced from Government, Industry and Research.")), _react["default"].createElement("div", {
    className: (0, _classnames["default"])(_panel["default"].section, _relatedMaps["default"].section)
  }, _react["default"].createElement("a", {
    target: "_blank",
    href: "http://nationalmap.gov.au/northernaustralia/"
  }, _react["default"].createElement("img", {
    className: _relatedMaps["default"].image,
    src: __webpack_require__(/*! ../../wwwroot/images/northernaustralia.jpg */ "./wwwroot/images/northernaustralia.jpg"),
    alt: "Northern Australia"
  })), _react["default"].createElement("a", {
    target: "_blank",
    className: _relatedMaps["default"].link,
    href: "http://nationalmap.gov.au/northernaustralia/"
  }, "Northern Australia"), _react["default"].createElement("p", null, "The Northern Australia NationalMap forms part of the Government's commitment to developing northern Australia by providing easy access to authoritative and other spatial data on northern Australia to governments, business and the public. More information on the Government's White Paper on Developing Northern Australia is available here:", " ", _react["default"].createElement("a", {
    target: "_blank",
    className: _relatedMaps["default"].link,
    href: "https://northernaustralia.dpmc.gov.au"
  }, "https://northernaustralia.dpmc.gov.au"), ".")), _react["default"].createElement("div", {
    className: (0, _classnames["default"])(_panel["default"].section, _relatedMaps["default"].section)
  }, _react["default"].createElement("a", {
    target: "_blank",
    href: "http://neiiviewer.nicta.com.au"
  }, _react["default"].createElement("img", {
    className: _relatedMaps["default"].image,
    src: __webpack_require__(/*! ../../wwwroot/images/neii.jpg */ "./wwwroot/images/neii.jpg"),
    alt: "NEII Viewer"
  })), _react["default"].createElement("a", {
    target: "_blank",
    className: _relatedMaps["default"].link,
    href: "http://www.neii.gov.au/viewer/"
  }, "NEII Viewer"), _react["default"].createElement("p", null, "The National Environmental Information Infrastructure (NEII) is an information platform designed to improve discovery, access and re-use of nationally significant environmental data. More information on the NEII is available here:", " ", _react["default"].createElement("a", {
    target: "_blank",
    className: _relatedMaps["default"].link,
    href: "http://neii.gov.au/data-viewer"
  }, "neii.gov.au/data-viewer"), ".")), _react["default"].createElement("div", {
    className: (0, _classnames["default"])(_panel["default"].section, _relatedMaps["default"].section)
  }, _react["default"].createElement("a", {
    target: "_blank",
    href: "http://map.aurin.org.au"
  }, _react["default"].createElement("img", {
    className: _relatedMaps["default"].image,
    src: __webpack_require__(/*! ../../wwwroot/images/aurin-map.jpg */ "./wwwroot/images/aurin-map.jpg"),
    alt: "AURIN Map"
  })), _react["default"].createElement("a", {
    target: "_blank",
    className: _relatedMaps["default"].link,
    href: "http://map.aurin.org.au"
  }, "AURIN Map"), _react["default"].createElement("p", null, "AURIN Map provides access to datasets on urban infrastructure for urban researchers, policy and decision makers.")));
}

RelatedMaps.propTypes = {
  viewState: _propTypes["default"].object.isRequired,
  smallScreen: _propTypes["default"].bool
};
var _default = RelatedMaps;
exports["default"] = _default;

/***/ }),

/***/ "./lib/Views/UserInterface.jsx":
/*!*************************************!*\
  !*** ./lib/Views/UserInterface.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserInterface;

var _Groups = __webpack_require__(/*! terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups */ "./node_modules/terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups.jsx");

var _MeasureTool = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/Map/Navigation/MeasureTool */ "./node_modules/terriajs/lib/ReactViews/Map/Navigation/MeasureTool.jsx"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem */ "./node_modules/terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem.jsx"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _RelatedMaps = _interopRequireDefault(__webpack_require__(/*! ./RelatedMaps */ "./lib/Views/RelatedMaps.jsx"));

var _SplitPoint = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/SplitPoint */ "./node_modules/terriajs/lib/ReactViews/SplitPoint.jsx"));

var _StandardUserInterface = _interopRequireDefault(__webpack_require__(/*! terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx */ "./node_modules/terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx"));

var _version = _interopRequireDefault(__webpack_require__(/*! ../../version */ "./version.js"));

__webpack_require__(/*! ./global.scss */ "./lib/Views/global.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function loadAugmentedVirtuality(callback) {
  __webpack_require__.e(/*! require.ensure | AugmentedVirtuality */ "vendors~AugmentedVirtuality").then((function () {
    var AugmentedVirtualityTool = __webpack_require__(/*! terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool */ "./node_modules/terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool.jsx");

    callback(AugmentedVirtualityTool);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

function isBrowserSupportedAV() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent);
}

function UserInterface(props) {
  return _react["default"].createElement(_StandardUserInterface["default"], _extends({}, props, {
    version: _version["default"]
  }), _react["default"].createElement(_Groups.Menu, null, _react["default"].createElement(_RelatedMaps["default"], {
    viewState: props.viewState
  }), _react["default"].createElement(_MenuItem["default"], {
    caption: "About",
    href: "about.html",
    key: "about-link"
  })), _react["default"].createElement(_Groups.Nav, null, _react["default"].createElement(_MeasureTool["default"], {
    terria: props.viewState.terria,
    key: "measure-tool"
  })), _react["default"].createElement(_Groups.ExperimentalMenu, null, isBrowserSupportedAV() ? _react["default"].createElement(_SplitPoint["default"], {
    loadComponent: loadAugmentedVirtuality,
    viewState: props.viewState,
    terria: props.viewState.terria,
    experimentalWarning: true
  }) : null));
}

UserInterface.propTypes = {
  terria: _propTypes["default"].object,
  viewState: _propTypes["default"].object
};

/***/ }),

/***/ "./lib/Views/global.scss":
/*!*******************************!*\
  !*** ./lib/Views/global.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"rcSliderTooltipZoomDownIn":"tm-global__rcSliderTooltipZoomDownIn","rcSliderTooltipZoomDownOut":"tm-global__rcSliderTooltipZoomDownOut"};

/***/ }),

/***/ "./lib/Views/related-maps.scss":
/*!*************************************!*\
  !*** ./lib/Views/related-maps.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown-inner":"tm-related-maps__dropdown-inner","dropdownInner":"tm-related-maps__dropdown-inner","section":"tm-related-maps__section tm-_base__clearfix","image":"tm-related-maps__image","link":"tm-related-maps__link tm-_base__link"};

/***/ }),

/***/ "./lib/Views/render.jsx":
/*!******************************!*\
  !*** ./lib/Views/render.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderUi;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _redboxReact = _interopRequireDefault(__webpack_require__(/*! redbox-react */ "./node_modules/redbox-react/lib/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderUi(terria, allBaseMaps, viewState) {
  var render = function render() {
    var UI = __webpack_require__(/*! ./UserInterface */ "./lib/Views/UserInterface.jsx")["default"];

    _reactDom["default"].render(_react["default"].createElement(UI, {
      terria: terria,
      allBaseMaps: allBaseMaps,
      viewState: viewState
    }), document.getElementById("ui"));
  };

  if (false) { var renderError, renderApp; }

  render();
}

/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS sync recursive ^\\.\\/IAU2006_XYS_.*\\.json$":
/*!************************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS sync ^\.\/IAU2006_XYS_.*\.json$ ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./IAU2006_XYS_0.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_0.json",
	"./IAU2006_XYS_1.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_1.json",
	"./IAU2006_XYS_10.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_10.json",
	"./IAU2006_XYS_11.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_11.json",
	"./IAU2006_XYS_12.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_12.json",
	"./IAU2006_XYS_13.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_13.json",
	"./IAU2006_XYS_14.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_14.json",
	"./IAU2006_XYS_15.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_15.json",
	"./IAU2006_XYS_16.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_16.json",
	"./IAU2006_XYS_17.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_17.json",
	"./IAU2006_XYS_18.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_18.json",
	"./IAU2006_XYS_19.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_19.json",
	"./IAU2006_XYS_2.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_2.json",
	"./IAU2006_XYS_20.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_20.json",
	"./IAU2006_XYS_21.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_21.json",
	"./IAU2006_XYS_22.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_22.json",
	"./IAU2006_XYS_23.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_23.json",
	"./IAU2006_XYS_24.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_24.json",
	"./IAU2006_XYS_25.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_25.json",
	"./IAU2006_XYS_26.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_26.json",
	"./IAU2006_XYS_27.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_27.json",
	"./IAU2006_XYS_3.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_3.json",
	"./IAU2006_XYS_4.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_4.json",
	"./IAU2006_XYS_5.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_5.json",
	"./IAU2006_XYS_6.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_6.json",
	"./IAU2006_XYS_7.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_7.json",
	"./IAU2006_XYS_8.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_8.json",
	"./IAU2006_XYS_9.json": "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS/IAU2006_XYS_9.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/terriajs-cesium/Source/Assets/IAU2006_XYS sync recursive ^\\.\\/IAU2006_XYS_.*\\.json$";

/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/ThirdParty sync \\.wasm$":
/*!**********************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/ThirdParty sync nonrecursive \.wasm$ ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./draco_decoder.wasm": "./node_modules/terriajs-cesium/Source/ThirdParty/draco_decoder.wasm"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/terriajs-cesium/Source/ThirdParty sync \\.wasm$";

/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/ThirdParty/Workers sync .*wasm_wrapper\\.js$":
/*!******************************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/ThirdParty/Workers sync nonrecursive .*wasm_wrapper\.js$ ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./draco_wasm_wrapper.js": "./node_modules/terriajs-cesium/Source/ThirdParty/Workers/draco_wasm_wrapper.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/terriajs-cesium/Source/ThirdParty/Workers sync .*wasm_wrapper\\.js$";

/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/ThirdParty/Workers sync recursive ./node_modules/worker-loader/dist/cjs.js!./ ^\\.\\/.*$":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/ThirdParty/Workers sync ./node_modules/worker-loader/dist/cjs.js ^\.\/.*$ ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deflate": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js",
	"./deflate.js": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js",
	"./draco_decoder": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/draco_decoder.js",
	"./draco_decoder.js": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/draco_decoder.js",
	"./draco_wasm_wrapper": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/draco_wasm_wrapper.js",
	"./draco_wasm_wrapper.js": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/draco_wasm_wrapper.js",
	"./inflate": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js",
	"./inflate.js": "./node_modules/worker-loader/dist/cjs.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/terriajs-cesium/Source/ThirdParty/Workers sync recursive ./node_modules/worker-loader/dist/cjs.js!./ ^\\.\\/.*$";

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'post-prettier-40-geb3d7a87';

/***/ }),

/***/ "./wwwroot/images/aremi.jpg":
/*!**********************************!*\
  !*** ./wwwroot/images/aremi.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8edfbe49f85e6994ebb732a110a3c502.jpg";

/***/ }),

/***/ "./wwwroot/images/aurin-map.jpg":
/*!**************************************!*\
  !*** ./wwwroot/images/aurin-map.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4bc9b143747260dad71fd9951b364e3a.jpg";

/***/ }),

/***/ "./wwwroot/images/neii.jpg":
/*!*********************************!*\
  !*** ./wwwroot/images/neii.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8fc6de49c8bef0a89f25ca9ba37deb81.jpg";

/***/ }),

/***/ "./wwwroot/images/northernaustralia.jpg":
/*!**********************************************!*\
  !*** ./wwwroot/images/northernaustralia.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f5ad078d6d4ff7fc08ef6a3105dc2ef9.jpg";

/***/ }),

/***/ 0:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguVGVycmlhTWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1ZpZXdzL0RldmVsb3BtZW50RGlzY2xhaW1lclByZWFtYmxlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGliL1ZpZXdzL0dsb2JhbERpc2NsYWltZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9saWIvVmlld3MvUmVsYXRlZE1hcHMuanN4Iiwid2VicGFjazovLy8uL2xpYi9WaWV3cy9Vc2VySW50ZXJmYWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9saWIvVmlld3MvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbGliL1ZpZXdzL3JlbGF0ZWQtbWFwcy5zY3NzP2NjYzkiLCJ3ZWJwYWNrOi8vLy4vbGliL1ZpZXdzL3JlbmRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2ltYWdlcy9hcmVtaS5qcGciLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9pbWFnZXMvYXVyaW4tbWFwLmpwZyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2ltYWdlcy9uZWlpLmpwZyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2ltYWdlcy9ub3J0aGVybmF1c3RyYWxpYS5qcGciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLypnbG9iYWwgcmVxdWlyZSx3aW5kb3cgKi9cblxudmFyIF9Hb29nbGVBbmFseXRpY3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvQ29yZS9Hb29nbGVBbmFseXRpY3NcIikpO1xuXG52YXIgX1NoYXJlRGF0YVNlcnZpY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvTW9kZWxzL1NoYXJlRGF0YVNlcnZpY2VcIikpO1xuXG52YXIgX3JhaXNlRXJyb3JUb1VzZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvTW9kZWxzL3JhaXNlRXJyb3JUb1VzZXJcIikpO1xuXG52YXIgX3JlZ2lzdGVyQW5hbHl0aWNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMvbGliL01vZGVscy9yZWdpc3RlckFuYWx5dGljc1wiKSk7XG5cbnZhciBfcmVnaXN0ZXJDYXRhbG9nTWVtYmVycyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9Nb2RlbHMvcmVnaXN0ZXJDYXRhbG9nTWVtYmVyc1wiKSk7XG5cbnZhciBfcmVnaXN0ZXJDdXN0b21Db21wb25lbnRUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL0N1c3RvbS9yZWdpc3RlckN1c3RvbUNvbXBvbmVudFR5cGVzXCIpKTtcblxudmFyIF9UZXJyaWEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvTW9kZWxzL1RlcnJpYVwiKSk7XG5cbnZhciBfdXBkYXRlQXBwbGljYXRpb25Pbkhhc2hDaGFuZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvVmlld01vZGVscy91cGRhdGVBcHBsaWNhdGlvbk9uSGFzaENoYW5nZVwiKSk7XG5cbnZhciBfdXBkYXRlQXBwbGljYXRpb25Pbk1lc3NhZ2VGcm9tUGFyZW50V2luZG93ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMvbGliL1ZpZXdNb2RlbHMvdXBkYXRlQXBwbGljYXRpb25Pbk1lc3NhZ2VGcm9tUGFyZW50V2luZG93XCIpKTtcblxudmFyIF9WaWV3U3RhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvUmVhY3RWaWV3TW9kZWxzL1ZpZXdTdGF0ZVwiKSk7XG5cbnZhciBfQmluZ01hcHNTZWFyY2hQcm92aWRlclZpZXdNb2RlbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9WaWV3TW9kZWxzL0JpbmdNYXBzU2VhcmNoUHJvdmlkZXJWaWV3TW9kZWwuanNcIikpO1xuXG52YXIgX0dhemV0dGVlclNlYXJjaFByb3ZpZGVyVmlld01vZGVsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMvbGliL1ZpZXdNb2RlbHMvR2F6ZXR0ZWVyU2VhcmNoUHJvdmlkZXJWaWV3TW9kZWwuanNcIikpO1xuXG52YXIgX0duYWZTZWFyY2hQcm92aWRlclZpZXdNb2RlbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9WaWV3TW9kZWxzL0duYWZTZWFyY2hQcm92aWRlclZpZXdNb2RlbC5qc1wiKSk7XG5cbnZhciBfZGVmaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9kZWZpbmVkXCIpKTtcblxudmFyIF9yZW5kZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9WaWV3cy9yZW5kZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIHRlcnJpYU9wdGlvbnMgPSB7XG4gIGJhc2VVcmw6ICdidWlsZC9UZXJyaWFKUydcbn07IC8vIGNoZWNrQnJvd3NlckNvbXBhdGliaWxpdHkoJ3VpJyk7XG5cbi8vIFJlZ2lzdGVyIGFsbCB0eXBlcyBvZiBjYXRhbG9nIG1lbWJlcnMgaW4gdGhlIGNvcmUgVGVycmlhSlMuICBJZiB5b3Ugb25seSB3YW50IHRvIHJlZ2lzdGVyIGEgc3Vic2V0IG9mIHRoZW1cbi8vIChpLmUuIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB5b3VyIGFwcGxpY2F0aW9uIGlmIHlvdSBkb24ndCBhY3R1YWxseSB1c2UgdGhlbSBhbGwpLCBmZWVsIGZyZWUgdG8gY29weSBhIHN1YnNldCBvZlxuLy8gdGhlIGNvZGUgaW4gdGhlIHJlZ2lzdGVyQ2F0YWxvZ01lbWJlcnMgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkLlxuKDAsIF9yZWdpc3RlckNhdGFsb2dNZW1iZXJzW1wiZGVmYXVsdFwiXSkoKTtcbigwLCBfcmVnaXN0ZXJBbmFseXRpY3NbXCJkZWZhdWx0XCJdKSgpO1xudGVycmlhT3B0aW9ucy5hbmFseXRpY3MgPSBuZXcgX0dvb2dsZUFuYWx5dGljc1tcImRlZmF1bHRcIl0oKTsgLy8gQ29uc3RydWN0IHRoZSBUZXJyaWFKUyBhcHBsaWNhdGlvbiwgYXJyYW5nZSB0byBzaG93IGVycm9ycyB0byB0aGUgdXNlciwgYW5kIHN0YXJ0IGl0IHVwLlxuXG52YXIgdGVycmlhID0gbmV3IF9UZXJyaWFbXCJkZWZhdWx0XCJdKHRlcnJpYU9wdGlvbnMpOyAvLyBSZWdpc3RlciBjdXN0b20gY29tcG9uZW50cyBpbiB0aGUgY29yZSBUZXJyaWFKUy4gIElmIHlvdSBvbmx5IHdhbnQgdG8gcmVnaXN0ZXIgYSBzdWJzZXQgb2YgdGhlbSwgb3IgdG8gYWRkIHlvdXIgb3duLFxuLy8gaW5zZXJ0IHlvdXIgY3VzdG9tIHZlcnNpb24gb2YgdGhlIGNvZGUgaW4gdGhlIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50VHlwZXMgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkLlxuXG4oMCwgX3JlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50VHlwZXNbXCJkZWZhdWx0XCJdKSh0ZXJyaWEpOyAvLyBDcmVhdGUgdGhlIFZpZXdTdGF0ZSBiZWZvcmUgdGVycmlhLnN0YXJ0IHNvIHRoYXQgZXJyb3JzIGhhdmUgc29tZXdoZXJlIHRvIGdvLlxuXG52YXIgdmlld1N0YXRlID0gbmV3IF9WaWV3U3RhdGVbXCJkZWZhdWx0XCJdKHtcbiAgdGVycmlhOiB0ZXJyaWFcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICB3aW5kb3cudmlld1N0YXRlID0gdmlld1N0YXRlO1xufSAvLyBJZiB3ZSdyZSBydW5uaW5nIGluIGRldiBtb2RlLCBkaXNhYmxlIHRoZSBidWlsdCBzdHlsZSBzaGVldCBhcyB3ZSdsbCBiZSB1c2luZyB0aGUgd2VicGFjayBzdHlsZSBsb2FkZXIuXG4vLyBOb3RlIHRoYXQgaWYgdGhlIGZpcnN0IHN0eWxlc2hlZXQgc3RvcHMgYmVpbmcgbmF0aW9uYWxtYXAuY3NzIHRoZW4gdGhpcyB3aWxsIGhhdmUgdG8gY2hhbmdlLlxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbW9kdWxlLmhvdCkge1xuICBkb2N1bWVudC5zdHlsZVNoZWV0c1swXS5kaXNhYmxlZCA9IHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGVycmlhLnN0YXJ0KHtcbiAgLy8gSWYgeW91IGRvbid0IHdhbnQgdGhlIHVzZXIgdG8gYmUgYWJsZSB0byBjb250cm9sIGNhdGFsb2cgbG9hZGluZyB2aWEgdGhlIFVSTCwgcmVtb3ZlIHRoZSBhcHBsaWNhdGlvblVybCBwcm9wZXJ0eSBiZWxvd1xuICAvLyBhcyB3ZWxsIGFzIHRoZSBjYWxsIHRvIFwidXBkYXRlQXBwbGljYXRpb25Pbkhhc2hDaGFuZ2VcIiBmdXJ0aGVyIGRvd24uXG4gIGFwcGxpY2F0aW9uVXJsOiB3aW5kb3cubG9jYXRpb24sXG4gIGNvbmZpZ1VybDogJ2NvbmZpZy5qc29uJyxcbiAgc2hhcmVEYXRhU2VydmljZTogbmV3IF9TaGFyZURhdGFTZXJ2aWNlW1wiZGVmYXVsdFwiXSh7XG4gICAgdGVycmlhOiB0ZXJyaWFcbiAgfSlcbn0pLm90aGVyd2lzZShmdW5jdGlvbiAoZSkge1xuICAoMCwgX3JhaXNlRXJyb3JUb1VzZXJbXCJkZWZhdWx0XCJdKSh0ZXJyaWEsIGUpO1xufSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2aWV3U3RhdGUuc2VhcmNoU3RhdGUubG9jYXRpb25TZWFyY2hQcm92aWRlcnMgPSBbbmV3IF9CaW5nTWFwc1NlYXJjaFByb3ZpZGVyVmlld01vZGVsW1wiZGVmYXVsdFwiXSh7XG4gICAgICB0ZXJyaWE6IHRlcnJpYSxcbiAgICAgIGtleTogdGVycmlhLmNvbmZpZ1BhcmFtZXRlcnMuYmluZ01hcHNLZXlcbiAgICB9KSwgbmV3IF9HYXpldHRlZXJTZWFyY2hQcm92aWRlclZpZXdNb2RlbFtcImRlZmF1bHRcIl0oe1xuICAgICAgdGVycmlhOiB0ZXJyaWFcbiAgICB9KSwgbmV3IF9HbmFmU2VhcmNoUHJvdmlkZXJWaWV3TW9kZWxbXCJkZWZhdWx0XCJdKHtcbiAgICAgIHRlcnJpYTogdGVycmlhXG4gICAgfSldOyAvLyBBdXRvbWF0aWNhbGx5IHVwZGF0ZSBUZXJyaWEgKGxvYWQgbmV3IGNhdGFsb2dzLCBldGMuKSB3aGVuIHRoZSBoYXNoIHBhcnQgb2YgdGhlIFVSTCBjaGFuZ2VzLlxuXG4gICAgKDAsIF91cGRhdGVBcHBsaWNhdGlvbk9uSGFzaENoYW5nZVtcImRlZmF1bHRcIl0pKHRlcnJpYSwgd2luZG93KTtcbiAgICAoMCwgX3VwZGF0ZUFwcGxpY2F0aW9uT25NZXNzYWdlRnJvbVBhcmVudFdpbmRvd1tcImRlZmF1bHRcIl0pKHRlcnJpYSwgd2luZG93KTsgLy8gQ3JlYXRlIHRoZSB2YXJpb3VzIGJhc2UgbWFwIG9wdGlvbnMuXG5cbiAgICB2YXIgY3JlYXRlQXVzdHJhbGlhQmFzZU1hcE9wdGlvbnMgPSByZXF1aXJlKCd0ZXJyaWFqcy9saWIvVmlld01vZGVscy9jcmVhdGVBdXN0cmFsaWFCYXNlTWFwT3B0aW9ucycpO1xuXG4gICAgdmFyIGNyZWF0ZUdsb2JhbEJhc2VNYXBPcHRpb25zID0gcmVxdWlyZSgndGVycmlhanMvbGliL1ZpZXdNb2RlbHMvY3JlYXRlR2xvYmFsQmFzZU1hcE9wdGlvbnMnKTtcblxuICAgIHZhciBzZWxlY3RCYXNlTWFwID0gcmVxdWlyZSgndGVycmlhanMvbGliL1ZpZXdNb2RlbHMvc2VsZWN0QmFzZU1hcCcpO1xuXG4gICAgdmFyIGF1c3RyYWxpYUJhc2VNYXBzID0gY3JlYXRlQXVzdHJhbGlhQmFzZU1hcE9wdGlvbnModGVycmlhKTtcbiAgICB2YXIgZ2xvYmFsQmFzZU1hcHMgPSBjcmVhdGVHbG9iYWxCYXNlTWFwT3B0aW9ucyh0ZXJyaWEsIHRlcnJpYS5jb25maWdQYXJhbWV0ZXJzLmJpbmdNYXBzS2V5KTtcbiAgICB2YXIgYWxsQmFzZU1hcHMgPSBhdXN0cmFsaWFCYXNlTWFwcy5jb25jYXQoZ2xvYmFsQmFzZU1hcHMpO1xuICAgIHNlbGVjdEJhc2VNYXAodGVycmlhLCBhbGxCYXNlTWFwcywgJ0JpbmcgTWFwcyBBZXJpYWwgd2l0aCBMYWJlbHMnLCB0cnVlKTsgLy8gU2hvdyBhIG1vZGFsIGRpc2NsYWltZXIgYmVmb3JlIHVzZXIgY2FuIGRvIGFueXRoaW5nIGVsc2UuXG5cbiAgICBpZiAoKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodGVycmlhLmNvbmZpZ1BhcmFtZXRlcnMuZ2xvYmFsRGlzY2xhaW1lcikpIHtcbiAgICAgIHZhciBnbG9iYWxEaXNjbGFpbWVyID0gdGVycmlhLmNvbmZpZ1BhcmFtZXRlcnMuZ2xvYmFsRGlzY2xhaW1lcjtcbiAgICAgIHZhciBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblxuICAgICAgaWYgKGdsb2JhbERpc2NsYWltZXIuZW5hYmxlT25Mb2NhbGhvc3QgfHwgaG9zdG5hbWUuaW5kZXhPZignbG9jYWxob3N0JykgPT09IC0xKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJyc7IC8vIFNvbWV0aW1lcyB3ZSB3YW50IHRvIHNob3cgYSBwcmVhbWJsZSBpZiB0aGUgdXNlciBpcyB2aWV3aW5nIGEgc2l0ZSBvdGhlciB0aGFuIHRoZSBvZmZpY2lhbCBwcm9kdWN0aW9uIGluc3RhbmNlLlxuICAgICAgICAvLyBUaGlzIGNhbiBiZSBleHByZXNzZWQgYXMgYSBkZXZIb3N0UmVnZXggKFwiYW55IHNpdGUgc3RhcnRpbmcgd2l0aCBzdGFnaW5nLlwiKSBvciBhIG5lZ2F0aXZlIHByb2RIb3N0UmVnZXggKFwiYW55IHNpdGUgbm90IGVuZGluZyBpbiAuZ292LmF1XCIpXG5cbiAgICAgICAgaWYgKCgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKGdsb2JhbERpc2NsYWltZXIuZGV2SG9zdFJlZ2V4KSAmJiBob3N0bmFtZS5tYXRjaChnbG9iYWxEaXNjbGFpbWVyLmRldkhvc3RSZWdleCkgfHwgKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkoZ2xvYmFsRGlzY2xhaW1lci5wcm9kSG9zdFJlZ2V4KSAmJiAhaG9zdG5hbWUubWF0Y2goZ2xvYmFsRGlzY2xhaW1lci5wcm9kSG9zdFJlZ2V4KSkge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gcmVxdWlyZSgnLi9saWIvVmlld3MvRGV2ZWxvcG1lbnREaXNjbGFpbWVyUHJlYW1ibGUuaHRtbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSArPSByZXF1aXJlKCcuL2xpYi9WaWV3cy9HbG9iYWxEaXNjbGFpbWVyLmh0bWwnKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgdGl0bGU6IGdsb2JhbERpc2NsYWltZXIudGl0bGUgIT09IHVuZGVmaW5lZCA/IGdsb2JhbERpc2NsYWltZXIudGl0bGUgOiAnV2FybmluZycsXG4gICAgICAgICAgY29uZmlybVRleHQ6IGdsb2JhbERpc2NsYWltZXIuYnV0dG9uVGl0bGUgfHwgXCJPa1wiLFxuICAgICAgICAgIHdpZHRoOiA2MDAsXG4gICAgICAgICAgaGVpZ2h0OiA1NTAsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICBob3Jpem9udGFsUGFkZGluZzogMTAwXG4gICAgICAgIH07XG4gICAgICAgIHZpZXdTdGF0ZS5ub3RpZmljYXRpb25zLnB1c2gob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyBVcGRhdGUgdGhlIFZpZXdTdGF0ZSBiYXNlZCBvbiBUZXJyaWEgY29uZmlnIHBhcmFtZXRlcnMuXG4gICAgLy8gTm90ZTogd29uJ3QgZG8gYW55dGhpbmcgdW5sZXNzIHRlcnJpYWpzIHZlcnNpb24gaXMgPjcuOS4wXG5cblxuICAgIGlmICgoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh2aWV3U3RhdGUuYWZ0ZXJUZXJyaWFTdGFydGVkKSkge1xuICAgICAgdmlld1N0YXRlLmFmdGVyVGVycmlhU3RhcnRlZCgpO1xuICAgIH1cblxuICAgICgwLCBfcmVuZGVyW1wiZGVmYXVsdFwiXSkodGVycmlhLCBhbGxCYXNlTWFwcywgdmlld1N0YXRlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgY29uc29sZS5lcnJvcihlLnN0YWNrKTtcbiAgfVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgc3R5bGU9XFxcImJvcmRlcjoxcHggc29saWQgcmVkOyBiYWNrZ3JvdW5kOmhzbGEoMCw1MCUsNTAlLDAuMik7IHBhZGRpbmc6IDAuNWVtO1xcXCI+XFxuPGgxPkRldmVsb3BtZW50IHNpdGU8L2gxPlxcblxcbjxwPllvdSBhcmUgdmlld2luZyBhIHNpdGUgb3RoZXIgdGhhbiB0aGUgb2ZmaWNpYWwgcHJvZHVjdGlvbiBzaXRlLiBJdCBtYXkgbm90IG9wZXJhdGUgYXMgeW91IGV4cGVjdC48L3A+XFxuPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG48cD5UaGlzIGlzIHRoZSBnbG9iYWwgZGlzY2xhaW1lciBzaG93biB0byBhbGwgdXNlcnMgb2YgdGhpcyBzaXRlLiBJdCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCBzb21ldGhpbmcgc3BlY2lmaWMsIGJ5IG1vZGlmeWluZyA8c2FtcD5saWIvVmlld3MvR2xvYmFsRGlzY2xhaW1lci5odG1sPC9zYW1wPi5cXG48L2Rpdj5cIiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfTWVudVBhbmVsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMvbGliL1JlYWN0Vmlld3MvU3RhbmRhcmRVc2VySW50ZXJmYWNlL2N1c3RvbWl6YWJsZS9NZW51UGFuZWwuanN4XCIpKTtcblxudmFyIF9wYW5lbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL01hcC9QYW5lbHMvcGFuZWwuc2Nzc1wiKSk7XG5cbnZhciBfcmVsYXRlZE1hcHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbGF0ZWQtbWFwcy5zY3NzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBSZWxhdGVkTWFwcyhwcm9wcykge1xuICB2YXIgZHJvcGRvd25UaGVtZSA9IHtcbiAgICBpbm5lcjogX3JlbGF0ZWRNYXBzW1wiZGVmYXVsdFwiXS5kcm9wZG93bklubmVyLFxuICAgIGljb246IFwiZ2FsbGVyeVwiXG4gIH07XG4gIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX01lbnVQYW5lbFtcImRlZmF1bHRcIl0sIHtcbiAgICB0aGVtZTogZHJvcGRvd25UaGVtZSxcbiAgICBidG5UZXh0OiBcIlJlbGF0ZWQgTWFwc1wiLFxuICAgIHNtYWxsU2NyZWVuOiBwcm9wcy5zbWFsbFNjcmVlbixcbiAgICB2aWV3U3RhdGU6IHByb3BzLnZpZXdTdGF0ZSxcbiAgICBidG5UaXRsZTogXCJTZWUgcmVsYXRlZCBtYXBzXCJcbiAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKF9wYW5lbFtcImRlZmF1bHRcIl0uaGVhZGVyKVxuICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XG4gICAgY2xhc3NOYW1lOiBfcGFuZWxbXCJkZWZhdWx0XCJdLmhlYWRpbmdcbiAgfSwgXCJSZWxhdGVkIE1hcHNcIikpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ2xpY2tpbmcgb24gYSBtYXAgYmVsb3cgd2lsbCBvcGVuIGl0IGluIGEgc2VwYXJhdGUgd2luZG93IG9yIHRhYi5cIiksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShfcGFuZWxbXCJkZWZhdWx0XCJdLnNlY3Rpb24sIF9yZWxhdGVkTWFwc1tcImRlZmF1bHRcIl0uc2VjdGlvbilcbiAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgIGhyZWY6IFwiaHR0cDovL25hdGlvbmFsbWFwLmdvdi5hdS9yZW5ld2FibGVzL1wiXG4gIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgY2xhc3NOYW1lOiBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLmltYWdlLFxuICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL3d3d3Jvb3QvaW1hZ2VzL2FyZW1pLmpwZ1wiKSxcbiAgICBhbHQ6IFwiQVJFTUlcIlxuICB9KSksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICBjbGFzc05hbWU6IF9yZWxhdGVkTWFwc1tcImRlZmF1bHRcIl0ubGluayxcbiAgICBocmVmOiBcImh0dHA6Ly9uYXRpb25hbG1hcC5nb3YuYXUvcmVuZXdhYmxlcy9cIlxuICB9LCBcIkFSRU1JXCIpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQVJFTUkgcHJvdmlkZXMgYWNjZXNzIHRvIEF1c3RyYWxpYW4gc3BhdGlhbCBkYXRhIHJlbGV2YW50IHRvIHRoZSBSZW5ld2FibGUgRW5lcmd5IGluZHVzdHJ5LCBzb3VyY2VkIGZyb20gR292ZXJubWVudCwgSW5kdXN0cnkgYW5kIFJlc2VhcmNoLlwiKSksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShfcGFuZWxbXCJkZWZhdWx0XCJdLnNlY3Rpb24sIF9yZWxhdGVkTWFwc1tcImRlZmF1bHRcIl0uc2VjdGlvbilcbiAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgIGhyZWY6IFwiaHR0cDovL25hdGlvbmFsbWFwLmdvdi5hdS9ub3J0aGVybmF1c3RyYWxpYS9cIlxuICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgIGNsYXNzTmFtZTogX3JlbGF0ZWRNYXBzW1wiZGVmYXVsdFwiXS5pbWFnZSxcbiAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi93d3dyb290L2ltYWdlcy9ub3J0aGVybmF1c3RyYWxpYS5qcGdcIiksXG4gICAgYWx0OiBcIk5vcnRoZXJuIEF1c3RyYWxpYVwiXG4gIH0pKSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgIGNsYXNzTmFtZTogX3JlbGF0ZWRNYXBzW1wiZGVmYXVsdFwiXS5saW5rLFxuICAgIGhyZWY6IFwiaHR0cDovL25hdGlvbmFsbWFwLmdvdi5hdS9ub3J0aGVybmF1c3RyYWxpYS9cIlxuICB9LCBcIk5vcnRoZXJuIEF1c3RyYWxpYVwiKSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlRoZSBOb3J0aGVybiBBdXN0cmFsaWEgTmF0aW9uYWxNYXAgZm9ybXMgcGFydCBvZiB0aGUgR292ZXJubWVudCdzIGNvbW1pdG1lbnQgdG8gZGV2ZWxvcGluZyBub3J0aGVybiBBdXN0cmFsaWEgYnkgcHJvdmlkaW5nIGVhc3kgYWNjZXNzIHRvIGF1dGhvcml0YXRpdmUgYW5kIG90aGVyIHNwYXRpYWwgZGF0YSBvbiBub3J0aGVybiBBdXN0cmFsaWEgdG8gZ292ZXJubWVudHMsIGJ1c2luZXNzIGFuZCB0aGUgcHVibGljLiBNb3JlIGluZm9ybWF0aW9uIG9uIHRoZSBHb3Zlcm5tZW50J3MgV2hpdGUgUGFwZXIgb24gRGV2ZWxvcGluZyBOb3J0aGVybiBBdXN0cmFsaWEgaXMgYXZhaWxhYmxlIGhlcmU6XCIsIFwiIFwiLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgY2xhc3NOYW1lOiBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLmxpbmssXG4gICAgaHJlZjogXCJodHRwczovL25vcnRoZXJuYXVzdHJhbGlhLmRwbWMuZ292LmF1XCJcbiAgfSwgXCJodHRwczovL25vcnRoZXJuYXVzdHJhbGlhLmRwbWMuZ292LmF1XCIpLCBcIi5cIikpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoX3BhbmVsW1wiZGVmYXVsdFwiXS5zZWN0aW9uLCBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLnNlY3Rpb24pXG4gIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICBocmVmOiBcImh0dHA6Ly9uZWlpdmlld2VyLm5pY3RhLmNvbS5hdVwiXG4gIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgY2xhc3NOYW1lOiBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLmltYWdlLFxuICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL3d3d3Jvb3QvaW1hZ2VzL25laWkuanBnXCIpLFxuICAgIGFsdDogXCJORUlJIFZpZXdlclwiXG4gIH0pKSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgIGNsYXNzTmFtZTogX3JlbGF0ZWRNYXBzW1wiZGVmYXVsdFwiXS5saW5rLFxuICAgIGhyZWY6IFwiaHR0cDovL3d3dy5uZWlpLmdvdi5hdS92aWV3ZXIvXCJcbiAgfSwgXCJORUlJIFZpZXdlclwiKSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlRoZSBOYXRpb25hbCBFbnZpcm9ubWVudGFsIEluZm9ybWF0aW9uIEluZnJhc3RydWN0dXJlIChORUlJKSBpcyBhbiBpbmZvcm1hdGlvbiBwbGF0Zm9ybSBkZXNpZ25lZCB0byBpbXByb3ZlIGRpc2NvdmVyeSwgYWNjZXNzIGFuZCByZS11c2Ugb2YgbmF0aW9uYWxseSBzaWduaWZpY2FudCBlbnZpcm9ubWVudGFsIGRhdGEuIE1vcmUgaW5mb3JtYXRpb24gb24gdGhlIE5FSUkgaXMgYXZhaWxhYmxlIGhlcmU6XCIsIFwiIFwiLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgY2xhc3NOYW1lOiBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLmxpbmssXG4gICAgaHJlZjogXCJodHRwOi8vbmVpaS5nb3YuYXUvZGF0YS12aWV3ZXJcIlxuICB9LCBcIm5laWkuZ292LmF1L2RhdGEtdmlld2VyXCIpLCBcIi5cIikpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoX3BhbmVsW1wiZGVmYXVsdFwiXS5zZWN0aW9uLCBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLnNlY3Rpb24pXG4gIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICBocmVmOiBcImh0dHA6Ly9tYXAuYXVyaW4ub3JnLmF1XCJcbiAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBjbGFzc05hbWU6IF9yZWxhdGVkTWFwc1tcImRlZmF1bHRcIl0uaW1hZ2UsXG4gICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vd3d3cm9vdC9pbWFnZXMvYXVyaW4tbWFwLmpwZ1wiKSxcbiAgICBhbHQ6IFwiQVVSSU4gTWFwXCJcbiAgfSkpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgY2xhc3NOYW1lOiBfcmVsYXRlZE1hcHNbXCJkZWZhdWx0XCJdLmxpbmssXG4gICAgaHJlZjogXCJodHRwOi8vbWFwLmF1cmluLm9yZy5hdVwiXG4gIH0sIFwiQVVSSU4gTWFwXCIpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQVVSSU4gTWFwIHByb3ZpZGVzIGFjY2VzcyB0byBkYXRhc2V0cyBvbiB1cmJhbiBpbmZyYXN0cnVjdHVyZSBmb3IgdXJiYW4gcmVzZWFyY2hlcnMsIHBvbGljeSBhbmQgZGVjaXNpb24gbWFrZXJzLlwiKSkpO1xufVxuXG5SZWxhdGVkTWFwcy5wcm9wVHlwZXMgPSB7XG4gIHZpZXdTdGF0ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNtYWxsU2NyZWVuOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIF9kZWZhdWx0ID0gUmVsYXRlZE1hcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVc2VySW50ZXJmYWNlO1xuXG52YXIgX0dyb3VwcyA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9TdGFuZGFyZFVzZXJJbnRlcmZhY2UvY3VzdG9taXphYmxlL0dyb3Vwc1wiKTtcblxudmFyIF9NZWFzdXJlVG9vbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL01hcC9OYXZpZ2F0aW9uL01lYXN1cmVUb29sXCIpKTtcblxudmFyIF9NZW51SXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL1N0YW5kYXJkVXNlckludGVyZmFjZS9jdXN0b21pemFibGUvTWVudUl0ZW1cIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1JlbGF0ZWRNYXBzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9SZWxhdGVkTWFwc1wiKSk7XG5cbnZhciBfU3BsaXRQb2ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL1NwbGl0UG9pbnRcIikpO1xuXG52YXIgX1N0YW5kYXJkVXNlckludGVyZmFjZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL1N0YW5kYXJkVXNlckludGVyZmFjZS9TdGFuZGFyZFVzZXJJbnRlcmZhY2UuanN4XCIpKTtcblxudmFyIF92ZXJzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdmVyc2lvblwiKSk7XG5cbnJlcXVpcmUoXCIuL2dsb2JhbC5zY3NzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gbG9hZEF1Z21lbnRlZFZpcnR1YWxpdHkoY2FsbGJhY2spIHtcbiAgcmVxdWlyZS5lbnN1cmUoXCJ0ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9NYXAvTmF2aWdhdGlvbi9BdWdtZW50ZWRWaXJ0dWFsaXR5VG9vbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEF1Z21lbnRlZFZpcnR1YWxpdHlUb29sID0gcmVxdWlyZShcInRlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL01hcC9OYXZpZ2F0aW9uL0F1Z21lbnRlZFZpcnR1YWxpdHlUb29sXCIpO1xuXG4gICAgY2FsbGJhY2soQXVnbWVudGVkVmlydHVhbGl0eVRvb2wpO1xuICB9LCBcIkF1Z21lbnRlZFZpcnR1YWxpdHlcIik7XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZEFWKCkge1xuICByZXR1cm4gL0FuZHJvaWR8aVBob25lfGlQYWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuXG5mdW5jdGlvbiBVc2VySW50ZXJmYWNlKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1N0YW5kYXJkVXNlckludGVyZmFjZVtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHZlcnNpb246IF92ZXJzaW9uW1wiZGVmYXVsdFwiXVxuICB9KSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9Hcm91cHMuTWVudSwgbnVsbCwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9SZWxhdGVkTWFwc1tcImRlZmF1bHRcIl0sIHtcbiAgICB2aWV3U3RhdGU6IHByb3BzLnZpZXdTdGF0ZVxuICB9KSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9NZW51SXRlbVtcImRlZmF1bHRcIl0sIHtcbiAgICBjYXB0aW9uOiBcIkFib3V0XCIsXG4gICAgaHJlZjogXCJhYm91dC5odG1sXCIsXG4gICAga2V5OiBcImFib3V0LWxpbmtcIlxuICB9KSksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfR3JvdXBzLk5hdiwgbnVsbCwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9NZWFzdXJlVG9vbFtcImRlZmF1bHRcIl0sIHtcbiAgICB0ZXJyaWE6IHByb3BzLnZpZXdTdGF0ZS50ZXJyaWEsXG4gICAga2V5OiBcIm1lYXN1cmUtdG9vbFwiXG4gIH0pKSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9Hcm91cHMuRXhwZXJpbWVudGFsTWVudSwgbnVsbCwgaXNCcm93c2VyU3VwcG9ydGVkQVYoKSA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfU3BsaXRQb2ludFtcImRlZmF1bHRcIl0sIHtcbiAgICBsb2FkQ29tcG9uZW50OiBsb2FkQXVnbWVudGVkVmlydHVhbGl0eSxcbiAgICB2aWV3U3RhdGU6IHByb3BzLnZpZXdTdGF0ZSxcbiAgICB0ZXJyaWE6IHByb3BzLnZpZXdTdGF0ZS50ZXJyaWEsXG4gICAgZXhwZXJpbWVudGFsV2FybmluZzogdHJ1ZVxuICB9KSA6IG51bGwpKTtcbn1cblxuVXNlckludGVyZmFjZS5wcm9wVHlwZXMgPSB7XG4gIHRlcnJpYTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB2aWV3U3RhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdFxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicmNTbGlkZXJUb29sdGlwWm9vbURvd25JblwiOlwidG0tZ2xvYmFsX19yY1NsaWRlclRvb2x0aXBab29tRG93bkluXCIsXCJyY1NsaWRlclRvb2x0aXBab29tRG93bk91dFwiOlwidG0tZ2xvYmFsX19yY1NsaWRlclRvb2x0aXBab29tRG93bk91dFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZHJvcGRvd24taW5uZXJcIjpcInRtLXJlbGF0ZWQtbWFwc19fZHJvcGRvd24taW5uZXJcIixcImRyb3Bkb3duSW5uZXJcIjpcInRtLXJlbGF0ZWQtbWFwc19fZHJvcGRvd24taW5uZXJcIixcInNlY3Rpb25cIjpcInRtLXJlbGF0ZWQtbWFwc19fc2VjdGlvbiB0bS1fYmFzZV9fY2xlYXJmaXhcIixcImltYWdlXCI6XCJ0bS1yZWxhdGVkLW1hcHNfX2ltYWdlXCIsXCJsaW5rXCI6XCJ0bS1yZWxhdGVkLW1hcHNfX2xpbmsgdG0tX2Jhc2VfX2xpbmtcIn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlbmRlclVpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9yZWRib3hSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlZGJveC1yZWFjdFwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZW5kZXJVaSh0ZXJyaWEsIGFsbEJhc2VNYXBzLCB2aWV3U3RhdGUpIHtcbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgVUkgPSByZXF1aXJlKFwiLi9Vc2VySW50ZXJmYWNlXCIpW1wiZGVmYXVsdFwiXTtcblxuICAgIF9yZWFjdERvbVtcImRlZmF1bHRcIl0ucmVuZGVyKF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVSSwge1xuICAgICAgdGVycmlhOiB0ZXJyaWEsXG4gICAgICBhbGxCYXNlTWFwczogYWxsQmFzZU1hcHMsXG4gICAgICB2aWV3U3RhdGU6IHZpZXdTdGF0ZVxuICAgIH0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpKTtcbiAgfTtcblxuICBpZiAobW9kdWxlLmhvdCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBTdXBwb3J0IGhvdCByZWxvYWRpbmcgb2YgY29tcG9uZW50c1xuICAgIC8vIGFuZCBkaXNwbGF5IGFuIG92ZXJsYXkgZm9yIHJ1bnRpbWUgZXJyb3JzXG4gICAgdmFyIHJlbmRlckFwcCA9IHJlbmRlcjtcblxuICAgIHZhciByZW5kZXJFcnJvciA9IGZ1bmN0aW9uIHJlbmRlckVycm9yKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xuXG4gICAgICBfcmVhY3REb21bXCJkZWZhdWx0XCJdLnJlbmRlcihfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX3JlZGJveFJlYWN0W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgIH0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVuZGVyQXBwKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZW5kZXJFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VySW50ZXJmYWNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQocmVuZGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gJ3Bvc3QtcHJldHRpZXItNDAtZ2ViM2Q3YTg3JzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZWRmYmU0OWY4NWU2OTk0ZWJiNzMyYTExMGEzYzUwMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0YmM5YjE0Mzc0NzI2MGRhZDcxZmQ5OTUxYjM2NGUzYS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZmM2ZGU0OWM4YmVmMGE4OWYyNWNhOWJhMzdkZWI4MS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNWFkMDc4ZDZkNGZmN2ZjMDhlZjZhMzEwNWRjMmVmOS5qcGdcIjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4SUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xFQTtBQUNBOzs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0F5QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==