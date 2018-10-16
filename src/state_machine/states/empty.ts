import baseState, { State, StateHandle } from 'src/state_machine/states/state';

const emptyState: State = {
    ...baseState,
    stateHandle: StateHandle.Empty,

    onCharacter(character: string) {
        return [character, StateHandle.InsideToken];
    },
    onSingleQuote() {
        return [null, StateHandle.InsideSingleQuotedToken];
    },
    onDoubleQuote() {
        return [null, StateHandle.InsideDoubleQuotedToken];
    },
};

export default emptyState;
