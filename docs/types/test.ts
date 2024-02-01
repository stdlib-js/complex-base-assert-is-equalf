/*
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

import Complex64 = require( '@stdlib/complex-float32' );
import isEqualf = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const z1 = new Complex64( 5.0, 3.0 );
	const z2 = new Complex64( 5.0, 3.0 );

	isEqualf( z1, z2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument that is not a complex number...
{
	const z2 = new Complex64( 5.0, 3.0 );

	isEqualf( 'abc', z2 ); // $ExpectError
	isEqualf( 123, z2 ); // $ExpectError
	isEqualf( true, z2 ); // $ExpectError
	isEqualf( false, z2 ); // $ExpectError
	isEqualf( [], z2 ); // $ExpectError
	isEqualf( {}, z2 ); // $ExpectError
	isEqualf( ( x: number ): number => x, z2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a complex number...
{
	const z1 = new Complex64( 5.0, 3.0 );

	isEqualf( z1, 'abc' ); // $ExpectError
	isEqualf( z1, 123 ); // $ExpectError
	isEqualf( z1, true ); // $ExpectError
	isEqualf( z1, false ); // $ExpectError
	isEqualf( z1, [] ); // $ExpectError
	isEqualf( z1, {} ); // $ExpectError
	isEqualf( z1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z1 = new Complex64( 5.0, 3.0 );
	const z2 = new Complex64( 5.0, 3.0 );

	isEqualf(); // $ExpectError
	isEqualf( z1 ); // $ExpectError
	isEqualf( z1, z2, {} ); // $ExpectError
}
