import { StateMachine } from 'src/state_machine';

/**
 * Parses a command line string into an argument array
 *
 * @param {string} arvgString - string that you would normally pass to the command line
 * @returns {string[]} array of arguments
 */
export default function parseArgvString(arvgString: string): string[] {
    const stateMachine = new StateMachine();
    const output: string[] = [];
    let currentOutputIndex = 0;

    for (const character of arvgString) {
        const outputCharacter = stateMachine.handleCharacter(character);

        if (outputCharacter !== null) {
            output[currentOutputIndex] = output[currentOutputIndex]
                ? output[currentOutputIndex] + outputCharacter
                : outputCharacter;
        } else if (output[currentOutputIndex]) {
            currentOutputIndex++;
        }
    }

    return output;
}

// Allows commonjs and es6 imports at the same time.
// "as any" hack is needed to exclude this line from type definitions.
(parseArgvString as any).default = parseArgvString;
