import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const insideSingleQuotedTokenState: State = {
    ...baseState,
    stateHandle: StateHandle.InsideSingleQuotedToken,

    onCharacter(character: string) {
        return [character, null];
    },
    onWhitespace(character: string) {
        return [character, null];
    },
    onSingleQuote() {
        return ['', StateHandle.Empty];
    },
    onDoubleQuote(character: string) {
        return [character, null];
    },
};

export default insideSingleQuotedTokenState;
