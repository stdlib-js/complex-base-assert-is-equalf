/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var bench = require( '@stdlib/bench-harness' );
var Complex64 = require( '@stdlib/complex-float32' );
var randu = require( '@stdlib/random-base-randu' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isEqualf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var z1;
	var z2;
	var v;
	var i;

	z1 = [
		new Complex64( randu(), randu() ),
		new Complex64( randu(), randu() )
	];
	z2 = [
		new Complex64( randu(), randu() ),
		new Complex64( randu(), randu() ),
		z1[ 0 ],
		z1[ 1 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = isEqualf( z1[ i%z1.length ], z2[ i%z2.length ] );
		if ( typeof v !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( v ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
