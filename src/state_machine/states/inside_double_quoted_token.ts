import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const insideDoubleQuotedTokenState: State = {
    ...baseState,
    stateHandle: StateHandle.InsideDoubleQuotedToken,

    onCharacter(character: string) {
        return [character, null];
    },
    onWhitespace(character: string) {
        return [character, null];
    },
    onSingleQuote(character: string) {
        return [character, null];
    },
    onDoubleQuote() {
        return ['', StateHandle.Empty];
    },
};

export default insideDoubleQuotedTokenState;
