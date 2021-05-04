
export default (state, action) => {
    switch(action.type) {
        case 'SHOW_LOADER': 
            return {
                ...state,
                loading:true
            }
        
        case 'LOAD_DATA':
            //console.log('load',action.payload)
            //console.log('state',state)
        
          
            return{
                
                users: action.payload, ...state.users,
                loading:false
                
                     
            }


        case 'REMOVE_USER': 
            return {
                users: state.users.filter(user => {
                    return user._id !== action.payload
                })
            }

        case 'ADD_USER':
            return{
                
                users: [action.payload, ...state.users]
            }

       
            

        case 'EDIT_USER':
            const updateUser = action.payload;

            const updateUsers = state.users.map(user => {
                if(user._id === updateUser._id) {
                    return updateUser
                }
                return user;
            })
            return{
                users: updateUsers
            }


        default:
            return state
    }
}