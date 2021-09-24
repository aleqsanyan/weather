import {ADD_NEW_USER, GET_USER_DATA} from '../constants';

export type UsersType = {
    id: number
    name: string
    isBanned: boolean
    registeredAt: number | string
    image: string
}

export type  InitialStateUserType = typeof initialState

type Actions = {
    type: typeof GET_USER_DATA | typeof ADD_NEW_USER
    payload?: any
}

const ACTION_HANDLERS = {
    [GET_USER_DATA]: (state: InitialStateUserType, action: Actions) => {
        return {
            ...state,
            users: action.payload,
        }
    },
    [ADD_NEW_USER]: (state: InitialStateUserType, action: Actions) => {
        return {
            ...state,
            users: [...state.users, action.payload]
        }
    }
}


const initialState = {
    users:  [
        {
            "id": 123,
            "name": "John Edwards",
            "isBanned": false,
            "registeredAt": 1622553729,
            "image": "https://cdn.britannica.com/45/102145-050-29615250/John-Edwards.jpg"
        },
        {
            "id": 443,
            "name": "Tommy Lee",
            "isBanned": false,
            "registeredAt": 1607779323,
            "image": "https://d.newsweek.com/en/full/56633/tommy-lee-jones-cu01-wide.jpg?w=1600&h=1200&q=88&f=f3767a3a1a27dda15bc64cebd2abbcae"
        },
        {
            "id": 443,
            "name": "Donald T",
            "isBanned": true,
            "registeredAt": 1614726063,
            "image": "https://s.yimg.com/ny/api/res/1.2/G.mid7YninzDu8t2mhaz3g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://s.yimg.com/uu/api/res/1.2/rk3WQ1yuU5wHKS4Ie_ReWQ--~B/aD04MDM7dz0xNjA2O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/business_insider_articles_888/a520fc337e7c5120c9d1927f671911b7"
        }
    ] as Array<UsersType>,
}



const userReducer = (state = initialState, action: Actions): InitialStateUserType  => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default userReducer;