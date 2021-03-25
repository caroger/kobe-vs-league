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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-tip/index.js":
/*!**************************************!*\
  !*** ./node_modules/d3-tip/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/roger/repos/kobe-vs-league/node_modules/d3-tip/index.js'");

/***/ }),

/***/ "./node_modules/d3/index.js":
/*!**********************************!*\
  !*** ./node_modules/d3/index.js ***!
  \**********************************/
/*! exports provided: version, bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip, axisTop, axisRight, axisBottom, axisLeft, brush, brushX, brushY, brushSelection, chord, ribbon, nest, set, map, keys, values, entries, color, rgb, hsl, lab, hcl, lch, gray, cubehelix, contours, contourDensity, dispatch, drag, dragDisable, dragEnable, dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue, autoType, easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut, blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg, forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound, geoArea, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform, cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify, interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize, path, polygonArea, polygonCentroid, polygonHull, polygonContains, polygonLength, quadtree, randomUniform, randomNormal, randomLogNormal, randomBates, randomIrwinHall, randomExponential, scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat, schemeCategory10, schemeAccent, schemeDark2, schemePaired, schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3, schemeTableau10, interpolateBrBG, schemeBrBG, interpolatePRGn, schemePRGn, interpolatePiYG, schemePiYG, interpolatePuOr, schemePuOr, interpolateRdBu, schemeRdBu, interpolateRdGy, schemeRdGy, interpolateRdYlBu, schemeRdYlBu, interpolateRdYlGn, schemeRdYlGn, interpolateSpectral, schemeSpectral, interpolateBuGn, schemeBuGn, interpolateBuPu, schemeBuPu, interpolateGnBu, schemeGnBu, interpolateOrRd, schemeOrRd, interpolatePuBuGn, schemePuBuGn, interpolatePuBu, schemePuBu, interpolatePuRd, schemePuRd, interpolateRdPu, schemeRdPu, interpolateYlGnBu, schemeYlGnBu, interpolateYlGn, schemeYlGn, interpolateYlOrBr, schemeYlOrBr, interpolateYlOrRd, schemeYlOrRd, interpolateBlues, schemeBlues, interpolateGreens, schemeGreens, interpolateGreys, schemeGreys, interpolatePurples, schemePurples, interpolateReds, schemeReds, interpolateOranges, schemeOranges, interpolateCividis, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateSinebow, interpolateTurbo, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent, arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse, timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears, timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse, now, timer, timerFlush, timeout, interval, transition, active, interrupt, voronoi, zoom, zoomTransform, zoomIdentity */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/roger/repos/kobe-vs-league/node_modules/d3/index.js'");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadData */ "./src/loadData.js");
/* harmony import */ var _renderMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMap */ "./src/renderMap.js");
/* harmony import */ var _renderTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTable */ "./src/renderTable.js");



Object(_loadData__WEBPACK_IMPORTED_MODULE_0__["loadMapData"])().then(function (data) {
  var geoData = data.geoData,
      arenaData = data.arenaData,
      gameData = data.gameData;
  Object(_renderMap__WEBPACK_IMPORTED_MODULE_1__["renderMap"])(geoData, arenaData, gameData);
  Object(_renderTable__WEBPACK_IMPORTED_MODULE_2__["renderTable"])("POR", arenaData, gameData);
});

/***/ }),

/***/ "./src/loadData.js":
/*!*************************!*\
  !*** ./src/loadData.js ***!
  \*************************/
/*! exports provided: loadMapData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMapData", function() { return loadMapData; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var loadMapData = function loadMapData() {
  var geoData;
  var arenaData;
  var gameData;
  return Promise.all([Object(d3__WEBPACK_IMPORTED_MODULE_0__["json"])("./assets/data/gz_2010_us_040_00_20m.json"), Object(d3__WEBPACK_IMPORTED_MODULE_0__["json"])("./assets/data/arenas.geojson"), Object(d3__WEBPACK_IMPORTED_MODULE_0__["json"])("./assets/data/game_stats.json")]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        d1 = _ref2[0],
        d2 = _ref2[1],
        d3 = _ref2[2];

    geoData = d1.features.filter(function (d) {
      return !["Alaska", "Hawaii"].includes(d.properties.NAME);
    });
    arenaData = d2.features;
    gameData = d3;
    return {
      geoData: geoData,
      arenaData: arenaData,
      gameData: gameData
    };
  });
};

/***/ }),

/***/ "./src/renderMap.js":
/*!**************************!*\
  !*** ./src/renderMap.js ***!
  \**************************/
/*! exports provided: renderMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMap", function() { return renderMap; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");
/* harmony import */ var _renderTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTable */ "./src/renderTable.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var d3 = _objectSpread(_objectSpread({}, d3__WEBPACK_IMPORTED_MODULE_0__), {}, {
  tip: d3_tip__WEBPACK_IMPORTED_MODULE_1__["default"]
});

 //initialize tip

