import { StateHandle } from './state';

import emptyState from './empty';
import insideDoubleQuotedTokenState from './inside_double_quoted_token';
import insideSingleQuotedTokenState from './inside_single_quoted_token';
import insideTokenState from './inside_token';

const ALL_STATES = [emptyState, insideTokenState, insideSingleQuotedTokenState, insideDoubleQuotedTokenState];

export default function getStateByHandle(stateHandle: StateHandle) {
    for (const state of ALL_STATES) {
        if (state.stateHandle === stateHandle) {
            return state;
        }
    }

    // istanbul ignore next line - shouldn't really happen
    throw new Error(`State with handle = ${stateHandle} cannot be found`);
}
