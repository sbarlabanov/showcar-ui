/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/showcar-ui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (window, factory) {
  var lazySizes = factory(window, window.document, Date);
  window.lazySizes = lazySizes;

  if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
    module.exports = lazySizes;
  }
})(typeof window != 'undefined' ? window : {}, function l(window, document, Date) {
  // Pass in the windoe Date function also for SSR because the Date class can be lost
  'use strict';
  /*jshint eqnull:true */

  var lazysizes, lazySizesCfg;

  (function () {
    var prop;
    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125
    };
    lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

    for (prop in lazySizesDefaults) {
      if (!(prop in lazySizesCfg)) {
        lazySizesCfg[prop] = lazySizesDefaults[prop];
      }
    }
  })();

  if (!document || !document.getElementsByClassName) {
    return {
      init: function init() {},
      cfg: lazySizesCfg,
      noSupport: true
    };
  }

  var docElem = document.documentElement;
  var supportPicture = window.HTMLPictureElement;
  var _addEventListener = 'addEventListener';
  var _getAttribute = 'getAttribute';
  /**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */

  var addEventListener = window[_addEventListener].bind(window);

  var setTimeout = window.setTimeout;
  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
  var requestIdleCallback = window.requestIdleCallback;
  var regPicture = /^picture$/i;
  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
  var regClassCache = {};
  var forEach = Array.prototype.forEach;

  var hasClass = function hasClass(ele, cls) {
    if (!regClassCache[cls]) {
      regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    }

    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function removeClass(ele, cls) {
    var reg;

    if (reg = hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
    var action = add ? _addEventListener : 'removeEventListener';

    if (add) {
      addRemoveLoadEvents(dom, fn);
    }

    loadEvents.forEach(function (evt) {
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
    var event = document.createEvent('Event');

    if (!detail) {
      detail = {};
    }

    detail.instance = lazysizes;
    event.initEvent(name, !noBubbles, !noCancelable);
    event.detail = detail;
    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function updatePolyfill(el, full) {
    var polyfill;

    if (!supportPicture && (polyfill = window.picturefill || lazySizesCfg.pf)) {
      if (full && full.src && !el[_getAttribute]('srcset')) {
        el.setAttribute('srcset', full.src);
      }

      polyfill({
        reevaluate: true,
        elements: [el]
      });
    } else if (full && full.src) {
      el.src = full.src;
    }
  };

  var getCSS = function getCSS(elem, style) {
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function getWidth(elem, parent, width) {
    width = width || elem.offsetWidth;

    while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
      width = parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = function () {
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function run() {
      var runFns = fns;
      fns = firstFns.length ? secondFns : firstFns;
      running = true;
      waiting = false;

      while (runFns.length) {
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function rafBatch(fn, queue) {
      if (running && !queue) {
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if (!waiting) {
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;
    return rafBatch;
  }();

  var rAFIt = function rAFIt(fn, simple) {
    return simple ? function () {
      rAF(fn);
    } : function () {
      var that = this;
      var args = arguments;
      rAF(function () {
        fn.apply(that, args);
      });
    };
  };

  var throttle = function throttle(fn) {
    var running;
    var lastTime = 0;
    var gDelay = lazySizesCfg.throttleDelay;
    var rICTimeout = lazySizesCfg.ricTimeout;

    var run = function run() {
      running = false;
      lastTime = Date.now();
      fn();
    };

    var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
      requestIdleCallback(run, {
        timeout: rICTimeout
      });

      if (rICTimeout !== lazySizesCfg.ricTimeout) {
        rICTimeout = lazySizesCfg.ricTimeout;
      }
    } : rAFIt(function () {
      setTimeout(run);
    }, true);
    return function (isPriority) {
      var delay;

      if (isPriority = isPriority === true) {
        rICTimeout = 33;
      }

      if (running) {
        return;
      }

      running = true;
      delay = gDelay - (Date.now() - lastTime);

      if (delay < 0) {
        delay = 0;
      }

      if (isPriority || delay < 9) {
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


  var debounce = function debounce(func) {
    var timeout, timestamp;
    var wait = 99;

    var run = function run() {
      timeout = null;
      func();
    };

    var later = function later() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function () {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  var loader = function () {
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;
    var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);
    var shrinkExpand = 0;
    var currentExpand = 0;
    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function resetPreloading(e) {
      isLoading--;

      if (!e || isLoading < 0 || !e.target) {
        isLoading = 0;
      }
    };

    var isVisible = function isVisible(elem) {
      if (isBodyHidden == null) {
        isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
      }

      return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
    };

    var isNestedVisible = function isNestedVisible(elem, elemExpand) {
      var outerRect;
      var parent = elem;
      var visible = isVisible(elem);
      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
        visible = (getCSS(parent, 'opacity') || 1) > 0;

        if (visible && getCSS(parent, 'overflow') != 'visible') {
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
        }
      }

      return visible;
    };

    var checkElements = function checkElements() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
      var lazyloadElems = lazysizes.elements;

      if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
        i = 0;
        lowRuns++;

        for (; i < eLlen; i++) {
          if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
            continue;
          }

          if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
            unveilElement(lazyloadElems[i]);
            continue;
          }

          if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
            elemExpand = currentExpand;
          }

          if (!defaultExpand) {
            defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
            lazysizes._defEx = defaultExpand;
            preloadExpand = defaultExpand * lazySizesCfg.expFactor;
            hFac = lazySizesCfg.hFac;
            isBodyHidden = null;

            if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }
          }

          if (beforeExpandVal !== elemExpand) {
            eLvW = innerWidth + elemExpand * hFac;
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;

            if (isLoading > 9) {
              break;
            }
          } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto'))) {
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if (autoLoadElem && !loadedSomething) {
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function switchLoadingClass(e) {
      var elem = e.target;

      if (elem._lazyCache) {
        delete elem._lazyCache;
        return;
      }

      resetPreloading(e);
      addClass(elem, lazySizesCfg.loadedClass);
      removeClass(elem, lazySizesCfg.loadingClass);
      addRemoveLoadEvents(elem, rafSwitchLoadingClass);
      triggerEvent(elem, 'lazyloaded');
    };

    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

    var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
      rafedSwitchLoadingClass({
        target: e.target
      });
    };

    var changeIframeSrc = function changeIframeSrc(elem, src) {
      try {
        elem.contentWindow.location.replace(src);
      } catch (e) {
        elem.src = src;
      }
    };

    var handleSources = function handleSources(source) {
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

      if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
        source.setAttribute('media', customMedia);
      }

      if (sourceSrcset) {
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
      var src, srcset, parent, isPicture, event, firesLoad;

      if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
        if (sizes) {
          if (isAuto) {
            addClass(elem, lazySizesCfg.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
        src = elem[_getAttribute](lazySizesCfg.srcAttr);

        if (isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
        event = {
          target: elem
        };
        addClass(elem, lazySizesCfg.loadingClass);

        if (firesLoad) {
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if (isPicture) {
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if (srcset) {
          elem.setAttribute('srcset', srcset);
        } else if (src && !isPicture) {
          if (regIframe.test(elem.nodeName)) {
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if (isImg && (srcset || isPicture)) {
          updatePolyfill(elem, {
            src: src
          });
        }
      }

      if (elem._lazyRace) {
        delete elem._lazyRace;
      }

      removeClass(elem, lazySizesCfg.lazyClass);
      rAF(function () {
        // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
        var isLoaded = elem.complete && elem.naturalWidth > 1;

        if (!firesLoad || isLoaded) {
          if (isLoaded) {
            addClass(elem, 'ls-is-cached');
          }

          switchLoadingClass(event);
          elem._lazyCache = true;
          setTimeout(function () {
            if ('_lazyCache' in elem) {
              delete elem._lazyCache;
            }
          }, 9);
        }

        if (elem.loading == 'lazy') {
          isLoading--;
        }
      }, true);
    });

    var unveilElement = function unveilElement(elem) {
      if (elem._lazyRace) {
        return;
      }

      var detail;
      var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

      var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));

      var isAuto = sizes == 'auto';

      if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
        return;
      }

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if (isAuto) {
        autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var afterScroll = debounce(function () {
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
    });

    var altLoadmodeScrollListner = function altLoadmodeScrollListner() {
      if (lazySizesCfg.loadMode == 3) {
        lazySizesCfg.loadMode = 2;
      }

      afterScroll();
    };

    var onload = function onload() {
      if (isCompleted) {
        return;
      }

      if (Date.now() - started < 999) {
        setTimeout(onload, 999);
        return;
      }

      isCompleted = true;
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
      addEventListener('scroll', altLoadmodeScrollListner, true);
    };

    return {
      _: function _() {
        started = Date.now();
        lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);
        addEventListener('scroll', throttledCheckElements, true);
        addEventListener('resize', throttledCheckElements, true);
        addEventListener('pageshow', function (e) {
          if (e.persisted) {
            var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

            if (loadingElements.length && loadingElements.forEach) {
              requestAnimationFrame(function () {
                loadingElements.forEach(function (img) {
                  if (img.complete) {
                    unveilElement(img);
                  }
                });
              });
            }
          }
        });

        if (window.MutationObserver) {
          new MutationObserver(throttledCheckElements).observe(docElem, {
            childList: true,
            subtree: true,
            attributes: true
          });
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (name) {
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if (/d$|^c/.test(document.readyState)) {
          onload();
        } else {
          addEventListener('load', onload);

          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

          setTimeout(onload, 20000);
        }

        if (lazysizes.elements.length) {
          checkElements();

          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement,
      _aLSL: altLoadmodeScrollListner
    };
  }();

  var autoSizer = function () {
    var autosizesElems;
    var sizeElement = rAFIt(function (elem, parent, event, width) {
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';
      elem.setAttribute('sizes', width);

      if (regPicture.test(parent.nodeName || '')) {
        sources = parent.getElementsByTagName('source');

        for (i = 0, len = sources.length; i < len; i++) {
          sources[i].setAttribute('sizes', width);
        }
      }

      if (!event.detail.dataAttr) {
        updatePolyfill(elem, event.detail);
      }
    });

    var getSizeElement = function getSizeElement(elem, dataAttr, width) {
      var event;
      var parent = elem.parentNode;

      if (parent) {
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {
          width: width,
          dataAttr: !!dataAttr
        });

        if (!event.defaultPrevented) {
          width = event.detail.width;

          if (width && width !== elem._lazysizesWidth) {
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function updateElementsSizes() {
      var i;
      var len = autosizesElems.length;

      if (len) {
        i = 0;

        for (; i < len; i++) {
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
    return {
      _: function _() {
        autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  }();

  var init = function init() {
    if (!init.i && document.getElementsByClassName) {
      init.i = true;

      autoSizer._();

      loader._();
    }
  };

  setTimeout(function () {
    if (lazySizesCfg.init) {
      init();
    }
  });
  lazysizes = {
    cfg: lazySizesCfg,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF
  };
  return lazysizes;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/showcar-storage/src/storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/showcar-storage/src/storage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var stores = {
  local: __webpack_require__(/*! ./stores/local.js */ "./node_modules/showcar-storage/src/stores/local.js"),
  session: __webpack_require__(/*! ./stores/session.js */ "./node_modules/showcar-storage/src/stores/session.js"),
  cookie: __webpack_require__(/*! ./stores/cookie.js */ "./node_modules/showcar-storage/src/stores/cookie.js")
};

var Storage = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {string} type The store backend to use
   * @param {boolean} [silent=true] Whether to throw exceptions or fail silently returning false
   */
  function Storage(type) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$silent = _ref.silent,
        silent = _ref$silent === void 0 ? true : _ref$silent;

    _classCallCheck(this, Storage);

    if (!(type in stores)) {
      this.fail("Storage: Unsupported type ".concat(type));
    }

    this.silent = !!silent;
    this.store = new stores[type]();
  }
  /**
   * Gets the stored value for a specified key
   * @param {string} key The key to look up
   * @param defaultValue Return this if no value has been found
   * @throws {Error} If not silent
   * @returns {string} The stored value or defaultValue
   */


  _createClass(Storage, [{
    key: "get",
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      try {
        var result = this.store.get(key);

        if (null === result) {
          return defaultValue;
        }

        return result;
      } catch (e) {
        return this.fail(e);
      }
    }
    /**
     * Writes a value to the store under the specified key
     * @param {string} key The key to use when storing
     * @param {string} value The value to store
     * @param {object} [options] A map of options. See the respective backends.
     * @throws {Error} If not silent
     * @returns {Storage|boolean} If silent, returns false on error. Returns this on success.
     */

  }, {
    key: "set",
    value: function set(key, value, options) {
      try {
        this.store.set(key, value, options);
        return this;
      } catch (e) {
        return this.fail(e);
      }
    }
    /**
     * Checks whether the store knows about the specified key
     * @param {string} key The key to check for existance
     * @throws {Error} If not silent
     * @returns {boolean} If silent, returns false on error (!!)
     */

  }, {
    key: "has",
    value: function has(key) {
      try {
        return this.store.has(key);
      } catch (e) {
        return this.fail(e);
      }
    }
    /**
     * Deletes the specified key and its value from the store
     * @param {string} key The key to delete
     * @returns {Storage|boolean} If silent, returns false on error
     */

  }, {
    key: "remove",
    value: function remove(key) {
      try {
        this.store.remove(key);
        return this;
      } catch (e) {
        return this.fail(e);
      }
    }
    /**
     * Wrapper for error handling
     * @private
     * @param {Error|string} reason What is happening?
     * @returns {boolean}
     */

  }, {
    key: "fail",
    value: function fail(reason) {
      if (this.silent) {
        return false;
      }

      if (!reason instanceof Error) {
        reason = new Error(reason);
      }

      throw reason;
    }
  }]);

  return Storage;
}();

module.exports = Storage;

/***/ }),

/***/ "./node_modules/showcar-storage/src/stores/cookie.js":
/*!***********************************************************!*\
  !*** ./node_modules/showcar-storage/src/stores/cookie.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function CookieStore() {
    _classCallCheck(this, CookieStore);
  }

  _createClass(CookieStore, [{
    key: "get",
    value: function get(key) {
      var matchedCookie = this.matchSingleCookie(document.cookie, key);

      if (matchedCookie instanceof Array && matchedCookie[1] !== undefined) {
        try {
          return decodeURIComponent(matchedCookie[1]);
        } catch (e) {
          return matchedCookie[1];
        }
      }

      return null;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$expires = _ref.expires,
          expires = _ref$expires === void 0 ? "Fri, 31 Dec 9999 23:59:59 GMT" : _ref$expires,
          _ref$path = _ref.path,
          path = _ref$path === void 0 ? "/" : _ref$path;

      // support expires in seconds
      if (!isNaN(parseFloat(expires)) && isFinite(expires)) {
        expires = new Date(Date.now() + parseInt(expires) * 1000).toUTCString();
      } // support expires as date-object


      if (expires instanceof Date) {
        expires = expires.toUTCString();
      }

      document.cookie = ["".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)), "expires=".concat(expires), "path=".concat(path)].join("; ");
    }
  }, {
    key: "has",
    value: function has(key) {
      return null !== this.get(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.set(key, "", "Thu, 01 Jan 1970 00:00:00 GMT");
    }
  }, {
    key: "matchSingleCookie",
    value: function matchSingleCookie(cookies, key) {
      var saneKey = encodeURIComponent(key).replace(/[-\.+\*]/g, "$&");
      var regExp = new RegExp("(?:(?:^|.*;)s*".concat(saneKey, "s*=s*([^;]*).*$)|^.*$"));
      return cookies.match(regExp);
    }
  }]);

  return CookieStore;
}();

/***/ }),

/***/ "./node_modules/showcar-storage/src/stores/local.js":
/*!**********************************************************!*\
  !*** ./node_modules/showcar-storage/src/stores/local.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function LocalStore() {
    _classCallCheck(this, LocalStore);
  }

  _createClass(LocalStore, [{
    key: "get",
    value: function get(key) {
      return localStorage.getItem(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      localStorage.setItem(key, value);
    }
  }, {
    key: "has",
    value: function has(key) {
      return null !== localStorage.getItem(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      localStorage.removeItem(key);
    }
  }]);

  return LocalStore;
}();

/***/ }),

/***/ "./node_modules/showcar-storage/src/stores/session.js":
/*!************************************************************!*\
  !*** ./node_modules/showcar-storage/src/stores/session.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function SessionStore() {
    _classCallCheck(this, SessionStore);
  }

  _createClass(SessionStore, [{
    key: "get",
    value: function get(key) {
      return sessionStorage.getItem(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      sessionStorage.setItem(key, value);
    }
  }, {
    key: "has",
    value: function has(key) {
      return null !== sessionStorage.getItem(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      sessionStorage.removeItem(key);
    }
  }]);

  return SessionStore;
}();

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/zepto-modules/ajax.js":
/*!********************************************!*\
  !*** ./node_modules/zepto-modules/ajax.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  var jsonpID = +new Date(),
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a');
  originAnchor.href = window.location.href; // trigger a custom event and return false if it was cancelled

  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName);
    $(context).trigger(event, data);
    return !event.isDefaultPrevented();
  } // trigger an Ajax "global" event


  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data);
  } // Number of active Ajax requests


  $.active = 0;

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
  }

  function ajaxStop(settings) {
    if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
  } // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable


  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context;
    if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;
    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
  }

  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context,
        status = 'success';
    settings.success.call(context, data, status, xhr);
    if (deferred) deferred.resolveWith(context, [data, status, xhr]);
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
    ajaxComplete(status, xhr, settings);
  } // type: "timeout", "error", "abort", "parsererror"


  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context;
    settings.error.call(context, xhr, type, error);
    if (deferred) deferred.rejectWith(context, [xhr, type, error]);
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
    ajaxComplete(type, xhr, settings);
  } // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"


  function ajaxComplete(status, xhr, settings) {
    var context = settings.context;
    settings.complete.call(context, xhr, status);
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
    ajaxStop(settings);
  }

  function ajaxDataFilter(data, type, settings) {
    if (settings.dataFilter == empty) return data;
    var context = settings.context;
    return settings.dataFilter.call(context, data, type);
  } // Empty function, used as default callback


  function empty() {}

  $.ajaxJSONP = function (options, deferred) {
    if (!('type' in options)) return $.ajax(options);

    var _callbackName = options.jsonpCallback,
        callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'Zepto' + jsonpID++,
        script = document.createElement('script'),
        originalCallback = window[callbackName],
        responseData,
        abort = function abort(errorType) {
      $(script).triggerHandler('error', errorType || 'abort');
    },
        xhr = {
      abort: abort
    },
        abortTimeout;

    if (deferred) deferred.promise(xhr);
    $(script).on('load error', function (e, errorType) {
      clearTimeout(abortTimeout);
      $(script).off().remove();

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred);
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred);
      }

      window[callbackName] = originalCallback;
      if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);
      originalCallback = responseData = undefined;
    });

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort');
      return xhr;
    }

    window[callbackName] = function () {
      responseData = arguments;
    };

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
    document.head.appendChild(script);
    if (options.timeout > 0) abortTimeout = setTimeout(function () {
      abort('timeout');
    }, options.timeout);
    return xhr;
  };

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function xhr() {
      return new window.XMLHttpRequest();
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json: jsonType,
      xml: 'application/xml, text/xml',
      html: htmlType,
      text: 'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
    //Used to handle the raw response data of XMLHttpRequest.
    //This is a pre-filtering function to sanitize the response.
    //The sanitized response should be returned
    dataFilter: empty
  };

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0];
    return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
  }

  function appendQuery(url, query) {
    if (query == '') return url;
    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
  } // serialize payload and append it to the URL for GET requests


  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType)) options.url = appendQuery(options.url, options.data), options.data = undefined;
  }

  $.ajax = function (options) {
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor,
        hashIndex;

    for (key in $.ajaxSettings) {
      if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
    }

    ajaxStart(settings);

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a');
      urlAnchor.href = settings.url; // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049

      urlAnchor.href = urlAnchor.href;
      settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
    }

    if (!settings.url) settings.url = window.location.toString();
    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex);
    serializeData(settings);
    var dataType = settings.dataType,
        hasPlaceholder = /\?.+=\?/.test(settings.url);
    if (hasPlaceholder) dataType = 'jsonp';
    if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

    if ('jsonp' == dataType) {
      if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
      return $.ajaxJSONP(settings, deferred);
    }

    var mime = settings.accepts[dataType],
        headers = {},
        setHeader = function setHeader(name, value) {
      headers[name.toLowerCase()] = [name, value];
    },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout;

    if (deferred) deferred.promise(xhr);
    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
    setHeader('Accept', mime || '*/*');

    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
      xhr.overrideMimeType && xhr.overrideMimeType(mime);
    }

    if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
    if (settings.headers) for (name in settings.headers) {
      setHeader(name, settings.headers[name]);
    }
    xhr.setRequestHeader = setHeader;

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty;
        clearTimeout(abortTimeout);
        var result,
            error = false;

        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') result = xhr.response;else {
            result = xhr.responseText;

            try {
              // http://perfectionkills.com/global-eval-what-are-the-options/
              // sanitize response accordingly if data filter callback provided
              result = ajaxDataFilter(result, dataType, settings);
              if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
            } catch (e) {
              error = e;
            }

            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred);
          }
          ajaxSuccess(result, xhr, settings, deferred);
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
        }
      }
    };

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort();
      ajaxError(null, 'abort', xhr, settings, deferred);
      return xhr;
    }

    var async = 'async' in settings ? settings.async : true;
    xhr.open(settings.type, settings.url, async, settings.username, settings.password);
    if (settings.xhrFields) for (name in settings.xhrFields) {
      xhr[name] = settings.xhrFields[name];
    }

    for (name in headers) {
      nativeSetHeader.apply(xhr, headers[name]);
    }

    if (settings.timeout > 0) abortTimeout = setTimeout(function () {
      xhr.onreadystatechange = empty;
      xhr.abort();
      ajaxError(null, 'timeout', xhr, settings, deferred);
    }, settings.timeout); // avoid sending empty string (#319)

    xhr.send(settings.data ? settings.data : null);
    return xhr;
  }; // handle optional data/success arguments


  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined;
    if (!$.isFunction(success)) dataType = success, success = undefined;
    return {
      url: url,
      data: data,
      success: success,
      dataType: dataType
    };
  }

  $.get = function ()
  /* url, data, success, dataType */
  {
    return $.ajax(parseArguments.apply(null, arguments));
  };

  $.post = function ()
  /* url, data, success, dataType */
  {
    var options = parseArguments.apply(null, arguments);
    options.type = 'POST';
    return $.ajax(options);
  };

  $.getJSON = function ()
  /* url, data, success */
  {
    var options = parseArguments.apply(null, arguments);
    options.dataType = 'json';
    return $.ajax(options);
  };

  $.fn.load = function (url, data, success) {
    if (!this.length) return this;
    var self = this,
        parts = url.split(/\s/),
        selector,
        options = parseArguments(url, data, success),
        callback = options.success;
    if (parts.length > 1) options.url = parts[0], selector = parts[1];

    options.success = function (response) {
      self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
      callback && callback.apply(self, arguments);
    };

    $.ajax(options);
    return this;
  };

  var escape = encodeURIComponent;

  function serialize(params, obj, traditional, scope) {
    var type,
        array = $.isArray(obj),
        hash = $.isPlainObject(obj);
    $.each(obj, function (key, value) {
      type = $.type(value);
      if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'; // handle data in serializeArray() format

      if (!scope && array) params.add(value.name, value.value); // recurse into nested objects
      else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
    });
  }

  $.param = function (obj, traditional) {
    var params = [];

    params.add = function (key, value) {
      if ($.isFunction(value)) value = value();
      if (value == null) value = "";
      this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj, traditional);
    return params.join('&').replace(/%20/g, '+');
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/assets.js":
/*!**********************************************!*\
  !*** ./node_modules/zepto-modules/assets.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  var cache = [],
      timeout;

  $.fn.remove = function () {
    return this.each(function () {
      if (this.parentNode) {
        if (this.tagName === 'IMG') {
          cache.push(this);
          this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(function () {
            cache = [];
          }, 60000);
        }

        this.parentNode.removeChild(this);
      }
    });
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/callbacks.js":
/*!*************************************************!*\
  !*** ./node_modules/zepto-modules/callbacks.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function (options) {
    options = $.extend({}, options);

    var memory,
        // Last fire value (for non-forgettable lists)
    _fired,
        // Flag to know if list was already fired
    firing,
        // Flag to know if list is currently firing
    firingStart,
        // First callback to fire (used internally by add and fireWith)
    firingLength,
        // End of the loop when firing
    firingIndex,
        // Index of currently firing callback (modified by remove if needed)
    list = [],
        // Actual callback list
    stack = !options.once && [],
        // Stack of fire calls for repeatable lists
    fire = function fire(data) {
      memory = options.memory && data;
      _fired = true;
      firingIndex = firingStart || 0;
      firingStart = 0;
      firingLength = list.length;
      firing = true;

      for (; list && firingIndex < firingLength; ++firingIndex) {
        if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
          memory = false;
          break;
        }
      }

      firing = false;

      if (list) {
        if (stack) stack.length && fire(stack.shift());else if (memory) list.length = 0;else Callbacks.disable();
      }
    },
        Callbacks = {
      add: function add() {
        if (list) {
          var start = list.length,
              add = function add(args) {
            $.each(args, function (_, arg) {
              if (typeof arg === "function") {
                if (!options.unique || !Callbacks.has(arg)) list.push(arg);
              } else if (arg && arg.length && typeof arg !== 'string') add(arg);
            });
          };

          add(arguments);
          if (firing) firingLength = list.length;else if (memory) {
            firingStart = start;
            fire(memory);
          }
        }

        return this;
      },
      remove: function remove() {
        if (list) {
          $.each(arguments, function (_, arg) {
            var index;

            while ((index = $.inArray(arg, list, index)) > -1) {
              list.splice(index, 1); // Handle firing indexes

              if (firing) {
                if (index <= firingLength) --firingLength;
                if (index <= firingIndex) --firingIndex;
              }
            }
          });
        }

        return this;
      },
      has: function has(fn) {
        return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length));
      },
      empty: function empty() {
        firingLength = list.length = 0;
        return this;
      },
      disable: function disable() {
        list = stack = memory = undefined;
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      lock: function lock() {
        stack = undefined;
        if (!memory) Callbacks.disable();
        return this;
      },
      locked: function locked() {
        return !stack;
      },
      fireWith: function fireWith(context, args) {
        if (list && (!_fired || stack)) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          if (firing) stack.push(args);else fire(args);
        }

        return this;
      },
      fire: function fire() {
        return Callbacks.fireWith(this, arguments);
      },
      fired: function fired() {
        return !!_fired;
      }
    };

    return Callbacks;
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/data.js":
/*!********************************************!*\
  !*** ./node_modules/zepto-modules/data.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
// The following code is heavily inspired by jQuery's $.fn.data()
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  var data = {},
      dataAttr = $.fn.data,
      camelize = $.camelCase,
      exp = $.expando = 'Zepto' + +new Date(),
      emptyArray = []; // Get value from node:
  // 1. first try key as given,
  // 2. then try camelized key,
  // 3. fall back to reading "data-*" attribute.

  function getData(node, name) {
    var id = node[exp],
        store = id && data[id];
    if (name === undefined) return store || setData(node);else {
      if (store) {
        if (name in store) return store[name];
        var camelName = camelize(name);
        if (camelName in store) return store[camelName];
      }

      return dataAttr.call($(node), name);
    }
  } // Store value under camelized key on node


  function setData(node, name, value) {
    var id = node[exp] || (node[exp] = ++$.uuid),
        store = data[id] || (data[id] = attributeData(node));
    if (name !== undefined) store[camelize(name)] = value;
    return store;
  } // Read all "data-*" attributes from a node


  function attributeData(node) {
    var store = {};
    $.each(node.attributes || emptyArray, function (i, attr) {
      if (attr.name.indexOf('data-') == 0) store[camelize(attr.name.replace('data-', ''))] = $.zepto.deserializeValue(attr.value);
    });
    return store;
  }

  $.fn.data = function (name, value) {
    return value === undefined ? // set multiple values via object
    $.isPlainObject(name) ? this.each(function (i, node) {
      $.each(name, function (key, value) {
        setData(node, key, value);
      });
    }) : // get value from first element
    0 in this ? getData(this[0], name) : undefined : // set value on all elements
    this.each(function () {
      setData(this, name, value);
    });
  };

  $.data = function (elem, name, value) {
    return $(elem).data(name, value);
  };

  $.hasData = function (elem) {
    var id = elem[exp],
        store = id && data[id];
    return store ? !$.isEmptyObject(store) : false;
  };

  $.fn.removeData = function (names) {
    if (typeof names == 'string') names = names.split(/\s+/);
    return this.each(function () {
      var id = this[exp],
          store = id && data[id];
      if (store) $.each(names || store, function (key) {
        delete store[names ? camelize(this) : key];
      });
    });
  } // Generate extended `remove` and `empty` functions
  ;

  ['remove', 'empty'].forEach(function (methodName) {
    var origFn = $.fn[methodName];

    $.fn[methodName] = function () {
      var elements = this.find('*');
      if (methodName === 'remove') elements = elements.add(this);
      elements.removeData();
      return origFn.call(this);
    };
  });
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/detect.js":
/*!**********************************************!*\
  !*** ./node_modules/zepto-modules/detect.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  function detect(ua, platform) {
    var os = this.os = {},
        browser = this.browser = {},
        webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
        osx = !!ua.match(/\(Macintosh\; Intel /),
        ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
        iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        win = /Win\d{2}|Windows/.test(platform),
        wp = ua.match(/Windows Phone ([\d.]+)/),
        touchpad = webos && ua.match(/TouchPad/),
        kindle = ua.match(/Kindle\/([\d.]+)/),
        silk = ua.match(/Silk\/([\d._]+)/),
        blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
        bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
        rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        playbook = ua.match(/PlayBook/),
        chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
        firefox = ua.match(/Firefox\/([\d.]+)/),
        firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
        ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/); // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes

    if (browser.webkit = !!webkit) browser.version = webkit[1];
    if (android) os.android = true, os.version = android[2];
    if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
    if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    if (wp) os.wp = true, os.version = wp[1];
    if (webos) os.webos = true, os.version = webos[2];
    if (touchpad) os.touchpad = true;
    if (blackberry) os.blackberry = true, os.version = blackberry[2];
    if (bb10) os.bb10 = true, os.version = bb10[2];
    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
    if (playbook) browser.playbook = true;
    if (kindle) os.kindle = true, os.version = kindle[1];
    if (silk) browser.silk = true, browser.version = silk[1];
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
    if (chrome) browser.chrome = true, browser.version = chrome[1];
    if (firefox) browser.firefox = true, browser.version = firefox[1];
    if (firefoxos) os.firefoxos = true, os.version = firefoxos[1];
    if (ie) browser.ie = true, browser.version = ie[1];

    if (safari && (osx || os.ios || win)) {
      browser.safari = true;
      if (!os.ios) browser.version = safari[1];
    }

    if (webview) browser.webview = true;
    os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));
    os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));
  }

  detect.call($, navigator.userAgent, navigator.platform); // make available to unit tests

  $.__detect = detect;
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/event.js":
/*!*********************************************!*\
  !*** ./node_modules/zepto-modules/event.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  var _zid = 1,
      undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function isString(obj) {
    return typeof obj == 'string';
  },
      handlers = {},
      specialEvents = {},
      focusinSupported = ('onfocusin' in window),
      focus = {
    focus: 'focusin',
    blur: 'focusout'
  },
      hover = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

  function zid(element) {
    return element._zid || (element._zid = _zid++);
  }

  function findHandlers(element, event, fn, selector) {
    event = parse(event);
    if (event.ns) var matcher = matcherFor(event.ns);
    return (handlers[zid(element)] || []).filter(function (handler) {
      return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
    });
  }

  function parse(event) {
    var parts = ('' + event).split('.');
    return {
      e: parts[0],
      ns: parts.slice(1).sort().join(' ')
    };
  }

  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
  }

  function eventCapture(handler, captureSetting) {
    return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
  }

  function realEvent(type) {
    return hover[type] || focusinSupported && focus[type] || type;
  }

  function add(element, events, fn, data, selector, delegator, capture) {
    var id = zid(element),
        set = handlers[id] || (handlers[id] = []);
    events.split(/\s/).forEach(function (event) {
      if (event == 'ready') return $(document).ready(fn);
      var handler = parse(event);
      handler.fn = fn;
      handler.sel = selector; // emulate mouseenter, mouseleave

      if (handler.e in hover) fn = function fn(e) {
        var related = e.relatedTarget;
        if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
      };
      handler.del = delegator;
      var callback = delegator || fn;

      handler.proxy = function (e) {
        e = compatible(e);
        if (e.isImmediatePropagationStopped()) return;
        e.data = data;
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
        if (result === false) e.preventDefault(), e.stopPropagation();
        return result;
      };

      handler.i = set.length;
      set.push(handler);
      if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
    });
  }

  function remove(element, events, fn, selector, capture) {
    var id = zid(element);
    (events || '').split(/\s/).forEach(function (event) {
      findHandlers(element, event, fn, selector).forEach(function (handler) {
        delete handlers[id][handler.i];
        if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    });
  }

  $.event = {
    add: add,
    remove: remove
  };

  $.proxy = function (fn, context) {
    var args = 2 in arguments && slice.call(arguments, 2);

    if (isFunction(fn)) {
      var proxyFn = function proxyFn() {
        return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
      };

      proxyFn._zid = zid(fn);
      return proxyFn;
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn);
        return $.proxy.apply(null, args);
      } else {
        return $.proxy(fn[context], fn);
      }
    } else {
      throw new TypeError("expected function");
    }
  };

  $.fn.bind = function (event, data, callback) {
    return this.on(event, data, callback);
  };

  $.fn.unbind = function (event, callback) {
    return this.off(event, callback);
  };

  $.fn.one = function (event, selector, data, callback) {
    return this.on(event, selector, data, callback, 1);
  };

  var returnTrue = function returnTrue() {
    return true;
  },
      returnFalse = function returnFalse() {
    return false;
  },
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
      eventMethods = {
    preventDefault: 'isDefaultPrevented',
    stopImmediatePropagation: 'isImmediatePropagationStopped',
    stopPropagation: 'isPropagationStopped'
  };

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event);
      $.each(eventMethods, function (name, predicate) {
        var sourceMethod = source[name];

        event[name] = function () {
          this[predicate] = returnTrue;
          return sourceMethod && sourceMethod.apply(source, arguments);
        };

        event[predicate] = returnFalse;
      });

      try {
        event.timeStamp || (event.timeStamp = Date.now());
      } catch (ignored) {}

      if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
    }

    return event;
  }

  function createProxy(event) {
    var key,
        proxy = {
      originalEvent: event
    };

    for (key in event) {
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
    }

    return compatible(proxy, event);
  }

  $.fn.delegate = function (selector, event, callback) {
    return this.on(event, selector, callback);
  };

  $.fn.undelegate = function (selector, event, callback) {
    return this.off(event, selector, callback);
  };

  $.fn.live = function (event, callback) {
    $(document.body).delegate(this.selector, event, callback);
    return this;
  };

  $.fn.die = function (event, callback) {
    $(document.body).undelegate(this.selector, event, callback);
    return this;
  };

  $.fn.on = function (event, selector, data, callback, one) {
    var autoRemove,
        delegator,
        $this = this;

    if (event && !isString(event)) {
      $.each(event, function (type, fn) {
        $this.on(type, selector, data, fn, one);
      });
      return $this;
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
    if (callback === undefined || data === false) callback = data, data = undefined;
    if (callback === false) callback = returnFalse;
    return $this.each(function (_, element) {
      if (one) autoRemove = function autoRemove(e) {
        remove(element, e.type, callback);
        return callback.apply(this, arguments);
      };
      if (selector) delegator = function delegator(e) {
        var evt,
            match = $(e.target).closest(selector, element).get(0);

        if (match && match !== element) {
          evt = $.extend(createProxy(e), {
            currentTarget: match,
            liveFired: element
          });
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
        }
      };
      add(element, event, callback, data, selector, delegator || autoRemove);
    });
  };

  $.fn.off = function (event, selector, callback) {
    var $this = this;

    if (event && !isString(event)) {
      $.each(event, function (type, fn) {
        $this.off(type, selector, fn);
      });
      return $this;
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;
    if (callback === false) callback = returnFalse;
    return $this.each(function () {
      remove(this, event, callback, selector);
    });
  };

  $.fn.trigger = function (event, args) {
    event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
    event._args = args;
    return this.each(function () {
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type](); // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
    });
  }; // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble


  $.fn.triggerHandler = function (event, args) {
    var e, result;
    this.each(function (i, element) {
      e = createProxy(isString(event) ? $.Event(event) : event);
      e._args = args;
      e.target = element;
      $.each(findHandlers(element, event.type || event), function (i, handler) {
        result = handler.proxy(e);
        if (e.isImmediatePropagationStopped()) return false;
      });
    });
    return result;
  } // shortcut methods for `.bind(event, fn)` for each event type
  ;

  ('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
    $.fn[event] = function (callback) {
      return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
    };
  });

  $.Event = function (type, props) {
    if (!isString(type)) props = type, type = props.type;
    var event = document.createEvent(specialEvents[type] || 'Events'),
        bubbles = true;
    if (props) for (var name in props) {
      name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
    }
    event.initEvent(type, bubbles, true);
    return compatible(event);
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/form.js":
/*!********************************************!*\
  !*** ./node_modules/zepto-modules/form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  $.fn.serializeArray = function () {
    var name,
        type,
        result = [],
        add = function add(value) {
      if (value.forEach) return value.forEach(add);
      result.push({
        name: name,
        value: value
      });
    };

    if (this[0]) $.each(this[0].elements, function (_, field) {
      type = field.type, name = field.name;
      if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
    });
    return result;
  };

  $.fn.serialize = function () {
    var result = [];
    this.serializeArray().forEach(function (elm) {
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
    });
    return result.join('&');
  };

  $.fn.submit = function (callback) {
    if (0 in arguments) this.bind('submit', callback);else if (this.length) {
      var event = $.Event('submit');
      this.eq(0).trigger(event);
      if (!event.isDefaultPrevented()) this.get(0).submit();
    }
    return this;
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/fx.js":
/*!******************************************!*\
  !*** ./node_modules/zepto-modules/fx.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($, undefined) {
  var prefix = '',
      eventPrefix,
      vendors = {
    Webkit: 'webkit',
    Moz: '',
    O: 'o'
  },
      testEl = document.createElement('div'),
      supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
      transform,
      transitionProperty,
      transitionDuration,
      transitionTiming,
      transitionDelay,
      animationName,
      animationDuration,
      animationTiming,
      animationDelay,
      cssReset = {};

  function dasherize(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }

  function normalizeEvent(name) {
    return eventPrefix ? eventPrefix + name : name.toLowerCase();
  }

  if (testEl.style.transform === undefined) $.each(vendors, function (vendor, event) {
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-';
      eventPrefix = event;
      return false;
    }
  });
  transform = prefix + 'transform';
  cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';
  $.fx = {
    off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
    speeds: {
      _default: 400,
      fast: 200,
      slow: 600
    },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  };

  $.fn.animate = function (properties, duration, ease, callback, delay) {
    if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
    if ($.isFunction(ease)) callback = ease, ease = undefined;
    if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
    if (duration) duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
    if (delay) delay = parseFloat(delay) / 1000;
    return this.anim(properties, duration, ease, callback, delay);
  };

  $.fn.anim = function (properties, duration, ease, callback, delay) {
    var key,
        cssValues = {},
        cssProperties,
        transforms = '',
        that = this,
        _wrappedCallback,
        endEvent = $.fx.transitionEnd,
        fired = false;

    if (duration === undefined) duration = $.fx.speeds._default / 1000;
    if (delay === undefined) delay = 0;
    if ($.fx.off) duration = 0;

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties;
      cssValues[animationDuration] = duration + 's';
      cssValues[animationDelay] = delay + 's';
      cssValues[animationTiming] = ease || 'linear';
      endEvent = $.fx.animationEnd;
    } else {
      cssProperties = []; // CSS transitions

      for (key in properties) {
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') ';else cssValues[key] = properties[key], cssProperties.push(dasherize(key));
      }

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);

      if (duration > 0 && _typeof(properties) === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ');
        cssValues[transitionDuration] = duration + 's';
        cssValues[transitionDelay] = delay + 's';
        cssValues[transitionTiming] = ease || 'linear';
      }
    }

    _wrappedCallback = function wrappedCallback(event) {
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return; // makes sure the event didn't bubble from "below"

        $(event.target).unbind(endEvent, _wrappedCallback);
      } else $(this).unbind(endEvent, _wrappedCallback); // triggered by setTimeout


      fired = true;
      $(this).css(cssReset);
      callback && callback.call(this);
    };

    if (duration > 0) {
      this.bind(endEvent, _wrappedCallback); // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired

      setTimeout(function () {
        if (fired) return;

        _wrappedCallback.call(that);
      }, (duration + delay) * 1000 + 25);
    } // trigger page reflow so new elements can animate


    this.size() && this.get(0).clientLeft;
    this.css(cssValues);
    if (duration <= 0) setTimeout(function () {
      that.each(function () {
        _wrappedCallback.call(this);
      });
    }, 0);
    return this;
  };

  testEl = null;
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/fx_methods.js":
/*!**************************************************!*\
  !*** ./node_modules/zepto-modules/fx_methods.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($, undefined) {
  var document = window.document,
      docElem = document.documentElement,
      origShow = $.fn.show,
      origHide = $.fn.hide,
      origToggle = $.fn.toggle;

  function anim(el, speed, opacity, scale, callback) {
    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined;
    var props = {
      opacity: opacity
    };

    if (scale) {
      props.scale = scale;
      el.css($.fx.cssPrefix + 'transform-origin', '0 0');
    }

    return el.animate(props, speed, null, callback);
  }

  function hide(el, speed, scale, callback) {
    return anim(el, speed, 0, scale, function () {
      origHide.call($(this));
      callback && callback.call(this);
    });
  }

  $.fn.show = function (speed, callback) {
    origShow.call(this);
    if (speed === undefined) speed = 0;else this.css('opacity', 0);
    return anim(this, speed, 1, '1,1', callback);
  };

  $.fn.hide = function (speed, callback) {
    if (speed === undefined) return origHide.call(this);else return hide(this, speed, '0,0', callback);
  };

  $.fn.toggle = function (speed, callback) {
    if (speed === undefined || typeof speed == 'boolean') return origToggle.call(this, speed);else return this.each(function () {
      var el = $(this);
      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback);
    });
  };

  $.fn.fadeTo = function (speed, opacity, callback) {
    return anim(this, speed, opacity, null, callback);
  };

  $.fn.fadeIn = function (speed, callback) {
    var target = this.css('opacity');
    if (target > 0) this.css('opacity', 0);else target = 1;
    return origShow.call(this).fadeTo(speed, target, callback);
  };

  $.fn.fadeOut = function (speed, callback) {
    return hide(this, speed, null, callback);
  };

  $.fn.fadeToggle = function (speed, callback) {
    return this.each(function () {
      var el = $(this);
      el[el.css('opacity') == 0 || el.css('display') == 'none' ? 'fadeIn' : 'fadeOut'](speed, callback);
    });
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/gesture.js":
/*!***********************************************!*\
  !*** ./node_modules/zepto-modules/gesture.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  if ($.os.ios) {
    var parentIfText = function parentIfText(node) {
      return 'tagName' in node ? node : node.parentNode;
    };

    var gesture = {},
        gestureTimeout;
    $(document).bind('gesturestart', function (e) {
      var now = Date.now(),
          delta = now - (gesture.last || now);
      gesture.target = parentIfText(e.target);
      gestureTimeout && clearTimeout(gestureTimeout);
      gesture.e1 = e.scale;
      gesture.last = now;
    }).bind('gesturechange', function (e) {
      gesture.e2 = e.scale;
    }).bind('gestureend', function (e) {
      if (gesture.e2 > 0) {
        Math.abs(gesture.e1 - gesture.e2) != 0 && $(gesture.target).trigger('pinch') && $(gesture.target).trigger('pinch' + (gesture.e1 - gesture.e2 > 0 ? 'In' : 'Out'));
        gesture.e1 = gesture.e2 = gesture.last = 0;
      } else if ('last' in gesture) {
        gesture = {};
      }
    });
    ['pinch', 'pinchIn', 'pinchOut'].forEach(function (m) {
      $.fn[m] = function (callback) {
        return this.bind(m, callback);
      };
    });
  }
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/ie.js":
/*!******************************************!*\
  !*** ./node_modules/zepto-modules/ie.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;

(function () {
  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined);
  } catch (e) {
    var nativeGetComputedStyle = getComputedStyle;

    window.getComputedStyle = function (element, pseudoElement) {
      try {
        return nativeGetComputedStyle(element, pseudoElement);
      } catch (e) {
        return null;
      }
    };
  }
})();

/***/ }),

/***/ "./node_modules/zepto-modules/selector.js":
/*!************************************************!*\
  !*** ./node_modules/zepto-modules/selector.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  var zepto = $.zepto,
      oldQsa = zepto.qsa,
      oldMatches = zepto.matches;

  function _visible(elem) {
    elem = $(elem);
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none";
  } // Implements a subset from:
  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
  //
  // Each filter function receives the current index, all nodes in the
  // considered set, and a value if there were parentheses. The value
  // of `this` is the node currently being considered. The function returns the
  // resulting node(s), null, or undefined.
  //
  // Complex selectors are not supported:
  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
  //   ul.inner:first > li


  var filters = $.expr[':'] = {
    visible: function visible() {
      if (_visible(this)) return this;
    },
    hidden: function hidden() {
      if (!_visible(this)) return this;
    },
    selected: function selected() {
      if (this.selected) return this;
    },
    checked: function checked() {
      if (this.checked) return this;
    },
    parent: function parent() {
      return this.parentNode;
    },
    first: function first(idx) {
      if (idx === 0) return this;
    },
    last: function last(idx, nodes) {
      if (idx === nodes.length - 1) return this;
    },
    eq: function eq(idx, _, value) {
      if (idx === value) return this;
    },
    contains: function contains(idx, _, text) {
      if ($(this).text().indexOf(text) > -1) return this;
    },
    has: function has(idx, _, sel) {
      if (zepto.qsa(this, sel).length) return this;
    }
  };
  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
      childRe = /^\s*>/,
      classTag = 'Zepto' + +new Date();

  function process(sel, fn) {
    // quote the hash in `a[href^=#]` expression
    sel = sel.replace(/=#\]/g, '="#"]');
    var filter,
        arg,
        match = filterRe.exec(sel);

    if (match && match[2] in filters) {
      filter = filters[match[2]], arg = match[3];
      sel = match[1];

      if (arg) {
        var num = Number(arg);
        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '');else arg = num;
      }
    }

    return fn(sel, filter, arg);
  }

  zepto.qsa = function (node, selector) {
    return process(selector, function (sel, filter, arg) {
      try {
        var taggedParent;
        if (!sel && filter) sel = '*';else if (childRe.test(sel)) // support "> *" child queries by tagging the parent node with a
          // unique class and prepending that classname onto the selector
          taggedParent = $(node).addClass(classTag), sel = '.' + classTag + ' ' + sel;
        var nodes = oldQsa(node, sel);
      } catch (e) {
        console.error('error performing selector: %o', selector);
        throw e;
      } finally {
        if (taggedParent) taggedParent.removeClass(classTag);
      }

      return !filter ? nodes : zepto.uniq($.map(nodes, function (n, i) {
        return filter.call(n, i, nodes, arg);
      }));
    });
  };

  zepto.matches = function (node, selector) {
    return process(selector, function (sel, filter, arg) {
      return (!sel || oldMatches(node, sel)) && (!filter || filter.call(node, null, arg) === node);
    });
  };
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/touch.js":
/*!*********************************************!*\
  !*** ./node_modules/zepto-modules/touch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = __webpack_require__(/*! ./zepto */ "./node_modules/zepto-modules/zepto.js");

;

(function ($) {
  var touch = {},
      touchTimeout,
      tapTimeout,
      swipeTimeout,
      longTapTimeout,
      longTapDelay = 750,
      gesture;

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
  }

  function longTap() {
    longTapTimeout = null;

    if (touch.last) {
      touch.el.trigger('longTap');
      touch = {};
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = null;
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout);
    if (tapTimeout) clearTimeout(tapTimeout);
    if (swipeTimeout) clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
    touch = {};
  }

  function isPrimaryTouch(event) {
    return (event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
  }

  function isPointerEventType(e, type) {
    return e.type == 'pointer' + type || e.type.toLowerCase() == 'mspointer' + type;
  }

  $(document).ready(function () {
    var now,
        delta,
        deltaX = 0,
        deltaY = 0,
        firstTouch,
        _isPointerType;

    if ('MSGesture' in window) {
      gesture = new MSGesture();
      gesture.target = document.body;
    }

    $(document).bind('MSGestureEnd', function (e) {
      var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;

      if (swipeDirectionFromVelocity) {
        touch.el.trigger('swipe');
        touch.el.trigger('swipe' + swipeDirectionFromVelocity);
      }
    }).on('touchstart MSPointerDown pointerdown', function (e) {
      if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) return;
      firstTouch = _isPointerType ? e : e.touches[0];

      if (e.touches && e.touches.length === 1 && touch.x2) {
        // Clear out touch movement data if we have it sticking around
        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
        touch.x2 = undefined;
        touch.y2 = undefined;
      }

      now = Date.now();
      delta = now - (touch.last || now);
      touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
      touchTimeout && clearTimeout(touchTimeout);
      touch.x1 = firstTouch.pageX;
      touch.y1 = firstTouch.pageY;
      if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
      touch.last = now;
      longTapTimeout = setTimeout(longTap, longTapDelay); // adds the current touch contact for IE gesture recognition

      if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
    }).on('touchmove MSPointerMove pointermove', function (e) {
      if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) return;
      firstTouch = _isPointerType ? e : e.touches[0];
      cancelLongTap();
      touch.x2 = firstTouch.pageX;
      touch.y2 = firstTouch.pageY;
      deltaX += Math.abs(touch.x1 - touch.x2);
      deltaY += Math.abs(touch.y1 - touch.y2);
    }).on('touchend MSPointerUp pointerup', function (e) {
      if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) return;
      cancelLongTap(); // swipe

      if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = setTimeout(function () {
        if (touch.el) {
          touch.el.trigger('swipe');
          touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
        }

        touch = {};
      }, 0); // normal tap
      else if ('last' in touch) // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function () {
              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap');
              event.cancelTouch = cancelAll; // [by paper] fix -> "TypeError: 'undefined' is not an object (evaluating 'touch.el.trigger'), when double tap

              if (touch.el) touch.el.trigger(event); // trigger double tap immediately

              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap');
                touch = {};
              } // trigger single tap after 250ms of inactivity
              else {
                  touchTimeout = setTimeout(function () {
                    touchTimeout = null;
                    if (touch.el) touch.el.trigger('singleTap');
                    touch = {};
                  }, 250);
                }
            }, 0);
          } else {
            touch = {};
          }
      deltaX = deltaY = 0;
    }) // when the browser window loses focus,
    // for example when a modal dialog is shown,
    // cancel all ongoing events
    .on('touchcancel MSPointerCancel pointercancel', cancelAll); // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events

    $(window).on('scroll', cancelAll);
  });
  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
    $.fn[eventName] = function (callback) {
      return this.on(eventName, callback);
    };
  });
})(Zepto);

