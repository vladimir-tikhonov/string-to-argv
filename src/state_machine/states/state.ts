type HandlerFunction = (character: string) => [string | null, StateHandle | null];

export interface State {
    stateHandle: StateHandle;
    onCharacter: HandlerFunction;
    onWhitespace: HandlerFunction;
    onDoubleQuote: HandlerFunction;
    onSingleQuote: HandlerFunction;
    onEscapeCharacter: HandlerFunction;
}

export enum StateHandle {
    Empty,
    InsideToken,
}

const defaultHandler: HandlerFunction = (_character: string) => [null, null];

const baseState = {
    onCharacter: defaultHandler,
    onWhitespace: defaultHandler,
    onDoubleQuote: defaultHandler,
    onSingleQuote: defaultHandler,
    onEscapeCharacter: defaultHandler,
};

export default baseState;
