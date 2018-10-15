/**
 * Parses a command line string into an argument array
 *
 * @param {string} arvgString - string that you would normally pass to the command line
 * @returns {string[]} array of arguments
 */
export default function parseArgvString(arvgString: string): string[] {
    return arvgString.split(' ');
}

// Allows commonjs and es6 imports at the same time.
// "as any" hack is needed to exclude this line from type definitions.
(parseArgvString as any).default = parseArgvString;