/***/ }),

/***/ "./node_modules/zepto-modules/zepto.js":
/*!*********************************************!*\
  !*** ./node_modules/zepto-modules/zepto.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
var Zepto = function () {
  var undefined,
      key,
      $,
      classList,
      emptyArray = [],
      _concat = emptyArray.concat,
      _filter = emptyArray.filter,
      _slice = emptyArray.slice,
      document = window.document,
      elementDisplay = {},
      classCache = {},
      cssNumber = {
    'column-count': 1,
    'columns': 1,
    'font-weight': 1,
    'line-height': 1,
    'opacity': 1,
    'z-index': 1,
    'zoom': 1
  },
      fragmentRE = /^\s*<(\w+|!)[^>]*>/,
      singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
      rootNodeRE = /^(?:body|html)$/i,
      capitalRE = /([A-Z])/g,
      // special attributes that should be get/set via method calls
  methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
      adjacencyOperators = ['after', 'prepend', 'before', 'append'],
      table = document.createElement('table'),
      tableRow = document.createElement('tr'),
      containers = {
    'tr': document.createElement('tbody'),
    'tbody': table,
    'thead': table,
    'tfoot': table,
    'td': tableRow,
    'th': tableRow,
    '*': document.createElement('div')
  },
      readyRE = /complete|loaded|interactive/,
      simpleSelectorRE = /^[\w-]*$/,
      class2type = {},
      toString = class2type.toString,
      zepto = {},
      camelize,
      uniq,
      tempParent = document.createElement('div'),
      propMap = {
    'tabindex': 'tabIndex',
    'readonly': 'readOnly',
    'for': 'htmlFor',
    'class': 'className',
    'maxlength': 'maxLength',
    'cellspacing': 'cellSpacing',
    'cellpadding': 'cellPadding',
    'rowspan': 'rowSpan',
    'colspan': 'colSpan',
    'usemap': 'useMap',
    'frameborder': 'frameBorder',
    'contenteditable': 'contentEditable'
  },
      isArray = Array.isArray || function (object) {
    return object instanceof Array;
  };

  zepto.matches = function (element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false;
    var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
    if (matchesSelector) return matchesSelector.call(element, selector); // fall back to performing a selector:

    var match,
        parent = element.parentNode,
        temp = !parent;
    if (temp) (parent = tempParent).appendChild(element);
    match = ~zepto.qsa(parent, selector).indexOf(element);
    temp && tempParent.removeChild(element);
    return match;
  };

  function type(obj) {
    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
  }

  function isFunction(value) {
    return type(value) == "function";
  }

  function isWindow(obj) {
    return obj != null && obj == obj.window;
  }

  function isDocument(obj) {
    return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
  }

  function isObject(obj) {
    return type(obj) == "object";
  }

  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
  }

  function likeArray(obj) {
    var length = !!obj && 'length' in obj && obj.length,
        type = $.type(obj);
    return 'function' != type && !isWindow(obj) && ('array' == type || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);
  }

  function compact(array) {
    return _filter.call(array, function (item) {
      return item != null;
    });
  }

  function flatten(array) {
    return array.length > 0 ? $.fn.concat.apply([], array) : array;
  }

  camelize = function camelize(str) {
    return str.replace(/-+(.)?/g, function (match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  };

  function dasherize(str) {
    return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
  }

  uniq = function uniq(array) {
    return _filter.call(array, function (item, idx) {
      return array.indexOf(item) == idx;
    });
  };

  function classRE(name) {
    return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
  }

  function maybeAddPx(name, value) {
    return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
  }

  function defaultDisplay(nodeName) {
    var element, display;

    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName);
      document.body.appendChild(element);
      display = getComputedStyle(element, '').getPropertyValue("display");
      element.parentNode.removeChild(element);
      display == "none" && (display = "block");
      elementDisplay[nodeName] = display;
    }

    return elementDisplay[nodeName];
  }

  function _children(element) {
    return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
      if (node.nodeType == 1) return node;
    });
  }

  function Z(dom, selector) {
    var i,
        len = dom ? dom.length : 0;

    for (i = 0; i < len; i++) {
      this[i] = dom[i];
    }

    this.length = len;
    this.selector = selector || '';
  } // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overridden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.


  zepto.fragment = function (html, name, properties) {
    var dom, nodes, container; // A special case optimization for a single tag

    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
      if (!(name in containers)) name = '*';
      container = containers[name];
      container.innerHTML = '' + html;
      dom = $.each(_slice.call(container.childNodes), function () {
        container.removeChild(this);
      });
    }

    if (isPlainObject(properties)) {
      nodes = $(dom);
      $.each(properties, function (key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
      });
    }

    return dom;
  }; // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. This method can be overridden in plugins.


  zepto.Z = function (dom, selector) {
    return new Z(dom, selector);
  }; // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overridden in plugins.


  zepto.isZ = function (object) {
    return object instanceof zepto.Z;
  }; // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overridden in plugins.


  zepto.init = function (selector, context) {
    var dom; // If nothing given, return an empty Zepto collection

    if (!selector) return zepto.Z(); // Optimize for string selectors
    else if (typeof selector == 'string') {
        selector = selector.trim(); // If it's a html fragment, create nodes from it
        // Note: In both Chrome 21 and Firefox 15, DOM error 12
        // is thrown if the fragment doesn't begin with <

        if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null; // If there's a context, create a collection on that context first, and select
        // nodes from there
        else if (context !== undefined) return $(context).find(selector); // If it's a CSS selector, use it to select nodes.
          else dom = zepto.qsa(document, selector);
      } // If a function is given, call it when the DOM is ready
      else if (isFunction(selector)) return $(document).ready(selector); // If a Zepto collection is given, just return it
        else if (zepto.isZ(selector)) return selector;else {
            // normalize array if an array of nodes is given
            if (isArray(selector)) dom = compact(selector); // Wrap DOM nodes.
            else if (isObject(selector)) dom = [selector], selector = null; // If it's a html fragment, create nodes from it
              else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null; // If there's a context, create a collection on that context first, and select
                // nodes from there
                else if (context !== undefined) return $(context).find(selector); // And last but no least, if it's a CSS selector, use it to select nodes.
                  else dom = zepto.qsa(document, selector);
          } // create a new Zepto collection from the nodes found

    return zepto.Z(dom, selector);
  }; // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.


  $ = function $(selector, context) {
    return zepto.init(selector, context);
  };

  function extend(target, source, deep) {
    for (key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
        if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
        extend(target[key], source[key], deep);
      } else if (source[key] !== undefined) target[key] = source[key];
    }
  } // Copy all but undefined properties from one or more
  // objects to the `target` object.


  $.extend = function (target) {
    var deep,
        args = _slice.call(arguments, 1);

    if (typeof target == 'boolean') {
      deep = target;
      target = args.shift();
    }

    args.forEach(function (arg) {
      extend(target, arg, deep);
    });
    return target;
  }; // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overridden in plugins.


  zepto.qsa = function (element, selector) {
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
        // Ensure that a 1 char tag name still gets checked
    isSimple = simpleSelectorRE.test(nameOnly);
    return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById
    (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
    maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
    element.getElementsByTagName(selector) : // Or a tag
    element.querySelectorAll(selector) // Or it's not simple, and we need to query all
    );
  };

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector);
  }

  $.contains = document.documentElement.contains ? function (parent, node) {
    return parent !== node && parent.contains(node);
  } : function (parent, node) {
    while (node && (node = node.parentNode)) {
      if (node === parent) return true;
    }

    return false;
  };

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg;
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
  } // access className property while respecting SVGAnimatedString


  function className(node, value) {
    var klass = node.className || '',
        svg = klass && klass.baseVal !== undefined;
    if (value === undefined) return svg ? klass.baseVal : klass;
    svg ? klass.baseVal = value : node.className = value;
  } // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self


  function deserializeValue(value) {
    try {
      return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
    } catch (e) {
      return value;
    }
  }

  $.type = type;
  $.isFunction = isFunction;
  $.isWindow = isWindow;
  $.isArray = isArray;
  $.isPlainObject = isPlainObject;

  $.isEmptyObject = function (obj) {
    var name;

    for (name in obj) {
      return false;
    }

    return true;
  };

  $.isNumeric = function (val) {
    var num = Number(val),
        type = _typeof(val);

    return val != null && type != 'boolean' && (type != 'string' || val.length) && !isNaN(num) && isFinite(num) || false;
  };

  $.inArray = function (elem, array, i) {
    return emptyArray.indexOf.call(array, elem, i);
  };

  $.camelCase = camelize;

  $.trim = function (str) {
    return str == null ? "" : String.prototype.trim.call(str);
  }; // plugin compatibility


  $.uuid = 0;
  $.support = {};
  $.expr = {};

  $.noop = function () {};

  $.map = function (elements, callback) {
    var value,
        values = [],
        i,
        key;
    if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
      value = callback(elements[i], i);
      if (value != null) values.push(value);
    } else for (key in elements) {
      value = callback(elements[key], key);
      if (value != null) values.push(value);
    }
    return flatten(values);
  };

  $.each = function (elements, callback) {
    var i, key;

    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++) {
        if (callback.call(elements[i], i, elements[i]) === false) return elements;
      }
    } else {
      for (key in elements) {
        if (callback.call(elements[key], key, elements[key]) === false) return elements;
      }
    }

    return elements;
  };

  $.grep = function (elements, callback) {
    return _filter.call(elements, callback);
  };

  if (window.JSON) $.parseJSON = JSON.parse; // Populate the class2type map

  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  }); // Define methods that will be available on all
  // Zepto collections

  $.fn = {
    constructor: zepto.Z,
    length: 0,
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    splice: emptyArray.splice,
    indexOf: emptyArray.indexOf,
    concat: function concat() {
      var i,
          value,
          args = [];

      for (i = 0; i < arguments.length; i++) {
        value = arguments[i];
        args[i] = zepto.isZ(value) ? value.toArray() : value;
      }

      return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
    },
    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function map(fn) {
      return $($.map(this, function (el, i) {
        return fn.call(el, i, el);
      }));
    },
    slice: function slice() {
      return $(_slice.apply(this, arguments));
    },
    ready: function ready(callback) {
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
        callback($);
      }, false);
      return this;
    },
    get: function get(idx) {
      return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
    },
    toArray: function toArray() {
      return this.get();
    },
    size: function size() {
      return this.length;
    },
    remove: function remove() {
      return this.each(function () {
        if (this.parentNode != null) this.parentNode.removeChild(this);
      });
    },
    each: function each(callback) {
      emptyArray.every.call(this, function (el, idx) {
        return callback.call(el, idx, el) !== false;
      });
      return this;
    },
    filter: function filter(selector) {
      if (isFunction(selector)) return this.not(this.not(selector));
      return $(_filter.call(this, function (element) {
        return zepto.matches(element, selector);
      }));
    },
    add: function add(selector, context) {
      return $(uniq(this.concat($(selector, context))));
    },
    is: function is(selector) {
      return this.length > 0 && zepto.matches(this[0], selector);
    },
    not: function not(selector) {
      var nodes = [];
      if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
        if (!selector.call(this, idx)) nodes.push(this);
      });else {
        var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
        this.forEach(function (el) {
          if (excludes.indexOf(el) < 0) nodes.push(el);
        });
      }
      return $(nodes);
    },
    has: function has(selector) {
      return this.filter(function () {
        return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
      });
    },
    eq: function eq(idx) {
      return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
    },
    first: function first() {
      var el = this[0];
      return el && !isObject(el) ? el : $(el);
    },
    last: function last() {
      var el = this[this.length - 1];
      return el && !isObject(el) ? el : $(el);
    },
    find: function find(selector) {
      var result,
          $this = this;
      if (!selector) result = $();else if (_typeof(selector) == 'object') result = $(selector).filter(function () {
        var node = this;
        return emptyArray.some.call($this, function (parent) {
          return $.contains(parent, node);
        });
      });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
        return zepto.qsa(this, selector);
      });
      return result;
    },
    closest: function closest(selector, context) {
      var nodes = [],
          collection = _typeof(selector) == 'object' && $(selector);
      this.each(function (_, node) {
        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
          node = node !== context && !isDocument(node) && node.parentNode;
        }

        if (node && nodes.indexOf(node) < 0) nodes.push(node);
      });
      return $(nodes);
    },
    parents: function parents(selector) {
      var ancestors = [],
          nodes = this;

      while (nodes.length > 0) {
        nodes = $.map(nodes, function (node) {
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node);
            return node;
          }
        });
      }

      return filtered(ancestors, selector);
    },
    parent: function parent(selector) {
      return filtered(uniq(this.pluck('parentNode')), selector);
    },
    children: function children(selector) {
      return filtered(this.map(function () {
        return _children(this);
      }), selector);
    },
    contents: function contents() {
      return this.map(function () {
        return this.contentDocument || _slice.call(this.childNodes);
      });
    },
    siblings: function siblings(selector) {
      return filtered(this.map(function (i, el) {
        return _filter.call(_children(el.parentNode), function (child) {
          return child !== el;
        });
      }), selector);
    },
    empty: function empty() {
      return this.each(function () {
        this.innerHTML = '';
      });
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function pluck(property) {
      return $.map(this, function (el) {
        return el[property];
      });
    },
    show: function show() {
      return this.each(function () {
        this.style.display == "none" && (this.style.display = '');
        if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
      });
    },
    replaceWith: function replaceWith(newContent) {
      return this.before(newContent).remove();
    },
    wrap: function wrap(structure) {
      var func = isFunction(structure);
      if (this[0] && !func) var dom = $(structure).get(0),
          clone = dom.parentNode || this.length > 1;
      return this.each(function (index) {
        $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
      });
    },
    wrapAll: function wrapAll(structure) {
      if (this[0]) {
        $(this[0]).before(structure = $(structure));
        var children; // drill down to the inmost element

        while ((children = structure.children()).length) {
          structure = children.first();
        }

        $(structure).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(structure) {
      var func = isFunction(structure);
      return this.each(function (index) {
        var self = $(this),
            contents = self.contents(),
            dom = func ? structure.call(this, index) : structure;
        contents.length ? contents.wrapAll(dom) : self.append(dom);
      });
    },
    unwrap: function unwrap() {
      this.parent().each(function () {
        $(this).replaceWith($(this).children());
      });
      return this;
    },
    clone: function clone() {
      return this.map(function () {
        return this.cloneNode(true);
      });
    },
    hide: function hide() {
      return this.css("display", "none");
    },
    toggle: function toggle(setting) {
      return this.each(function () {
        var el = $(this);
        (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
      });
    },
    prev: function prev(selector) {
      return $(this.pluck('previousElementSibling')).filter(selector || '*');
    },
    next: function next(selector) {
      return $(this.pluck('nextElementSibling')).filter(selector || '*');
    },
    html: function html(_html) {
      return 0 in arguments ? this.each(function (idx) {
        var originHtml = this.innerHTML;
        $(this).empty().append(funcArg(this, _html, idx, originHtml));
      }) : 0 in this ? this[0].innerHTML : null;
    },
    text: function text(_text) {
      return 0 in arguments ? this.each(function (idx) {
        var newText = funcArg(this, _text, idx, this.textContent);
        this.textContent = newText == null ? '' : '' + newText;
      }) : 0 in this ? this.pluck('textContent').join("") : null;
    },
    attr: function attr(name, value) {
      var result;
      return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
        if (this.nodeType !== 1) return;
        if (isObject(name)) for (key in name) {
          setAttribute(this, key, name[key]);
        } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
      });
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
          setAttribute(this, attribute);
        }, this);
      });
    },
    prop: function prop(name, value) {
      name = propMap[name] || name;
      return 1 in arguments ? this.each(function (idx) {
        this[name] = funcArg(this, value, idx, this[name]);
      }) : this[0] && this[0][name];
    },
    removeProp: function removeProp(name) {
      name = propMap[name] || name;
      return this.each(function () {
        delete this[name];
      });
    },
    data: function data(name, value) {
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();
      var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);
      return data !== null ? deserializeValue(data) : undefined;
    },
    val: function val(value) {
      if (0 in arguments) {
        if (value == null) value = "";
        return this.each(function (idx) {
          this.value = funcArg(this, value, idx, this.value);
        });
      } else {
        return this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
          return this.selected;
        }).pluck('value') : this[0].value);
      }
    },
    offset: function offset(coordinates) {
      if (coordinates) return this.each(function (index) {
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
          top: coords.top - parentOffset.top,
          left: coords.left - parentOffset.left
        };
        if ($this.css('position') == 'static') props['position'] = 'relative';
        $this.css(props);
      });
      if (!this.length) return null;
      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return {
        top: 0,
        left: 0
      };
      var obj = this[0].getBoundingClientRect();
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      };
    },
    css: function css(property, value) {
      if (arguments.length < 2) {
        var element = this[0];

        if (typeof property == 'string') {
          if (!element) return;
          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
        } else if (isArray(property)) {
          if (!element) return;
          var props = {};
          var computedStyle = getComputedStyle(element, '');
          $.each(property, function (_, prop) {
            props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
          });
          return props;
        }
      }

      var css = '';

      if (type(property) == 'string') {
        if (!value && value !== 0) this.each(function () {
          this.style.removeProperty(dasherize(property));
        });else css = dasherize(property) + ":" + maybeAddPx(property, value);
      } else {
        for (key in property) {
          if (!property[key] && property[key] !== 0) this.each(function () {
            this.style.removeProperty(dasherize(key));
          });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
        }
      }

      return this.each(function () {
        this.style.cssText += ';' + css;
      });
    },
    index: function index(element) {
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
    },
    hasClass: function hasClass(name) {
      if (!name) return false;
      return emptyArray.some.call(this, function (el) {
        return this.test(className(el));
      }, classRE(name));
    },
    addClass: function addClass(name) {
      if (!name) return this;
      return this.each(function (idx) {
        if (!('className' in this)) return;
        classList = [];
        var cls = className(this),
            newName = funcArg(this, name, idx, cls);
        newName.split(/\s+/g).forEach(function (klass) {
          if (!$(this).hasClass(klass)) classList.push(klass);
        }, this);
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
      });
    },
    removeClass: function removeClass(name) {
      return this.each(function (idx) {
        if (!('className' in this)) return;
        if (name === undefined) return className(this, '');
        classList = className(this);
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
          classList = classList.replace(classRE(klass), " ");
        });
        className(this, classList.trim());
      });
    },
    toggleClass: function toggleClass(name, when) {
      if (!name) return this;
      return this.each(function (idx) {
        var $this = $(this),
            names = funcArg(this, name, idx, className(this));
        names.split(/\s+/g).forEach(function (klass) {
          (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
        });
      });
    },
    scrollTop: function scrollTop(value) {
      if (!this.length) return;
      var hasScrollTop = ('scrollTop' in this[0]);
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
      return this.each(hasScrollTop ? function () {
        this.scrollTop = value;
      } : function () {
        this.scrollTo(this.scrollX, value);
      });
    },
    scrollLeft: function scrollLeft(value) {
      if (!this.length) return;
      var hasScrollLeft = ('scrollLeft' in this[0]);
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
      return this.each(hasScrollLeft ? function () {
        this.scrollLeft = value;
      } : function () {
        this.scrollTo(value, this.scrollY);
      });
    },
    position: function position() {
      if (!this.length) return;
      var elem = this[0],
          // Get *real* offsetParent
      offsetParent = this.offsetParent(),
          // Get correct offsets
      offset = this.offset(),
          parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? {
        top: 0,
        left: 0
      } : offsetParent.offset(); // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0

      offset.top -= parseFloat($(elem).css('margin-top')) || 0;
      offset.left -= parseFloat($(elem).css('margin-left')) || 0; // Add offsetParent borders

      parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
      parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0; // Subtract the two offsets

      return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left
      };
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var parent = this.offsetParent || document.body;

        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
          parent = parent.offsetParent;
        }

        return parent;
      });
    }
  }; // for now

  $.fn.detach = $.fn.remove // Generate the `width` and `height` functions
  ;
  ['width', 'height'].forEach(function (dimension) {
    var dimensionProperty = dimension.replace(/./, function (m) {
      return m[0].toUpperCase();
    });

    $.fn[dimension] = function (value) {
      var offset,
          el = this[0];
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
        el = $(this);
        el.css(dimension, funcArg(this, value, idx, el[dimension]()));
      });
    };
  });

  function traverseNode(node, fun) {
    fun(node);

    for (var i = 0, len = node.childNodes.length; i < len; i++) {
      traverseNode(node.childNodes[i], fun);
    }
  } // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.


  adjacencyOperators.forEach(function (operator, operatorIndex) {
    var inside = operatorIndex % 2; //=> prepend, append

    $.fn[operator] = function () {
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType,
          nodes = $.map(arguments, function (arg) {
        var arr = [];
        argType = type(arg);

        if (argType == "array") {
          arg.forEach(function (el) {
            if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());
            arr = arr.concat(zepto.fragment(el));
          });
          return arr;
        }

        return argType == "object" || arg == null ? arg : zepto.fragment(arg);
      }),
          parent,
          copyByClone = this.length > 1;
      if (nodes.length < 1) return this;
      return this.each(function (_, target) {
        parent = inside ? target : target.parentNode; // convert all methods to a "before" operation

        target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;
        var parentInDocument = $.contains(document.documentElement, parent);
        nodes.forEach(function (node) {
          if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();
          parent.insertBefore(node, target);
          if (parentInDocument) traverseNode(node, function (el) {
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) {
              var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
              target['eval'].call(target, el.innerHTML);
            }
          });
        });
      });
    }; // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo


    $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
      $(html)[operator](this);
      return this;
    };
  });
  zepto.Z.prototype = Z.prototype = $.fn; // Export internal API functions in the `$.zepto` namespace

  zepto.uniq = uniq;
  zepto.deserializeValue = deserializeValue;
  $.zepto = zepto;
  return $;
}();

module.exports = Zepto;

/***/ }),

