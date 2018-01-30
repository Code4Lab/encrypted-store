import {generateValues} from "../../utils/index";

export const ACTION_DATA_FILL_REQUEST = 'ACTION_DATA_FILL_REQUEST';
export const ACTION_DATA_FILL_SUCCESS = 'ACTION_DATA_FILL_SUCCESS';
export const ACTION_DATA_FILL_FAILURE = 'ACTION_DATA_FILL_FAILURE';
export const ACTION_DATA_CLEAR = 'ACTION_DATA_CLEAR';

// ADDITIONAL FUNCTIONS

function fillDataRequest() {
    return {type: ACTION_DATA_FILL_REQUEST};
}

function fillDataSuccess(all) {
    return {
        type: ACTION_DATA_FILL_SUCCESS,
        payload: {all}
    };
}

function fillDataFailure() {
    return {type: ACTION_DATA_FILL_FAILURE};
}

// ACTION CREATORS

/**
 *
 */
function fillDataAction() {
    return (dispatch) => {
        dispatch(fillDataRequest());

        new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        })
            .then(() => dispatch(fillDataSuccess(generateValues())))
            .catch((reason) => dispatch(fillDataFailure(reason)));
    };
}

/**
 *
 */
function clearDataAction() {
    return {type: ACTION_DATA_CLEAR};
}


// EVENTS
export const onLoad = () => (dispatch) => {
    dispatch(fillDataAction());
};