[![Build Status](https://travis-ci.org/jest-community/jest-watch-mock-stdin.svg?branch=master)](https://travis-ci.org/jest-community/jest-watch-mock-stdin) [![npm version](https://badge.fury.io/js/jest-watch-mock-stdin.svg)](https://badge.fury.io/js/jest-watch-mock-stdin)

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest.svg">
  </a>
  <h1>jest-watch-mock-stdin</h1>
  <p>Mock stdin for Jest</p>
</div>

## Usage

### Install

Install `jest-watch-mock-stdin`

```bash
yarn add --dev jest jest-watch-mock-stdin

# or with NPM

npm install --save-dev jest jest-watch-mock-stdin
```

### Add it to your Jest config

In your jestConfig

```js
watchPlugins: [
    ["jest-watch-mock-stdin", {
        input: [
            { keys: ['p', 'b', 'a', 'r', '\n'] },
            { keys: ['q'] },
        ]
    ]
],
```

The keys inside the `keys` array will be type immediately one after the other. It will wait for a test run to be completed before moving to the next `keys` array

Fox example, the config above will:

1. Press P to filter by filename
2. Enter 'bar' and press enter in the "filter by filename prompts"
3. Wait for the test run to end.
4. Press Q to quit Jest.
