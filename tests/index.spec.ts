import parseArgvString from 'src/index';

it('can handle a simple space-separated string', () => {
    const commandString = `npm run build`;
    expect(parseArgvString(commandString)).toEqual([`npm`, `run`, `build`]);
});

it('can handle trailing / leading spaces', () => {
    const commandString = `   npm run    build  `;
    expect(parseArgvString(commandString)).toEqual([`npm`, `run`, `build`]);
});

it('can handle various flag types', () => {
    const commandString = `npm install string-to-argv -D --force`;
    expect(parseArgvString(commandString)).toEqual([`npm`, `install`, `string-to-argv`, `-D`, `--force`]);
});

it('can handle simple double-quoted argument', () => {
    const commandString = `echo "hello world"`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `hello world`]);
});

it('can handle simple single-quoted argument', () => {
    const commandString = `echo 'hello world'`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `hello world`]);
});

it('can handle single quotes inside double-quoted argument', () => {
    const commandString = `echo "can't wait"`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `can't wait`]);
});

it('can handle double quotes inside single-quoted argument', () => {
    const commandString = `echo 'My favourite movie is "Forrest Gump"'`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `My favourite movie is "Forrest Gump"`]);
});

it('can handle double quotes within argument', () => {
    const commandString = `echo arg "Before "Unquoted" Inside "Unquoted" After" arg`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `arg`, `Before Unquoted Inside Unquoted After`, `arg`]);
});

it('can handle single quotes within argument', () => {
    const commandString = `echo arg 'Before 'Unquoted' Inside 'Unquoted' After' arg`;
    expect(parseArgvString(commandString)).toEqual([`echo`, `arg`, `Before Unquoted Inside Unquoted After`, `arg`]);
});
