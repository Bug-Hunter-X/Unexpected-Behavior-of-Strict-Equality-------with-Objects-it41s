# JavaScript Strict Equality Bug

This repository demonstrates a common error in JavaScript related to the strict equality operator (`===`) when comparing objects.  The `bug.js` file contains code that incorrectly uses `===` to compare objects resulting in unexpected outputs. The `bugSolution.js` file provides a corrected approach.

## Problem

The strict equality (`===`) operator in JavaScript checks for both value and type equality. While this works as expected for primitive values, it doesn't behave as you might expect for objects.  Two objects are only strictly equal if they are the same object in memory, not if they have the same properties and values.

## Solution

Comparing the contents of objects requires a more thorough approach. The solution demonstrates using a helper function to recursively compare the properties of two objects.