/***/ "./src/05-layout/sticky/sticky.js":
/*!****************************************!*\
  !*** ./src/05-layout/sticky/sticky.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * add an class to the given dom element
   * ToDo: move it to utils or use a polyfill
   * @param {string} className
   * @param {HTMLElement} domEl
   * @returns {HTMLElement}
   */
  function addClass(className, domEl) {
    var classList = [],
        classesString = domEl.getAttribute('class');

    if (classesString) {
      classList = classesString.split(' ');

      if (classList.indexOf(className) === -1) {
        classesString = classList.concat(className).join(' ');
      }
    } else {
      classesString = className;
    }

    domEl.setAttribute('class', classesString);
    return domEl;
  }
  /**
   * remove an class to the given dom element
   * ToDo: move it to utils or use a polyfill
   * @param {string} className
   * @param {HTMLElement} domEl
   * @returns {HTMLElement}
   */


  function removeClass(className, domEl) {
    var classList = [],
        classesString = domEl.getAttribute('class');

    if (classesString) {
      classList = classesString.split(' ');

      if (classList.indexOf(className) !== -1) {
        classList.splice(classList.indexOf(className), 1);
      }

      domEl.setAttribute('class', classList.join(' '));
    }

    return domEl;
  }
  /**
   * gets the current document height.
   * @returns {number}
   */


  function getDocumentHeight() {
    return Math.max(document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
  }
  /**
   * gets the current client height.
   * @returns {number}
   */


  function getWindowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
  /**
   * handler for positioning the sticky elements.
   */


  function handleStickies() {
    // get some basic values element like: scroll position, document and window height and the sticky elements
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    var stickies = document.querySelectorAll('[data-sticky]');
    var bodyOffset = document.documentElement.getBoundingClientRect().top;
    var documentHeight = getDocumentHeight();
    var windowHeight = getWindowHeight();
    [].forEach.call(stickies, function (stickyElement) {
      // Get the dock and un-dock element by the id of sticky
      var id = stickyElement.getAttribute('data-sticky');
      var undockElement = document.querySelector("[data-sticky-undock=\"".concat(id, "\"]"));
      var dockElement = document.querySelector("[data-sticky-dock=\"".concat(id, "\"]")); // If device height is to small don't stick!

      if (windowHeight < 320) {
        removeClass('sc-sticky', stickyElement);
        return;
      } // If there is no dock or un-dock element just stick!


      if (!undockElement && !dockElement) {
        addClass('sc-sticky', stickyElement);
        return;
      } // Get dock and un-dock element positions


      var undockPosition = undockElement ? undockElement.getBoundingClientRect().top - bodyOffset : 0;
      var dockPosition = dockElement ? dockElement.getBoundingClientRect().top - bodyOffset : documentHeight; // Decide based on the position to stick or not stick

      if (scrollPosition + windowHeight > undockPosition && scrollPosition < dockPosition - windowHeight + stickyElement.getBoundingClientRect().height * 1.5) {
        addClass('sc-sticky', stickyElement);
      } else {
        removeClass('sc-sticky', stickyElement);
      }
    });
  }
  /**
   * initial positioning of the sticky
   */


  handleStickies();
  /**
   * adding several event listeners needed for updating the positions of the stickies
   */

  window.addEventListener('deviceorientation', function () {
    return handleStickies();
  });
  window.addEventListener('resize', function () {
    return handleStickies();
  });
  window.addEventListener('pageSizeChanged', function () {
    return handleStickies();
  });
  document.addEventListener('scroll', function () {
    return handleStickies();
  });
  document.addEventListener('collapse', function () {
    return handleStickies();
  });
});

