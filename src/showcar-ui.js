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
}

// Make sure these variables are initialized in case somebody uses them unintialized before they are loaded
window.ut = window.ut || [];
window.dataLayer = window.dataLayer || [];

let warn = msg => window.console && window.console.warn(msg);
let showcar = {};

// Dropdown
import dropdown from './06-components/atoms/custom-dropdown/custom-dropdown';
dropdown('custom-dropdown');

// highlighter
import highlighter from './06-components/atoms/highlighter/highlighter';
highlighter();

// Pager
import Pager from './06-components/organisms/pagination/pagination';
window.Pager = Pager;

// Spy-navigation
import spyNavigation from './06-components/organisms/spy-navigation/spy-navigation';
showcar.spyNavigation = spyNavigation;

// Sticky js
import sticky from './05-layout/sticky/sticky';
sticky();

// Rotating-arrow
import rotatingArrow from './06-components/atoms/rotating-arrow/rotating-arrow'; // Todo: Check usages and remove
rotatingArrow();

// Collapse
import collapse from './06-components/atoms/collapse/collapse';
document.addEventListener('DOMContentLoaded', function() {
    collapse();
});

// stepper
import stepper from './06-components/atoms/stepper/stepper';
stepper();

// tabs-icon
import tabsIcon from './06-components/atoms/tabs/tabs-icons';
tabsIcon('tabs-icon');

// tabs-text
import tabsText from './06-components/atoms/tabs/tabs-text';
tabsText('tabs-text');

// tooltip2
import tooltip2 from './06-components/atoms/tooltip/tooltip';
tooltip2('as24-tooltip');

// lightbox
import lightbox from './06-components/atoms/lightbox/lightbox';
lightbox('as24-lightbox');

// google-map
import googleMap from './06-components/atoms/google-map/google-map';
googleMap('as24-google-map');

// tag
import tag from './06-components/atoms/tag/tag';
tag();

// navigation-v2
import navigationv2 from './06-components/organisms/navigation-v2/navigation-v2';
navigationv2();

// notification
import notification from './06-components/molecules/notification/notification'; // TODO: question for the guild
// TODO do we still need it?
if (!window.notification) {
    window.notification = notification('as24-notification');
} else {
    warn('window.notification is already registered.');
}

//Scroll
import registerSmoothScrolling from './07-utilities/scroll';
registerSmoothScrolling();

//Add borders to links when tab was hit
import accessibleLinks from './07-utilities/accessible-links';
accessibleLinks();

//Clean up cookies
import cleanCookies from './js/showcar-clean-cookies';
window.addEventListener('load', function() {
    cleanCookies();
});

// storage
window.Storage = require('showcar-storage');

//lazysizes
window.lazySizesConfig = {
    loadMode: 1,
    expFactor: 0,
    hFac: 0,
};
import 'lazysizes';

window.showcar = window.showcar || showcar;

export default showcar;
