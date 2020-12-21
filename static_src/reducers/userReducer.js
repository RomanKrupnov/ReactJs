import update from 'react-addons-update';
const initialStore = {
    user:{
        name: 'Roman',
    },
};

export default function userReducer(store = initialStore, action) {
    switch (action.type) {

        default:
            return store;
    }
}