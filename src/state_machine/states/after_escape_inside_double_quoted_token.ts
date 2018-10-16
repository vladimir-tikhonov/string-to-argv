import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const afterEscapeInsideDoubleQuotedTokenState: State = {
    ...baseState,
    stateHandle: StateHandle.AfterEscapeInsideDoubleQuotedToken,

    onCharacter(character: string) {
        return ['\\' + character, StateHandle.InsideDoubleQuotedToken];
    },
    onWhitespace(character: string) {
        return ['\\' + character, StateHandle.InsideDoubleQuotedToken];
    },
    onSingleQuote(character: string) {
        return ['\\' + character, StateHandle.InsideDoubleQuotedToken];
    },
    onDoubleQuote(character: string) {
        return [character, StateHandle.InsideDoubleQuotedToken];
    },
    onEscape(character: string) {
        return [character, StateHandle.InsideDoubleQuotedToken];
    },
};

export default afterEscapeInsideDoubleQuotedTokenState;
