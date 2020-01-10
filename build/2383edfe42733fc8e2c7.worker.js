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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/string-replace-webpack-plugin/loader.js?id=ncn6nlg2f11tl8fkbffjsv2t9!./node_modules/string-replace-webpack-plugin/loader.js?id=ra8h0723va2c4n653vzzuayvi!./node_modules/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/string-replace-webpack-plugin/loader.js?id=ncn6nlg2f11tl8fkbffjsv2t9!./node_modules/string-replace-webpack-plugin/loader.js?id=ra8h0723va2c4n653vzzuayvi!./node_modules/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-webpack-plugin/loader.js?id=ncn6nlg2f11tl8fkbffjsv2t9!./node_modules/string-replace-webpack-plugin/loader.js?id=ra8h0723va2c4n653vzzuayvi!./node_modules/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js ***!
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
	var D_CODES = 30;
	var BL_CODES = 19;

	var LENGTH_CODES = 29;
	var LITERALS = 256;
	var L_CODES = (LITERALS + 1 + LENGTH_CODES);
	var HEAP_SIZE = (2 * L_CODES + 1);

	var END_BLOCK = 256;

	// Bit length codes must not exceed MAX_BL_BITS bits
	var MAX_BL_BITS = 7;

	// repeat previous bit length 3-6 times (2 bits of repeat count)
	var REP_3_6 = 16;

	// repeat a zero length 3-10 times (3 bits of repeat count)
	var REPZ_3_10 = 17;

	// repeat a zero length 11-138 times (7 bits of repeat count)
	var REPZ_11_138 = 18;

	// The lengths of the bit length codes are sent in order of decreasing
	// probability, to avoid transmitting the lengths for unused bit
	// length codes.

	var Buf_size = 8 * 2;

	// JZlib version : "1.0.2"
	var Z_DEFAULT_COMPRESSION = -1;

	// compression strategy
	var Z_FILTERED = 1;
	var Z_HUFFMAN_ONLY = 2;
	var Z_DEFAULT_STRATEGY = 0;

	var Z_NO_FLUSH = 0;
	var Z_PARTIAL_FLUSH = 1;
	var Z_FULL_FLUSH = 3;
	var Z_FINISH = 4;

	var Z_OK = 0;
	var Z_STREAM_END = 1;
	var Z_NEED_DICT = 2;
	var Z_STREAM_ERROR = -2;
	var Z_DATA_ERROR = -3;
	var Z_BUF_ERROR = -5;

	// Tree

	// see definition of array dist_code below
	var _dist_code = [ 0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
			12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
			14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
			14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
			15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19,
			20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
			26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
			27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
			28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29,
			29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
			29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29 ];

	function Tree() {
		var that = this;

		// dyn_tree; // the dynamic tree
		// max_code; // largest code with non zero frequency
		// stat_desc; // the corresponding static tree

		// Compute the optimal bit lengths for a tree and update the total bit
		// length
		// for the current block.
		// IN assertion: the fields freq and dad are set, heap[heap_max] and
		// above are the tree nodes sorted by increasing frequency.
		// OUT assertions: the field len is set to the optimal bit length, the
		// array bl_count contains the frequencies for each bit length.
		// The length opt_len is updated; static_len is also updated if stree is
		// not null.
		function gen_bitlen(s) {
			var tree = that.dyn_tree;
			var stree = that.stat_desc.static_tree;
			var extra = that.stat_desc.extra_bits;
			var base = that.stat_desc.extra_base;
			var max_length = that.stat_desc.max_length;
			var h; // heap index
			var n, m; // iterate over the tree elements
			var bits; // bit length
			var xbits; // extra bits
			var f; // frequency
			var overflow = 0; // number of elements with bit length too large

			for (bits = 0; bits <= MAX_BITS; bits++)
				s.bl_count[bits] = 0;

			// In a first pass, compute the optimal bit lengths (which may
			// overflow in the case of the bit length tree).
			tree[s.heap[s.heap_max] * 2 + 1] = 0; // root of the heap

			for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
				n = s.heap[h];
				bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
				if (bits > max_length) {
					bits = max_length;
					overflow++;
				}
				tree[n * 2 + 1] = bits;
				// We overwrite tree[n*2+1] which is no longer needed

				if (n > that.max_code)
					continue; // not a leaf node

				s.bl_count[bits]++;
				xbits = 0;
				if (n >= base)
					xbits = extra[n - base];
				f = tree[n * 2];
				s.opt_len += f * (bits + xbits);
				if (stree)
					s.static_len += f * (stree[n * 2 + 1] + xbits);
			}
			if (overflow === 0)
				return;

			// This happens for example on obj2 and pic of the Calgary corpus
			// Find the first bit length which could increase:
			do {
				bits = max_length - 1;
				while (s.bl_count[bits] === 0)
					bits--;
				s.bl_count[bits]--; // move one leaf down the tree
				s.bl_count[bits + 1] += 2; // move one overflow item as its brother
				s.bl_count[max_length]--;
				// The brother of the overflow item also moves one step up,
				// but this does not affect bl_count[max_length]
				overflow -= 2;
			} while (overflow > 0);

			for (bits = max_length; bits !== 0; bits--) {
				n = s.bl_count[bits];
				while (n !== 0) {
					m = s.heap[--h];
					if (m > that.max_code)
						continue;
					if (tree[m * 2 + 1] != bits) {
						s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
						tree[m * 2 + 1] = bits;
					}
					n--;
				}
			}
		}

		// Reverse the first len bits of a code, using straightforward code (a
		// faster
		// method would use a table)
		// IN assertion: 1 <= len <= 15
		function bi_reverse(code, // the value to invert
		len // its bit length
		) {
			var res = 0;
			do {
				res |= code & 1;
				code >>>= 1;
				res <<= 1;
			} while (--len > 0);
			return res >>> 1;
		}

		// Generate the codes for a given tree and bit counts (which need not be
		// optimal).
		// IN assertion: the array bl_count contains the bit length statistics for
		// the given tree and the field len is set for all tree elements.
		// OUT assertion: the field code is set for all tree elements of non
		// zero code length.
		function gen_codes(tree, // the tree to decorate
		max_code, // largest code with non zero frequency
		bl_count // number of codes at each bit length
		) {
			var next_code = []; // next code value for each
			// bit length
			var code = 0; // running code value
			var bits; // bit index
			var n; // code index
			var len;

			// The distribution counts are first used to generate the code values
			// without bit reversal.
			for (bits = 1; bits <= MAX_BITS; bits++) {
				next_code[bits] = code = ((code + bl_count[bits - 1]) << 1);
			}

			// Check that the bit counts in bl_count are consistent. The last code
			// must be all ones.
			// Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
			// "inconsistent bit counts");
			// Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

			for (n = 0; n <= max_code; n++) {
				len = tree[n * 2 + 1];
				if (len === 0)
					continue;
				// Now reverse the bits
				tree[n * 2] = bi_reverse(next_code[len]++, len);
			}
		}

		// Construct one Huffman tree and assigns the code bit strings and lengths.
		// Update the total bit length for the current block.
		// IN assertion: the field freq is set for all tree elements.
		// OUT assertions: the fields len and code are set to the optimal bit length
		// and corresponding code. The length opt_len is updated; static_len is
		// also updated if stree is not null. The field max_code is set.
		that.build_tree = function(s) {
			var tree = that.dyn_tree;
			var stree = that.stat_desc.static_tree;
			var elems = that.stat_desc.elems;
			var n, m; // iterate over heap elements
			var max_code = -1; // largest code with non zero frequency
			var node; // new node being created

			// Construct the initial heap, with least frequent element in
			// heap[1]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
			// heap[0] is not used.
			s.heap_len = 0;
			s.heap_max = HEAP_SIZE;

			for (n = 0; n < elems; n++) {
				if (tree[n * 2] !== 0) {
					s.heap[++s.heap_len] = max_code = n;
					s.depth[n] = 0;
				} else {
					tree[n * 2 + 1] = 0;
				}
			}

			// The pkzip format requires that at least one distance code exists,
			// and that at least one bit should be sent even if there is only one
			// possible code. So to avoid special checks later on we force at least
			// two codes of non zero frequency.
			while (s.heap_len < 2) {
				node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
				tree[node * 2] = 1;
				s.depth[node] = 0;
				s.opt_len--;
				if (stree)
					s.static_len -= stree[node * 2 + 1];
				// node is 0 or 1 so it does not have extra bits
			}
			that.max_code = max_code;

			// The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
			// establish sub-heaps of increasing lengths:

			for (n = Math.floor(s.heap_len / 2); n >= 1; n--)
				s.pqdownheap(tree, n);

			// Construct the Huffman tree by repeatedly combining the least two
			// frequent nodes.

			node = elems; // next internal node of the tree
			do {
				// n = node of least frequency
				n = s.heap[1];
				s.heap[1] = s.heap[s.heap_len--];
				s.pqdownheap(tree, 1);
				m = s.heap[1]; // m = node of next least frequency

				s.heap[--s.heap_max] = n; // keep the nodes sorted by frequency
				s.heap[--s.heap_max] = m;

				// Create a new node father of n and m
				tree[node * 2] = (tree[n * 2] + tree[m * 2]);
				s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
				tree[n * 2 + 1] = tree[m * 2 + 1] = node;

				// and insert the new node in the heap
				s.heap[1] = node++;
				s.pqdownheap(tree, 1);
			} while (s.heap_len >= 2);

			s.heap[--s.heap_max] = s.heap[1];

			// At this point, the fields freq and dad are set. We can now
			// generate the bit lengths.

			gen_bitlen(s);

			// The field len is now set, we can generate the bit codes
			gen_codes(tree, that.max_code, s.bl_count);
		};

	}

	Tree._length_code = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16,
			16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
			20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
			22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
			25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
			26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28 ];

	Tree.base_length = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0 ];

	Tree.base_dist = [ 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384,
			24576 ];

	// Mapping from a distance to a distance code. dist is the distance - 1 and
	// must not have side effects. _dist_code[256] and _dist_code[257] are never
	// used.
	Tree.d_code = function(dist) {
		return ((dist) < 256 ? _dist_code[dist] : _dist_code[256 + ((dist) >>> 7)]);
	};

	// extra bits for each length code
	Tree.extra_lbits = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ];

	// extra bits for each distance code
	Tree.extra_dbits = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];

	// extra bits for each bit length code
	Tree.extra_blbits = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ];

	Tree.bl_order = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

	// StaticTree

	function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
		var that = this;
		that.static_tree = static_tree;
		that.extra_bits = extra_bits;
		that.extra_base = extra_base;
		that.elems = elems;
		that.max_length = max_length;
	}

	StaticTree.static_ltree = [ 12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8,
			130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42,
			8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8,
			22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8,
			222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113,
			8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8,
			69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8,
			173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9,
			51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9,
			427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379,
			9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23,
			9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9,
			399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9,
			223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7,
			40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8,
			99, 8, 227, 8 ];

	StaticTree.static_dtree = [ 0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5,
			25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5 ];

	StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);

	StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);

	StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);

	// Deflate

	var MAX_MEM_LEVEL = 9;
	var DEF_MEM_LEVEL = 8;

	function Config(good_length, max_lazy, nice_length, max_chain, func) {
		var that = this;
		that.good_length = good_length;
		that.max_lazy = max_lazy;
		that.nice_length = nice_length;
		that.max_chain = max_chain;
		that.func = func;
	}

	var STORED = 0;
	var FAST = 1;
	var SLOW = 2;
	var config_table = [ new Config(0, 0, 0, 0, STORED), new Config(4, 4, 8, 4, FAST), new Config(4, 5, 16, 8, FAST), new Config(4, 6, 32, 32, FAST),
			new Config(4, 4, 16, 16, SLOW), new Config(8, 16, 32, 32, SLOW), new Config(8, 16, 128, 128, SLOW), new Config(8, 32, 128, 256, SLOW),
			new Config(32, 128, 258, 1024, SLOW), new Config(32, 258, 258, 4096, SLOW) ];

	var z_errmsg = [ "need dictionary", // Z_NEED_DICT
	// 2
	"stream end", // Z_STREAM_END 1
	"", // Z_OK 0
	"", // Z_ERRNO (-1)
	"stream error", // Z_STREAM_ERROR (-2)
	"data error", // Z_DATA_ERROR (-3)
	"", // Z_MEM_ERROR (-4)
	"buffer error", // Z_BUF_ERROR (-5)
	"",// Z_VERSION_ERROR (-6)
	"" ];

	// block not completed, need more input or more output
	var NeedMore = 0;

	// block flush performed
	var BlockDone = 1;

	// finish started, need only more output at next deflate
	var FinishStarted = 2;

	// finish done, accept no more input or output
	var FinishDone = 3;

	// preset dictionary flag in zlib header
	var PRESET_DICT = 0x20;

	var INIT_STATE = 42;
	var BUSY_STATE = 113;
	var FINISH_STATE = 666;

	// The deflate compression method
	var Z_DEFLATED = 8;

	var STORED_BLOCK = 0;
	var STATIC_TREES = 1;
	var DYN_TREES = 2;

	var MIN_MATCH = 3;
	var MAX_MATCH = 258;
	var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

	function smaller(tree, n, m, depth) {
		var tn2 = tree[n * 2];
		var tm2 = tree[m * 2];
		return (tn2 < tm2 || (tn2 == tm2 && depth[n] <= depth[m]));
	}

	function Deflate() {

		var that = this;
		var strm; // pointer back to this zlib stream
		var status; // as the name implies
		// pending_buf; // output still pending
		var pending_buf_size; // size of pending_buf
		// pending_out; // next pending byte to output to the stream
		// pending; // nb of bytes in the pending buffer
		var method; // STORED (for zip only) or DEFLATED
		var last_flush; // value of flush param for previous deflate call

		var w_size; // LZ77 window size (32K by default)
		var w_bits; // log2(w_size) (8..16)
		var w_mask; // w_size - 1

		var window;
		// Sliding window. Input bytes are read into the second half of the window,
		// and move to the first half later to keep a dictionary of at least wSize
		// bytes. With this organization, matches are limited to a distance of
		// wSize-MAX_MATCH bytes, but this ensures that IO is always
		// performed with a length multiple of the block size. Also, it limits
		// the window size to 64K, which is quite useful on MSDOS.
		// To do: use the user input buffer as sliding window.

		var window_size;
		// Actual size of window: 2*wSize, except when the user input buffer
		// is directly used as sliding window.

		var prev;
		// Link to older string with same hash index. To limit the size of this
		// array to 64K, this link is maintained only for the last 32K strings.
		// An index in this array is thus a window index modulo 32K.

		var head; // Heads of the hash chains or NIL.

		var ins_h; // hash index of string to be inserted
		var hash_size; // number of elements in hash table
		var hash_bits; // log2(hash_size)
		var hash_mask; // hash_size-1

		// Number of bits by which ins_h must be shifted at each input
		// step. It must be such that after MIN_MATCH steps, the oldest
		// byte no longer takes part in the hash key, that is:
		// hash_shift * MIN_MATCH >= hash_bits
		var hash_shift;

		// Window position at the beginning of the current output block. Gets
		// negative when the window is moved backwards.

		var block_start;

		var match_length; // length of best match
		var prev_match; // previous match
		var match_available; // set if previous match exists
		var strstart; // start of string to insert
		var match_start; // start of matching string
		var lookahead; // number of valid bytes ahead in window

		// Length of the best match at previous step. Matches not greater than this
		// are discarded. This is used in the lazy match evaluation.
		var prev_length;

		// To speed up deflation, hash chains are never searched beyond this
		// length. A higher limit improves compression ratio but degrades the speed.
		var max_chain_length;

		// Attempt to find a better match only when the current match is strictly
		// smaller than this value. This mechanism is used only for compression
		// levels >= 4.
		var max_lazy_match;

		// Insert new strings in the hash table only if the match length is not
		// greater than this length. This saves time but degrades compression.
		// max_insert_length is used only for compression levels <= 3.

		var level; // compression level (1..9)
		var strategy; // favor or force Huffman coding

		// Use a faster search when the previous match is longer than this
		var good_match;

		// Stop searching when current match exceeds this
		var nice_match;

		var dyn_ltree; // literal and length tree
		var dyn_dtree; // distance tree
		var bl_tree; // Huffman tree for bit lengths

		var l_desc = new Tree(); // desc for literal tree
		var d_desc = new Tree(); // desc for distance tree
		var bl_desc = new Tree(); // desc for bit length tree

		// that.heap_len; // number of elements in the heap
		// that.heap_max; // element of largest frequency
		// The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
		// The same heap array is used to build all trees.

		// Depth of each subtree used as tie breaker for trees of equal frequency
		that.depth = [];

		var l_buf; // index for literals or lengths */

		// Size of match buffer for literals/lengths. There are 4 reasons for
		// limiting lit_bufsize to 64K:
		// - frequencies can be kept in 16 bit counters
		// - if compression is not successful for the first block, all input
		// data is still in the window so we can still emit a stored block even
		// when input comes from standard input. (This can also be done for
		// all blocks if lit_bufsize is not greater than 32K.)
		// - if compression is not successful for a file smaller than 64K, we can
		// even emit a stored file instead of a stored block (saving 5 bytes).
		// This is applicable only for zip (not gzip or zlib).
		// - creating new Huffman trees less frequently may not provide fast
		// adaptation to changes in the input data statistics. (Take for
		// example a binary file with poorly compressible code followed by
		// a highly compressible string table.) Smaller buffer sizes give
		// fast adaptation but have of course the overhead of transmitting
		// trees more frequently.
		// - I can't count above 4
		var lit_bufsize;

		var last_lit; // running index in l_buf

		// Buffer for distances. To simplify the code, d_buf and l_buf have
		// the same number of elements. To use different lengths, an extra flag
		// array would be necessary.

		var d_buf; // index of pendig_buf

		// that.opt_len; // bit length of current block with optimal trees
		// that.static_len; // bit length of current block with static trees
		var matches; // number of string matches in current block
		var last_eob_len; // bit length of EOB code for last block

		// Output buffer. bits are inserted starting at the bottom (least
		// significant bits).
		var bi_buf;

		// Number of valid bits in bi_buf. All bits above the last valid bit
		// are always zero.
		var bi_valid;

		// number of codes at each bit length for an optimal tree
		that.bl_count = [];

		// heap used to build the Huffman trees
		that.heap = [];

		dyn_ltree = [];
		dyn_dtree = [];
		bl_tree = [];

		function lm_init() {
			var i;
			window_size = 2 * w_size;

			head[hash_size - 1] = 0;
			for (i = 0; i < hash_size - 1; i++) {
				head[i] = 0;
			}

			// Set the default configuration parameters:
			max_lazy_match = config_table[level].max_lazy;
			good_match = config_table[level].good_length;
			nice_match = config_table[level].nice_length;
			max_chain_length = config_table[level].max_chain;

			strstart = 0;
			block_start = 0;
			lookahead = 0;
			match_length = prev_length = MIN_MATCH - 1;
			match_available = 0;
			ins_h = 0;
		}

		function init_block() {
			var i;
			// Initialize the trees.
			for (i = 0; i < L_CODES; i++)
				dyn_ltree[i * 2] = 0;
			for (i = 0; i < D_CODES; i++)
				dyn_dtree[i * 2] = 0;
			for (i = 0; i < BL_CODES; i++)
				bl_tree[i * 2] = 0;

			dyn_ltree[END_BLOCK * 2] = 1;
			that.opt_len = that.static_len = 0;
			last_lit = matches = 0;
		}

		// Initialize the tree data structures for a new zlib stream.
		function tr_init() {

			l_desc.dyn_tree = dyn_ltree;
			l_desc.stat_desc = StaticTree.static_l_desc;

			d_desc.dyn_tree = dyn_dtree;
			d_desc.stat_desc = StaticTree.static_d_desc;

			bl_desc.dyn_tree = bl_tree;
			bl_desc.stat_desc = StaticTree.static_bl_desc;

			bi_buf = 0;
			bi_valid = 0;
			last_eob_len = 8; // enough lookahead for inflate

			// Initialize the first block of the first file:
			init_block();
		}

		// Restore the heap property by moving down the tree starting at node k,
		// exchanging a node with the smallest of its two sons if necessary,
		// stopping
		// when the heap property is re-established (each father smaller than its
		// two sons).
		that.pqdownheap = function(tree, // the tree to restore
		k // node to move down
		) {
			var heap = that.heap;
			var v = heap[k];
			var j = k << 1; // left son of k
			while (j <= that.heap_len) {
				// Set j to the smallest of the two sons:
				if (j < that.heap_len && smaller(tree, heap[j + 1], heap[j], that.depth)) {
					j++;
				}
				// Exit if v is smaller than both sons
				if (smaller(tree, v, heap[j], that.depth))
					break;

				// Exchange v with the smallest son
				heap[k] = heap[j];
				k = j;
				// And continue down the tree, setting j to the left son of k
				j <<= 1;
			}
			heap[k] = v;
		};

		// Scan a literal or distance tree to determine the frequencies of the codes
		// in the bit length tree.
		function scan_tree(tree,// the tree to be scanned
		max_code // and its largest code of non zero frequency
		) {
			var n; // iterates over all tree elements
			var prevlen = -1; // last emitted length
			var curlen; // length of current code
			var nextlen = tree[0 * 2 + 1]; // length of next code
			var count = 0; // repeat count of the current code
			var max_count = 7; // max repeat count
			var min_count = 4; // min repeat count

			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			}
			tree[(max_code + 1) * 2 + 1] = 0xffff; // guard

			for (n = 0; n <= max_code; n++) {
				curlen = nextlen;
				nextlen = tree[(n + 1) * 2 + 1];
				if (++count < max_count && curlen == nextlen) {
					continue;
				} else if (count < min_count) {
					bl_tree[curlen * 2] += count;
				} else if (curlen !== 0) {
					if (curlen != prevlen)
						bl_tree[curlen * 2]++;
					bl_tree[REP_3_6 * 2]++;
				} else if (count <= 10) {
					bl_tree[REPZ_3_10 * 2]++;
				} else {
					bl_tree[REPZ_11_138 * 2]++;
				}
				count = 0;
				prevlen = curlen;
				if (nextlen === 0) {
					max_count = 138;
					min_count = 3;
				} else if (curlen == nextlen) {
					max_count = 6;
					min_count = 3;
				} else {
					max_count = 7;
					min_count = 4;
				}
			}
		}

		// Construct the Huffman tree for the bit lengths and return the index in
		// bl_order of the last bit length code to send.
		function build_bl_tree() {
			var max_blindex; // index of last bit length code of non zero freq

			// Determine the bit length frequencies for literal and distance trees
			scan_tree(dyn_ltree, l_desc.max_code);
			scan_tree(dyn_dtree, d_desc.max_code);

			// Build the bit length tree:
			bl_desc.build_tree(that);
			// opt_len now includes the length of the tree representations, except
			// the lengths of the bit lengths codes and the 5+5+4 bits for the
			// counts.

			// Determine the number of bit length codes to send. The pkzip format
			// requires that at least 4 bit length codes be sent. (appnote.txt says
			// 3 but the actual value used is 4.)
			for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
				if (bl_tree[Tree.bl_order[max_blindex] * 2 + 1] !== 0)
					break;
			}
			// Update opt_len to include the bit length tree and counts
			that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;

			return max_blindex;
		}

		// Output a byte on the stream.
		// IN assertion: there is enough room in pending_buf.
		function put_byte(p) {
			that.pending_buf[that.pending++] = p;
		}

		function put_short(w) {
			put_byte(w & 0xff);
			put_byte((w >>> 8) & 0xff);
		}

		function putShortMSB(b) {
			put_byte((b >> 8) & 0xff);
			put_byte((b & 0xff) & 0xff);
		}

		function send_bits(value, length) {
			var val, len = length;
			if (bi_valid > Buf_size - len) {
				val = value;
				// bi_buf |= (val << bi_valid);
				bi_buf |= ((val << bi_valid) & 0xffff);
				put_short(bi_buf);
				bi_buf = val >>> (Buf_size - bi_valid);
				bi_valid += len - Buf_size;
			} else {
				// bi_buf |= (value) << bi_valid;
				bi_buf |= (((value) << bi_valid) & 0xffff);
				bi_valid += len;
			}
		}

		function send_code(c, tree) {
			var c2 = c * 2;
			send_bits(tree[c2] & 0xffff, tree[c2 + 1] & 0xffff);
		}

		// Send a literal or distance tree in compressed form, using the codes in
		// bl_tree.
		function send_tree(tree,// the tree to be sent
		max_code // and its largest code of non zero frequency
		) {
			var n; // iterates over all tree elements
			var prevlen = -1; // last emitted length
			var curlen; // length of current code
			var nextlen = tree[0 * 2 + 1]; // length of next code
			var count = 0; // repeat count of the current code
			var max_count = 7; // max repeat count
			var min_count = 4; // min repeat count

			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			}

			for (n = 0; n <= max_code; n++) {
				curlen = nextlen;
				nextlen = tree[(n + 1) * 2 + 1];
				if (++count < max_count && curlen == nextlen) {
					continue;
				} else if (count < min_count) {
					do {
						send_code(curlen, bl_tree);
					} while (--count !== 0);
				} else if (curlen !== 0) {
					if (curlen != prevlen) {
						send_code(curlen, bl_tree);
						count--;
					}
					send_code(REP_3_6, bl_tree);
					send_bits(count - 3, 2);
				} else if (count <= 10) {
					send_code(REPZ_3_10, bl_tree);
					send_bits(count - 3, 3);
				} else {
					send_code(REPZ_11_138, bl_tree);
					send_bits(count - 11, 7);
				}
				count = 0;
				prevlen = curlen;
				if (nextlen === 0) {
					max_count = 138;
					min_count = 3;
				} else if (curlen == nextlen) {
					max_count = 6;
					min_count = 3;
				} else {
					max_count = 7;
					min_count = 4;
				}
			}
		}

		// Send the header for a block using dynamic Huffman trees: the counts, the
		// lengths of the bit length codes, the literal tree and the distance tree.
		// IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
		function send_all_trees(lcodes, dcodes, blcodes) {
			var rank; // index in bl_order

			send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
			send_bits(dcodes - 1, 5);
			send_bits(blcodes - 4, 4); // not -3 as stated in appnote.txt
			for (rank = 0; rank < blcodes; rank++) {
				send_bits(bl_tree[Tree.bl_order[rank] * 2 + 1], 3);
			}
			send_tree(dyn_ltree, lcodes - 1); // literal tree
			send_tree(dyn_dtree, dcodes - 1); // distance tree
		}

		// Flush the bit buffer, keeping at most 7 bits in it.
		function bi_flush() {
			if (bi_valid == 16) {
				put_short(bi_buf);
				bi_buf = 0;
				bi_valid = 0;
			} else if (bi_valid >= 8) {
				put_byte(bi_buf & 0xff);
				bi_buf >>>= 8;
				bi_valid -= 8;
			}
		}

		// Send one empty static block to give enough lookahead for inflate.
		// This takes 10 bits, of which 7 may remain in the bit buffer.
		// The current inflate code requires 9 bits of lookahead. If the
		// last two codes for the previous block (real code plus EOB) were coded
		// on 5 bits or less, inflate may have only 5+3 bits of lookahead to decode
		// the last real code. In this case we send two empty static blocks instead
		// of one. (There are no problems if the previous block is stored or fixed.)
		// To simplify the code, we assume the worst case of last real code encoded
		// on one bit only.
		function _tr_align() {
			send_bits(STATIC_TREES << 1, 3);
			send_code(END_BLOCK, StaticTree.static_ltree);

			bi_flush();

			// Of the 10 bits for the empty block, we have already sent
			// (10 - bi_valid) bits. The lookahead for the last real code (before
			// the EOB of the previous block) was thus at least one plus the length
			// of the EOB plus what we have just sent of the empty static block.
			if (1 + last_eob_len + 10 - bi_valid < 9) {
				send_bits(STATIC_TREES << 1, 3);
				send_code(END_BLOCK, StaticTree.static_ltree);
				bi_flush();
			}
			last_eob_len = 7;
		}

		// Save the match info and tally the frequency counts. Return true if
		// the current block must be flushed.
		function _tr_tally(dist, // distance of matched string
		lc // match length-MIN_MATCH or unmatched char (if dist==0)
		) {
			var out_length, in_length, dcode;
			that.pending_buf[d_buf + last_lit * 2] = (dist >>> 8) & 0xff;
			that.pending_buf[d_buf + last_lit * 2 + 1] = dist & 0xff;

			that.pending_buf[l_buf + last_lit] = lc & 0xff;
			last_lit++;

			if (dist === 0) {
				// lc is the unmatched char
				dyn_ltree[lc * 2]++;
			} else {
				matches++;
				// Here, lc is the match length - MIN_MATCH
				dist--; // dist = match distance - 1
				dyn_ltree[(Tree._length_code[lc] + LITERALS + 1) * 2]++;
				dyn_dtree[Tree.d_code(dist) * 2]++;
			}

			if ((last_lit & 0x1fff) === 0 && level > 2) {
				// Compute an upper bound for the compressed length
				out_length = last_lit * 8;
				in_length = strstart - block_start;
				for (dcode = 0; dcode < D_CODES; dcode++) {
					out_length += dyn_dtree[dcode * 2] * (5 + Tree.extra_dbits[dcode]);
				}
				out_length >>>= 3;
				if ((matches < Math.floor(last_lit / 2)) && out_length < Math.floor(in_length / 2))
					return true;
			}

			return (last_lit == lit_bufsize - 1);
			// We avoid equality with lit_bufsize because of wraparound at 64K
			// on 16 bit machines and because stored blocks are restricted to
			// 64K-1 bytes.
		}

		// Send the block data compressed using the given Huffman trees
		function compress_block(ltree, dtree) {
			var dist; // distance of matched string
			var lc; // match length or unmatched char (if dist === 0)
			var lx = 0; // running index in l_buf
			var code; // the code to send
			var extra; // number of extra bits to send

			if (last_lit !== 0) {
				do {
					dist = ((that.pending_buf[d_buf + lx * 2] << 8) & 0xff00) | (that.pending_buf[d_buf + lx * 2 + 1] & 0xff);
					lc = (that.pending_buf[l_buf + lx]) & 0xff;
					lx++;

					if (dist === 0) {
						send_code(lc, ltree); // send a literal byte
					} else {
						// Here, lc is the match length - MIN_MATCH
						code = Tree._length_code[lc];

						send_code(code + LITERALS + 1, ltree); // send the length
						// code
						extra = Tree.extra_lbits[code];
						if (extra !== 0) {
							lc -= Tree.base_length[code];
							send_bits(lc, extra); // send the extra length bits
						}
						dist--; // dist is now the match distance - 1
						code = Tree.d_code(dist);

						send_code(code, dtree); // send the distance code
						extra = Tree.extra_dbits[code];
						if (extra !== 0) {
							dist -= Tree.base_dist[code];
							send_bits(dist, extra); // send the extra distance bits
						}
					} // literal or match pair ?

					// Check that the overlay between pending_buf and d_buf+l_buf is
					// ok:
				} while (lx < last_lit);
			}

			send_code(END_BLOCK, ltree);
			last_eob_len = ltree[END_BLOCK * 2 + 1];
		}

		// Flush the bit buffer and align the output on a byte boundary
		function bi_windup() {
			if (bi_valid > 8) {
				put_short(bi_buf);
			} else if (bi_valid > 0) {
				put_byte(bi_buf & 0xff);
			}
			bi_buf = 0;
			bi_valid = 0;
		}

		// Copy a stored block, storing first the length and its
		// one's complement if requested.
		function copy_block(buf, // the input data
		len, // its length
		header // true if block header must be written
		) {
			bi_windup(); // align on byte boundary
			last_eob_len = 8; // enough lookahead for inflate

			if (header) {
				put_short(len);
				put_short(~len);
			}

			that.pending_buf.set(window.subarray(buf, buf + len), that.pending);
			that.pending += len;
		}

		// Send a stored block
		function _tr_stored_block(buf, // input block
		stored_len, // length of input block
		eof // true if this is the last block for a file
		) {
			send_bits((STORED_BLOCK << 1) + (eof ? 1 : 0), 3); // send block type
			copy_block(buf, stored_len, true); // with header
		}

		// Determine the best encoding for the current block: dynamic trees, static
		// trees or store, and output the encoded block to the zip file.
		function _tr_flush_block(buf, // input block, or NULL if too old
		stored_len, // length of input block
		eof // true if this is the last block for a file
		) {
			var opt_lenb, static_lenb;// opt_len and static_len in bytes
			var max_blindex = 0; // index of last bit length code of non zero freq

			// Build the Huffman trees unless a stored block is forced
			if (level > 0) {
				// Construct the literal and distance trees
				l_desc.build_tree(that);

				d_desc.build_tree(that);

				// At this point, opt_len and static_len are the total bit lengths
				// of
				// the compressed block data, excluding the tree representations.

				// Build the bit length tree for the above two trees, and get the
				// index
				// in bl_order of the last bit length code to send.
				max_blindex = build_bl_tree();

				// Determine the best encoding. Compute first the block length in
				// bytes
				opt_lenb = (that.opt_len + 3 + 7) >>> 3;
				static_lenb = (that.static_len + 3 + 7) >>> 3;

				if (static_lenb <= opt_lenb)
					opt_lenb = static_lenb;
			} else {
				opt_lenb = static_lenb = stored_len + 5; // force a stored block
			}

			if ((stored_len + 4 <= opt_lenb) && buf != -1) {
				// 4: two words for the lengths
				// The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
				// Otherwise we can't have processed more than WSIZE input bytes
				// since
				// the last block flush, because compression would have been
				// successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
				// transform a block into a stored block.
				_tr_stored_block(buf, stored_len, eof);
			} else if (static_lenb == opt_lenb) {
				send_bits((STATIC_TREES << 1) + (eof ? 1 : 0), 3);
				compress_block(StaticTree.static_ltree, StaticTree.static_dtree);
			} else {
				send_bits((DYN_TREES << 1) + (eof ? 1 : 0), 3);
				send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
				compress_block(dyn_ltree, dyn_dtree);
			}

			// The above check is made mod 2^32, for files larger than 512 MB
			// and uLong implemented on 32 bits.

			init_block();

			if (eof) {
				bi_windup();
			}
		}

		function flush_block_only(eof) {
			_tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
			block_start = strstart;
			strm.flush_pending();
		}

		// Fill the window when the lookahead becomes insufficient.
		// Updates strstart and lookahead.
		//
		// IN assertion: lookahead < MIN_LOOKAHEAD
		// OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
		// At least one byte has been read, or avail_in === 0; reads are
		// performed for at least two bytes (required for the zip translate_eol
		// option -- not supported here).
		function fill_window() {
			var n, m;
			var p;
			var more; // Amount of free space at the end of the window.

			do {
				more = (window_size - lookahead - strstart);

				// Deal with !@#$% 64K limit:
				if (more === 0 && strstart === 0 && lookahead === 0) {
					more = w_size;
				} else if (more == -1) {
					// Very unlikely, but possible on 16 bit machine if strstart ==
					// 0
					// and lookahead == 1 (input done one byte at time)
					more--;

					// If the window is almost full and there is insufficient
					// lookahead,
					// move the upper half to the lower one to make room in the
					// upper half.
				} else if (strstart >= w_size + w_size - MIN_LOOKAHEAD) {
					window.set(window.subarray(w_size, w_size + w_size), 0);

					match_start -= w_size;
					strstart -= w_size; // we now have strstart >= MAX_DIST
					block_start -= w_size;

					// Slide the hash table (could be avoided with 32 bit values
					// at the expense of memory usage). We slide even when level ==
					// 0
					// to keep the hash table consistent if we switch back to level
					// > 0
					// later. (Using level 0 permanently is not an optimal usage of
					// zlib, so we don't care about this pathological case.)

					n = hash_size;
					p = n;
					do {
						m = (head[--p] & 0xffff);
						head[p] = (m >= w_size ? m - w_size : 0);
					} while (--n !== 0);

					n = w_size;
					p = n;
					do {
						m = (prev[--p] & 0xffff);
						prev[p] = (m >= w_size ? m - w_size : 0);
						// If n is not on any hash chain, prev[n] is garbage but
						// its value will never be used.
					} while (--n !== 0);
					more += w_size;
				}

				if (strm.avail_in === 0)
					return;

				// If there was no sliding:
				// strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
				// more == window_size - lookahead - strstart
				// => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
				// => more >= window_size - 2*WSIZE + 2
				// In the BIG_MEM or MMAP case (not yet supported),
				// window_size == input_size + MIN_LOOKAHEAD &&
				// strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
				// Otherwise, window_size == 2*WSIZE so more >= 2.
				// If there was sliding, more >= WSIZE. So in all cases, more >= 2.

				n = strm.read_buf(window, strstart + lookahead, more);
				lookahead += n;

				// Initialize the hash value now that we have some input:
				if (lookahead >= MIN_MATCH) {
					ins_h = window[strstart] & 0xff;
					ins_h = (((ins_h) << hash_shift) ^ (window[strstart + 1] & 0xff)) & hash_mask;
				}
				// If the whole input has less than MIN_MATCH bytes, ins_h is
				// garbage,
				// but this is not important since only literal bytes will be
				// emitted.
			} while (lookahead < MIN_LOOKAHEAD && strm.avail_in !== 0);
		}

		// Copy without compression as much as possible from the input stream,
		// return
		// the current block state.
		// This function does not insert new strings in the dictionary since
		// uncompressible data is probably not useful. This function is used
		// only for the level=0 compression option.
		// NOTE: this function should be optimized to avoid extra copying from
		// window to pending_buf.
		function deflate_stored(flush) {
			// Stored blocks are limited to 0xffff bytes, pending_buf is limited
			// to pending_buf_size, and each stored block has a 5 byte header:

			var max_block_size = 0xffff;
			var max_start;

			if (max_block_size > pending_buf_size - 5) {
				max_block_size = pending_buf_size - 5;
			}

			// Copy as much as possible from input to output:
			while (true) {
				// Fill the window as much as possible:
				if (lookahead <= 1) {
					fill_window();
					if (lookahead === 0 && flush == Z_NO_FLUSH)
						return NeedMore;
					if (lookahead === 0)
						break; // flush the current block
				}

				strstart += lookahead;
				lookahead = 0;

				// Emit a stored block if pending_buf will be full:
				max_start = block_start + max_block_size;
				if (strstart === 0 || strstart >= max_start) {
					// strstart === 0 is possible when wraparound on 16-bit machine
					lookahead = (strstart - max_start);
					strstart = max_start;

					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;

				}

				// Flush if we may have to slide, otherwise block_start may become
				// negative and the data will be gone:
				if (strstart - block_start >= w_size - MIN_LOOKAHEAD) {
					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;
				}
			}

			flush_block_only(flush == Z_FINISH);
			if (strm.avail_out === 0)
				return (flush == Z_FINISH) ? FinishStarted : NeedMore;

			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		function longest_match(cur_match) {
			var chain_length = max_chain_length; // max hash chain length
			var scan = strstart; // current string
			var match; // matched string
			var len; // length of current match
			var best_len = prev_length; // best match length so far
			var limit = strstart > (w_size - MIN_LOOKAHEAD) ? strstart - (w_size - MIN_LOOKAHEAD) : 0;
			var _nice_match = nice_match;

			// Stop when cur_match becomes <= limit. To simplify the code,
			// we prevent matches with the string of window index 0.

			var wmask = w_mask;

			var strend = strstart + MAX_MATCH;
			var scan_end1 = window[scan + best_len - 1];
			var scan_end = window[scan + best_len];

			// The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of
			// 16.
			// It is easy to get rid of this optimization if necessary.

			// Do not waste too much time if we already have a good match:
			if (prev_length >= good_match) {
				chain_length >>= 2;
			}

			// Do not look for matches beyond the end of the input. This is
			// necessary
			// to make deflate deterministic.
			if (_nice_match > lookahead)
				_nice_match = lookahead;

			do {
				match = cur_match;

				// Skip to next match if the match length cannot increase
				// or if the match length is less than 2:
				if (window[match + best_len] != scan_end || window[match + best_len - 1] != scan_end1 || window[match] != window[scan]
						|| window[++match] != window[scan + 1])
					continue;

				// The check at best_len-1 can be removed because it will be made
				// again later. (This heuristic is not always a win.)
				// It is not necessary to compare scan[2] and match[2] since they
				// are always equal when the other bytes match, given that
				// the hash keys are equal and that HASH_BITS >= 8.
				scan += 2;
				match++;

				// We check for insufficient lookahead only every 8th comparison;
				// the 256th check will be made at strstart+258.
				do {
				} while (window[++scan] == window[++match] && window[++scan] == window[++match] && window[++scan] == window[++match]
						&& window[++scan] == window[++match] && window[++scan] == window[++match] && window[++scan] == window[++match]
						&& window[++scan] == window[++match] && window[++scan] == window[++match] && scan < strend);

				len = MAX_MATCH - (strend - scan);
				scan = strend - MAX_MATCH;

				if (len > best_len) {
					match_start = cur_match;
					best_len = len;
					if (len >= _nice_match)
						break;
					scan_end1 = window[scan + best_len - 1];
					scan_end = window[scan + best_len];
				}

			} while ((cur_match = (prev[cur_match & wmask] & 0xffff)) > limit && --chain_length !== 0);

			if (best_len <= lookahead)
				return best_len;
			return lookahead;
		}

		// Compress as much as possible from the input stream, return the current
		// block state.
		// This function does not perform lazy evaluation of matches and inserts
		// new strings in the dictionary only for unmatched strings or for short
		// matches. It is used only for the fast compression options.
		function deflate_fast(flush) {
			// short hash_head = 0; // head of the hash chain
			var hash_head = 0; // head of the hash chain
			var bflush; // set if current block must be flushed

			while (true) {
				// Make sure that we always have enough lookahead, except
				// at the end of the input file. We need MAX_MATCH bytes
				// for the next match, plus MIN_MATCH bytes to insert the
				// string following the next match.
				if (lookahead < MIN_LOOKAHEAD) {
					fill_window();
					if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
						return NeedMore;
					}
					if (lookahead === 0)
						break; // flush the current block
				}

				// Insert the string window[strstart .. strstart+2] in the
				// dictionary, and set hash_head to the head of the hash chain:
				if (lookahead >= MIN_MATCH) {
					ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;

					// prev[strstart&w_mask]=hash_head=head[ins_h];
					hash_head = (head[ins_h] & 0xffff);
					prev[strstart & w_mask] = head[ins_h];
					head[ins_h] = strstart;
				}

				// Find the longest match, discarding those <= prev_length.
				// At this point we have always match_length < MIN_MATCH

				if (hash_head !== 0 && ((strstart - hash_head) & 0xffff) <= w_size - MIN_LOOKAHEAD) {
					// To simplify the code, we prevent matches with the string
					// of window index 0 (in particular we have to avoid a match
					// of the string with itself at the start of the input file).
					if (strategy != Z_HUFFMAN_ONLY) {
						match_length = longest_match(hash_head);
					}
					// longest_match() sets match_start
				}
				if (match_length >= MIN_MATCH) {
					// check_match(strstart, match_start, match_length);

					bflush = _tr_tally(strstart - match_start, match_length - MIN_MATCH);

					lookahead -= match_length;

					// Insert new strings in the hash table only if the match length
					// is not too large. This saves time but degrades compression.
					if (match_length <= max_lazy_match && lookahead >= MIN_MATCH) {
						match_length--; // string at strstart already in hash table
						do {
							strstart++;

							ins_h = ((ins_h << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
							// prev[strstart&w_mask]=hash_head=head[ins_h];
							hash_head = (head[ins_h] & 0xffff);
							prev[strstart & w_mask] = head[ins_h];
							head[ins_h] = strstart;

							// strstart never exceeds WSIZE-MAX_MATCH, so there are
							// always MIN_MATCH bytes ahead.
						} while (--match_length !== 0);
						strstart++;
					} else {
						strstart += match_length;
						match_length = 0;
						ins_h = window[strstart] & 0xff;

						ins_h = (((ins_h) << hash_shift) ^ (window[strstart + 1] & 0xff)) & hash_mask;
						// If lookahead < MIN_MATCH, ins_h is garbage, but it does
						// not
						// matter since it will be recomputed at next deflate call.
					}
				} else {
					// No match, output a literal byte

					bflush = _tr_tally(0, window[strstart] & 0xff);
					lookahead--;
					strstart++;
				}
				if (bflush) {

					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;
				}
			}

			flush_block_only(flush == Z_FINISH);
			if (strm.avail_out === 0) {
				if (flush == Z_FINISH)
					return FinishStarted;
				else
					return NeedMore;
			}
			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		// Same as above, but achieves better compression. We use a lazy
		// evaluation for matches: a match is finally adopted only if there is
		// no better match at the next window position.
		function deflate_slow(flush) {
			// short hash_head = 0; // head of hash chain
			var hash_head = 0; // head of hash chain
			var bflush; // set if current block must be flushed
			var max_insert;

			// Process the input block.
			while (true) {
				// Make sure that we always have enough lookahead, except
				// at the end of the input file. We need MAX_MATCH bytes
				// for the next match, plus MIN_MATCH bytes to insert the
				// string following the next match.

				if (lookahead < MIN_LOOKAHEAD) {
					fill_window();
					if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
						return NeedMore;
					}
					if (lookahead === 0)
						break; // flush the current block
				}

				// Insert the string window[strstart .. strstart+2] in the
				// dictionary, and set hash_head to the head of the hash chain:

				if (lookahead >= MIN_MATCH) {
					ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
					// prev[strstart&w_mask]=hash_head=head[ins_h];
					hash_head = (head[ins_h] & 0xffff);
					prev[strstart & w_mask] = head[ins_h];
					head[ins_h] = strstart;
				}

				// Find the longest match, discarding those <= prev_length.
				prev_length = match_length;
				prev_match = match_start;
				match_length = MIN_MATCH - 1;

				if (hash_head !== 0 && prev_length < max_lazy_match && ((strstart - hash_head) & 0xffff) <= w_size - MIN_LOOKAHEAD) {
					// To simplify the code, we prevent matches with the string
					// of window index 0 (in particular we have to avoid a match
					// of the string with itself at the start of the input file).

					if (strategy != Z_HUFFMAN_ONLY) {
						match_length = longest_match(hash_head);
					}
					// longest_match() sets match_start

					if (match_length <= 5 && (strategy == Z_FILTERED || (match_length == MIN_MATCH && strstart - match_start > 4096))) {

						// If prev_match is also MIN_MATCH, match_start is garbage
						// but we will ignore the current match anyway.
						match_length = MIN_MATCH - 1;
					}
				}

				// If there was a match at the previous step and the current
				// match is not better, output the previous match:
				if (prev_length >= MIN_MATCH && match_length <= prev_length) {
					max_insert = strstart + lookahead - MIN_MATCH;
					// Do not insert strings in hash table beyond this.

					// check_match(strstart-1, prev_match, prev_length);

					bflush = _tr_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);

					// Insert in hash table all strings up to the end of the match.
					// strstart-1 and strstart are already inserted. If there is not
					// enough lookahead, the last two strings are not inserted in
					// the hash table.
					lookahead -= prev_length - 1;
					prev_length -= 2;
					do {
						if (++strstart <= max_insert) {
							ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
							// prev[strstart&w_mask]=hash_head=head[ins_h];
							hash_head = (head[ins_h] & 0xffff);
							prev[strstart & w_mask] = head[ins_h];
							head[ins_h] = strstart;
						}
					} while (--prev_length !== 0);
					match_available = 0;
					match_length = MIN_MATCH - 1;
					strstart++;

					if (bflush) {
						flush_block_only(false);
						if (strm.avail_out === 0)
							return NeedMore;
					}
				} else if (match_available !== 0) {

					// If there was no match at the previous position, output a
					// single literal. If there was a match but the current match
					// is longer, truncate the previous match to a single literal.

					bflush = _tr_tally(0, window[strstart - 1] & 0xff);

					if (bflush) {
						flush_block_only(false);
					}
					strstart++;
					lookahead--;
					if (strm.avail_out === 0)
						return NeedMore;
				} else {
					// There is no previous match to compare with, wait for
					// the next step to decide.

					match_available = 1;
					strstart++;
					lookahead--;
				}
			}

			if (match_available !== 0) {
				bflush = _tr_tally(0, window[strstart - 1] & 0xff);
				match_available = 0;
			}
			flush_block_only(flush == Z_FINISH);

			if (strm.avail_out === 0) {
				if (flush == Z_FINISH)
					return FinishStarted;
				else
					return NeedMore;
			}

			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		function deflateReset(strm) {
			strm.total_in = strm.total_out = 0;
			strm.msg = null; //
			
			that.pending = 0;
			that.pending_out = 0;

			status = BUSY_STATE;

			last_flush = Z_NO_FLUSH;

			tr_init();
			lm_init();
			return Z_OK;
		}

		that.deflateInit = function(strm, _level, bits, _method, memLevel, _strategy) {
			if (!_method)
				_method = Z_DEFLATED;
			if (!memLevel)
				memLevel = DEF_MEM_LEVEL;
			if (!_strategy)
				_strategy = Z_DEFAULT_STRATEGY;

			// byte[] my_version=ZLIB_VERSION;

			//
			// if (!version || version[0] != my_version[0]
			// || stream_size != sizeof(z_stream)) {
			// return Z_VERSION_ERROR;
			// }

			strm.msg = null;

			if (_level == Z_DEFAULT_COMPRESSION)
				_level = 6;

			if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || _method != Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0
					|| _strategy > Z_HUFFMAN_ONLY) {
				return Z_STREAM_ERROR;
			}

			strm.dstate = that;

			w_bits = bits;
			w_size = 1 << w_bits;
			w_mask = w_size - 1;

			hash_bits = memLevel + 7;
			hash_size = 1 << hash_bits;
			hash_mask = hash_size - 1;
			hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH);

			window = new Uint8Array(w_size * 2);
			prev = [];
			head = [];

			lit_bufsize = 1 << (memLevel + 6); // 16K elements by default

			// We overlay pending_buf and d_buf+l_buf. This works since the average
			// output size for (length,distance) codes is <= 24 bits.
			that.pending_buf = new Uint8Array(lit_bufsize * 4);
			pending_buf_size = lit_bufsize * 4;

			d_buf = Math.floor(lit_bufsize / 2);
			l_buf = (1 + 2) * lit_bufsize;

			level = _level;

			strategy = _strategy;
			method = _method & 0xff;

			return deflateReset(strm);
		};

		that.deflateEnd = function() {
			if (status != INIT_STATE && status != BUSY_STATE && status != FINISH_STATE) {
				return Z_STREAM_ERROR;
			}
			// Deallocate in reverse order of allocations:
			that.pending_buf = null;
			head = null;
			prev = null;
			window = null;
			// free
			that.dstate = null;
			return status == BUSY_STATE ? Z_DATA_ERROR : Z_OK;
		};

		that.deflateParams = function(strm, _level, _strategy) {
			var err = Z_OK;

			if (_level == Z_DEFAULT_COMPRESSION) {
				_level = 6;
			}
			if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
				return Z_STREAM_ERROR;
			}

			if (config_table[level].func != config_table[_level].func && strm.total_in !== 0) {
				// Flush the last buffer:
				err = strm.deflate(Z_PARTIAL_FLUSH);
			}

			if (level != _level) {
				level = _level;
				max_lazy_match = config_table[level].max_lazy;
				good_match = config_table[level].good_length;
				nice_match = config_table[level].nice_length;
				max_chain_length = config_table[level].max_chain;
			}
			strategy = _strategy;
			return err;
		};

		that.deflateSetDictionary = function(strm, dictionary, dictLength) {
			var length = dictLength;
			var n, index = 0;

			if (!dictionary || status != INIT_STATE)
				return Z_STREAM_ERROR;

			if (length < MIN_MATCH)
				return Z_OK;
			if (length > w_size - MIN_LOOKAHEAD) {
				length = w_size - MIN_LOOKAHEAD;
				index = dictLength - length; // use the tail of the dictionary
			}
			window.set(dictionary.subarray(index, index + length), 0);

			strstart = length;
			block_start = length;

			// Insert all strings in the hash table (except for the last two bytes).
			// s->lookahead stays null, so s->ins_h will be recomputed at the next
			// call of fill_window.

			ins_h = window[0] & 0xff;
			ins_h = (((ins_h) << hash_shift) ^ (window[1] & 0xff)) & hash_mask;

			for (n = 0; n <= length - MIN_MATCH; n++) {
				ins_h = (((ins_h) << hash_shift) ^ (window[(n) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
				prev[n & w_mask] = head[ins_h];
				head[ins_h] = n;
			}
			return Z_OK;
		};

		that.deflate = function(_strm, flush) {
			var i, header, level_flags, old_flush, bstate;

			if (flush > Z_FINISH || flush < 0) {
				return Z_STREAM_ERROR;
			}

			if (!_strm.next_out || (!_strm.next_in && _strm.avail_in !== 0) || (status == FINISH_STATE && flush != Z_FINISH)) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_STREAM_ERROR)];
				return Z_STREAM_ERROR;
			}
			if (_strm.avail_out === 0) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			strm = _strm; // just in case
			old_flush = last_flush;
			last_flush = flush;

			// Write the zlib header
			if (status == INIT_STATE) {
				header = (Z_DEFLATED + ((w_bits - 8) << 4)) << 8;
				level_flags = ((level - 1) & 0xff) >> 1;

				if (level_flags > 3)
					level_flags = 3;
				header |= (level_flags << 6);
				if (strstart !== 0)
					header |= PRESET_DICT;
				header += 31 - (header % 31);

				status = BUSY_STATE;
				putShortMSB(header);
			}

			// Flush as much pending output as possible
			if (that.pending !== 0) {
				strm.flush_pending();
				if (strm.avail_out === 0) {
					// console.log(" avail_out==0");
					// Since avail_out is 0, deflate will be called again with
					// more output space, but possibly with both pending and
					// avail_in equal to zero. There won't be anything to do,
					// but this is not an error situation so make sure we
					// return OK instead of BUF_ERROR at next call of deflate:
					last_flush = -1;
					return Z_OK;
				}

				// Make sure there is something to do and avoid duplicate
				// consecutive
				// flushes. For repeated and useless calls with Z_FINISH, we keep
				// returning Z_STREAM_END instead of Z_BUFF_ERROR.
			} else if (strm.avail_in === 0 && flush <= old_flush && flush != Z_FINISH) {
				strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			// User must not provide more input after the first FINISH:
			if (status == FINISH_STATE && strm.avail_in !== 0) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			// Start a new block or continue the current one.
			if (strm.avail_in !== 0 || lookahead !== 0 || (flush != Z_NO_FLUSH && status != FINISH_STATE)) {
				bstate = -1;
				switch (config_table[level].func) {
				case STORED:
					bstate = deflate_stored(flush);
					break;
				case FAST:
					bstate = deflate_fast(flush);
					break;
				case SLOW:
					bstate = deflate_slow(flush);
					break;
				default:
				}

				if (bstate == FinishStarted || bstate == FinishDone) {
					status = FINISH_STATE;
				}
				if (bstate == NeedMore || bstate == FinishStarted) {
					if (strm.avail_out === 0) {
						last_flush = -1; // avoid BUF_ERROR next call, see above
					}
					return Z_OK;
					// If flush != Z_NO_FLUSH && avail_out === 0, the next call
					// of deflate should use the same flush parameter to make sure
					// that the flush is complete. So we don't have to output an
					// empty block here, this will be done at next call. This also
					// ensures that for a very small output buffer, we emit at most
					// one empty block.
				}

				if (bstate == BlockDone) {
					if (flush == Z_PARTIAL_FLUSH) {
						_tr_align();
					} else { // FULL_FLUSH or SYNC_FLUSH
						_tr_stored_block(0, 0, false);
						// For a full flush, this empty block will be recognized
						// as a special marker by inflate_sync().
						if (flush == Z_FULL_FLUSH) {
							// state.head[s.hash_size-1]=0;
							for (i = 0; i < hash_size/*-1*/; i++)
								// forget history
								head[i] = 0;
						}
					}
					strm.flush_pending();
					if (strm.avail_out === 0) {
						last_flush = -1; // avoid BUF_ERROR at next call, see above
						return Z_OK;
					}
				}
			}

			if (flush != Z_FINISH)
				return Z_OK;
			return Z_STREAM_END;
		};
	}

	// ZStream

	function ZStream() {
		var that = this;
		that.next_in_index = 0;
		that.next_out_index = 0;
		// that.next_in; // next input byte
		that.avail_in = 0; // number of bytes available at next_in
		that.total_in = 0; // total nb of input bytes read so far
		// that.next_out; // next output byte should be put there
		that.avail_out = 0; // remaining free space at next_out
		that.total_out = 0; // total nb of bytes output so far
		// that.msg;
		// that.dstate;
	}

	ZStream.prototype = {
		deflateInit : function(level, bits) {
			var that = this;
			that.dstate = new Deflate();
			if (!bits)
				bits = MAX_BITS;
			return that.dstate.deflateInit(that, level, bits);
		},

		deflate : function(flush) {
			var that = this;
			if (!that.dstate) {
				return Z_STREAM_ERROR;
			}
			return that.dstate.deflate(that, flush);
		},

		deflateEnd : function() {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			var ret = that.dstate.deflateEnd();
			that.dstate = null;
			return ret;
		},

		deflateParams : function(level, strategy) {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			return that.dstate.deflateParams(that, level, strategy);
		},

		deflateSetDictionary : function(dictionary, dictLength) {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
		},

		// Read a new buffer from the current input stream, update the
		// total number of bytes read. All deflate() input goes through
		// this function so some applications may wish to modify it to avoid
		// allocating a large strm->next_in buffer and copying from it.
		// (See also flush_pending()).
		read_buf : function(buf, start, size) {
			var that = this;
			var len = that.avail_in;
			if (len > size)
				len = size;
			if (len === 0)
				return 0;
			that.avail_in -= len;
			buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
			that.next_in_index += len;
			that.total_in += len;
			return len;
		},

		// Flush as much pending output as possible. All deflate() output goes
		// through this function so some applications may wish to modify it
		// to avoid allocating a large strm->next_out buffer and copying into it.
		// (See also read_buf()).
		flush_pending : function() {
			var that = this;
			var len = that.dstate.pending;

			if (len > that.avail_out)
				len = that.avail_out;
			if (len === 0)
				return;

			// if (that.dstate.pending_buf.length <= that.dstate.pending_out || that.next_out.length <= that.next_out_index
			// || that.dstate.pending_buf.length < (that.dstate.pending_out + len) || that.next_out.length < (that.next_out_index +
			// len)) {
			// console.log(that.dstate.pending_buf.length + ", " + that.dstate.pending_out + ", " + that.next_out.length + ", " +
			// that.next_out_index + ", " + len);
			// console.log("avail_out=" + that.avail_out);
			// }

			that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);

			that.next_out_index += len;
			that.dstate.pending_out += len;
			that.total_out += len;
			that.avail_out -= len;
			that.dstate.pending -= len;
			if (that.dstate.pending === 0) {
				that.dstate.pending_out = 0;
			}
		}
	};

	// Deflater

	function Deflater(level) {
		var that = this;
		var z = new ZStream();
		var bufsize = 512;
		var flush = Z_NO_FLUSH;
		var buf = new Uint8Array(bufsize);

		if (typeof level == "undefined")
			level = Z_DEFAULT_COMPRESSION;
		z.deflateInit(level);
		z.next_out = buf;

		that.append = function(data, onprogress) {
			var err, buffers = [], lastIndex = 0, bufferIndex = 0, bufferSize = 0, array;
			if (!data.length)
				return;
			z.next_in_index = 0;
			z.next_in = data;
			z.avail_in = data.length;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				err = z.deflate(flush);
				if (err != Z_OK)
					throw "deflating: " + z.msg;
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
			var err, buffers = [], bufferIndex = 0, bufferSize = 0, array;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				err = z.deflate(Z_FINISH);
				if (err != Z_STREAM_END && err != Z_OK)
					throw "deflating: " + z.msg;
				if (bufsize - z.avail_out > 0)
					buffers.push(new Uint8Array(buf.subarray(0, z.next_out_index)));
				bufferSize += z.next_out_index;
			} while (z.avail_in > 0 || z.avail_out === 0);
			z.deflateEnd();
			array = new Uint8Array(bufferSize);
			buffers.forEach(function(chunk) {
				array.set(chunk, bufferIndex);
				bufferIndex += chunk.length;
			});
			return array;
		};
	}

	var deflater;

	if (obj.zip)
		obj.zip.Deflater = Deflater;
	else {
		deflater = new Deflater();
		obj.addEventListener("message", function(event) {
			var message = event.data;
			if (message.init) {
				deflater = new Deflater(message.level);
				obj.postMessage({
					oninit : true
				});
			}
			if (message.append)
				obj.postMessage({
					onappend : true,
					data : deflater.append(message.data, function(current) {
						obj.postMessage({
							progress : true,
							current : current
						});
					})
				});
			if (message.flush)
				obj.postMessage({
					onflush : true,
					data : deflater.flush()
				});
		}, false);
	}

})(self);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM4M2VkZmU0MjczM2ZjOGUyYzcud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL1RoaXJkUGFydHkvV29ya2Vycy9kZWZsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1uY242bmxnMmYxMXRsOGZrYmZmanN2MnQ5IS4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1yYThoMDcyM3ZhMmM0bjY1M3Z6enVheXZpIS4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzL2J1aWxkcHJvY2Vzcy9yZW1vdmVDZXNpdW1EZWJ1Z1ByYWdtYXMuanMhLi9ub2RlX21vZHVsZXMvdGVycmlhanMtY2VzaXVtL1NvdXJjZS9UaGlyZFBhcnR5L1dvcmtlcnMvZGVmbGF0ZS5qc1wiKTtcbiIsIi8qXG4gQ29weXJpZ2h0IChjKSAyMDEzIEdpbGRhcyBMb3JtZWF1LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IFxuIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiBcbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuIDMuIFRoZSBuYW1lcyBvZiB0aGUgYXV0aG9ycyBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG5cbiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIGBgQVMgSVMnJyBBTkQgQU5ZIEVYUFJFU1NFRCBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsXG4gSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBKQ1JBRlQsXG4gSU5DLiBPUiBBTlkgQ09OVFJJQlVUT1JTIFRPIFRISVMgU09GVFdBUkUgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCxcbiBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsXG4gT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLypcbiAqIFRoaXMgcHJvZ3JhbSBpcyBiYXNlZCBvbiBKWmxpYiAxLjAuMiB5bW5rLCBKQ3JhZnQsSW5jLlxuICogSlpsaWIgaXMgYmFzZWQgb24gemxpYi0xLjEuMywgc28gYWxsIGNyZWRpdCBzaG91bGQgZ28gYXV0aG9yc1xuICogSmVhbi1sb3VwIEdhaWxseShqbG91cEBnemlwLm9yZykgYW5kIE1hcmsgQWRsZXIobWFkbGVyQGFsdW1uaS5jYWx0ZWNoLmVkdSlcbiAqIGFuZCBjb250cmlidXRvcnMgb2YgemxpYi5cbiAqL1xuXG4oZnVuY3Rpb24ob2JqKSB7XG5cblx0Ly8gR2xvYmFsXG5cblx0dmFyIE1BWF9CSVRTID0gMTU7XG5cdHZhciBEX0NPREVTID0gMzA7XG5cdHZhciBCTF9DT0RFUyA9IDE5O1xuXG5cdHZhciBMRU5HVEhfQ09ERVMgPSAyOTtcblx0dmFyIExJVEVSQUxTID0gMjU2O1xuXHR2YXIgTF9DT0RFUyA9IChMSVRFUkFMUyArIDEgKyBMRU5HVEhfQ09ERVMpO1xuXHR2YXIgSEVBUF9TSVpFID0gKDIgKiBMX0NPREVTICsgMSk7XG5cblx0dmFyIEVORF9CTE9DSyA9IDI1NjtcblxuXHQvLyBCaXQgbGVuZ3RoIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQkxfQklUUyBiaXRzXG5cdHZhciBNQVhfQkxfQklUUyA9IDc7XG5cblx0Ly8gcmVwZWF0IHByZXZpb3VzIGJpdCBsZW5ndGggMy02IHRpbWVzICgyIGJpdHMgb2YgcmVwZWF0IGNvdW50KVxuXHR2YXIgUkVQXzNfNiA9IDE2O1xuXG5cdC8vIHJlcGVhdCBhIHplcm8gbGVuZ3RoIDMtMTAgdGltZXMgKDMgYml0cyBvZiByZXBlYXQgY291bnQpXG5cdHZhciBSRVBaXzNfMTAgPSAxNztcblxuXHQvLyByZXBlYXQgYSB6ZXJvIGxlbmd0aCAxMS0xMzggdGltZXMgKDcgYml0cyBvZiByZXBlYXQgY291bnQpXG5cdHZhciBSRVBaXzExXzEzOCA9IDE4O1xuXG5cdC8vIFRoZSBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RoIGNvZGVzIGFyZSBzZW50IGluIG9yZGVyIG9mIGRlY3JlYXNpbmdcblx0Ly8gcHJvYmFiaWxpdHksIHRvIGF2b2lkIHRyYW5zbWl0dGluZyB0aGUgbGVuZ3RocyBmb3IgdW51c2VkIGJpdFxuXHQvLyBsZW5ndGggY29kZXMuXG5cblx0dmFyIEJ1Zl9zaXplID0gOCAqIDI7XG5cblx0Ly8gSlpsaWIgdmVyc2lvbiA6IFwiMS4wLjJcIlxuXHR2YXIgWl9ERUZBVUxUX0NPTVBSRVNTSU9OID0gLTE7XG5cblx0Ly8gY29tcHJlc3Npb24gc3RyYXRlZ3lcblx0dmFyIFpfRklMVEVSRUQgPSAxO1xuXHR2YXIgWl9IVUZGTUFOX09OTFkgPSAyO1xuXHR2YXIgWl9ERUZBVUxUX1NUUkFURUdZID0gMDtcblxuXHR2YXIgWl9OT19GTFVTSCA9IDA7XG5cdHZhciBaX1BBUlRJQUxfRkxVU0ggPSAxO1xuXHR2YXIgWl9GVUxMX0ZMVVNIID0gMztcblx0dmFyIFpfRklOSVNIID0gNDtcblxuXHR2YXIgWl9PSyA9IDA7XG5cdHZhciBaX1NUUkVBTV9FTkQgPSAxO1xuXHR2YXIgWl9ORUVEX0RJQ1QgPSAyO1xuXHR2YXIgWl9TVFJFQU1fRVJST1IgPSAtMjtcblx0dmFyIFpfREFUQV9FUlJPUiA9IC0zO1xuXHR2YXIgWl9CVUZfRVJST1IgPSAtNTtcblxuXHQvLyBUcmVlXG5cblx0Ly8gc2VlIGRlZmluaXRpb24gb2YgYXJyYXkgZGlzdF9jb2RlIGJlbG93XG5cdHZhciBfZGlzdF9jb2RlID0gWyAwLCAxLCAyLCAzLCA0LCA0LCA1LCA1LCA2LCA2LCA2LCA2LCA3LCA3LCA3LCA3LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA5LCA5LCA5LCA5LCA5LCA5LCA5LCA5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCxcblx0XHRcdDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLFxuXHRcdFx0MTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsXG5cdFx0XHQxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCxcblx0XHRcdDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LFxuXHRcdFx0MTQsIDE0LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsXG5cdFx0XHQxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDAsIDAsIDE2LCAxNywgMTgsIDE4LCAxOSwgMTksXG5cdFx0XHQyMCwgMjAsIDIwLCAyMCwgMjEsIDIxLCAyMSwgMjEsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcblx0XHRcdDI0LCAyNCwgMjQsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LFxuXHRcdFx0MjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsXG5cdFx0XHQyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCxcblx0XHRcdDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI5LFxuXHRcdFx0MjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksXG5cdFx0XHQyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjkgXTtcblxuXHRmdW5jdGlvbiBUcmVlKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdC8vIGR5bl90cmVlOyAvLyB0aGUgZHluYW1pYyB0cmVlXG5cdFx0Ly8gbWF4X2NvZGU7IC8vIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeVxuXHRcdC8vIHN0YXRfZGVzYzsgLy8gdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGljIHRyZWVcblxuXHRcdC8vIENvbXB1dGUgdGhlIG9wdGltYWwgYml0IGxlbmd0aHMgZm9yIGEgdHJlZSBhbmQgdXBkYXRlIHRoZSB0b3RhbCBiaXRcblx0XHQvLyBsZW5ndGhcblx0XHQvLyBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG5cdFx0Ly8gSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LCBoZWFwW2hlYXBfbWF4XSBhbmRcblx0XHQvLyBhYm92ZSBhcmUgdGhlIHRyZWUgbm9kZXMgc29ydGVkIGJ5IGluY3JlYXNpbmcgZnJlcXVlbmN5LlxuXHRcdC8vIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGQgbGVuIGlzIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoLCB0aGVcblx0XHQvLyBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgZnJlcXVlbmNpZXMgZm9yIGVhY2ggYml0IGxlbmd0aC5cblx0XHQvLyBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpcyBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXNcblx0XHQvLyBub3QgbnVsbC5cblx0XHRmdW5jdGlvbiBnZW5fYml0bGVuKHMpIHtcblx0XHRcdHZhciB0cmVlID0gdGhhdC5keW5fdHJlZTtcblx0XHRcdHZhciBzdHJlZSA9IHRoYXQuc3RhdF9kZXNjLnN0YXRpY190cmVlO1xuXHRcdFx0dmFyIGV4dHJhID0gdGhhdC5zdGF0X2Rlc2MuZXh0cmFfYml0cztcblx0XHRcdHZhciBiYXNlID0gdGhhdC5zdGF0X2Rlc2MuZXh0cmFfYmFzZTtcblx0XHRcdHZhciBtYXhfbGVuZ3RoID0gdGhhdC5zdGF0X2Rlc2MubWF4X2xlbmd0aDtcblx0XHRcdHZhciBoOyAvLyBoZWFwIGluZGV4XG5cdFx0XHR2YXIgbiwgbTsgLy8gaXRlcmF0ZSBvdmVyIHRoZSB0cmVlIGVsZW1lbnRzXG5cdFx0XHR2YXIgYml0czsgLy8gYml0IGxlbmd0aFxuXHRcdFx0dmFyIHhiaXRzOyAvLyBleHRyYSBiaXRzXG5cdFx0XHR2YXIgZjsgLy8gZnJlcXVlbmN5XG5cdFx0XHR2YXIgb3ZlcmZsb3cgPSAwOyAvLyBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCBiaXQgbGVuZ3RoIHRvbyBsYXJnZVxuXG5cdFx0XHRmb3IgKGJpdHMgPSAwOyBiaXRzIDw9IE1BWF9CSVRTOyBiaXRzKyspXG5cdFx0XHRcdHMuYmxfY291bnRbYml0c10gPSAwO1xuXG5cdFx0XHQvLyBJbiBhIGZpcnN0IHBhc3MsIGNvbXB1dGUgdGhlIG9wdGltYWwgYml0IGxlbmd0aHMgKHdoaWNoIG1heVxuXHRcdFx0Ly8gb3ZlcmZsb3cgaW4gdGhlIGNhc2Ugb2YgdGhlIGJpdCBsZW5ndGggdHJlZSkuXG5cdFx0XHR0cmVlW3MuaGVhcFtzLmhlYXBfbWF4XSAqIDIgKyAxXSA9IDA7IC8vIHJvb3Qgb2YgdGhlIGhlYXBcblxuXHRcdFx0Zm9yIChoID0gcy5oZWFwX21heCArIDE7IGggPCBIRUFQX1NJWkU7IGgrKykge1xuXHRcdFx0XHRuID0gcy5oZWFwW2hdO1xuXHRcdFx0XHRiaXRzID0gdHJlZVt0cmVlW24gKiAyICsgMV0gKiAyICsgMV0gKyAxO1xuXHRcdFx0XHRpZiAoYml0cyA+IG1heF9sZW5ndGgpIHtcblx0XHRcdFx0XHRiaXRzID0gbWF4X2xlbmd0aDtcblx0XHRcdFx0XHRvdmVyZmxvdysrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRyZWVbbiAqIDIgKyAxXSA9IGJpdHM7XG5cdFx0XHRcdC8vIFdlIG92ZXJ3cml0ZSB0cmVlW24qMisxXSB3aGljaCBpcyBubyBsb25nZXIgbmVlZGVkXG5cblx0XHRcdFx0aWYgKG4gPiB0aGF0Lm1heF9jb2RlKVxuXHRcdFx0XHRcdGNvbnRpbnVlOyAvLyBub3QgYSBsZWFmIG5vZGVcblxuXHRcdFx0XHRzLmJsX2NvdW50W2JpdHNdKys7XG5cdFx0XHRcdHhiaXRzID0gMDtcblx0XHRcdFx0aWYgKG4gPj0gYmFzZSlcblx0XHRcdFx0XHR4Yml0cyA9IGV4dHJhW24gLSBiYXNlXTtcblx0XHRcdFx0ZiA9IHRyZWVbbiAqIDJdO1xuXHRcdFx0XHRzLm9wdF9sZW4gKz0gZiAqIChiaXRzICsgeGJpdHMpO1xuXHRcdFx0XHRpZiAoc3RyZWUpXG5cdFx0XHRcdFx0cy5zdGF0aWNfbGVuICs9IGYgKiAoc3RyZWVbbiAqIDIgKyAxXSArIHhiaXRzKTtcblx0XHRcdH1cblx0XHRcdGlmIChvdmVyZmxvdyA9PT0gMClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBUaGlzIGhhcHBlbnMgZm9yIGV4YW1wbGUgb24gb2JqMiBhbmQgcGljIG9mIHRoZSBDYWxnYXJ5IGNvcnB1c1xuXHRcdFx0Ly8gRmluZCB0aGUgZmlyc3QgYml0IGxlbmd0aCB3aGljaCBjb3VsZCBpbmNyZWFzZTpcblx0XHRcdGRvIHtcblx0XHRcdFx0Yml0cyA9IG1heF9sZW5ndGggLSAxO1xuXHRcdFx0XHR3aGlsZSAocy5ibF9jb3VudFtiaXRzXSA9PT0gMClcblx0XHRcdFx0XHRiaXRzLS07XG5cdFx0XHRcdHMuYmxfY291bnRbYml0c10tLTsgLy8gbW92ZSBvbmUgbGVhZiBkb3duIHRoZSB0cmVlXG5cdFx0XHRcdHMuYmxfY291bnRbYml0cyArIDFdICs9IDI7IC8vIG1vdmUgb25lIG92ZXJmbG93IGl0ZW0gYXMgaXRzIGJyb3RoZXJcblx0XHRcdFx0cy5ibF9jb3VudFttYXhfbGVuZ3RoXS0tO1xuXHRcdFx0XHQvLyBUaGUgYnJvdGhlciBvZiB0aGUgb3ZlcmZsb3cgaXRlbSBhbHNvIG1vdmVzIG9uZSBzdGVwIHVwLFxuXHRcdFx0XHQvLyBidXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgYmxfY291bnRbbWF4X2xlbmd0aF1cblx0XHRcdFx0b3ZlcmZsb3cgLT0gMjtcblx0XHRcdH0gd2hpbGUgKG92ZXJmbG93ID4gMCk7XG5cblx0XHRcdGZvciAoYml0cyA9IG1heF9sZW5ndGg7IGJpdHMgIT09IDA7IGJpdHMtLSkge1xuXHRcdFx0XHRuID0gcy5ibF9jb3VudFtiaXRzXTtcblx0XHRcdFx0d2hpbGUgKG4gIT09IDApIHtcblx0XHRcdFx0XHRtID0gcy5oZWFwWy0taF07XG5cdFx0XHRcdFx0aWYgKG0gPiB0aGF0Lm1heF9jb2RlKVxuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0aWYgKHRyZWVbbSAqIDIgKyAxXSAhPSBiaXRzKSB7XG5cdFx0XHRcdFx0XHRzLm9wdF9sZW4gKz0gKGJpdHMgLSB0cmVlW20gKiAyICsgMV0pICogdHJlZVttICogMl07XG5cdFx0XHRcdFx0XHR0cmVlW20gKiAyICsgMV0gPSBiaXRzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXZlcnNlIHRoZSBmaXJzdCBsZW4gYml0cyBvZiBhIGNvZGUsIHVzaW5nIHN0cmFpZ2h0Zm9yd2FyZCBjb2RlIChhXG5cdFx0Ly8gZmFzdGVyXG5cdFx0Ly8gbWV0aG9kIHdvdWxkIHVzZSBhIHRhYmxlKVxuXHRcdC8vIElOIGFzc2VydGlvbjogMSA8PSBsZW4gPD0gMTVcblx0XHRmdW5jdGlvbiBiaV9yZXZlcnNlKGNvZGUsIC8vIHRoZSB2YWx1ZSB0byBpbnZlcnRcblx0XHRsZW4gLy8gaXRzIGJpdCBsZW5ndGhcblx0XHQpIHtcblx0XHRcdHZhciByZXMgPSAwO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXMgfD0gY29kZSAmIDE7XG5cdFx0XHRcdGNvZGUgPj4+PSAxO1xuXHRcdFx0XHRyZXMgPDw9IDE7XG5cdFx0XHR9IHdoaWxlICgtLWxlbiA+IDApO1xuXHRcdFx0cmV0dXJuIHJlcyA+Pj4gMTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgY29kZXMgZm9yIGEgZ2l2ZW4gdHJlZSBhbmQgYml0IGNvdW50cyAod2hpY2ggbmVlZCBub3QgYmVcblx0XHQvLyBvcHRpbWFsKS5cblx0XHQvLyBJTiBhc3NlcnRpb246IHRoZSBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgYml0IGxlbmd0aCBzdGF0aXN0aWNzIGZvclxuXHRcdC8vIHRoZSBnaXZlbiB0cmVlIGFuZCB0aGUgZmllbGQgbGVuIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG5cdFx0Ly8gT1VUIGFzc2VydGlvbjogdGhlIGZpZWxkIGNvZGUgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cyBvZiBub25cblx0XHQvLyB6ZXJvIGNvZGUgbGVuZ3RoLlxuXHRcdGZ1bmN0aW9uIGdlbl9jb2Rlcyh0cmVlLCAvLyB0aGUgdHJlZSB0byBkZWNvcmF0ZVxuXHRcdG1heF9jb2RlLCAvLyBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3lcblx0XHRibF9jb3VudCAvLyBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoXG5cdFx0KSB7XG5cdFx0XHR2YXIgbmV4dF9jb2RlID0gW107IC8vIG5leHQgY29kZSB2YWx1ZSBmb3IgZWFjaFxuXHRcdFx0Ly8gYml0IGxlbmd0aFxuXHRcdFx0dmFyIGNvZGUgPSAwOyAvLyBydW5uaW5nIGNvZGUgdmFsdWVcblx0XHRcdHZhciBiaXRzOyAvLyBiaXQgaW5kZXhcblx0XHRcdHZhciBuOyAvLyBjb2RlIGluZGV4XG5cdFx0XHR2YXIgbGVuO1xuXG5cdFx0XHQvLyBUaGUgZGlzdHJpYnV0aW9uIGNvdW50cyBhcmUgZmlyc3QgdXNlZCB0byBnZW5lcmF0ZSB0aGUgY29kZSB2YWx1ZXNcblx0XHRcdC8vIHdpdGhvdXQgYml0IHJldmVyc2FsLlxuXHRcdFx0Zm9yIChiaXRzID0gMTsgYml0cyA8PSBNQVhfQklUUzsgYml0cysrKSB7XG5cdFx0XHRcdG5leHRfY29kZVtiaXRzXSA9IGNvZGUgPSAoKGNvZGUgKyBibF9jb3VudFtiaXRzIC0gMV0pIDw8IDEpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDaGVjayB0aGF0IHRoZSBiaXQgY291bnRzIGluIGJsX2NvdW50IGFyZSBjb25zaXN0ZW50LiBUaGUgbGFzdCBjb2RlXG5cdFx0XHQvLyBtdXN0IGJlIGFsbCBvbmVzLlxuXHRcdFx0Ly8gQXNzZXJ0IChjb2RlICsgYmxfY291bnRbTUFYX0JJVFNdLTEgPT0gKDE8PE1BWF9CSVRTKS0xLFxuXHRcdFx0Ly8gXCJpbmNvbnNpc3RlbnQgYml0IGNvdW50c1wiKTtcblx0XHRcdC8vIFRyYWNldigoc3RkZXJyLFwiXFxuZ2VuX2NvZGVzOiBtYXhfY29kZSAlZCBcIiwgbWF4X2NvZGUpKTtcblxuXHRcdFx0Zm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG5cdFx0XHRcdGxlbiA9IHRyZWVbbiAqIDIgKyAxXTtcblx0XHRcdFx0aWYgKGxlbiA9PT0gMClcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0Ly8gTm93IHJldmVyc2UgdGhlIGJpdHNcblx0XHRcdFx0dHJlZVtuICogMl0gPSBiaV9yZXZlcnNlKG5leHRfY29kZVtsZW5dKyssIGxlbik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ29uc3RydWN0IG9uZSBIdWZmbWFuIHRyZWUgYW5kIGFzc2lnbnMgdGhlIGNvZGUgYml0IHN0cmluZ3MgYW5kIGxlbmd0aHMuXG5cdFx0Ly8gVXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoIGZvciB0aGUgY3VycmVudCBibG9jay5cblx0XHQvLyBJTiBhc3NlcnRpb246IHRoZSBmaWVsZCBmcmVxIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG5cdFx0Ly8gT1VUIGFzc2VydGlvbnM6IHRoZSBmaWVsZHMgbGVuIGFuZCBjb2RlIGFyZSBzZXQgdG8gdGhlIG9wdGltYWwgYml0IGxlbmd0aFxuXHRcdC8vIGFuZCBjb3JyZXNwb25kaW5nIGNvZGUuIFRoZSBsZW5ndGggb3B0X2xlbiBpcyB1cGRhdGVkOyBzdGF0aWNfbGVuIGlzXG5cdFx0Ly8gYWxzbyB1cGRhdGVkIGlmIHN0cmVlIGlzIG5vdCBudWxsLiBUaGUgZmllbGQgbWF4X2NvZGUgaXMgc2V0LlxuXHRcdHRoYXQuYnVpbGRfdHJlZSA9IGZ1bmN0aW9uKHMpIHtcblx0XHRcdHZhciB0cmVlID0gdGhhdC5keW5fdHJlZTtcblx0XHRcdHZhciBzdHJlZSA9IHRoYXQuc3RhdF9kZXNjLnN0YXRpY190cmVlO1xuXHRcdFx0dmFyIGVsZW1zID0gdGhhdC5zdGF0X2Rlc2MuZWxlbXM7XG5cdFx0XHR2YXIgbiwgbTsgLy8gaXRlcmF0ZSBvdmVyIGhlYXAgZWxlbWVudHNcblx0XHRcdHZhciBtYXhfY29kZSA9IC0xOyAvLyBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3lcblx0XHRcdHZhciBub2RlOyAvLyBuZXcgbm9kZSBiZWluZyBjcmVhdGVkXG5cblx0XHRcdC8vIENvbnN0cnVjdCB0aGUgaW5pdGlhbCBoZWFwLCB3aXRoIGxlYXN0IGZyZXF1ZW50IGVsZW1lbnQgaW5cblx0XHRcdC8vIGhlYXBbMV0uIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uXG5cdFx0XHQvLyBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuXHRcdFx0cy5oZWFwX2xlbiA9IDA7XG5cdFx0XHRzLmhlYXBfbWF4ID0gSEVBUF9TSVpFO1xuXG5cdFx0XHRmb3IgKG4gPSAwOyBuIDwgZWxlbXM7IG4rKykge1xuXHRcdFx0XHRpZiAodHJlZVtuICogMl0gIT09IDApIHtcblx0XHRcdFx0XHRzLmhlYXBbKytzLmhlYXBfbGVuXSA9IG1heF9jb2RlID0gbjtcblx0XHRcdFx0XHRzLmRlcHRoW25dID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0cmVlW24gKiAyICsgMV0gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBwa3ppcCBmb3JtYXQgcmVxdWlyZXMgdGhhdCBhdCBsZWFzdCBvbmUgZGlzdGFuY2UgY29kZSBleGlzdHMsXG5cdFx0XHQvLyBhbmQgdGhhdCBhdCBsZWFzdCBvbmUgYml0IHNob3VsZCBiZSBzZW50IGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmVcblx0XHRcdC8vIHBvc3NpYmxlIGNvZGUuIFNvIHRvIGF2b2lkIHNwZWNpYWwgY2hlY2tzIGxhdGVyIG9uIHdlIGZvcmNlIGF0IGxlYXN0XG5cdFx0XHQvLyB0d28gY29kZXMgb2Ygbm9uIHplcm8gZnJlcXVlbmN5LlxuXHRcdFx0d2hpbGUgKHMuaGVhcF9sZW4gPCAyKSB7XG5cdFx0XHRcdG5vZGUgPSBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IG1heF9jb2RlIDwgMiA/ICsrbWF4X2NvZGUgOiAwO1xuXHRcdFx0XHR0cmVlW25vZGUgKiAyXSA9IDE7XG5cdFx0XHRcdHMuZGVwdGhbbm9kZV0gPSAwO1xuXHRcdFx0XHRzLm9wdF9sZW4tLTtcblx0XHRcdFx0aWYgKHN0cmVlKVxuXHRcdFx0XHRcdHMuc3RhdGljX2xlbiAtPSBzdHJlZVtub2RlICogMiArIDFdO1xuXHRcdFx0XHQvLyBub2RlIGlzIDAgb3IgMSBzbyBpdCBkb2VzIG5vdCBoYXZlIGV4dHJhIGJpdHNcblx0XHRcdH1cblx0XHRcdHRoYXQubWF4X2NvZGUgPSBtYXhfY29kZTtcblxuXHRcdFx0Ly8gVGhlIGVsZW1lbnRzIGhlYXBbaGVhcF9sZW4vMisxIC4uIGhlYXBfbGVuXSBhcmUgbGVhdmVzIG9mIHRoZSB0cmVlLFxuXHRcdFx0Ly8gZXN0YWJsaXNoIHN1Yi1oZWFwcyBvZiBpbmNyZWFzaW5nIGxlbmd0aHM6XG5cblx0XHRcdGZvciAobiA9IE1hdGguZmxvb3Iocy5oZWFwX2xlbiAvIDIpOyBuID49IDE7IG4tLSlcblx0XHRcdFx0cy5wcWRvd25oZWFwKHRyZWUsIG4pO1xuXG5cdFx0XHQvLyBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBieSByZXBlYXRlZGx5IGNvbWJpbmluZyB0aGUgbGVhc3QgdHdvXG5cdFx0XHQvLyBmcmVxdWVudCBub2Rlcy5cblxuXHRcdFx0bm9kZSA9IGVsZW1zOyAvLyBuZXh0IGludGVybmFsIG5vZGUgb2YgdGhlIHRyZWVcblx0XHRcdGRvIHtcblx0XHRcdFx0Ly8gbiA9IG5vZGUgb2YgbGVhc3QgZnJlcXVlbmN5XG5cdFx0XHRcdG4gPSBzLmhlYXBbMV07XG5cdFx0XHRcdHMuaGVhcFsxXSA9IHMuaGVhcFtzLmhlYXBfbGVuLS1dO1xuXHRcdFx0XHRzLnBxZG93bmhlYXAodHJlZSwgMSk7XG5cdFx0XHRcdG0gPSBzLmhlYXBbMV07IC8vIG0gPSBub2RlIG9mIG5leHQgbGVhc3QgZnJlcXVlbmN5XG5cblx0XHRcdFx0cy5oZWFwWy0tcy5oZWFwX21heF0gPSBuOyAvLyBrZWVwIHRoZSBub2RlcyBzb3J0ZWQgYnkgZnJlcXVlbmN5XG5cdFx0XHRcdHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbTtcblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBuZXcgbm9kZSBmYXRoZXIgb2YgbiBhbmQgbVxuXHRcdFx0XHR0cmVlW25vZGUgKiAyXSA9ICh0cmVlW24gKiAyXSArIHRyZWVbbSAqIDJdKTtcblx0XHRcdFx0cy5kZXB0aFtub2RlXSA9IE1hdGgubWF4KHMuZGVwdGhbbl0sIHMuZGVwdGhbbV0pICsgMTtcblx0XHRcdFx0dHJlZVtuICogMiArIDFdID0gdHJlZVttICogMiArIDFdID0gbm9kZTtcblxuXHRcdFx0XHQvLyBhbmQgaW5zZXJ0IHRoZSBuZXcgbm9kZSBpbiB0aGUgaGVhcFxuXHRcdFx0XHRzLmhlYXBbMV0gPSBub2RlKys7XG5cdFx0XHRcdHMucHFkb3duaGVhcCh0cmVlLCAxKTtcblx0XHRcdH0gd2hpbGUgKHMuaGVhcF9sZW4gPj0gMik7XG5cblx0XHRcdHMuaGVhcFstLXMuaGVhcF9tYXhdID0gcy5oZWFwWzFdO1xuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LiBXZSBjYW4gbm93XG5cdFx0XHQvLyBnZW5lcmF0ZSB0aGUgYml0IGxlbmd0aHMuXG5cblx0XHRcdGdlbl9iaXRsZW4ocyk7XG5cblx0XHRcdC8vIFRoZSBmaWVsZCBsZW4gaXMgbm93IHNldCwgd2UgY2FuIGdlbmVyYXRlIHRoZSBiaXQgY29kZXNcblx0XHRcdGdlbl9jb2Rlcyh0cmVlLCB0aGF0Lm1heF9jb2RlLCBzLmJsX2NvdW50KTtcblx0XHR9O1xuXG5cdH1cblxuXHRUcmVlLl9sZW5ndGhfY29kZSA9IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyLCAxMiwgMTIsIDEyLCAxMywgMTMsIDEzLCAxMywgMTQsIDE0LCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNixcblx0XHRcdDE2LCAxNiwgMTYsIDE2LCAxNywgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLFxuXHRcdFx0MjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG5cdFx0XHQyMiwgMjIsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcblx0XHRcdDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LFxuXHRcdFx0MjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsXG5cdFx0XHQyNiwgMjYsIDI2LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjggXTtcblxuXHRUcmVlLmJhc2VfbGVuZ3RoID0gWyAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCAxMCwgMTIsIDE0LCAxNiwgMjAsIDI0LCAyOCwgMzIsIDQwLCA0OCwgNTYsIDY0LCA4MCwgOTYsIDExMiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAwIF07XG5cblx0VHJlZS5iYXNlX2Rpc3QgPSBbIDAsIDEsIDIsIDMsIDQsIDYsIDgsIDEyLCAxNiwgMjQsIDMyLCA0OCwgNjQsIDk2LCAxMjgsIDE5MiwgMjU2LCAzODQsIDUxMiwgNzY4LCAxMDI0LCAxNTM2LCAyMDQ4LCAzMDcyLCA0MDk2LCA2MTQ0LCA4MTkyLCAxMjI4OCwgMTYzODQsXG5cdFx0XHQyNDU3NiBdO1xuXG5cdC8vIE1hcHBpbmcgZnJvbSBhIGRpc3RhbmNlIHRvIGEgZGlzdGFuY2UgY29kZS4gZGlzdCBpcyB0aGUgZGlzdGFuY2UgLSAxIGFuZFxuXHQvLyBtdXN0IG5vdCBoYXZlIHNpZGUgZWZmZWN0cy4gX2Rpc3RfY29kZVsyNTZdIGFuZCBfZGlzdF9jb2RlWzI1N10gYXJlIG5ldmVyXG5cdC8vIHVzZWQuXG5cdFRyZWUuZF9jb2RlID0gZnVuY3Rpb24oZGlzdCkge1xuXHRcdHJldHVybiAoKGRpc3QpIDwgMjU2ID8gX2Rpc3RfY29kZVtkaXN0XSA6IF9kaXN0X2NvZGVbMjU2ICsgKChkaXN0KSA+Pj4gNyldKTtcblx0fTtcblxuXHQvLyBleHRyYSBiaXRzIGZvciBlYWNoIGxlbmd0aCBjb2RlXG5cdFRyZWUuZXh0cmFfbGJpdHMgPSBbIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDMsIDMsIDMsIDMsIDQsIDQsIDQsIDQsIDUsIDUsIDUsIDUsIDAgXTtcblxuXHQvLyBleHRyYSBiaXRzIGZvciBlYWNoIGRpc3RhbmNlIGNvZGVcblx0VHJlZS5leHRyYV9kYml0cyA9IFsgMCwgMCwgMCwgMCwgMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyLCAxMiwgMTMsIDEzIF07XG5cblx0Ly8gZXh0cmEgYml0cyBmb3IgZWFjaCBiaXQgbGVuZ3RoIGNvZGVcblx0VHJlZS5leHRyYV9ibGJpdHMgPSBbIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDMsIDcgXTtcblxuXHRUcmVlLmJsX29yZGVyID0gWyAxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1IF07XG5cblx0Ly8gU3RhdGljVHJlZVxuXG5cdGZ1bmN0aW9uIFN0YXRpY1RyZWUoc3RhdGljX3RyZWUsIGV4dHJhX2JpdHMsIGV4dHJhX2Jhc2UsIGVsZW1zLCBtYXhfbGVuZ3RoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuc3RhdGljX3RyZWUgPSBzdGF0aWNfdHJlZTtcblx0XHR0aGF0LmV4dHJhX2JpdHMgPSBleHRyYV9iaXRzO1xuXHRcdHRoYXQuZXh0cmFfYmFzZSA9IGV4dHJhX2Jhc2U7XG5cdFx0dGhhdC5lbGVtcyA9IGVsZW1zO1xuXHRcdHRoYXQubWF4X2xlbmd0aCA9IG1heF9sZW5ndGg7XG5cdH1cblxuXHRTdGF0aWNUcmVlLnN0YXRpY19sdHJlZSA9IFsgMTIsIDgsIDE0MCwgOCwgNzYsIDgsIDIwNCwgOCwgNDQsIDgsIDE3MiwgOCwgMTA4LCA4LCAyMzYsIDgsIDI4LCA4LCAxNTYsIDgsIDkyLCA4LCAyMjAsIDgsIDYwLCA4LCAxODgsIDgsIDEyNCwgOCwgMjUyLCA4LCAyLCA4LFxuXHRcdFx0MTMwLCA4LCA2NiwgOCwgMTk0LCA4LCAzNCwgOCwgMTYyLCA4LCA5OCwgOCwgMjI2LCA4LCAxOCwgOCwgMTQ2LCA4LCA4MiwgOCwgMjEwLCA4LCA1MCwgOCwgMTc4LCA4LCAxMTQsIDgsIDI0MiwgOCwgMTAsIDgsIDEzOCwgOCwgNzQsIDgsIDIwMiwgOCwgNDIsXG5cdFx0XHQ4LCAxNzAsIDgsIDEwNiwgOCwgMjM0LCA4LCAyNiwgOCwgMTU0LCA4LCA5MCwgOCwgMjE4LCA4LCA1OCwgOCwgMTg2LCA4LCAxMjIsIDgsIDI1MCwgOCwgNiwgOCwgMTM0LCA4LCA3MCwgOCwgMTk4LCA4LCAzOCwgOCwgMTY2LCA4LCAxMDIsIDgsIDIzMCwgOCxcblx0XHRcdDIyLCA4LCAxNTAsIDgsIDg2LCA4LCAyMTQsIDgsIDU0LCA4LCAxODIsIDgsIDExOCwgOCwgMjQ2LCA4LCAxNCwgOCwgMTQyLCA4LCA3OCwgOCwgMjA2LCA4LCA0NiwgOCwgMTc0LCA4LCAxMTAsIDgsIDIzOCwgOCwgMzAsIDgsIDE1OCwgOCwgOTQsIDgsXG5cdFx0XHQyMjIsIDgsIDYyLCA4LCAxOTAsIDgsIDEyNiwgOCwgMjU0LCA4LCAxLCA4LCAxMjksIDgsIDY1LCA4LCAxOTMsIDgsIDMzLCA4LCAxNjEsIDgsIDk3LCA4LCAyMjUsIDgsIDE3LCA4LCAxNDUsIDgsIDgxLCA4LCAyMDksIDgsIDQ5LCA4LCAxNzcsIDgsIDExMyxcblx0XHRcdDgsIDI0MSwgOCwgOSwgOCwgMTM3LCA4LCA3MywgOCwgMjAxLCA4LCA0MSwgOCwgMTY5LCA4LCAxMDUsIDgsIDIzMywgOCwgMjUsIDgsIDE1MywgOCwgODksIDgsIDIxNywgOCwgNTcsIDgsIDE4NSwgOCwgMTIxLCA4LCAyNDksIDgsIDUsIDgsIDEzMywgOCxcblx0XHRcdDY5LCA4LCAxOTcsIDgsIDM3LCA4LCAxNjUsIDgsIDEwMSwgOCwgMjI5LCA4LCAyMSwgOCwgMTQ5LCA4LCA4NSwgOCwgMjEzLCA4LCA1MywgOCwgMTgxLCA4LCAxMTcsIDgsIDI0NSwgOCwgMTMsIDgsIDE0MSwgOCwgNzcsIDgsIDIwNSwgOCwgNDUsIDgsXG5cdFx0XHQxNzMsIDgsIDEwOSwgOCwgMjM3LCA4LCAyOSwgOCwgMTU3LCA4LCA5MywgOCwgMjIxLCA4LCA2MSwgOCwgMTg5LCA4LCAxMjUsIDgsIDI1MywgOCwgMTksIDksIDI3NSwgOSwgMTQ3LCA5LCA0MDMsIDksIDgzLCA5LCAzMzksIDksIDIxMSwgOSwgNDY3LCA5LFxuXHRcdFx0NTEsIDksIDMwNywgOSwgMTc5LCA5LCA0MzUsIDksIDExNSwgOSwgMzcxLCA5LCAyNDMsIDksIDQ5OSwgOSwgMTEsIDksIDI2NywgOSwgMTM5LCA5LCAzOTUsIDksIDc1LCA5LCAzMzEsIDksIDIwMywgOSwgNDU5LCA5LCA0MywgOSwgMjk5LCA5LCAxNzEsIDksXG5cdFx0XHQ0MjcsIDksIDEwNywgOSwgMzYzLCA5LCAyMzUsIDksIDQ5MSwgOSwgMjcsIDksIDI4MywgOSwgMTU1LCA5LCA0MTEsIDksIDkxLCA5LCAzNDcsIDksIDIxOSwgOSwgNDc1LCA5LCA1OSwgOSwgMzE1LCA5LCAxODcsIDksIDQ0MywgOSwgMTIzLCA5LCAzNzksXG5cdFx0XHQ5LCAyNTEsIDksIDUwNywgOSwgNywgOSwgMjYzLCA5LCAxMzUsIDksIDM5MSwgOSwgNzEsIDksIDMyNywgOSwgMTk5LCA5LCA0NTUsIDksIDM5LCA5LCAyOTUsIDksIDE2NywgOSwgNDIzLCA5LCAxMDMsIDksIDM1OSwgOSwgMjMxLCA5LCA0ODcsIDksIDIzLFxuXHRcdFx0OSwgMjc5LCA5LCAxNTEsIDksIDQwNywgOSwgODcsIDksIDM0MywgOSwgMjE1LCA5LCA0NzEsIDksIDU1LCA5LCAzMTEsIDksIDE4MywgOSwgNDM5LCA5LCAxMTksIDksIDM3NSwgOSwgMjQ3LCA5LCA1MDMsIDksIDE1LCA5LCAyNzEsIDksIDE0MywgOSxcblx0XHRcdDM5OSwgOSwgNzksIDksIDMzNSwgOSwgMjA3LCA5LCA0NjMsIDksIDQ3LCA5LCAzMDMsIDksIDE3NSwgOSwgNDMxLCA5LCAxMTEsIDksIDM2NywgOSwgMjM5LCA5LCA0OTUsIDksIDMxLCA5LCAyODcsIDksIDE1OSwgOSwgNDE1LCA5LCA5NSwgOSwgMzUxLCA5LFxuXHRcdFx0MjIzLCA5LCA0NzksIDksIDYzLCA5LCAzMTksIDksIDE5MSwgOSwgNDQ3LCA5LCAxMjcsIDksIDM4MywgOSwgMjU1LCA5LCA1MTEsIDksIDAsIDcsIDY0LCA3LCAzMiwgNywgOTYsIDcsIDE2LCA3LCA4MCwgNywgNDgsIDcsIDExMiwgNywgOCwgNywgNzIsIDcsXG5cdFx0XHQ0MCwgNywgMTA0LCA3LCAyNCwgNywgODgsIDcsIDU2LCA3LCAxMjAsIDcsIDQsIDcsIDY4LCA3LCAzNiwgNywgMTAwLCA3LCAyMCwgNywgODQsIDcsIDUyLCA3LCAxMTYsIDcsIDMsIDgsIDEzMSwgOCwgNjcsIDgsIDE5NSwgOCwgMzUsIDgsIDE2MywgOCxcblx0XHRcdDk5LCA4LCAyMjcsIDggXTtcblxuXHRTdGF0aWNUcmVlLnN0YXRpY19kdHJlZSA9IFsgMCwgNSwgMTYsIDUsIDgsIDUsIDI0LCA1LCA0LCA1LCAyMCwgNSwgMTIsIDUsIDI4LCA1LCAyLCA1LCAxOCwgNSwgMTAsIDUsIDI2LCA1LCA2LCA1LCAyMiwgNSwgMTQsIDUsIDMwLCA1LCAxLCA1LCAxNywgNSwgOSwgNSxcblx0XHRcdDI1LCA1LCA1LCA1LCAyMSwgNSwgMTMsIDUsIDI5LCA1LCAzLCA1LCAxOSwgNSwgMTEsIDUsIDI3LCA1LCA3LCA1LCAyMywgNSBdO1xuXG5cdFN0YXRpY1RyZWUuc3RhdGljX2xfZGVzYyA9IG5ldyBTdGF0aWNUcmVlKFN0YXRpY1RyZWUuc3RhdGljX2x0cmVlLCBUcmVlLmV4dHJhX2xiaXRzLCBMSVRFUkFMUyArIDEsIExfQ09ERVMsIE1BWF9CSVRTKTtcblxuXHRTdGF0aWNUcmVlLnN0YXRpY19kX2Rlc2MgPSBuZXcgU3RhdGljVHJlZShTdGF0aWNUcmVlLnN0YXRpY19kdHJlZSwgVHJlZS5leHRyYV9kYml0cywgMCwgRF9DT0RFUywgTUFYX0JJVFMpO1xuXG5cdFN0YXRpY1RyZWUuc3RhdGljX2JsX2Rlc2MgPSBuZXcgU3RhdGljVHJlZShudWxsLCBUcmVlLmV4dHJhX2JsYml0cywgMCwgQkxfQ09ERVMsIE1BWF9CTF9CSVRTKTtcblxuXHQvLyBEZWZsYXRlXG5cblx0dmFyIE1BWF9NRU1fTEVWRUwgPSA5O1xuXHR2YXIgREVGX01FTV9MRVZFTCA9IDg7XG5cblx0ZnVuY3Rpb24gQ29uZmlnKGdvb2RfbGVuZ3RoLCBtYXhfbGF6eSwgbmljZV9sZW5ndGgsIG1heF9jaGFpbiwgZnVuYykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGF0Lmdvb2RfbGVuZ3RoID0gZ29vZF9sZW5ndGg7XG5cdFx0dGhhdC5tYXhfbGF6eSA9IG1heF9sYXp5O1xuXHRcdHRoYXQubmljZV9sZW5ndGggPSBuaWNlX2xlbmd0aDtcblx0XHR0aGF0Lm1heF9jaGFpbiA9IG1heF9jaGFpbjtcblx0XHR0aGF0LmZ1bmMgPSBmdW5jO1xuXHR9XG5cblx0dmFyIFNUT1JFRCA9IDA7XG5cdHZhciBGQVNUID0gMTtcblx0dmFyIFNMT1cgPSAyO1xuXHR2YXIgY29uZmlnX3RhYmxlID0gWyBuZXcgQ29uZmlnKDAsIDAsIDAsIDAsIFNUT1JFRCksIG5ldyBDb25maWcoNCwgNCwgOCwgNCwgRkFTVCksIG5ldyBDb25maWcoNCwgNSwgMTYsIDgsIEZBU1QpLCBuZXcgQ29uZmlnKDQsIDYsIDMyLCAzMiwgRkFTVCksXG5cdFx0XHRuZXcgQ29uZmlnKDQsIDQsIDE2LCAxNiwgU0xPVyksIG5ldyBDb25maWcoOCwgMTYsIDMyLCAzMiwgU0xPVyksIG5ldyBDb25maWcoOCwgMTYsIDEyOCwgMTI4LCBTTE9XKSwgbmV3IENvbmZpZyg4LCAzMiwgMTI4LCAyNTYsIFNMT1cpLFxuXHRcdFx0bmV3IENvbmZpZygzMiwgMTI4LCAyNTgsIDEwMjQsIFNMT1cpLCBuZXcgQ29uZmlnKDMyLCAyNTgsIDI1OCwgNDA5NiwgU0xPVykgXTtcblxuXHR2YXIgel9lcnJtc2cgPSBbIFwibmVlZCBkaWN0aW9uYXJ5XCIsIC8vIFpfTkVFRF9ESUNUXG5cdC8vIDJcblx0XCJzdHJlYW0gZW5kXCIsIC8vIFpfU1RSRUFNX0VORCAxXG5cdFwiXCIsIC8vIFpfT0sgMFxuXHRcIlwiLCAvLyBaX0VSUk5PICgtMSlcblx0XCJzdHJlYW0gZXJyb3JcIiwgLy8gWl9TVFJFQU1fRVJST1IgKC0yKVxuXHRcImRhdGEgZXJyb3JcIiwgLy8gWl9EQVRBX0VSUk9SICgtMylcblx0XCJcIiwgLy8gWl9NRU1fRVJST1IgKC00KVxuXHRcImJ1ZmZlciBlcnJvclwiLCAvLyBaX0JVRl9FUlJPUiAoLTUpXG5cdFwiXCIsLy8gWl9WRVJTSU9OX0VSUk9SICgtNilcblx0XCJcIiBdO1xuXG5cdC8vIGJsb2NrIG5vdCBjb21wbGV0ZWQsIG5lZWQgbW9yZSBpbnB1dCBvciBtb3JlIG91dHB1dFxuXHR2YXIgTmVlZE1vcmUgPSAwO1xuXG5cdC8vIGJsb2NrIGZsdXNoIHBlcmZvcm1lZFxuXHR2YXIgQmxvY2tEb25lID0gMTtcblxuXHQvLyBmaW5pc2ggc3RhcnRlZCwgbmVlZCBvbmx5IG1vcmUgb3V0cHV0IGF0IG5leHQgZGVmbGF0ZVxuXHR2YXIgRmluaXNoU3RhcnRlZCA9IDI7XG5cblx0Ly8gZmluaXNoIGRvbmUsIGFjY2VwdCBubyBtb3JlIGlucHV0IG9yIG91dHB1dFxuXHR2YXIgRmluaXNoRG9uZSA9IDM7XG5cblx0Ly8gcHJlc2V0IGRpY3Rpb25hcnkgZmxhZyBpbiB6bGliIGhlYWRlclxuXHR2YXIgUFJFU0VUX0RJQ1QgPSAweDIwO1xuXG5cdHZhciBJTklUX1NUQVRFID0gNDI7XG5cdHZhciBCVVNZX1NUQVRFID0gMTEzO1xuXHR2YXIgRklOSVNIX1NUQVRFID0gNjY2O1xuXG5cdC8vIFRoZSBkZWZsYXRlIGNvbXByZXNzaW9uIG1ldGhvZFxuXHR2YXIgWl9ERUZMQVRFRCA9IDg7XG5cblx0dmFyIFNUT1JFRF9CTE9DSyA9IDA7XG5cdHZhciBTVEFUSUNfVFJFRVMgPSAxO1xuXHR2YXIgRFlOX1RSRUVTID0gMjtcblxuXHR2YXIgTUlOX01BVENIID0gMztcblx0dmFyIE1BWF9NQVRDSCA9IDI1ODtcblx0dmFyIE1JTl9MT09LQUhFQUQgPSAoTUFYX01BVENIICsgTUlOX01BVENIICsgMSk7XG5cblx0ZnVuY3Rpb24gc21hbGxlcih0cmVlLCBuLCBtLCBkZXB0aCkge1xuXHRcdHZhciB0bjIgPSB0cmVlW24gKiAyXTtcblx0XHR2YXIgdG0yID0gdHJlZVttICogMl07XG5cdFx0cmV0dXJuICh0bjIgPCB0bTIgfHwgKHRuMiA9PSB0bTIgJiYgZGVwdGhbbl0gPD0gZGVwdGhbbV0pKTtcblx0fVxuXG5cdGZ1bmN0aW9uIERlZmxhdGUoKSB7XG5cblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dmFyIHN0cm07IC8vIHBvaW50ZXIgYmFjayB0byB0aGlzIHpsaWIgc3RyZWFtXG5cdFx0dmFyIHN0YXR1czsgLy8gYXMgdGhlIG5hbWUgaW1wbGllc1xuXHRcdC8vIHBlbmRpbmdfYnVmOyAvLyBvdXRwdXQgc3RpbGwgcGVuZGluZ1xuXHRcdHZhciBwZW5kaW5nX2J1Zl9zaXplOyAvLyBzaXplIG9mIHBlbmRpbmdfYnVmXG5cdFx0Ly8gcGVuZGluZ19vdXQ7IC8vIG5leHQgcGVuZGluZyBieXRlIHRvIG91dHB1dCB0byB0aGUgc3RyZWFtXG5cdFx0Ly8gcGVuZGluZzsgLy8gbmIgb2YgYnl0ZXMgaW4gdGhlIHBlbmRpbmcgYnVmZmVyXG5cdFx0dmFyIG1ldGhvZDsgLy8gU1RPUkVEIChmb3IgemlwIG9ubHkpIG9yIERFRkxBVEVEXG5cdFx0dmFyIGxhc3RfZmx1c2g7IC8vIHZhbHVlIG9mIGZsdXNoIHBhcmFtIGZvciBwcmV2aW91cyBkZWZsYXRlIGNhbGxcblxuXHRcdHZhciB3X3NpemU7IC8vIExaNzcgd2luZG93IHNpemUgKDMySyBieSBkZWZhdWx0KVxuXHRcdHZhciB3X2JpdHM7IC8vIGxvZzIod19zaXplKSAoOC4uMTYpXG5cdFx0dmFyIHdfbWFzazsgLy8gd19zaXplIC0gMVxuXG5cdFx0dmFyIHdpbmRvdztcblx0XHQvLyBTbGlkaW5nIHdpbmRvdy4gSW5wdXQgYnl0ZXMgYXJlIHJlYWQgaW50byB0aGUgc2Vjb25kIGhhbGYgb2YgdGhlIHdpbmRvdyxcblx0XHQvLyBhbmQgbW92ZSB0byB0aGUgZmlyc3QgaGFsZiBsYXRlciB0byBrZWVwIGEgZGljdGlvbmFyeSBvZiBhdCBsZWFzdCB3U2l6ZVxuXHRcdC8vIGJ5dGVzLiBXaXRoIHRoaXMgb3JnYW5pemF0aW9uLCBtYXRjaGVzIGFyZSBsaW1pdGVkIHRvIGEgZGlzdGFuY2Ugb2Zcblx0XHQvLyB3U2l6ZS1NQVhfTUFUQ0ggYnl0ZXMsIGJ1dCB0aGlzIGVuc3VyZXMgdGhhdCBJTyBpcyBhbHdheXNcblx0XHQvLyBwZXJmb3JtZWQgd2l0aCBhIGxlbmd0aCBtdWx0aXBsZSBvZiB0aGUgYmxvY2sgc2l6ZS4gQWxzbywgaXQgbGltaXRzXG5cdFx0Ly8gdGhlIHdpbmRvdyBzaXplIHRvIDY0Sywgd2hpY2ggaXMgcXVpdGUgdXNlZnVsIG9uIE1TRE9TLlxuXHRcdC8vIFRvIGRvOiB1c2UgdGhlIHVzZXIgaW5wdXQgYnVmZmVyIGFzIHNsaWRpbmcgd2luZG93LlxuXG5cdFx0dmFyIHdpbmRvd19zaXplO1xuXHRcdC8vIEFjdHVhbCBzaXplIG9mIHdpbmRvdzogMip3U2l6ZSwgZXhjZXB0IHdoZW4gdGhlIHVzZXIgaW5wdXQgYnVmZmVyXG5cdFx0Ly8gaXMgZGlyZWN0bHkgdXNlZCBhcyBzbGlkaW5nIHdpbmRvdy5cblxuXHRcdHZhciBwcmV2O1xuXHRcdC8vIExpbmsgdG8gb2xkZXIgc3RyaW5nIHdpdGggc2FtZSBoYXNoIGluZGV4LiBUbyBsaW1pdCB0aGUgc2l6ZSBvZiB0aGlzXG5cdFx0Ly8gYXJyYXkgdG8gNjRLLCB0aGlzIGxpbmsgaXMgbWFpbnRhaW5lZCBvbmx5IGZvciB0aGUgbGFzdCAzMksgc3RyaW5ncy5cblx0XHQvLyBBbiBpbmRleCBpbiB0aGlzIGFycmF5IGlzIHRodXMgYSB3aW5kb3cgaW5kZXggbW9kdWxvIDMySy5cblxuXHRcdHZhciBoZWFkOyAvLyBIZWFkcyBvZiB0aGUgaGFzaCBjaGFpbnMgb3IgTklMLlxuXG5cdFx0dmFyIGluc19oOyAvLyBoYXNoIGluZGV4IG9mIHN0cmluZyB0byBiZSBpbnNlcnRlZFxuXHRcdHZhciBoYXNoX3NpemU7IC8vIG51bWJlciBvZiBlbGVtZW50cyBpbiBoYXNoIHRhYmxlXG5cdFx0dmFyIGhhc2hfYml0czsgLy8gbG9nMihoYXNoX3NpemUpXG5cdFx0dmFyIGhhc2hfbWFzazsgLy8gaGFzaF9zaXplLTFcblxuXHRcdC8vIE51bWJlciBvZiBiaXRzIGJ5IHdoaWNoIGluc19oIG11c3QgYmUgc2hpZnRlZCBhdCBlYWNoIGlucHV0XG5cdFx0Ly8gc3RlcC4gSXQgbXVzdCBiZSBzdWNoIHRoYXQgYWZ0ZXIgTUlOX01BVENIIHN0ZXBzLCB0aGUgb2xkZXN0XG5cdFx0Ly8gYnl0ZSBubyBsb25nZXIgdGFrZXMgcGFydCBpbiB0aGUgaGFzaCBrZXksIHRoYXQgaXM6XG5cdFx0Ly8gaGFzaF9zaGlmdCAqIE1JTl9NQVRDSCA+PSBoYXNoX2JpdHNcblx0XHR2YXIgaGFzaF9zaGlmdDtcblxuXHRcdC8vIFdpbmRvdyBwb3NpdGlvbiBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IG91dHB1dCBibG9jay4gR2V0c1xuXHRcdC8vIG5lZ2F0aXZlIHdoZW4gdGhlIHdpbmRvdyBpcyBtb3ZlZCBiYWNrd2FyZHMuXG5cblx0XHR2YXIgYmxvY2tfc3RhcnQ7XG5cblx0XHR2YXIgbWF0Y2hfbGVuZ3RoOyAvLyBsZW5ndGggb2YgYmVzdCBtYXRjaFxuXHRcdHZhciBwcmV2X21hdGNoOyAvLyBwcmV2aW91cyBtYXRjaFxuXHRcdHZhciBtYXRjaF9hdmFpbGFibGU7IC8vIHNldCBpZiBwcmV2aW91cyBtYXRjaCBleGlzdHNcblx0XHR2YXIgc3Ryc3RhcnQ7IC8vIHN0YXJ0IG9mIHN0cmluZyB0byBpbnNlcnRcblx0XHR2YXIgbWF0Y2hfc3RhcnQ7IC8vIHN0YXJ0IG9mIG1hdGNoaW5nIHN0cmluZ1xuXHRcdHZhciBsb29rYWhlYWQ7IC8vIG51bWJlciBvZiB2YWxpZCBieXRlcyBhaGVhZCBpbiB3aW5kb3dcblxuXHRcdC8vIExlbmd0aCBvZiB0aGUgYmVzdCBtYXRjaCBhdCBwcmV2aW91cyBzdGVwLiBNYXRjaGVzIG5vdCBncmVhdGVyIHRoYW4gdGhpc1xuXHRcdC8vIGFyZSBkaXNjYXJkZWQuIFRoaXMgaXMgdXNlZCBpbiB0aGUgbGF6eSBtYXRjaCBldmFsdWF0aW9uLlxuXHRcdHZhciBwcmV2X2xlbmd0aDtcblxuXHRcdC8vIFRvIHNwZWVkIHVwIGRlZmxhdGlvbiwgaGFzaCBjaGFpbnMgYXJlIG5ldmVyIHNlYXJjaGVkIGJleW9uZCB0aGlzXG5cdFx0Ly8gbGVuZ3RoLiBBIGhpZ2hlciBsaW1pdCBpbXByb3ZlcyBjb21wcmVzc2lvbiByYXRpbyBidXQgZGVncmFkZXMgdGhlIHNwZWVkLlxuXHRcdHZhciBtYXhfY2hhaW5fbGVuZ3RoO1xuXG5cdFx0Ly8gQXR0ZW1wdCB0byBmaW5kIGEgYmV0dGVyIG1hdGNoIG9ubHkgd2hlbiB0aGUgY3VycmVudCBtYXRjaCBpcyBzdHJpY3RseVxuXHRcdC8vIHNtYWxsZXIgdGhhbiB0aGlzIHZhbHVlLiBUaGlzIG1lY2hhbmlzbSBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uXG5cdFx0Ly8gbGV2ZWxzID49IDQuXG5cdFx0dmFyIG1heF9sYXp5X21hdGNoO1xuXG5cdFx0Ly8gSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBub3Rcblx0XHQvLyBncmVhdGVyIHRoYW4gdGhpcyBsZW5ndGguIFRoaXMgc2F2ZXMgdGltZSBidXQgZGVncmFkZXMgY29tcHJlc3Npb24uXG5cdFx0Ly8gbWF4X2luc2VydF9sZW5ndGggaXMgdXNlZCBvbmx5IGZvciBjb21wcmVzc2lvbiBsZXZlbHMgPD0gMy5cblxuXHRcdHZhciBsZXZlbDsgLy8gY29tcHJlc3Npb24gbGV2ZWwgKDEuLjkpXG5cdFx0dmFyIHN0cmF0ZWd5OyAvLyBmYXZvciBvciBmb3JjZSBIdWZmbWFuIGNvZGluZ1xuXG5cdFx0Ly8gVXNlIGEgZmFzdGVyIHNlYXJjaCB3aGVuIHRoZSBwcmV2aW91cyBtYXRjaCBpcyBsb25nZXIgdGhhbiB0aGlzXG5cdFx0dmFyIGdvb2RfbWF0Y2g7XG5cblx0XHQvLyBTdG9wIHNlYXJjaGluZyB3aGVuIGN1cnJlbnQgbWF0Y2ggZXhjZWVkcyB0aGlzXG5cdFx0dmFyIG5pY2VfbWF0Y2g7XG5cblx0XHR2YXIgZHluX2x0cmVlOyAvLyBsaXRlcmFsIGFuZCBsZW5ndGggdHJlZVxuXHRcdHZhciBkeW5fZHRyZWU7IC8vIGRpc3RhbmNlIHRyZWVcblx0XHR2YXIgYmxfdHJlZTsgLy8gSHVmZm1hbiB0cmVlIGZvciBiaXQgbGVuZ3Roc1xuXG5cdFx0dmFyIGxfZGVzYyA9IG5ldyBUcmVlKCk7IC8vIGRlc2MgZm9yIGxpdGVyYWwgdHJlZVxuXHRcdHZhciBkX2Rlc2MgPSBuZXcgVHJlZSgpOyAvLyBkZXNjIGZvciBkaXN0YW5jZSB0cmVlXG5cdFx0dmFyIGJsX2Rlc2MgPSBuZXcgVHJlZSgpOyAvLyBkZXNjIGZvciBiaXQgbGVuZ3RoIHRyZWVcblxuXHRcdC8vIHRoYXQuaGVhcF9sZW47IC8vIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgaGVhcFxuXHRcdC8vIHRoYXQuaGVhcF9tYXg7IC8vIGVsZW1lbnQgb2YgbGFyZ2VzdCBmcmVxdWVuY3lcblx0XHQvLyBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLiBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuXHRcdC8vIFRoZSBzYW1lIGhlYXAgYXJyYXkgaXMgdXNlZCB0byBidWlsZCBhbGwgdHJlZXMuXG5cblx0XHQvLyBEZXB0aCBvZiBlYWNoIHN1YnRyZWUgdXNlZCBhcyB0aWUgYnJlYWtlciBmb3IgdHJlZXMgb2YgZXF1YWwgZnJlcXVlbmN5XG5cdFx0dGhhdC5kZXB0aCA9IFtdO1xuXG5cdFx0dmFyIGxfYnVmOyAvLyBpbmRleCBmb3IgbGl0ZXJhbHMgb3IgbGVuZ3RocyAqL1xuXG5cdFx0Ly8gU2l6ZSBvZiBtYXRjaCBidWZmZXIgZm9yIGxpdGVyYWxzL2xlbmd0aHMuIFRoZXJlIGFyZSA0IHJlYXNvbnMgZm9yXG5cdFx0Ly8gbGltaXRpbmcgbGl0X2J1ZnNpemUgdG8gNjRLOlxuXHRcdC8vIC0gZnJlcXVlbmNpZXMgY2FuIGJlIGtlcHQgaW4gMTYgYml0IGNvdW50ZXJzXG5cdFx0Ly8gLSBpZiBjb21wcmVzc2lvbiBpcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgdGhlIGZpcnN0IGJsb2NrLCBhbGwgaW5wdXRcblx0XHQvLyBkYXRhIGlzIHN0aWxsIGluIHRoZSB3aW5kb3cgc28gd2UgY2FuIHN0aWxsIGVtaXQgYSBzdG9yZWQgYmxvY2sgZXZlblxuXHRcdC8vIHdoZW4gaW5wdXQgY29tZXMgZnJvbSBzdGFuZGFyZCBpbnB1dC4gKFRoaXMgY2FuIGFsc28gYmUgZG9uZSBmb3Jcblx0XHQvLyBhbGwgYmxvY2tzIGlmIGxpdF9idWZzaXplIGlzIG5vdCBncmVhdGVyIHRoYW4gMzJLLilcblx0XHQvLyAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciBhIGZpbGUgc21hbGxlciB0aGFuIDY0Sywgd2UgY2FuXG5cdFx0Ly8gZXZlbiBlbWl0IGEgc3RvcmVkIGZpbGUgaW5zdGVhZCBvZiBhIHN0b3JlZCBibG9jayAoc2F2aW5nIDUgYnl0ZXMpLlxuXHRcdC8vIFRoaXMgaXMgYXBwbGljYWJsZSBvbmx5IGZvciB6aXAgKG5vdCBnemlwIG9yIHpsaWIpLlxuXHRcdC8vIC0gY3JlYXRpbmcgbmV3IEh1ZmZtYW4gdHJlZXMgbGVzcyBmcmVxdWVudGx5IG1heSBub3QgcHJvdmlkZSBmYXN0XG5cdFx0Ly8gYWRhcHRhdGlvbiB0byBjaGFuZ2VzIGluIHRoZSBpbnB1dCBkYXRhIHN0YXRpc3RpY3MuIChUYWtlIGZvclxuXHRcdC8vIGV4YW1wbGUgYSBiaW5hcnkgZmlsZSB3aXRoIHBvb3JseSBjb21wcmVzc2libGUgY29kZSBmb2xsb3dlZCBieVxuXHRcdC8vIGEgaGlnaGx5IGNvbXByZXNzaWJsZSBzdHJpbmcgdGFibGUuKSBTbWFsbGVyIGJ1ZmZlciBzaXplcyBnaXZlXG5cdFx0Ly8gZmFzdCBhZGFwdGF0aW9uIGJ1dCBoYXZlIG9mIGNvdXJzZSB0aGUgb3ZlcmhlYWQgb2YgdHJhbnNtaXR0aW5nXG5cdFx0Ly8gdHJlZXMgbW9yZSBmcmVxdWVudGx5LlxuXHRcdC8vIC0gSSBjYW4ndCBjb3VudCBhYm92ZSA0XG5cdFx0dmFyIGxpdF9idWZzaXplO1xuXG5cdFx0dmFyIGxhc3RfbGl0OyAvLyBydW5uaW5nIGluZGV4IGluIGxfYnVmXG5cblx0XHQvLyBCdWZmZXIgZm9yIGRpc3RhbmNlcy4gVG8gc2ltcGxpZnkgdGhlIGNvZGUsIGRfYnVmIGFuZCBsX2J1ZiBoYXZlXG5cdFx0Ly8gdGhlIHNhbWUgbnVtYmVyIG9mIGVsZW1lbnRzLiBUbyB1c2UgZGlmZmVyZW50IGxlbmd0aHMsIGFuIGV4dHJhIGZsYWdcblx0XHQvLyBhcnJheSB3b3VsZCBiZSBuZWNlc3NhcnkuXG5cblx0XHR2YXIgZF9idWY7IC8vIGluZGV4IG9mIHBlbmRpZ19idWZcblxuXHRcdC8vIHRoYXQub3B0X2xlbjsgLy8gYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggb3B0aW1hbCB0cmVlc1xuXHRcdC8vIHRoYXQuc3RhdGljX2xlbjsgLy8gYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggc3RhdGljIHRyZWVzXG5cdFx0dmFyIG1hdGNoZXM7IC8vIG51bWJlciBvZiBzdHJpbmcgbWF0Y2hlcyBpbiBjdXJyZW50IGJsb2NrXG5cdFx0dmFyIGxhc3RfZW9iX2xlbjsgLy8gYml0IGxlbmd0aCBvZiBFT0IgY29kZSBmb3IgbGFzdCBibG9ja1xuXG5cdFx0Ly8gT3V0cHV0IGJ1ZmZlci4gYml0cyBhcmUgaW5zZXJ0ZWQgc3RhcnRpbmcgYXQgdGhlIGJvdHRvbSAobGVhc3Rcblx0XHQvLyBzaWduaWZpY2FudCBiaXRzKS5cblx0XHR2YXIgYmlfYnVmO1xuXG5cdFx0Ly8gTnVtYmVyIG9mIHZhbGlkIGJpdHMgaW4gYmlfYnVmLiBBbGwgYml0cyBhYm92ZSB0aGUgbGFzdCB2YWxpZCBiaXRcblx0XHQvLyBhcmUgYWx3YXlzIHplcm8uXG5cdFx0dmFyIGJpX3ZhbGlkO1xuXG5cdFx0Ly8gbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlXG5cdFx0dGhhdC5ibF9jb3VudCA9IFtdO1xuXG5cdFx0Ly8gaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzXG5cdFx0dGhhdC5oZWFwID0gW107XG5cblx0XHRkeW5fbHRyZWUgPSBbXTtcblx0XHRkeW5fZHRyZWUgPSBbXTtcblx0XHRibF90cmVlID0gW107XG5cblx0XHRmdW5jdGlvbiBsbV9pbml0KCkge1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR3aW5kb3dfc2l6ZSA9IDIgKiB3X3NpemU7XG5cblx0XHRcdGhlYWRbaGFzaF9zaXplIC0gMV0gPSAwO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGhhc2hfc2l6ZSAtIDE7IGkrKykge1xuXHRcdFx0XHRoZWFkW2ldID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyczpcblx0XHRcdG1heF9sYXp5X21hdGNoID0gY29uZmlnX3RhYmxlW2xldmVsXS5tYXhfbGF6eTtcblx0XHRcdGdvb2RfbWF0Y2ggPSBjb25maWdfdGFibGVbbGV2ZWxdLmdvb2RfbGVuZ3RoO1xuXHRcdFx0bmljZV9tYXRjaCA9IGNvbmZpZ190YWJsZVtsZXZlbF0ubmljZV9sZW5ndGg7XG5cdFx0XHRtYXhfY2hhaW5fbGVuZ3RoID0gY29uZmlnX3RhYmxlW2xldmVsXS5tYXhfY2hhaW47XG5cblx0XHRcdHN0cnN0YXJ0ID0gMDtcblx0XHRcdGJsb2NrX3N0YXJ0ID0gMDtcblx0XHRcdGxvb2thaGVhZCA9IDA7XG5cdFx0XHRtYXRjaF9sZW5ndGggPSBwcmV2X2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG5cdFx0XHRtYXRjaF9hdmFpbGFibGUgPSAwO1xuXHRcdFx0aW5zX2ggPSAwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaXRfYmxvY2soKSB7XG5cdFx0XHR2YXIgaTtcblx0XHRcdC8vIEluaXRpYWxpemUgdGhlIHRyZWVzLlxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IExfQ09ERVM7IGkrKylcblx0XHRcdFx0ZHluX2x0cmVlW2kgKiAyXSA9IDA7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgRF9DT0RFUzsgaSsrKVxuXHRcdFx0XHRkeW5fZHRyZWVbaSAqIDJdID0gMDtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBCTF9DT0RFUzsgaSsrKVxuXHRcdFx0XHRibF90cmVlW2kgKiAyXSA9IDA7XG5cblx0XHRcdGR5bl9sdHJlZVtFTkRfQkxPQ0sgKiAyXSA9IDE7XG5cdFx0XHR0aGF0Lm9wdF9sZW4gPSB0aGF0LnN0YXRpY19sZW4gPSAwO1xuXHRcdFx0bGFzdF9saXQgPSBtYXRjaGVzID0gMDtcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSB0cmVlIGRhdGEgc3RydWN0dXJlcyBmb3IgYSBuZXcgemxpYiBzdHJlYW0uXG5cdFx0ZnVuY3Rpb24gdHJfaW5pdCgpIHtcblxuXHRcdFx0bF9kZXNjLmR5bl90cmVlID0gZHluX2x0cmVlO1xuXHRcdFx0bF9kZXNjLnN0YXRfZGVzYyA9IFN0YXRpY1RyZWUuc3RhdGljX2xfZGVzYztcblxuXHRcdFx0ZF9kZXNjLmR5bl90cmVlID0gZHluX2R0cmVlO1xuXHRcdFx0ZF9kZXNjLnN0YXRfZGVzYyA9IFN0YXRpY1RyZWUuc3RhdGljX2RfZGVzYztcblxuXHRcdFx0YmxfZGVzYy5keW5fdHJlZSA9IGJsX3RyZWU7XG5cdFx0XHRibF9kZXNjLnN0YXRfZGVzYyA9IFN0YXRpY1RyZWUuc3RhdGljX2JsX2Rlc2M7XG5cblx0XHRcdGJpX2J1ZiA9IDA7XG5cdFx0XHRiaV92YWxpZCA9IDA7XG5cdFx0XHRsYXN0X2VvYl9sZW4gPSA4OyAvLyBlbm91Z2ggbG9va2FoZWFkIGZvciBpbmZsYXRlXG5cblx0XHRcdC8vIEluaXRpYWxpemUgdGhlIGZpcnN0IGJsb2NrIG9mIHRoZSBmaXJzdCBmaWxlOlxuXHRcdFx0aW5pdF9ibG9jaygpO1xuXHRcdH1cblxuXHRcdC8vIFJlc3RvcmUgdGhlIGhlYXAgcHJvcGVydHkgYnkgbW92aW5nIGRvd24gdGhlIHRyZWUgc3RhcnRpbmcgYXQgbm9kZSBrLFxuXHRcdC8vIGV4Y2hhbmdpbmcgYSBub2RlIHdpdGggdGhlIHNtYWxsZXN0IG9mIGl0cyB0d28gc29ucyBpZiBuZWNlc3NhcnksXG5cdFx0Ly8gc3RvcHBpbmdcblx0XHQvLyB3aGVuIHRoZSBoZWFwIHByb3BlcnR5IGlzIHJlLWVzdGFibGlzaGVkIChlYWNoIGZhdGhlciBzbWFsbGVyIHRoYW4gaXRzXG5cdFx0Ly8gdHdvIHNvbnMpLlxuXHRcdHRoYXQucHFkb3duaGVhcCA9IGZ1bmN0aW9uKHRyZWUsIC8vIHRoZSB0cmVlIHRvIHJlc3RvcmVcblx0XHRrIC8vIG5vZGUgdG8gbW92ZSBkb3duXG5cdFx0KSB7XG5cdFx0XHR2YXIgaGVhcCA9IHRoYXQuaGVhcDtcblx0XHRcdHZhciB2ID0gaGVhcFtrXTtcblx0XHRcdHZhciBqID0gayA8PCAxOyAvLyBsZWZ0IHNvbiBvZiBrXG5cdFx0XHR3aGlsZSAoaiA8PSB0aGF0LmhlYXBfbGVuKSB7XG5cdFx0XHRcdC8vIFNldCBqIHRvIHRoZSBzbWFsbGVzdCBvZiB0aGUgdHdvIHNvbnM6XG5cdFx0XHRcdGlmIChqIDwgdGhhdC5oZWFwX2xlbiAmJiBzbWFsbGVyKHRyZWUsIGhlYXBbaiArIDFdLCBoZWFwW2pdLCB0aGF0LmRlcHRoKSkge1xuXHRcdFx0XHRcdGorKztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBFeGl0IGlmIHYgaXMgc21hbGxlciB0aGFuIGJvdGggc29uc1xuXHRcdFx0XHRpZiAoc21hbGxlcih0cmVlLCB2LCBoZWFwW2pdLCB0aGF0LmRlcHRoKSlcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyBFeGNoYW5nZSB2IHdpdGggdGhlIHNtYWxsZXN0IHNvblxuXHRcdFx0XHRoZWFwW2tdID0gaGVhcFtqXTtcblx0XHRcdFx0ayA9IGo7XG5cdFx0XHRcdC8vIEFuZCBjb250aW51ZSBkb3duIHRoZSB0cmVlLCBzZXR0aW5nIGogdG8gdGhlIGxlZnQgc29uIG9mIGtcblx0XHRcdFx0aiA8PD0gMTtcblx0XHRcdH1cblx0XHRcdGhlYXBba10gPSB2O1xuXHRcdH07XG5cblx0XHQvLyBTY2FuIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIHRvIGRldGVybWluZSB0aGUgZnJlcXVlbmNpZXMgb2YgdGhlIGNvZGVzXG5cdFx0Ly8gaW4gdGhlIGJpdCBsZW5ndGggdHJlZS5cblx0XHRmdW5jdGlvbiBzY2FuX3RyZWUodHJlZSwvLyB0aGUgdHJlZSB0byBiZSBzY2FubmVkXG5cdFx0bWF4X2NvZGUgLy8gYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5XG5cdFx0KSB7XG5cdFx0XHR2YXIgbjsgLy8gaXRlcmF0ZXMgb3ZlciBhbGwgdHJlZSBlbGVtZW50c1xuXHRcdFx0dmFyIHByZXZsZW4gPSAtMTsgLy8gbGFzdCBlbWl0dGVkIGxlbmd0aFxuXHRcdFx0dmFyIGN1cmxlbjsgLy8gbGVuZ3RoIG9mIGN1cnJlbnQgY29kZVxuXHRcdFx0dmFyIG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV07IC8vIGxlbmd0aCBvZiBuZXh0IGNvZGVcblx0XHRcdHZhciBjb3VudCA9IDA7IC8vIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlXG5cdFx0XHR2YXIgbWF4X2NvdW50ID0gNzsgLy8gbWF4IHJlcGVhdCBjb3VudFxuXHRcdFx0dmFyIG1pbl9jb3VudCA9IDQ7IC8vIG1pbiByZXBlYXQgY291bnRcblxuXHRcdFx0aWYgKG5leHRsZW4gPT09IDApIHtcblx0XHRcdFx0bWF4X2NvdW50ID0gMTM4O1xuXHRcdFx0XHRtaW5fY291bnQgPSAzO1xuXHRcdFx0fVxuXHRcdFx0dHJlZVsobWF4X2NvZGUgKyAxKSAqIDIgKyAxXSA9IDB4ZmZmZjsgLy8gZ3VhcmRcblxuXHRcdFx0Zm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG5cdFx0XHRcdGN1cmxlbiA9IG5leHRsZW47XG5cdFx0XHRcdG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV07XG5cdFx0XHRcdGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PSBuZXh0bGVuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcblx0XHRcdFx0XHRibF90cmVlW2N1cmxlbiAqIDJdICs9IGNvdW50O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuXHRcdFx0XHRcdGlmIChjdXJsZW4gIT0gcHJldmxlbilcblx0XHRcdFx0XHRcdGJsX3RyZWVbY3VybGVuICogMl0rKztcblx0XHRcdFx0XHRibF90cmVlW1JFUF8zXzYgKiAyXSsrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG5cdFx0XHRcdFx0YmxfdHJlZVtSRVBaXzNfMTAgKiAyXSsrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJsX3RyZWVbUkVQWl8xMV8xMzggKiAyXSsrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdFx0cHJldmxlbiA9IGN1cmxlbjtcblx0XHRcdFx0aWYgKG5leHRsZW4gPT09IDApIHtcblx0XHRcdFx0XHRtYXhfY291bnQgPSAxMzg7XG5cdFx0XHRcdFx0bWluX2NvdW50ID0gMztcblx0XHRcdFx0fSBlbHNlIGlmIChjdXJsZW4gPT0gbmV4dGxlbikge1xuXHRcdFx0XHRcdG1heF9jb3VudCA9IDY7XG5cdFx0XHRcdFx0bWluX2NvdW50ID0gMztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtYXhfY291bnQgPSA3O1xuXHRcdFx0XHRcdG1pbl9jb3VudCA9IDQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBmb3IgdGhlIGJpdCBsZW5ndGhzIGFuZCByZXR1cm4gdGhlIGluZGV4IGluXG5cdFx0Ly8gYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG5cdFx0ZnVuY3Rpb24gYnVpbGRfYmxfdHJlZSgpIHtcblx0XHRcdHZhciBtYXhfYmxpbmRleDsgLy8gaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcVxuXG5cdFx0XHQvLyBEZXRlcm1pbmUgdGhlIGJpdCBsZW5ndGggZnJlcXVlbmNpZXMgZm9yIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzXG5cdFx0XHRzY2FuX3RyZWUoZHluX2x0cmVlLCBsX2Rlc2MubWF4X2NvZGUpO1xuXHRcdFx0c2Nhbl90cmVlKGR5bl9kdHJlZSwgZF9kZXNjLm1heF9jb2RlKTtcblxuXHRcdFx0Ly8gQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZTpcblx0XHRcdGJsX2Rlc2MuYnVpbGRfdHJlZSh0aGF0KTtcblx0XHRcdC8vIG9wdF9sZW4gbm93IGluY2x1ZGVzIHRoZSBsZW5ndGggb2YgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLCBleGNlcHRcblx0XHRcdC8vIHRoZSBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RocyBjb2RlcyBhbmQgdGhlIDUrNSs0IGJpdHMgZm9yIHRoZVxuXHRcdFx0Ly8gY291bnRzLlxuXG5cdFx0XHQvLyBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBiaXQgbGVuZ3RoIGNvZGVzIHRvIHNlbmQuIFRoZSBwa3ppcCBmb3JtYXRcblx0XHRcdC8vIHJlcXVpcmVzIHRoYXQgYXQgbGVhc3QgNCBiaXQgbGVuZ3RoIGNvZGVzIGJlIHNlbnQuIChhcHBub3RlLnR4dCBzYXlzXG5cdFx0XHQvLyAzIGJ1dCB0aGUgYWN0dWFsIHZhbHVlIHVzZWQgaXMgNC4pXG5cdFx0XHRmb3IgKG1heF9ibGluZGV4ID0gQkxfQ09ERVMgLSAxOyBtYXhfYmxpbmRleCA+PSAzOyBtYXhfYmxpbmRleC0tKSB7XG5cdFx0XHRcdGlmIChibF90cmVlW1RyZWUuYmxfb3JkZXJbbWF4X2JsaW5kZXhdICogMiArIDFdICE9PSAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Ly8gVXBkYXRlIG9wdF9sZW4gdG8gaW5jbHVkZSB0aGUgYml0IGxlbmd0aCB0cmVlIGFuZCBjb3VudHNcblx0XHRcdHRoYXQub3B0X2xlbiArPSAzICogKG1heF9ibGluZGV4ICsgMSkgKyA1ICsgNSArIDQ7XG5cblx0XHRcdHJldHVybiBtYXhfYmxpbmRleDtcblx0XHR9XG5cblx0XHQvLyBPdXRwdXQgYSBieXRlIG9uIHRoZSBzdHJlYW0uXG5cdFx0Ly8gSU4gYXNzZXJ0aW9uOiB0aGVyZSBpcyBlbm91Z2ggcm9vbSBpbiBwZW5kaW5nX2J1Zi5cblx0XHRmdW5jdGlvbiBwdXRfYnl0ZShwKSB7XG5cdFx0XHR0aGF0LnBlbmRpbmdfYnVmW3RoYXQucGVuZGluZysrXSA9IHA7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcHV0X3Nob3J0KHcpIHtcblx0XHRcdHB1dF9ieXRlKHcgJiAweGZmKTtcblx0XHRcdHB1dF9ieXRlKCh3ID4+PiA4KSAmIDB4ZmYpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHB1dFNob3J0TVNCKGIpIHtcblx0XHRcdHB1dF9ieXRlKChiID4+IDgpICYgMHhmZik7XG5cdFx0XHRwdXRfYnl0ZSgoYiAmIDB4ZmYpICYgMHhmZik7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc2VuZF9iaXRzKHZhbHVlLCBsZW5ndGgpIHtcblx0XHRcdHZhciB2YWwsIGxlbiA9IGxlbmd0aDtcblx0XHRcdGlmIChiaV92YWxpZCA+IEJ1Zl9zaXplIC0gbGVuKSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0XHQvLyBiaV9idWYgfD0gKHZhbCA8PCBiaV92YWxpZCk7XG5cdFx0XHRcdGJpX2J1ZiB8PSAoKHZhbCA8PCBiaV92YWxpZCkgJiAweGZmZmYpO1xuXHRcdFx0XHRwdXRfc2hvcnQoYmlfYnVmKTtcblx0XHRcdFx0YmlfYnVmID0gdmFsID4+PiAoQnVmX3NpemUgLSBiaV92YWxpZCk7XG5cdFx0XHRcdGJpX3ZhbGlkICs9IGxlbiAtIEJ1Zl9zaXplO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gYmlfYnVmIHw9ICh2YWx1ZSkgPDwgYmlfdmFsaWQ7XG5cdFx0XHRcdGJpX2J1ZiB8PSAoKCh2YWx1ZSkgPDwgYmlfdmFsaWQpICYgMHhmZmZmKTtcblx0XHRcdFx0YmlfdmFsaWQgKz0gbGVuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNlbmRfY29kZShjLCB0cmVlKSB7XG5cdFx0XHR2YXIgYzIgPSBjICogMjtcblx0XHRcdHNlbmRfYml0cyh0cmVlW2MyXSAmIDB4ZmZmZiwgdHJlZVtjMiArIDFdICYgMHhmZmZmKTtcblx0XHR9XG5cblx0XHQvLyBTZW5kIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIGluIGNvbXByZXNzZWQgZm9ybSwgdXNpbmcgdGhlIGNvZGVzIGluXG5cdFx0Ly8gYmxfdHJlZS5cblx0XHRmdW5jdGlvbiBzZW5kX3RyZWUodHJlZSwvLyB0aGUgdHJlZSB0byBiZSBzZW50XG5cdFx0bWF4X2NvZGUgLy8gYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5XG5cdFx0KSB7XG5cdFx0XHR2YXIgbjsgLy8gaXRlcmF0ZXMgb3ZlciBhbGwgdHJlZSBlbGVtZW50c1xuXHRcdFx0dmFyIHByZXZsZW4gPSAtMTsgLy8gbGFzdCBlbWl0dGVkIGxlbmd0aFxuXHRcdFx0dmFyIGN1cmxlbjsgLy8gbGVuZ3RoIG9mIGN1cnJlbnQgY29kZVxuXHRcdFx0dmFyIG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV07IC8vIGxlbmd0aCBvZiBuZXh0IGNvZGVcblx0XHRcdHZhciBjb3VudCA9IDA7IC8vIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlXG5cdFx0XHR2YXIgbWF4X2NvdW50ID0gNzsgLy8gbWF4IHJlcGVhdCBjb3VudFxuXHRcdFx0dmFyIG1pbl9jb3VudCA9IDQ7IC8vIG1pbiByZXBlYXQgY291bnRcblxuXHRcdFx0aWYgKG5leHRsZW4gPT09IDApIHtcblx0XHRcdFx0bWF4X2NvdW50ID0gMTM4O1xuXHRcdFx0XHRtaW5fY291bnQgPSAzO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKG4gPSAwOyBuIDw9IG1heF9jb2RlOyBuKyspIHtcblx0XHRcdFx0Y3VybGVuID0gbmV4dGxlbjtcblx0XHRcdFx0bmV4dGxlbiA9IHRyZWVbKG4gKyAxKSAqIDIgKyAxXTtcblx0XHRcdFx0aWYgKCsrY291bnQgPCBtYXhfY291bnQgJiYgY3VybGVuID09IG5leHRsZW4pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdHNlbmRfY29kZShjdXJsZW4sIGJsX3RyZWUpO1xuXHRcdFx0XHRcdH0gd2hpbGUgKC0tY291bnQgIT09IDApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuXHRcdFx0XHRcdGlmIChjdXJsZW4gIT0gcHJldmxlbikge1xuXHRcdFx0XHRcdFx0c2VuZF9jb2RlKGN1cmxlbiwgYmxfdHJlZSk7XG5cdFx0XHRcdFx0XHRjb3VudC0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZW5kX2NvZGUoUkVQXzNfNiwgYmxfdHJlZSk7XG5cdFx0XHRcdFx0c2VuZF9iaXRzKGNvdW50IC0gMywgMik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcblx0XHRcdFx0XHRzZW5kX2NvZGUoUkVQWl8zXzEwLCBibF90cmVlKTtcblx0XHRcdFx0XHRzZW5kX2JpdHMoY291bnQgLSAzLCAzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZW5kX2NvZGUoUkVQWl8xMV8xMzgsIGJsX3RyZWUpO1xuXHRcdFx0XHRcdHNlbmRfYml0cyhjb3VudCAtIDExLCA3KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRcdHByZXZsZW4gPSBjdXJsZW47XG5cdFx0XHRcdGlmIChuZXh0bGVuID09PSAwKSB7XG5cdFx0XHRcdFx0bWF4X2NvdW50ID0gMTM4O1xuXHRcdFx0XHRcdG1pbl9jb3VudCA9IDM7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY3VybGVuID09IG5leHRsZW4pIHtcblx0XHRcdFx0XHRtYXhfY291bnQgPSA2O1xuXHRcdFx0XHRcdG1pbl9jb3VudCA9IDM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWF4X2NvdW50ID0gNztcblx0XHRcdFx0XHRtaW5fY291bnQgPSA0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2VuZCB0aGUgaGVhZGVyIGZvciBhIGJsb2NrIHVzaW5nIGR5bmFtaWMgSHVmZm1hbiB0cmVlczogdGhlIGNvdW50cywgdGhlXG5cdFx0Ly8gbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcywgdGhlIGxpdGVyYWwgdHJlZSBhbmQgdGhlIGRpc3RhbmNlIHRyZWUuXG5cdFx0Ly8gSU4gYXNzZXJ0aW9uOiBsY29kZXMgPj0gMjU3LCBkY29kZXMgPj0gMSwgYmxjb2RlcyA+PSA0LlxuXHRcdGZ1bmN0aW9uIHNlbmRfYWxsX3RyZWVzKGxjb2RlcywgZGNvZGVzLCBibGNvZGVzKSB7XG5cdFx0XHR2YXIgcmFuazsgLy8gaW5kZXggaW4gYmxfb3JkZXJcblxuXHRcdFx0c2VuZF9iaXRzKGxjb2RlcyAtIDI1NywgNSk7IC8vIG5vdCArMjU1IGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dFxuXHRcdFx0c2VuZF9iaXRzKGRjb2RlcyAtIDEsIDUpO1xuXHRcdFx0c2VuZF9iaXRzKGJsY29kZXMgLSA0LCA0KTsgLy8gbm90IC0zIGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dFxuXHRcdFx0Zm9yIChyYW5rID0gMDsgcmFuayA8IGJsY29kZXM7IHJhbmsrKykge1xuXHRcdFx0XHRzZW5kX2JpdHMoYmxfdHJlZVtUcmVlLmJsX29yZGVyW3JhbmtdICogMiArIDFdLCAzKTtcblx0XHRcdH1cblx0XHRcdHNlbmRfdHJlZShkeW5fbHRyZWUsIGxjb2RlcyAtIDEpOyAvLyBsaXRlcmFsIHRyZWVcblx0XHRcdHNlbmRfdHJlZShkeW5fZHRyZWUsIGRjb2RlcyAtIDEpOyAvLyBkaXN0YW5jZSB0cmVlXG5cdFx0fVxuXG5cdFx0Ly8gRmx1c2ggdGhlIGJpdCBidWZmZXIsIGtlZXBpbmcgYXQgbW9zdCA3IGJpdHMgaW4gaXQuXG5cdFx0ZnVuY3Rpb24gYmlfZmx1c2goKSB7XG5cdFx0XHRpZiAoYmlfdmFsaWQgPT0gMTYpIHtcblx0XHRcdFx0cHV0X3Nob3J0KGJpX2J1Zik7XG5cdFx0XHRcdGJpX2J1ZiA9IDA7XG5cdFx0XHRcdGJpX3ZhbGlkID0gMDtcblx0XHRcdH0gZWxzZSBpZiAoYmlfdmFsaWQgPj0gOCkge1xuXHRcdFx0XHRwdXRfYnl0ZShiaV9idWYgJiAweGZmKTtcblx0XHRcdFx0YmlfYnVmID4+Pj0gODtcblx0XHRcdFx0YmlfdmFsaWQgLT0gODtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZW5kIG9uZSBlbXB0eSBzdGF0aWMgYmxvY2sgdG8gZ2l2ZSBlbm91Z2ggbG9va2FoZWFkIGZvciBpbmZsYXRlLlxuXHRcdC8vIFRoaXMgdGFrZXMgMTAgYml0cywgb2Ygd2hpY2ggNyBtYXkgcmVtYWluIGluIHRoZSBiaXQgYnVmZmVyLlxuXHRcdC8vIFRoZSBjdXJyZW50IGluZmxhdGUgY29kZSByZXF1aXJlcyA5IGJpdHMgb2YgbG9va2FoZWFkLiBJZiB0aGVcblx0XHQvLyBsYXN0IHR3byBjb2RlcyBmb3IgdGhlIHByZXZpb3VzIGJsb2NrIChyZWFsIGNvZGUgcGx1cyBFT0IpIHdlcmUgY29kZWRcblx0XHQvLyBvbiA1IGJpdHMgb3IgbGVzcywgaW5mbGF0ZSBtYXkgaGF2ZSBvbmx5IDUrMyBiaXRzIG9mIGxvb2thaGVhZCB0byBkZWNvZGVcblx0XHQvLyB0aGUgbGFzdCByZWFsIGNvZGUuIEluIHRoaXMgY2FzZSB3ZSBzZW5kIHR3byBlbXB0eSBzdGF0aWMgYmxvY2tzIGluc3RlYWRcblx0XHQvLyBvZiBvbmUuIChUaGVyZSBhcmUgbm8gcHJvYmxlbXMgaWYgdGhlIHByZXZpb3VzIGJsb2NrIGlzIHN0b3JlZCBvciBmaXhlZC4pXG5cdFx0Ly8gVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIGFzc3VtZSB0aGUgd29yc3QgY2FzZSBvZiBsYXN0IHJlYWwgY29kZSBlbmNvZGVkXG5cdFx0Ly8gb24gb25lIGJpdCBvbmx5LlxuXHRcdGZ1bmN0aW9uIF90cl9hbGlnbigpIHtcblx0XHRcdHNlbmRfYml0cyhTVEFUSUNfVFJFRVMgPDwgMSwgMyk7XG5cdFx0XHRzZW5kX2NvZGUoRU5EX0JMT0NLLCBTdGF0aWNUcmVlLnN0YXRpY19sdHJlZSk7XG5cblx0XHRcdGJpX2ZsdXNoKCk7XG5cblx0XHRcdC8vIE9mIHRoZSAxMCBiaXRzIGZvciB0aGUgZW1wdHkgYmxvY2ssIHdlIGhhdmUgYWxyZWFkeSBzZW50XG5cdFx0XHQvLyAoMTAgLSBiaV92YWxpZCkgYml0cy4gVGhlIGxvb2thaGVhZCBmb3IgdGhlIGxhc3QgcmVhbCBjb2RlIChiZWZvcmVcblx0XHRcdC8vIHRoZSBFT0Igb2YgdGhlIHByZXZpb3VzIGJsb2NrKSB3YXMgdGh1cyBhdCBsZWFzdCBvbmUgcGx1cyB0aGUgbGVuZ3RoXG5cdFx0XHQvLyBvZiB0aGUgRU9CIHBsdXMgd2hhdCB3ZSBoYXZlIGp1c3Qgc2VudCBvZiB0aGUgZW1wdHkgc3RhdGljIGJsb2NrLlxuXHRcdFx0aWYgKDEgKyBsYXN0X2VvYl9sZW4gKyAxMCAtIGJpX3ZhbGlkIDwgOSkge1xuXHRcdFx0XHRzZW5kX2JpdHMoU1RBVElDX1RSRUVTIDw8IDEsIDMpO1xuXHRcdFx0XHRzZW5kX2NvZGUoRU5EX0JMT0NLLCBTdGF0aWNUcmVlLnN0YXRpY19sdHJlZSk7XG5cdFx0XHRcdGJpX2ZsdXNoKCk7XG5cdFx0XHR9XG5cdFx0XHRsYXN0X2VvYl9sZW4gPSA3O1xuXHRcdH1cblxuXHRcdC8vIFNhdmUgdGhlIG1hdGNoIGluZm8gYW5kIHRhbGx5IHRoZSBmcmVxdWVuY3kgY291bnRzLiBSZXR1cm4gdHJ1ZSBpZlxuXHRcdC8vIHRoZSBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZC5cblx0XHRmdW5jdGlvbiBfdHJfdGFsbHkoZGlzdCwgLy8gZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmdcblx0XHRsYyAvLyBtYXRjaCBsZW5ndGgtTUlOX01BVENIIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0PT0wKVxuXHRcdCkge1xuXHRcdFx0dmFyIG91dF9sZW5ndGgsIGluX2xlbmd0aCwgZGNvZGU7XG5cdFx0XHR0aGF0LnBlbmRpbmdfYnVmW2RfYnVmICsgbGFzdF9saXQgKiAyXSA9IChkaXN0ID4+PiA4KSAmIDB4ZmY7XG5cdFx0XHR0aGF0LnBlbmRpbmdfYnVmW2RfYnVmICsgbGFzdF9saXQgKiAyICsgMV0gPSBkaXN0ICYgMHhmZjtcblxuXHRcdFx0dGhhdC5wZW5kaW5nX2J1ZltsX2J1ZiArIGxhc3RfbGl0XSA9IGxjICYgMHhmZjtcblx0XHRcdGxhc3RfbGl0Kys7XG5cblx0XHRcdGlmIChkaXN0ID09PSAwKSB7XG5cdFx0XHRcdC8vIGxjIGlzIHRoZSB1bm1hdGNoZWQgY2hhclxuXHRcdFx0XHRkeW5fbHRyZWVbbGMgKiAyXSsrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0Y2hlcysrO1xuXHRcdFx0XHQvLyBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIXG5cdFx0XHRcdGRpc3QtLTsgLy8gZGlzdCA9IG1hdGNoIGRpc3RhbmNlIC0gMVxuXHRcdFx0XHRkeW5fbHRyZWVbKFRyZWUuX2xlbmd0aF9jb2RlW2xjXSArIExJVEVSQUxTICsgMSkgKiAyXSsrO1xuXHRcdFx0XHRkeW5fZHRyZWVbVHJlZS5kX2NvZGUoZGlzdCkgKiAyXSsrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKGxhc3RfbGl0ICYgMHgxZmZmKSA9PT0gMCAmJiBsZXZlbCA+IDIpIHtcblx0XHRcdFx0Ly8gQ29tcHV0ZSBhbiB1cHBlciBib3VuZCBmb3IgdGhlIGNvbXByZXNzZWQgbGVuZ3RoXG5cdFx0XHRcdG91dF9sZW5ndGggPSBsYXN0X2xpdCAqIDg7XG5cdFx0XHRcdGluX2xlbmd0aCA9IHN0cnN0YXJ0IC0gYmxvY2tfc3RhcnQ7XG5cdFx0XHRcdGZvciAoZGNvZGUgPSAwOyBkY29kZSA8IERfQ09ERVM7IGRjb2RlKyspIHtcblx0XHRcdFx0XHRvdXRfbGVuZ3RoICs9IGR5bl9kdHJlZVtkY29kZSAqIDJdICogKDUgKyBUcmVlLmV4dHJhX2RiaXRzW2Rjb2RlXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3V0X2xlbmd0aCA+Pj49IDM7XG5cdFx0XHRcdGlmICgobWF0Y2hlcyA8IE1hdGguZmxvb3IobGFzdF9saXQgLyAyKSkgJiYgb3V0X2xlbmd0aCA8IE1hdGguZmxvb3IoaW5fbGVuZ3RoIC8gMikpXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAobGFzdF9saXQgPT0gbGl0X2J1ZnNpemUgLSAxKTtcblx0XHRcdC8vIFdlIGF2b2lkIGVxdWFsaXR5IHdpdGggbGl0X2J1ZnNpemUgYmVjYXVzZSBvZiB3cmFwYXJvdW5kIGF0IDY0S1xuXHRcdFx0Ly8gb24gMTYgYml0IG1hY2hpbmVzIGFuZCBiZWNhdXNlIHN0b3JlZCBibG9ja3MgYXJlIHJlc3RyaWN0ZWQgdG9cblx0XHRcdC8vIDY0Sy0xIGJ5dGVzLlxuXHRcdH1cblxuXHRcdC8vIFNlbmQgdGhlIGJsb2NrIGRhdGEgY29tcHJlc3NlZCB1c2luZyB0aGUgZ2l2ZW4gSHVmZm1hbiB0cmVlc1xuXHRcdGZ1bmN0aW9uIGNvbXByZXNzX2Jsb2NrKGx0cmVlLCBkdHJlZSkge1xuXHRcdFx0dmFyIGRpc3Q7IC8vIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nXG5cdFx0XHR2YXIgbGM7IC8vIG1hdGNoIGxlbmd0aCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdCA9PT0gMClcblx0XHRcdHZhciBseCA9IDA7IC8vIHJ1bm5pbmcgaW5kZXggaW4gbF9idWZcblx0XHRcdHZhciBjb2RlOyAvLyB0aGUgY29kZSB0byBzZW5kXG5cdFx0XHR2YXIgZXh0cmE7IC8vIG51bWJlciBvZiBleHRyYSBiaXRzIHRvIHNlbmRcblxuXHRcdFx0aWYgKGxhc3RfbGl0ICE9PSAwKSB7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRkaXN0ID0gKCh0aGF0LnBlbmRpbmdfYnVmW2RfYnVmICsgbHggKiAyXSA8PCA4KSAmIDB4ZmYwMCkgfCAodGhhdC5wZW5kaW5nX2J1ZltkX2J1ZiArIGx4ICogMiArIDFdICYgMHhmZik7XG5cdFx0XHRcdFx0bGMgPSAodGhhdC5wZW5kaW5nX2J1ZltsX2J1ZiArIGx4XSkgJiAweGZmO1xuXHRcdFx0XHRcdGx4Kys7XG5cblx0XHRcdFx0XHRpZiAoZGlzdCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0c2VuZF9jb2RlKGxjLCBsdHJlZSk7IC8vIHNlbmQgYSBsaXRlcmFsIGJ5dGVcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSFxuXHRcdFx0XHRcdFx0Y29kZSA9IFRyZWUuX2xlbmd0aF9jb2RlW2xjXTtcblxuXHRcdFx0XHRcdFx0c2VuZF9jb2RlKGNvZGUgKyBMSVRFUkFMUyArIDEsIGx0cmVlKTsgLy8gc2VuZCB0aGUgbGVuZ3RoXG5cdFx0XHRcdFx0XHQvLyBjb2RlXG5cdFx0XHRcdFx0XHRleHRyYSA9IFRyZWUuZXh0cmFfbGJpdHNbY29kZV07XG5cdFx0XHRcdFx0XHRpZiAoZXh0cmEgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0bGMgLT0gVHJlZS5iYXNlX2xlbmd0aFtjb2RlXTtcblx0XHRcdFx0XHRcdFx0c2VuZF9iaXRzKGxjLCBleHRyYSk7IC8vIHNlbmQgdGhlIGV4dHJhIGxlbmd0aCBiaXRzXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkaXN0LS07IC8vIGRpc3QgaXMgbm93IHRoZSBtYXRjaCBkaXN0YW5jZSAtIDFcblx0XHRcdFx0XHRcdGNvZGUgPSBUcmVlLmRfY29kZShkaXN0KTtcblxuXHRcdFx0XHRcdFx0c2VuZF9jb2RlKGNvZGUsIGR0cmVlKTsgLy8gc2VuZCB0aGUgZGlzdGFuY2UgY29kZVxuXHRcdFx0XHRcdFx0ZXh0cmEgPSBUcmVlLmV4dHJhX2RiaXRzW2NvZGVdO1xuXHRcdFx0XHRcdFx0aWYgKGV4dHJhICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGRpc3QgLT0gVHJlZS5iYXNlX2Rpc3RbY29kZV07XG5cdFx0XHRcdFx0XHRcdHNlbmRfYml0cyhkaXN0LCBleHRyYSk7IC8vIHNlbmQgdGhlIGV4dHJhIGRpc3RhbmNlIGJpdHNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IC8vIGxpdGVyYWwgb3IgbWF0Y2ggcGFpciA/XG5cblx0XHRcdFx0XHQvLyBDaGVjayB0aGF0IHRoZSBvdmVybGF5IGJldHdlZW4gcGVuZGluZ19idWYgYW5kIGRfYnVmK2xfYnVmIGlzXG5cdFx0XHRcdFx0Ly8gb2s6XG5cdFx0XHRcdH0gd2hpbGUgKGx4IDwgbGFzdF9saXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZW5kX2NvZGUoRU5EX0JMT0NLLCBsdHJlZSk7XG5cdFx0XHRsYXN0X2VvYl9sZW4gPSBsdHJlZVtFTkRfQkxPQ0sgKiAyICsgMV07XG5cdFx0fVxuXG5cdFx0Ly8gRmx1c2ggdGhlIGJpdCBidWZmZXIgYW5kIGFsaWduIHRoZSBvdXRwdXQgb24gYSBieXRlIGJvdW5kYXJ5XG5cdFx0ZnVuY3Rpb24gYmlfd2luZHVwKCkge1xuXHRcdFx0aWYgKGJpX3ZhbGlkID4gOCkge1xuXHRcdFx0XHRwdXRfc2hvcnQoYmlfYnVmKTtcblx0XHRcdH0gZWxzZSBpZiAoYmlfdmFsaWQgPiAwKSB7XG5cdFx0XHRcdHB1dF9ieXRlKGJpX2J1ZiAmIDB4ZmYpO1xuXHRcdFx0fVxuXHRcdFx0YmlfYnVmID0gMDtcblx0XHRcdGJpX3ZhbGlkID0gMDtcblx0XHR9XG5cblx0XHQvLyBDb3B5IGEgc3RvcmVkIGJsb2NrLCBzdG9yaW5nIGZpcnN0IHRoZSBsZW5ndGggYW5kIGl0c1xuXHRcdC8vIG9uZSdzIGNvbXBsZW1lbnQgaWYgcmVxdWVzdGVkLlxuXHRcdGZ1bmN0aW9uIGNvcHlfYmxvY2soYnVmLCAvLyB0aGUgaW5wdXQgZGF0YVxuXHRcdGxlbiwgLy8gaXRzIGxlbmd0aFxuXHRcdGhlYWRlciAvLyB0cnVlIGlmIGJsb2NrIGhlYWRlciBtdXN0IGJlIHdyaXR0ZW5cblx0XHQpIHtcblx0XHRcdGJpX3dpbmR1cCgpOyAvLyBhbGlnbiBvbiBieXRlIGJvdW5kYXJ5XG5cdFx0XHRsYXN0X2VvYl9sZW4gPSA4OyAvLyBlbm91Z2ggbG9va2FoZWFkIGZvciBpbmZsYXRlXG5cblx0XHRcdGlmIChoZWFkZXIpIHtcblx0XHRcdFx0cHV0X3Nob3J0KGxlbik7XG5cdFx0XHRcdHB1dF9zaG9ydCh+bGVuKTtcblx0XHRcdH1cblxuXHRcdFx0dGhhdC5wZW5kaW5nX2J1Zi5zZXQod2luZG93LnN1YmFycmF5KGJ1ZiwgYnVmICsgbGVuKSwgdGhhdC5wZW5kaW5nKTtcblx0XHRcdHRoYXQucGVuZGluZyArPSBsZW47XG5cdFx0fVxuXG5cdFx0Ly8gU2VuZCBhIHN0b3JlZCBibG9ja1xuXHRcdGZ1bmN0aW9uIF90cl9zdG9yZWRfYmxvY2soYnVmLCAvLyBpbnB1dCBibG9ja1xuXHRcdHN0b3JlZF9sZW4sIC8vIGxlbmd0aCBvZiBpbnB1dCBibG9ja1xuXHRcdGVvZiAvLyB0cnVlIGlmIHRoaXMgaXMgdGhlIGxhc3QgYmxvY2sgZm9yIGEgZmlsZVxuXHRcdCkge1xuXHRcdFx0c2VuZF9iaXRzKChTVE9SRURfQkxPQ0sgPDwgMSkgKyAoZW9mID8gMSA6IDApLCAzKTsgLy8gc2VuZCBibG9jayB0eXBlXG5cdFx0XHRjb3B5X2Jsb2NrKGJ1Ziwgc3RvcmVkX2xlbiwgdHJ1ZSk7IC8vIHdpdGggaGVhZGVyXG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIHRoZSBiZXN0IGVuY29kaW5nIGZvciB0aGUgY3VycmVudCBibG9jazogZHluYW1pYyB0cmVlcywgc3RhdGljXG5cdFx0Ly8gdHJlZXMgb3Igc3RvcmUsIGFuZCBvdXRwdXQgdGhlIGVuY29kZWQgYmxvY2sgdG8gdGhlIHppcCBmaWxlLlxuXHRcdGZ1bmN0aW9uIF90cl9mbHVzaF9ibG9jayhidWYsIC8vIGlucHV0IGJsb2NrLCBvciBOVUxMIGlmIHRvbyBvbGRcblx0XHRzdG9yZWRfbGVuLCAvLyBsZW5ndGggb2YgaW5wdXQgYmxvY2tcblx0XHRlb2YgLy8gdHJ1ZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGVcblx0XHQpIHtcblx0XHRcdHZhciBvcHRfbGVuYiwgc3RhdGljX2xlbmI7Ly8gb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBpbiBieXRlc1xuXHRcdFx0dmFyIG1heF9ibGluZGV4ID0gMDsgLy8gaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcVxuXG5cdFx0XHQvLyBCdWlsZCB0aGUgSHVmZm1hbiB0cmVlcyB1bmxlc3MgYSBzdG9yZWQgYmxvY2sgaXMgZm9yY2VkXG5cdFx0XHRpZiAobGV2ZWwgPiAwKSB7XG5cdFx0XHRcdC8vIENvbnN0cnVjdCB0aGUgbGl0ZXJhbCBhbmQgZGlzdGFuY2UgdHJlZXNcblx0XHRcdFx0bF9kZXNjLmJ1aWxkX3RyZWUodGhhdCk7XG5cblx0XHRcdFx0ZF9kZXNjLmJ1aWxkX3RyZWUodGhhdCk7XG5cblx0XHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBhcmUgdGhlIHRvdGFsIGJpdCBsZW5ndGhzXG5cdFx0XHRcdC8vIG9mXG5cdFx0XHRcdC8vIHRoZSBjb21wcmVzc2VkIGJsb2NrIGRhdGEsIGV4Y2x1ZGluZyB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMuXG5cblx0XHRcdFx0Ly8gQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZSBmb3IgdGhlIGFib3ZlIHR3byB0cmVlcywgYW5kIGdldCB0aGVcblx0XHRcdFx0Ly8gaW5kZXhcblx0XHRcdFx0Ly8gaW4gYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG5cdFx0XHRcdG1heF9ibGluZGV4ID0gYnVpbGRfYmxfdHJlZSgpO1xuXG5cdFx0XHRcdC8vIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZy4gQ29tcHV0ZSBmaXJzdCB0aGUgYmxvY2sgbGVuZ3RoIGluXG5cdFx0XHRcdC8vIGJ5dGVzXG5cdFx0XHRcdG9wdF9sZW5iID0gKHRoYXQub3B0X2xlbiArIDMgKyA3KSA+Pj4gMztcblx0XHRcdFx0c3RhdGljX2xlbmIgPSAodGhhdC5zdGF0aWNfbGVuICsgMyArIDcpID4+PiAzO1xuXG5cdFx0XHRcdGlmIChzdGF0aWNfbGVuYiA8PSBvcHRfbGVuYilcblx0XHRcdFx0XHRvcHRfbGVuYiA9IHN0YXRpY19sZW5iO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0X2xlbmIgPSBzdGF0aWNfbGVuYiA9IHN0b3JlZF9sZW4gKyA1OyAvLyBmb3JjZSBhIHN0b3JlZCBibG9ja1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKHN0b3JlZF9sZW4gKyA0IDw9IG9wdF9sZW5iKSAmJiBidWYgIT0gLTEpIHtcblx0XHRcdFx0Ly8gNDogdHdvIHdvcmRzIGZvciB0aGUgbGVuZ3Roc1xuXHRcdFx0XHQvLyBUaGUgdGVzdCBidWYgIT0gTlVMTCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiBMSVRfQlVGU0laRSA+IFdTSVpFLlxuXHRcdFx0XHQvLyBPdGhlcndpc2Ugd2UgY2FuJ3QgaGF2ZSBwcm9jZXNzZWQgbW9yZSB0aGFuIFdTSVpFIGlucHV0IGJ5dGVzXG5cdFx0XHRcdC8vIHNpbmNlXG5cdFx0XHRcdC8vIHRoZSBsYXN0IGJsb2NrIGZsdXNoLCBiZWNhdXNlIGNvbXByZXNzaW9uIHdvdWxkIGhhdmUgYmVlblxuXHRcdFx0XHQvLyBzdWNjZXNzZnVsLiBJZiBMSVRfQlVGU0laRSA8PSBXU0laRSwgaXQgaXMgbmV2ZXIgdG9vIGxhdGUgdG9cblx0XHRcdFx0Ly8gdHJhbnNmb3JtIGEgYmxvY2sgaW50byBhIHN0b3JlZCBibG9jay5cblx0XHRcdFx0X3RyX3N0b3JlZF9ibG9jayhidWYsIHN0b3JlZF9sZW4sIGVvZik7XG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRpY19sZW5iID09IG9wdF9sZW5iKSB7XG5cdFx0XHRcdHNlbmRfYml0cygoU1RBVElDX1RSRUVTIDw8IDEpICsgKGVvZiA/IDEgOiAwKSwgMyk7XG5cdFx0XHRcdGNvbXByZXNzX2Jsb2NrKFN0YXRpY1RyZWUuc3RhdGljX2x0cmVlLCBTdGF0aWNUcmVlLnN0YXRpY19kdHJlZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZW5kX2JpdHMoKERZTl9UUkVFUyA8PCAxKSArIChlb2YgPyAxIDogMCksIDMpO1xuXHRcdFx0XHRzZW5kX2FsbF90cmVlcyhsX2Rlc2MubWF4X2NvZGUgKyAxLCBkX2Rlc2MubWF4X2NvZGUgKyAxLCBtYXhfYmxpbmRleCArIDEpO1xuXHRcdFx0XHRjb21wcmVzc19ibG9jayhkeW5fbHRyZWUsIGR5bl9kdHJlZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBhYm92ZSBjaGVjayBpcyBtYWRlIG1vZCAyXjMyLCBmb3IgZmlsZXMgbGFyZ2VyIHRoYW4gNTEyIE1CXG5cdFx0XHQvLyBhbmQgdUxvbmcgaW1wbGVtZW50ZWQgb24gMzIgYml0cy5cblxuXHRcdFx0aW5pdF9ibG9jaygpO1xuXG5cdFx0XHRpZiAoZW9mKSB7XG5cdFx0XHRcdGJpX3dpbmR1cCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZsdXNoX2Jsb2NrX29ubHkoZW9mKSB7XG5cdFx0XHRfdHJfZmx1c2hfYmxvY2soYmxvY2tfc3RhcnQgPj0gMCA/IGJsb2NrX3N0YXJ0IDogLTEsIHN0cnN0YXJ0IC0gYmxvY2tfc3RhcnQsIGVvZik7XG5cdFx0XHRibG9ja19zdGFydCA9IHN0cnN0YXJ0O1xuXHRcdFx0c3RybS5mbHVzaF9wZW5kaW5nKCk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsbCB0aGUgd2luZG93IHdoZW4gdGhlIGxvb2thaGVhZCBiZWNvbWVzIGluc3VmZmljaWVudC5cblx0XHQvLyBVcGRhdGVzIHN0cnN0YXJ0IGFuZCBsb29rYWhlYWQuXG5cdFx0Ly9cblx0XHQvLyBJTiBhc3NlcnRpb246IGxvb2thaGVhZCA8IE1JTl9MT09LQUhFQURcblx0XHQvLyBPVVQgYXNzZXJ0aW9uczogc3Ryc3RhcnQgPD0gd2luZG93X3NpemUtTUlOX0xPT0tBSEVBRFxuXHRcdC8vIEF0IGxlYXN0IG9uZSBieXRlIGhhcyBiZWVuIHJlYWQsIG9yIGF2YWlsX2luID09PSAwOyByZWFkcyBhcmVcblx0XHQvLyBwZXJmb3JtZWQgZm9yIGF0IGxlYXN0IHR3byBieXRlcyAocmVxdWlyZWQgZm9yIHRoZSB6aXAgdHJhbnNsYXRlX2VvbFxuXHRcdC8vIG9wdGlvbiAtLSBub3Qgc3VwcG9ydGVkIGhlcmUpLlxuXHRcdGZ1bmN0aW9uIGZpbGxfd2luZG93KCkge1xuXHRcdFx0dmFyIG4sIG07XG5cdFx0XHR2YXIgcDtcblx0XHRcdHZhciBtb3JlOyAvLyBBbW91bnQgb2YgZnJlZSBzcGFjZSBhdCB0aGUgZW5kIG9mIHRoZSB3aW5kb3cuXG5cblx0XHRcdGRvIHtcblx0XHRcdFx0bW9yZSA9ICh3aW5kb3dfc2l6ZSAtIGxvb2thaGVhZCAtIHN0cnN0YXJ0KTtcblxuXHRcdFx0XHQvLyBEZWFsIHdpdGggIUAjJCUgNjRLIGxpbWl0OlxuXHRcdFx0XHRpZiAobW9yZSA9PT0gMCAmJiBzdHJzdGFydCA9PT0gMCAmJiBsb29rYWhlYWQgPT09IDApIHtcblx0XHRcdFx0XHRtb3JlID0gd19zaXplO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1vcmUgPT0gLTEpIHtcblx0XHRcdFx0XHQvLyBWZXJ5IHVubGlrZWx5LCBidXQgcG9zc2libGUgb24gMTYgYml0IG1hY2hpbmUgaWYgc3Ryc3RhcnQgPT1cblx0XHRcdFx0XHQvLyAwXG5cdFx0XHRcdFx0Ly8gYW5kIGxvb2thaGVhZCA9PSAxIChpbnB1dCBkb25lIG9uZSBieXRlIGF0IHRpbWUpXG5cdFx0XHRcdFx0bW9yZS0tO1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHdpbmRvdyBpcyBhbG1vc3QgZnVsbCBhbmQgdGhlcmUgaXMgaW5zdWZmaWNpZW50XG5cdFx0XHRcdFx0Ly8gbG9va2FoZWFkLFxuXHRcdFx0XHRcdC8vIG1vdmUgdGhlIHVwcGVyIGhhbGYgdG8gdGhlIGxvd2VyIG9uZSB0byBtYWtlIHJvb20gaW4gdGhlXG5cdFx0XHRcdFx0Ly8gdXBwZXIgaGFsZi5cblx0XHRcdFx0fSBlbHNlIGlmIChzdHJzdGFydCA+PSB3X3NpemUgKyB3X3NpemUgLSBNSU5fTE9PS0FIRUFEKSB7XG5cdFx0XHRcdFx0d2luZG93LnNldCh3aW5kb3cuc3ViYXJyYXkod19zaXplLCB3X3NpemUgKyB3X3NpemUpLCAwKTtcblxuXHRcdFx0XHRcdG1hdGNoX3N0YXJ0IC09IHdfc2l6ZTtcblx0XHRcdFx0XHRzdHJzdGFydCAtPSB3X3NpemU7IC8vIHdlIG5vdyBoYXZlIHN0cnN0YXJ0ID49IE1BWF9ESVNUXG5cdFx0XHRcdFx0YmxvY2tfc3RhcnQgLT0gd19zaXplO1xuXG5cdFx0XHRcdFx0Ly8gU2xpZGUgdGhlIGhhc2ggdGFibGUgKGNvdWxkIGJlIGF2b2lkZWQgd2l0aCAzMiBiaXQgdmFsdWVzXG5cdFx0XHRcdFx0Ly8gYXQgdGhlIGV4cGVuc2Ugb2YgbWVtb3J5IHVzYWdlKS4gV2Ugc2xpZGUgZXZlbiB3aGVuIGxldmVsID09XG5cdFx0XHRcdFx0Ly8gMFxuXHRcdFx0XHRcdC8vIHRvIGtlZXAgdGhlIGhhc2ggdGFibGUgY29uc2lzdGVudCBpZiB3ZSBzd2l0Y2ggYmFjayB0byBsZXZlbFxuXHRcdFx0XHRcdC8vID4gMFxuXHRcdFx0XHRcdC8vIGxhdGVyLiAoVXNpbmcgbGV2ZWwgMCBwZXJtYW5lbnRseSBpcyBub3QgYW4gb3B0aW1hbCB1c2FnZSBvZlxuXHRcdFx0XHRcdC8vIHpsaWIsIHNvIHdlIGRvbid0IGNhcmUgYWJvdXQgdGhpcyBwYXRob2xvZ2ljYWwgY2FzZS4pXG5cblx0XHRcdFx0XHRuID0gaGFzaF9zaXplO1xuXHRcdFx0XHRcdHAgPSBuO1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdG0gPSAoaGVhZFstLXBdICYgMHhmZmZmKTtcblx0XHRcdFx0XHRcdGhlYWRbcF0gPSAobSA+PSB3X3NpemUgPyBtIC0gd19zaXplIDogMCk7XG5cdFx0XHRcdFx0fSB3aGlsZSAoLS1uICE9PSAwKTtcblxuXHRcdFx0XHRcdG4gPSB3X3NpemU7XG5cdFx0XHRcdFx0cCA9IG47XG5cdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0bSA9IChwcmV2Wy0tcF0gJiAweGZmZmYpO1xuXHRcdFx0XHRcdFx0cHJldltwXSA9IChtID49IHdfc2l6ZSA/IG0gLSB3X3NpemUgOiAwKTtcblx0XHRcdFx0XHRcdC8vIElmIG4gaXMgbm90IG9uIGFueSBoYXNoIGNoYWluLCBwcmV2W25dIGlzIGdhcmJhZ2UgYnV0XG5cdFx0XHRcdFx0XHQvLyBpdHMgdmFsdWUgd2lsbCBuZXZlciBiZSB1c2VkLlxuXHRcdFx0XHRcdH0gd2hpbGUgKC0tbiAhPT0gMCk7XG5cdFx0XHRcdFx0bW9yZSArPSB3X3NpemU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc3RybS5hdmFpbF9pbiA9PT0gMClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIG5vIHNsaWRpbmc6XG5cdFx0XHRcdC8vIHN0cnN0YXJ0IDw9IFdTSVpFK01BWF9ESVNULTEgJiYgbG9va2FoZWFkIDw9IE1JTl9MT09LQUhFQUQgLSAxICYmXG5cdFx0XHRcdC8vIG1vcmUgPT0gd2luZG93X3NpemUgLSBsb29rYWhlYWQgLSBzdHJzdGFydFxuXHRcdFx0XHQvLyA9PiBtb3JlID49IHdpbmRvd19zaXplIC0gKE1JTl9MT09LQUhFQUQtMSArIFdTSVpFICsgTUFYX0RJU1QtMSlcblx0XHRcdFx0Ly8gPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIDIqV1NJWkUgKyAyXG5cdFx0XHRcdC8vIEluIHRoZSBCSUdfTUVNIG9yIE1NQVAgY2FzZSAobm90IHlldCBzdXBwb3J0ZWQpLFxuXHRcdFx0XHQvLyB3aW5kb3dfc2l6ZSA9PSBpbnB1dF9zaXplICsgTUlOX0xPT0tBSEVBRCAmJlxuXHRcdFx0XHQvLyBzdHJzdGFydCArIHMtPmxvb2thaGVhZCA8PSBpbnB1dF9zaXplID0+IG1vcmUgPj0gTUlOX0xPT0tBSEVBRC5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB3aW5kb3dfc2l6ZSA9PSAyKldTSVpFIHNvIG1vcmUgPj0gMi5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIHNsaWRpbmcsIG1vcmUgPj0gV1NJWkUuIFNvIGluIGFsbCBjYXNlcywgbW9yZSA+PSAyLlxuXG5cdFx0XHRcdG4gPSBzdHJtLnJlYWRfYnVmKHdpbmRvdywgc3Ryc3RhcnQgKyBsb29rYWhlYWQsIG1vcmUpO1xuXHRcdFx0XHRsb29rYWhlYWQgKz0gbjtcblxuXHRcdFx0XHQvLyBJbml0aWFsaXplIHRoZSBoYXNoIHZhbHVlIG5vdyB0aGF0IHdlIGhhdmUgc29tZSBpbnB1dDpcblx0XHRcdFx0aWYgKGxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcblx0XHRcdFx0XHRpbnNfaCA9IHdpbmRvd1tzdHJzdGFydF0gJiAweGZmO1xuXHRcdFx0XHRcdGluc19oID0gKCgoaW5zX2gpIDw8IGhhc2hfc2hpZnQpIF4gKHdpbmRvd1tzdHJzdGFydCArIDFdICYgMHhmZikpICYgaGFzaF9tYXNrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIElmIHRoZSB3aG9sZSBpbnB1dCBoYXMgbGVzcyB0aGFuIE1JTl9NQVRDSCBieXRlcywgaW5zX2ggaXNcblx0XHRcdFx0Ly8gZ2FyYmFnZSxcblx0XHRcdFx0Ly8gYnV0IHRoaXMgaXMgbm90IGltcG9ydGFudCBzaW5jZSBvbmx5IGxpdGVyYWwgYnl0ZXMgd2lsbCBiZVxuXHRcdFx0XHQvLyBlbWl0dGVkLlxuXHRcdFx0fSB3aGlsZSAobG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBzdHJtLmF2YWlsX2luICE9PSAwKTtcblx0XHR9XG5cblx0XHQvLyBDb3B5IHdpdGhvdXQgY29tcHJlc3Npb24gYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sXG5cdFx0Ly8gcmV0dXJuXG5cdFx0Ly8gdGhlIGN1cnJlbnQgYmxvY2sgc3RhdGUuXG5cdFx0Ly8gVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBpbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgc2luY2Vcblx0XHQvLyB1bmNvbXByZXNzaWJsZSBkYXRhIGlzIHByb2JhYmx5IG5vdCB1c2VmdWwuIFRoaXMgZnVuY3Rpb24gaXMgdXNlZFxuXHRcdC8vIG9ubHkgZm9yIHRoZSBsZXZlbD0wIGNvbXByZXNzaW9uIG9wdGlvbi5cblx0XHQvLyBOT1RFOiB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBvcHRpbWl6ZWQgdG8gYXZvaWQgZXh0cmEgY29weWluZyBmcm9tXG5cdFx0Ly8gd2luZG93IHRvIHBlbmRpbmdfYnVmLlxuXHRcdGZ1bmN0aW9uIGRlZmxhdGVfc3RvcmVkKGZsdXNoKSB7XG5cdFx0XHQvLyBTdG9yZWQgYmxvY2tzIGFyZSBsaW1pdGVkIHRvIDB4ZmZmZiBieXRlcywgcGVuZGluZ19idWYgaXMgbGltaXRlZFxuXHRcdFx0Ly8gdG8gcGVuZGluZ19idWZfc2l6ZSwgYW5kIGVhY2ggc3RvcmVkIGJsb2NrIGhhcyBhIDUgYnl0ZSBoZWFkZXI6XG5cblx0XHRcdHZhciBtYXhfYmxvY2tfc2l6ZSA9IDB4ZmZmZjtcblx0XHRcdHZhciBtYXhfc3RhcnQ7XG5cblx0XHRcdGlmIChtYXhfYmxvY2tfc2l6ZSA+IHBlbmRpbmdfYnVmX3NpemUgLSA1KSB7XG5cdFx0XHRcdG1heF9ibG9ja19zaXplID0gcGVuZGluZ19idWZfc2l6ZSAtIDU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvcHkgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIGlucHV0IHRvIG91dHB1dDpcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdC8vIEZpbGwgdGhlIHdpbmRvdyBhcyBtdWNoIGFzIHBvc3NpYmxlOlxuXHRcdFx0XHRpZiAobG9va2FoZWFkIDw9IDEpIHtcblx0XHRcdFx0XHRmaWxsX3dpbmRvdygpO1xuXHRcdFx0XHRcdGlmIChsb29rYWhlYWQgPT09IDAgJiYgZmx1c2ggPT0gWl9OT19GTFVTSClcblx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdFx0XHRpZiAobG9va2FoZWFkID09PSAwKVxuXHRcdFx0XHRcdFx0YnJlYWs7IC8vIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdHJzdGFydCArPSBsb29rYWhlYWQ7XG5cdFx0XHRcdGxvb2thaGVhZCA9IDA7XG5cblx0XHRcdFx0Ly8gRW1pdCBhIHN0b3JlZCBibG9jayBpZiBwZW5kaW5nX2J1ZiB3aWxsIGJlIGZ1bGw6XG5cdFx0XHRcdG1heF9zdGFydCA9IGJsb2NrX3N0YXJ0ICsgbWF4X2Jsb2NrX3NpemU7XG5cdFx0XHRcdGlmIChzdHJzdGFydCA9PT0gMCB8fCBzdHJzdGFydCA+PSBtYXhfc3RhcnQpIHtcblx0XHRcdFx0XHQvLyBzdHJzdGFydCA9PT0gMCBpcyBwb3NzaWJsZSB3aGVuIHdyYXBhcm91bmQgb24gMTYtYml0IG1hY2hpbmVcblx0XHRcdFx0XHRsb29rYWhlYWQgPSAoc3Ryc3RhcnQgLSBtYXhfc3RhcnQpO1xuXHRcdFx0XHRcdHN0cnN0YXJ0ID0gbWF4X3N0YXJ0O1xuXG5cdFx0XHRcdFx0Zmx1c2hfYmxvY2tfb25seShmYWxzZSk7XG5cdFx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIE5lZWRNb3JlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGbHVzaCBpZiB3ZSBtYXkgaGF2ZSB0byBzbGlkZSwgb3RoZXJ3aXNlIGJsb2NrX3N0YXJ0IG1heSBiZWNvbWVcblx0XHRcdFx0Ly8gbmVnYXRpdmUgYW5kIHRoZSBkYXRhIHdpbGwgYmUgZ29uZTpcblx0XHRcdFx0aWYgKHN0cnN0YXJ0IC0gYmxvY2tfc3RhcnQgPj0gd19zaXplIC0gTUlOX0xPT0tBSEVBRCkge1xuXHRcdFx0XHRcdGZsdXNoX2Jsb2NrX29ubHkoZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmbHVzaF9ibG9ja19vbmx5KGZsdXNoID09IFpfRklOSVNIKTtcblx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMClcblx0XHRcdFx0cmV0dXJuIChmbHVzaCA9PSBaX0ZJTklTSCkgPyBGaW5pc2hTdGFydGVkIDogTmVlZE1vcmU7XG5cblx0XHRcdHJldHVybiBmbHVzaCA9PSBaX0ZJTklTSCA/IEZpbmlzaERvbmUgOiBCbG9ja0RvbmU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbG9uZ2VzdF9tYXRjaChjdXJfbWF0Y2gpIHtcblx0XHRcdHZhciBjaGFpbl9sZW5ndGggPSBtYXhfY2hhaW5fbGVuZ3RoOyAvLyBtYXggaGFzaCBjaGFpbiBsZW5ndGhcblx0XHRcdHZhciBzY2FuID0gc3Ryc3RhcnQ7IC8vIGN1cnJlbnQgc3RyaW5nXG5cdFx0XHR2YXIgbWF0Y2g7IC8vIG1hdGNoZWQgc3RyaW5nXG5cdFx0XHR2YXIgbGVuOyAvLyBsZW5ndGggb2YgY3VycmVudCBtYXRjaFxuXHRcdFx0dmFyIGJlc3RfbGVuID0gcHJldl9sZW5ndGg7IC8vIGJlc3QgbWF0Y2ggbGVuZ3RoIHNvIGZhclxuXHRcdFx0dmFyIGxpbWl0ID0gc3Ryc3RhcnQgPiAod19zaXplIC0gTUlOX0xPT0tBSEVBRCkgPyBzdHJzdGFydCAtICh3X3NpemUgLSBNSU5fTE9PS0FIRUFEKSA6IDA7XG5cdFx0XHR2YXIgX25pY2VfbWF0Y2ggPSBuaWNlX21hdGNoO1xuXG5cdFx0XHQvLyBTdG9wIHdoZW4gY3VyX21hdGNoIGJlY29tZXMgPD0gbGltaXQuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLFxuXHRcdFx0Ly8gd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZyBvZiB3aW5kb3cgaW5kZXggMC5cblxuXHRcdFx0dmFyIHdtYXNrID0gd19tYXNrO1xuXG5cdFx0XHR2YXIgc3RyZW5kID0gc3Ryc3RhcnQgKyBNQVhfTUFUQ0g7XG5cdFx0XHR2YXIgc2Nhbl9lbmQxID0gd2luZG93W3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuXHRcdFx0dmFyIHNjYW5fZW5kID0gd2luZG93W3NjYW4gKyBiZXN0X2xlbl07XG5cblx0XHRcdC8vIFRoZSBjb2RlIGlzIG9wdGltaXplZCBmb3IgSEFTSF9CSVRTID49IDggYW5kIE1BWF9NQVRDSC0yIG11bHRpcGxlIG9mXG5cdFx0XHQvLyAxNi5cblx0XHRcdC8vIEl0IGlzIGVhc3kgdG8gZ2V0IHJpZCBvZiB0aGlzIG9wdGltaXphdGlvbiBpZiBuZWNlc3NhcnkuXG5cblx0XHRcdC8vIERvIG5vdCB3YXN0ZSB0b28gbXVjaCB0aW1lIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGdvb2QgbWF0Y2g6XG5cdFx0XHRpZiAocHJldl9sZW5ndGggPj0gZ29vZF9tYXRjaCkge1xuXHRcdFx0XHRjaGFpbl9sZW5ndGggPj49IDI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERvIG5vdCBsb29rIGZvciBtYXRjaGVzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBpbnB1dC4gVGhpcyBpc1xuXHRcdFx0Ly8gbmVjZXNzYXJ5XG5cdFx0XHQvLyB0byBtYWtlIGRlZmxhdGUgZGV0ZXJtaW5pc3RpYy5cblx0XHRcdGlmIChfbmljZV9tYXRjaCA+IGxvb2thaGVhZClcblx0XHRcdFx0X25pY2VfbWF0Y2ggPSBsb29rYWhlYWQ7XG5cblx0XHRcdGRvIHtcblx0XHRcdFx0bWF0Y2ggPSBjdXJfbWF0Y2g7XG5cblx0XHRcdFx0Ly8gU2tpcCB0byBuZXh0IG1hdGNoIGlmIHRoZSBtYXRjaCBsZW5ndGggY2Fubm90IGluY3JlYXNlXG5cdFx0XHRcdC8vIG9yIGlmIHRoZSBtYXRjaCBsZW5ndGggaXMgbGVzcyB0aGFuIDI6XG5cdFx0XHRcdGlmICh3aW5kb3dbbWF0Y2ggKyBiZXN0X2xlbl0gIT0gc2Nhbl9lbmQgfHwgd2luZG93W21hdGNoICsgYmVzdF9sZW4gLSAxXSAhPSBzY2FuX2VuZDEgfHwgd2luZG93W21hdGNoXSAhPSB3aW5kb3dbc2Nhbl1cblx0XHRcdFx0XHRcdHx8IHdpbmRvd1srK21hdGNoXSAhPSB3aW5kb3dbc2NhbiArIDFdKVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdC8vIFRoZSBjaGVjayBhdCBiZXN0X2xlbi0xIGNhbiBiZSByZW1vdmVkIGJlY2F1c2UgaXQgd2lsbCBiZSBtYWRlXG5cdFx0XHRcdC8vIGFnYWluIGxhdGVyLiAoVGhpcyBoZXVyaXN0aWMgaXMgbm90IGFsd2F5cyBhIHdpbi4pXG5cdFx0XHRcdC8vIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY29tcGFyZSBzY2FuWzJdIGFuZCBtYXRjaFsyXSBzaW5jZSB0aGV5XG5cdFx0XHRcdC8vIGFyZSBhbHdheXMgZXF1YWwgd2hlbiB0aGUgb3RoZXIgYnl0ZXMgbWF0Y2gsIGdpdmVuIHRoYXRcblx0XHRcdFx0Ly8gdGhlIGhhc2gga2V5cyBhcmUgZXF1YWwgYW5kIHRoYXQgSEFTSF9CSVRTID49IDguXG5cdFx0XHRcdHNjYW4gKz0gMjtcblx0XHRcdFx0bWF0Y2grKztcblxuXHRcdFx0XHQvLyBXZSBjaGVjayBmb3IgaW5zdWZmaWNpZW50IGxvb2thaGVhZCBvbmx5IGV2ZXJ5IDh0aCBjb21wYXJpc29uO1xuXHRcdFx0XHQvLyB0aGUgMjU2dGggY2hlY2sgd2lsbCBiZSBtYWRlIGF0IHN0cnN0YXJ0KzI1OC5cblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHR9IHdoaWxlICh3aW5kb3dbKytzY2FuXSA9PSB3aW5kb3dbKyttYXRjaF0gJiYgd2luZG93Wysrc2Nhbl0gPT0gd2luZG93WysrbWF0Y2hdICYmIHdpbmRvd1srK3NjYW5dID09IHdpbmRvd1srK21hdGNoXVxuXHRcdFx0XHRcdFx0JiYgd2luZG93Wysrc2Nhbl0gPT0gd2luZG93WysrbWF0Y2hdICYmIHdpbmRvd1srK3NjYW5dID09IHdpbmRvd1srK21hdGNoXSAmJiB3aW5kb3dbKytzY2FuXSA9PSB3aW5kb3dbKyttYXRjaF1cblx0XHRcdFx0XHRcdCYmIHdpbmRvd1srK3NjYW5dID09IHdpbmRvd1srK21hdGNoXSAmJiB3aW5kb3dbKytzY2FuXSA9PSB3aW5kb3dbKyttYXRjaF0gJiYgc2NhbiA8IHN0cmVuZCk7XG5cblx0XHRcdFx0bGVuID0gTUFYX01BVENIIC0gKHN0cmVuZCAtIHNjYW4pO1xuXHRcdFx0XHRzY2FuID0gc3RyZW5kIC0gTUFYX01BVENIO1xuXG5cdFx0XHRcdGlmIChsZW4gPiBiZXN0X2xlbikge1xuXHRcdFx0XHRcdG1hdGNoX3N0YXJ0ID0gY3VyX21hdGNoO1xuXHRcdFx0XHRcdGJlc3RfbGVuID0gbGVuO1xuXHRcdFx0XHRcdGlmIChsZW4gPj0gX25pY2VfbWF0Y2gpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRzY2FuX2VuZDEgPSB3aW5kb3dbc2NhbiArIGJlc3RfbGVuIC0gMV07XG5cdFx0XHRcdFx0c2Nhbl9lbmQgPSB3aW5kb3dbc2NhbiArIGJlc3RfbGVuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IHdoaWxlICgoY3VyX21hdGNoID0gKHByZXZbY3VyX21hdGNoICYgd21hc2tdICYgMHhmZmZmKSkgPiBsaW1pdCAmJiAtLWNoYWluX2xlbmd0aCAhPT0gMCk7XG5cblx0XHRcdGlmIChiZXN0X2xlbiA8PSBsb29rYWhlYWQpXG5cdFx0XHRcdHJldHVybiBiZXN0X2xlbjtcblx0XHRcdHJldHVybiBsb29rYWhlYWQ7XG5cdFx0fVxuXG5cdFx0Ly8gQ29tcHJlc3MgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sIHJldHVybiB0aGUgY3VycmVudFxuXHRcdC8vIGJsb2NrIHN0YXRlLlxuXHRcdC8vIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgcGVyZm9ybSBsYXp5IGV2YWx1YXRpb24gb2YgbWF0Y2hlcyBhbmQgaW5zZXJ0c1xuXHRcdC8vIG5ldyBzdHJpbmdzIGluIHRoZSBkaWN0aW9uYXJ5IG9ubHkgZm9yIHVubWF0Y2hlZCBzdHJpbmdzIG9yIGZvciBzaG9ydFxuXHRcdC8vIG1hdGNoZXMuIEl0IGlzIHVzZWQgb25seSBmb3IgdGhlIGZhc3QgY29tcHJlc3Npb24gb3B0aW9ucy5cblx0XHRmdW5jdGlvbiBkZWZsYXRlX2Zhc3QoZmx1c2gpIHtcblx0XHRcdC8vIHNob3J0IGhhc2hfaGVhZCA9IDA7IC8vIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW5cblx0XHRcdHZhciBoYXNoX2hlYWQgPSAwOyAvLyBoZWFkIG9mIHRoZSBoYXNoIGNoYWluXG5cdFx0XHR2YXIgYmZsdXNoOyAvLyBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWRcblxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG5cdFx0XHRcdC8vIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG5cdFx0XHRcdC8vIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuXHRcdFx0XHQvLyBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuXHRcdFx0XHRpZiAobG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCkge1xuXHRcdFx0XHRcdGZpbGxfd2luZG93KCk7XG5cdFx0XHRcdFx0aWYgKGxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgZmx1c2ggPT0gWl9OT19GTFVTSCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIE5lZWRNb3JlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobG9va2FoZWFkID09PSAwKVxuXHRcdFx0XHRcdFx0YnJlYWs7IC8vIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG5cdFx0XHRcdC8vIGRpY3Rpb25hcnksIGFuZCBzZXQgaGFzaF9oZWFkIHRvIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluOlxuXHRcdFx0XHRpZiAobG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuXHRcdFx0XHRcdGluc19oID0gKCgoaW5zX2gpIDw8IGhhc2hfc2hpZnQpIF4gKHdpbmRvd1soc3Ryc3RhcnQpICsgKE1JTl9NQVRDSCAtIDEpXSAmIDB4ZmYpKSAmIGhhc2hfbWFzaztcblxuXHRcdFx0XHRcdC8vIHByZXZbc3Ryc3RhcnQmd19tYXNrXT1oYXNoX2hlYWQ9aGVhZFtpbnNfaF07XG5cdFx0XHRcdFx0aGFzaF9oZWFkID0gKGhlYWRbaW5zX2hdICYgMHhmZmZmKTtcblx0XHRcdFx0XHRwcmV2W3N0cnN0YXJ0ICYgd19tYXNrXSA9IGhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdGhlYWRbaW5zX2hdID0gc3Ryc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGaW5kIHRoZSBsb25nZXN0IG1hdGNoLCBkaXNjYXJkaW5nIHRob3NlIDw9IHByZXZfbGVuZ3RoLlxuXHRcdFx0XHQvLyBBdCB0aGlzIHBvaW50IHdlIGhhdmUgYWx3YXlzIG1hdGNoX2xlbmd0aCA8IE1JTl9NQVRDSFxuXG5cdFx0XHRcdGlmIChoYXNoX2hlYWQgIT09IDAgJiYgKChzdHJzdGFydCAtIGhhc2hfaGVhZCkgJiAweGZmZmYpIDw9IHdfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIHtcblx0XHRcdFx0XHQvLyBUbyBzaW1wbGlmeSB0aGUgY29kZSwgd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZ1xuXHRcdFx0XHRcdC8vIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuXHRcdFx0XHRcdC8vIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cblx0XHRcdFx0XHRpZiAoc3RyYXRlZ3kgIT0gWl9IVUZGTUFOX09OTFkpIHtcblx0XHRcdFx0XHRcdG1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2goaGFzaF9oZWFkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gbG9uZ2VzdF9tYXRjaCgpIHNldHMgbWF0Y2hfc3RhcnRcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF0Y2hfbGVuZ3RoID49IE1JTl9NQVRDSCkge1xuXHRcdFx0XHRcdC8vIGNoZWNrX21hdGNoKHN0cnN0YXJ0LCBtYXRjaF9zdGFydCwgbWF0Y2hfbGVuZ3RoKTtcblxuXHRcdFx0XHRcdGJmbHVzaCA9IF90cl90YWxseShzdHJzdGFydCAtIG1hdGNoX3N0YXJ0LCBtYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuXG5cdFx0XHRcdFx0bG9va2FoZWFkIC09IG1hdGNoX2xlbmd0aDtcblxuXHRcdFx0XHRcdC8vIEluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgaGFzaCB0YWJsZSBvbmx5IGlmIHRoZSBtYXRjaCBsZW5ndGhcblx0XHRcdFx0XHQvLyBpcyBub3QgdG9vIGxhcmdlLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuXHRcdFx0XHRcdGlmIChtYXRjaF9sZW5ndGggPD0gbWF4X2xhenlfbWF0Y2ggJiYgbG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuXHRcdFx0XHRcdFx0bWF0Y2hfbGVuZ3RoLS07IC8vIHN0cmluZyBhdCBzdHJzdGFydCBhbHJlYWR5IGluIGhhc2ggdGFibGVcblx0XHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdFx0c3Ryc3RhcnQrKztcblxuXHRcdFx0XHRcdFx0XHRpbnNfaCA9ICgoaW5zX2ggPDwgaGFzaF9zaGlmdCkgXiAod2luZG93WyhzdHJzdGFydCkgKyAoTUlOX01BVENIIC0gMSldICYgMHhmZikpICYgaGFzaF9tYXNrO1xuXHRcdFx0XHRcdFx0XHQvLyBwcmV2W3N0cnN0YXJ0JndfbWFza109aGFzaF9oZWFkPWhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdFx0XHRoYXNoX2hlYWQgPSAoaGVhZFtpbnNfaF0gJiAweGZmZmYpO1xuXHRcdFx0XHRcdFx0XHRwcmV2W3N0cnN0YXJ0ICYgd19tYXNrXSA9IGhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdFx0XHRoZWFkW2luc19oXSA9IHN0cnN0YXJ0O1xuXG5cdFx0XHRcdFx0XHRcdC8vIHN0cnN0YXJ0IG5ldmVyIGV4Y2VlZHMgV1NJWkUtTUFYX01BVENILCBzbyB0aGVyZSBhcmVcblx0XHRcdFx0XHRcdFx0Ly8gYWx3YXlzIE1JTl9NQVRDSCBieXRlcyBhaGVhZC5cblx0XHRcdFx0XHRcdH0gd2hpbGUgKC0tbWF0Y2hfbGVuZ3RoICE9PSAwKTtcblx0XHRcdFx0XHRcdHN0cnN0YXJ0Kys7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0cnN0YXJ0ICs9IG1hdGNoX2xlbmd0aDtcblx0XHRcdFx0XHRcdG1hdGNoX2xlbmd0aCA9IDA7XG5cdFx0XHRcdFx0XHRpbnNfaCA9IHdpbmRvd1tzdHJzdGFydF0gJiAweGZmO1xuXG5cdFx0XHRcdFx0XHRpbnNfaCA9ICgoKGluc19oKSA8PCBoYXNoX3NoaWZ0KSBeICh3aW5kb3dbc3Ryc3RhcnQgKyAxXSAmIDB4ZmYpKSAmIGhhc2hfbWFzaztcblx0XHRcdFx0XHRcdC8vIElmIGxvb2thaGVhZCA8IE1JTl9NQVRDSCwgaW5zX2ggaXMgZ2FyYmFnZSwgYnV0IGl0IGRvZXNcblx0XHRcdFx0XHRcdC8vIG5vdFxuXHRcdFx0XHRcdFx0Ly8gbWF0dGVyIHNpbmNlIGl0IHdpbGwgYmUgcmVjb21wdXRlZCBhdCBuZXh0IGRlZmxhdGUgY2FsbC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZVxuXG5cdFx0XHRcdFx0YmZsdXNoID0gX3RyX3RhbGx5KDAsIHdpbmRvd1tzdHJzdGFydF0gJiAweGZmKTtcblx0XHRcdFx0XHRsb29rYWhlYWQtLTtcblx0XHRcdFx0XHRzdHJzdGFydCsrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChiZmx1c2gpIHtcblxuXHRcdFx0XHRcdGZsdXNoX2Jsb2NrX29ubHkoZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmbHVzaF9ibG9ja19vbmx5KGZsdXNoID09IFpfRklOSVNIKTtcblx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuXHRcdFx0XHRpZiAoZmx1c2ggPT0gWl9GSU5JU0gpXG5cdFx0XHRcdFx0cmV0dXJuIEZpbmlzaFN0YXJ0ZWQ7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmx1c2ggPT0gWl9GSU5JU0ggPyBGaW5pc2hEb25lIDogQmxvY2tEb25lO1xuXHRcdH1cblxuXHRcdC8vIFNhbWUgYXMgYWJvdmUsIGJ1dCBhY2hpZXZlcyBiZXR0ZXIgY29tcHJlc3Npb24uIFdlIHVzZSBhIGxhenlcblx0XHQvLyBldmFsdWF0aW9uIGZvciBtYXRjaGVzOiBhIG1hdGNoIGlzIGZpbmFsbHkgYWRvcHRlZCBvbmx5IGlmIHRoZXJlIGlzXG5cdFx0Ly8gbm8gYmV0dGVyIG1hdGNoIGF0IHRoZSBuZXh0IHdpbmRvdyBwb3NpdGlvbi5cblx0XHRmdW5jdGlvbiBkZWZsYXRlX3Nsb3coZmx1c2gpIHtcblx0XHRcdC8vIHNob3J0IGhhc2hfaGVhZCA9IDA7IC8vIGhlYWQgb2YgaGFzaCBjaGFpblxuXHRcdFx0dmFyIGhhc2hfaGVhZCA9IDA7IC8vIGhlYWQgb2YgaGFzaCBjaGFpblxuXHRcdFx0dmFyIGJmbHVzaDsgLy8gc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkXG5cdFx0XHR2YXIgbWF4X2luc2VydDtcblxuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgaW5wdXQgYmxvY2suXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcblx0XHRcdFx0Ly8gYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcblx0XHRcdFx0Ly8gZm9yIHRoZSBuZXh0IG1hdGNoLCBwbHVzIE1JTl9NQVRDSCBieXRlcyB0byBpbnNlcnQgdGhlXG5cdFx0XHRcdC8vIHN0cmluZyBmb2xsb3dpbmcgdGhlIG5leHQgbWF0Y2guXG5cblx0XHRcdFx0aWYgKGxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcblx0XHRcdFx0XHRmaWxsX3dpbmRvdygpO1xuXHRcdFx0XHRcdGlmIChsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09IFpfTk9fRkxVU0gpIHtcblx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGxvb2thaGVhZCA9PT0gMClcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyBmbHVzaCB0aGUgY3VycmVudCBibG9ja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuXHRcdFx0XHQvLyBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcblxuXHRcdFx0XHRpZiAobG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuXHRcdFx0XHRcdGluc19oID0gKCgoaW5zX2gpIDw8IGhhc2hfc2hpZnQpIF4gKHdpbmRvd1soc3Ryc3RhcnQpICsgKE1JTl9NQVRDSCAtIDEpXSAmIDB4ZmYpKSAmIGhhc2hfbWFzaztcblx0XHRcdFx0XHQvLyBwcmV2W3N0cnN0YXJ0JndfbWFza109aGFzaF9oZWFkPWhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdGhhc2hfaGVhZCA9IChoZWFkW2luc19oXSAmIDB4ZmZmZik7XG5cdFx0XHRcdFx0cHJldltzdHJzdGFydCAmIHdfbWFza10gPSBoZWFkW2luc19oXTtcblx0XHRcdFx0XHRoZWFkW2luc19oXSA9IHN0cnN0YXJ0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cblx0XHRcdFx0cHJldl9sZW5ndGggPSBtYXRjaF9sZW5ndGg7XG5cdFx0XHRcdHByZXZfbWF0Y2ggPSBtYXRjaF9zdGFydDtcblx0XHRcdFx0bWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcblxuXHRcdFx0XHRpZiAoaGFzaF9oZWFkICE9PSAwICYmIHByZXZfbGVuZ3RoIDwgbWF4X2xhenlfbWF0Y2ggJiYgKChzdHJzdGFydCAtIGhhc2hfaGVhZCkgJiAweGZmZmYpIDw9IHdfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIHtcblx0XHRcdFx0XHQvLyBUbyBzaW1wbGlmeSB0aGUgY29kZSwgd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZ1xuXHRcdFx0XHRcdC8vIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuXHRcdFx0XHRcdC8vIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cblxuXHRcdFx0XHRcdGlmIChzdHJhdGVneSAhPSBaX0hVRkZNQU5fT05MWSkge1xuXHRcdFx0XHRcdFx0bWF0Y2hfbGVuZ3RoID0gbG9uZ2VzdF9tYXRjaChoYXNoX2hlYWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydFxuXG5cdFx0XHRcdFx0aWYgKG1hdGNoX2xlbmd0aCA8PSA1ICYmIChzdHJhdGVneSA9PSBaX0ZJTFRFUkVEIHx8IChtYXRjaF9sZW5ndGggPT0gTUlOX01BVENIICYmIHN0cnN0YXJ0IC0gbWF0Y2hfc3RhcnQgPiA0MDk2KSkpIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgcHJldl9tYXRjaCBpcyBhbHNvIE1JTl9NQVRDSCwgbWF0Y2hfc3RhcnQgaXMgZ2FyYmFnZVxuXHRcdFx0XHRcdFx0Ly8gYnV0IHdlIHdpbGwgaWdub3JlIHRoZSBjdXJyZW50IG1hdGNoIGFueXdheS5cblx0XHRcdFx0XHRcdG1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYXQgdGhlIHByZXZpb3VzIHN0ZXAgYW5kIHRoZSBjdXJyZW50XG5cdFx0XHRcdC8vIG1hdGNoIGlzIG5vdCBiZXR0ZXIsIG91dHB1dCB0aGUgcHJldmlvdXMgbWF0Y2g6XG5cdFx0XHRcdGlmIChwcmV2X2xlbmd0aCA+PSBNSU5fTUFUQ0ggJiYgbWF0Y2hfbGVuZ3RoIDw9IHByZXZfbGVuZ3RoKSB7XG5cdFx0XHRcdFx0bWF4X2luc2VydCA9IHN0cnN0YXJ0ICsgbG9va2FoZWFkIC0gTUlOX01BVENIO1xuXHRcdFx0XHRcdC8vIERvIG5vdCBpbnNlcnQgc3RyaW5ncyBpbiBoYXNoIHRhYmxlIGJleW9uZCB0aGlzLlxuXG5cdFx0XHRcdFx0Ly8gY2hlY2tfbWF0Y2goc3Ryc3RhcnQtMSwgcHJldl9tYXRjaCwgcHJldl9sZW5ndGgpO1xuXG5cdFx0XHRcdFx0YmZsdXNoID0gX3RyX3RhbGx5KHN0cnN0YXJ0IC0gMSAtIHByZXZfbWF0Y2gsIHByZXZfbGVuZ3RoIC0gTUlOX01BVENIKTtcblxuXHRcdFx0XHRcdC8vIEluc2VydCBpbiBoYXNoIHRhYmxlIGFsbCBzdHJpbmdzIHVwIHRvIHRoZSBlbmQgb2YgdGhlIG1hdGNoLlxuXHRcdFx0XHRcdC8vIHN0cnN0YXJ0LTEgYW5kIHN0cnN0YXJ0IGFyZSBhbHJlYWR5IGluc2VydGVkLiBJZiB0aGVyZSBpcyBub3Rcblx0XHRcdFx0XHQvLyBlbm91Z2ggbG9va2FoZWFkLCB0aGUgbGFzdCB0d28gc3RyaW5ncyBhcmUgbm90IGluc2VydGVkIGluXG5cdFx0XHRcdFx0Ly8gdGhlIGhhc2ggdGFibGUuXG5cdFx0XHRcdFx0bG9va2FoZWFkIC09IHByZXZfbGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRwcmV2X2xlbmd0aCAtPSAyO1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdGlmICgrK3N0cnN0YXJ0IDw9IG1heF9pbnNlcnQpIHtcblx0XHRcdFx0XHRcdFx0aW5zX2ggPSAoKChpbnNfaCkgPDwgaGFzaF9zaGlmdCkgXiAod2luZG93WyhzdHJzdGFydCkgKyAoTUlOX01BVENIIC0gMSldICYgMHhmZikpICYgaGFzaF9tYXNrO1xuXHRcdFx0XHRcdFx0XHQvLyBwcmV2W3N0cnN0YXJ0JndfbWFza109aGFzaF9oZWFkPWhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdFx0XHRoYXNoX2hlYWQgPSAoaGVhZFtpbnNfaF0gJiAweGZmZmYpO1xuXHRcdFx0XHRcdFx0XHRwcmV2W3N0cnN0YXJ0ICYgd19tYXNrXSA9IGhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdFx0XHRoZWFkW2luc19oXSA9IHN0cnN0YXJ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gd2hpbGUgKC0tcHJldl9sZW5ndGggIT09IDApO1xuXHRcdFx0XHRcdG1hdGNoX2F2YWlsYWJsZSA9IDA7XG5cdFx0XHRcdFx0bWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcblx0XHRcdFx0XHRzdHJzdGFydCsrO1xuXG5cdFx0XHRcdFx0aWYgKGJmbHVzaCkge1xuXHRcdFx0XHRcdFx0Zmx1c2hfYmxvY2tfb25seShmYWxzZSk7XG5cdFx0XHRcdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApXG5cdFx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAobWF0Y2hfYXZhaWxhYmxlICE9PSAwKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSB3YXMgbm8gbWF0Y2ggYXQgdGhlIHByZXZpb3VzIHBvc2l0aW9uLCBvdXRwdXQgYVxuXHRcdFx0XHRcdC8vIHNpbmdsZSBsaXRlcmFsLiBJZiB0aGVyZSB3YXMgYSBtYXRjaCBidXQgdGhlIGN1cnJlbnQgbWF0Y2hcblx0XHRcdFx0XHQvLyBpcyBsb25nZXIsIHRydW5jYXRlIHRoZSBwcmV2aW91cyBtYXRjaCB0byBhIHNpbmdsZSBsaXRlcmFsLlxuXG5cdFx0XHRcdFx0YmZsdXNoID0gX3RyX3RhbGx5KDAsIHdpbmRvd1tzdHJzdGFydCAtIDFdICYgMHhmZik7XG5cblx0XHRcdFx0XHRpZiAoYmZsdXNoKSB7XG5cdFx0XHRcdFx0XHRmbHVzaF9ibG9ja19vbmx5KGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3Ryc3RhcnQrKztcblx0XHRcdFx0XHRsb29rYWhlYWQtLTtcblx0XHRcdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gVGhlcmUgaXMgbm8gcHJldmlvdXMgbWF0Y2ggdG8gY29tcGFyZSB3aXRoLCB3YWl0IGZvclxuXHRcdFx0XHRcdC8vIHRoZSBuZXh0IHN0ZXAgdG8gZGVjaWRlLlxuXG5cdFx0XHRcdFx0bWF0Y2hfYXZhaWxhYmxlID0gMTtcblx0XHRcdFx0XHRzdHJzdGFydCsrO1xuXHRcdFx0XHRcdGxvb2thaGVhZC0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXRjaF9hdmFpbGFibGUgIT09IDApIHtcblx0XHRcdFx0YmZsdXNoID0gX3RyX3RhbGx5KDAsIHdpbmRvd1tzdHJzdGFydCAtIDFdICYgMHhmZik7XG5cdFx0XHRcdG1hdGNoX2F2YWlsYWJsZSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRmbHVzaF9ibG9ja19vbmx5KGZsdXNoID09IFpfRklOSVNIKTtcblxuXHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG5cdFx0XHRcdGlmIChmbHVzaCA9PSBaX0ZJTklTSClcblx0XHRcdFx0XHRyZXR1cm4gRmluaXNoU3RhcnRlZDtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZsdXNoID09IFpfRklOSVNIID8gRmluaXNoRG9uZSA6IEJsb2NrRG9uZTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBkZWZsYXRlUmVzZXQoc3RybSkge1xuXHRcdFx0c3RybS50b3RhbF9pbiA9IHN0cm0udG90YWxfb3V0ID0gMDtcblx0XHRcdHN0cm0ubXNnID0gbnVsbDsgLy9cblx0XHRcdFxuXHRcdFx0dGhhdC5wZW5kaW5nID0gMDtcblx0XHRcdHRoYXQucGVuZGluZ19vdXQgPSAwO1xuXG5cdFx0XHRzdGF0dXMgPSBCVVNZX1NUQVRFO1xuXG5cdFx0XHRsYXN0X2ZsdXNoID0gWl9OT19GTFVTSDtcblxuXHRcdFx0dHJfaW5pdCgpO1xuXHRcdFx0bG1faW5pdCgpO1xuXHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0fVxuXG5cdFx0dGhhdC5kZWZsYXRlSW5pdCA9IGZ1bmN0aW9uKHN0cm0sIF9sZXZlbCwgYml0cywgX21ldGhvZCwgbWVtTGV2ZWwsIF9zdHJhdGVneSkge1xuXHRcdFx0aWYgKCFfbWV0aG9kKVxuXHRcdFx0XHRfbWV0aG9kID0gWl9ERUZMQVRFRDtcblx0XHRcdGlmICghbWVtTGV2ZWwpXG5cdFx0XHRcdG1lbUxldmVsID0gREVGX01FTV9MRVZFTDtcblx0XHRcdGlmICghX3N0cmF0ZWd5KVxuXHRcdFx0XHRfc3RyYXRlZ3kgPSBaX0RFRkFVTFRfU1RSQVRFR1k7XG5cblx0XHRcdC8vIGJ5dGVbXSBteV92ZXJzaW9uPVpMSUJfVkVSU0lPTjtcblxuXHRcdFx0Ly9cblx0XHRcdC8vIGlmICghdmVyc2lvbiB8fCB2ZXJzaW9uWzBdICE9IG15X3ZlcnNpb25bMF1cblx0XHRcdC8vIHx8IHN0cmVhbV9zaXplICE9IHNpemVvZih6X3N0cmVhbSkpIHtcblx0XHRcdC8vIHJldHVybiBaX1ZFUlNJT05fRVJST1I7XG5cdFx0XHQvLyB9XG5cblx0XHRcdHN0cm0ubXNnID0gbnVsbDtcblxuXHRcdFx0aWYgKF9sZXZlbCA9PSBaX0RFRkFVTFRfQ09NUFJFU1NJT04pXG5cdFx0XHRcdF9sZXZlbCA9IDY7XG5cblx0XHRcdGlmIChtZW1MZXZlbCA8IDEgfHwgbWVtTGV2ZWwgPiBNQVhfTUVNX0xFVkVMIHx8IF9tZXRob2QgIT0gWl9ERUZMQVRFRCB8fCBiaXRzIDwgOSB8fCBiaXRzID4gMTUgfHwgX2xldmVsIDwgMCB8fCBfbGV2ZWwgPiA5IHx8IF9zdHJhdGVneSA8IDBcblx0XHRcdFx0XHR8fCBfc3RyYXRlZ3kgPiBaX0hVRkZNQU5fT05MWSkge1xuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHR9XG5cblx0XHRcdHN0cm0uZHN0YXRlID0gdGhhdDtcblxuXHRcdFx0d19iaXRzID0gYml0cztcblx0XHRcdHdfc2l6ZSA9IDEgPDwgd19iaXRzO1xuXHRcdFx0d19tYXNrID0gd19zaXplIC0gMTtcblxuXHRcdFx0aGFzaF9iaXRzID0gbWVtTGV2ZWwgKyA3O1xuXHRcdFx0aGFzaF9zaXplID0gMSA8PCBoYXNoX2JpdHM7XG5cdFx0XHRoYXNoX21hc2sgPSBoYXNoX3NpemUgLSAxO1xuXHRcdFx0aGFzaF9zaGlmdCA9IE1hdGguZmxvb3IoKGhhc2hfYml0cyArIE1JTl9NQVRDSCAtIDEpIC8gTUlOX01BVENIKTtcblxuXHRcdFx0d2luZG93ID0gbmV3IFVpbnQ4QXJyYXkod19zaXplICogMik7XG5cdFx0XHRwcmV2ID0gW107XG5cdFx0XHRoZWFkID0gW107XG5cblx0XHRcdGxpdF9idWZzaXplID0gMSA8PCAobWVtTGV2ZWwgKyA2KTsgLy8gMTZLIGVsZW1lbnRzIGJ5IGRlZmF1bHRcblxuXHRcdFx0Ly8gV2Ugb3ZlcmxheSBwZW5kaW5nX2J1ZiBhbmQgZF9idWYrbF9idWYuIFRoaXMgd29ya3Mgc2luY2UgdGhlIGF2ZXJhZ2Vcblx0XHRcdC8vIG91dHB1dCBzaXplIGZvciAobGVuZ3RoLGRpc3RhbmNlKSBjb2RlcyBpcyA8PSAyNCBiaXRzLlxuXHRcdFx0dGhhdC5wZW5kaW5nX2J1ZiA9IG5ldyBVaW50OEFycmF5KGxpdF9idWZzaXplICogNCk7XG5cdFx0XHRwZW5kaW5nX2J1Zl9zaXplID0gbGl0X2J1ZnNpemUgKiA0O1xuXG5cdFx0XHRkX2J1ZiA9IE1hdGguZmxvb3IobGl0X2J1ZnNpemUgLyAyKTtcblx0XHRcdGxfYnVmID0gKDEgKyAyKSAqIGxpdF9idWZzaXplO1xuXG5cdFx0XHRsZXZlbCA9IF9sZXZlbDtcblxuXHRcdFx0c3RyYXRlZ3kgPSBfc3RyYXRlZ3k7XG5cdFx0XHRtZXRob2QgPSBfbWV0aG9kICYgMHhmZjtcblxuXHRcdFx0cmV0dXJuIGRlZmxhdGVSZXNldChzdHJtKTtcblx0XHR9O1xuXG5cdFx0dGhhdC5kZWZsYXRlRW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoc3RhdHVzICE9IElOSVRfU1RBVEUgJiYgc3RhdHVzICE9IEJVU1lfU1RBVEUgJiYgc3RhdHVzICE9IEZJTklTSF9TVEFURSkge1xuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWFsbG9jYXRlIGluIHJldmVyc2Ugb3JkZXIgb2YgYWxsb2NhdGlvbnM6XG5cdFx0XHR0aGF0LnBlbmRpbmdfYnVmID0gbnVsbDtcblx0XHRcdGhlYWQgPSBudWxsO1xuXHRcdFx0cHJldiA9IG51bGw7XG5cdFx0XHR3aW5kb3cgPSBudWxsO1xuXHRcdFx0Ly8gZnJlZVxuXHRcdFx0dGhhdC5kc3RhdGUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHN0YXR1cyA9PSBCVVNZX1NUQVRFID8gWl9EQVRBX0VSUk9SIDogWl9PSztcblx0XHR9O1xuXG5cdFx0dGhhdC5kZWZsYXRlUGFyYW1zID0gZnVuY3Rpb24oc3RybSwgX2xldmVsLCBfc3RyYXRlZ3kpIHtcblx0XHRcdHZhciBlcnIgPSBaX09LO1xuXG5cdFx0XHRpZiAoX2xldmVsID09IFpfREVGQVVMVF9DT01QUkVTU0lPTikge1xuXHRcdFx0XHRfbGV2ZWwgPSA2O1xuXHRcdFx0fVxuXHRcdFx0aWYgKF9sZXZlbCA8IDAgfHwgX2xldmVsID4gOSB8fCBfc3RyYXRlZ3kgPCAwIHx8IF9zdHJhdGVneSA+IFpfSFVGRk1BTl9PTkxZKSB7XG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZ190YWJsZVtsZXZlbF0uZnVuYyAhPSBjb25maWdfdGFibGVbX2xldmVsXS5mdW5jICYmIHN0cm0udG90YWxfaW4gIT09IDApIHtcblx0XHRcdFx0Ly8gRmx1c2ggdGhlIGxhc3QgYnVmZmVyOlxuXHRcdFx0XHRlcnIgPSBzdHJtLmRlZmxhdGUoWl9QQVJUSUFMX0ZMVVNIKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGxldmVsICE9IF9sZXZlbCkge1xuXHRcdFx0XHRsZXZlbCA9IF9sZXZlbDtcblx0XHRcdFx0bWF4X2xhenlfbWF0Y2ggPSBjb25maWdfdGFibGVbbGV2ZWxdLm1heF9sYXp5O1xuXHRcdFx0XHRnb29kX21hdGNoID0gY29uZmlnX3RhYmxlW2xldmVsXS5nb29kX2xlbmd0aDtcblx0XHRcdFx0bmljZV9tYXRjaCA9IGNvbmZpZ190YWJsZVtsZXZlbF0ubmljZV9sZW5ndGg7XG5cdFx0XHRcdG1heF9jaGFpbl9sZW5ndGggPSBjb25maWdfdGFibGVbbGV2ZWxdLm1heF9jaGFpbjtcblx0XHRcdH1cblx0XHRcdHN0cmF0ZWd5ID0gX3N0cmF0ZWd5O1xuXHRcdFx0cmV0dXJuIGVycjtcblx0XHR9O1xuXG5cdFx0dGhhdC5kZWZsYXRlU2V0RGljdGlvbmFyeSA9IGZ1bmN0aW9uKHN0cm0sIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpIHtcblx0XHRcdHZhciBsZW5ndGggPSBkaWN0TGVuZ3RoO1xuXHRcdFx0dmFyIG4sIGluZGV4ID0gMDtcblxuXHRcdFx0aWYgKCFkaWN0aW9uYXJ5IHx8IHN0YXR1cyAhPSBJTklUX1NUQVRFKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cblx0XHRcdGlmIChsZW5ndGggPCBNSU5fTUFUQ0gpXG5cdFx0XHRcdHJldHVybiBaX09LO1xuXHRcdFx0aWYgKGxlbmd0aCA+IHdfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIHtcblx0XHRcdFx0bGVuZ3RoID0gd19zaXplIC0gTUlOX0xPT0tBSEVBRDtcblx0XHRcdFx0aW5kZXggPSBkaWN0TGVuZ3RoIC0gbGVuZ3RoOyAvLyB1c2UgdGhlIHRhaWwgb2YgdGhlIGRpY3Rpb25hcnlcblx0XHRcdH1cblx0XHRcdHdpbmRvdy5zZXQoZGljdGlvbmFyeS5zdWJhcnJheShpbmRleCwgaW5kZXggKyBsZW5ndGgpLCAwKTtcblxuXHRcdFx0c3Ryc3RhcnQgPSBsZW5ndGg7XG5cdFx0XHRibG9ja19zdGFydCA9IGxlbmd0aDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGFsbCBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIChleGNlcHQgZm9yIHRoZSBsYXN0IHR3byBieXRlcykuXG5cdFx0XHQvLyBzLT5sb29rYWhlYWQgc3RheXMgbnVsbCwgc28gcy0+aW5zX2ggd2lsbCBiZSByZWNvbXB1dGVkIGF0IHRoZSBuZXh0XG5cdFx0XHQvLyBjYWxsIG9mIGZpbGxfd2luZG93LlxuXG5cdFx0XHRpbnNfaCA9IHdpbmRvd1swXSAmIDB4ZmY7XG5cdFx0XHRpbnNfaCA9ICgoKGluc19oKSA8PCBoYXNoX3NoaWZ0KSBeICh3aW5kb3dbMV0gJiAweGZmKSkgJiBoYXNoX21hc2s7XG5cblx0XHRcdGZvciAobiA9IDA7IG4gPD0gbGVuZ3RoIC0gTUlOX01BVENIOyBuKyspIHtcblx0XHRcdFx0aW5zX2ggPSAoKChpbnNfaCkgPDwgaGFzaF9zaGlmdCkgXiAod2luZG93WyhuKSArIChNSU5fTUFUQ0ggLSAxKV0gJiAweGZmKSkgJiBoYXNoX21hc2s7XG5cdFx0XHRcdHByZXZbbiAmIHdfbWFza10gPSBoZWFkW2luc19oXTtcblx0XHRcdFx0aGVhZFtpbnNfaF0gPSBuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0fTtcblxuXHRcdHRoYXQuZGVmbGF0ZSA9IGZ1bmN0aW9uKF9zdHJtLCBmbHVzaCkge1xuXHRcdFx0dmFyIGksIGhlYWRlciwgbGV2ZWxfZmxhZ3MsIG9sZF9mbHVzaCwgYnN0YXRlO1xuXG5cdFx0XHRpZiAoZmx1c2ggPiBaX0ZJTklTSCB8fCBmbHVzaCA8IDApIHtcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIV9zdHJtLm5leHRfb3V0IHx8ICghX3N0cm0ubmV4dF9pbiAmJiBfc3RybS5hdmFpbF9pbiAhPT0gMCkgfHwgKHN0YXR1cyA9PSBGSU5JU0hfU1RBVEUgJiYgZmx1c2ggIT0gWl9GSU5JU0gpKSB7XG5cdFx0XHRcdF9zdHJtLm1zZyA9IHpfZXJybXNnW1pfTkVFRF9ESUNUIC0gKFpfU1RSRUFNX0VSUk9SKV07XG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdH1cblx0XHRcdGlmIChfc3RybS5hdmFpbF9vdXQgPT09IDApIHtcblx0XHRcdFx0X3N0cm0ubXNnID0gel9lcnJtc2dbWl9ORUVEX0RJQ1QgLSAoWl9CVUZfRVJST1IpXTtcblx0XHRcdFx0cmV0dXJuIFpfQlVGX0VSUk9SO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHJtID0gX3N0cm07IC8vIGp1c3QgaW4gY2FzZVxuXHRcdFx0b2xkX2ZsdXNoID0gbGFzdF9mbHVzaDtcblx0XHRcdGxhc3RfZmx1c2ggPSBmbHVzaDtcblxuXHRcdFx0Ly8gV3JpdGUgdGhlIHpsaWIgaGVhZGVyXG5cdFx0XHRpZiAoc3RhdHVzID09IElOSVRfU1RBVEUpIHtcblx0XHRcdFx0aGVhZGVyID0gKFpfREVGTEFURUQgKyAoKHdfYml0cyAtIDgpIDw8IDQpKSA8PCA4O1xuXHRcdFx0XHRsZXZlbF9mbGFncyA9ICgobGV2ZWwgLSAxKSAmIDB4ZmYpID4+IDE7XG5cblx0XHRcdFx0aWYgKGxldmVsX2ZsYWdzID4gMylcblx0XHRcdFx0XHRsZXZlbF9mbGFncyA9IDM7XG5cdFx0XHRcdGhlYWRlciB8PSAobGV2ZWxfZmxhZ3MgPDwgNik7XG5cdFx0XHRcdGlmIChzdHJzdGFydCAhPT0gMClcblx0XHRcdFx0XHRoZWFkZXIgfD0gUFJFU0VUX0RJQ1Q7XG5cdFx0XHRcdGhlYWRlciArPSAzMSAtIChoZWFkZXIgJSAzMSk7XG5cblx0XHRcdFx0c3RhdHVzID0gQlVTWV9TVEFURTtcblx0XHRcdFx0cHV0U2hvcnRNU0IoaGVhZGVyKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmx1c2ggYXMgbXVjaCBwZW5kaW5nIG91dHB1dCBhcyBwb3NzaWJsZVxuXHRcdFx0aWYgKHRoYXQucGVuZGluZyAhPT0gMCkge1xuXHRcdFx0XHRzdHJtLmZsdXNoX3BlbmRpbmcoKTtcblx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCIgYXZhaWxfb3V0PT0wXCIpO1xuXHRcdFx0XHRcdC8vIFNpbmNlIGF2YWlsX291dCBpcyAwLCBkZWZsYXRlIHdpbGwgYmUgY2FsbGVkIGFnYWluIHdpdGhcblx0XHRcdFx0XHQvLyBtb3JlIG91dHB1dCBzcGFjZSwgYnV0IHBvc3NpYmx5IHdpdGggYm90aCBwZW5kaW5nIGFuZFxuXHRcdFx0XHRcdC8vIGF2YWlsX2luIGVxdWFsIHRvIHplcm8uIFRoZXJlIHdvbid0IGJlIGFueXRoaW5nIHRvIGRvLFxuXHRcdFx0XHRcdC8vIGJ1dCB0aGlzIGlzIG5vdCBhbiBlcnJvciBzaXR1YXRpb24gc28gbWFrZSBzdXJlIHdlXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIE9LIGluc3RlYWQgb2YgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCBvZiBkZWZsYXRlOlxuXHRcdFx0XHRcdGxhc3RfZmx1c2ggPSAtMTtcblx0XHRcdFx0XHRyZXR1cm4gWl9PSztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGVyZSBpcyBzb21ldGhpbmcgdG8gZG8gYW5kIGF2b2lkIGR1cGxpY2F0ZVxuXHRcdFx0XHQvLyBjb25zZWN1dGl2ZVxuXHRcdFx0XHQvLyBmbHVzaGVzLiBGb3IgcmVwZWF0ZWQgYW5kIHVzZWxlc3MgY2FsbHMgd2l0aCBaX0ZJTklTSCwgd2Uga2VlcFxuXHRcdFx0XHQvLyByZXR1cm5pbmcgWl9TVFJFQU1fRU5EIGluc3RlYWQgb2YgWl9CVUZGX0VSUk9SLlxuXHRcdFx0fSBlbHNlIGlmIChzdHJtLmF2YWlsX2luID09PSAwICYmIGZsdXNoIDw9IG9sZF9mbHVzaCAmJiBmbHVzaCAhPSBaX0ZJTklTSCkge1xuXHRcdFx0XHRzdHJtLm1zZyA9IHpfZXJybXNnW1pfTkVFRF9ESUNUIC0gKFpfQlVGX0VSUk9SKV07XG5cdFx0XHRcdHJldHVybiBaX0JVRl9FUlJPUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVXNlciBtdXN0IG5vdCBwcm92aWRlIG1vcmUgaW5wdXQgYWZ0ZXIgdGhlIGZpcnN0IEZJTklTSDpcblx0XHRcdGlmIChzdGF0dXMgPT0gRklOSVNIX1NUQVRFICYmIHN0cm0uYXZhaWxfaW4gIT09IDApIHtcblx0XHRcdFx0X3N0cm0ubXNnID0gel9lcnJtc2dbWl9ORUVEX0RJQ1QgLSAoWl9CVUZfRVJST1IpXTtcblx0XHRcdFx0cmV0dXJuIFpfQlVGX0VSUk9SO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCBhIG5ldyBibG9jayBvciBjb250aW51ZSB0aGUgY3VycmVudCBvbmUuXG5cdFx0XHRpZiAoc3RybS5hdmFpbF9pbiAhPT0gMCB8fCBsb29rYWhlYWQgIT09IDAgfHwgKGZsdXNoICE9IFpfTk9fRkxVU0ggJiYgc3RhdHVzICE9IEZJTklTSF9TVEFURSkpIHtcblx0XHRcdFx0YnN0YXRlID0gLTE7XG5cdFx0XHRcdHN3aXRjaCAoY29uZmlnX3RhYmxlW2xldmVsXS5mdW5jKSB7XG5cdFx0XHRcdGNhc2UgU1RPUkVEOlxuXHRcdFx0XHRcdGJzdGF0ZSA9IGRlZmxhdGVfc3RvcmVkKGZsdXNoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBGQVNUOlxuXHRcdFx0XHRcdGJzdGF0ZSA9IGRlZmxhdGVfZmFzdChmbHVzaCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU0xPVzpcblx0XHRcdFx0XHRic3RhdGUgPSBkZWZsYXRlX3Nsb3coZmx1c2gpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGJzdGF0ZSA9PSBGaW5pc2hTdGFydGVkIHx8IGJzdGF0ZSA9PSBGaW5pc2hEb25lKSB7XG5cdFx0XHRcdFx0c3RhdHVzID0gRklOSVNIX1NUQVRFO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChic3RhdGUgPT0gTmVlZE1vcmUgfHwgYnN0YXRlID09IEZpbmlzaFN0YXJ0ZWQpIHtcblx0XHRcdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcblx0XHRcdFx0XHRcdGxhc3RfZmx1c2ggPSAtMTsgLy8gYXZvaWQgQlVGX0VSUk9SIG5leHQgY2FsbCwgc2VlIGFib3ZlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBaX09LO1xuXHRcdFx0XHRcdC8vIElmIGZsdXNoICE9IFpfTk9fRkxVU0ggJiYgYXZhaWxfb3V0ID09PSAwLCB0aGUgbmV4dCBjYWxsXG5cdFx0XHRcdFx0Ly8gb2YgZGVmbGF0ZSBzaG91bGQgdXNlIHRoZSBzYW1lIGZsdXNoIHBhcmFtZXRlciB0byBtYWtlIHN1cmVcblx0XHRcdFx0XHQvLyB0aGF0IHRoZSBmbHVzaCBpcyBjb21wbGV0ZS4gU28gd2UgZG9uJ3QgaGF2ZSB0byBvdXRwdXQgYW5cblx0XHRcdFx0XHQvLyBlbXB0eSBibG9jayBoZXJlLCB0aGlzIHdpbGwgYmUgZG9uZSBhdCBuZXh0IGNhbGwuIFRoaXMgYWxzb1xuXHRcdFx0XHRcdC8vIGVuc3VyZXMgdGhhdCBmb3IgYSB2ZXJ5IHNtYWxsIG91dHB1dCBidWZmZXIsIHdlIGVtaXQgYXQgbW9zdFxuXHRcdFx0XHRcdC8vIG9uZSBlbXB0eSBibG9jay5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChic3RhdGUgPT0gQmxvY2tEb25lKSB7XG5cdFx0XHRcdFx0aWYgKGZsdXNoID09IFpfUEFSVElBTF9GTFVTSCkge1xuXHRcdFx0XHRcdFx0X3RyX2FsaWduKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHsgLy8gRlVMTF9GTFVTSCBvciBTWU5DX0ZMVVNIXG5cdFx0XHRcdFx0XHRfdHJfc3RvcmVkX2Jsb2NrKDAsIDAsIGZhbHNlKTtcblx0XHRcdFx0XHRcdC8vIEZvciBhIGZ1bGwgZmx1c2gsIHRoaXMgZW1wdHkgYmxvY2sgd2lsbCBiZSByZWNvZ25pemVkXG5cdFx0XHRcdFx0XHQvLyBhcyBhIHNwZWNpYWwgbWFya2VyIGJ5IGluZmxhdGVfc3luYygpLlxuXHRcdFx0XHRcdFx0aWYgKGZsdXNoID09IFpfRlVMTF9GTFVTSCkge1xuXHRcdFx0XHRcdFx0XHQvLyBzdGF0ZS5oZWFkW3MuaGFzaF9zaXplLTFdPTA7XG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBoYXNoX3NpemUvKi0xKi87IGkrKylcblx0XHRcdFx0XHRcdFx0XHQvLyBmb3JnZXQgaGlzdG9yeVxuXHRcdFx0XHRcdFx0XHRcdGhlYWRbaV0gPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJtLmZsdXNoX3BlbmRpbmcoKTtcblx0XHRcdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcblx0XHRcdFx0XHRcdGxhc3RfZmx1c2ggPSAtMTsgLy8gYXZvaWQgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCwgc2VlIGFib3ZlXG5cdFx0XHRcdFx0XHRyZXR1cm4gWl9PSztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGZsdXNoICE9IFpfRklOSVNIKVxuXHRcdFx0XHRyZXR1cm4gWl9PSztcblx0XHRcdHJldHVybiBaX1NUUkVBTV9FTkQ7XG5cdFx0fTtcblx0fVxuXG5cdC8vIFpTdHJlYW1cblxuXHRmdW5jdGlvbiBaU3RyZWFtKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGF0Lm5leHRfaW5faW5kZXggPSAwO1xuXHRcdHRoYXQubmV4dF9vdXRfaW5kZXggPSAwO1xuXHRcdC8vIHRoYXQubmV4dF9pbjsgLy8gbmV4dCBpbnB1dCBieXRlXG5cdFx0dGhhdC5hdmFpbF9pbiA9IDA7IC8vIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUgYXQgbmV4dF9pblxuXHRcdHRoYXQudG90YWxfaW4gPSAwOyAvLyB0b3RhbCBuYiBvZiBpbnB1dCBieXRlcyByZWFkIHNvIGZhclxuXHRcdC8vIHRoYXQubmV4dF9vdXQ7IC8vIG5leHQgb3V0cHV0IGJ5dGUgc2hvdWxkIGJlIHB1dCB0aGVyZVxuXHRcdHRoYXQuYXZhaWxfb3V0ID0gMDsgLy8gcmVtYWluaW5nIGZyZWUgc3BhY2UgYXQgbmV4dF9vdXRcblx0XHR0aGF0LnRvdGFsX291dCA9IDA7IC8vIHRvdGFsIG5iIG9mIGJ5dGVzIG91dHB1dCBzbyBmYXJcblx0XHQvLyB0aGF0Lm1zZztcblx0XHQvLyB0aGF0LmRzdGF0ZTtcblx0fVxuXG5cdFpTdHJlYW0ucHJvdG90eXBlID0ge1xuXHRcdGRlZmxhdGVJbml0IDogZnVuY3Rpb24obGV2ZWwsIGJpdHMpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdHRoYXQuZHN0YXRlID0gbmV3IERlZmxhdGUoKTtcblx0XHRcdGlmICghYml0cylcblx0XHRcdFx0Yml0cyA9IE1BWF9CSVRTO1xuXHRcdFx0cmV0dXJuIHRoYXQuZHN0YXRlLmRlZmxhdGVJbml0KHRoYXQsIGxldmVsLCBiaXRzKTtcblx0XHR9LFxuXG5cdFx0ZGVmbGF0ZSA6IGZ1bmN0aW9uKGZsdXNoKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRpZiAoIXRoYXQuZHN0YXRlKSB7XG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGF0LmRzdGF0ZS5kZWZsYXRlKHRoYXQsIGZsdXNoKTtcblx0XHR9LFxuXG5cdFx0ZGVmbGF0ZUVuZCA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmRzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0dmFyIHJldCA9IHRoYXQuZHN0YXRlLmRlZmxhdGVFbmQoKTtcblx0XHRcdHRoYXQuZHN0YXRlID0gbnVsbDtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdGRlZmxhdGVQYXJhbXMgOiBmdW5jdGlvbihsZXZlbCwgc3RyYXRlZ3kpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdGlmICghdGhhdC5kc3RhdGUpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdHJldHVybiB0aGF0LmRzdGF0ZS5kZWZsYXRlUGFyYW1zKHRoYXQsIGxldmVsLCBzdHJhdGVneSk7XG5cdFx0fSxcblxuXHRcdGRlZmxhdGVTZXREaWN0aW9uYXJ5IDogZnVuY3Rpb24oZGljdGlvbmFyeSwgZGljdExlbmd0aCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmRzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0cmV0dXJuIHRoYXQuZHN0YXRlLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoYXQsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpO1xuXHRcdH0sXG5cblx0XHQvLyBSZWFkIGEgbmV3IGJ1ZmZlciBmcm9tIHRoZSBjdXJyZW50IGlucHV0IHN0cmVhbSwgdXBkYXRlIHRoZVxuXHRcdC8vIHRvdGFsIG51bWJlciBvZiBieXRlcyByZWFkLiBBbGwgZGVmbGF0ZSgpIGlucHV0IGdvZXMgdGhyb3VnaFxuXHRcdC8vIHRoaXMgZnVuY3Rpb24gc28gc29tZSBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0IHRvIGF2b2lkXG5cdFx0Ly8gYWxsb2NhdGluZyBhIGxhcmdlIHN0cm0tPm5leHRfaW4gYnVmZmVyIGFuZCBjb3B5aW5nIGZyb20gaXQuXG5cdFx0Ly8gKFNlZSBhbHNvIGZsdXNoX3BlbmRpbmcoKSkuXG5cdFx0cmVhZF9idWYgOiBmdW5jdGlvbihidWYsIHN0YXJ0LCBzaXplKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHR2YXIgbGVuID0gdGhhdC5hdmFpbF9pbjtcblx0XHRcdGlmIChsZW4gPiBzaXplKVxuXHRcdFx0XHRsZW4gPSBzaXplO1xuXHRcdFx0aWYgKGxlbiA9PT0gMClcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR0aGF0LmF2YWlsX2luIC09IGxlbjtcblx0XHRcdGJ1Zi5zZXQodGhhdC5uZXh0X2luLnN1YmFycmF5KHRoYXQubmV4dF9pbl9pbmRleCwgdGhhdC5uZXh0X2luX2luZGV4ICsgbGVuKSwgc3RhcnQpO1xuXHRcdFx0dGhhdC5uZXh0X2luX2luZGV4ICs9IGxlbjtcblx0XHRcdHRoYXQudG90YWxfaW4gKz0gbGVuO1xuXHRcdFx0cmV0dXJuIGxlbjtcblx0XHR9LFxuXG5cdFx0Ly8gRmx1c2ggYXMgbXVjaCBwZW5kaW5nIG91dHB1dCBhcyBwb3NzaWJsZS4gQWxsIGRlZmxhdGUoKSBvdXRwdXQgZ29lc1xuXHRcdC8vIHRocm91Z2ggdGhpcyBmdW5jdGlvbiBzbyBzb21lIGFwcGxpY2F0aW9ucyBtYXkgd2lzaCB0byBtb2RpZnkgaXRcblx0XHQvLyB0byBhdm9pZCBhbGxvY2F0aW5nIGEgbGFyZ2Ugc3RybS0+bmV4dF9vdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGludG8gaXQuXG5cdFx0Ly8gKFNlZSBhbHNvIHJlYWRfYnVmKCkpLlxuXHRcdGZsdXNoX3BlbmRpbmcgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdHZhciBsZW4gPSB0aGF0LmRzdGF0ZS5wZW5kaW5nO1xuXG5cdFx0XHRpZiAobGVuID4gdGhhdC5hdmFpbF9vdXQpXG5cdFx0XHRcdGxlbiA9IHRoYXQuYXZhaWxfb3V0O1xuXHRcdFx0aWYgKGxlbiA9PT0gMClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBpZiAodGhhdC5kc3RhdGUucGVuZGluZ19idWYubGVuZ3RoIDw9IHRoYXQuZHN0YXRlLnBlbmRpbmdfb3V0IHx8IHRoYXQubmV4dF9vdXQubGVuZ3RoIDw9IHRoYXQubmV4dF9vdXRfaW5kZXhcblx0XHRcdC8vIHx8IHRoYXQuZHN0YXRlLnBlbmRpbmdfYnVmLmxlbmd0aCA8ICh0aGF0LmRzdGF0ZS5wZW5kaW5nX291dCArIGxlbikgfHwgdGhhdC5uZXh0X291dC5sZW5ndGggPCAodGhhdC5uZXh0X291dF9pbmRleCArXG5cdFx0XHQvLyBsZW4pKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGF0LmRzdGF0ZS5wZW5kaW5nX2J1Zi5sZW5ndGggKyBcIiwgXCIgKyB0aGF0LmRzdGF0ZS5wZW5kaW5nX291dCArIFwiLCBcIiArIHRoYXQubmV4dF9vdXQubGVuZ3RoICsgXCIsIFwiICtcblx0XHRcdC8vIHRoYXQubmV4dF9vdXRfaW5kZXggKyBcIiwgXCIgKyBsZW4pO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJhdmFpbF9vdXQ9XCIgKyB0aGF0LmF2YWlsX291dCk7XG5cdFx0XHQvLyB9XG5cblx0XHRcdHRoYXQubmV4dF9vdXQuc2V0KHRoYXQuZHN0YXRlLnBlbmRpbmdfYnVmLnN1YmFycmF5KHRoYXQuZHN0YXRlLnBlbmRpbmdfb3V0LCB0aGF0LmRzdGF0ZS5wZW5kaW5nX291dCArIGxlbiksIHRoYXQubmV4dF9vdXRfaW5kZXgpO1xuXG5cdFx0XHR0aGF0Lm5leHRfb3V0X2luZGV4ICs9IGxlbjtcblx0XHRcdHRoYXQuZHN0YXRlLnBlbmRpbmdfb3V0ICs9IGxlbjtcblx0XHRcdHRoYXQudG90YWxfb3V0ICs9IGxlbjtcblx0XHRcdHRoYXQuYXZhaWxfb3V0IC09IGxlbjtcblx0XHRcdHRoYXQuZHN0YXRlLnBlbmRpbmcgLT0gbGVuO1xuXHRcdFx0aWYgKHRoYXQuZHN0YXRlLnBlbmRpbmcgPT09IDApIHtcblx0XHRcdFx0dGhhdC5kc3RhdGUucGVuZGluZ19vdXQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBEZWZsYXRlclxuXG5cdGZ1bmN0aW9uIERlZmxhdGVyKGxldmVsKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHZhciB6ID0gbmV3IFpTdHJlYW0oKTtcblx0XHR2YXIgYnVmc2l6ZSA9IDUxMjtcblx0XHR2YXIgZmx1c2ggPSBaX05PX0ZMVVNIO1xuXHRcdHZhciBidWYgPSBuZXcgVWludDhBcnJheShidWZzaXplKTtcblxuXHRcdGlmICh0eXBlb2YgbGV2ZWwgPT0gXCJ1bmRlZmluZWRcIilcblx0XHRcdGxldmVsID0gWl9ERUZBVUxUX0NPTVBSRVNTSU9OO1xuXHRcdHouZGVmbGF0ZUluaXQobGV2ZWwpO1xuXHRcdHoubmV4dF9vdXQgPSBidWY7XG5cblx0XHR0aGF0LmFwcGVuZCA9IGZ1bmN0aW9uKGRhdGEsIG9ucHJvZ3Jlc3MpIHtcblx0XHRcdHZhciBlcnIsIGJ1ZmZlcnMgPSBbXSwgbGFzdEluZGV4ID0gMCwgYnVmZmVySW5kZXggPSAwLCBidWZmZXJTaXplID0gMCwgYXJyYXk7XG5cdFx0XHRpZiAoIWRhdGEubGVuZ3RoKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR6Lm5leHRfaW5faW5kZXggPSAwO1xuXHRcdFx0ei5uZXh0X2luID0gZGF0YTtcblx0XHRcdHouYXZhaWxfaW4gPSBkYXRhLmxlbmd0aDtcblx0XHRcdGRvIHtcblx0XHRcdFx0ei5uZXh0X291dF9pbmRleCA9IDA7XG5cdFx0XHRcdHouYXZhaWxfb3V0ID0gYnVmc2l6ZTtcblx0XHRcdFx0ZXJyID0gei5kZWZsYXRlKGZsdXNoKTtcblx0XHRcdFx0aWYgKGVyciAhPSBaX09LKVxuXHRcdFx0XHRcdHRocm93IFwiZGVmbGF0aW5nOiBcIiArIHoubXNnO1xuXHRcdFx0XHRpZiAoei5uZXh0X291dF9pbmRleClcblx0XHRcdFx0XHRpZiAoei5uZXh0X291dF9pbmRleCA9PSBidWZzaXplKVxuXHRcdFx0XHRcdFx0YnVmZmVycy5wdXNoKG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJ1ZmZlcnMucHVzaChuZXcgVWludDhBcnJheShidWYuc3ViYXJyYXkoMCwgei5uZXh0X291dF9pbmRleCkpKTtcblx0XHRcdFx0YnVmZmVyU2l6ZSArPSB6Lm5leHRfb3V0X2luZGV4O1xuXHRcdFx0XHRpZiAob25wcm9ncmVzcyAmJiB6Lm5leHRfaW5faW5kZXggPiAwICYmIHoubmV4dF9pbl9pbmRleCAhPSBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRvbnByb2dyZXNzKHoubmV4dF9pbl9pbmRleCk7XG5cdFx0XHRcdFx0bGFzdEluZGV4ID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9IHdoaWxlICh6LmF2YWlsX2luID4gMCB8fCB6LmF2YWlsX291dCA9PT0gMCk7XG5cdFx0XHRhcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlclNpemUpO1xuXHRcdFx0YnVmZmVycy5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rKSB7XG5cdFx0XHRcdGFycmF5LnNldChjaHVuaywgYnVmZmVySW5kZXgpO1xuXHRcdFx0XHRidWZmZXJJbmRleCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBhcnJheTtcblx0XHR9O1xuXHRcdHRoYXQuZmx1c2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlcnIsIGJ1ZmZlcnMgPSBbXSwgYnVmZmVySW5kZXggPSAwLCBidWZmZXJTaXplID0gMCwgYXJyYXk7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHoubmV4dF9vdXRfaW5kZXggPSAwO1xuXHRcdFx0XHR6LmF2YWlsX291dCA9IGJ1ZnNpemU7XG5cdFx0XHRcdGVyciA9IHouZGVmbGF0ZShaX0ZJTklTSCk7XG5cdFx0XHRcdGlmIChlcnIgIT0gWl9TVFJFQU1fRU5EICYmIGVyciAhPSBaX09LKVxuXHRcdFx0XHRcdHRocm93IFwiZGVmbGF0aW5nOiBcIiArIHoubXNnO1xuXHRcdFx0XHRpZiAoYnVmc2l6ZSAtIHouYXZhaWxfb3V0ID4gMClcblx0XHRcdFx0XHRidWZmZXJzLnB1c2gobmV3IFVpbnQ4QXJyYXkoYnVmLnN1YmFycmF5KDAsIHoubmV4dF9vdXRfaW5kZXgpKSk7XG5cdFx0XHRcdGJ1ZmZlclNpemUgKz0gei5uZXh0X291dF9pbmRleDtcblx0XHRcdH0gd2hpbGUgKHouYXZhaWxfaW4gPiAwIHx8IHouYXZhaWxfb3V0ID09PSAwKTtcblx0XHRcdHouZGVmbGF0ZUVuZCgpO1xuXHRcdFx0YXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJTaXplKTtcblx0XHRcdGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihjaHVuaykge1xuXHRcdFx0XHRhcnJheS5zZXQoY2h1bmssIGJ1ZmZlckluZGV4KTtcblx0XHRcdFx0YnVmZmVySW5kZXggKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0fTtcblx0fVxuXG5cdHZhciBkZWZsYXRlcjtcblxuXHRpZiAob2JqLnppcClcblx0XHRvYmouemlwLkRlZmxhdGVyID0gRGVmbGF0ZXI7XG5cdGVsc2Uge1xuXHRcdGRlZmxhdGVyID0gbmV3IERlZmxhdGVyKCk7XG5cdFx0b2JqLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG5cdFx0XHRpZiAobWVzc2FnZS5pbml0KSB7XG5cdFx0XHRcdGRlZmxhdGVyID0gbmV3IERlZmxhdGVyKG1lc3NhZ2UubGV2ZWwpO1xuXHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdG9uaW5pdCA6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWVzc2FnZS5hcHBlbmQpXG5cdFx0XHRcdG9iai5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0b25hcHBlbmQgOiB0cnVlLFxuXHRcdFx0XHRcdGRhdGEgOiBkZWZsYXRlci5hcHBlbmQobWVzc2FnZS5kYXRhLCBmdW5jdGlvbihjdXJyZW50KSB7XG5cdFx0XHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdFx0XHRwcm9ncmVzcyA6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQgOiBjdXJyZW50XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KTtcblx0XHRcdGlmIChtZXNzYWdlLmZsdXNoKVxuXHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdG9uZmx1c2ggOiB0cnVlLFxuXHRcdFx0XHRcdGRhdGEgOiBkZWZsYXRlci5mbHVzaCgpXG5cdFx0XHRcdH0pO1xuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG59KShzZWxmKTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=