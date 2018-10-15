import parseArgvString from 'src/index';

it('can parse a simple space-separated string', () => {
    const commandString = 'npm run build';
    expect(parseArgvString(commandString)).toEqual(['npm', 'run', 'build']);
});

it('can handle trailing / leading spaces', () => {
    const commandString = '   npm run    build  ';
    expect(parseArgvString(commandString)).toEqual(['npm', 'run', 'build']);
});

it('can handle various flag types', () => {
    const commandString = 'npm install string-to-argv -D --force';
    expect(parseArgvString(commandString)).toEqual(['npm', 'install', 'string-to-argv', '-D', '--force']);
});
