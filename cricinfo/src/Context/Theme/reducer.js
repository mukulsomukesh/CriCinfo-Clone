// reducer related to auth state;

export const reducer =(state, action)=>{
    switch(action.type){
        case "DAY_THEME":{
            return {
                ...state,
                theme:action.payload
            };
        }
        case "NIGHT_THEME":{
            return {
                ...state,
                theme:action.payload
            };
        }
    }
}
