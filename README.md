[![npm][npm_badge]][npm_url]
[![Build Status][build_status_badge]][build_status_url]
[![Coverage Status][coverage_badge]][coverage_url]
[![dependencies Status][deps_badge]][deps_url]
[![devDependencies Status][dev_deps_badge]][dev_deps_url]
![GitHub license][license_badge]

# What is it?
`string-to-argv` parses a command line string into an argument array to mimic `process.argv`.

# Why
It's written as a robust replacement to [string-argv](https://github.com/mccormicka/string-argv). `string-to-argv` can properly handle nested quotes to parse strings like `curl -d "{ \"projectId\": 1, \"locale\": \"en\" }"`. It also provides bundled `typescript` definitions.

# Installation

```bash
npm install string-to-argv
```

# Usage

```javascript
// ES6
import parseArgvString from 'string-to-argv';
// Node.js
// const parseArgvString = require('string-to-argv');

const argv = parseArgvString(`curl "https://example.com" -X POST --data "{ \\"projectId\\": 1, \\"locale\\": \\"en\\" }" --cookie "USER_NAME=O'Connor"`);

console.log(argv);
/*
[
    'curl',
    'https://example.com',
    '-X',
    'POST',
    '--data',
    '{ "projectId": 1, "locale": "en" }',
    '--cookie',
    'USER_NAME=O\'Connor'
]
*/
```

[npm_badge]: https://img.shields.io/npm/v/string-to-argv.svg
[npm_url]: https://npmjs.com/package/string-to-argv

[build_status_badge]: https://travis-ci.org/vladimir-tikhonov/string-to-argv.svg?branch=master
[build_status_url]: https://travis-ci.org/vladimir-tikhonov/string-to-argv

[coverage_badge]: https://coveralls.io/repos/github/vladimir-tikhonov/string-to-argv/badge.svg?branch=master
[coverage_url]: https://coveralls.io/github/vladimir-tikhonov/string-to-argv?branch=master

[deps_badge]: https://img.shields.io/david/vladimir-tikhonov/string-to-argv.svg
[deps_url]: https://david-dm.org/vladimir-tikhonov/string-to-argv

[dev_deps_badge]: https://david-dm.org/vladimir-tikhonov/string-to-argv/dev-status.svg
[dev_deps_url]: https://david-dm.org/vladimir-tikhonov/string-to-argv?type=dev

[license_badge]: https://img.shields.io/badge/license-MIT-blue.svg
