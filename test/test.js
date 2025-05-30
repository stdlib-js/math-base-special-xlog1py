/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var xlog1py = require( './../lib' );


// FIXTURES //

var smallSmall = require( './fixtures/python/small_small.json' );
var smallLarge = require( './fixtures/python/small_large.json' );
var largeSmall = require( './fixtures/python/large_small.json' );
var largeLarge = require( './fixtures/python/large_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof xlog1py, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` when provided `NaN` for any parameter', function test( t ) {
	var out = xlog1py( NaN, 2.0 );
	t.strictEqual( isnan( out ), true, 'returns expected value' );

	out = xlog1py( 0.0, NaN );
	t.strictEqual( isnan( out ), true, 'returns expected value' );

	out = xlog1py( 3.4, NaN );
	t.strictEqual( isnan( out ), true, 'returns expected value' );

	out = xlog1py( NaN, NaN );
	t.strictEqual( isnan( out ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` when `x = 0` and `y` is a number', function test( t ) {
	var out = xlog1py( 0.0, 2.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	out = xlog1py( 0.0, 0.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	out = xlog1py( 0.0, -1.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	out = xlog1py( 0.0, -3.0 );
	t.strictEqual( out, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates `x * ln(y+1)` for small `x` and `y`', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;

	expected = smallSmall.expected;
	x = smallSmall.x;
	y = smallSmall.y;
	for ( i = 0; i < x.length; i++ ) {
		out = xlog1py( x[i], y[i] );
		if ( out === expected[i] ) {
			t.strictEqual( out, expected[i], 'x: '+x[i]+', out: '+out+', expected: '+expected[i] );
		} else {
			delta = abs( out - expected[i] );
			tol = 2.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+out+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates `x * ln(y+1)` for small `x` and large `y`', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;

	expected = smallLarge.expected;
	x = smallLarge.x;
	y = smallLarge.y;
	for ( i = 0; i < x.length; i++ ) {
		out = xlog1py( x[i], y[i] );
		if ( out === expected[i] ) {
			t.strictEqual( out, expected[i], 'x: '+x[i]+', out: '+out+', expected: '+expected[i] );
		} else {
			delta = abs( out - expected[i] );
			tol = 2.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+out+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates `x * ln(y+1)` for large `x` and small `y`', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;

	expected = largeSmall.expected;
	x = largeSmall.x;
	y = largeSmall.y;
	for ( i = 0; i < x.length; i++ ) {
		out = xlog1py( x[i], y[i] );
		if ( out === expected[i] ) {
			t.strictEqual( out, expected[i], 'x: '+x[i]+', out: '+out+', expected: '+expected[i] );
		} else {
			delta = abs( out - expected[i] );
			tol = 2.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+out+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates `x * ln(y+1)` for large `x` and `y`', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;
	var i;

	expected = largeLarge.expected;
	x = largeLarge.x;
	y = largeLarge.y;
	for ( i = 0; i < x.length; i++ ) {
		out = xlog1py( x[i], y[i] );
		if ( out === expected[i] ) {
			t.strictEqual( out, expected[i], 'x: '+x[i]+', out: '+out+', expected: '+expected[i] );
		} else {
			delta = abs( out - expected[i] );
			tol = 2.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+out+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
