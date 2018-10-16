import parseArgvString from 'src/index';

it('should parse a simple space-separated string', () => {
    const commandString = `npm run build`;
    expect(parseArgvString(commandString)).toEqual([`npm`, `run`, `build`]);
});

it('should parse trailing / leading spaces', () => {
    const commandString = `   npm run    build  `;
    expect(parseArgvString(commandString)).toEqual([`npm`, `run`, `build`]);
});

it('should parse various flag types', () => {
    const commandString = `npm install string-to-argv -D --force`;
    expect(parseArgvString(commandString)).toEqual([`npm`, `install`, `string-to-argv`, `-D`, `--force`]);
});

it('should parse a simple double-quoted argument', () => {
    const commandString = `echo "hello world"`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `hello world`]);
});

it('should parse a simple single-quoted argument', () => {
    const commandString = `echo 'hello world'`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `hello world`]);
});

it('should parse single quotes inside double-quoted argument', () => {
    const commandString = `echo "can't wait"`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `can't wait`]);
});

it('should parse double quotes inside single-quoted argument', () => {
    const commandString = `echo 'My favourite movie is "Forrest Gump"'`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `My favourite movie is "Forrest Gump"`]);
});

it('should parse double quotes within argument', () => {
    const commandString = `echo arg "Before "Unquoted" Inside "Unquoted" After" arg`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `arg`, `Before Unquoted Inside Unquoted After`, `arg`]);
});

it('should parse single quotes within argument', () => {
    const commandString = `echo arg 'Before 'Unquoted' Inside 'Unquoted' After' arg`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `arg`, `Before Unquoted Inside Unquoted After`, `arg`]);
});

it('should parse escape characters within argument', () => {
    const commandString = `echo \\\\Hello\\ World,\\ it\\'s\\ me\\ -\\ \\your\\ \\"baby\\"\\\\`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `\\Hello World, it's me - your "baby"\\`]);
});

it('should parse escaped double quote inside doube-qouted argument', () => {
    const commandString = `echo "My favourite movie is \\"Forrest Gump\\""`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `My favourite movie is "Forrest Gump"`]);
});

it('should parse escaped single quote inside single-qouted argument', () => {
    const commandString = `echo 'can\\'t wait'`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `can't wait`]);
});

it('should parse non-quote escape characters inside doube-qouted argument', () => {
    const commandString = `echo "\\ \\x \\\\ \\'"`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `\\ \\x \\ \\'`]);
});

it('should parse non-quote escape characters inside single-qouted argument', () => {
    const commandString = `echo '\\ \\x \\\\ \\"'`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `\\ \\x \\ \\"`]);
});

it('should parse the example from readme', () => {
    const commandString = `curl "https://example.com" -X POST --data "{ \\"projectId\\": 1, \\"locale\\": \\"en\\" }" --cookie "USER_NAME=O'Connor"`;
    expect(parseArgvString(commandString)).toEqual([
        `curl`,
        `https://example.com`,
        `-X`,
        `POST`,
        `--data`,
        `{ "projectId": 1, "locale": "en" }`,
        `--cookie`,
        `USER_NAME=O\'Connor`,
    ]);
});