/***/ }),

/***/ "./src/06-components/atoms/collapse/collapse.js":
/*!******************************************************!*\
  !*** ./src/06-components/atoms/collapse/collapse.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var handleClick = function handleClick(collapsable) {
    var targetAttr = collapsable.getAttribute('data-target');
    var targets = document.querySelectorAll(targetAttr);
    Array.prototype.forEach.call(targets, function (target) {
      target.classList.toggle('in');
    });
  };

  window.addEventListener('click', function (e) {
    var target = e.target;

    while (target) {
      if (target.getAttribute && target.getAttribute('data-toggle') === 'sc-collapse') {
        return handleClick(target);
      }

      target = target.parentNode;
    }
  });
});

/***/ }),

/***/ "./src/06-components/atoms/custom-dropdown/custom-dropdown.js":
/*!********************************************************************!*\
  !*** ./src/06-components/atoms/custom-dropdown/custom-dropdown.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../07-utilities/helpers.js */ "./src/07-utilities/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (tagName) {
  function attachedCallback() {
    var el = this;
    if (!el.hasAttribute('checkboxgroup')) return;
    el.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    el.addEventListener('touchstart', function (e) {
      e.stopPropagation();
    });
    var titleElement = el.querySelector('p');
    var titleTrigger = el.querySelector('div');
    var defaultTitle = titleElement.innerHTML;
    el.classList.remove('sc-open'); // TODO check do we need this?

    var checkboxes = el.querySelectorAll('[type=checkbox]'); // TODO check do we need this?

    Array.from(checkboxes).forEach(function (checkbox) {
      // TODO check do we need this?
      checkbox.classList.add('sc-input'); // TODO check do we need this?
    }); // TODO check do we need this?

    var updateCaption = function updateCaption(onchange) {
      var checkboxesChecked = el.querySelectorAll(':checked');
      var texts = Array.from(checkboxesChecked).map(function (checkboxChecked) {
        return checkboxChecked.nextElementSibling.innerHTML;
      });
      var title = texts.join(', ') || defaultTitle;
      titleElement.innerHTML = title;

      if (onchange && el.hasAttribute('closeonselect')) {
        el.classList.remove('sc-open');
      }

      closeAllDropdowns(el)();
    };

    el.addEventListener('change', function () {
      return updateCaption(true);
    });
    titleTrigger.addEventListener('click', function () {
      closeAllDropdowns(el)();
      el.classList.toggle('sc-open');
    });
    updateCaption();
    attachEventListeners();
    el.addEventListener('focusout', function () {// const checkboxes = el.querySelectorAll('[type=checkbox]');
      // const elReceivingFocus = e.relatedTarget;
      // if (!Array.from(checkboxes).some(cBox => cBox === elReceivingFocus) && 
      //     el !== elReceivingFocus){
      //     closeAllDropdowns(null)();
      // }
    });
  }

  var closeAllDropdowns = function closeAllDropdowns(exceptThisOne) {
    return function () {
      return Array.from(document.querySelectorAll(tagName)).filter(function (cdd) {
        return cdd !== exceptThisOne;
      }).forEach(function (cdd) {
        return cdd.classList.remove('sc-open');
      });
    };
  };

  function attachEventListeners() {
    // this should only be done at most once
    // when the first of this element gets attached
    document.addEventListener('click', closeAllDropdowns(this));
    document.addEventListener('touchstart', closeAllDropdowns(this));

    attachEventListeners = function attachEventListeners() {}; // eslint-disable-line no-func-assign

  }

  Object(_07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attachedCallback: attachedCallback,
    tagName: tagName
  });
});

