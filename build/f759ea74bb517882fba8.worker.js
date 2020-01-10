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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/string-replace-webpack-plugin/loader.js?id=ncn6nlg2f11tl8fkbffjsv2t9!./node_modules/string-replace-webpack-plugin/loader.js?id=ra8h0723va2c4n653vzzuayvi!./node_modules/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/string-replace-webpack-plugin/loader.js?id=ncn6nlg2f11tl8fkbffjsv2t9!./node_modules/string-replace-webpack-plugin/loader.js?id=ra8h0723va2c4n653vzzuayvi!./node_modules/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-webpack-plugin/loader.js?id=ncn6nlg2f11tl8fkbffjsv2t9!./node_modules/string-replace-webpack-plugin/loader.js?id=ra8h0723va2c4n653vzzuayvi!./node_modules/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */

(function(obj) {

	// Global
	var MAX_BITS = 15;

	var Z_OK = 0;
	var Z_STREAM_END = 1;
	var Z_NEED_DICT = 2;
	var Z_STREAM_ERROR = -2;
	var Z_DATA_ERROR = -3;
	var Z_MEM_ERROR = -4;
	var Z_BUF_ERROR = -5;

	var inflate_mask = [ 0x00000000, 0x00000001, 0x00000003, 0x00000007, 0x0000000f, 0x0000001f, 0x0000003f, 0x0000007f, 0x000000ff, 0x000001ff, 0x000003ff,
			0x000007ff, 0x00000fff, 0x00001fff, 0x00003fff, 0x00007fff, 0x0000ffff ];

	var MANY = 1440;

	// JZlib version : "1.0.2"
	var Z_NO_FLUSH = 0;
	var Z_FINISH = 4;

	// InfTree
	var fixed_bl = 9;
	var fixed_bd = 5;

	var fixed_tl = [ 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0,
			0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40,
			0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13,
			0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60,
			0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7,
			35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8,
			26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80,
			7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0,
			8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0,
			8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97,
			0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210,
			81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117,
			0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154,
			84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83,
			0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230,
			80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139,
			0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174,
			0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111,
			0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9,
			193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8,
			120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8,
			227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8,
			92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9,
			249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8,
			130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9,
			181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8,
			102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9,
			221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0,
			8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9,
			147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8,
			85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9,
			235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8,
			141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9,
			167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8,
			107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9,
			207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8,
			127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255 ];
	var fixed_td = [ 80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5,
			8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5,
			24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577 ];

	// Tables for deflate from PKZIP's appnote.txt.
	var cplens = [ // Copy lengths for literal codes 257..285
	3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ];

	// see note #13 above about 258
	var cplext = [ // Extra bits for literal codes 257..285
	0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112 // 112==invalid
	];

	var cpdist = [ // Copy offsets for distance codes 0..29
	1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ];

	var cpdext = [ // Extra bits for distance codes
	0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];

	// If BMAX needs to be larger than 16, then h and x[] should be uLong.
	var BMAX = 15; // maximum bit length of any code

	function InfTree() {
		var that = this;

		var hn; // hufts used in space
		var v; // work area for huft_build
		var c; // bit length count table
		var r; // table entry for structure assignment
		var u; // table stack
		var x; // bit offsets, then code stack

		function huft_build(b, // code lengths in bits (all assumed <=
		// BMAX)
		bindex, n, // number of codes (assumed <= 288)
		s, // number of simple-valued codes (0..s-1)
		d, // list of base values for non-simple codes
		e, // list of extra bits for non-simple codes
		t, // result: starting table
		m, // maximum lookup bits, returns actual
		hp,// space for trees
		hn,// hufts used in space
		v // working area: values in order of bit length
		) {
			// Given a list of code lengths and a maximum table size, make a set of
			// tables to decode that set of codes. Return Z_OK on success,
			// Z_BUF_ERROR
			// if the given code set is incomplete (the tables are still built in
			// this
			// case), Z_DATA_ERROR if the input is invalid (an over-subscribed set
			// of
			// lengths), or Z_MEM_ERROR if not enough memory.

			var a; // counter for codes of length k
			var f; // i repeats in table every f entries
			var g; // maximum code length
			var h; // table level
			var i; // counter, current code
			var j; // counter
			var k; // number of bits in current code
			var l; // bits per table (returned in m)
			var mask; // (1 << w) - 1, to avoid cc -O bug on HP
			var p; // pointer into c[], b[], or v[]
			var q; // points to current table
			var w; // bits before this table == (l * h)
			var xp; // pointer into x
			var y; // number of dummy codes added
			var z; // number of entries in current table

			// Generate counts for each bit length

			p = 0;
			i = n;
			do {
				c[b[bindex + p]]++;
				p++;
				i--; // assume all entries <= BMAX
			} while (i !== 0);

			if (c[0] == n) { // null input--all zero length codes
				t[0] = -1;
				m[0] = 0;
				return Z_OK;
			}

			// Find minimum and maximum length, bound *m by those
			l = m[0];
			for (j = 1; j <= BMAX; j++)
				if (c[j] !== 0)
					break;
			k = j; // minimum code length
			if (l < j) {
				l = j;
			}
			for (i = BMAX; i !== 0; i--) {
				if (c[i] !== 0)
					break;
			}
			g = i; // maximum code length
			if (l > i) {
				l = i;
			}
			m[0] = l;

			// Adjust last length count to fill out codes, if needed
			for (y = 1 << j; j < i; j++, y <<= 1) {
				if ((y -= c[j]) < 0) {
					return Z_DATA_ERROR;
				}
			}
			if ((y -= c[i]) < 0) {
				return Z_DATA_ERROR;
			}
			c[i] += y;

			// Generate starting offsets into the value table for each length
			x[1] = j = 0;
			p = 1;
			xp = 2;
			while (--i !== 0) { // note that i == g from above
				x[xp] = (j += c[p]);
				xp++;
				p++;
			}

			// Make a table of values in order of bit lengths
			i = 0;
			p = 0;
			do {
				if ((j = b[bindex + p]) !== 0) {
					v[x[j]++] = i;
				}
				p++;
			} while (++i < n);
			n = x[g]; // set n to length of v

			// Generate the Huffman codes and for each, make the table entries
			x[0] = i = 0; // first Huffman code is zero
			p = 0; // grab values in bit order
			h = -1; // no tables yet--level -1
			w = -l; // bits decoded == (l * h)
			u[0] = 0; // just to keep compilers happy
			q = 0; // ditto
			z = 0; // ditto

			// go through the bit lengths (k already is bits in shortest code)
			for (; k <= g; k++) {
				a = c[k];
				while (a-- !== 0) {
					// here i is the Huffman code of length k bits for value *p
					// make tables up to required level
					while (k > w + l) {
						h++;
						w += l; // previous table always l bits
						// compute minimum size table less than or equal to l bits
						z = g - w;
						z = (z > l) ? l : z; // table size upper limit
						if ((f = 1 << (j = k - w)) > a + 1) { // try a k-w bit table
							// too few codes for
							// k-w bit table
							f -= a + 1; // deduct codes from patterns left
							xp = k;
							if (j < z) {
								while (++j < z) { // try smaller tables up to z bits
									if ((f <<= 1) <= c[++xp])
										break; // enough codes to use up j bits
									f -= c[xp]; // else deduct codes from patterns
								}
							}
						}
						z = 1 << j; // table entries for j-bit table

						// allocate new table
						if (hn[0] + z > MANY) { // (note: doesn't matter for fixed)
							return Z_DATA_ERROR; // overflow of MANY
						}
						u[h] = q = /* hp+ */hn[0]; // DEBUG
						hn[0] += z;

						// connect to last table, if there is one
						if (h !== 0) {
							x[h] = i; // save pattern for backing up
							r[0] = /* (byte) */j; // bits in this table
							r[1] = /* (byte) */l; // bits to dump before this table
							j = i >>> (w - l);
							r[2] = /* (int) */(q - u[h - 1] - j); // offset to this table
							hp.set(r, (u[h - 1] + j) * 3);
							// to
							// last
							// table
						} else {
							t[0] = q; // first table is returned result
						}
					}

					// set up table entry in r
					r[1] = /* (byte) */(k - w);
					if (p >= n) {
						r[0] = 128 + 64; // out of values--invalid code
					} else if (v[p] < s) {
						r[0] = /* (byte) */(v[p] < 256 ? 0 : 32 + 64); // 256 is
						// end-of-block
						r[2] = v[p++]; // simple code is just the value
					} else {
						r[0] = /* (byte) */(e[v[p] - s] + 16 + 64); // non-simple--look
						// up in lists
						r[2] = d[v[p++] - s];
					}

					// fill code-like entries with r
					f = 1 << (k - w);
					for (j = i >>> w; j < z; j += f) {
						hp.set(r, (q + j) * 3);
					}

					// backwards increment the k-bit code i
					for (j = 1 << (k - 1); (i & j) !== 0; j >>>= 1) {
						i ^= j;
					}
					i ^= j;

					// backup over finished tables
					mask = (1 << w) - 1; // needed on HP, cc -O bug
					while ((i & mask) != x[h]) {
						h--; // don't need to update q
						w -= l;
						mask = (1 << w) - 1;
					}
				}
			}
			// Return Z_BUF_ERROR if we were given an incomplete table
			return y !== 0 && g != 1 ? Z_BUF_ERROR : Z_OK;
		}

		function initWorkArea(vsize) {
			var i;
			if (!hn) {
				hn = []; // []; //new Array(1);
				v = []; // new Array(vsize);
				c = new Int32Array(BMAX + 1); // new Array(BMAX + 1);
				r = []; // new Array(3);
				u = new Int32Array(BMAX); // new Array(BMAX);
				x = new Int32Array(BMAX + 1); // new Array(BMAX + 1);
			}
			if (v.length < vsize) {
				v = []; // new Array(vsize);
			}
			for (i = 0; i < vsize; i++) {
				v[i] = 0;
			}
			for (i = 0; i < BMAX + 1; i++) {
				c[i] = 0;
			}
			for (i = 0; i < 3; i++) {
				r[i] = 0;
			}
			// for(int i=0; i<BMAX; i++){u[i]=0;}
			u.set(c.subarray(0, BMAX), 0);
			// for(int i=0; i<BMAX+1; i++){x[i]=0;}
			x.set(c.subarray(0, BMAX + 1), 0);
		}

		that.inflate_trees_bits = function(c, // 19 code lengths
		bb, // bits tree desired/actual depth
		tb, // bits tree result
		hp, // space for trees
		z // for messages
		) {
			var result;
			initWorkArea(19);
			hn[0] = 0;
			result = huft_build(c, 0, 19, 19, null, null, tb, bb, hp, hn, v);

			if (result == Z_DATA_ERROR) {
				z.msg = "oversubscribed dynamic bit lengths tree";
			} else if (result == Z_BUF_ERROR || bb[0] === 0) {
				z.msg = "incomplete dynamic bit lengths tree";
				result = Z_DATA_ERROR;
			}
			return result;
		};

		that.inflate_trees_dynamic = function(nl, // number of literal/length codes
		nd, // number of distance codes
		c, // that many (total) code lengths
		bl, // literal desired/actual bit depth
		bd, // distance desired/actual bit depth
		tl, // literal/length tree result
		td, // distance tree result
		hp, // space for trees
		z // for messages
		) {
			var result;

			// build literal/length tree
			initWorkArea(288);
			hn[0] = 0;
			result = huft_build(c, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
			if (result != Z_OK || bl[0] === 0) {
				if (result == Z_DATA_ERROR) {
					z.msg = "oversubscribed literal/length tree";
				} else if (result != Z_MEM_ERROR) {
					z.msg = "incomplete literal/length tree";
					result = Z_DATA_ERROR;
				}
				return result;
			}

			// build distance tree
			initWorkArea(288);
			result = huft_build(c, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);

			if (result != Z_OK || (bd[0] === 0 && nl > 257)) {
				if (result == Z_DATA_ERROR) {
					z.msg = "oversubscribed distance tree";
				} else if (result == Z_BUF_ERROR) {
					z.msg = "incomplete distance tree";
					result = Z_DATA_ERROR;
				} else if (result != Z_MEM_ERROR) {
					z.msg = "empty distance tree with lengths";
					result = Z_DATA_ERROR;
				}
				return result;
			}

			return Z_OK;
		};

	}

	InfTree.inflate_trees_fixed = function(bl, // literal desired/actual bit depth
	bd, // distance desired/actual bit depth
	tl,// literal/length tree result
	td// distance tree result
	) {
		bl[0] = fixed_bl;
		bd[0] = fixed_bd;
		tl[0] = fixed_tl;
		td[0] = fixed_td;
		return Z_OK;
	};

	// InfCodes

	// waiting for "i:"=input,
	// "o:"=output,
	// "x:"=nothing
	var START = 0; // x: set up for LEN
	var LEN = 1; // i: get length/literal/eob next
	var LENEXT = 2; // i: getting length extra (have base)
	var DIST = 3; // i: get distance next
	var DISTEXT = 4;// i: getting distance extra
	var COPY = 5; // o: copying bytes in window, waiting
	// for space
	var LIT = 6; // o: got literal, waiting for output
	// space
	var WASH = 7; // o: got eob, possibly still output
	// waiting
	var END = 8; // x: got eob and all data flushed
	var BADCODE = 9;// x: got error

	function InfCodes() {
		var that = this;

		var mode; // current inflate_codes mode

		// mode dependent information
		var len = 0;

		var tree; // pointer into tree
		var tree_index = 0;
		var need = 0; // bits needed

		var lit = 0;

		// if EXT or COPY, where and how much
		var get = 0; // bits to get for extra
		var dist = 0; // distance back to copy from

		var lbits = 0; // ltree bits decoded per branch
		var dbits = 0; // dtree bits decoder per branch
		var ltree; // literal/length/eob tree
		var ltree_index = 0; // literal/length/eob tree
		var dtree; // distance tree
		var dtree_index = 0; // distance tree

		// Called with number of bytes left to write in window at least 258
		// (the maximum string length) and number of input bytes available
		// at least ten. The ten bytes are six bytes for the longest length/
		// distance pair plus four bytes for overloading the bit buffer.

		function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
			var t; // temporary pointer
			var tp; // temporary pointer
			var tp_index; // temporary pointer
			var e; // extra bits or operation
			var b; // bit buffer
			var k; // bits in bit buffer
			var p; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer
			var ml; // mask for literal/length tree
			var md; // mask for distance tree
			var c; // bytes to copy
			var d; // distance back to copy from
			var r; // copy source pointer

			var tp_index_t_3; // (tp_index+t)*3

			// load input, output, bit values
			p = z.next_in_index;
			n = z.avail_in;
			b = s.bitb;
			k = s.bitk;
			q = s.write;
			m = q < s.read ? s.read - q - 1 : s.end - q;

			// initialize masks
			ml = inflate_mask[bl];
			md = inflate_mask[bd];

			// do until not enough input or output space for fast loop
			do { // assume called with m >= 258 && n >= 10
				// get literal/length code
				while (k < (20)) { // max bits for literal/length code
					n--;
					b |= (z.read_byte(p++) & 0xff) << k;
					k += 8;
				}

				t = b & ml;
				tp = tl;
				tp_index = tl_index;
				tp_index_t_3 = (tp_index + t) * 3;
				if ((e = tp[tp_index_t_3]) === 0) {
					b >>= (tp[tp_index_t_3 + 1]);
					k -= (tp[tp_index_t_3 + 1]);

					s.window[q++] = /* (byte) */tp[tp_index_t_3 + 2];
					m--;
					continue;
				}
				do {

					b >>= (tp[tp_index_t_3 + 1]);
					k -= (tp[tp_index_t_3 + 1]);

					if ((e & 16) !== 0) {
						e &= 15;
						c = tp[tp_index_t_3 + 2] + (/* (int) */b & inflate_mask[e]);

						b >>= e;
						k -= e;

						// decode distance base of block to copy
						while (k < (15)) { // max bits for distance code
							n--;
							b |= (z.read_byte(p++) & 0xff) << k;
							k += 8;
						}

						t = b & md;
						tp = td;
						tp_index = td_index;
						tp_index_t_3 = (tp_index + t) * 3;
						e = tp[tp_index_t_3];

						do {

							b >>= (tp[tp_index_t_3 + 1]);
							k -= (tp[tp_index_t_3 + 1]);

							if ((e & 16) !== 0) {
								// get extra bits to add to distance base
								e &= 15;
								while (k < (e)) { // get extra bits (up to 13)
									n--;
									b |= (z.read_byte(p++) & 0xff) << k;
									k += 8;
								}

								d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]);

								b >>= (e);
								k -= (e);

								// do the copy
								m -= c;
								if (q >= d) { // offset before dest
									// just copy
									r = q - d;
									if (q - r > 0 && 2 > (q - r)) {
										s.window[q++] = s.window[r++]; // minimum
										// count is
										// three,
										s.window[q++] = s.window[r++]; // so unroll
										// loop a
										// little
										c -= 2;
									} else {
										s.window.set(s.window.subarray(r, r + 2), q);
										q += 2;
										r += 2;
										c -= 2;
									}
								} else { // else offset after destination
									r = q - d;
									do {
										r += s.end; // force pointer in window
									} while (r < 0); // covers invalid distances
									e = s.end - r;
									if (c > e) { // if source crosses,
										c -= e; // wrapped copy
										if (q - r > 0 && e > (q - r)) {
											do {
												s.window[q++] = s.window[r++];
											} while (--e !== 0);
										} else {
											s.window.set(s.window.subarray(r, r + e), q);
											q += e;
											r += e;
											e = 0;
										}
										r = 0; // copy rest from start of window
									}

								}

								// copy all or what's left
								if (q - r > 0 && c > (q - r)) {
									do {
										s.window[q++] = s.window[r++];
									} while (--c !== 0);
								} else {
									s.window.set(s.window.subarray(r, r + c), q);
									q += c;
									r += c;
									c = 0;
								}
								break;
							} else if ((e & 64) === 0) {
								t += tp[tp_index_t_3 + 2];
								t += (b & inflate_mask[e]);
								tp_index_t_3 = (tp_index + t) * 3;
								e = tp[tp_index_t_3];
							} else {
								z.msg = "invalid distance code";

								c = z.avail_in - n;
								c = (k >> 3) < c ? k >> 3 : c;
								n += c;
								p -= c;
								k -= c << 3;

								s.bitb = b;
								s.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								s.write = q;

								return Z_DATA_ERROR;
							}
						} while (true);
						break;
					}

					if ((e & 64) === 0) {
						t += tp[tp_index_t_3 + 2];
						t += (b & inflate_mask[e]);
						tp_index_t_3 = (tp_index + t) * 3;
						if ((e = tp[tp_index_t_3]) === 0) {

							b >>= (tp[tp_index_t_3 + 1]);
							k -= (tp[tp_index_t_3 + 1]);

							s.window[q++] = /* (byte) */tp[tp_index_t_3 + 2];
							m--;
							break;
						}
					} else if ((e & 32) !== 0) {

						c = z.avail_in - n;
						c = (k >> 3) < c ? k >> 3 : c;
						n += c;
						p -= c;
						k -= c << 3;

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;

						return Z_STREAM_END;
					} else {
						z.msg = "invalid literal/length code";

						c = z.avail_in - n;
						c = (k >> 3) < c ? k >> 3 : c;
						n += c;
						p -= c;
						k -= c << 3;

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;

						return Z_DATA_ERROR;
					}
				} while (true);
			} while (m >= 258 && n >= 10);

			// not enough input or output--restore pointers and return
			c = z.avail_in - n;
			c = (k >> 3) < c ? k >> 3 : c;
			n += c;
			p -= c;
			k -= c << 3;

			s.bitb = b;
			s.bitk = k;
			z.avail_in = n;
			z.total_in += p - z.next_in_index;
			z.next_in_index = p;
			s.write = q;

			return Z_OK;
		}

		that.init = function(bl, bd, tl, tl_index, td, td_index) {
			mode = START;
			lbits = /* (byte) */bl;
			dbits = /* (byte) */bd;
			ltree = tl;
			ltree_index = tl_index;
			dtree = td;
			dtree_index = td_index;
			tree = null;
		};

		that.proc = function(s, z, r) {
			var j; // temporary storage
			var tindex; // temporary pointer
			var e; // extra bits or operation
			var b = 0; // bit buffer
			var k = 0; // bits in bit buffer
			var p = 0; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer
			var f; // pointer to copy strings from

			// copy input/output information to locals (UPDATE macro restores)
			p = z.next_in_index;
			n = z.avail_in;
			b = s.bitb;
			k = s.bitk;
			q = s.write;
			m = q < s.read ? s.read - q - 1 : s.end - q;

			// process input and output based on current state
			while (true) {
				switch (mode) {
				// waiting for "i:"=input, "o:"=output, "x:"=nothing
				case START: // x: set up for LEN
					if (m >= 258 && n >= 10) {

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;
						r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);

						p = z.next_in_index;
						n = z.avail_in;
						b = s.bitb;
						k = s.bitk;
						q = s.write;
						m = q < s.read ? s.read - q - 1 : s.end - q;

						if (r != Z_OK) {
							mode = r == Z_STREAM_END ? WASH : BADCODE;
							break;
						}
					}
					need = lbits;
					tree = ltree;
					tree_index = ltree_index;

					mode = LEN;
				case LEN: // i: get length/literal/eob next
					j = need;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					tindex = (tree_index + (b & inflate_mask[j])) * 3;

					b >>>= (tree[tindex + 1]);
					k -= (tree[tindex + 1]);

					e = tree[tindex];

					if (e === 0) { // literal
						lit = tree[tindex + 2];
						mode = LIT;
						break;
					}
					if ((e & 16) !== 0) { // length
						get = e & 15;
						len = tree[tindex + 2];
						mode = LENEXT;
						break;
					}
					if ((e & 64) === 0) { // next table
						need = e;
						tree_index = tindex / 3 + tree[tindex + 2];
						break;
					}
					if ((e & 32) !== 0) { // end of block
						mode = WASH;
						break;
					}
					mode = BADCODE; // invalid code
					z.msg = "invalid literal/length code";
					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case LENEXT: // i: getting length extra (have base)
					j = get;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					len += (b & inflate_mask[j]);

					b >>= j;
					k -= j;

					need = dbits;
					tree = dtree;
					tree_index = dtree_index;
					mode = DIST;
				case DIST: // i: get distance next
					j = need;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					tindex = (tree_index + (b & inflate_mask[j])) * 3;

					b >>= tree[tindex + 1];
					k -= tree[tindex + 1];

					e = (tree[tindex]);
					if ((e & 16) !== 0) { // distance
						get = e & 15;
						dist = tree[tindex + 2];
						mode = DISTEXT;
						break;
					}
					if ((e & 64) === 0) { // next table
						need = e;
						tree_index = tindex / 3 + tree[tindex + 2];
						break;
					}
					mode = BADCODE; // invalid code
					z.msg = "invalid distance code";
					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case DISTEXT: // i: getting distance extra
					j = get;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					dist += (b & inflate_mask[j]);

					b >>= j;
					k -= j;

					mode = COPY;
				case COPY: // o: copying bytes in window, waiting for space
					f = q - dist;
					while (f < 0) { // modulo window size-"while" instead
						f += s.end; // of "if" handles invalid distances
					}
					while (len !== 0) {

						if (m === 0) {
							if (q == s.end && s.read !== 0) {
								q = 0;
								m = q < s.read ? s.read - q - 1 : s.end - q;
							}
							if (m === 0) {
								s.write = q;
								r = s.inflate_flush(z, r);
								q = s.write;
								m = q < s.read ? s.read - q - 1 : s.end - q;

								if (q == s.end && s.read !== 0) {
									q = 0;
									m = q < s.read ? s.read - q - 1 : s.end - q;
								}

								if (m === 0) {
									s.bitb = b;
									s.bitk = k;
									z.avail_in = n;
									z.total_in += p - z.next_in_index;
									z.next_in_index = p;
									s.write = q;
									return s.inflate_flush(z, r);
								}
							}
						}

						s.window[q++] = s.window[f++];
						m--;

						if (f == s.end)
							f = 0;
						len--;
					}
					mode = START;
					break;
				case LIT: // o: got literal, waiting for output space
					if (m === 0) {
						if (q == s.end && s.read !== 0) {
							q = 0;
							m = q < s.read ? s.read - q - 1 : s.end - q;
						}
						if (m === 0) {
							s.write = q;
							r = s.inflate_flush(z, r);
							q = s.write;
							m = q < s.read ? s.read - q - 1 : s.end - q;

							if (q == s.end && s.read !== 0) {
								q = 0;
								m = q < s.read ? s.read - q - 1 : s.end - q;
							}
							if (m === 0) {
								s.bitb = b;
								s.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								s.write = q;
								return s.inflate_flush(z, r);
							}
						}
					}
					r = Z_OK;

					s.window[q++] = /* (byte) */lit;
					m--;

					mode = START;
					break;
				case WASH: // o: got eob, possibly more output
					if (k > 7) { // return unused byte, if any
						k -= 8;
						n++;
						p--; // can always return one
					}

					s.write = q;
					r = s.inflate_flush(z, r);
					q = s.write;
					m = q < s.read ? s.read - q - 1 : s.end - q;

					if (s.read != s.write) {
						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;
						return s.inflate_flush(z, r);
					}
					mode = END;
				case END:
					r = Z_STREAM_END;
					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case BADCODE: // x: got error

					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				default:
					r = Z_STREAM_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);
				}
			}
		};

		that.free = function() {
			// ZFREE(z, c);
		};

	}

	// InfBlocks

	// Table for deflate from PKZIP's appnote.txt.
	var border = [ // Order of the bit length code lengths
	16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

	var TYPE = 0; // get type bits (3, including end bit)
	var LENS = 1; // get lengths for stored
	var STORED = 2;// processing stored block
	var TABLE = 3; // get table lengths
	var BTREE = 4; // get bit lengths tree for a dynamic
	// block
	var DTREE = 5; // get length, distance trees for a
	// dynamic block
	var CODES = 6; // processing fixed or dynamic block
	var DRY = 7; // output remaining window bytes
	var DONELOCKS = 8; // finished last block, done
	var BADBLOCKS = 9; // ot a data error--stuck here

	function InfBlocks(z, w) {
		var that = this;

		var mode = TYPE; // current inflate_block mode

		var left = 0; // if STORED, bytes left to copy

		var table = 0; // table lengths (14 bits)
		var index = 0; // index into blens (or border)
		var blens; // bit lengths of codes
		var bb = [ 0 ]; // bit length tree depth
		var tb = [ 0 ]; // bit length decoding tree

		var codes = new InfCodes(); // if CODES, current state

		var last = 0; // true if this block is the last block

		var hufts = new Int32Array(MANY * 3); // single malloc for tree space
		var check = 0; // check on output
		var inftree = new InfTree();

		that.bitk = 0; // bits in bit buffer
		that.bitb = 0; // bit buffer
		that.window = new Uint8Array(w); // sliding window
		that.end = w; // one byte after sliding window
		that.read = 0; // window read pointer
		that.write = 0; // window write pointer

		that.reset = function(z, c) {
			if (c)
				c[0] = check;
			// if (mode == BTREE || mode == DTREE) {
			// }
			if (mode == CODES) {
				codes.free(z);
			}
			mode = TYPE;
			that.bitk = 0;
			that.bitb = 0;
			that.read = that.write = 0;
		};

		that.reset(z, null);

		// copy as much as possible from the sliding window to the output area
		that.inflate_flush = function(z, r) {
			var n;
			var p;
			var q;

			// local copies of source and destination pointers
			p = z.next_out_index;
			q = that.read;

			// compute number of bytes to copy as far as end of window
			n = /* (int) */((q <= that.write ? that.write : that.end) - q);
			if (n > z.avail_out)
				n = z.avail_out;
			if (n !== 0 && r == Z_BUF_ERROR)
				r = Z_OK;

			// update counters
			z.avail_out -= n;
			z.total_out += n;

			// copy as far as end of window
			z.next_out.set(that.window.subarray(q, q + n), p);
			p += n;
			q += n;

			// see if more to copy at beginning of window
			if (q == that.end) {
				// wrap pointers
				q = 0;
				if (that.write == that.end)
					that.write = 0;

				// compute bytes to copy
				n = that.write - q;
				if (n > z.avail_out)
					n = z.avail_out;
				if (n !== 0 && r == Z_BUF_ERROR)
					r = Z_OK;

				// update counters
				z.avail_out -= n;
				z.total_out += n;

				// copy
				z.next_out.set(that.window.subarray(q, q + n), p);
				p += n;
				q += n;
			}

			// update pointers
			z.next_out_index = p;
			that.read = q;

			// done
			return r;
		};

		that.proc = function(z, r) {
			var t; // temporary storage
			var b; // bit buffer
			var k; // bits in bit buffer
			var p; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer

			var i;

			// copy input/output information to locals (UPDATE macro restores)
			// {
			p = z.next_in_index;
			n = z.avail_in;
			b = that.bitb;
			k = that.bitk;
			// }
			// {
			q = that.write;
			m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
			// }

			// process input based on current state
			// DEBUG dtree
			while (true) {
				switch (mode) {
				case TYPE:

					while (k < (3)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}
					t = /* (int) */(b & 7);
					last = t & 1;

					switch (t >>> 1) {
					case 0: // stored
						// {
						b >>>= (3);
						k -= (3);
						// }
						t = k & 7; // go to byte boundary

						// {
						b >>>= (t);
						k -= (t);
						// }
						mode = LENS; // get length of stored block
						break;
					case 1: // fixed
						// {
						var bl = []; // new Array(1);
						var bd = []; // new Array(1);
						var tl = [ [] ]; // new Array(1);
						var td = [ [] ]; // new Array(1);

						InfTree.inflate_trees_fixed(bl, bd, tl, td);
						codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
						// }

						// {
						b >>>= (3);
						k -= (3);
						// }

						mode = CODES;
						break;
					case 2: // dynamic

						// {
						b >>>= (3);
						k -= (3);
						// }

						mode = TABLE;
						break;
					case 3: // illegal

						// {
						b >>>= (3);
						k -= (3);
						// }
						mode = BADBLOCKS;
						z.msg = "invalid block type";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					break;
				case LENS:

					while (k < (32)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					if ((((~b) >>> 16) & 0xffff) != (b & 0xffff)) {
						mode = BADBLOCKS;
						z.msg = "invalid stored block lengths";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					left = (b & 0xffff);
					b = k = 0; // dump bits
					mode = left !== 0 ? STORED : (last !== 0 ? DRY : TYPE);
					break;
				case STORED:
					if (n === 0) {
						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}

					if (m === 0) {
						if (q == that.end && that.read !== 0) {
							q = 0;
							m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
						}
						if (m === 0) {
							that.write = q;
							r = that.inflate_flush(z, r);
							q = that.write;
							m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
							if (q == that.end && that.read !== 0) {
								q = 0;
								m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
							}
							if (m === 0) {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
						}
					}
					r = Z_OK;

					t = left;
					if (t > n)
						t = n;
					if (t > m)
						t = m;
					that.window.set(z.read_buf(p, t), q);
					p += t;
					n -= t;
					q += t;
					m -= t;
					if ((left -= t) !== 0)
						break;
					mode = last !== 0 ? DRY : TYPE;
					break;
				case TABLE:

					while (k < (14)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}

						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					table = t = (b & 0x3fff);
					if ((t & 0x1f) > 29 || ((t >> 5) & 0x1f) > 29) {
						mode = BADBLOCKS;
						z.msg = "too many length or distance symbols";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					t = 258 + (t & 0x1f) + ((t >> 5) & 0x1f);
					if (!blens || blens.length < t) {
						blens = []; // new Array(t);
					} else {
						for (i = 0; i < t; i++) {
							blens[i] = 0;
						}
					}

					// {
					b >>>= (14);
					k -= (14);
					// }

					index = 0;
					mode = BTREE;
				case BTREE:
					while (index < 4 + (table >>> 10)) {
						while (k < (3)) {
							if (n !== 0) {
								r = Z_OK;
							} else {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
							n--;
							b |= (z.read_byte(p++) & 0xff) << k;
							k += 8;
						}

						blens[border[index++]] = b & 7;

						// {
						b >>>= (3);
						k -= (3);
						// }
					}

					while (index < 19) {
						blens[border[index++]] = 0;
					}

					bb[0] = 7;
					t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z);
					if (t != Z_OK) {
						r = t;
						if (r == Z_DATA_ERROR) {
							blens = null;
							mode = BADBLOCKS;
						}

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}

					index = 0;
					mode = DTREE;
				case DTREE:
					while (true) {
						t = table;
						if (!(index < 258 + (t & 0x1f) + ((t >> 5) & 0x1f))) {
							break;
						}

						var j, c;

						t = bb[0];

						while (k < (t)) {
							if (n !== 0) {
								r = Z_OK;
							} else {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
							n--;
							b |= (z.read_byte(p++) & 0xff) << k;
							k += 8;
						}

						// if (tb[0] == -1) {
						// System.err.println("null...");
						// }

						t = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 1];
						c = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 2];

						if (c < 16) {
							b >>>= (t);
							k -= (t);
							blens[index++] = c;
						} else { // c == 16..18
							i = c == 18 ? 7 : c - 14;
							j = c == 18 ? 11 : 3;

							while (k < (t + i)) {
								if (n !== 0) {
									r = Z_OK;
								} else {
									that.bitb = b;
									that.bitk = k;
									z.avail_in = n;
									z.total_in += p - z.next_in_index;
									z.next_in_index = p;
									that.write = q;
									return that.inflate_flush(z, r);
								}
								n--;
								b |= (z.read_byte(p++) & 0xff) << k;
								k += 8;
							}

							b >>>= (t);
							k -= (t);

							j += (b & inflate_mask[i]);

							b >>>= (i);
							k -= (i);

							i = index;
							t = table;
							if (i + j > 258 + (t & 0x1f) + ((t >> 5) & 0x1f) || (c == 16 && i < 1)) {
								blens = null;
								mode = BADBLOCKS;
								z.msg = "invalid bit length repeat";
								r = Z_DATA_ERROR;

								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}

							c = c == 16 ? blens[i - 1] : 0;
							do {
								blens[i++] = c;
							} while (--j !== 0);
							index = i;
						}
					}

					tb[0] = -1;
					// {
					var bl_ = []; // new Array(1);
					var bd_ = []; // new Array(1);
					var tl_ = []; // new Array(1);
					var td_ = []; // new Array(1);
					bl_[0] = 9; // must be <= 9 for lookahead assumptions
					bd_[0] = 6; // must be <= 9 for lookahead assumptions

					t = table;
					t = inftree.inflate_trees_dynamic(257 + (t & 0x1f), 1 + ((t >> 5) & 0x1f), blens, bl_, bd_, tl_, td_, hufts, z);

					if (t != Z_OK) {
						if (t == Z_DATA_ERROR) {
							blens = null;
							mode = BADBLOCKS;
						}
						r = t;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
					// }
					mode = CODES;
				case CODES:
					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;

					if ((r = codes.proc(that, z, r)) != Z_STREAM_END) {
						return that.inflate_flush(z, r);
					}
					r = Z_OK;
					codes.free(z);

					p = z.next_in_index;
					n = z.avail_in;
					b = that.bitb;
					k = that.bitk;
					q = that.write;
					m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);

					if (last === 0) {
						mode = TYPE;
						break;
					}
					mode = DRY;
				case DRY:
					that.write = q;
					r = that.inflate_flush(z, r);
					q = that.write;
					m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
					if (that.read != that.write) {
						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					mode = DONELOCKS;
				case DONELOCKS:
					r = Z_STREAM_END;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);
				case BADBLOCKS:
					r = Z_DATA_ERROR;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);

				default:
					r = Z_STREAM_ERROR;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);
				}
			}
		};

		that.free = function(z) {
			that.reset(z, null);
			that.window = null;
			hufts = null;
			// ZFREE(z, s);
		};

		that.set_dictionary = function(d, start, n) {
			that.window.set(d.subarray(start, start + n), 0);
			that.read = that.write = n;
		};

		// Returns true if inflate is currently at the end of a block generated
		// by Z_SYNC_FLUSH or Z_FULL_FLUSH.
		that.sync_point = function() {
			return mode == LENS ? 1 : 0;
		};

	}

	// Inflate

	// preset dictionary flag in zlib header
	var PRESET_DICT = 0x20;

	var Z_DEFLATED = 8;

	var METHOD = 0; // waiting for method byte
	var FLAG = 1; // waiting for flag byte
	var DICT4 = 2; // four dictionary check bytes to go
	var DICT3 = 3; // three dictionary check bytes to go
	var DICT2 = 4; // two dictionary check bytes to go
	var DICT1 = 5; // one dictionary check byte to go
	var DICT0 = 6; // waiting for inflateSetDictionary
	var BLOCKS = 7; // decompressing blocks
	var DONE = 12; // finished check, done
	var BAD = 13; // got an error--stay here

	var mark = [ 0, 0, 0xff, 0xff ];

	function Inflate() {
		var that = this;

		that.mode = 0; // current inflate mode

		// mode dependent information
		that.method = 0; // if FLAGS, method byte

		// if CHECK, check values to compare
		that.was = [ 0 ]; // new Array(1); // computed check value
		that.need = 0; // stream check value

		// if BAD, inflateSync's marker bytes count
		that.marker = 0;

		// mode independent information
		that.wbits = 0; // log2(window size) (8..15, defaults to 15)

		// this.blocks; // current inflate_blocks state

		function inflateReset(z) {
			if (!z || !z.istate)
				return Z_STREAM_ERROR;

			z.total_in = z.total_out = 0;
			z.msg = null;
			z.istate.mode = BLOCKS;
			z.istate.blocks.reset(z, null);
			return Z_OK;
		}

		that.inflateEnd = function(z) {
			if (that.blocks)
				that.blocks.free(z);
			that.blocks = null;
			// ZFREE(z, z->state);
			return Z_OK;
		};

		that.inflateInit = function(z, w) {
			z.msg = null;
			that.blocks = null;

			// set window size
			if (w < 8 || w > 15) {
				that.inflateEnd(z);
				return Z_STREAM_ERROR;
			}
			that.wbits = w;

			z.istate.blocks = new InfBlocks(z, 1 << w);

			// reset state
			inflateReset(z);
			return Z_OK;
		};

		that.inflate = function(z, f) {
			var r;
			var b;

			if (!z || !z.istate || !z.next_in)
				return Z_STREAM_ERROR;
			f = f == Z_FINISH ? Z_BUF_ERROR : Z_OK;
			r = Z_BUF_ERROR;
			while (true) {
				// System.out.println("mode: "+z.istate.mode);
				switch (z.istate.mode) {
				case METHOD:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					if (((z.istate.method = z.read_byte(z.next_in_index++)) & 0xf) != Z_DEFLATED) {
						z.istate.mode = BAD;
						z.msg = "unknown compression method";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}
					if ((z.istate.method >> 4) + 8 > z.istate.wbits) {
						z.istate.mode = BAD;
						z.msg = "invalid window size";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}
					z.istate.mode = FLAG;
				case FLAG:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					b = (z.read_byte(z.next_in_index++)) & 0xff;

					if ((((z.istate.method << 8) + b) % 31) !== 0) {
						z.istate.mode = BAD;
						z.msg = "incorrect header check";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}

					if ((b & PRESET_DICT) === 0) {
						z.istate.mode = BLOCKS;
						break;
					}
					z.istate.mode = DICT4;
				case DICT4:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need = ((z.read_byte(z.next_in_index++) & 0xff) << 24) & 0xff000000;
					z.istate.mode = DICT3;
				case DICT3:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += ((z.read_byte(z.next_in_index++) & 0xff) << 16) & 0xff0000;
					z.istate.mode = DICT2;
				case DICT2:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += ((z.read_byte(z.next_in_index++) & 0xff) << 8) & 0xff00;
					z.istate.mode = DICT1;
				case DICT1:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += (z.read_byte(z.next_in_index++) & 0xff);
					z.istate.mode = DICT0;
					return Z_NEED_DICT;
				case DICT0:
					z.istate.mode = BAD;
					z.msg = "need dictionary";
					z.istate.marker = 0; // can try inflateSync
					return Z_STREAM_ERROR;
				case BLOCKS:

					r = z.istate.blocks.proc(z, r);
					if (r == Z_DATA_ERROR) {
						z.istate.mode = BAD;
						z.istate.marker = 0; // can try inflateSync
						break;
					}
					if (r == Z_OK) {
						r = f;
					}
					if (r != Z_STREAM_END) {
						return r;
					}
					r = f;
					z.istate.blocks.reset(z, z.istate.was);
					z.istate.mode = DONE;
				case DONE:
					return Z_STREAM_END;
				case BAD:
					return Z_DATA_ERROR;
				default:
					return Z_STREAM_ERROR;
				}
			}
		};

		that.inflateSetDictionary = function(z, dictionary, dictLength) {
			var index = 0;
			var length = dictLength;
			if (!z || !z.istate || z.istate.mode != DICT0)
				return Z_STREAM_ERROR;

			if (length >= (1 << z.istate.wbits)) {
				length = (1 << z.istate.wbits) - 1;
				index = dictLength - length;
			}
			z.istate.blocks.set_dictionary(dictionary, index, length);
			z.istate.mode = BLOCKS;
			return Z_OK;
		};

		that.inflateSync = function(z) {
			var n; // number of bytes to look at
			var p; // pointer to bytes
			var m; // number of marker bytes found in a row
			var r, w; // temporaries to save total_in and total_out

			// set up
			if (!z || !z.istate)
				return Z_STREAM_ERROR;
			if (z.istate.mode != BAD) {
				z.istate.mode = BAD;
				z.istate.marker = 0;
			}
			if ((n = z.avail_in) === 0)
				return Z_BUF_ERROR;
			p = z.next_in_index;
			m = z.istate.marker;

			// search
			while (n !== 0 && m < 4) {
				if (z.read_byte(p) == mark[m]) {
					m++;
				} else if (z.read_byte(p) !== 0) {
					m = 0;
				} else {
					m = 4 - m;
				}
				p++;
				n--;
			}

			// restore
			z.total_in += p - z.next_in_index;
			z.next_in_index = p;
			z.avail_in = n;
			z.istate.marker = m;

			// return no joy or set up to restart on a new block
			if (m != 4) {
				return Z_DATA_ERROR;
			}
			r = z.total_in;
			w = z.total_out;
			inflateReset(z);
			z.total_in = r;
			z.total_out = w;
			z.istate.mode = BLOCKS;
			return Z_OK;
		};

		// Returns true if inflate is currently at the end of a block generated
		// by Z_SYNC_FLUSH or Z_FULL_FLUSH. This function is used by one PPP
		// implementation to provide an additional safety check. PPP uses
		// Z_SYNC_FLUSH
		// but removes the length bytes of the resulting empty stored block. When
		// decompressing, PPP checks that at the end of input packet, inflate is
		// waiting for these length bytes.
		that.inflateSyncPoint = function(z) {
			if (!z || !z.istate || !z.istate.blocks)
				return Z_STREAM_ERROR;
			return z.istate.blocks.sync_point();
		};
	}

	// ZStream

	function ZStream() {
	}

	ZStream.prototype = {
		inflateInit : function(bits) {
			var that = this;
			that.istate = new Inflate();
			if (!bits)
				bits = MAX_BITS;
			return that.istate.inflateInit(that, bits);
		},

		inflate : function(f) {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflate(that, f);
		},

		inflateEnd : function() {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			var ret = that.istate.inflateEnd(that);
			that.istate = null;
			return ret;
		},

		inflateSync : function() {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflateSync(that);
		},
		inflateSetDictionary : function(dictionary, dictLength) {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflateSetDictionary(that, dictionary, dictLength);
		},
		read_byte : function(start) {
			var that = this;
			return that.next_in.subarray(start, start + 1)[0];
		},
		read_buf : function(start, size) {
			var that = this;
			return that.next_in.subarray(start, start + size);
		}
	};

	// Inflater

	function Inflater() {
		var that = this;
		var z = new ZStream();
		var bufsize = 512;
		var flush = Z_NO_FLUSH;
		var buf = new Uint8Array(bufsize);
		var nomoreinput = false;

		z.inflateInit();
		z.next_out = buf;

		that.append = function(data, onprogress) {
			var err, buffers = [], lastIndex = 0, bufferIndex = 0, bufferSize = 0, array;
			if (data.length === 0)
				return;
			z.next_in_index = 0;
			z.next_in = data;
			z.avail_in = data.length;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				if ((z.avail_in === 0) && (!nomoreinput)) { // if buffer is empty and more input is available, refill it
					z.next_in_index = 0;
					nomoreinput = true;
				}
				err = z.inflate(flush);
				if (nomoreinput && (err == Z_BUF_ERROR))
					return -1;
				if (err != Z_OK && err != Z_STREAM_END)
					throw "inflating: " + z.msg;
				if ((nomoreinput || err == Z_STREAM_END) && (z.avail_in == data.length))
					return -1;
				if (z.next_out_index)
					if (z.next_out_index == bufsize)
						buffers.push(new Uint8Array(buf));
					else
						buffers.push(new Uint8Array(buf.subarray(0, z.next_out_index)));
				bufferSize += z.next_out_index;
				if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
					onprogress(z.next_in_index);
					lastIndex = z.next_in_index;
				}
			} while (z.avail_in > 0 || z.avail_out === 0);
			array = new Uint8Array(bufferSize);
			buffers.forEach(function(chunk) {
				array.set(chunk, bufferIndex);
				bufferIndex += chunk.length;
			});
			return array;
		};
		that.flush = function() {
			z.inflateEnd();
		};
	}

	var inflater;

	if (obj.zip)
		obj.zip.Inflater = Inflater;
	else {
		inflater = new Inflater();
		obj.addEventListener("message", function(event) {
			var message = event.data;

			if (message.append)
				obj.postMessage({
					onappend : true,
					data : inflater.append(message.data, function(current) {
						obj.postMessage({
							progress : true,
							current : current
						});
					})
				});
			if (message.flush) {
				inflater.flush();
				obj.postMessage({
					onflush : true
				});
			}
		}, false);
	}

})(self);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZjc1OWVhNzRiYjUxNzg4MmZiYTgud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL1RoaXJkUGFydHkvV29ya2Vycy9pbmZsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1uY242bmxnMmYxMXRsOGZrYmZmanN2MnQ5IS4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1yYThoMDcyM3ZhMmM0bjY1M3Z6enVheXZpIS4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzL2J1aWxkcHJvY2Vzcy9yZW1vdmVDZXNpdW1EZWJ1Z1ByYWdtYXMuanMhLi9ub2RlX21vZHVsZXMvdGVycmlhanMtY2VzaXVtL1NvdXJjZS9UaGlyZFBhcnR5L1dvcmtlcnMvaW5mbGF0ZS5qc1wiKTtcbiIsIi8qXG4gQ29weXJpZ2h0IChjKSAyMDEzIEdpbGRhcyBMb3JtZWF1LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IFxuIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiBcbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuIDMuIFRoZSBuYW1lcyBvZiB0aGUgYXV0aG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG5cbiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIGBgQVMgSVMnJyBBTkQgQU5ZIEVYUFJFU1NFRCBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsXG4gSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBKQ1JBRlQsXG4gSU5DLiBPUiBBTlkgQ09OVFJJQlVUT1JTIFRPIFRISVMgU09GVFdBUkUgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCxcbiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsXG4gT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLypcbiAqIFRoaXMgcHJvZ3JhbSBpcyBiYXNlZCBvbiBKWmxpYiAxLjAuMiB5bW5rLCBKQ3JhZnQsSW5jLlxuICogSlpsaWIgaXMgYmFzZWQgb24gemxpYi0xLjEuMywgc28gYWxsIGNyZWRpdCBzaG91bGQgZ28gYXV0aG9yc1xuICogSmVhbi1sb3VwIEdhaWxseShqbG91cEBnemlwLm9yZykgYW5kIE1hcmsgQWRsZXIobWFkbGVyQGFsdW1uaS5jYWx0ZWNoLmVkdSlcbiAqIGFuZCBjb250cmlidXRvcnMgb2YgemxpYi5cbiAqL1xuXG4oZnVuY3Rpb24ob2JqKSB7XG5cblx0Ly8gR2xvYmFsXG5cdHZhciBNQVhfQklUUyA9IDE1O1xuXG5cdHZhciBaX09LID0gMDtcblx0dmFyIFpfU1RSRUFNX0VORCA9IDE7XG5cdHZhciBaX05FRURfRElDVCA9IDI7XG5cdHZhciBaX1NUUkVBTV9FUlJPUiA9IC0yO1xuXHR2YXIgWl9EQVRBX0VSUk9SID0gLTM7XG5cdHZhciBaX01FTV9FUlJPUiA9IC00O1xuXHR2YXIgWl9CVUZfRVJST1IgPSAtNTtcblxuXHR2YXIgaW5mbGF0ZV9tYXNrID0gWyAweDAwMDAwMDAwLCAweDAwMDAwMDAxLCAweDAwMDAwMDAzLCAweDAwMDAwMDA3LCAweDAwMDAwMDBmLCAweDAwMDAwMDFmLCAweDAwMDAwMDNmLCAweDAwMDAwMDdmLCAweDAwMDAwMGZmLCAweDAwMDAwMWZmLCAweDAwMDAwM2ZmLFxuXHRcdFx0MHgwMDAwMDdmZiwgMHgwMDAwMGZmZiwgMHgwMDAwMWZmZiwgMHgwMDAwM2ZmZiwgMHgwMDAwN2ZmZiwgMHgwMDAwZmZmZiBdO1xuXG5cdHZhciBNQU5ZID0gMTQ0MDtcblxuXHQvLyBKWmxpYiB2ZXJzaW9uIDogXCIxLjAuMlwiXG5cdHZhciBaX05PX0ZMVVNIID0gMDtcblx0dmFyIFpfRklOSVNIID0gNDtcblxuXHQvLyBJbmZUcmVlXG5cdHZhciBmaXhlZF9ibCA9IDk7XG5cdHZhciBmaXhlZF9iZCA9IDU7XG5cblx0dmFyIGZpeGVkX3RsID0gWyA5NiwgNywgMjU2LCAwLCA4LCA4MCwgMCwgOCwgMTYsIDg0LCA4LCAxMTUsIDgyLCA3LCAzMSwgMCwgOCwgMTEyLCAwLCA4LCA0OCwgMCwgOSwgMTkyLCA4MCwgNywgMTAsIDAsIDgsIDk2LCAwLCA4LCAzMiwgMCwgOSwgMTYwLCAwLCA4LCAwLFxuXHRcdFx0MCwgOCwgMTI4LCAwLCA4LCA2NCwgMCwgOSwgMjI0LCA4MCwgNywgNiwgMCwgOCwgODgsIDAsIDgsIDI0LCAwLCA5LCAxNDQsIDgzLCA3LCA1OSwgMCwgOCwgMTIwLCAwLCA4LCA1NiwgMCwgOSwgMjA4LCA4MSwgNywgMTcsIDAsIDgsIDEwNCwgMCwgOCwgNDAsXG5cdFx0XHQwLCA5LCAxNzYsIDAsIDgsIDgsIDAsIDgsIDEzNiwgMCwgOCwgNzIsIDAsIDksIDI0MCwgODAsIDcsIDQsIDAsIDgsIDg0LCAwLCA4LCAyMCwgODUsIDgsIDIyNywgODMsIDcsIDQzLCAwLCA4LCAxMTYsIDAsIDgsIDUyLCAwLCA5LCAyMDAsIDgxLCA3LCAxMyxcblx0XHRcdDAsIDgsIDEwMCwgMCwgOCwgMzYsIDAsIDksIDE2OCwgMCwgOCwgNCwgMCwgOCwgMTMyLCAwLCA4LCA2OCwgMCwgOSwgMjMyLCA4MCwgNywgOCwgMCwgOCwgOTIsIDAsIDgsIDI4LCAwLCA5LCAxNTIsIDg0LCA3LCA4MywgMCwgOCwgMTI0LCAwLCA4LCA2MCxcblx0XHRcdDAsIDksIDIxNiwgODIsIDcsIDIzLCAwLCA4LCAxMDgsIDAsIDgsIDQ0LCAwLCA5LCAxODQsIDAsIDgsIDEyLCAwLCA4LCAxNDAsIDAsIDgsIDc2LCAwLCA5LCAyNDgsIDgwLCA3LCAzLCAwLCA4LCA4MiwgMCwgOCwgMTgsIDg1LCA4LCAxNjMsIDgzLCA3LFxuXHRcdFx0MzUsIDAsIDgsIDExNCwgMCwgOCwgNTAsIDAsIDksIDE5NiwgODEsIDcsIDExLCAwLCA4LCA5OCwgMCwgOCwgMzQsIDAsIDksIDE2NCwgMCwgOCwgMiwgMCwgOCwgMTMwLCAwLCA4LCA2NiwgMCwgOSwgMjI4LCA4MCwgNywgNywgMCwgOCwgOTAsIDAsIDgsXG5cdFx0XHQyNiwgMCwgOSwgMTQ4LCA4NCwgNywgNjcsIDAsIDgsIDEyMiwgMCwgOCwgNTgsIDAsIDksIDIxMiwgODIsIDcsIDE5LCAwLCA4LCAxMDYsIDAsIDgsIDQyLCAwLCA5LCAxODAsIDAsIDgsIDEwLCAwLCA4LCAxMzgsIDAsIDgsIDc0LCAwLCA5LCAyNDQsIDgwLFxuXHRcdFx0NywgNSwgMCwgOCwgODYsIDAsIDgsIDIyLCAxOTIsIDgsIDAsIDgzLCA3LCA1MSwgMCwgOCwgMTE4LCAwLCA4LCA1NCwgMCwgOSwgMjA0LCA4MSwgNywgMTUsIDAsIDgsIDEwMiwgMCwgOCwgMzgsIDAsIDksIDE3MiwgMCwgOCwgNiwgMCwgOCwgMTM0LCAwLFxuXHRcdFx0OCwgNzAsIDAsIDksIDIzNiwgODAsIDcsIDksIDAsIDgsIDk0LCAwLCA4LCAzMCwgMCwgOSwgMTU2LCA4NCwgNywgOTksIDAsIDgsIDEyNiwgMCwgOCwgNjIsIDAsIDksIDIyMCwgODIsIDcsIDI3LCAwLCA4LCAxMTAsIDAsIDgsIDQ2LCAwLCA5LCAxODgsIDAsXG5cdFx0XHQ4LCAxNCwgMCwgOCwgMTQyLCAwLCA4LCA3OCwgMCwgOSwgMjUyLCA5NiwgNywgMjU2LCAwLCA4LCA4MSwgMCwgOCwgMTcsIDg1LCA4LCAxMzEsIDgyLCA3LCAzMSwgMCwgOCwgMTEzLCAwLCA4LCA0OSwgMCwgOSwgMTk0LCA4MCwgNywgMTAsIDAsIDgsIDk3LFxuXHRcdFx0MCwgOCwgMzMsIDAsIDksIDE2MiwgMCwgOCwgMSwgMCwgOCwgMTI5LCAwLCA4LCA2NSwgMCwgOSwgMjI2LCA4MCwgNywgNiwgMCwgOCwgODksIDAsIDgsIDI1LCAwLCA5LCAxNDYsIDgzLCA3LCA1OSwgMCwgOCwgMTIxLCAwLCA4LCA1NywgMCwgOSwgMjEwLFxuXHRcdFx0ODEsIDcsIDE3LCAwLCA4LCAxMDUsIDAsIDgsIDQxLCAwLCA5LCAxNzgsIDAsIDgsIDksIDAsIDgsIDEzNywgMCwgOCwgNzMsIDAsIDksIDI0MiwgODAsIDcsIDQsIDAsIDgsIDg1LCAwLCA4LCAyMSwgODAsIDgsIDI1OCwgODMsIDcsIDQzLCAwLCA4LCAxMTcsXG5cdFx0XHQwLCA4LCA1MywgMCwgOSwgMjAyLCA4MSwgNywgMTMsIDAsIDgsIDEwMSwgMCwgOCwgMzcsIDAsIDksIDE3MCwgMCwgOCwgNSwgMCwgOCwgMTMzLCAwLCA4LCA2OSwgMCwgOSwgMjM0LCA4MCwgNywgOCwgMCwgOCwgOTMsIDAsIDgsIDI5LCAwLCA5LCAxNTQsXG5cdFx0XHQ4NCwgNywgODMsIDAsIDgsIDEyNSwgMCwgOCwgNjEsIDAsIDksIDIxOCwgODIsIDcsIDIzLCAwLCA4LCAxMDksIDAsIDgsIDQ1LCAwLCA5LCAxODYsIDAsIDgsIDEzLCAwLCA4LCAxNDEsIDAsIDgsIDc3LCAwLCA5LCAyNTAsIDgwLCA3LCAzLCAwLCA4LCA4Myxcblx0XHRcdDAsIDgsIDE5LCA4NSwgOCwgMTk1LCA4MywgNywgMzUsIDAsIDgsIDExNSwgMCwgOCwgNTEsIDAsIDksIDE5OCwgODEsIDcsIDExLCAwLCA4LCA5OSwgMCwgOCwgMzUsIDAsIDksIDE2NiwgMCwgOCwgMywgMCwgOCwgMTMxLCAwLCA4LCA2NywgMCwgOSwgMjMwLFxuXHRcdFx0ODAsIDcsIDcsIDAsIDgsIDkxLCAwLCA4LCAyNywgMCwgOSwgMTUwLCA4NCwgNywgNjcsIDAsIDgsIDEyMywgMCwgOCwgNTksIDAsIDksIDIxNCwgODIsIDcsIDE5LCAwLCA4LCAxMDcsIDAsIDgsIDQzLCAwLCA5LCAxODIsIDAsIDgsIDExLCAwLCA4LCAxMzksXG5cdFx0XHQwLCA4LCA3NSwgMCwgOSwgMjQ2LCA4MCwgNywgNSwgMCwgOCwgODcsIDAsIDgsIDIzLCAxOTIsIDgsIDAsIDgzLCA3LCA1MSwgMCwgOCwgMTE5LCAwLCA4LCA1NSwgMCwgOSwgMjA2LCA4MSwgNywgMTUsIDAsIDgsIDEwMywgMCwgOCwgMzksIDAsIDksIDE3NCxcblx0XHRcdDAsIDgsIDcsIDAsIDgsIDEzNSwgMCwgOCwgNzEsIDAsIDksIDIzOCwgODAsIDcsIDksIDAsIDgsIDk1LCAwLCA4LCAzMSwgMCwgOSwgMTU4LCA4NCwgNywgOTksIDAsIDgsIDEyNywgMCwgOCwgNjMsIDAsIDksIDIyMiwgODIsIDcsIDI3LCAwLCA4LCAxMTEsXG5cdFx0XHQwLCA4LCA0NywgMCwgOSwgMTkwLCAwLCA4LCAxNSwgMCwgOCwgMTQzLCAwLCA4LCA3OSwgMCwgOSwgMjU0LCA5NiwgNywgMjU2LCAwLCA4LCA4MCwgMCwgOCwgMTYsIDg0LCA4LCAxMTUsIDgyLCA3LCAzMSwgMCwgOCwgMTEyLCAwLCA4LCA0OCwgMCwgOSxcblx0XHRcdDE5MywgODAsIDcsIDEwLCAwLCA4LCA5NiwgMCwgOCwgMzIsIDAsIDksIDE2MSwgMCwgOCwgMCwgMCwgOCwgMTI4LCAwLCA4LCA2NCwgMCwgOSwgMjI1LCA4MCwgNywgNiwgMCwgOCwgODgsIDAsIDgsIDI0LCAwLCA5LCAxNDUsIDgzLCA3LCA1OSwgMCwgOCxcblx0XHRcdDEyMCwgMCwgOCwgNTYsIDAsIDksIDIwOSwgODEsIDcsIDE3LCAwLCA4LCAxMDQsIDAsIDgsIDQwLCAwLCA5LCAxNzcsIDAsIDgsIDgsIDAsIDgsIDEzNiwgMCwgOCwgNzIsIDAsIDksIDI0MSwgODAsIDcsIDQsIDAsIDgsIDg0LCAwLCA4LCAyMCwgODUsIDgsXG5cdFx0XHQyMjcsIDgzLCA3LCA0MywgMCwgOCwgMTE2LCAwLCA4LCA1MiwgMCwgOSwgMjAxLCA4MSwgNywgMTMsIDAsIDgsIDEwMCwgMCwgOCwgMzYsIDAsIDksIDE2OSwgMCwgOCwgNCwgMCwgOCwgMTMyLCAwLCA4LCA2OCwgMCwgOSwgMjMzLCA4MCwgNywgOCwgMCwgOCxcblx0XHRcdDkyLCAwLCA4LCAyOCwgMCwgOSwgMTUzLCA4NCwgNywgODMsIDAsIDgsIDEyNCwgMCwgOCwgNjAsIDAsIDksIDIxNywgODIsIDcsIDIzLCAwLCA4LCAxMDgsIDAsIDgsIDQ0LCAwLCA5LCAxODUsIDAsIDgsIDEyLCAwLCA4LCAxNDAsIDAsIDgsIDc2LCAwLCA5LFxuXHRcdFx0MjQ5LCA4MCwgNywgMywgMCwgOCwgODIsIDAsIDgsIDE4LCA4NSwgOCwgMTYzLCA4MywgNywgMzUsIDAsIDgsIDExNCwgMCwgOCwgNTAsIDAsIDksIDE5NywgODEsIDcsIDExLCAwLCA4LCA5OCwgMCwgOCwgMzQsIDAsIDksIDE2NSwgMCwgOCwgMiwgMCwgOCxcblx0XHRcdDEzMCwgMCwgOCwgNjYsIDAsIDksIDIyOSwgODAsIDcsIDcsIDAsIDgsIDkwLCAwLCA4LCAyNiwgMCwgOSwgMTQ5LCA4NCwgNywgNjcsIDAsIDgsIDEyMiwgMCwgOCwgNTgsIDAsIDksIDIxMywgODIsIDcsIDE5LCAwLCA4LCAxMDYsIDAsIDgsIDQyLCAwLCA5LFxuXHRcdFx0MTgxLCAwLCA4LCAxMCwgMCwgOCwgMTM4LCAwLCA4LCA3NCwgMCwgOSwgMjQ1LCA4MCwgNywgNSwgMCwgOCwgODYsIDAsIDgsIDIyLCAxOTIsIDgsIDAsIDgzLCA3LCA1MSwgMCwgOCwgMTE4LCAwLCA4LCA1NCwgMCwgOSwgMjA1LCA4MSwgNywgMTUsIDAsIDgsXG5cdFx0XHQxMDIsIDAsIDgsIDM4LCAwLCA5LCAxNzMsIDAsIDgsIDYsIDAsIDgsIDEzNCwgMCwgOCwgNzAsIDAsIDksIDIzNywgODAsIDcsIDksIDAsIDgsIDk0LCAwLCA4LCAzMCwgMCwgOSwgMTU3LCA4NCwgNywgOTksIDAsIDgsIDEyNiwgMCwgOCwgNjIsIDAsIDksXG5cdFx0XHQyMjEsIDgyLCA3LCAyNywgMCwgOCwgMTEwLCAwLCA4LCA0NiwgMCwgOSwgMTg5LCAwLCA4LCAxNCwgMCwgOCwgMTQyLCAwLCA4LCA3OCwgMCwgOSwgMjUzLCA5NiwgNywgMjU2LCAwLCA4LCA4MSwgMCwgOCwgMTcsIDg1LCA4LCAxMzEsIDgyLCA3LCAzMSwgMCxcblx0XHRcdDgsIDExMywgMCwgOCwgNDksIDAsIDksIDE5NSwgODAsIDcsIDEwLCAwLCA4LCA5NywgMCwgOCwgMzMsIDAsIDksIDE2MywgMCwgOCwgMSwgMCwgOCwgMTI5LCAwLCA4LCA2NSwgMCwgOSwgMjI3LCA4MCwgNywgNiwgMCwgOCwgODksIDAsIDgsIDI1LCAwLCA5LFxuXHRcdFx0MTQ3LCA4MywgNywgNTksIDAsIDgsIDEyMSwgMCwgOCwgNTcsIDAsIDksIDIxMSwgODEsIDcsIDE3LCAwLCA4LCAxMDUsIDAsIDgsIDQxLCAwLCA5LCAxNzksIDAsIDgsIDksIDAsIDgsIDEzNywgMCwgOCwgNzMsIDAsIDksIDI0MywgODAsIDcsIDQsIDAsIDgsXG5cdFx0XHQ4NSwgMCwgOCwgMjEsIDgwLCA4LCAyNTgsIDgzLCA3LCA0MywgMCwgOCwgMTE3LCAwLCA4LCA1MywgMCwgOSwgMjAzLCA4MSwgNywgMTMsIDAsIDgsIDEwMSwgMCwgOCwgMzcsIDAsIDksIDE3MSwgMCwgOCwgNSwgMCwgOCwgMTMzLCAwLCA4LCA2OSwgMCwgOSxcblx0XHRcdDIzNSwgODAsIDcsIDgsIDAsIDgsIDkzLCAwLCA4LCAyOSwgMCwgOSwgMTU1LCA4NCwgNywgODMsIDAsIDgsIDEyNSwgMCwgOCwgNjEsIDAsIDksIDIxOSwgODIsIDcsIDIzLCAwLCA4LCAxMDksIDAsIDgsIDQ1LCAwLCA5LCAxODcsIDAsIDgsIDEzLCAwLCA4LFxuXHRcdFx0MTQxLCAwLCA4LCA3NywgMCwgOSwgMjUxLCA4MCwgNywgMywgMCwgOCwgODMsIDAsIDgsIDE5LCA4NSwgOCwgMTk1LCA4MywgNywgMzUsIDAsIDgsIDExNSwgMCwgOCwgNTEsIDAsIDksIDE5OSwgODEsIDcsIDExLCAwLCA4LCA5OSwgMCwgOCwgMzUsIDAsIDksXG5cdFx0XHQxNjcsIDAsIDgsIDMsIDAsIDgsIDEzMSwgMCwgOCwgNjcsIDAsIDksIDIzMSwgODAsIDcsIDcsIDAsIDgsIDkxLCAwLCA4LCAyNywgMCwgOSwgMTUxLCA4NCwgNywgNjcsIDAsIDgsIDEyMywgMCwgOCwgNTksIDAsIDksIDIxNSwgODIsIDcsIDE5LCAwLCA4LFxuXHRcdFx0MTA3LCAwLCA4LCA0MywgMCwgOSwgMTgzLCAwLCA4LCAxMSwgMCwgOCwgMTM5LCAwLCA4LCA3NSwgMCwgOSwgMjQ3LCA4MCwgNywgNSwgMCwgOCwgODcsIDAsIDgsIDIzLCAxOTIsIDgsIDAsIDgzLCA3LCA1MSwgMCwgOCwgMTE5LCAwLCA4LCA1NSwgMCwgOSxcblx0XHRcdDIwNywgODEsIDcsIDE1LCAwLCA4LCAxMDMsIDAsIDgsIDM5LCAwLCA5LCAxNzUsIDAsIDgsIDcsIDAsIDgsIDEzNSwgMCwgOCwgNzEsIDAsIDksIDIzOSwgODAsIDcsIDksIDAsIDgsIDk1LCAwLCA4LCAzMSwgMCwgOSwgMTU5LCA4NCwgNywgOTksIDAsIDgsXG5cdFx0XHQxMjcsIDAsIDgsIDYzLCAwLCA5LCAyMjMsIDgyLCA3LCAyNywgMCwgOCwgMTExLCAwLCA4LCA0NywgMCwgOSwgMTkxLCAwLCA4LCAxNSwgMCwgOCwgMTQzLCAwLCA4LCA3OSwgMCwgOSwgMjU1IF07XG5cdHZhciBmaXhlZF90ZCA9IFsgODAsIDUsIDEsIDg3LCA1LCAyNTcsIDgzLCA1LCAxNywgOTEsIDUsIDQwOTcsIDgxLCA1LCA1LCA4OSwgNSwgMTAyNSwgODUsIDUsIDY1LCA5MywgNSwgMTYzODUsIDgwLCA1LCAzLCA4OCwgNSwgNTEzLCA4NCwgNSwgMzMsIDkyLCA1LFxuXHRcdFx0ODE5MywgODIsIDUsIDksIDkwLCA1LCAyMDQ5LCA4NiwgNSwgMTI5LCAxOTIsIDUsIDI0NTc3LCA4MCwgNSwgMiwgODcsIDUsIDM4NSwgODMsIDUsIDI1LCA5MSwgNSwgNjE0NSwgODEsIDUsIDcsIDg5LCA1LCAxNTM3LCA4NSwgNSwgOTcsIDkzLCA1LFxuXHRcdFx0MjQ1NzcsIDgwLCA1LCA0LCA4OCwgNSwgNzY5LCA4NCwgNSwgNDksIDkyLCA1LCAxMjI4OSwgODIsIDUsIDEzLCA5MCwgNSwgMzA3MywgODYsIDUsIDE5MywgMTkyLCA1LCAyNDU3NyBdO1xuXG5cdC8vIFRhYmxlcyBmb3IgZGVmbGF0ZSBmcm9tIFBLWklQJ3MgYXBwbm90ZS50eHQuXG5cdHZhciBjcGxlbnMgPSBbIC8vIENvcHkgbGVuZ3RocyBmb3IgbGl0ZXJhbCBjb2RlcyAyNTcuLjI4NVxuXHQzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEzLCAxNSwgMTcsIDE5LCAyMywgMjcsIDMxLCAzNSwgNDMsIDUxLCA1OSwgNjcsIDgzLCA5OSwgMTE1LCAxMzEsIDE2MywgMTk1LCAyMjcsIDI1OCwgMCwgMCBdO1xuXG5cdC8vIHNlZSBub3RlICMxMyBhYm92ZSBhYm91dCAyNThcblx0dmFyIGNwbGV4dCA9IFsgLy8gRXh0cmEgYml0cyBmb3IgbGl0ZXJhbCBjb2RlcyAyNTcuLjI4NVxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAzLCAzLCAzLCAzLCA0LCA0LCA0LCA0LCA1LCA1LCA1LCA1LCAwLCAxMTIsIDExMiAvLyAxMTI9PWludmFsaWRcblx0XTtcblxuXHR2YXIgY3BkaXN0ID0gWyAvLyBDb3B5IG9mZnNldHMgZm9yIGRpc3RhbmNlIGNvZGVzIDAuLjI5XG5cdDEsIDIsIDMsIDQsIDUsIDcsIDksIDEzLCAxNywgMjUsIDMzLCA0OSwgNjUsIDk3LCAxMjksIDE5MywgMjU3LCAzODUsIDUxMywgNzY5LCAxMDI1LCAxNTM3LCAyMDQ5LCAzMDczLCA0MDk3LCA2MTQ1LCA4MTkzLCAxMjI4OSwgMTYzODUsIDI0NTc3IF07XG5cblx0dmFyIGNwZGV4dCA9IFsgLy8gRXh0cmEgYml0cyBmb3IgZGlzdGFuY2UgY29kZXNcblx0MCwgMCwgMCwgMCwgMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyLCAxMiwgMTMsIDEzIF07XG5cblx0Ly8gSWYgQk1BWCBuZWVkcyB0byBiZSBsYXJnZXIgdGhhbiAxNiwgdGhlbiBoIGFuZCB4W10gc2hvdWxkIGJlIHVMb25nLlxuXHR2YXIgQk1BWCA9IDE1OyAvLyBtYXhpbXVtIGJpdCBsZW5ndGggb2YgYW55IGNvZGVcblxuXHRmdW5jdGlvbiBJbmZUcmVlKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHZhciBobjsgLy8gaHVmdHMgdXNlZCBpbiBzcGFjZVxuXHRcdHZhciB2OyAvLyB3b3JrIGFyZWEgZm9yIGh1ZnRfYnVpbGRcblx0XHR2YXIgYzsgLy8gYml0IGxlbmd0aCBjb3VudCB0YWJsZVxuXHRcdHZhciByOyAvLyB0YWJsZSBlbnRyeSBmb3Igc3RydWN0dXJlIGFzc2lnbm1lbnRcblx0XHR2YXIgdTsgLy8gdGFibGUgc3RhY2tcblx0XHR2YXIgeDsgLy8gYml0IG9mZnNldHMsIHRoZW4gY29kZSBzdGFja1xuXG5cdFx0ZnVuY3Rpb24gaHVmdF9idWlsZChiLCAvLyBjb2RlIGxlbmd0aHMgaW4gYml0cyAoYWxsIGFzc3VtZWQgPD1cblx0XHQvLyBCTUFYKVxuXHRcdGJpbmRleCwgbiwgLy8gbnVtYmVyIG9mIGNvZGVzIChhc3N1bWVkIDw9IDI4OClcblx0XHRzLCAvLyBudW1iZXIgb2Ygc2ltcGxlLXZhbHVlZCBjb2RlcyAoMC4ucy0xKVxuXHRcdGQsIC8vIGxpc3Qgb2YgYmFzZSB2YWx1ZXMgZm9yIG5vbi1zaW1wbGUgY29kZXNcblx0XHRlLCAvLyBsaXN0IG9mIGV4dHJhIGJpdHMgZm9yIG5vbi1zaW1wbGUgY29kZXNcblx0XHR0LCAvLyByZXN1bHQ6IHN0YXJ0aW5nIHRhYmxlXG5cdFx0bSwgLy8gbWF4aW11bSBsb29rdXAgYml0cywgcmV0dXJucyBhY3R1YWxcblx0XHRocCwvLyBzcGFjZSBmb3IgdHJlZXNcblx0XHRobiwvLyBodWZ0cyB1c2VkIGluIHNwYWNlXG5cdFx0diAvLyB3b3JraW5nIGFyZWE6IHZhbHVlcyBpbiBvcmRlciBvZiBiaXQgbGVuZ3RoXG5cdFx0KSB7XG5cdFx0XHQvLyBHaXZlbiBhIGxpc3Qgb2YgY29kZSBsZW5ndGhzIGFuZCBhIG1heGltdW0gdGFibGUgc2l6ZSwgbWFrZSBhIHNldCBvZlxuXHRcdFx0Ly8gdGFibGVzIHRvIGRlY29kZSB0aGF0IHNldCBvZiBjb2Rlcy4gUmV0dXJuIFpfT0sgb24gc3VjY2Vzcyxcblx0XHRcdC8vIFpfQlVGX0VSUk9SXG5cdFx0XHQvLyBpZiB0aGUgZ2l2ZW4gY29kZSBzZXQgaXMgaW5jb21wbGV0ZSAodGhlIHRhYmxlcyBhcmUgc3RpbGwgYnVpbHQgaW5cblx0XHRcdC8vIHRoaXNcblx0XHRcdC8vIGNhc2UpLCBaX0RBVEFfRVJST1IgaWYgdGhlIGlucHV0IGlzIGludmFsaWQgKGFuIG92ZXItc3Vic2NyaWJlZCBzZXRcblx0XHRcdC8vIG9mXG5cdFx0XHQvLyBsZW5ndGhzKSwgb3IgWl9NRU1fRVJST1IgaWYgbm90IGVub3VnaCBtZW1vcnkuXG5cblx0XHRcdHZhciBhOyAvLyBjb3VudGVyIGZvciBjb2RlcyBvZiBsZW5ndGgga1xuXHRcdFx0dmFyIGY7IC8vIGkgcmVwZWF0cyBpbiB0YWJsZSBldmVyeSBmIGVudHJpZXNcblx0XHRcdHZhciBnOyAvLyBtYXhpbXVtIGNvZGUgbGVuZ3RoXG5cdFx0XHR2YXIgaDsgLy8gdGFibGUgbGV2ZWxcblx0XHRcdHZhciBpOyAvLyBjb3VudGVyLCBjdXJyZW50IGNvZGVcblx0XHRcdHZhciBqOyAvLyBjb3VudGVyXG5cdFx0XHR2YXIgazsgLy8gbnVtYmVyIG9mIGJpdHMgaW4gY3VycmVudCBjb2RlXG5cdFx0XHR2YXIgbDsgLy8gYml0cyBwZXIgdGFibGUgKHJldHVybmVkIGluIG0pXG5cdFx0XHR2YXIgbWFzazsgLy8gKDEgPDwgdykgLSAxLCB0byBhdm9pZCBjYyAtTyBidWcgb24gSFBcblx0XHRcdHZhciBwOyAvLyBwb2ludGVyIGludG8gY1tdLCBiW10sIG9yIHZbXVxuXHRcdFx0dmFyIHE7IC8vIHBvaW50cyB0byBjdXJyZW50IHRhYmxlXG5cdFx0XHR2YXIgdzsgLy8gYml0cyBiZWZvcmUgdGhpcyB0YWJsZSA9PSAobCAqIGgpXG5cdFx0XHR2YXIgeHA7IC8vIHBvaW50ZXIgaW50byB4XG5cdFx0XHR2YXIgeTsgLy8gbnVtYmVyIG9mIGR1bW15IGNvZGVzIGFkZGVkXG5cdFx0XHR2YXIgejsgLy8gbnVtYmVyIG9mIGVudHJpZXMgaW4gY3VycmVudCB0YWJsZVxuXG5cdFx0XHQvLyBHZW5lcmF0ZSBjb3VudHMgZm9yIGVhY2ggYml0IGxlbmd0aFxuXG5cdFx0XHRwID0gMDtcblx0XHRcdGkgPSBuO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRjW2JbYmluZGV4ICsgcF1dKys7XG5cdFx0XHRcdHArKztcblx0XHRcdFx0aS0tOyAvLyBhc3N1bWUgYWxsIGVudHJpZXMgPD0gQk1BWFxuXHRcdFx0fSB3aGlsZSAoaSAhPT0gMCk7XG5cblx0XHRcdGlmIChjWzBdID09IG4pIHsgLy8gbnVsbCBpbnB1dC0tYWxsIHplcm8gbGVuZ3RoIGNvZGVzXG5cdFx0XHRcdHRbMF0gPSAtMTtcblx0XHRcdFx0bVswXSA9IDA7XG5cdFx0XHRcdHJldHVybiBaX09LO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaW5kIG1pbmltdW0gYW5kIG1heGltdW0gbGVuZ3RoLCBib3VuZCAqbSBieSB0aG9zZVxuXHRcdFx0bCA9IG1bMF07XG5cdFx0XHRmb3IgKGogPSAxOyBqIDw9IEJNQVg7IGorKylcblx0XHRcdFx0aWYgKGNbal0gIT09IDApXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRrID0gajsgLy8gbWluaW11bSBjb2RlIGxlbmd0aFxuXHRcdFx0aWYgKGwgPCBqKSB7XG5cdFx0XHRcdGwgPSBqO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gQk1BWDsgaSAhPT0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChjW2ldICE9PSAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZyA9IGk7IC8vIG1heGltdW0gY29kZSBsZW5ndGhcblx0XHRcdGlmIChsID4gaSkge1xuXHRcdFx0XHRsID0gaTtcblx0XHRcdH1cblx0XHRcdG1bMF0gPSBsO1xuXG5cdFx0XHQvLyBBZGp1c3QgbGFzdCBsZW5ndGggY291bnQgdG8gZmlsbCBvdXQgY29kZXMsIGlmIG5lZWRlZFxuXHRcdFx0Zm9yICh5ID0gMSA8PCBqOyBqIDwgaTsgaisrLCB5IDw8PSAxKSB7XG5cdFx0XHRcdGlmICgoeSAtPSBjW2pdKSA8IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoKHkgLT0gY1tpXSkgPCAwKSB7XG5cdFx0XHRcdHJldHVybiBaX0RBVEFfRVJST1I7XG5cdFx0XHR9XG5cdFx0XHRjW2ldICs9IHk7XG5cblx0XHRcdC8vIEdlbmVyYXRlIHN0YXJ0aW5nIG9mZnNldHMgaW50byB0aGUgdmFsdWUgdGFibGUgZm9yIGVhY2ggbGVuZ3RoXG5cdFx0XHR4WzFdID0gaiA9IDA7XG5cdFx0XHRwID0gMTtcblx0XHRcdHhwID0gMjtcblx0XHRcdHdoaWxlICgtLWkgIT09IDApIHsgLy8gbm90ZSB0aGF0IGkgPT0gZyBmcm9tIGFib3ZlXG5cdFx0XHRcdHhbeHBdID0gKGogKz0gY1twXSk7XG5cdFx0XHRcdHhwKys7XG5cdFx0XHRcdHArKztcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBhIHRhYmxlIG9mIHZhbHVlcyBpbiBvcmRlciBvZiBiaXQgbGVuZ3Roc1xuXHRcdFx0aSA9IDA7XG5cdFx0XHRwID0gMDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKChqID0gYltiaW5kZXggKyBwXSkgIT09IDApIHtcblx0XHRcdFx0XHR2W3hbal0rK10gPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHArKztcblx0XHRcdH0gd2hpbGUgKCsraSA8IG4pO1xuXHRcdFx0biA9IHhbZ107IC8vIHNldCBuIHRvIGxlbmd0aCBvZiB2XG5cblx0XHRcdC8vIEdlbmVyYXRlIHRoZSBIdWZmbWFuIGNvZGVzIGFuZCBmb3IgZWFjaCwgbWFrZSB0aGUgdGFibGUgZW50cmllc1xuXHRcdFx0eFswXSA9IGkgPSAwOyAvLyBmaXJzdCBIdWZmbWFuIGNvZGUgaXMgemVyb1xuXHRcdFx0cCA9IDA7IC8vIGdyYWIgdmFsdWVzIGluIGJpdCBvcmRlclxuXHRcdFx0aCA9IC0xOyAvLyBubyB0YWJsZXMgeWV0LS1sZXZlbCAtMVxuXHRcdFx0dyA9IC1sOyAvLyBiaXRzIGRlY29kZWQgPT0gKGwgKiBoKVxuXHRcdFx0dVswXSA9IDA7IC8vIGp1c3QgdG8ga2VlcCBjb21waWxlcnMgaGFwcHlcblx0XHRcdHEgPSAwOyAvLyBkaXR0b1xuXHRcdFx0eiA9IDA7IC8vIGRpdHRvXG5cblx0XHRcdC8vIGdvIHRocm91Z2ggdGhlIGJpdCBsZW5ndGhzIChrIGFscmVhZHkgaXMgYml0cyBpbiBzaG9ydGVzdCBjb2RlKVxuXHRcdFx0Zm9yICg7IGsgPD0gZzsgaysrKSB7XG5cdFx0XHRcdGEgPSBjW2tdO1xuXHRcdFx0XHR3aGlsZSAoYS0tICE9PSAwKSB7XG5cdFx0XHRcdFx0Ly8gaGVyZSBpIGlzIHRoZSBIdWZmbWFuIGNvZGUgb2YgbGVuZ3RoIGsgYml0cyBmb3IgdmFsdWUgKnBcblx0XHRcdFx0XHQvLyBtYWtlIHRhYmxlcyB1cCB0byByZXF1aXJlZCBsZXZlbFxuXHRcdFx0XHRcdHdoaWxlIChrID4gdyArIGwpIHtcblx0XHRcdFx0XHRcdGgrKztcblx0XHRcdFx0XHRcdHcgKz0gbDsgLy8gcHJldmlvdXMgdGFibGUgYWx3YXlzIGwgYml0c1xuXHRcdFx0XHRcdFx0Ly8gY29tcHV0ZSBtaW5pbXVtIHNpemUgdGFibGUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGwgYml0c1xuXHRcdFx0XHRcdFx0eiA9IGcgLSB3O1xuXHRcdFx0XHRcdFx0eiA9ICh6ID4gbCkgPyBsIDogejsgLy8gdGFibGUgc2l6ZSB1cHBlciBsaW1pdFxuXHRcdFx0XHRcdFx0aWYgKChmID0gMSA8PCAoaiA9IGsgLSB3KSkgPiBhICsgMSkgeyAvLyB0cnkgYSBrLXcgYml0IHRhYmxlXG5cdFx0XHRcdFx0XHRcdC8vIHRvbyBmZXcgY29kZXMgZm9yXG5cdFx0XHRcdFx0XHRcdC8vIGstdyBiaXQgdGFibGVcblx0XHRcdFx0XHRcdFx0ZiAtPSBhICsgMTsgLy8gZGVkdWN0IGNvZGVzIGZyb20gcGF0dGVybnMgbGVmdFxuXHRcdFx0XHRcdFx0XHR4cCA9IGs7XG5cdFx0XHRcdFx0XHRcdGlmIChqIDwgeikge1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICgrK2ogPCB6KSB7IC8vIHRyeSBzbWFsbGVyIHRhYmxlcyB1cCB0byB6IGJpdHNcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgoZiA8PD0gMSkgPD0gY1srK3hwXSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7IC8vIGVub3VnaCBjb2RlcyB0byB1c2UgdXAgaiBiaXRzXG5cdFx0XHRcdFx0XHRcdFx0XHRmIC09IGNbeHBdOyAvLyBlbHNlIGRlZHVjdCBjb2RlcyBmcm9tIHBhdHRlcm5zXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR6ID0gMSA8PCBqOyAvLyB0YWJsZSBlbnRyaWVzIGZvciBqLWJpdCB0YWJsZVxuXG5cdFx0XHRcdFx0XHQvLyBhbGxvY2F0ZSBuZXcgdGFibGVcblx0XHRcdFx0XHRcdGlmIChoblswXSArIHogPiBNQU5ZKSB7IC8vIChub3RlOiBkb2Vzbid0IG1hdHRlciBmb3IgZml4ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiBaX0RBVEFfRVJST1I7IC8vIG92ZXJmbG93IG9mIE1BTllcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHVbaF0gPSBxID0gLyogaHArICovaG5bMF07IC8vIERFQlVHXG5cdFx0XHRcdFx0XHRoblswXSArPSB6O1xuXG5cdFx0XHRcdFx0XHQvLyBjb25uZWN0IHRvIGxhc3QgdGFibGUsIGlmIHRoZXJlIGlzIG9uZVxuXHRcdFx0XHRcdFx0aWYgKGggIT09IDApIHtcblx0XHRcdFx0XHRcdFx0eFtoXSA9IGk7IC8vIHNhdmUgcGF0dGVybiBmb3IgYmFja2luZyB1cFxuXHRcdFx0XHRcdFx0XHRyWzBdID0gLyogKGJ5dGUpICovajsgLy8gYml0cyBpbiB0aGlzIHRhYmxlXG5cdFx0XHRcdFx0XHRcdHJbMV0gPSAvKiAoYnl0ZSkgKi9sOyAvLyBiaXRzIHRvIGR1bXAgYmVmb3JlIHRoaXMgdGFibGVcblx0XHRcdFx0XHRcdFx0aiA9IGkgPj4+ICh3IC0gbCk7XG5cdFx0XHRcdFx0XHRcdHJbMl0gPSAvKiAoaW50KSAqLyhxIC0gdVtoIC0gMV0gLSBqKTsgLy8gb2Zmc2V0IHRvIHRoaXMgdGFibGVcblx0XHRcdFx0XHRcdFx0aHAuc2V0KHIsICh1W2ggLSAxXSArIGopICogMyk7XG5cdFx0XHRcdFx0XHRcdC8vIHRvXG5cdFx0XHRcdFx0XHRcdC8vIGxhc3Rcblx0XHRcdFx0XHRcdFx0Ly8gdGFibGVcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRbMF0gPSBxOyAvLyBmaXJzdCB0YWJsZSBpcyByZXR1cm5lZCByZXN1bHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBzZXQgdXAgdGFibGUgZW50cnkgaW4gclxuXHRcdFx0XHRcdHJbMV0gPSAvKiAoYnl0ZSkgKi8oayAtIHcpO1xuXHRcdFx0XHRcdGlmIChwID49IG4pIHtcblx0XHRcdFx0XHRcdHJbMF0gPSAxMjggKyA2NDsgLy8gb3V0IG9mIHZhbHVlcy0taW52YWxpZCBjb2RlXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2W3BdIDwgcykge1xuXHRcdFx0XHRcdFx0clswXSA9IC8qIChieXRlKSAqLyh2W3BdIDwgMjU2ID8gMCA6IDMyICsgNjQpOyAvLyAyNTYgaXNcblx0XHRcdFx0XHRcdC8vIGVuZC1vZi1ibG9ja1xuXHRcdFx0XHRcdFx0clsyXSA9IHZbcCsrXTsgLy8gc2ltcGxlIGNvZGUgaXMganVzdCB0aGUgdmFsdWVcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0clswXSA9IC8qIChieXRlKSAqLyhlW3ZbcF0gLSBzXSArIDE2ICsgNjQpOyAvLyBub24tc2ltcGxlLS1sb29rXG5cdFx0XHRcdFx0XHQvLyB1cCBpbiBsaXN0c1xuXHRcdFx0XHRcdFx0clsyXSA9IGRbdltwKytdIC0gc107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZmlsbCBjb2RlLWxpa2UgZW50cmllcyB3aXRoIHJcblx0XHRcdFx0XHRmID0gMSA8PCAoayAtIHcpO1xuXHRcdFx0XHRcdGZvciAoaiA9IGkgPj4+IHc7IGogPCB6OyBqICs9IGYpIHtcblx0XHRcdFx0XHRcdGhwLnNldChyLCAocSArIGopICogMyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gYmFja3dhcmRzIGluY3JlbWVudCB0aGUgay1iaXQgY29kZSBpXG5cdFx0XHRcdFx0Zm9yIChqID0gMSA8PCAoayAtIDEpOyAoaSAmIGopICE9PSAwOyBqID4+Pj0gMSkge1xuXHRcdFx0XHRcdFx0aSBePSBqO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpIF49IGo7XG5cblx0XHRcdFx0XHQvLyBiYWNrdXAgb3ZlciBmaW5pc2hlZCB0YWJsZXNcblx0XHRcdFx0XHRtYXNrID0gKDEgPDwgdykgLSAxOyAvLyBuZWVkZWQgb24gSFAsIGNjIC1PIGJ1Z1xuXHRcdFx0XHRcdHdoaWxlICgoaSAmIG1hc2spICE9IHhbaF0pIHtcblx0XHRcdFx0XHRcdGgtLTsgLy8gZG9uJ3QgbmVlZCB0byB1cGRhdGUgcVxuXHRcdFx0XHRcdFx0dyAtPSBsO1xuXHRcdFx0XHRcdFx0bWFzayA9ICgxIDw8IHcpIC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFJldHVybiBaX0JVRl9FUlJPUiBpZiB3ZSB3ZXJlIGdpdmVuIGFuIGluY29tcGxldGUgdGFibGVcblx0XHRcdHJldHVybiB5ICE9PSAwICYmIGcgIT0gMSA/IFpfQlVGX0VSUk9SIDogWl9PSztcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbml0V29ya0FyZWEodnNpemUpIHtcblx0XHRcdHZhciBpO1xuXHRcdFx0aWYgKCFobikge1xuXHRcdFx0XHRobiA9IFtdOyAvLyBbXTsgLy9uZXcgQXJyYXkoMSk7XG5cdFx0XHRcdHYgPSBbXTsgLy8gbmV3IEFycmF5KHZzaXplKTtcblx0XHRcdFx0YyA9IG5ldyBJbnQzMkFycmF5KEJNQVggKyAxKTsgLy8gbmV3IEFycmF5KEJNQVggKyAxKTtcblx0XHRcdFx0ciA9IFtdOyAvLyBuZXcgQXJyYXkoMyk7XG5cdFx0XHRcdHUgPSBuZXcgSW50MzJBcnJheShCTUFYKTsgLy8gbmV3IEFycmF5KEJNQVgpO1xuXHRcdFx0XHR4ID0gbmV3IEludDMyQXJyYXkoQk1BWCArIDEpOyAvLyBuZXcgQXJyYXkoQk1BWCArIDEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHYubGVuZ3RoIDwgdnNpemUpIHtcblx0XHRcdFx0diA9IFtdOyAvLyBuZXcgQXJyYXkodnNpemUpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHZzaXplOyBpKyspIHtcblx0XHRcdFx0dltpXSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgQk1BWCArIDE7IGkrKykge1xuXHRcdFx0XHRjW2ldID0gMDtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdFx0cltpXSA9IDA7XG5cdFx0XHR9XG5cdFx0XHQvLyBmb3IoaW50IGk9MDsgaTxCTUFYOyBpKyspe3VbaV09MDt9XG5cdFx0XHR1LnNldChjLnN1YmFycmF5KDAsIEJNQVgpLCAwKTtcblx0XHRcdC8vIGZvcihpbnQgaT0wOyBpPEJNQVgrMTsgaSsrKXt4W2ldPTA7fVxuXHRcdFx0eC5zZXQoYy5zdWJhcnJheSgwLCBCTUFYICsgMSksIDApO1xuXHRcdH1cblxuXHRcdHRoYXQuaW5mbGF0ZV90cmVlc19iaXRzID0gZnVuY3Rpb24oYywgLy8gMTkgY29kZSBsZW5ndGhzXG5cdFx0YmIsIC8vIGJpdHMgdHJlZSBkZXNpcmVkL2FjdHVhbCBkZXB0aFxuXHRcdHRiLCAvLyBiaXRzIHRyZWUgcmVzdWx0XG5cdFx0aHAsIC8vIHNwYWNlIGZvciB0cmVlc1xuXHRcdHogLy8gZm9yIG1lc3NhZ2VzXG5cdFx0KSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aW5pdFdvcmtBcmVhKDE5KTtcblx0XHRcdGhuWzBdID0gMDtcblx0XHRcdHJlc3VsdCA9IGh1ZnRfYnVpbGQoYywgMCwgMTksIDE5LCBudWxsLCBudWxsLCB0YiwgYmIsIGhwLCBobiwgdik7XG5cblx0XHRcdGlmIChyZXN1bHQgPT0gWl9EQVRBX0VSUk9SKSB7XG5cdFx0XHRcdHoubXNnID0gXCJvdmVyc3Vic2NyaWJlZCBkeW5hbWljIGJpdCBsZW5ndGhzIHRyZWVcIjtcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0ID09IFpfQlVGX0VSUk9SIHx8IGJiWzBdID09PSAwKSB7XG5cdFx0XHRcdHoubXNnID0gXCJpbmNvbXBsZXRlIGR5bmFtaWMgYml0IGxlbmd0aHMgdHJlZVwiO1xuXHRcdFx0XHRyZXN1bHQgPSBaX0RBVEFfRVJST1I7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cblx0XHR0aGF0LmluZmxhdGVfdHJlZXNfZHluYW1pYyA9IGZ1bmN0aW9uKG5sLCAvLyBudW1iZXIgb2YgbGl0ZXJhbC9sZW5ndGggY29kZXNcblx0XHRuZCwgLy8gbnVtYmVyIG9mIGRpc3RhbmNlIGNvZGVzXG5cdFx0YywgLy8gdGhhdCBtYW55ICh0b3RhbCkgY29kZSBsZW5ndGhzXG5cdFx0YmwsIC8vIGxpdGVyYWwgZGVzaXJlZC9hY3R1YWwgYml0IGRlcHRoXG5cdFx0YmQsIC8vIGRpc3RhbmNlIGRlc2lyZWQvYWN0dWFsIGJpdCBkZXB0aFxuXHRcdHRsLCAvLyBsaXRlcmFsL2xlbmd0aCB0cmVlIHJlc3VsdFxuXHRcdHRkLCAvLyBkaXN0YW5jZSB0cmVlIHJlc3VsdFxuXHRcdGhwLCAvLyBzcGFjZSBmb3IgdHJlZXNcblx0XHR6IC8vIGZvciBtZXNzYWdlc1xuXHRcdCkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gYnVpbGQgbGl0ZXJhbC9sZW5ndGggdHJlZVxuXHRcdFx0aW5pdFdvcmtBcmVhKDI4OCk7XG5cdFx0XHRoblswXSA9IDA7XG5cdFx0XHRyZXN1bHQgPSBodWZ0X2J1aWxkKGMsIDAsIG5sLCAyNTcsIGNwbGVucywgY3BsZXh0LCB0bCwgYmwsIGhwLCBobiwgdik7XG5cdFx0XHRpZiAocmVzdWx0ICE9IFpfT0sgfHwgYmxbMF0gPT09IDApIHtcblx0XHRcdFx0aWYgKHJlc3VsdCA9PSBaX0RBVEFfRVJST1IpIHtcblx0XHRcdFx0XHR6Lm1zZyA9IFwib3ZlcnN1YnNjcmliZWQgbGl0ZXJhbC9sZW5ndGggdHJlZVwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCAhPSBaX01FTV9FUlJPUikge1xuXHRcdFx0XHRcdHoubXNnID0gXCJpbmNvbXBsZXRlIGxpdGVyYWwvbGVuZ3RoIHRyZWVcIjtcblx0XHRcdFx0XHRyZXN1bHQgPSBaX0RBVEFfRVJST1I7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYnVpbGQgZGlzdGFuY2UgdHJlZVxuXHRcdFx0aW5pdFdvcmtBcmVhKDI4OCk7XG5cdFx0XHRyZXN1bHQgPSBodWZ0X2J1aWxkKGMsIG5sLCBuZCwgMCwgY3BkaXN0LCBjcGRleHQsIHRkLCBiZCwgaHAsIGhuLCB2KTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPSBaX09LIHx8IChiZFswXSA9PT0gMCAmJiBubCA+IDI1NykpIHtcblx0XHRcdFx0aWYgKHJlc3VsdCA9PSBaX0RBVEFfRVJST1IpIHtcblx0XHRcdFx0XHR6Lm1zZyA9IFwib3ZlcnN1YnNjcmliZWQgZGlzdGFuY2UgdHJlZVwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PSBaX0JVRl9FUlJPUikge1xuXHRcdFx0XHRcdHoubXNnID0gXCJpbmNvbXBsZXRlIGRpc3RhbmNlIHRyZWVcIjtcblx0XHRcdFx0XHRyZXN1bHQgPSBaX0RBVEFfRVJST1I7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzdWx0ICE9IFpfTUVNX0VSUk9SKSB7XG5cdFx0XHRcdFx0ei5tc2cgPSBcImVtcHR5IGRpc3RhbmNlIHRyZWUgd2l0aCBsZW5ndGhzXCI7XG5cdFx0XHRcdFx0cmVzdWx0ID0gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH07XG5cblx0fVxuXG5cdEluZlRyZWUuaW5mbGF0ZV90cmVlc19maXhlZCA9IGZ1bmN0aW9uKGJsLCAvLyBsaXRlcmFsIGRlc2lyZWQvYWN0dWFsIGJpdCBkZXB0aFxuXHRiZCwgLy8gZGlzdGFuY2UgZGVzaXJlZC9hY3R1YWwgYml0IGRlcHRoXG5cdHRsLC8vIGxpdGVyYWwvbGVuZ3RoIHRyZWUgcmVzdWx0XG5cdHRkLy8gZGlzdGFuY2UgdHJlZSByZXN1bHRcblx0KSB7XG5cdFx0YmxbMF0gPSBmaXhlZF9ibDtcblx0XHRiZFswXSA9IGZpeGVkX2JkO1xuXHRcdHRsWzBdID0gZml4ZWRfdGw7XG5cdFx0dGRbMF0gPSBmaXhlZF90ZDtcblx0XHRyZXR1cm4gWl9PSztcblx0fTtcblxuXHQvLyBJbmZDb2Rlc1xuXG5cdC8vIHdhaXRpbmcgZm9yIFwiaTpcIj1pbnB1dCxcblx0Ly8gXCJvOlwiPW91dHB1dCxcblx0Ly8gXCJ4OlwiPW5vdGhpbmdcblx0dmFyIFNUQVJUID0gMDsgLy8geDogc2V0IHVwIGZvciBMRU5cblx0dmFyIExFTiA9IDE7IC8vIGk6IGdldCBsZW5ndGgvbGl0ZXJhbC9lb2IgbmV4dFxuXHR2YXIgTEVORVhUID0gMjsgLy8gaTogZ2V0dGluZyBsZW5ndGggZXh0cmEgKGhhdmUgYmFzZSlcblx0dmFyIERJU1QgPSAzOyAvLyBpOiBnZXQgZGlzdGFuY2UgbmV4dFxuXHR2YXIgRElTVEVYVCA9IDQ7Ly8gaTogZ2V0dGluZyBkaXN0YW5jZSBleHRyYVxuXHR2YXIgQ09QWSA9IDU7IC8vIG86IGNvcHlpbmcgYnl0ZXMgaW4gd2luZG93LCB3YWl0aW5nXG5cdC8vIGZvciBzcGFjZVxuXHR2YXIgTElUID0gNjsgLy8gbzogZ290IGxpdGVyYWwsIHdhaXRpbmcgZm9yIG91dHB1dFxuXHQvLyBzcGFjZVxuXHR2YXIgV0FTSCA9IDc7IC8vIG86IGdvdCBlb2IsIHBvc3NpYmx5IHN0aWxsIG91dHB1dFxuXHQvLyB3YWl0aW5nXG5cdHZhciBFTkQgPSA4OyAvLyB4OiBnb3QgZW9iIGFuZCBhbGwgZGF0YSBmbHVzaGVkXG5cdHZhciBCQURDT0RFID0gOTsvLyB4OiBnb3QgZXJyb3JcblxuXHRmdW5jdGlvbiBJbmZDb2RlcygpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR2YXIgbW9kZTsgLy8gY3VycmVudCBpbmZsYXRlX2NvZGVzIG1vZGVcblxuXHRcdC8vIG1vZGUgZGVwZW5kZW50IGluZm9ybWF0aW9uXG5cdFx0dmFyIGxlbiA9IDA7XG5cblx0XHR2YXIgdHJlZTsgLy8gcG9pbnRlciBpbnRvIHRyZWVcblx0XHR2YXIgdHJlZV9pbmRleCA9IDA7XG5cdFx0dmFyIG5lZWQgPSAwOyAvLyBiaXRzIG5lZWRlZFxuXG5cdFx0dmFyIGxpdCA9IDA7XG5cblx0XHQvLyBpZiBFWFQgb3IgQ09QWSwgd2hlcmUgYW5kIGhvdyBtdWNoXG5cdFx0dmFyIGdldCA9IDA7IC8vIGJpdHMgdG8gZ2V0IGZvciBleHRyYVxuXHRcdHZhciBkaXN0ID0gMDsgLy8gZGlzdGFuY2UgYmFjayB0byBjb3B5IGZyb21cblxuXHRcdHZhciBsYml0cyA9IDA7IC8vIGx0cmVlIGJpdHMgZGVjb2RlZCBwZXIgYnJhbmNoXG5cdFx0dmFyIGRiaXRzID0gMDsgLy8gZHRyZWUgYml0cyBkZWNvZGVyIHBlciBicmFuY2hcblx0XHR2YXIgbHRyZWU7IC8vIGxpdGVyYWwvbGVuZ3RoL2VvYiB0cmVlXG5cdFx0dmFyIGx0cmVlX2luZGV4ID0gMDsgLy8gbGl0ZXJhbC9sZW5ndGgvZW9iIHRyZWVcblx0XHR2YXIgZHRyZWU7IC8vIGRpc3RhbmNlIHRyZWVcblx0XHR2YXIgZHRyZWVfaW5kZXggPSAwOyAvLyBkaXN0YW5jZSB0cmVlXG5cblx0XHQvLyBDYWxsZWQgd2l0aCBudW1iZXIgb2YgYnl0ZXMgbGVmdCB0byB3cml0ZSBpbiB3aW5kb3cgYXQgbGVhc3QgMjU4XG5cdFx0Ly8gKHRoZSBtYXhpbXVtIHN0cmluZyBsZW5ndGgpIGFuZCBudW1iZXIgb2YgaW5wdXQgYnl0ZXMgYXZhaWxhYmxlXG5cdFx0Ly8gYXQgbGVhc3QgdGVuLiBUaGUgdGVuIGJ5dGVzIGFyZSBzaXggYnl0ZXMgZm9yIHRoZSBsb25nZXN0IGxlbmd0aC9cblx0XHQvLyBkaXN0YW5jZSBwYWlyIHBsdXMgZm91ciBieXRlcyBmb3Igb3ZlcmxvYWRpbmcgdGhlIGJpdCBidWZmZXIuXG5cblx0XHRmdW5jdGlvbiBpbmZsYXRlX2Zhc3QoYmwsIGJkLCB0bCwgdGxfaW5kZXgsIHRkLCB0ZF9pbmRleCwgcywgeikge1xuXHRcdFx0dmFyIHQ7IC8vIHRlbXBvcmFyeSBwb2ludGVyXG5cdFx0XHR2YXIgdHA7IC8vIHRlbXBvcmFyeSBwb2ludGVyXG5cdFx0XHR2YXIgdHBfaW5kZXg7IC8vIHRlbXBvcmFyeSBwb2ludGVyXG5cdFx0XHR2YXIgZTsgLy8gZXh0cmEgYml0cyBvciBvcGVyYXRpb25cblx0XHRcdHZhciBiOyAvLyBiaXQgYnVmZmVyXG5cdFx0XHR2YXIgazsgLy8gYml0cyBpbiBiaXQgYnVmZmVyXG5cdFx0XHR2YXIgcDsgLy8gaW5wdXQgZGF0YSBwb2ludGVyXG5cdFx0XHR2YXIgbjsgLy8gYnl0ZXMgYXZhaWxhYmxlIHRoZXJlXG5cdFx0XHR2YXIgcTsgLy8gb3V0cHV0IHdpbmRvdyB3cml0ZSBwb2ludGVyXG5cdFx0XHR2YXIgbTsgLy8gYnl0ZXMgdG8gZW5kIG9mIHdpbmRvdyBvciByZWFkIHBvaW50ZXJcblx0XHRcdHZhciBtbDsgLy8gbWFzayBmb3IgbGl0ZXJhbC9sZW5ndGggdHJlZVxuXHRcdFx0dmFyIG1kOyAvLyBtYXNrIGZvciBkaXN0YW5jZSB0cmVlXG5cdFx0XHR2YXIgYzsgLy8gYnl0ZXMgdG8gY29weVxuXHRcdFx0dmFyIGQ7IC8vIGRpc3RhbmNlIGJhY2sgdG8gY29weSBmcm9tXG5cdFx0XHR2YXIgcjsgLy8gY29weSBzb3VyY2UgcG9pbnRlclxuXG5cdFx0XHR2YXIgdHBfaW5kZXhfdF8zOyAvLyAodHBfaW5kZXgrdCkqM1xuXG5cdFx0XHQvLyBsb2FkIGlucHV0LCBvdXRwdXQsIGJpdCB2YWx1ZXNcblx0XHRcdHAgPSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRuID0gei5hdmFpbF9pbjtcblx0XHRcdGIgPSBzLmJpdGI7XG5cdFx0XHRrID0gcy5iaXRrO1xuXHRcdFx0cSA9IHMud3JpdGU7XG5cdFx0XHRtID0gcSA8IHMucmVhZCA/IHMucmVhZCAtIHEgLSAxIDogcy5lbmQgLSBxO1xuXG5cdFx0XHQvLyBpbml0aWFsaXplIG1hc2tzXG5cdFx0XHRtbCA9IGluZmxhdGVfbWFza1tibF07XG5cdFx0XHRtZCA9IGluZmxhdGVfbWFza1tiZF07XG5cblx0XHRcdC8vIGRvIHVudGlsIG5vdCBlbm91Z2ggaW5wdXQgb3Igb3V0cHV0IHNwYWNlIGZvciBmYXN0IGxvb3Bcblx0XHRcdGRvIHsgLy8gYXNzdW1lIGNhbGxlZCB3aXRoIG0gPj0gMjU4ICYmIG4gPj0gMTBcblx0XHRcdFx0Ly8gZ2V0IGxpdGVyYWwvbGVuZ3RoIGNvZGVcblx0XHRcdFx0d2hpbGUgKGsgPCAoMjApKSB7IC8vIG1heCBiaXRzIGZvciBsaXRlcmFsL2xlbmd0aCBjb2RlXG5cdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHQgPSBiICYgbWw7XG5cdFx0XHRcdHRwID0gdGw7XG5cdFx0XHRcdHRwX2luZGV4ID0gdGxfaW5kZXg7XG5cdFx0XHRcdHRwX2luZGV4X3RfMyA9ICh0cF9pbmRleCArIHQpICogMztcblx0XHRcdFx0aWYgKChlID0gdHBbdHBfaW5kZXhfdF8zXSkgPT09IDApIHtcblx0XHRcdFx0XHRiID4+PSAodHBbdHBfaW5kZXhfdF8zICsgMV0pO1xuXHRcdFx0XHRcdGsgLT0gKHRwW3RwX2luZGV4X3RfMyArIDFdKTtcblxuXHRcdFx0XHRcdHMud2luZG93W3ErK10gPSAvKiAoYnl0ZSkgKi90cFt0cF9pbmRleF90XzMgKyAyXTtcblx0XHRcdFx0XHRtLS07XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZG8ge1xuXG5cdFx0XHRcdFx0YiA+Pj0gKHRwW3RwX2luZGV4X3RfMyArIDFdKTtcblx0XHRcdFx0XHRrIC09ICh0cFt0cF9pbmRleF90XzMgKyAxXSk7XG5cblx0XHRcdFx0XHRpZiAoKGUgJiAxNikgIT09IDApIHtcblx0XHRcdFx0XHRcdGUgJj0gMTU7XG5cdFx0XHRcdFx0XHRjID0gdHBbdHBfaW5kZXhfdF8zICsgMl0gKyAoLyogKGludCkgKi9iICYgaW5mbGF0ZV9tYXNrW2VdKTtcblxuXHRcdFx0XHRcdFx0YiA+Pj0gZTtcblx0XHRcdFx0XHRcdGsgLT0gZTtcblxuXHRcdFx0XHRcdFx0Ly8gZGVjb2RlIGRpc3RhbmNlIGJhc2Ugb2YgYmxvY2sgdG8gY29weVxuXHRcdFx0XHRcdFx0d2hpbGUgKGsgPCAoMTUpKSB7IC8vIG1heCBiaXRzIGZvciBkaXN0YW5jZSBjb2RlXG5cdFx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dCA9IGIgJiBtZDtcblx0XHRcdFx0XHRcdHRwID0gdGQ7XG5cdFx0XHRcdFx0XHR0cF9pbmRleCA9IHRkX2luZGV4O1xuXHRcdFx0XHRcdFx0dHBfaW5kZXhfdF8zID0gKHRwX2luZGV4ICsgdCkgKiAzO1xuXHRcdFx0XHRcdFx0ZSA9IHRwW3RwX2luZGV4X3RfM107XG5cblx0XHRcdFx0XHRcdGRvIHtcblxuXHRcdFx0XHRcdFx0XHRiID4+PSAodHBbdHBfaW5kZXhfdF8zICsgMV0pO1xuXHRcdFx0XHRcdFx0XHRrIC09ICh0cFt0cF9pbmRleF90XzMgKyAxXSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKChlICYgMTYpICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0IGV4dHJhIGJpdHMgdG8gYWRkIHRvIGRpc3RhbmNlIGJhc2Vcblx0XHRcdFx0XHRcdFx0XHRlICY9IDE1O1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlIChrIDwgKGUpKSB7IC8vIGdldCBleHRyYSBiaXRzICh1cCB0byAxMylcblx0XHRcdFx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGQgPSB0cFt0cF9pbmRleF90XzMgKyAyXSArIChiICYgaW5mbGF0ZV9tYXNrW2VdKTtcblxuXHRcdFx0XHRcdFx0XHRcdGIgPj49IChlKTtcblx0XHRcdFx0XHRcdFx0XHRrIC09IChlKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIGRvIHRoZSBjb3B5XG5cdFx0XHRcdFx0XHRcdFx0bSAtPSBjO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChxID49IGQpIHsgLy8gb2Zmc2V0IGJlZm9yZSBkZXN0XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBqdXN0IGNvcHlcblx0XHRcdFx0XHRcdFx0XHRcdHIgPSBxIC0gZDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChxIC0gciA+IDAgJiYgMiA+IChxIC0gcikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cy53aW5kb3dbcSsrXSA9IHMud2luZG93W3IrK107IC8vIG1pbmltdW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY291bnQgaXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdGhyZWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMud2luZG93W3ErK10gPSBzLndpbmRvd1tyKytdOyAvLyBzbyB1bnJvbGxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbG9vcCBhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGxpdHRsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjIC09IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzLndpbmRvdy5zZXQocy53aW5kb3cuc3ViYXJyYXkociwgciArIDIpLCBxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cSArPSAyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyICs9IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGMgLT0gMjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgeyAvLyBlbHNlIG9mZnNldCBhZnRlciBkZXN0aW5hdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0ciA9IHEgLSBkO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyICs9IHMuZW5kOyAvLyBmb3JjZSBwb2ludGVyIGluIHdpbmRvd1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB3aGlsZSAociA8IDApOyAvLyBjb3ZlcnMgaW52YWxpZCBkaXN0YW5jZXNcblx0XHRcdFx0XHRcdFx0XHRcdGUgPSBzLmVuZCAtIHI7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYyA+IGUpIHsgLy8gaWYgc291cmNlIGNyb3NzZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGMgLT0gZTsgLy8gd3JhcHBlZCBjb3B5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChxIC0gciA+IDAgJiYgZSA+IChxIC0gcikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzLndpbmRvd1txKytdID0gcy53aW5kb3dbcisrXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IHdoaWxlICgtLWUgIT09IDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHMud2luZG93LnNldChzLndpbmRvdy5zdWJhcnJheShyLCByICsgZSksIHEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHEgKz0gZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyICs9IGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ciA9IDA7IC8vIGNvcHkgcmVzdCBmcm9tIHN0YXJ0IG9mIHdpbmRvd1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29weSBhbGwgb3Igd2hhdCdzIGxlZnRcblx0XHRcdFx0XHRcdFx0XHRpZiAocSAtIHIgPiAwICYmIGMgPiAocSAtIHIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMud2luZG93W3ErK10gPSBzLndpbmRvd1tyKytdO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB3aGlsZSAoLS1jICE9PSAwKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0cy53aW5kb3cuc2V0KHMud2luZG93LnN1YmFycmF5KHIsIHIgKyBjKSwgcSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRxICs9IGM7XG5cdFx0XHRcdFx0XHRcdFx0XHRyICs9IGM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjID0gMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoKGUgJiA2NCkgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHR0ICs9IHRwW3RwX2luZGV4X3RfMyArIDJdO1xuXHRcdFx0XHRcdFx0XHRcdHQgKz0gKGIgJiBpbmZsYXRlX21hc2tbZV0pO1xuXHRcdFx0XHRcdFx0XHRcdHRwX2luZGV4X3RfMyA9ICh0cF9pbmRleCArIHQpICogMztcblx0XHRcdFx0XHRcdFx0XHRlID0gdHBbdHBfaW5kZXhfdF8zXTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR6Lm1zZyA9IFwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCI7XG5cblx0XHRcdFx0XHRcdFx0XHRjID0gei5hdmFpbF9pbiAtIG47XG5cdFx0XHRcdFx0XHRcdFx0YyA9IChrID4+IDMpIDwgYyA/IGsgPj4gMyA6IGM7XG5cdFx0XHRcdFx0XHRcdFx0biArPSBjO1xuXHRcdFx0XHRcdFx0XHRcdHAgLT0gYztcblx0XHRcdFx0XHRcdFx0XHRrIC09IGMgPDwgMztcblxuXHRcdFx0XHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBaX0RBVEFfRVJST1I7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gd2hpbGUgKHRydWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKChlICYgNjQpID09PSAwKSB7XG5cdFx0XHRcdFx0XHR0ICs9IHRwW3RwX2luZGV4X3RfMyArIDJdO1xuXHRcdFx0XHRcdFx0dCArPSAoYiAmIGluZmxhdGVfbWFza1tlXSk7XG5cdFx0XHRcdFx0XHR0cF9pbmRleF90XzMgPSAodHBfaW5kZXggKyB0KSAqIDM7XG5cdFx0XHRcdFx0XHRpZiAoKGUgPSB0cFt0cF9pbmRleF90XzNdKSA9PT0gMCkge1xuXG5cdFx0XHRcdFx0XHRcdGIgPj49ICh0cFt0cF9pbmRleF90XzMgKyAxXSk7XG5cdFx0XHRcdFx0XHRcdGsgLT0gKHRwW3RwX2luZGV4X3RfMyArIDFdKTtcblxuXHRcdFx0XHRcdFx0XHRzLndpbmRvd1txKytdID0gLyogKGJ5dGUpICovdHBbdHBfaW5kZXhfdF8zICsgMl07XG5cdFx0XHRcdFx0XHRcdG0tLTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgoZSAmIDMyKSAhPT0gMCkge1xuXG5cdFx0XHRcdFx0XHRjID0gei5hdmFpbF9pbiAtIG47XG5cdFx0XHRcdFx0XHRjID0gKGsgPj4gMykgPCBjID8gayA+PiAzIDogYztcblx0XHRcdFx0XHRcdG4gKz0gYztcblx0XHRcdFx0XHRcdHAgLT0gYztcblx0XHRcdFx0XHRcdGsgLT0gYyA8PCAzO1xuXG5cdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRU5EO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCI7XG5cblx0XHRcdFx0XHRcdGMgPSB6LmF2YWlsX2luIC0gbjtcblx0XHRcdFx0XHRcdGMgPSAoayA+PiAzKSA8IGMgPyBrID4+IDMgOiBjO1xuXHRcdFx0XHRcdFx0biArPSBjO1xuXHRcdFx0XHRcdFx0cCAtPSBjO1xuXHRcdFx0XHRcdFx0ayAtPSBjIDw8IDM7XG5cblx0XHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cblx0XHRcdFx0XHRcdHJldHVybiBaX0RBVEFfRVJST1I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IHdoaWxlICh0cnVlKTtcblx0XHRcdH0gd2hpbGUgKG0gPj0gMjU4ICYmIG4gPj0gMTApO1xuXG5cdFx0XHQvLyBub3QgZW5vdWdoIGlucHV0IG9yIG91dHB1dC0tcmVzdG9yZSBwb2ludGVycyBhbmQgcmV0dXJuXG5cdFx0XHRjID0gei5hdmFpbF9pbiAtIG47XG5cdFx0XHRjID0gKGsgPj4gMykgPCBjID8gayA+PiAzIDogYztcblx0XHRcdG4gKz0gYztcblx0XHRcdHAgLT0gYztcblx0XHRcdGsgLT0gYyA8PCAzO1xuXG5cdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0cy5iaXRrID0gaztcblx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdHMud3JpdGUgPSBxO1xuXG5cdFx0XHRyZXR1cm4gWl9PSztcblx0XHR9XG5cblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbihibCwgYmQsIHRsLCB0bF9pbmRleCwgdGQsIHRkX2luZGV4KSB7XG5cdFx0XHRtb2RlID0gU1RBUlQ7XG5cdFx0XHRsYml0cyA9IC8qIChieXRlKSAqL2JsO1xuXHRcdFx0ZGJpdHMgPSAvKiAoYnl0ZSkgKi9iZDtcblx0XHRcdGx0cmVlID0gdGw7XG5cdFx0XHRsdHJlZV9pbmRleCA9IHRsX2luZGV4O1xuXHRcdFx0ZHRyZWUgPSB0ZDtcblx0XHRcdGR0cmVlX2luZGV4ID0gdGRfaW5kZXg7XG5cdFx0XHR0cmVlID0gbnVsbDtcblx0XHR9O1xuXG5cdFx0dGhhdC5wcm9jID0gZnVuY3Rpb24ocywgeiwgcikge1xuXHRcdFx0dmFyIGo7IC8vIHRlbXBvcmFyeSBzdG9yYWdlXG5cdFx0XHR2YXIgdGluZGV4OyAvLyB0ZW1wb3JhcnkgcG9pbnRlclxuXHRcdFx0dmFyIGU7IC8vIGV4dHJhIGJpdHMgb3Igb3BlcmF0aW9uXG5cdFx0XHR2YXIgYiA9IDA7IC8vIGJpdCBidWZmZXJcblx0XHRcdHZhciBrID0gMDsgLy8gYml0cyBpbiBiaXQgYnVmZmVyXG5cdFx0XHR2YXIgcCA9IDA7IC8vIGlucHV0IGRhdGEgcG9pbnRlclxuXHRcdFx0dmFyIG47IC8vIGJ5dGVzIGF2YWlsYWJsZSB0aGVyZVxuXHRcdFx0dmFyIHE7IC8vIG91dHB1dCB3aW5kb3cgd3JpdGUgcG9pbnRlclxuXHRcdFx0dmFyIG07IC8vIGJ5dGVzIHRvIGVuZCBvZiB3aW5kb3cgb3IgcmVhZCBwb2ludGVyXG5cdFx0XHR2YXIgZjsgLy8gcG9pbnRlciB0byBjb3B5IHN0cmluZ3MgZnJvbVxuXG5cdFx0XHQvLyBjb3B5IGlucHV0L291dHB1dCBpbmZvcm1hdGlvbiB0byBsb2NhbHMgKFVQREFURSBtYWNybyByZXN0b3Jlcylcblx0XHRcdHAgPSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRuID0gei5hdmFpbF9pbjtcblx0XHRcdGIgPSBzLmJpdGI7XG5cdFx0XHRrID0gcy5iaXRrO1xuXHRcdFx0cSA9IHMud3JpdGU7XG5cdFx0XHRtID0gcSA8IHMucmVhZCA/IHMucmVhZCAtIHEgLSAxIDogcy5lbmQgLSBxO1xuXG5cdFx0XHQvLyBwcm9jZXNzIGlucHV0IGFuZCBvdXRwdXQgYmFzZWQgb24gY3VycmVudCBzdGF0ZVxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdC8vIHdhaXRpbmcgZm9yIFwiaTpcIj1pbnB1dCwgXCJvOlwiPW91dHB1dCwgXCJ4OlwiPW5vdGhpbmdcblx0XHRcdFx0Y2FzZSBTVEFSVDogLy8geDogc2V0IHVwIGZvciBMRU5cblx0XHRcdFx0XHRpZiAobSA+PSAyNTggJiYgbiA+PSAxMCkge1xuXG5cdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0ciA9IGluZmxhdGVfZmFzdChsYml0cywgZGJpdHMsIGx0cmVlLCBsdHJlZV9pbmRleCwgZHRyZWUsIGR0cmVlX2luZGV4LCBzLCB6KTtcblxuXHRcdFx0XHRcdFx0cCA9IHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdG4gPSB6LmF2YWlsX2luO1xuXHRcdFx0XHRcdFx0YiA9IHMuYml0Yjtcblx0XHRcdFx0XHRcdGsgPSBzLmJpdGs7XG5cdFx0XHRcdFx0XHRxID0gcy53cml0ZTtcblx0XHRcdFx0XHRcdG0gPSBxIDwgcy5yZWFkID8gcy5yZWFkIC0gcSAtIDEgOiBzLmVuZCAtIHE7XG5cblx0XHRcdFx0XHRcdGlmIChyICE9IFpfT0spIHtcblx0XHRcdFx0XHRcdFx0bW9kZSA9IHIgPT0gWl9TVFJFQU1fRU5EID8gV0FTSCA6IEJBRENPREU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZWVkID0gbGJpdHM7XG5cdFx0XHRcdFx0dHJlZSA9IGx0cmVlO1xuXHRcdFx0XHRcdHRyZWVfaW5kZXggPSBsdHJlZV9pbmRleDtcblxuXHRcdFx0XHRcdG1vZGUgPSBMRU47XG5cdFx0XHRcdGNhc2UgTEVOOiAvLyBpOiBnZXQgbGVuZ3RoL2xpdGVyYWwvZW9iIG5leHRcblx0XHRcdFx0XHRqID0gbmVlZDtcblxuXHRcdFx0XHRcdHdoaWxlIChrIDwgKGopKSB7XG5cdFx0XHRcdFx0XHRpZiAobiAhPT0gMClcblx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRpbmRleCA9ICh0cmVlX2luZGV4ICsgKGIgJiBpbmZsYXRlX21hc2tbal0pKSAqIDM7XG5cblx0XHRcdFx0XHRiID4+Pj0gKHRyZWVbdGluZGV4ICsgMV0pO1xuXHRcdFx0XHRcdGsgLT0gKHRyZWVbdGluZGV4ICsgMV0pO1xuXG5cdFx0XHRcdFx0ZSA9IHRyZWVbdGluZGV4XTtcblxuXHRcdFx0XHRcdGlmIChlID09PSAwKSB7IC8vIGxpdGVyYWxcblx0XHRcdFx0XHRcdGxpdCA9IHRyZWVbdGluZGV4ICsgMl07XG5cdFx0XHRcdFx0XHRtb2RlID0gTElUO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgoZSAmIDE2KSAhPT0gMCkgeyAvLyBsZW5ndGhcblx0XHRcdFx0XHRcdGdldCA9IGUgJiAxNTtcblx0XHRcdFx0XHRcdGxlbiA9IHRyZWVbdGluZGV4ICsgMl07XG5cdFx0XHRcdFx0XHRtb2RlID0gTEVORVhUO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgoZSAmIDY0KSA9PT0gMCkgeyAvLyBuZXh0IHRhYmxlXG5cdFx0XHRcdFx0XHRuZWVkID0gZTtcblx0XHRcdFx0XHRcdHRyZWVfaW5kZXggPSB0aW5kZXggLyAzICsgdHJlZVt0aW5kZXggKyAyXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKGUgJiAzMikgIT09IDApIHsgLy8gZW5kIG9mIGJsb2NrXG5cdFx0XHRcdFx0XHRtb2RlID0gV0FTSDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RlID0gQkFEQ09ERTsgLy8gaW52YWxpZCBjb2RlXG5cdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiO1xuXHRcdFx0XHRcdHIgPSBaX0RBVEFfRVJST1I7XG5cblx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblxuXHRcdFx0XHRjYXNlIExFTkVYVDogLy8gaTogZ2V0dGluZyBsZW5ndGggZXh0cmEgKGhhdmUgYmFzZSlcblx0XHRcdFx0XHRqID0gZ2V0O1xuXG5cdFx0XHRcdFx0d2hpbGUgKGsgPCAoaikpIHtcblx0XHRcdFx0XHRcdGlmIChuICE9PSAwKVxuXHRcdFx0XHRcdFx0XHRyID0gWl9PSztcblx0XHRcdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGVuICs9IChiICYgaW5mbGF0ZV9tYXNrW2pdKTtcblxuXHRcdFx0XHRcdGIgPj49IGo7XG5cdFx0XHRcdFx0ayAtPSBqO1xuXG5cdFx0XHRcdFx0bmVlZCA9IGRiaXRzO1xuXHRcdFx0XHRcdHRyZWUgPSBkdHJlZTtcblx0XHRcdFx0XHR0cmVlX2luZGV4ID0gZHRyZWVfaW5kZXg7XG5cdFx0XHRcdFx0bW9kZSA9IERJU1Q7XG5cdFx0XHRcdGNhc2UgRElTVDogLy8gaTogZ2V0IGRpc3RhbmNlIG5leHRcblx0XHRcdFx0XHRqID0gbmVlZDtcblxuXHRcdFx0XHRcdHdoaWxlIChrIDwgKGopKSB7XG5cdFx0XHRcdFx0XHRpZiAobiAhPT0gMClcblx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRpbmRleCA9ICh0cmVlX2luZGV4ICsgKGIgJiBpbmZsYXRlX21hc2tbal0pKSAqIDM7XG5cblx0XHRcdFx0XHRiID4+PSB0cmVlW3RpbmRleCArIDFdO1xuXHRcdFx0XHRcdGsgLT0gdHJlZVt0aW5kZXggKyAxXTtcblxuXHRcdFx0XHRcdGUgPSAodHJlZVt0aW5kZXhdKTtcblx0XHRcdFx0XHRpZiAoKGUgJiAxNikgIT09IDApIHsgLy8gZGlzdGFuY2Vcblx0XHRcdFx0XHRcdGdldCA9IGUgJiAxNTtcblx0XHRcdFx0XHRcdGRpc3QgPSB0cmVlW3RpbmRleCArIDJdO1xuXHRcdFx0XHRcdFx0bW9kZSA9IERJU1RFWFQ7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChlICYgNjQpID09PSAwKSB7IC8vIG5leHQgdGFibGVcblx0XHRcdFx0XHRcdG5lZWQgPSBlO1xuXHRcdFx0XHRcdFx0dHJlZV9pbmRleCA9IHRpbmRleCAvIDMgKyB0cmVlW3RpbmRleCArIDJdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGUgPSBCQURDT0RFOyAvLyBpbnZhbGlkIGNvZGVcblx0XHRcdFx0XHR6Lm1zZyA9IFwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCI7XG5cdFx0XHRcdFx0ciA9IFpfREFUQV9FUlJPUjtcblxuXHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXG5cdFx0XHRcdGNhc2UgRElTVEVYVDogLy8gaTogZ2V0dGluZyBkaXN0YW5jZSBleHRyYVxuXHRcdFx0XHRcdGogPSBnZXQ7XG5cblx0XHRcdFx0XHR3aGlsZSAoayA8IChqKSkge1xuXHRcdFx0XHRcdFx0aWYgKG4gIT09IDApXG5cdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRkaXN0ICs9IChiICYgaW5mbGF0ZV9tYXNrW2pdKTtcblxuXHRcdFx0XHRcdGIgPj49IGo7XG5cdFx0XHRcdFx0ayAtPSBqO1xuXG5cdFx0XHRcdFx0bW9kZSA9IENPUFk7XG5cdFx0XHRcdGNhc2UgQ09QWTogLy8gbzogY29weWluZyBieXRlcyBpbiB3aW5kb3csIHdhaXRpbmcgZm9yIHNwYWNlXG5cdFx0XHRcdFx0ZiA9IHEgLSBkaXN0O1xuXHRcdFx0XHRcdHdoaWxlIChmIDwgMCkgeyAvLyBtb2R1bG8gd2luZG93IHNpemUtXCJ3aGlsZVwiIGluc3RlYWRcblx0XHRcdFx0XHRcdGYgKz0gcy5lbmQ7IC8vIG9mIFwiaWZcIiBoYW5kbGVzIGludmFsaWQgZGlzdGFuY2VzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdoaWxlIChsZW4gIT09IDApIHtcblxuXHRcdFx0XHRcdFx0aWYgKG0gPT09IDApIHtcblx0XHRcdFx0XHRcdFx0aWYgKHEgPT0gcy5lbmQgJiYgcy5yZWFkICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdHIgPSBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdFx0cSA9IHMud3JpdGU7XG5cdFx0XHRcdFx0XHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChxID09IHMuZW5kICYmIHMucmVhZCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRtID0gcSA8IHMucmVhZCA/IHMucmVhZCAtIHEgLSAxIDogcy5lbmQgLSBxO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cy53aW5kb3dbcSsrXSA9IHMud2luZG93W2YrK107XG5cdFx0XHRcdFx0XHRtLS07XG5cblx0XHRcdFx0XHRcdGlmIChmID09IHMuZW5kKVxuXHRcdFx0XHRcdFx0XHRmID0gMDtcblx0XHRcdFx0XHRcdGxlbi0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RlID0gU1RBUlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgTElUOiAvLyBvOiBnb3QgbGl0ZXJhbCwgd2FpdGluZyBmb3Igb3V0cHV0IHNwYWNlXG5cdFx0XHRcdFx0aWYgKG0gPT09IDApIHtcblx0XHRcdFx0XHRcdGlmIChxID09IHMuZW5kICYmIHMucmVhZCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRxID0gMDtcblx0XHRcdFx0XHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRyID0gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHRxID0gcy53cml0ZTtcblx0XHRcdFx0XHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblxuXHRcdFx0XHRcdFx0XHRpZiAocSA9PSBzLmVuZCAmJiBzLnJlYWQgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRxID0gMDtcblx0XHRcdFx0XHRcdFx0XHRtID0gcSA8IHMucmVhZCA/IHMucmVhZCAtIHEgLSAxIDogcy5lbmQgLSBxO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ciA9IFpfT0s7XG5cblx0XHRcdFx0XHRzLndpbmRvd1txKytdID0gLyogKGJ5dGUpICovbGl0O1xuXHRcdFx0XHRcdG0tLTtcblxuXHRcdFx0XHRcdG1vZGUgPSBTVEFSVDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBXQVNIOiAvLyBvOiBnb3QgZW9iLCBwb3NzaWJseSBtb3JlIG91dHB1dFxuXHRcdFx0XHRcdGlmIChrID4gNykgeyAvLyByZXR1cm4gdW51c2VkIGJ5dGUsIGlmIGFueVxuXHRcdFx0XHRcdFx0ayAtPSA4O1xuXHRcdFx0XHRcdFx0bisrO1xuXHRcdFx0XHRcdFx0cC0tOyAvLyBjYW4gYWx3YXlzIHJldHVybiBvbmVcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRyID0gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdHEgPSBzLndyaXRlO1xuXHRcdFx0XHRcdG0gPSBxIDwgcy5yZWFkID8gcy5yZWFkIC0gcSAtIDEgOiBzLmVuZCAtIHE7XG5cblx0XHRcdFx0XHRpZiAocy5yZWFkICE9IHMud3JpdGUpIHtcblx0XHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RlID0gRU5EO1xuXHRcdFx0XHRjYXNlIEVORDpcblx0XHRcdFx0XHRyID0gWl9TVFJFQU1fRU5EO1xuXHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXG5cdFx0XHRcdGNhc2UgQkFEQ09ERTogLy8geDogZ290IGVycm9yXG5cblx0XHRcdFx0XHRyID0gWl9EQVRBX0VSUk9SO1xuXG5cdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyID0gWl9TVFJFQU1fRVJST1I7XG5cblx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR0aGF0LmZyZWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFpGUkVFKHosIGMpO1xuXHRcdH07XG5cblx0fVxuXG5cdC8vIEluZkJsb2Nrc1xuXG5cdC8vIFRhYmxlIGZvciBkZWZsYXRlIGZyb20gUEtaSVAncyBhcHBub3RlLnR4dC5cblx0dmFyIGJvcmRlciA9IFsgLy8gT3JkZXIgb2YgdGhlIGJpdCBsZW5ndGggY29kZSBsZW5ndGhzXG5cdDE2LCAxNywgMTgsIDAsIDgsIDcsIDksIDYsIDEwLCA1LCAxMSwgNCwgMTIsIDMsIDEzLCAyLCAxNCwgMSwgMTUgXTtcblxuXHR2YXIgVFlQRSA9IDA7IC8vIGdldCB0eXBlIGJpdHMgKDMsIGluY2x1ZGluZyBlbmQgYml0KVxuXHR2YXIgTEVOUyA9IDE7IC8vIGdldCBsZW5ndGhzIGZvciBzdG9yZWRcblx0dmFyIFNUT1JFRCA9IDI7Ly8gcHJvY2Vzc2luZyBzdG9yZWQgYmxvY2tcblx0dmFyIFRBQkxFID0gMzsgLy8gZ2V0IHRhYmxlIGxlbmd0aHNcblx0dmFyIEJUUkVFID0gNDsgLy8gZ2V0IGJpdCBsZW5ndGhzIHRyZWUgZm9yIGEgZHluYW1pY1xuXHQvLyBibG9ja1xuXHR2YXIgRFRSRUUgPSA1OyAvLyBnZXQgbGVuZ3RoLCBkaXN0YW5jZSB0cmVlcyBmb3IgYVxuXHQvLyBkeW5hbWljIGJsb2NrXG5cdHZhciBDT0RFUyA9IDY7IC8vIHByb2Nlc3NpbmcgZml4ZWQgb3IgZHluYW1pYyBibG9ja1xuXHR2YXIgRFJZID0gNzsgLy8gb3V0cHV0IHJlbWFpbmluZyB3aW5kb3cgYnl0ZXNcblx0dmFyIERPTkVMT0NLUyA9IDg7IC8vIGZpbmlzaGVkIGxhc3QgYmxvY2ssIGRvbmVcblx0dmFyIEJBREJMT0NLUyA9IDk7IC8vIG90IGEgZGF0YSBlcnJvci0tc3R1Y2sgaGVyZVxuXG5cdGZ1bmN0aW9uIEluZkJsb2Nrcyh6LCB3KSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0dmFyIG1vZGUgPSBUWVBFOyAvLyBjdXJyZW50IGluZmxhdGVfYmxvY2sgbW9kZVxuXG5cdFx0dmFyIGxlZnQgPSAwOyAvLyBpZiBTVE9SRUQsIGJ5dGVzIGxlZnQgdG8gY29weVxuXG5cdFx0dmFyIHRhYmxlID0gMDsgLy8gdGFibGUgbGVuZ3RocyAoMTQgYml0cylcblx0XHR2YXIgaW5kZXggPSAwOyAvLyBpbmRleCBpbnRvIGJsZW5zIChvciBib3JkZXIpXG5cdFx0dmFyIGJsZW5zOyAvLyBiaXQgbGVuZ3RocyBvZiBjb2Rlc1xuXHRcdHZhciBiYiA9IFsgMCBdOyAvLyBiaXQgbGVuZ3RoIHRyZWUgZGVwdGhcblx0XHR2YXIgdGIgPSBbIDAgXTsgLy8gYml0IGxlbmd0aCBkZWNvZGluZyB0cmVlXG5cblx0XHR2YXIgY29kZXMgPSBuZXcgSW5mQ29kZXMoKTsgLy8gaWYgQ09ERVMsIGN1cnJlbnQgc3RhdGVcblxuXHRcdHZhciBsYXN0ID0gMDsgLy8gdHJ1ZSBpZiB0aGlzIGJsb2NrIGlzIHRoZSBsYXN0IGJsb2NrXG5cblx0XHR2YXIgaHVmdHMgPSBuZXcgSW50MzJBcnJheShNQU5ZICogMyk7IC8vIHNpbmdsZSBtYWxsb2MgZm9yIHRyZWUgc3BhY2Vcblx0XHR2YXIgY2hlY2sgPSAwOyAvLyBjaGVjayBvbiBvdXRwdXRcblx0XHR2YXIgaW5mdHJlZSA9IG5ldyBJbmZUcmVlKCk7XG5cblx0XHR0aGF0LmJpdGsgPSAwOyAvLyBiaXRzIGluIGJpdCBidWZmZXJcblx0XHR0aGF0LmJpdGIgPSAwOyAvLyBiaXQgYnVmZmVyXG5cdFx0dGhhdC53aW5kb3cgPSBuZXcgVWludDhBcnJheSh3KTsgLy8gc2xpZGluZyB3aW5kb3dcblx0XHR0aGF0LmVuZCA9IHc7IC8vIG9uZSBieXRlIGFmdGVyIHNsaWRpbmcgd2luZG93XG5cdFx0dGhhdC5yZWFkID0gMDsgLy8gd2luZG93IHJlYWQgcG9pbnRlclxuXHRcdHRoYXQud3JpdGUgPSAwOyAvLyB3aW5kb3cgd3JpdGUgcG9pbnRlclxuXG5cdFx0dGhhdC5yZXNldCA9IGZ1bmN0aW9uKHosIGMpIHtcblx0XHRcdGlmIChjKVxuXHRcdFx0XHRjWzBdID0gY2hlY2s7XG5cdFx0XHQvLyBpZiAobW9kZSA9PSBCVFJFRSB8fCBtb2RlID09IERUUkVFKSB7XG5cdFx0XHQvLyB9XG5cdFx0XHRpZiAobW9kZSA9PSBDT0RFUykge1xuXHRcdFx0XHRjb2Rlcy5mcmVlKHopO1xuXHRcdFx0fVxuXHRcdFx0bW9kZSA9IFRZUEU7XG5cdFx0XHR0aGF0LmJpdGsgPSAwO1xuXHRcdFx0dGhhdC5iaXRiID0gMDtcblx0XHRcdHRoYXQucmVhZCA9IHRoYXQud3JpdGUgPSAwO1xuXHRcdH07XG5cblx0XHR0aGF0LnJlc2V0KHosIG51bGwpO1xuXG5cdFx0Ly8gY29weSBhcyBtdWNoIGFzIHBvc3NpYmxlIGZyb20gdGhlIHNsaWRpbmcgd2luZG93IHRvIHRoZSBvdXRwdXQgYXJlYVxuXHRcdHRoYXQuaW5mbGF0ZV9mbHVzaCA9IGZ1bmN0aW9uKHosIHIpIHtcblx0XHRcdHZhciBuO1xuXHRcdFx0dmFyIHA7XG5cdFx0XHR2YXIgcTtcblxuXHRcdFx0Ly8gbG9jYWwgY29waWVzIG9mIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gcG9pbnRlcnNcblx0XHRcdHAgPSB6Lm5leHRfb3V0X2luZGV4O1xuXHRcdFx0cSA9IHRoYXQucmVhZDtcblxuXHRcdFx0Ly8gY29tcHV0ZSBudW1iZXIgb2YgYnl0ZXMgdG8gY29weSBhcyBmYXIgYXMgZW5kIG9mIHdpbmRvd1xuXHRcdFx0biA9IC8qIChpbnQpICovKChxIDw9IHRoYXQud3JpdGUgPyB0aGF0LndyaXRlIDogdGhhdC5lbmQpIC0gcSk7XG5cdFx0XHRpZiAobiA+IHouYXZhaWxfb3V0KVxuXHRcdFx0XHRuID0gei5hdmFpbF9vdXQ7XG5cdFx0XHRpZiAobiAhPT0gMCAmJiByID09IFpfQlVGX0VSUk9SKVxuXHRcdFx0XHRyID0gWl9PSztcblxuXHRcdFx0Ly8gdXBkYXRlIGNvdW50ZXJzXG5cdFx0XHR6LmF2YWlsX291dCAtPSBuO1xuXHRcdFx0ei50b3RhbF9vdXQgKz0gbjtcblxuXHRcdFx0Ly8gY29weSBhcyBmYXIgYXMgZW5kIG9mIHdpbmRvd1xuXHRcdFx0ei5uZXh0X291dC5zZXQodGhhdC53aW5kb3cuc3ViYXJyYXkocSwgcSArIG4pLCBwKTtcblx0XHRcdHAgKz0gbjtcblx0XHRcdHEgKz0gbjtcblxuXHRcdFx0Ly8gc2VlIGlmIG1vcmUgdG8gY29weSBhdCBiZWdpbm5pbmcgb2Ygd2luZG93XG5cdFx0XHRpZiAocSA9PSB0aGF0LmVuZCkge1xuXHRcdFx0XHQvLyB3cmFwIHBvaW50ZXJzXG5cdFx0XHRcdHEgPSAwO1xuXHRcdFx0XHRpZiAodGhhdC53cml0ZSA9PSB0aGF0LmVuZClcblx0XHRcdFx0XHR0aGF0LndyaXRlID0gMDtcblxuXHRcdFx0XHQvLyBjb21wdXRlIGJ5dGVzIHRvIGNvcHlcblx0XHRcdFx0biA9IHRoYXQud3JpdGUgLSBxO1xuXHRcdFx0XHRpZiAobiA+IHouYXZhaWxfb3V0KVxuXHRcdFx0XHRcdG4gPSB6LmF2YWlsX291dDtcblx0XHRcdFx0aWYgKG4gIT09IDAgJiYgciA9PSBaX0JVRl9FUlJPUilcblx0XHRcdFx0XHRyID0gWl9PSztcblxuXHRcdFx0XHQvLyB1cGRhdGUgY291bnRlcnNcblx0XHRcdFx0ei5hdmFpbF9vdXQgLT0gbjtcblx0XHRcdFx0ei50b3RhbF9vdXQgKz0gbjtcblxuXHRcdFx0XHQvLyBjb3B5XG5cdFx0XHRcdHoubmV4dF9vdXQuc2V0KHRoYXQud2luZG93LnN1YmFycmF5KHEsIHEgKyBuKSwgcCk7XG5cdFx0XHRcdHAgKz0gbjtcblx0XHRcdFx0cSArPSBuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB1cGRhdGUgcG9pbnRlcnNcblx0XHRcdHoubmV4dF9vdXRfaW5kZXggPSBwO1xuXHRcdFx0dGhhdC5yZWFkID0gcTtcblxuXHRcdFx0Ly8gZG9uZVxuXHRcdFx0cmV0dXJuIHI7XG5cdFx0fTtcblxuXHRcdHRoYXQucHJvYyA9IGZ1bmN0aW9uKHosIHIpIHtcblx0XHRcdHZhciB0OyAvLyB0ZW1wb3Jhcnkgc3RvcmFnZVxuXHRcdFx0dmFyIGI7IC8vIGJpdCBidWZmZXJcblx0XHRcdHZhciBrOyAvLyBiaXRzIGluIGJpdCBidWZmZXJcblx0XHRcdHZhciBwOyAvLyBpbnB1dCBkYXRhIHBvaW50ZXJcblx0XHRcdHZhciBuOyAvLyBieXRlcyBhdmFpbGFibGUgdGhlcmVcblx0XHRcdHZhciBxOyAvLyBvdXRwdXQgd2luZG93IHdyaXRlIHBvaW50ZXJcblx0XHRcdHZhciBtOyAvLyBieXRlcyB0byBlbmQgb2Ygd2luZG93IG9yIHJlYWQgcG9pbnRlclxuXG5cdFx0XHR2YXIgaTtcblxuXHRcdFx0Ly8gY29weSBpbnB1dC9vdXRwdXQgaW5mb3JtYXRpb24gdG8gbG9jYWxzIChVUERBVEUgbWFjcm8gcmVzdG9yZXMpXG5cdFx0XHQvLyB7XG5cdFx0XHRwID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0biA9IHouYXZhaWxfaW47XG5cdFx0XHRiID0gdGhhdC5iaXRiO1xuXHRcdFx0ayA9IHRoYXQuYml0aztcblx0XHRcdC8vIH1cblx0XHRcdC8vIHtcblx0XHRcdHEgPSB0aGF0LndyaXRlO1xuXHRcdFx0bSA9IC8qIChpbnQpICovKHEgPCB0aGF0LnJlYWQgPyB0aGF0LnJlYWQgLSBxIC0gMSA6IHRoYXQuZW5kIC0gcSk7XG5cdFx0XHQvLyB9XG5cblx0XHRcdC8vIHByb2Nlc3MgaW5wdXQgYmFzZWQgb24gY3VycmVudCBzdGF0ZVxuXHRcdFx0Ly8gREVCVUcgZHRyZWVcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlIFRZUEU6XG5cblx0XHRcdFx0XHR3aGlsZSAoayA8ICgzKSkge1xuXHRcdFx0XHRcdFx0aWYgKG4gIT09IDApIHtcblx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0ID0gLyogKGludCkgKi8oYiAmIDcpO1xuXHRcdFx0XHRcdGxhc3QgPSB0ICYgMTtcblxuXHRcdFx0XHRcdHN3aXRjaCAodCA+Pj4gMSkge1xuXHRcdFx0XHRcdGNhc2UgMDogLy8gc3RvcmVkXG5cdFx0XHRcdFx0XHQvLyB7XG5cdFx0XHRcdFx0XHRiID4+Pj0gKDMpO1xuXHRcdFx0XHRcdFx0ayAtPSAoMyk7XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0XHR0ID0gayAmIDc7IC8vIGdvIHRvIGJ5dGUgYm91bmRhcnlcblxuXHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0YiA+Pj49ICh0KTtcblx0XHRcdFx0XHRcdGsgLT0gKHQpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0bW9kZSA9IExFTlM7IC8vIGdldCBsZW5ndGggb2Ygc3RvcmVkIGJsb2NrXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDE6IC8vIGZpeGVkXG5cdFx0XHRcdFx0XHQvLyB7XG5cdFx0XHRcdFx0XHR2YXIgYmwgPSBbXTsgLy8gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRcdFx0dmFyIGJkID0gW107IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHRcdHZhciB0bCA9IFsgW10gXTsgLy8gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRcdFx0dmFyIHRkID0gWyBbXSBdOyAvLyBuZXcgQXJyYXkoMSk7XG5cblx0XHRcdFx0XHRcdEluZlRyZWUuaW5mbGF0ZV90cmVlc19maXhlZChibCwgYmQsIHRsLCB0ZCk7XG5cdFx0XHRcdFx0XHRjb2Rlcy5pbml0KGJsWzBdLCBiZFswXSwgdGxbMF0sIDAsIHRkWzBdLCAwKTtcblx0XHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0YiA+Pj49ICgzKTtcblx0XHRcdFx0XHRcdGsgLT0gKDMpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0XHRtb2RlID0gQ09ERVM7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDI6IC8vIGR5bmFtaWNcblxuXHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0YiA+Pj49ICgzKTtcblx0XHRcdFx0XHRcdGsgLT0gKDMpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0XHRtb2RlID0gVEFCTEU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM6IC8vIGlsbGVnYWxcblxuXHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0YiA+Pj49ICgzKTtcblx0XHRcdFx0XHRcdGsgLT0gKDMpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0bW9kZSA9IEJBREJMT0NLUztcblx0XHRcdFx0XHRcdHoubXNnID0gXCJpbnZhbGlkIGJsb2NrIHR5cGVcIjtcblx0XHRcdFx0XHRcdHIgPSBaX0RBVEFfRVJST1I7XG5cblx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBMRU5TOlxuXG5cdFx0XHRcdFx0d2hpbGUgKGsgPCAoMzIpKSB7XG5cdFx0XHRcdFx0XHRpZiAobiAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRyID0gWl9PSztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCgoKH5iKSA+Pj4gMTYpICYgMHhmZmZmKSAhPSAoYiAmIDB4ZmZmZikpIHtcblx0XHRcdFx0XHRcdG1vZGUgPSBCQURCTE9DS1M7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwiaW52YWxpZCBzdG9yZWQgYmxvY2sgbGVuZ3Roc1wiO1xuXHRcdFx0XHRcdFx0ciA9IFpfREFUQV9FUlJPUjtcblxuXHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxlZnQgPSAoYiAmIDB4ZmZmZik7XG5cdFx0XHRcdFx0YiA9IGsgPSAwOyAvLyBkdW1wIGJpdHNcblx0XHRcdFx0XHRtb2RlID0gbGVmdCAhPT0gMCA/IFNUT1JFRCA6IChsYXN0ICE9PSAwID8gRFJZIDogVFlQRSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU1RPUkVEOlxuXHRcdFx0XHRcdGlmIChuID09PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0aWYgKHEgPT0gdGhhdC5lbmQgJiYgdGhhdC5yZWFkICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHEgPSAwO1xuXHRcdFx0XHRcdFx0XHRtID0gLyogKGludCkgKi8ocSA8IHRoYXQucmVhZCA/IHRoYXQucmVhZCAtIHEgLSAxIDogdGhhdC5lbmQgLSBxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRyID0gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHRxID0gdGhhdC53cml0ZTtcblx0XHRcdFx0XHRcdFx0bSA9IC8qIChpbnQpICovKHEgPCB0aGF0LnJlYWQgPyB0aGF0LnJlYWQgLSBxIC0gMSA6IHRoYXQuZW5kIC0gcSk7XG5cdFx0XHRcdFx0XHRcdGlmIChxID09IHRoYXQuZW5kICYmIHRoYXQucmVhZCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHEgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdG0gPSAvKiAoaW50KSAqLyhxIDwgdGhhdC5yZWFkID8gdGhhdC5yZWFkIC0gcSAtIDEgOiB0aGF0LmVuZCAtIHEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ciA9IFpfT0s7XG5cblx0XHRcdFx0XHR0ID0gbGVmdDtcblx0XHRcdFx0XHRpZiAodCA+IG4pXG5cdFx0XHRcdFx0XHR0ID0gbjtcblx0XHRcdFx0XHRpZiAodCA+IG0pXG5cdFx0XHRcdFx0XHR0ID0gbTtcblx0XHRcdFx0XHR0aGF0LndpbmRvdy5zZXQoei5yZWFkX2J1ZihwLCB0KSwgcSk7XG5cdFx0XHRcdFx0cCArPSB0O1xuXHRcdFx0XHRcdG4gLT0gdDtcblx0XHRcdFx0XHRxICs9IHQ7XG5cdFx0XHRcdFx0bSAtPSB0O1xuXHRcdFx0XHRcdGlmICgobGVmdCAtPSB0KSAhPT0gMClcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdG1vZGUgPSBsYXN0ICE9PSAwID8gRFJZIDogVFlQRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBUQUJMRTpcblxuXHRcdFx0XHRcdHdoaWxlIChrIDwgKDE0KSkge1xuXHRcdFx0XHRcdFx0aWYgKG4gIT09IDApIHtcblx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGFibGUgPSB0ID0gKGIgJiAweDNmZmYpO1xuXHRcdFx0XHRcdGlmICgodCAmIDB4MWYpID4gMjkgfHwgKCh0ID4+IDUpICYgMHgxZikgPiAyOSkge1xuXHRcdFx0XHRcdFx0bW9kZSA9IEJBREJMT0NLUztcblx0XHRcdFx0XHRcdHoubXNnID0gXCJ0b28gbWFueSBsZW5ndGggb3IgZGlzdGFuY2Ugc3ltYm9sc1wiO1xuXHRcdFx0XHRcdFx0ciA9IFpfREFUQV9FUlJPUjtcblxuXHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHQgPSAyNTggKyAodCAmIDB4MWYpICsgKCh0ID4+IDUpICYgMHgxZik7XG5cdFx0XHRcdFx0aWYgKCFibGVucyB8fCBibGVucy5sZW5ndGggPCB0KSB7XG5cdFx0XHRcdFx0XHRibGVucyA9IFtdOyAvLyBuZXcgQXJyYXkodCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0OyBpKyspIHtcblx0XHRcdFx0XHRcdFx0YmxlbnNbaV0gPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHRiID4+Pj0gKDE0KTtcblx0XHRcdFx0XHRrIC09ICgxNCk7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdG1vZGUgPSBCVFJFRTtcblx0XHRcdFx0Y2FzZSBCVFJFRTpcblx0XHRcdFx0XHR3aGlsZSAoaW5kZXggPCA0ICsgKHRhYmxlID4+PiAxMCkpIHtcblx0XHRcdFx0XHRcdHdoaWxlIChrIDwgKDMpKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChuICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRibGVuc1tib3JkZXJbaW5kZXgrK11dID0gYiAmIDc7XG5cblx0XHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHRcdGIgPj4+PSAoMyk7XG5cdFx0XHRcdFx0XHRrIC09ICgzKTtcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aGlsZSAoaW5kZXggPCAxOSkge1xuXHRcdFx0XHRcdFx0YmxlbnNbYm9yZGVyW2luZGV4KytdXSA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YmJbMF0gPSA3O1xuXHRcdFx0XHRcdHQgPSBpbmZ0cmVlLmluZmxhdGVfdHJlZXNfYml0cyhibGVucywgYmIsIHRiLCBodWZ0cywgeik7XG5cdFx0XHRcdFx0aWYgKHQgIT0gWl9PSykge1xuXHRcdFx0XHRcdFx0ciA9IHQ7XG5cdFx0XHRcdFx0XHRpZiAociA9PSBaX0RBVEFfRVJST1IpIHtcblx0XHRcdFx0XHRcdFx0YmxlbnMgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRtb2RlID0gQkFEQkxPQ0tTO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbmRleCA9IDA7XG5cdFx0XHRcdFx0bW9kZSA9IERUUkVFO1xuXHRcdFx0XHRjYXNlIERUUkVFOlxuXHRcdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0XHR0ID0gdGFibGU7XG5cdFx0XHRcdFx0XHRpZiAoIShpbmRleCA8IDI1OCArICh0ICYgMHgxZikgKyAoKHQgPj4gNSkgJiAweDFmKSkpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBqLCBjO1xuXG5cdFx0XHRcdFx0XHR0ID0gYmJbMF07XG5cblx0XHRcdFx0XHRcdHdoaWxlIChrIDwgKHQpKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChuICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBpZiAodGJbMF0gPT0gLTEpIHtcblx0XHRcdFx0XHRcdC8vIFN5c3RlbS5lcnIucHJpbnRsbihcIm51bGwuLi5cIik7XG5cdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdHQgPSBodWZ0c1sodGJbMF0gKyAoYiAmIGluZmxhdGVfbWFza1t0XSkpICogMyArIDFdO1xuXHRcdFx0XHRcdFx0YyA9IGh1ZnRzWyh0YlswXSArIChiICYgaW5mbGF0ZV9tYXNrW3RdKSkgKiAzICsgMl07XG5cblx0XHRcdFx0XHRcdGlmIChjIDwgMTYpIHtcblx0XHRcdFx0XHRcdFx0YiA+Pj49ICh0KTtcblx0XHRcdFx0XHRcdFx0ayAtPSAodCk7XG5cdFx0XHRcdFx0XHRcdGJsZW5zW2luZGV4KytdID0gYztcblx0XHRcdFx0XHRcdH0gZWxzZSB7IC8vIGMgPT0gMTYuLjE4XG5cdFx0XHRcdFx0XHRcdGkgPSBjID09IDE4ID8gNyA6IGMgLSAxNDtcblx0XHRcdFx0XHRcdFx0aiA9IGMgPT0gMTggPyAxMSA6IDM7XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKGsgPCAodCArIGkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG4gIT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGIgPj4+PSAodCk7XG5cdFx0XHRcdFx0XHRcdGsgLT0gKHQpO1xuXG5cdFx0XHRcdFx0XHRcdGogKz0gKGIgJiBpbmZsYXRlX21hc2tbaV0pO1xuXG5cdFx0XHRcdFx0XHRcdGIgPj4+PSAoaSk7XG5cdFx0XHRcdFx0XHRcdGsgLT0gKGkpO1xuXG5cdFx0XHRcdFx0XHRcdGkgPSBpbmRleDtcblx0XHRcdFx0XHRcdFx0dCA9IHRhYmxlO1xuXHRcdFx0XHRcdFx0XHRpZiAoaSArIGogPiAyNTggKyAodCAmIDB4MWYpICsgKCh0ID4+IDUpICYgMHgxZikgfHwgKGMgPT0gMTYgJiYgaSA8IDEpKSB7XG5cdFx0XHRcdFx0XHRcdFx0YmxlbnMgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdG1vZGUgPSBCQURCTE9DS1M7XG5cdFx0XHRcdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIjtcblx0XHRcdFx0XHRcdFx0XHRyID0gWl9EQVRBX0VSUk9SO1xuXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjID0gYyA9PSAxNiA/IGJsZW5zW2kgLSAxXSA6IDA7XG5cdFx0XHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdFx0XHRibGVuc1tpKytdID0gYztcblx0XHRcdFx0XHRcdFx0fSB3aGlsZSAoLS1qICE9PSAwKTtcblx0XHRcdFx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRiWzBdID0gLTE7XG5cdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdHZhciBibF8gPSBbXTsgLy8gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRcdHZhciBiZF8gPSBbXTsgLy8gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRcdHZhciB0bF8gPSBbXTsgLy8gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRcdHZhciB0ZF8gPSBbXTsgLy8gbmV3IEFycmF5KDEpO1xuXHRcdFx0XHRcdGJsX1swXSA9IDk7IC8vIG11c3QgYmUgPD0gOSBmb3IgbG9va2FoZWFkIGFzc3VtcHRpb25zXG5cdFx0XHRcdFx0YmRfWzBdID0gNjsgLy8gbXVzdCBiZSA8PSA5IGZvciBsb29rYWhlYWQgYXNzdW1wdGlvbnNcblxuXHRcdFx0XHRcdHQgPSB0YWJsZTtcblx0XHRcdFx0XHR0ID0gaW5mdHJlZS5pbmZsYXRlX3RyZWVzX2R5bmFtaWMoMjU3ICsgKHQgJiAweDFmKSwgMSArICgodCA+PiA1KSAmIDB4MWYpLCBibGVucywgYmxfLCBiZF8sIHRsXywgdGRfLCBodWZ0cywgeik7XG5cblx0XHRcdFx0XHRpZiAodCAhPSBaX09LKSB7XG5cdFx0XHRcdFx0XHRpZiAodCA9PSBaX0RBVEFfRVJST1IpIHtcblx0XHRcdFx0XHRcdFx0YmxlbnMgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRtb2RlID0gQkFEQkxPQ0tTO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ciA9IHQ7XG5cblx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb2Rlcy5pbml0KGJsX1swXSwgYmRfWzBdLCBodWZ0cywgdGxfWzBdLCBodWZ0cywgdGRfWzBdKTtcblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0bW9kZSA9IENPREVTO1xuXHRcdFx0XHRjYXNlIENPREVTOlxuXHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblxuXHRcdFx0XHRcdGlmICgociA9IGNvZGVzLnByb2ModGhhdCwgeiwgcikpICE9IFpfU1RSRUFNX0VORCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0Y29kZXMuZnJlZSh6KTtcblxuXHRcdFx0XHRcdHAgPSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0biA9IHouYXZhaWxfaW47XG5cdFx0XHRcdFx0YiA9IHRoYXQuYml0Yjtcblx0XHRcdFx0XHRrID0gdGhhdC5iaXRrO1xuXHRcdFx0XHRcdHEgPSB0aGF0LndyaXRlO1xuXHRcdFx0XHRcdG0gPSAvKiAoaW50KSAqLyhxIDwgdGhhdC5yZWFkID8gdGhhdC5yZWFkIC0gcSAtIDEgOiB0aGF0LmVuZCAtIHEpO1xuXG5cdFx0XHRcdFx0aWYgKGxhc3QgPT09IDApIHtcblx0XHRcdFx0XHRcdG1vZGUgPSBUWVBFO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGUgPSBEUlk7XG5cdFx0XHRcdGNhc2UgRFJZOlxuXHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdHIgPSB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0cSA9IHRoYXQud3JpdGU7XG5cdFx0XHRcdFx0bSA9IC8qIChpbnQpICovKHEgPCB0aGF0LnJlYWQgPyB0aGF0LnJlYWQgLSBxIC0gMSA6IHRoYXQuZW5kIC0gcSk7XG5cdFx0XHRcdFx0aWYgKHRoYXQucmVhZCAhPSB0aGF0LndyaXRlKSB7XG5cdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kZSA9IERPTkVMT0NLUztcblx0XHRcdFx0Y2FzZSBET05FTE9DS1M6XG5cdFx0XHRcdFx0ciA9IFpfU1RSRUFNX0VORDtcblxuXHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRjYXNlIEJBREJMT0NLUzpcblx0XHRcdFx0XHRyID0gWl9EQVRBX0VSUk9SO1xuXG5cdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyID0gWl9TVFJFQU1fRVJST1I7XG5cblx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR0aGF0LmZyZWUgPSBmdW5jdGlvbih6KSB7XG5cdFx0XHR0aGF0LnJlc2V0KHosIG51bGwpO1xuXHRcdFx0dGhhdC53aW5kb3cgPSBudWxsO1xuXHRcdFx0aHVmdHMgPSBudWxsO1xuXHRcdFx0Ly8gWkZSRUUoeiwgcyk7XG5cdFx0fTtcblxuXHRcdHRoYXQuc2V0X2RpY3Rpb25hcnkgPSBmdW5jdGlvbihkLCBzdGFydCwgbikge1xuXHRcdFx0dGhhdC53aW5kb3cuc2V0KGQuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbiksIDApO1xuXHRcdFx0dGhhdC5yZWFkID0gdGhhdC53cml0ZSA9IG47XG5cdFx0fTtcblxuXHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBpbmZsYXRlIGlzIGN1cnJlbnRseSBhdCB0aGUgZW5kIG9mIGEgYmxvY2sgZ2VuZXJhdGVkXG5cdFx0Ly8gYnkgWl9TWU5DX0ZMVVNIIG9yIFpfRlVMTF9GTFVTSC5cblx0XHR0aGF0LnN5bmNfcG9pbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBtb2RlID09IExFTlMgPyAxIDogMDtcblx0XHR9O1xuXG5cdH1cblxuXHQvLyBJbmZsYXRlXG5cblx0Ly8gcHJlc2V0IGRpY3Rpb25hcnkgZmxhZyBpbiB6bGliIGhlYWRlclxuXHR2YXIgUFJFU0VUX0RJQ1QgPSAweDIwO1xuXG5cdHZhciBaX0RFRkxBVEVEID0gODtcblxuXHR2YXIgTUVUSE9EID0gMDsgLy8gd2FpdGluZyBmb3IgbWV0aG9kIGJ5dGVcblx0dmFyIEZMQUcgPSAxOyAvLyB3YWl0aW5nIGZvciBmbGFnIGJ5dGVcblx0dmFyIERJQ1Q0ID0gMjsgLy8gZm91ciBkaWN0aW9uYXJ5IGNoZWNrIGJ5dGVzIHRvIGdvXG5cdHZhciBESUNUMyA9IDM7IC8vIHRocmVlIGRpY3Rpb25hcnkgY2hlY2sgYnl0ZXMgdG8gZ29cblx0dmFyIERJQ1QyID0gNDsgLy8gdHdvIGRpY3Rpb25hcnkgY2hlY2sgYnl0ZXMgdG8gZ29cblx0dmFyIERJQ1QxID0gNTsgLy8gb25lIGRpY3Rpb25hcnkgY2hlY2sgYnl0ZSB0byBnb1xuXHR2YXIgRElDVDAgPSA2OyAvLyB3YWl0aW5nIGZvciBpbmZsYXRlU2V0RGljdGlvbmFyeVxuXHR2YXIgQkxPQ0tTID0gNzsgLy8gZGVjb21wcmVzc2luZyBibG9ja3Ncblx0dmFyIERPTkUgPSAxMjsgLy8gZmluaXNoZWQgY2hlY2ssIGRvbmVcblx0dmFyIEJBRCA9IDEzOyAvLyBnb3QgYW4gZXJyb3ItLXN0YXkgaGVyZVxuXG5cdHZhciBtYXJrID0gWyAwLCAwLCAweGZmLCAweGZmIF07XG5cblx0ZnVuY3Rpb24gSW5mbGF0ZSgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR0aGF0Lm1vZGUgPSAwOyAvLyBjdXJyZW50IGluZmxhdGUgbW9kZVxuXG5cdFx0Ly8gbW9kZSBkZXBlbmRlbnQgaW5mb3JtYXRpb25cblx0XHR0aGF0Lm1ldGhvZCA9IDA7IC8vIGlmIEZMQUdTLCBtZXRob2QgYnl0ZVxuXG5cdFx0Ly8gaWYgQ0hFQ0ssIGNoZWNrIHZhbHVlcyB0byBjb21wYXJlXG5cdFx0dGhhdC53YXMgPSBbIDAgXTsgLy8gbmV3IEFycmF5KDEpOyAvLyBjb21wdXRlZCBjaGVjayB2YWx1ZVxuXHRcdHRoYXQubmVlZCA9IDA7IC8vIHN0cmVhbSBjaGVjayB2YWx1ZVxuXG5cdFx0Ly8gaWYgQkFELCBpbmZsYXRlU3luYydzIG1hcmtlciBieXRlcyBjb3VudFxuXHRcdHRoYXQubWFya2VyID0gMDtcblxuXHRcdC8vIG1vZGUgaW5kZXBlbmRlbnQgaW5mb3JtYXRpb25cblx0XHR0aGF0LndiaXRzID0gMDsgLy8gbG9nMih3aW5kb3cgc2l6ZSkgKDguLjE1LCBkZWZhdWx0cyB0byAxNSlcblxuXHRcdC8vIHRoaXMuYmxvY2tzOyAvLyBjdXJyZW50IGluZmxhdGVfYmxvY2tzIHN0YXRlXG5cblx0XHRmdW5jdGlvbiBpbmZsYXRlUmVzZXQoeikge1xuXHRcdFx0aWYgKCF6IHx8ICF6LmlzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXG5cdFx0XHR6LnRvdGFsX2luID0gei50b3RhbF9vdXQgPSAwO1xuXHRcdFx0ei5tc2cgPSBudWxsO1xuXHRcdFx0ei5pc3RhdGUubW9kZSA9IEJMT0NLUztcblx0XHRcdHouaXN0YXRlLmJsb2Nrcy5yZXNldCh6LCBudWxsKTtcblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH1cblxuXHRcdHRoYXQuaW5mbGF0ZUVuZCA9IGZ1bmN0aW9uKHopIHtcblx0XHRcdGlmICh0aGF0LmJsb2Nrcylcblx0XHRcdFx0dGhhdC5ibG9ja3MuZnJlZSh6KTtcblx0XHRcdHRoYXQuYmxvY2tzID0gbnVsbDtcblx0XHRcdC8vIFpGUkVFKHosIHotPnN0YXRlKTtcblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH07XG5cblx0XHR0aGF0LmluZmxhdGVJbml0ID0gZnVuY3Rpb24oeiwgdykge1xuXHRcdFx0ei5tc2cgPSBudWxsO1xuXHRcdFx0dGhhdC5ibG9ja3MgPSBudWxsO1xuXG5cdFx0XHQvLyBzZXQgd2luZG93IHNpemVcblx0XHRcdGlmICh3IDwgOCB8fCB3ID4gMTUpIHtcblx0XHRcdFx0dGhhdC5pbmZsYXRlRW5kKHopO1xuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHR9XG5cdFx0XHR0aGF0LndiaXRzID0gdztcblxuXHRcdFx0ei5pc3RhdGUuYmxvY2tzID0gbmV3IEluZkJsb2Nrcyh6LCAxIDw8IHcpO1xuXG5cdFx0XHQvLyByZXNldCBzdGF0ZVxuXHRcdFx0aW5mbGF0ZVJlc2V0KHopO1xuXHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0fTtcblxuXHRcdHRoYXQuaW5mbGF0ZSA9IGZ1bmN0aW9uKHosIGYpIHtcblx0XHRcdHZhciByO1xuXHRcdFx0dmFyIGI7XG5cblx0XHRcdGlmICgheiB8fCAhei5pc3RhdGUgfHwgIXoubmV4dF9pbilcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0ZiA9IGYgPT0gWl9GSU5JU0ggPyBaX0JVRl9FUlJPUiA6IFpfT0s7XG5cdFx0XHRyID0gWl9CVUZfRVJST1I7XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHQvLyBTeXN0ZW0ub3V0LnByaW50bG4oXCJtb2RlOiBcIit6LmlzdGF0ZS5tb2RlKTtcblx0XHRcdFx0c3dpdGNoICh6LmlzdGF0ZS5tb2RlKSB7XG5cdFx0XHRcdGNhc2UgTUVUSE9EOlxuXG5cdFx0XHRcdFx0aWYgKHouYXZhaWxfaW4gPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRyID0gZjtcblxuXHRcdFx0XHRcdHouYXZhaWxfaW4tLTtcblx0XHRcdFx0XHR6LnRvdGFsX2luKys7XG5cdFx0XHRcdFx0aWYgKCgoei5pc3RhdGUubWV0aG9kID0gei5yZWFkX2J5dGUoei5uZXh0X2luX2luZGV4KyspKSAmIDB4ZikgIT0gWl9ERUZMQVRFRCkge1xuXHRcdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IEJBRDtcblx0XHRcdFx0XHRcdHoubXNnID0gXCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0ei5pc3RhdGUubWFya2VyID0gNTsgLy8gY2FuJ3QgdHJ5IGluZmxhdGVTeW5jXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCh6LmlzdGF0ZS5tZXRob2QgPj4gNCkgKyA4ID4gei5pc3RhdGUud2JpdHMpIHtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBCQUQ7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwiaW52YWxpZCB3aW5kb3cgc2l6ZVwiO1xuXHRcdFx0XHRcdFx0ei5pc3RhdGUubWFya2VyID0gNTsgLy8gY2FuJ3QgdHJ5IGluZmxhdGVTeW5jXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IEZMQUc7XG5cdFx0XHRcdGNhc2UgRkxBRzpcblxuXHRcdFx0XHRcdGlmICh6LmF2YWlsX2luID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0ciA9IGY7XG5cblx0XHRcdFx0XHR6LmF2YWlsX2luLS07XG5cdFx0XHRcdFx0ei50b3RhbF9pbisrO1xuXHRcdFx0XHRcdGIgPSAoei5yZWFkX2J5dGUoei5uZXh0X2luX2luZGV4KyspKSAmIDB4ZmY7XG5cblx0XHRcdFx0XHRpZiAoKCgoei5pc3RhdGUubWV0aG9kIDw8IDgpICsgYikgJSAzMSkgIT09IDApIHtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBCQUQ7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwiaW5jb3JyZWN0IGhlYWRlciBjaGVja1wiO1xuXHRcdFx0XHRcdFx0ei5pc3RhdGUubWFya2VyID0gNTsgLy8gY2FuJ3QgdHJ5IGluZmxhdGVTeW5jXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoKGIgJiBQUkVTRVRfRElDVCkgPT09IDApIHtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBCTE9DS1M7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IERJQ1Q0O1xuXHRcdFx0XHRjYXNlIERJQ1Q0OlxuXG5cdFx0XHRcdFx0aWYgKHouYXZhaWxfaW4gPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRyID0gZjtcblxuXHRcdFx0XHRcdHouYXZhaWxfaW4tLTtcblx0XHRcdFx0XHR6LnRvdGFsX2luKys7XG5cdFx0XHRcdFx0ei5pc3RhdGUubmVlZCA9ICgoei5yZWFkX2J5dGUoei5uZXh0X2luX2luZGV4KyspICYgMHhmZikgPDwgMjQpICYgMHhmZjAwMDAwMDtcblx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gRElDVDM7XG5cdFx0XHRcdGNhc2UgRElDVDM6XG5cblx0XHRcdFx0XHRpZiAoei5hdmFpbF9pbiA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiByO1xuXHRcdFx0XHRcdHIgPSBmO1xuXG5cdFx0XHRcdFx0ei5hdmFpbF9pbi0tO1xuXHRcdFx0XHRcdHoudG90YWxfaW4rKztcblx0XHRcdFx0XHR6LmlzdGF0ZS5uZWVkICs9ICgoei5yZWFkX2J5dGUoei5uZXh0X2luX2luZGV4KyspICYgMHhmZikgPDwgMTYpICYgMHhmZjAwMDA7XG5cdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IERJQ1QyO1xuXHRcdFx0XHRjYXNlIERJQ1QyOlxuXG5cdFx0XHRcdFx0aWYgKHouYXZhaWxfaW4gPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRyID0gZjtcblxuXHRcdFx0XHRcdHouYXZhaWxfaW4tLTtcblx0XHRcdFx0XHR6LnRvdGFsX2luKys7XG5cdFx0XHRcdFx0ei5pc3RhdGUubmVlZCArPSAoKHoucmVhZF9ieXRlKHoubmV4dF9pbl9pbmRleCsrKSAmIDB4ZmYpIDw8IDgpICYgMHhmZjAwO1xuXHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBESUNUMTtcblx0XHRcdFx0Y2FzZSBESUNUMTpcblxuXHRcdFx0XHRcdGlmICh6LmF2YWlsX2luID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0ciA9IGY7XG5cblx0XHRcdFx0XHR6LmF2YWlsX2luLS07XG5cdFx0XHRcdFx0ei50b3RhbF9pbisrO1xuXHRcdFx0XHRcdHouaXN0YXRlLm5lZWQgKz0gKHoucmVhZF9ieXRlKHoubmV4dF9pbl9pbmRleCsrKSAmIDB4ZmYpO1xuXHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBESUNUMDtcblx0XHRcdFx0XHRyZXR1cm4gWl9ORUVEX0RJQ1Q7XG5cdFx0XHRcdGNhc2UgRElDVDA6XG5cdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IEJBRDtcblx0XHRcdFx0XHR6Lm1zZyA9IFwibmVlZCBkaWN0aW9uYXJ5XCI7XG5cdFx0XHRcdFx0ei5pc3RhdGUubWFya2VyID0gMDsgLy8gY2FuIHRyeSBpbmZsYXRlU3luY1xuXHRcdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdFx0Y2FzZSBCTE9DS1M6XG5cblx0XHRcdFx0XHRyID0gei5pc3RhdGUuYmxvY2tzLnByb2Moeiwgcik7XG5cdFx0XHRcdFx0aWYgKHIgPT0gWl9EQVRBX0VSUk9SKSB7XG5cdFx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gQkFEO1xuXHRcdFx0XHRcdFx0ei5pc3RhdGUubWFya2VyID0gMDsgLy8gY2FuIHRyeSBpbmZsYXRlU3luY1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChyID09IFpfT0spIHtcblx0XHRcdFx0XHRcdHIgPSBmO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAociAhPSBaX1NUUkVBTV9FTkQpIHtcblx0XHRcdFx0XHRcdHJldHVybiByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyID0gZjtcblx0XHRcdFx0XHR6LmlzdGF0ZS5ibG9ja3MucmVzZXQoeiwgei5pc3RhdGUud2FzKTtcblx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gRE9ORTtcblx0XHRcdFx0Y2FzZSBET05FOlxuXHRcdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FTkQ7XG5cdFx0XHRcdGNhc2UgQkFEOlxuXHRcdFx0XHRcdHJldHVybiBaX0RBVEFfRVJST1I7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHRoYXQuaW5mbGF0ZVNldERpY3Rpb25hcnkgPSBmdW5jdGlvbih6LCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAwO1xuXHRcdFx0dmFyIGxlbmd0aCA9IGRpY3RMZW5ndGg7XG5cdFx0XHRpZiAoIXogfHwgIXouaXN0YXRlIHx8IHouaXN0YXRlLm1vZGUgIT0gRElDVDApXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblxuXHRcdFx0aWYgKGxlbmd0aCA+PSAoMSA8PCB6LmlzdGF0ZS53Yml0cykpIHtcblx0XHRcdFx0bGVuZ3RoID0gKDEgPDwgei5pc3RhdGUud2JpdHMpIC0gMTtcblx0XHRcdFx0aW5kZXggPSBkaWN0TGVuZ3RoIC0gbGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0ei5pc3RhdGUuYmxvY2tzLnNldF9kaWN0aW9uYXJ5KGRpY3Rpb25hcnksIGluZGV4LCBsZW5ndGgpO1xuXHRcdFx0ei5pc3RhdGUubW9kZSA9IEJMT0NLUztcblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH07XG5cblx0XHR0aGF0LmluZmxhdGVTeW5jID0gZnVuY3Rpb24oeikge1xuXHRcdFx0dmFyIG47IC8vIG51bWJlciBvZiBieXRlcyB0byBsb29rIGF0XG5cdFx0XHR2YXIgcDsgLy8gcG9pbnRlciB0byBieXRlc1xuXHRcdFx0dmFyIG07IC8vIG51bWJlciBvZiBtYXJrZXIgYnl0ZXMgZm91bmQgaW4gYSByb3dcblx0XHRcdHZhciByLCB3OyAvLyB0ZW1wb3JhcmllcyB0byBzYXZlIHRvdGFsX2luIGFuZCB0b3RhbF9vdXRcblxuXHRcdFx0Ly8gc2V0IHVwXG5cdFx0XHRpZiAoIXogfHwgIXouaXN0YXRlKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHRpZiAoei5pc3RhdGUubW9kZSAhPSBCQUQpIHtcblx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IEJBRDtcblx0XHRcdFx0ei5pc3RhdGUubWFya2VyID0gMDtcblx0XHRcdH1cblx0XHRcdGlmICgobiA9IHouYXZhaWxfaW4pID09PSAwKVxuXHRcdFx0XHRyZXR1cm4gWl9CVUZfRVJST1I7XG5cdFx0XHRwID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0bSA9IHouaXN0YXRlLm1hcmtlcjtcblxuXHRcdFx0Ly8gc2VhcmNoXG5cdFx0XHR3aGlsZSAobiAhPT0gMCAmJiBtIDwgNCkge1xuXHRcdFx0XHRpZiAoei5yZWFkX2J5dGUocCkgPT0gbWFya1ttXSkge1xuXHRcdFx0XHRcdG0rKztcblx0XHRcdFx0fSBlbHNlIGlmICh6LnJlYWRfYnl0ZShwKSAhPT0gMCkge1xuXHRcdFx0XHRcdG0gPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG0gPSA0IC0gbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwKys7XG5cdFx0XHRcdG4tLTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVzdG9yZVxuXHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0ei5pc3RhdGUubWFya2VyID0gbTtcblxuXHRcdFx0Ly8gcmV0dXJuIG5vIGpveSBvciBzZXQgdXAgdG8gcmVzdGFydCBvbiBhIG5ldyBibG9ja1xuXHRcdFx0aWYgKG0gIT0gNCkge1xuXHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SO1xuXHRcdFx0fVxuXHRcdFx0ciA9IHoudG90YWxfaW47XG5cdFx0XHR3ID0gei50b3RhbF9vdXQ7XG5cdFx0XHRpbmZsYXRlUmVzZXQoeik7XG5cdFx0XHR6LnRvdGFsX2luID0gcjtcblx0XHRcdHoudG90YWxfb3V0ID0gdztcblx0XHRcdHouaXN0YXRlLm1vZGUgPSBCTE9DS1M7XG5cdFx0XHRyZXR1cm4gWl9PSztcblx0XHR9O1xuXG5cdFx0Ly8gUmV0dXJucyB0cnVlIGlmIGluZmxhdGUgaXMgY3VycmVudGx5IGF0IHRoZSBlbmQgb2YgYSBibG9jayBnZW5lcmF0ZWRcblx0XHQvLyBieSBaX1NZTkNfRkxVU0ggb3IgWl9GVUxMX0ZMVVNILiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYnkgb25lIFBQUFxuXHRcdC8vIGltcGxlbWVudGF0aW9uIHRvIHByb3ZpZGUgYW4gYWRkaXRpb25hbCBzYWZldHkgY2hlY2suIFBQUCB1c2VzXG5cdFx0Ly8gWl9TWU5DX0ZMVVNIXG5cdFx0Ly8gYnV0IHJlbW92ZXMgdGhlIGxlbmd0aCBieXRlcyBvZiB0aGUgcmVzdWx0aW5nIGVtcHR5IHN0b3JlZCBibG9jay4gV2hlblxuXHRcdC8vIGRlY29tcHJlc3NpbmcsIFBQUCBjaGVja3MgdGhhdCBhdCB0aGUgZW5kIG9mIGlucHV0IHBhY2tldCwgaW5mbGF0ZSBpc1xuXHRcdC8vIHdhaXRpbmcgZm9yIHRoZXNlIGxlbmd0aCBieXRlcy5cblx0XHR0aGF0LmluZmxhdGVTeW5jUG9pbnQgPSBmdW5jdGlvbih6KSB7XG5cdFx0XHRpZiAoIXogfHwgIXouaXN0YXRlIHx8ICF6LmlzdGF0ZS5ibG9ja3MpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdHJldHVybiB6LmlzdGF0ZS5ibG9ja3Muc3luY19wb2ludCgpO1xuXHRcdH07XG5cdH1cblxuXHQvLyBaU3RyZWFtXG5cblx0ZnVuY3Rpb24gWlN0cmVhbSgpIHtcblx0fVxuXG5cdFpTdHJlYW0ucHJvdG90eXBlID0ge1xuXHRcdGluZmxhdGVJbml0IDogZnVuY3Rpb24oYml0cykge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0dGhhdC5pc3RhdGUgPSBuZXcgSW5mbGF0ZSgpO1xuXHRcdFx0aWYgKCFiaXRzKVxuXHRcdFx0XHRiaXRzID0gTUFYX0JJVFM7XG5cdFx0XHRyZXR1cm4gdGhhdC5pc3RhdGUuaW5mbGF0ZUluaXQodGhhdCwgYml0cyk7XG5cdFx0fSxcblxuXHRcdGluZmxhdGUgOiBmdW5jdGlvbihmKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRpZiAoIXRoYXQuaXN0YXRlKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHRyZXR1cm4gdGhhdC5pc3RhdGUuaW5mbGF0ZSh0aGF0LCBmKTtcblx0XHR9LFxuXG5cdFx0aW5mbGF0ZUVuZCA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmlzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0dmFyIHJldCA9IHRoYXQuaXN0YXRlLmluZmxhdGVFbmQodGhhdCk7XG5cdFx0XHR0aGF0LmlzdGF0ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHRpbmZsYXRlU3luYyA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmlzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0cmV0dXJuIHRoYXQuaXN0YXRlLmluZmxhdGVTeW5jKHRoYXQpO1xuXHRcdH0sXG5cdFx0aW5mbGF0ZVNldERpY3Rpb25hcnkgOiBmdW5jdGlvbihkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRpZiAoIXRoYXQuaXN0YXRlKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHRyZXR1cm4gdGhhdC5pc3RhdGUuaW5mbGF0ZVNldERpY3Rpb25hcnkodGhhdCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCk7XG5cdFx0fSxcblx0XHRyZWFkX2J5dGUgOiBmdW5jdGlvbihzdGFydCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0cmV0dXJuIHRoYXQubmV4dF9pbi5zdWJhcnJheShzdGFydCwgc3RhcnQgKyAxKVswXTtcblx0XHR9LFxuXHRcdHJlYWRfYnVmIDogZnVuY3Rpb24oc3RhcnQsIHNpemUpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdHJldHVybiB0aGF0Lm5leHRfaW4uc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgc2l6ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEluZmxhdGVyXG5cblx0ZnVuY3Rpb24gSW5mbGF0ZXIoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHZhciB6ID0gbmV3IFpTdHJlYW0oKTtcblx0XHR2YXIgYnVmc2l6ZSA9IDUxMjtcblx0XHR2YXIgZmx1c2ggPSBaX05PX0ZMVVNIO1xuXHRcdHZhciBidWYgPSBuZXcgVWludDhBcnJheShidWZzaXplKTtcblx0XHR2YXIgbm9tb3JlaW5wdXQgPSBmYWxzZTtcblxuXHRcdHouaW5mbGF0ZUluaXQoKTtcblx0XHR6Lm5leHRfb3V0ID0gYnVmO1xuXG5cdFx0dGhhdC5hcHBlbmQgPSBmdW5jdGlvbihkYXRhLCBvbnByb2dyZXNzKSB7XG5cdFx0XHR2YXIgZXJyLCBidWZmZXJzID0gW10sIGxhc3RJbmRleCA9IDAsIGJ1ZmZlckluZGV4ID0gMCwgYnVmZmVyU2l6ZSA9IDAsIGFycmF5O1xuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID09PSAwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR6Lm5leHRfaW5faW5kZXggPSAwO1xuXHRcdFx0ei5uZXh0X2luID0gZGF0YTtcblx0XHRcdHouYXZhaWxfaW4gPSBkYXRhLmxlbmd0aDtcblx0XHRcdGRvIHtcblx0XHRcdFx0ei5uZXh0X291dF9pbmRleCA9IDA7XG5cdFx0XHRcdHouYXZhaWxfb3V0ID0gYnVmc2l6ZTtcblx0XHRcdFx0aWYgKCh6LmF2YWlsX2luID09PSAwKSAmJiAoIW5vbW9yZWlucHV0KSkgeyAvLyBpZiBidWZmZXIgaXMgZW1wdHkgYW5kIG1vcmUgaW5wdXQgaXMgYXZhaWxhYmxlLCByZWZpbGwgaXRcblx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSAwO1xuXHRcdFx0XHRcdG5vbW9yZWlucHV0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlcnIgPSB6LmluZmxhdGUoZmx1c2gpO1xuXHRcdFx0XHRpZiAobm9tb3JlaW5wdXQgJiYgKGVyciA9PSBaX0JVRl9FUlJPUikpXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRpZiAoZXJyICE9IFpfT0sgJiYgZXJyICE9IFpfU1RSRUFNX0VORClcblx0XHRcdFx0XHR0aHJvdyBcImluZmxhdGluZzogXCIgKyB6Lm1zZztcblx0XHRcdFx0aWYgKChub21vcmVpbnB1dCB8fCBlcnIgPT0gWl9TVFJFQU1fRU5EKSAmJiAoei5hdmFpbF9pbiA9PSBkYXRhLmxlbmd0aCkpXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRpZiAoei5uZXh0X291dF9pbmRleClcblx0XHRcdFx0XHRpZiAoei5uZXh0X291dF9pbmRleCA9PSBidWZzaXplKVxuXHRcdFx0XHRcdFx0YnVmZmVycy5wdXNoKG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJ1ZmZlcnMucHVzaChuZXcgVWludDhBcnJheShidWYuc3ViYXJyYXkoMCwgei5uZXh0X291dF9pbmRleCkpKTtcblx0XHRcdFx0YnVmZmVyU2l6ZSArPSB6Lm5leHRfb3V0X2luZGV4O1xuXHRcdFx0XHRpZiAob25wcm9ncmVzcyAmJiB6Lm5leHRfaW5faW5kZXggPiAwICYmIHoubmV4dF9pbl9pbmRleCAhPSBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRvbnByb2dyZXNzKHoubmV4dF9pbl9pbmRleCk7XG5cdFx0XHRcdFx0bGFzdEluZGV4ID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9IHdoaWxlICh6LmF2YWlsX2luID4gMCB8fCB6LmF2YWlsX291dCA9PT0gMCk7XG5cdFx0XHRhcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlclNpemUpO1xuXHRcdFx0YnVmZmVycy5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rKSB7XG5cdFx0XHRcdGFycmF5LnNldChjaHVuaywgYnVmZmVySW5kZXgpO1xuXHRcdFx0XHRidWZmZXJJbmRleCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBhcnJheTtcblx0XHR9O1xuXHRcdHRoYXQuZmx1c2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdHouaW5mbGF0ZUVuZCgpO1xuXHRcdH07XG5cdH1cblxuXHR2YXIgaW5mbGF0ZXI7XG5cblx0aWYgKG9iai56aXApXG5cdFx0b2JqLnppcC5JbmZsYXRlciA9IEluZmxhdGVyO1xuXHRlbHNlIHtcblx0XHRpbmZsYXRlciA9IG5ldyBJbmZsYXRlcigpO1xuXHRcdG9iai5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuXG5cdFx0XHRpZiAobWVzc2FnZS5hcHBlbmQpXG5cdFx0XHRcdG9iai5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0b25hcHBlbmQgOiB0cnVlLFxuXHRcdFx0XHRcdGRhdGEgOiBpbmZsYXRlci5hcHBlbmQobWVzc2FnZS5kYXRhLCBmdW5jdGlvbihjdXJyZW50KSB7XG5cdFx0XHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdFx0XHRwcm9ncmVzcyA6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQgOiBjdXJyZW50XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KTtcblx0XHRcdGlmIChtZXNzYWdlLmZsdXNoKSB7XG5cdFx0XHRcdGluZmxhdGVyLmZsdXNoKCk7XG5cdFx0XHRcdG9iai5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0b25mbHVzaCA6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpO1xuXHR9XG5cbn0pKHNlbGYpO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==