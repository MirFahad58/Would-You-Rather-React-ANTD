import UserAction from "../actions/userActions";

function userReducer(state = {
    isLoading: false,
    success: false,
    isError: false,
    users: null,
    edit: false,
    currentUser: null,
}, action) {
    switch (action.type) {
        case UserAction.GET_ALL_USERS:
            return {
                ...state,
                isLoading: true,
            }
        case UserAction.GET_ALL_USERS_SUCCESSFUL:
            return {
                ...state,
                users: action.data,
                success: action.success,
                isLoading: false,
            }
        case UserAction.GET_ALL_USERS_FAILED:
            return {
                ...state,
                isError: true,
            }
        case UserAction.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.data
            }
        case UserAction.SET_QUETIONS_ANSWER:
            const { qid, answer } = action.data
            return {
                ...state,

                currentUser: {
                    ...state.currentUser,
                    answers: {
                        ...state.currentUser.answers,
                        [qid]: answer,
                    }

                }
            }
        case UserAction.LOGOUT:
            return{
                ...state,
                currentUser:null,
            }
        default:
            return state
    }
}
export default userReducer;