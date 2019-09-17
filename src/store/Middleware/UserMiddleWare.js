import UserAction from "../actions/userActions";
import { _getUsers } from "../../utils/_DATA";

class UserMiddleware {
    static getUsers = (data) => {
        return dispatch => {
            dispatch(UserAction.getAllUsers(data));
            _getUsers()
            .then(data => dispatch(UserAction.getAllUsersSuccessful(data)))
            .catch(err=>dispatch(UserAction.getAllUsersFailed(err)))
        }
    }


    static saveCurrentUser = (data)=>{
        return dispatch=>{
            dispatch(UserAction.setCurrentUser(data))
        }
    }
    static logout = (data)=>{
        return dispatch=>{
            dispatch(UserAction.logout(data));
        }
    }
}
export default UserMiddleware;