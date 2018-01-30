
import * as DataActions from "../actions/dataActions";

const initialState = {
    all: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DataActions.ACTION_DATA_FILL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case DataActions.ACTION_DATA_CLEAR:
            return {
                ...state,
                all: []
            };
        default:
            return state;
    }
};