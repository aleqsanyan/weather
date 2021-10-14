import {SHOW_WEATHER} from '../constants'


/*type Actions = {
    type: typeof SHOW_WEATHER
    payload:  {
        weather: any,
        isShow: boolean
    }
}*/

export type  InitialStateCountryType = typeof initialState

export type CountryType = {
    name: string
    url: string

}


const ACTION_HANDLERS = {
    [SHOW_WEATHER]: (state: InitialStateCountryType, action: any) => {
        return {
            ...state,
            weather: action.weather,
            isShow: false,
            currentUrl: action.currentUrl
        }
    },
}



const initialState  = {
    countryes: [
        {name: 'deli', url: '/deli'},
        {name: 'moscow', url: '/moscow'},
        {name: 'yerevan', url: '/yerevan'},
        {name: 'chicago', url: '/chikago'},
        {name: 'boston', url: '/boston'},
        {name: 'austin', url: '/austin'},
    ] as Array<CountryType>,
    weather: [] as Array<any>,
    isShow: true,
    currentName: null,
    currentUrl: null
}


const countryReducers = (state = initialState, action: any): InitialStateCountryType => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}
// @ts-ignore
export default countryReducers