/***/ }),

/***/ "./src/06-components/atoms/google-map/google-map.js":
/*!**********************************************************!*\
  !*** ./src/06-components/atoms/google-map/google-map.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../07-utilities/helpers.js */ "./src/07-utilities/helpers.js");


var loadMap = function loadMap(el) {
  var publicKey = el.getAttribute('apikey');
  var address = el.getAttribute('query');
  var htmlTag = document.querySelector('html');
  var lang = htmlTag.getAttribute('lang') || 'en';
  var url = "https://www.google.com/maps/embed/v1/place?language=".concat(lang, "&key=").concat(publicKey, "&q=").concat(encodeURIComponent(address));
  var map = document.createElement('iframe');
  map.setAttribute('src', url);
  map.setAttribute('allowfullscreen', true);
  map.setAttribute('title', 'google-map');
  el.appendChild(map);
};

/* harmony default export */ __webpack_exports__["default"] = (function (tagName) {
  var intersectionObserver;

  if (window.IntersectionObserver) {
    var options = {
      rootMargin: '300px'
    };
    intersectionObserver = new IntersectionObserver(function (entries) {
      // eslint-disable-line
      // If intersectionRatio is 0, the sentinel is out of view
      // and we do not need to do anything.
      entries.filter(function (entry) {
        return entry.intersectionRatio > 0;
      }).forEach(function (entry) {
        loadMap(entry.target);
        intersectionObserver.unobserve(entry.target);
      });
    }, options);
  }

  function attachedCallback() {
    var sentinel = this;

    if (window.IntersectionObserver) {
      intersectionObserver.observe(sentinel);
    } else {
      window.addEventListener('load', function () {
        loadMap(sentinel);
      }, false);
    }
  }

  Object(_07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attachedCallback: attachedCallback,
    tagName: tagName
  });
});

/***/ }),

/***/ "./src/06-components/atoms/lightbox/lightbox.js":
/*!******************************************************!*\
  !*** ./src/06-components/atoms/lightbox/lightbox.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../07-utilities/helpers.js */ "./src/07-utilities/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (tagName) {
  var scrollbarWidth;

  function attachedCallback() {
    var lb = {
      self: this,
      parent: this.parentElement,
      container: this.querySelector('.sc-lightbox__container'),
      content: this.querySelector('.sc-lightbox__content'),
      close: Array.from(this.querySelectorAll('[data-lightbox-close]')),
      preventOutsideClose: this.getAttribute('prevent-outsideclose'),
      customIdentifier: this.getAttribute('data-custom') || ''
    }; // Extend instance with callback information

    this.onCloseCallbacks = [];
    this.onOpenCallbacks = [];
    var id = this.id || '';
    var openElements = Array.from(document.querySelectorAll('[data-lightbox-open="' + id + '"]'));
    scrollbarWidth = measureScrollbarWidth();
    openElements.forEach(function (el) {
      el.addEventListener('click', function () {
        return showByTrigger(lb, el);
      }, false);
    });
    lb.close.forEach(function (el) {
      el.addEventListener('click', function (e) {
        return hideByTrigger(lb, e, lb.preventOutsideClose !== null);
      }, false);
    });
    this.lb = lb;
  }

  var showByTrigger = function showByTrigger(lb, opener) {
    if (opener.hasAttribute('data-lightbox-prevent-open') && opener.getAttribute('data-lightbox-prevent-open') == 'true') {
      return;
    }

    show(lb);
  };

  var show = function show(lb) {
    lb.overlay = document.createElement('div');
    lb.overlay.classList.add('sc-lightbox__overlay');

    if (lb.customIdentifier) {
      lb.overlay.setAttribute('data-custom', lb.customIdentifier);
    }

    document.body.appendChild(lb.overlay);
    lb.overlay.classList.add('sc-lightbox__overlay--visible');
    lb.overlay.appendChild(lb.container);
    lb.overlay.appendChild(lb.container);
    lb.container.classList.add('sc-lightbox__container--visible');

    if (lb.preventOutsideClose === null) {
      lb.overlay.addEventListener('click', function (e) {
        return hideByTrigger(lb, e);
      }, false);
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) hideByTrigger(lb, e);
      });
    }

    var html = document.querySelector('html');
    html.classList.add('sc-unscroll');
    html.style.marginRight = scrollbarWidth ? "".concat(scrollbarWidth, "px") : 0;
    setTimeout(function () {
      lb.overlay.classList.add('sc-lightbox--fadein');
    }, 20);
    lb.self.onOpenCallbacks.forEach(function (cb) {
      return cb();
    });
  };
  /**
   * @param {boolean} executeOnCloseCallback executeOnCloseCallback Hide method gets called twice when clicking on close button, but we want to run close callback only-once
   */


  var hideByTrigger = function hideByTrigger(lb, e) {
    var executeOnCloseCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (e.target === lb.overlay || lb.close.includes(e.target) || e.keyCode === 27) {
      e.preventDefault();
      hide(lb, executeOnCloseCallback);
    }
  };

  var hide = function hide(lb, executeOnCloseCallback) {
    // Unapply scrollbar fixes
    var html = document.querySelector('html');
    html.classList.remove('sc-unscroll');
    html.style.marginRight = 0; // reset margin

    lb.container.classList.remove('sc-lightbox__container--visible');
    lb.parent.appendChild(lb.container);

    if (lb.overlay) {
      lb.overlay.classList.remove('sc-lightbox--fadein');
      setTimeout(function () {
        lb.overlay.remove();
      }, 250);
    }

    executeOnCloseCallback && lb.self.onCloseCallbacks.forEach(function (cb) {
      return cb();
    });
  };
  /**
   * Register callback to the current custom-element instance the call is made on
   */


  function registerOnOpenCallback(cb) {
    this.onOpenCallbacks.push(cb);
  }
  /**
   * Register callback to the current custom-element instance the call is made on
   */


  function registerOnCloseCallback(cb) {
    this.onCloseCallbacks.push(cb);
  }

  function showDirectly() {
    show(this.lb);
  }

  function hideDirectly() {
    hide(this.lb, true);
  }

  var measureScrollbarWidth = function measureScrollbarWidth() {
    return window && document && window.innerWidth - document.documentElement.clientWidth || 0;
  };

  Object(_07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attachedCallback: attachedCallback,
    tagName: tagName
  }, {
    registerOnOpenCallback: {
      value: registerOnOpenCallback
    },
    registerOnCloseCallback: {
      value: registerOnCloseCallback
    },
    show: {
      value: showDirectly
    },
    hide: {
      value: hideDirectly
    }
  });
});

