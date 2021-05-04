import React, {createContext, useReducer} from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// init state

const initialState = {
    users:[ {
        name:'alex',
        _id:'asdsaddsas'
    }],
    loading: false
}

//create context
export const GlobalContext = createContext(initialState);


//Provider Component
 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    const fetchData = async () => {
        showLoader();
        const res = await axios.get(`http://178.128.196.163:3000/api/records`)
    
        //console.log('fetch',res)
        dispatch({
            type: 'LOAD_DATA',
            payload: res.data
        })
    }

    const showLoader = ()=> {
        dispatch({
            type: 'SHOW_LOADER',
        })
    }
    const removeUser = async (_id) => {
        const res = await axios.delete(`http://178.128.196.163:3000/api/records/:${_id}`)
        console.log('delete',res)
        dispatch({
            type: 'REMOVE_USER',
            payload: _id
        })
    }
    
            
    
    const  addUser = async (user) => {
        const item = {
            user: user.name, 
            id: user._id
        }
        try{
            const res = await axios.put(`http://178.128.196.163:3000/api/records`, item)
            console.log('res pos',res)
        }
        catch (e){
                throw new Error(e.massage)
            }
        
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const editUser = async (_id) => {
        try{
            const res = await axios.post(`http://178.128.196.163:3000/api/records/:${_id}`)
            console.log('edit',res)
        }
        catch (e){
                throw new Error(e.massage)
            } 
        dispatch({
            type: 'EDIT_USER',
            payload: _id
        })
    }
 

    return (
        <GlobalContext.Provider  value = {{
            users: state.users,
            loading: state.loading,
            removeUser,
            addUser,
            editUser,
            showLoader,
            fetchData,
           
        }}>
            {children}
        </GlobalContext.Provider>
        )
}