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
};

export default insiteTokenState;