/***/ }),

/***/ "./src/06-components/atoms/rotating-arrow/rotating-arrow.js":
/*!******************************************************************!*\
  !*** ./src/06-components/atoms/rotating-arrow/rotating-arrow.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.matches && e.target.matches('[data-toggle="arrow"]')) {
      e.target.classList.contains('open') ? e.target.classList.remove('open') : e.target.classList.add('open');
    }
  });
});

/***/ }),

/***/ "./src/06-components/atoms/stepper/stepper.js":
/*!****************************************************!*\
  !*** ./src/06-components/atoms/stepper/stepper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.matches && e.target.matches('.sc-stepper-button-decrement, .sc-stepper-button-increment')) {
      var stepperContainer = e.target.parentElement;
      var stepperEl = stepperContainer.querySelector('.sc-stepper-input');
      var minValue = parseInt(stepperEl.getAttribute('min')) || 0;
      var maxValue = parseInt(stepperEl.getAttribute('max')) || 100; // To make sure we can also calculate with the value the user typed in

      var getCurrentValue = function getCurrentValue() {
        return stepperEl.value !== '' ? parseInt(stepperEl.value, 10) : 0;
      };

      var currentValue = getCurrentValue();

      var increment = function increment() {
        currentValue = getCurrentValue();

        if (currentValue < maxValue) {
          stepperEl.value = ++currentValue;
        }
      };

      var decrement = function decrement() {
        currentValue = getCurrentValue();

        if (currentValue > minValue) {
          stepperEl.value = --currentValue;
        }
      };

      if (e.target.classList.contains('sc-stepper-button-decrement')) decrement();
      if (e.target.classList.contains('sc-stepper-button-increment')) increment();
    }
  });
});

/***/ }),

/***/ "./src/06-components/atoms/tabs/tabs-icons.js":
/*!****************************************************!*\
  !*** ./src/06-components/atoms/tabs/tabs-icons.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var findElement = function findElement(el) {
    while (!el.classList.contains('sc-tab--with-icon')) {
      el = el.parentElement;
    }

    return el;
  };

  document.addEventListener('click', function (e) {
    if (e.target && e.target.matches && e.target.matches('.sc-tab--with-icon, .sc-tab--with-icon *')) {
      var tab = findElement(e.target);
      var tabContainer = tab.parentElement;
      var currentActiveTab = tabContainer.querySelector('.sc-tab--with-icon--active');
      var currentSection = tabContainer.parentElement.querySelector('.sc-tabs__content--visible');
      if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-icon--active');
      if (currentSection) currentSection.classList.remove('sc-tabs__content--visible');
      tab.classList.add('sc-tab--with-icon--active');
      var sectionAttrNew = tab.getAttribute('data-section');
      var sectionNew = tabContainer.parentElement.querySelector('.sc-tabs__content[data-section=' + sectionAttrNew + ']');
      if (sectionNew) sectionNew.classList.add('sc-tabs__content--visible');
    }
  });
});

/***/ }),

/***/ "./src/06-components/atoms/tabs/tabs-text.js":
/*!***************************************************!*\
  !*** ./src/06-components/atoms/tabs/tabs-text.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.matches && e.target.matches('.sc-tab[data-section], .sc-tab[data-section] *')) {
      var tabContainer = e.target.parentElement;
      var currentActiveTab = tabContainer.querySelector('.sc-tab--with-text--active');
      var sectionAttr = currentActiveTab.getAttribute('data-section');
      var currentSection = tabContainer.querySelector('.sc-tabs__content[data-section=' + sectionAttr + ']');
      if (currentActiveTab) currentActiveTab.classList.remove('sc-tab--with-text--active');
      if (currentSection) currentSection.classList.remove('sc-tabs__content--visible');
      e.target.classList.add('sc-tab--with-text--active');
      var sectionAttrNew = e.target.getAttribute('data-section');
      var sectionNew = tabContainer.querySelector('.sc-tabs__content[data-section=' + sectionAttrNew + ']');
      if (sectionNew) sectionNew.classList.add('sc-tabs__content--visible');
    }
  });
});

/***/ }),

/***/ "./src/06-components/atoms/tag/tag.js":
/*!********************************************!*\
  !*** ./src/06-components/atoms/tag/tag.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  window.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.sc-tag'), function (tag) {
      var tagClose = tag.querySelector('.sc-tag__close');
      var parentNode = tag.parentNode;

      var removeTag = function removeTag() {
        parentNode.removeChild(tag);
      }; // Code for Chrome, Safari and Opera
      // https://www.w3schools.com/jsref/event_animationend.asp


      tag.addEventListener('webkitAnimationEnd', removeTag);
      tag.addEventListener('animationend', removeTag);
      tagClose.addEventListener('click', function () {
        tag.classList.add('closing');
      });
    });
  });
});

/***/ }),

/***/ "./src/06-components/atoms/tooltip/tooltip.js":
/*!****************************************************!*\
  !*** ./src/06-components/atoms/tooltip/tooltip.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../07-utilities/helpers.js */ "./src/07-utilities/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (tagName) {
  function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (document.body.scrollTop || document.documentElement.scrollTop),
      left: rect.left + (document.body.scrollLeft || document.documentElement.scrollLeft)
    };
  }

  function attachedCallback() {
    var tt = {
      tooltip: this,
      shown: false,
      indentTop: 12,
      content: this.querySelector('.sc-tooltip-content'),
      timeoutID: 0,
      showEvent: this.getAttribute('show-event'),
      hideEvent: this.getAttribute('hide-event')
    };

    if (tt.showEvent && tt.hideEvent) {
      document.addEventListener(tt.showEvent, function () {
        return show(tt);
      }, false);
    } else {
      tt.tooltip.addEventListener('mouseover', function () {
        return show(tt);
      }, false);
      tt.tooltip.addEventListener('mousedown', function () {
        return show(tt);
      }, false);
      tt.tooltip.addEventListener('touchstart', function () {
        return show(tt);
      }, false);
      tt.tooltip.addEventListener('click', function () {
        return show(tt);
      }, false);
      tt.tooltip.addEventListener('mouseleave', function () {
        return hide(tt);
      }, false);
    }

    if (tt.hideEvent && tt.showEvent) {
      document.addEventListener(tt.hideEvent, function () {
        return hide(tt);
      }, false);
    } else {
      tt.content.addEventListener('mouseover', function () {
        return show(tt);
      }, false);
      tt.content.addEventListener('mousedown', function () {
        return show(tt);
      }, false);
      tt.content.addEventListener('touchstart', function () {
        return show(tt);
      }, false);
      tt.content.addEventListener('click', function () {
        return show(tt);
      }, false);
      tt.content.addEventListener('mouseleave', function () {
        return hide(tt);
      }, false);
      document.addEventListener('touchstart', function () {
        return hide(tt);
      }, false);
    }
  }

  function show(tt) {
    clearTimeout(tt.timeoutID);
    if (tt.shown === true) return;
    document.body.appendChild(tt.content);
    tt.content.classList.add('sc-tooltip-shown');
    setTimeout(function () {
      return tt.content.classList.add('sc-fade-in');
    }, 20);
    setPosition(tt);
  }

  function hide(tt) {
    tt.timeoutID = setTimeout(function () {
      tt.shown = false;
      tt.content.classList.remove('sc-fade-in');
      tt.timeoutID = setTimeout(function () {
        tt.tooltip.appendChild(tt.content);
        tt.content.classList.remove('sc-tooltip-shown');
        tt.content.style.top = null;
        tt.content.style.left = null;
      }, 350);
    }, 300);
  }

  function setPosition(tt) {
    tt.shown = true;
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    tt.content.classList.remove('sc-tooltip-right', 'sc-tooltip-left', 'sc-tooltip-top', 'sc-tooltip-bottom');
    var top = offset(tt.tooltip).top - tt.content.offsetHeight - tt.indentTop;

    if (top - scrollPosition <= 0) {
      top = offset(tt.tooltip).top + tt.tooltip.offsetHeight + tt.indentTop;
      tt.content.classList.add('sc-tooltip-bottom');
    } else {
      tt.content.classList.add('sc-tooltip-top');
    }

    var left = offset(tt.tooltip).left - tt.content.offsetWidth / 2 + tt.tooltip.offsetWidth / 2;

    if (left + tt.content.offsetWidth > window.innerWidth) {
      left = offset(tt.tooltip).left - tt.content.offsetWidth + tt.tooltip.offsetWidth + 8; // small gap

      tt.content.classList.add('sc-tooltip-left');
    } else if (left <= 0) {
      left = offset(tt.tooltip).left - tt.tooltip.offsetWidth / 2;
      tt.content.classList.add('sc-tooltip-right');
    }

    tt.content.style.top = Math.round(top) + 'px';
    tt.content.style.left = Math.round(left) + 'px';
  }

  Object(_07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attachedCallback: attachedCallback,
    tagName: tagName
  });
});

/***/ }),

/***/ "./src/06-components/molecules/notification/js/Container.js":
/*!******************************************************************!*\
  !*** ./src/06-components/molecules/notification/js/Container.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container = /*#__PURE__*/function () {
  /**
   * @event Container#onScroll
   * @param {String} target
   */
  function Container(target) {
    _classCallCheck(this, Container);

    this.target = target;
    this.targetPosition = 0;
    this.element = this.createElement('div', document.body, '', ['sc-notification-container']);
    this.notifications = [];
    this.updatePosition();
    $(document).on('scroll', this.onScroll.bind(this));
    $(document.body).on('DOMSubtreeModified', this.observeTargetPosition.bind(this));
  }
  /**
   * @returns {Array}
   */


  _createClass(Container, [{
    key: "remove",

    /**
     * @returns {Node}
     */
    value: function remove() {
      return this.element.remove();
    }
    /**
     * @param {Notification} notification
     */

  }, {
    key: "addNotificationToTarget",
    value: function addNotificationToTarget(notification) {
      this.element.appendChild(notification.element);
    }
    /**
     * @param {Notification} notification
     */

  }, {
    key: "addNotification",
    value: function addNotification(notification) {
      if (this.notifications.indexOf(notification) < 0) {
        this.notifications.push(notification);
      }

      this.addNotificationToTarget(notification);
    }
    /**
     * @param {Notification} notification
     * @returns {Array.<T>}
     */

  }, {
    key: "removeNotification",
    value: function removeNotification(notification) {
      return this.notifications.splice(this.notifications.indexOf(notification), 1);
    }
    /**
     * @param {String} name
     * @param {String} body
     * @param {Array} classes
     * @param {HTMLElement} parent
     * @returns {Element}
     */

  }, {
    key: "createElement",
    value: function createElement(name, parent, body) {
      var classes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var element = document.createElement(name);
      classes.forEach(function (cls) {
        element.classList.add(cls);
      });
      element.innerHTML = body;
      parent.appendChild(element);
      return element;
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (!this.target) return;
      var target = $(this.target);
      var offset = target.offset();
      var width = target.width();
      var element = $(this.element);

      if (!offset.height) {
        offset.height = 0;
      }

      this.targetPosition = [offset.top, offset.left, offset.width, offset.height];

      if (window.pageYOffset > offset.top + offset.height) {
        element.css({
          position: 'fixed',
          top: 0,
          width: width + 'px',
          left: offset.left + 'px'
        });
      } else {
        element.css({
          position: 'absolute',
          width: width + 'px',
          top: offset.top + offset.height + 'px',
          left: offset.left + 'px'
        });
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if ($('.show', this.element).length > 0) {
        this.updatePosition();
      }
    }
  }, {
    key: "observeTargetPosition",
    value: function observeTargetPosition() {
      var offset = $(this.target).offset();

      if (this.targetPosition.toString() != [offset.top, offset.left, offset.width, offset.height].toString()) {
        this.onScroll();
      }
    }
  }, {
    key: "childNodes",
    get: function get() {
      return this.element.childNodes;
    }
  }]);

  return Container;
}();

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/06-components/molecules/notification/js/ContainerHandler.js":
/*!*************************************************************************!*\
  !*** ./src/06-components/molecules/notification/js/ContainerHandler.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./src/06-components/molecules/notification/js/Notification.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./src/06-components/molecules/notification/js/Container.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ContainerHandler = /*#__PURE__*/function () {
  function ContainerHandler() {
    _classCallCheck(this, ContainerHandler);

    this.containers = {};
  }
  /**
   * Add a new notification
   *
   * @param {HTMLElement} element
   */


  _createClass(ContainerHandler, [{
    key: "createNotification",
    value: function createNotification(element) {
      var notification = new _Notification__WEBPACK_IMPORTED_MODULE_0__["default"](element);
      notification.create();
      element.notification = notification;
    }
    /**
     * Update a existing notification
     *
     * @param {HTMLElement} element
     * @param {String} attribute
     * @param {String} previous previous value
     * @param {String} value new value
     */

  }, {
    key: "updateNotification",
    value: function updateNotification(element, attribute, previous, value) {
      var notification = element.notification;
      if (notification === undefined || notification === null) return;

      if ('class' === attribute && 'show' === value) {
        this.addNotificationToContainer(notification);
      } else if ('target' === attribute) {
        this.moveNotificationToContainer(notification, attribute, previous, value);
      }

      if (typeof notification.update === 'function') {
        notification.update(attribute, value);
      }
    }
    /**
     * @param {Notification} notification
     */

  }, {
    key: "addNotificationToContainer",
    value: function addNotificationToContainer(notification) {
      var container;

      if (!this.hasContainer(notification.targetName)) {
        container = this.createContainer(notification.targetName);
      } else {
        container = this.getContainer(notification.targetName);
      }

      container.addNotification(notification);
    }
    /**
     * Move a notification to a new container if the target was changed
     *
     * @param {Notification} notification
     * @param {String} attribute
     * @param {String} previous
     * @param {String} value
     */

  }, {
    key: "moveNotificationToContainer",
    value: function moveNotificationToContainer(notification, attribute, previous, value) {
      if (previous !== value) {
        if (this.hasContainer(previous)) {
          var container = this.getContainer(previous);
          container.removeNotification(notification);
        }

        this.addNotificationToContainer(notification);
      } // cleanup old containers without notifications


      if (this.hasContainer(previous)) {
        var _container = this.getContainer(previous);

        if (_container.childNodes.length < 1) {
          _container.remove();

          delete this.containers[previous];
        }
      }
    }
    /**
     * Create container below the target element
     *
     * @param target
     */

  }, {
    key: "createContainer",
    value: function createContainer(target) {
      var container = new _Container__WEBPACK_IMPORTED_MODULE_1__["default"](target);
      this.containers[target] = container;
      return container;
    }
    /**
     * @param {String} target
     * @returns {Container}
     */

  }, {
    key: "getContainer",
    value: function getContainer(target) {
      return this.containers[target];
    }
    /**
     *
     * @param {String} name
     * @returns {boolean}
     */

  }, {
    key: "hasContainer",
    value: function hasContainer(name) {
      // eslint-disable-next-line no-prototype-builtins
      return this.containers.hasOwnProperty(name);
    }
  }]);

  return ContainerHandler;
}();

/* harmony default export */ __webpack_exports__["default"] = (ContainerHandler);

/***/ }),

