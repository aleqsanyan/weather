import postReducers from "./postReducers"
import userReducers from "./userReducers"
import formReducer from "./formReducers"
/*type ReducersType = typeof reducers
export type stateType = ReturnType<ReducersType>*/
let reducers = {
    form: formReducer,
    user: userReducers,
    post: postReducers
}

// @ts-ignore
export type RootState = ReturnType<typeof reducers>
export default reducers