# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gwan93/lotideReplica`

**Require it:**

`const _ = require('@gwan93/lotideReplica');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first value of an array
* `tail(array)`: Returns an array without the first value
* `middle(array)`: Returns the middle of an array. If array length is even, returns the middle two values
* `assertArraysEqual(array1, array2)` : Verifies two arrays. Does not support nested arrays
* `assertEqual(arg1, arg2)` : Verifies two arguments (numbers, strings)
* `eqArrays(array1, array2)` : Verifies two arrays. Supports nested arrays