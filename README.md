<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isEqualf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether two single-precision complex floating-point numbers are equal.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/complex-base-assert-is-equalf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isEqualf = require( '@stdlib/complex-base-assert-is-equalf' );
```

#### isEqualf( z1, z2 )

Tests whether two single-precision complex floating-point numbers are equal.

```javascript
var Complex64 = require( '@stdlib/complex-float32' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( 5.0, 3.0 );

var out = isEqualf( z1, z2 );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var isEqualf = require( '@stdlib/complex-base-assert-is-equalf' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( 5.0, 3.0 );
var out = isEqualf( z1, z2 );
// returns true

z1 = new Complex64( -5.0, -3.0 );
z2 = new Complex64( 5.0, 3.0 );
out = isEqualf( z1, z2 );
// returns false

z1 = new Complex64( NaN, 3.0 );
z2 = new Complex64( NaN, 3.0 );
out = isEqualf( z1, z2 );
// returns false
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/complex/base/assert/is_equalf.h"
```

#### stdlib_complex_is_equalf( z1, z2 )

Tests whether single-precision complex floating-point numbers are equal.

```c
#include "stdlib/complex/float32.h"
#include <stdbool.h>

stdlib_complex64_t z1 = stdlib_complex64( 5.0, 2.0 );
stdlib_complex64_t z2 = stdlib_complex64( 5.0, 2.0 );

bool v = stdlib_complex_is_equalf( z1, z2 );
```

The function accepts the following arguments:

-   **z1**: `[in] stdlib_complex64_t` first single-precision complex floating-point number.
-   **z2**: `[in] stdlib_complex64_t` second single-precision complex floating-point number.

```c
bool stdlib_complex_is_equalf( const stdlib_complex64_t z1, const stdlib_complex64_t z2 );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/complex/base/assert/is_equalf.h"
#include "stdlib/complex/float32.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t z[] = {
        stdlib_complex64( 5.0f, 2.0f ),
        stdlib_complex64( -2.0f, 1.0f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    bool v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = stdlib_complex_is_equalf( z[ i ], z[ i ] );
        printf( "Equal? %s\n", ( v ) ? "True" : "False" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-base-assert-is-equalf.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-base-assert-is-equalf

[test-image]: https://github.com/stdlib-js/complex-base-assert-is-equalf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-base-assert-is-equalf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-base-assert-is-equalf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-base-assert-is-equalf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-base-assert-is-equalf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-base-assert-is-equalf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-base-assert-is-equalf/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-base-assert-is-equalf/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-base-assert-is-equalf/tree/esm
[branches-url]: https://github.com/stdlib-js/complex-base-assert-is-equalf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-base-assert-is-equalf/main/LICENSE

</section>

<!-- /.links -->