/***/ "./src/06-components/molecules/notification/js/Notification.js":
/*!*********************************************************************!*\
  !*** ./src/06-components/molecules/notification/js/Notification.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notification = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} element
   */
  function Notification(element) {
    _classCallCheck(this, Notification);

    this.element = element;
    this._body = '';
    this.body = this.element.innerHTML;
    this.closeBtn = null;
    this.titleTag = null;
    this.activeTimeout = null;
  }

  _createClass(Notification, [{
    key: "hide",
    value: function hide() {
      this.element.classList.remove('show');
      this.element.classList.remove('prefade');
    }
  }, {
    key: "isShow",
    value: function isShow() {
      return this.element.classList.contains('show');
    }
    /**
     * Create the html structure of the notification element
     */

  }, {
    key: "create",
    value: function create() {
      this.element.classList.add('prefade');
      this.element.innerHTML = '';
      this.container = this.createElement('div', this.element, '', ['icon']);
      this.titleTag = this.createElement('span', this.container, this.title, ['sc-font-m', 'sc-font-bold']);
      this.createElement('div', this.container, this.body);

      if (this.element && this.element.id) {
        var triggerElem = document.querySelector('[data-trigger="' + this.element.id + '"]');

        if (triggerElem) {
          var self = this;
          triggerElem.addEventListener('click', function () {
            self.element.classList.toggle('show');
          });
        }
      }

      if (this.close) {
        this.closeBtn = this.createCloseButton();
      }
    }
    /**
     * @param {String} attribute
     * @param {String} value
     */

  }, {
    key: "update",
    value: function update(attribute, value) {
      if ('class' === attribute && this.isShow()) {
        this.element.classList.remove('prefade');

        if (this.timeout) {
          if (this.activeTimeout) {
            window.clearTimeout(this.activeTimeout);
          }

          this.activeTimeout = window.setTimeout(this.hide.bind(this), this.timeout);
        }
      } else if ('class' === attribute && !this.isShow()) {
        this.hide();
      }

      if ('title' === attribute) {
        this.titleTag.innerHTML = value;
      }

      if ('close' === attribute) {
        if (!this.closeBtn && 'true' === value) {
          this.closeBtn = this.createCloseButton();
        } else {
          this.closeBtn.remove();
          this.closeBtn = null;
        }
      }
    }
    /**
     * @param {String} name
     * @param {String} body
     * @param {Array} classes
     * @param {HTMLElement} parent
     * @returns {Element}
     */

  }, {
    key: "createElement",
    value: function createElement(name, parent, body) {
      var classes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var element = document.createElement(name);
      classes.forEach(function (cls) {
        element.classList.add(cls);
      });
      element.innerHTML = typeof body === 'string' ? body : '';
      parent.appendChild(element);
      return element;
    }
  }, {
    key: "createCloseButton",
    value: function createCloseButton() {
      var closeBtn = this.createElement('a', this.container, '');
      $(closeBtn).on('click', this.hide.bind(this));
      var icon = this.createElement('as24-icon', closeBtn, '');
      icon.setAttribute('type', 'close');
      return closeBtn;
    }
  }, {
    key: "title",
    get: function get() {
      return this.element.getAttribute('title');
    }
  }, {
    key: "timeout",
    get: function get() {
      return this.element.getAttribute('timeout');
    }
  }, {
    key: "close",
    get: function get() {
      return this.element.getAttribute('close');
    }
  }, {
    key: "body",
    get: function get() {
      return this._body;
    },
    set: function set(value) {
      this._body = value;
    }
  }, {
    key: "target",
    get: function get() {
      return document.querySelector(this.targetName);
    }
  }, {
    key: "targetName",
    get: function get() {
      return this.element.getAttribute('target');
    }
  }]);

  return Notification;
}();

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/06-components/molecules/notification/notification.js":
/*!******************************************************************!*\
  !*** ./src/06-components/molecules/notification/notification.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../07-utilities/helpers.js */ "./src/07-utilities/helpers.js");
/* harmony import */ var _js_ContainerHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ContainerHandler */ "./src/06-components/molecules/notification/js/ContainerHandler.js");


/* harmony default export */ __webpack_exports__["default"] = (function (tagName) {
  var containerHandler = new _js_ContainerHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var items = []; // prevent of appearing twice

  function attachedCallback() {
    if (items.indexOf(this.id) != -1) {
      // prevent of appearing twice. TODO check on new polyfill
      return;
    }

    items.push(this.id);
    containerHandler.createNotification(this);
  }

  function attributeChangedCallback(attributeName, previous, value) {
    containerHandler.updateNotification(this, attributeName, previous, value);
  }

  Object(_07_utilities_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attachedCallback: attachedCallback,
    attributeChangedCallback: attributeChangedCallback,
    tagName: tagName
  });
});

/***/ }),

/***/ "./src/06-components/organisms/navigation-v2/navigation-v2.js":
/*!********************************************************************!*\
  !*** ./src/06-components/organisms/navigation-v2/navigation-v2.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  document.addEventListener('keydown', function (e) {
    var keyCode = e.which;
    var header = e.target.closest('header[role=navigation]');

    if (!header) {
      return;
    }

    if (keyCode === 27) {
      // ESCAPE
      e.target.closest('header[role=navigation] nav li.open').classList.remove('open');
    }
  });
  document.addEventListener('click', function (e) {
    var header = e.target.closest('header[role=navigation]'); // 1. click outside header closes all the menus
    // 2. click hamburger button opens the main menu
    // 3. click on submenu opens/closes the submenu
    // 4. click on header outside submenus/hamburger button closes all the menus
    // 5. click on a link inside of submenu closes this submenu
    // 6*. click anywhere in the header not listed above -> no actions
    // 1

    if (!header) {
      closeAllOpenedSubmenus();
      return;
    } // 2


    var mobileButton = e.target.closest('header[role=navigation] .sc-btn-mobile-menu');

    if (mobileButton) {
      toggleMenu(header, mobileButton);
      return;
    } // 3


    var menuOpener = e.target.closest('header[role=navigation] nav li');
    var menuButton = e.target.closest('header[role=navigation] nav li button');

    if (menuOpener && menuButton) {
      toggleSubmenu(menuOpener, menuButton);
      return;
    } // 4


    var openedLi = e.target.closest('header[role=navigation] nav li.open');

    if (!openedLi) {
      closeAllOpenedSubmenus();
      return;
    } // 5


    var anyLink = e.target.closest('header[role=navigation] nav a');

    if (anyLink) {
      closeAllOpenedSubmenus();
      return;
    }
  });

  var toggleSubmenu = function toggleSubmenu(opener, button) {
    var isDesktop = window.innerWidth >= 923; // see breakpoint

    var menuItems = _toConsumableArray(document.querySelectorAll('header[role=navigation] nav li')); // return array, not NodeList


    if (isDesktop) {
      menuItems.forEach(function (item) {
        if (item !== opener) {
          closeMenu(item);
        }
      });
    }

    button.setAttribute('aria-expanded', true);
    opener.classList.toggle('open');
  };

  var toggleMenu = function toggleMenu(header, menuItemOpener) {
    menuItemOpener.setAttribute('aria-expanded', header.classList.contains('open'));
    header.classList.toggle('open');
  };

  var closeMenu = function closeMenu(menu) {
    var hasButton = menu.querySelector('button');

    if (hasButton) {
      menu.querySelector('button').setAttribute('aria-expanded', false);
    }

    menu.classList.remove('open');
  };

  var closeAllOpenedSubmenus = function closeAllOpenedSubmenus() {
    _toConsumableArray(document.querySelectorAll('header[role=navigation] nav li.open')).forEach(function (openedMenu) {
      return closeMenu(openedMenu);
    });
  };
});

/***/ }),

/***/ "./src/06-components/organisms/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./src/06-components/organisms/pagination/pagination.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pager = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement|String} root can be a selector
   * @param {Number} itemsPerPage
   * @param {Number} activePage
   * @param {Number} totalItems
   * @param {String} urlTemplate
   * @param {Boolean} unlimited
   */
  function Pager(root, itemsPerPage, activePage, totalItems, urlTemplate, unlimited) {
    _classCallCheck(this, Pager);

    this.ETC = '...';

    try {
      this.rootElement = $(root);
    } catch (error) {
      window.onerror('showcar-ui-test. $ is not defined', 'showcar-ui');
    }

    this.itemsPerPage = parseInt(itemsPerPage);
    this.activePage = parseInt(activePage);
    this.totalCount = parseInt(totalItems);
    this.urlTemplate = urlTemplate;
    this.unlimited = unlimited;
    this.maxPage = this.calculatePageCount();
    this.tileWidth = 48;
    this.prototypeLi = $('<li>');
    this.prototypeA = $('<a>');
    this.prototypeIcon = $('<as24-icon>');
    $(window).on('resize', $.proxy(this.render, this));
    this.render();
  }
  /**
   * @returns {Number}
   */


  _createClass(Pager, [{
    key: "getPageUrl",

    /**
     * @param {Number} pageNumber
     * @returns {String}
     */
    value: function getPageUrl(pageNumber) {
      var template = this.urlTemplate.replace('{page}', pageNumber.toString());
      return template.replace('{size}', this.itemsPerPage.toString());
    }
    /**
     * Create a single page element
     *
     * @param {Number} pageNumber
     * @returns {Object|Zepto}
     */

  }, {
    key: "createPage",
    value: function createPage(pageNumber) {
      var tile = this.prototypeLi.clone().data('page', pageNumber),
          a = this.prototypeA.clone().attr('href', this.getPageUrl(pageNumber));

      if (this.ETC === pageNumber) {
        tile.data('page', 'etc');
        a.addClass('disabled');
        a.removeAttr('href');
        a.attr('rel', 'nofollow');
      }

      if (this.activePage === pageNumber) {
        a.addClass('active');
        a.removeAttr('href');
        a.attr('rel', 'nofollow');
      }

      a.text(pageNumber);
      return tile.append(a);
    }
    /**
     * Returns the maximum possible amount ot tiles between <PREV> and <NEXT>
     *
     * @returns {int}
     */

  }, {
    key: "getMaximumPossibleTiles",
    value: function getMaximumPossibleTiles() {
      var rootWidth = this.rootElement.width(); // We assume that this is the minWidth for both buttons

      var prevNextWidth = 200;
      return Math.floor((rootWidth - prevNextWidth) / this.tileWidth);
    }
    /**
     * Returns an array with all page numbers in the correct order
     *
     * Example:
     * activePage = 17
     * maxPage    = 20
     * Returns [1, "...", 14, 15, 16, 17, 18, 19, 20]
     *
     * @param {Number} activePage
     * @returns {Array}
     */

  }, {
    key: "getPageTiles",
    value: function getPageTiles(activePage) {
      var startTile = activePage > this.maxPage ? this.maxPage : activePage,
          leftNumber = startTile - 1,
          rightNumber = startTile + 1,
          maxPossibleTiles = this.getMaximumPossibleTiles(),
          usefulTiles = 0,
          countEtc = 0; // we always want to have an odd number of tiles to show

      if (maxPossibleTiles % 2 === 0 && this.maxPage > maxPossibleTiles) {
        maxPossibleTiles--;
      }

      var tiles = [startTile]; // because we have our activePage, we have one possible tile less

      maxPossibleTiles--;

      while ((leftNumber > 0 || rightNumber <= this.maxPage) && maxPossibleTiles > 0) {
        if (leftNumber > 0) {
          tiles.unshift(leftNumber);
          usefulTiles++;
          maxPossibleTiles--;

          if (0 === maxPossibleTiles) {
            break;
          }
        }

        if (rightNumber <= this.maxPage) {
          tiles.push(rightNumber);
          usefulTiles++;
          maxPossibleTiles--;

          if (0 === maxPossibleTiles) {
            break;
          }
        }

        leftNumber--;
        rightNumber++;
      } // special case: we have enough space to show 'em all


      if (tiles.length === this.maxPage) {
        return tiles;
      } // special case: If we have less or equal to 7 pages/tiles in total, we show all or infopage


      if (this.maxPage <= 7 && tiles.length < this.maxPage) {
        return [];
      } // show dots on the left ( < 1 ... 7 8 9)


      if (1 !== tiles[0]) {
        tiles[0] = 1;
        tiles[1] = this.ETC;
        countEtc++;
        usefulTiles -= 1;
      } // show dots on the right ( 10 11 ... 20 >)


      if (this.maxPage !== tiles[tiles.length - 1]) {
        tiles[tiles.length - 1] = this.maxPage;
        tiles[tiles.length - 2] = this.ETC;
        countEtc++;
        usefulTiles -= 1;
      } // special case: show info page if less than 3 useful tiles


      if (countEtc >= 1 && usefulTiles <= 3) {
        return [];
      } // show only the info page tile


      if (usefulTiles <= 2 || this.maxPage <= 3) {
        return [];
      }

      return tiles;
    }
    /**
     * Render the pagination
     */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.rootElement.children().remove();
      var pagination = this.getPageTiles(this.activePage),
          collection = $();
      this.rootElement.append(this.previousButton);

      if (0 === pagination.length) {
        this.rootElement.append(this.infoPage);
      } else {
        pagination.forEach(function (page) {
          collection = collection.add(_this.createPage(page));
        });
        this.rootElement.append(collection);
      }

      this.rootElement.append(this.nextButton);
    }
    /**
     * @returns {Number}
     */

  }, {
    key: "calculatePageCount",
    value: function calculatePageCount() {
      var numberOfPages = Math.ceil(this.totalCount / this.itemsPerPage);

      if (this.unlimited) {
        return numberOfPages;
      }

      if (numberOfPages >= 20) {
        return 20;
      }

      return numberOfPages;
    }
  }, {
    key: "maxPage",
    get: function get() {
      return this._maxPage;
    }
    /**
     * @param {Number} pages
     */
    ,
    set: function set(pages) {
      this._maxPage = pages;
    }
    /**
     * @returns {Object|Zepto}
     */

  }, {
    key: "previousButton",
    get: function get() {
      var li = this.prototypeLi.clone(),
          a = this.prototypeA.clone(),
          icon = this.prototypeIcon.clone();
      var previousText = $(this.rootElement).data('previous-text') || 'Previous';
      var isPreviousPageAvailable = this.totalCount > 0 && (this.activePage > 1 || this.activePage > this.maxPage);
      li.addClass('previous-page');

      if (isPreviousPageAvailable) {
        var pageNumber = this.activePage > this.maxPage ? this.maxPage : this.activePage - 1;
        a.attr('href', this.getPageUrl(pageNumber));
      } else {
        a.addClass('disabled');
      }

      a.text(' ' + previousText);
      icon.attr('type', 'arrow');
      return li.append(a.prepend(icon));
    }
    /**
     * @returns {Object|Zepto}
     */

  }, {
    key: "nextButton",
    get: function get() {
      var li = this.prototypeLi.clone(),
          a = this.prototypeA.clone(),
          icon = this.prototypeIcon.clone();
      var nextText = $(this.rootElement).data('next-text') || 'Next';
      var isNextPageAvailable = this.activePage < this.maxPage;
      li.addClass('next-page');

      if (isNextPageAvailable) {
        a.attr('href', this.getPageUrl(this.activePage + 1));
      } else {
        a.addClass('disabled');
      }

      a.text(nextText + ' ');
      icon.attr('type', 'arrow');
      return li.append(a.append(icon));
    }
  }, {
    key: "infoPage",
    get: function get() {
      return this.prototypeLi.clone().addClass('info-page').append(this.prototypeA.clone().addClass('disabled').attr('href', 'javascript:void(0)').text(this.activePage + ' / ' + this.maxPage));
    }
  }]);

  return Pager;
}();

/* harmony default export */ __webpack_exports__["default"] = (Pager);

/***/ }),

