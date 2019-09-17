class UserAction{
    static GET_ALL_USERS  = "GET_ALL_USERS";
    static GET_ALL_USERS_SUCCESSFUL  = "GET_ALL_USERS_SUCCESSFUL";
    static GET_ALL_USERS_FAILED  = "GET_ALL_USERS_FAILED";

    static SET_CURRENT_USER="SET_CURRENT_USER";
    static SET_QUETIONS_ANSWER="SET_QUETIONS_ANSWER";

    static LOGOUT ="LOGOUT";
    static getAllUsers =(data)=>{
        return{
            type:this.GET_ALL_USERS,
            data:data
        }
    }

    static getAllUsersSuccessful =(data)=>{
        return{
            type:this.GET_ALL_USERS_SUCCESSFUL,
            data:data,
            success:true,
        }
    }
    static getAllUsersFailed = (data)=>{
        return {
            type:this.GET_ALL_USERS_FAILED,
            data:data,
            success:false,
        }
    }

    //set current  user 
    static setCurrentUser = (data)=>{
        return{
            type:this.SET_CURRENT_USER,
            data:data && JSON.parse(data)
        }
    }

    //set question answer

    static setQuestionsAnswerToUser= (data)=>{
        return{
            type:this.SET_QUETIONS_ANSWER,
            data:data
        }
    }

    static logout=(data)=>{
        return {
            type:this.LOGOUT,
            data:data,
        }
    }
}
export default UserAction