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

const argv = parseArgvString(`curl "https://example.com" -X POST --data "{ \"projectId\": 1, \"locale\": \"en\" }" --cookie "USER_NAME=O'Connor"`);

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
