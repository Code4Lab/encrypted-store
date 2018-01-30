import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEncryptor from 'redux-persist-transform-encrypt';

import Reducers from './reducers';
import Middleware from './middleware';

// "SecretKeyWord" => Base64 => SHA1 => "a7d329d37fac06686a3f306e7be7c716b3411d3a"
const encryptor = createEncryptor({
    secretKey: process.env.REACT_APP_SECRET_KEY || 'a7d329d37fac06686a3f306e7be7c716b3411d3a'
});

const persistedReducer = persistReducer({
    key: 'store',
    storage: storage,
    whitelist: ['data'],
    transforms: [encryptor]
}, Reducers);

export default () => {
    const store = createStore(
        persistedReducer,
        undefined,
        Middleware
    );

    const persistor = persistStore(store);

    return { store, persistor };
};