const initialstate = {
    anyName: []
}

const Reducer = (state = initialstate , action) => {

    console.log(action)
    switch(action.type){
       case "Added": 
       return {
           anyName :  [...state.anyName,action.payload]
        } 
        case "Delete_Result":
            state.anyName.pop()
            // const updateArray = state.anyName.filter(result => result.id !== action.resultElId)
            return{
                anyName : [...state.anyName]
            //  anyName: [state.anyName.pop()],
                // anyName: updateArray
            }
    }
    return state;
    
}
export default Reducer;