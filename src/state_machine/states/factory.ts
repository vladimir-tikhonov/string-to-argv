import { StateHandle } from './state';

import emptyState from './empty';
import insideTokenState from './inside_token';

const ALL_STATES = [emptyState, insideTokenState];

export default function getStateByHandle(stateHandle: StateHandle) {
    for (const state of ALL_STATES) {
        if (state.stateHandle === stateHandle) {
            return state;
        }
    }

    // istanbul ignore next line - shouldn't really happen
    throw new Error(`State with handle = ${stateHandle} cannot be found`);
}
