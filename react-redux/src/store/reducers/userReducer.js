
const initalState = { username: "Dave", phone: "09XXXXX" }

export default (state = initalState, action) => {
    switch (action.type) {
        case 'GETUSERS': return {
            ...state, users: action.payload
        };
    
        default: return state
    }
}