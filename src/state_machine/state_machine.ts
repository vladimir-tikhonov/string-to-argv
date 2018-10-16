import { getStateByHandle, StateHandle } from './states';

export default class StateMachine {
    private currentState = getStateByHandle(StateHandle.Empty);

    public handleCharacter(character: string) {
        const [outputCharacter, nextStateHandle] = this.performTransition(character);

        if (nextStateHandle !== null) {
            this.currentState = getStateByHandle(nextStateHandle);
        }

        return outputCharacter;
    }

    private performTransition(character: string) {
        const currentState = this.currentState;

        switch (character) {
            case ` `:
                return currentState.onWhitespace(character);
            case `'`:
                return currentState.onSingleQuote(character);
            case `"`:
                return currentState.onDoubleQuote(character);
            case `\\`:
                return currentState.onEscape(character);
            default:
                return currentState.onCharacter(character);
        }
    }
}