/***/ "./src/06-components/organisms/spy-navigation/spy-navigation.js":
/*!**********************************************************************!*\
  !*** ./src/06-components/organisms/spy-navigation/spy-navigation.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _07_utilities_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../07-utilities/scroll.js */ "./src/07-utilities/scroll.js");

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  // This one is needed for check whether active link element has changed or not
  var activeNavItemCache;
  var componentClass = '.sc-spy-navigation';
  var linkClass = componentClass + '__link';
  var toggleClass = componentClass + '__toggle';
  var expandedStateModifier = (componentClass + '--expanded').substr(1);
  var stickedStateModifier = (componentClass + '--sticked').substr(1);
  var activeLinkModifier = (linkClass + '--active').substr(1);
  var componentElem = document.querySelector(componentClass);
  var spyOnHold = false;
  if (componentElem === null) return;
  var stickElemSelector = componentElem.getAttribute('data-stick-when');
  var stickElem = document.querySelector(stickElemSelector);
  var links = componentElem.querySelectorAll(linkClass);
  if (!links.length) return;
  var linkTargetPairs = Array.prototype.map.call(links, function (link) {
    var href = link.getAttribute('data-href');
    var oldTarget = document.querySelector('[name="' + href + '"]');
    var newTarget = document.querySelector('#' + href);
    var target = newTarget || oldTarget; // support both name and id

    return {
      link: link,
      target: target
    };
  });

  function componentSticked() {
    return componentElem.classList.contains(stickedStateModifier);
  }

  function stick() {
    var navHeight = componentElem.getBoundingClientRect().height;
    stickElem.style.paddingTop = navHeight + 'px';
    componentElem.classList.add(stickedStateModifier);
  }

  function unstick() {
    componentElem.classList.remove(stickedStateModifier);
    stickElem.style.paddingTop = '0px';
  }

  function defaultStickWhenFn(scrollTop, stickToElem) {
    return scrollTop > stickToElem.offsetTop;
  }

  function defaultUnstickWhen(scrollTop, stickToElem, componentElem) {
    return scrollTop < stickToElem.offsetTop - componentElem.getBoundingClientRect().height;
  }

  function handleStickiness() {
    if (!stickElem) return;
    var needToStick = (config && config.stickPosFn || defaultStickWhenFn)(window.pageYOffset, stickElem);
    var needToUnstick = (config && config.unstickPosFn || defaultUnstickWhen)(window.pageYOffset, stickElem, componentElem);

    if (!componentSticked() && needToStick) {
      stick();
    } else if (componentSticked() && needToUnstick) {
      unstick();
    }
  }

  function handleResize() {
    var containerHeight = 55;
    var rootEl = document.querySelector(componentClass);
    var toggle = rootEl.querySelector(toggleClass);
    var toggleIconWidth = 28;
    var toggleWidth = toggle.offsetWidth;
    var toggleVisibleClass = 'sc-spy-navigation__toggle--visible';
    var containerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    containerWidth = containerWidth > 1100 ? 1100 : containerWidth;
    var navigationWidth = 0;
    var elementY = containerHeight;
    var elements = componentElem.querySelectorAll(linkClass);
    var index = 0;
    var count = elements.length;
    var minWidth = 0;
    Array.prototype.forEach.call(elements, function (element) {
      element.style.width = 'auto';

      if (element.offsetWidth + toggleIconWidth > minWidth) {
        minWidth = element.offsetWidth + toggleIconWidth;
      }
    });
    var first = true;
    Array.prototype.forEach.call(elements, function (element) {
      navigationWidth += element.offsetWidth + 10;

      if (navigationWidth > containerWidth - toggleWidth && containerWidth >= 768) {
        toggle.classList.add(toggleVisibleClass);
        element.style.position = 'absolute';
        element.style.top = elementY + 'px';
        element.style.right = 0;
        element.style.borderLeft = '1px solid #dcdcdc';
        element.style.width = minWidth + 'px';
        element.style.padding = '12px 16px';

        if (first) {
          first = false;
          element.style.padding = '20px 16px 12px 16px';
        }

        if (index === count - 1) {
          element.style.borderBottom = '1px solid #dcdcdc';
          element.style.padding = '12px 16px 20px 16px';
        }

        elementY += element.offsetHeight;
      } else {
        toggle.classList.remove(toggleVisibleClass);
        element.removeAttribute('style');
      }

      index++;
    });
  }

  function navigateToAnchor($item) {
    var targetName = $item.getAttribute('data-href');
    var oldTarget = document.querySelector('[name="' + targetName + '"]');
    var newTarget = document.querySelector('#' + targetName);
    var target = newTarget || oldTarget; // support both name and id

    if (target) {
      Object(_07_utilities_scroll_js__WEBPACK_IMPORTED_MODULE_0__["smoothScroll"])(target, 300, function () {
        spyOnHold = false;
        spyScroll();
      });
    }
  }

  function closeNavigation() {
    if (!componentElem) return;
    componentElem.classList.remove('sc-spy-navigation--expanded');
  }

  var spyScroll = function spyScroll() {
    if (spyOnHold) return;
    var activeNavItem,
        scrollTop = window.pageYOffset,
        componentHeight = componentElem.getBoundingClientRect().height;
    activeNavItem = linkTargetPairs.filter(function (pair) {
      if (!pair.target) {
        throw new Error('Check hash name on target');
      }

      return pair.target.getBoundingClientRect().top + (document.body.scrollTop || document.documentElement.scrollTop) <= scrollTop + componentHeight + 5;
    }).pop();

    if (activeNavItemCache !== activeNavItem) {
      activeNavItemCache = activeNavItem;
      linkTargetPairs.forEach(function (pair) {
        pair.link.classList.remove(activeLinkModifier);
      });

      if (activeNavItem) {
        activeNavItem.link.classList.add(activeLinkModifier);
      }
    }
  };

  var initMobileToggle = function initMobileToggle() {
    var rootEl = document.querySelector(componentClass);
    var toggle = rootEl.querySelector(toggleClass);
    toggle.addEventListener('click', function () {
      rootEl.classList.toggle(expandedStateModifier);
    });
  };

  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      if (timeout) return;
      timeout = setTimeout(function () {
        func.apply(context, args);
        clearTimeout(timeout);
        timeout = null;
      }, wait);
    };
  }

  Array.prototype.forEach.call(componentElem.querySelectorAll(linkClass), function (linkEl) {
    linkEl.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeNavigation();
      spyOnHold = true;
      navigateToAnchor(linkEl);
    });
  });
  var debSpyScroll = debounce(spyScroll, 300);
  window.addEventListener('resize', function () {
    handleStickiness();
    handleResize();
    debSpyScroll();
  });
  window.addEventListener('scroll', function () {
    handleStickiness();
    debSpyScroll();
  });
  handleStickiness();
  spyScroll();
  initMobileToggle();
  handleResize();
  document.addEventListener('DOMContentLoaded', function () {
    handleResize();
  });
});

/***/ }),

/***/ "./src/07-utilities/accessible-links.js":
/*!**********************************************!*\
  !*** ./src/07-utilities/accessible-links.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  document.addEventListener('keydown', function (e) {
    var keyCode = e.which;

    if (keyCode === 9) {
      // TAB
      document.body.classList.add('sc-focus-visible-only');
    }
  });
});

/***/ }),

/***/ "./src/07-utilities/helpers.js":
/*!*************************************!*\
  !*** ./src/07-utilities/helpers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {object} additionalProperties must be of the form { value : function } |
 */
var registerElement = function registerElement(element) {
  var additionalProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    var attached = [];
    document.registerElement(element.tagName, {
      prototype: Object.create(HTMLElement.prototype, Object.assign({
        createdCallback: {
          value: element.createdCallback
        },
        attributeChangedCallback: {
          value: element.attributeChangedCallback
        },
        attachedCallback: {
          value: function value() {
            if (attached.indexOf(this) != -1) return; // run as singleton. We need it for (p)react

            element.attachedCallback.bind(this)();
            attached.push(this);
          }
        }
      }, additionalProperties))
    });
  } catch (e) {
    if (window && window.console) {
      window.console.warn('Failed to register CustomElement "' + element.tagName + '".', e);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (registerElement);

/***/ }),

/***/ "./src/07-utilities/scroll.js":
/*!************************************!*\
  !*** ./src/07-utilities/scroll.js ***!
  \************************************/
/*! exports provided: smoothScroll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerSmoothScrolling; });
var _this = undefined;

var scroll = function scroll(to, duration) {
  if (duration <= 0) {
    window.scrollTo(0, to);
  } else {
    var difference = to - window.pageYOffset;
    var perTick = difference / duration * 10;
    $(_this).scrollToTimerCache = setTimeout(function () {
      if (!isNaN(parseInt(perTick, 10))) {
        window.scrollTo(0, window.pageYOffset + perTick);
        scroll(to, duration - 10);
      }
    }, 10);
  }
};

function smoothScroll(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var cb = arguments.length > 2 ? arguments[2] : undefined;
  var targetSelector = '';
  var hrefTarget = $(target).attr('href'); // We need to handle href and name since spy navigation is using name as target

  if (hrefTarget && hrefTarget.length) {
    targetSelector = 'a[name="' + hrefTarget.split('#')[1] + '"]';

    if (!$(targetSelector).length) {
      targetSelector = hrefTarget;
    }
  } else {
    var nameTarget = $(target).attr('name');
    var idTarget = $(target).attr('id');

    if (nameTarget) {
      targetSelector = 'a[name="' + nameTarget + '"]';
    } else if (idTarget) {
      targetSelector = 'a#' + idTarget;
    } else {
      console.warn('No target for scroll');
      return;
    }
  }

  var offset = $(targetSelector).offset();
  var to = offset && offset.top || 0;
  scroll(to, duration);

  if (cb) {
    cb();
  }
}
function registerSmoothScrolling() {
  // TODO: Get rid of .sc-smooth-scroll class once all teams have migrated to data attribute
  $(document).on('click', '.sc-smooth-scroll, [data-smooth-scroll]', function (e) {
    e.preventDefault();
    smoothScroll(e.currentTarget);
  });
}

/***/ }),

/***/ "./src/js/showcar-clean-cookies.js":
/*!*****************************************!*\
  !*** ./src/js/showcar-clean-cookies.js ***!
  \*****************************************/
/*! exports provided: findUnneededCookies, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUnneededCookies", function() { return findUnneededCookies; });
var whiteList = ['_asga', '__gads', '_ga', '_gid', '_gat', 'AMP_TOKEN', 'as24AutoAboLike2Drive', 'as24AutoAboMobileAppView', 'as24-gtmSearchCrit', 'as24AutoAboMobileAppView', 'as24Visitor', 'culture', 'testmode', 'featurebee', 'toguru', 'cookieConsent', 'cookie-layer-dismissed', 'User', 'cmpatt', 'cms_fbOFF', 'S24UT', 'webxtest', 'testrun', 'as24-survey-opt-out', '__utma', '__utmz', '_utmz', 'optimizelySegments', 'optimizelyBuckets', 'optimizelyPendingLogEvents', 'optimizelyEndUserId', '_asse', '_asga', '_asga_gid', '_gat_ALL', 'optimizelyRedirectData', 'optimizelyReferrer', 'showTsm', 'isAdBlockerUsed3', 'urugot-bucket', 'PLAY_SESSION', 'gaid', 'asvid', 'doi', 'cid', 'GUID', 'oidcsaus', '.ASPXAUTH', '__RequestVerificationToken', 'test-cookie', '__ut', 'as24_identity', 'noauth', 'random', 'as24ArticleType', '0d1d0abe-8984-4629-b696-ae425affff05cconsent', '0d1d0abe-8984-4629-b696-ae425affff05euconsent', '0d1d0abe-8984-4629-b696-ae425affff05faktorChecksum', '0d1d0abe-8984-4629-b696-ae425affff05faktorId', 'page-views-feed', 'last-search-feed', 'home-feed-bucket', 'consentForAds', 'acExperiment'];

var deleteCookieByName = function deleteCookieByName(cookie) {
  document.cookie = cookie + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

var getCookieName = function getCookieName(cookie) {
  var cookieArray = cookie.split('=');
  return cookieArray[0].trim();
};

var findUnneededCookies = function findUnneededCookies(cookie) {
  var isNotWhitelisted = true;
  var i = 0;

  while (isNotWhitelisted && i < whiteList.length) {
    var regex = new RegExp("^(".concat(whiteList[i], ")"), 'i');
    isNotWhitelisted = !regex.test(cookie);
    i++;
  }

  return isNotWhitelisted;
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var unneededCookies = document.cookie.split(';').map(function (cookie) {
    return getCookieName(cookie);
  }).filter(findUnneededCookies);
  unneededCookies.forEach(deleteCookieByName);
});

/***/ }),

/***/ "./src/showcar-ui.js":
/*!***************************!*\
  !*** ./src/showcar-ui.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _06_components_atoms_custom_dropdown_custom_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./06-components/atoms/custom-dropdown/custom-dropdown */ "./src/06-components/atoms/custom-dropdown/custom-dropdown.js");
/* harmony import */ var _06_components_organisms_pagination_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./06-components/organisms/pagination/pagination */ "./src/06-components/organisms/pagination/pagination.js");
/* harmony import */ var _06_components_organisms_spy_navigation_spy_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./06-components/organisms/spy-navigation/spy-navigation */ "./src/06-components/organisms/spy-navigation/spy-navigation.js");
/* harmony import */ var _05_layout_sticky_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./05-layout/sticky/sticky */ "./src/05-layout/sticky/sticky.js");
/* harmony import */ var _06_components_atoms_rotating_arrow_rotating_arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./06-components/atoms/rotating-arrow/rotating-arrow */ "./src/06-components/atoms/rotating-arrow/rotating-arrow.js");
/* harmony import */ var _06_components_atoms_collapse_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./06-components/atoms/collapse/collapse */ "./src/06-components/atoms/collapse/collapse.js");
/* harmony import */ var _06_components_atoms_stepper_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./06-components/atoms/stepper/stepper */ "./src/06-components/atoms/stepper/stepper.js");
/* harmony import */ var _06_components_atoms_tabs_tabs_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./06-components/atoms/tabs/tabs-icons */ "./src/06-components/atoms/tabs/tabs-icons.js");
/* harmony import */ var _06_components_atoms_tabs_tabs_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./06-components/atoms/tabs/tabs-text */ "./src/06-components/atoms/tabs/tabs-text.js");
/* harmony import */ var _06_components_atoms_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./06-components/atoms/tooltip/tooltip */ "./src/06-components/atoms/tooltip/tooltip.js");
/* harmony import */ var _06_components_atoms_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./06-components/atoms/lightbox/lightbox */ "./src/06-components/atoms/lightbox/lightbox.js");
/* harmony import */ var _06_components_atoms_google_map_google_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./06-components/atoms/google-map/google-map */ "./src/06-components/atoms/google-map/google-map.js");
/* harmony import */ var _06_components_atoms_tag_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./06-components/atoms/tag/tag */ "./src/06-components/atoms/tag/tag.js");
/* harmony import */ var _06_components_organisms_navigation_v2_navigation_v2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./06-components/organisms/navigation-v2/navigation-v2 */ "./src/06-components/organisms/navigation-v2/navigation-v2.js");
/* harmony import */ var _06_components_molecules_notification_notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./06-components/molecules/notification/notification */ "./src/06-components/molecules/notification/notification.js");
/* harmony import */ var _07_utilities_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./07-utilities/scroll */ "./src/07-utilities/scroll.js");
/* harmony import */ var _07_utilities_accessible_links__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./07-utilities/accessible-links */ "./src/07-utilities/accessible-links.js");
/* harmony import */ var _js_showcar_clean_cookies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/showcar-clean-cookies */ "./src/js/showcar-clean-cookies.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_18__);
// Todo: remove Zepto
if (!window.$) {
  window.$ = window.Zepto = __webpack_require__(/*! zepto-modules/zepto */ "./node_modules/zepto-modules/zepto.js");

  __webpack_require__(/*! zepto-modules/event */ "./node_modules/zepto-modules/event.js");

  __webpack_require__(/*! zepto-modules/ajax */ "./node_modules/zepto-modules/ajax.js");

  __webpack_require__(/*! zepto-modules/form */ "./node_modules/zepto-modules/form.js");

  __webpack_require__(/*! zepto-modules/ie */ "./node_modules/zepto-modules/ie.js");

  __webpack_require__(/*! zepto-modules/detect */ "./node_modules/zepto-modules/detect.js");

  __webpack_require__(/*! zepto-modules/assets */ "./node_modules/zepto-modules/assets.js");

  __webpack_require__(/*! zepto-modules/data */ "./node_modules/zepto-modules/data.js");

  __webpack_require__(/*! zepto-modules/callbacks */ "./node_modules/zepto-modules/callbacks.js");

  __webpack_require__(/*! zepto-modules/selector */ "./node_modules/zepto-modules/selector.js");

  __webpack_require__(/*! zepto-modules/touch */ "./node_modules/zepto-modules/touch.js");

  __webpack_require__(/*! zepto-modules/gesture */ "./node_modules/zepto-modules/gesture.js");

  __webpack_require__(/*! zepto-modules/fx */ "./node_modules/zepto-modules/fx.js");

  __webpack_require__(/*! zepto-modules/fx_methods */ "./node_modules/zepto-modules/fx_methods.js");
} // Make sure these variables are initialized in case somebody uses them unintialized before they are loaded


window.ut = window.ut || [];
window.dataLayer = window.dataLayer || [];

var warn = function warn(msg) {
  return window.console && window.console.warn(msg);
};

var showcar = {}; // Dropdown


Object(_06_components_atoms_custom_dropdown_custom_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"])('custom-dropdown'); // Pager


window.Pager = _06_components_organisms_pagination_pagination__WEBPACK_IMPORTED_MODULE_1__["default"]; // Spy-navigation


showcar.spyNavigation = _06_components_organisms_spy_navigation_spy_navigation__WEBPACK_IMPORTED_MODULE_2__["default"]; // Sticky js


Object(_05_layout_sticky_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Rotating-arrow

 // Todo: Check usages and remove

Object(_06_components_atoms_rotating_arrow_rotating_arrow__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Collapse


document.addEventListener('DOMContentLoaded', function () {
  Object(_06_components_atoms_collapse_collapse__WEBPACK_IMPORTED_MODULE_5__["default"])();
}); // stepper


Object(_06_components_atoms_stepper_stepper__WEBPACK_IMPORTED_MODULE_6__["default"])(); // tabs-icon


Object(_06_components_atoms_tabs_tabs_icons__WEBPACK_IMPORTED_MODULE_7__["default"])('tabs-icon'); // tabs-text


Object(_06_components_atoms_tabs_tabs_text__WEBPACK_IMPORTED_MODULE_8__["default"])('tabs-text'); // tooltip2


Object(_06_components_atoms_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_9__["default"])('as24-tooltip'); // lightbox


Object(_06_components_atoms_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_10__["default"])('as24-lightbox'); // google-map


Object(_06_components_atoms_google_map_google_map__WEBPACK_IMPORTED_MODULE_11__["default"])('as24-google-map'); // tag


Object(_06_components_atoms_tag_tag__WEBPACK_IMPORTED_MODULE_12__["default"])(); // navigation-v2


Object(_06_components_organisms_navigation_v2_navigation_v2__WEBPACK_IMPORTED_MODULE_13__["default"])(); // notification

 // TODO: question for the guild
// TODO do we still need it?

if (!window.notification) {
  window.notification = Object(_06_components_molecules_notification_notification__WEBPACK_IMPORTED_MODULE_14__["default"])('as24-notification');
} else {
  warn('window.notification is already registered.');
} //Scroll



Object(_07_utilities_scroll__WEBPACK_IMPORTED_MODULE_15__["default"])(); //Add borders to links when tab was hit


Object(_07_utilities_accessible_links__WEBPACK_IMPORTED_MODULE_16__["default"])(); //Clean up cookies


window.addEventListener('load', function () {
  Object(_js_showcar_clean_cookies__WEBPACK_IMPORTED_MODULE_17__["default"])();
}); // storage

window.Storage = __webpack_require__(/*! showcar-storage */ "./node_modules/showcar-storage/src/storage.js"); //lazysizes

window.lazySizesConfig = {
  loadMode: 1,
  expFactor: 0,
  hFac: 0
};

window.showcar = window.showcar || showcar;
/* harmony default export */ __webpack_exports__["default"] = (showcar);

/***/ })

/******/ });
//# sourceMappingURL=showcar-ui.js.map