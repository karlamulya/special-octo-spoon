import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


export const GithubProvider = ({children})=>{

    const intialState = {
        users :[],
        user: {},
        repos:[],
        loading : false
    }

    const [state, dispatch] = useReducer(githubReducer, intialState)
   

    //set loading

    const setLoading = () => dispatch({type: 'SET_LOADING'})

    //clear text
    const clearUsers = () => dispatch({type:'CLEAR_USER'})

    return <GithubContext.Provider value=
    {{
    // users:state.users,
    // loading:state.loading, 
    // user:state.user,
    // repos:state.repos,
    ...state,
    dispatch, 
    clearUsers}}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext