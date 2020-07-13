"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _customDropdown = _interopRequireDefault(require("./06-components/atoms/custom-dropdown/custom-dropdown"));

var _pagination = _interopRequireDefault(require("./06-components/organisms/pagination/pagination"));

var _spyNavigation = _interopRequireDefault(require("./06-components/organisms/spy-navigation/spy-navigation"));

var _sticky = _interopRequireDefault(require("./05-layout/sticky/sticky"));

var _rotatingArrow = _interopRequireDefault(require("./06-components/atoms/rotating-arrow/rotating-arrow"));

var _collapse = _interopRequireDefault(require("./06-components/atoms/collapse/collapse"));

var _stepper = _interopRequireDefault(require("./06-components/atoms/stepper/stepper"));

var _tabsIcons = _interopRequireDefault(require("./06-components/atoms/tabs/tabs-icons"));

var _tabsText = _interopRequireDefault(require("./06-components/atoms/tabs/tabs-text"));

var _tooltip = _interopRequireDefault(require("./06-components/atoms/tooltip/tooltip"));

var _lightbox = _interopRequireDefault(require("./06-components/atoms/lightbox/lightbox"));

var _googleMap = _interopRequireDefault(require("./06-components/atoms/google-map/google-map"));

var _tag = _interopRequireDefault(require("./06-components/atoms/tag/tag"));

var _navigationV = _interopRequireDefault(require("./06-components/organisms/navigation-v2/navigation-v2"));

var _notification = _interopRequireDefault(require("./06-components/molecules/notification/notification"));

var _scroll = _interopRequireDefault(require("./07-utilities/scroll"));

var _accessibleLinks = _interopRequireDefault(require("./07-utilities/accessible-links"));

var _showcarCleanCookies = _interopRequireDefault(require("./js/showcar-clean-cookies"));

require("lazysizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Todo: remove Zepto
if (!window.$) {
  window.$ = window.Zepto = require('zepto-modules/zepto');

  require('zepto-modules/event');

  require('zepto-modules/ajax');

  require('zepto-modules/form');

  require('zepto-modules/ie');

  require('zepto-modules/detect');

  require('zepto-modules/assets');

  require('zepto-modules/data');

  require('zepto-modules/callbacks');

  require('zepto-modules/selector');

  require('zepto-modules/touch');

  require('zepto-modules/gesture');

  require('zepto-modules/fx');

  require('zepto-modules/fx_methods');
} // Make sure these variables are initialized in case somebody uses them unintialized before they are loaded


window.ut = window.ut || [];
window.dataLayer = window.dataLayer || [];

var warn = function warn(msg) {
  return window.console && window.console.warn(msg);
};

var showcar = {}; // Dropdown

(0, _customDropdown.default)('custom-dropdown'); // Pager

window.Pager = _pagination.default; // Spy-navigation

showcar.spyNavigation = _spyNavigation.default; // Sticky js

(0, _sticky.default)(); // Rotating-arrow

// Todo: Check usages and remove
(0, _rotatingArrow.default)(); // Collapse

document.addEventListener('DOMContentLoaded', function () {
  (0, _collapse.default)();
}); // stepper

(0, _stepper.default)(); // tabs-icon

(0, _tabsIcons.default)('tabs-icon'); // tabs-text

(0, _tabsText.default)('tabs-text'); // tooltip2

(0, _tooltip.default)('as24-tooltip'); // lightbox

(0, _lightbox.default)('as24-lightbox'); // google-map

(0, _googleMap.default)('as24-google-map'); // tag

(0, _tag.default)(); // navigation-v2

(0, _navigationV.default)(); // notification

// TODO: question for the guild
// TODO do we still need it?
if (!window.notification) {
  window.notification = (0, _notification.default)('as24-notification');
} else {
  warn('window.notification is already registered.');
} //Scroll


(0, _scroll.default)(); //Add borders to links when tab was hit

(0, _accessibleLinks.default)(); //Clean up cookies

window.addEventListener('load', function () {
  (0, _showcarCleanCookies.default)();
}); // storage

window.Storage = require('showcar-storage'); //lazysizes

window.lazySizesConfig = {
  loadMode: 1,
  expFactor: 0,
  hFac: 0
};
window.showcar = window.showcar || showcar;
var _default = showcar;
exports.default = _default;