import { legacy_createStore as createStore} from 'redux'

const store = createStore(reducer)


const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
}


const reducer = (state=initialState,action) => {
    state.recommend = action.payload.recommend;
    state.newDisney = action.payload.newDisney;
    state.original = action.payload.original;
    state.trending = action.payload.trending;
}

export default reducer;