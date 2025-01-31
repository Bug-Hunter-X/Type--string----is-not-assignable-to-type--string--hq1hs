# Type 'string[]' is not assignable to type 'string' in TypeScript
This repo demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

## Problem
The `greeter` function expects a single string argument, but an array of strings is passed to it. This results in a type error.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings or iterating over the array and calling the `greeter` function for each element.