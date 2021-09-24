import {EDIT_NAME, UPDATE_NAME, DELETE_POST} from '../constants'


type Actions = {
    type: typeof UPDATE_NAME| typeof EDIT_NAME | typeof DELETE_POST
    payload:  {
        id: number
        title: string
        isHidden: boolean
    }
}

export type  InitialStatePostType = typeof initialState

export type PostType = {
    id: number
    title: string
    content: string
    isHidden: boolean
    createdAt: number
}


const ACTION_HANDLERS = {
  /*  [GET_POST_DATA]: (state: InitialStatePostType, action: Actions ) => {
        return {
            ...state,
            posts: action.payload,
        }
    },*/
    [UPDATE_NAME]: (state: InitialStatePostType, action: Actions) => {
        return {
            ...state,
            posts: state.posts.map((elem) => {
                if(elem.id === action.payload.id) {
                    elem.title = action.payload.title
                    return elem
                }
                return elem
            })
        }
    },
    [EDIT_NAME]: (state: InitialStatePostType, action: Actions) => {
        return {
            ...state,
            posts: state.posts.map((elem) => {
                if (elem.id === action.payload.id) {
                    elem.isHidden = action.payload.isHidden
                    return elem
                }
                return elem
            })
        }
    },
    [DELETE_POST]: (state: InitialStatePostType, action: Actions) => {
        return {
            ...state,
            posts: state.posts.filter((elem) => elem.id !== action.payload.id),
        }
    },
}



const initialState  = {
    posts: [
        {
            "id": 44,
            "title": "Lorem Ipsum",
            "content": "Praesent varius sapien id eros ultrices, scelerisque rhoncus odio viverra. Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat. Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. Integer sed risus quis sem finibus porta vel lobortis risus. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada.",
            "isHidden": true,
            "createdAt": 1605990814
        },
        {
            "id": 33,
            "title": "scelerisque rhoncus",
            "content": "Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat. Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. Integer sed risus quis sem finibus porta vel lobortis risus. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada.",
            "isHidden": false,
            "createdAt": 1607785402
        },
        {
            "id": 22,
            "title": "Donec cursu",
            "content": "Integer sed risus quis sem finibus porta vel lobortis risus. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada. Praesent varius sapien id eros ultrices, scelerisque rhoncus odio viverra. Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat. Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. ",
            "isHidden": false,
            "createdAt": 1609529461
        },
        {
            "id": 41,
            "title": "Nulla sit",
            "content": "Praesent id suscipit sem. Aliquam porta arcu ut tellus tristique pretium. Morbi facilisis pharetra suscipit. Cras in est eget purus convallis pellentesque. Integer sed risus quis sem finibus porta vel lobortis risus. Praesent varius sapien id eros ultrices, scelerisque rhoncus odio viverra. Aenean venenatis odio eu quam feugiat, eget dignissim orci malesuada. Nulla sit amet turpis eu turpis commodo placerat. Donec cursus lacinia ultrices. Duis vulputate ipsum non lectus accumsan, non pulvinar erat ullamcorper. Ut faucibus leo est, vitae euismod mauris efficitur a. Suspendisse varius ligula id nunc condimentum placerat.",
            "isHidden": true,
            "createdAt": 1610745743
        }
    ] as Array<PostType>,

}


const postReducers = (state = initialState, action: Actions): InitialStatePostType => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}

export default postReducers