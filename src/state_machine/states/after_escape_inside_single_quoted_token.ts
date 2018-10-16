import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const afterEscapeInsideSingleQuotedTokenState: State = {
    ...baseState,
    stateHandle: StateHandle.AfterEscapeInsideSingleQuotedToken,

    onCharacter(character: string) {
        return ['\\' + character, StateHandle.InsideSingleQuotedToken];
    },
    onWhitespace(character: string) {
        return ['\\' + character, StateHandle.InsideSingleQuotedToken];
    },
    onSingleQuote(character: string) {
        return [character, StateHandle.InsideSingleQuotedToken];
    },
    onDoubleQuote(character: string) {
        return ['\\' + character, StateHandle.InsideSingleQuotedToken];
    },
    onEscape(character: string) {
        return [character, StateHandle.InsideSingleQuotedToken];
    },
};

export default afterEscapeInsideSingleQuotedTokenState;
