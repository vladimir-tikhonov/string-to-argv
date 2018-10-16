import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const insiteTokenState: State = {
    ...baseState,
    stateHandle: StateHandle.InsideToken,

    onCharacter(character: string) {
        return [character, null];
    },
    onWhitespace() {
        return [null, StateHandle.Empty];
    },
    onSingleQuote() {
        return ['', StateHandle.InsideSingleQuotedToken];
    },
    onDoubleQuote() {
        return ['', StateHandle.InsideDoubleQuotedToken];
    },
    onEscape() {
        return ['', StateHandle.AfterEscapeInsideToken];
    },
};

export default insiteTokenState;
