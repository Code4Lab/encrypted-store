import {connect} from "react-redux";

import actions from '../store/actions';
import Content from '../components/Content';

export default connect((state) => ({
    ...state.data
}), {
    ...actions.DataActions
})(Content);