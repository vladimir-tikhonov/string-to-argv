import parseArgvString from 'src/index';

it('can parse a simple space-separated string', () => {
    const commandString = 'npm run build';
    expect(parseArgvString(commandString)).toEqual(['npm', 'run', 'build']);
});
