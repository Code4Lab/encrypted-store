import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";

import configureStore from './store';
import ContentContainer from './containers/ContentContainer';
import './index.css';

const {store, persistor} = configureStore();

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ContentContainer />
        </PersistGate>
    </Provider>
);