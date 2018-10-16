type HandlerFunction = (character: string) => [string | null, StateHandle | null];

export interface State {
    stateHandle: StateHandle;
    onCharacter: HandlerFunction;
    onWhitespace: HandlerFunction;
    onDoubleQuote: HandlerFunction;
    onSingleQuote: HandlerFunction;
    onEscape: HandlerFunction;
}

export enum StateHandle {
    Empty,
    InsideToken,
    InsideSingleQuotedToken,
    InsideDoubleQuotedToken,
    AfterEscapeInsideToken,
    AfterEscapeInsideSingleQuotedToken,
    AfterEscapeInsideDoubleQuotedToken,
}

const defaultHandler: HandlerFunction = (_character: string) => [null, null];

const baseState = {
    onCharacter: defaultHandler,
    onWhitespace: defaultHandler,
    onDoubleQuote: defaultHandler,
    onSingleQuote: defaultHandler,
    onEscape: defaultHandler,
};

export default baseState;