var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
  return "".concat(d.properties.city, " ").concat(d.properties.team);
});
var renderMap = function renderMap(geoData, arenaData, gameData) {
  var width = 900;
  var height = 600;
  var mapSvg = Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])(".map-container").append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 900 600").classed("map", true);
  var projection = Object(d3__WEBPACK_IMPORTED_MODULE_0__["geoAlbersUsa"])();
  var path = Object(d3__WEBPACK_IMPORTED_MODULE_0__["geoPath"])(projection);
  var logoSize = width / 16;
  mapSvg.selectAll("path").data(geoData).enter().append("path").attr("class", "state").attr("d", path).attr("fill", "#fdb927") // base state color
  .attr("stroke", "white") // white state border
  .attr("stroke-width", 5); // state line width

  mapSvg.call(tip);
  mapSvg.selectAll("logo").data(arenaData).enter().append("svg:image").attr("class", "logo-svg").attr("id", function (d) {
    return "".concat(d.properties.abbreviation);
  }).attr("width", logoSize).attr("height", logoSize).attr("x", function (d) {
    return projection(d.geometry.coordinates)[0] - width / 10 / 2;
  }).attr("y", function (d) {
    return projection(d.geometry.coordinates)[1] - height / 6.67 / 2;
  }).attr("xlink:href", function (d) {
    return d.properties.logo_url;
  }).on("mouseover", tip.show).on("mouseout", tip.hide).on("click", function (d) {
    Object(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"])("table").remove();
    Object(_renderTable__WEBPACK_IMPORTED_MODULE_2__["renderTable"])(d.properties.abbreviation, arenaData, gameData);
  }); //adjust overlapping logos

  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#SAC").attr("transform", "translate(0,".concat(-logoSize / 3, ")"));
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#BKN").attr("transform", "translate(".concat(logoSize / 4, ",0)"));
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#NYK").attr("transform", "translate(".concat(-logoSize / 4, ",0)"));
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#PHI").attr("transform", "translate(".concat(logoSize / 4, ",").concat(logoSize / 4, ")"));
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#WAS").attr("transform", "translate(".concat(-logoSize / 4, ",0)"));
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#CLE").attr("transform", "translate(".concat(logoSize / 8, ")"));
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("#DET").attr("transform", "translate(".concat(-logoSize / 8, ")"));
};

/***/ }),

/***/ "./src/renderTable.js":
/*!****************************!*\
  !*** ./src/renderTable.js ***!
  \****************************/
/*! exports provided: renderTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTable", function() { return renderTable; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

var renderTable = function renderTable(team, arenaData, gameData) {
  var logoURL = arenaData.filter(function (d) {
    return d.properties.abbreviation === "".concat(team);
  })[0].properties.logo_url; // table heading

  Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])(".opponent-logo").style("background-image", "url(".concat(logoURL, ")")); //stats to render

  var statsType = "total";
  var stats = Object.entries(gameData["".concat(statsType)]["".concat(team)]);
  var headingText = "Career Total";
  var bgColor = arenaData.filter(function (d) {
    return d.properties.abbreviation === team;
  })[0].properties.color || "purple";
  var table = Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])(".table-container").append("table");
  var thead = table.append("thead");
  var tbody = table.append("tbody");
  thead.append("tr").append("th").attr("colspan", 2).text(headingText).style("background-color", bgColor);
  tbody.selectAll("tr").data(stats).enter().append("tr").selectAll("td").data(function (d) {
    return d;
  }).enter().append("td").text(function (d) {
    return d;
  }); // dynamically change border-bottom

  tbody.selectAll("tr").filter(function (d, i, list) {
    return i === list.length - 1;
  }).attr("style", "border-bottom: 2px solid ".concat(bgColor)); //toggle different stats to display

  table.on("click", function () {
    switch (statsType) {
      case "total":
        statsType = "mean";
        stats = Object.entries(gameData["".concat(statsType)]["".concat(team)]);
        headingText = "Career Average";
        break;

      case "mean":
        statsType = "highlight";
        stats = Object.entries(gameData["".concat(statsType)]["".concat(team)]);
        headingText = "Highlights";
        break;

      case "highlight":
        statsType = "total";
        stats = Object.entries(gameData["".concat(statsType)]["".concat(team)]);
        headingText = "Career Total";
        break;

      default:
        break;
    }

    updateTable(stats, headingText, bgColor);
    console.log(stats);
  });
};

var updateTable = function updateTable(stats, headingText, bgColor) {
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"])("tbody").remove();
  Object(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"])("thead").remove();
  var thead = Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("table").append("thead");
  var tbody = Object(d3__WEBPACK_IMPORTED_MODULE_0__["select"])("table").append("tbody");
  thead.append("tr").append("th").attr("colspan", 2).text(headingText).style("background-color", bgColor);
  tbody.selectAll("tr").data(stats).enter().append("tr").selectAll("td").data(function (d) {
    return d;
  }).enter().append("td").transition().text(function (d) {
    return d;
  });
  tbody.selectAll("tr").filter(function (d, i, list) {
    return i === list.length - 1;
  }).attr("style", "border-bottom: 2px solid ".concat(bgColor));
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map