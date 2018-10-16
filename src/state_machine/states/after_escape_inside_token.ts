import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const afterEscapeInsideTokenState: State = {
    ...baseState,
    stateHandle: StateHandle.AfterEscapeInsideToken,

    onCharacter(character: string) {
        return [character, StateHandle.InsideToken];
    },
    onWhitespace(character: string) {
        return [character, StateHandle.InsideToken];
    },
    onSingleQuote(character: string) {
        return [character, StateHandle.InsideToken];
    },
    onDoubleQuote(character: string) {
        return [character, StateHandle.InsideToken];
    },
    onEscape(character: string) {
        return [character, StateHandle.InsideToken];
    },
};

export default afterEscapeInsideTokenState;
