class QuestionAction {
    static GET_QUESTIONS = "GET_QUESTIONS"
    static GET_QUESTIONS_SUCCESSFULL = "GET_QUESTIONS_SUCCESSFULL"
    static GET_QUESTIONS_FAILED = "GET_QUESTIONS_FAILED"

    static SAVE_QUESTION_ANSWER="SAVE_QUESTION_ANSWER"
    static SAVE_QUESTION_ANSWER_SUCCESSFULL ="SAVE_QUESTION_ANSWER_SUCCESSFULL"
    static SAVE_QUESTION_ANSWER_FAILED ="SAVE_QUESTION_ANSWER_FAILED"


    static SAVE_QUESTION="SAVE_QUESTION"
    static SAVE_QUESTION_SUCCESSFULL ="SAVE_QUESTION_SUCCESSFULL"
    static SAVE_QUESTION_FAILED ="SAVE_QUESTION_FAILED"



    static getQuestions = (data) => {
        return {
            type: this.GET_QUESTIONS,
            data: data
        }
    }
    static getQuestionsSuccessfull = (data) => {
        return {
            type: this.GET_QUESTIONS_SUCCESSFULL,
            data: data,
            success: true,
        }
    }
    static getQuestionsFailed = (data) => {
        return {
            type: this.GET_QUESTIONS_FAILED,
            data: data,
            success: false
        }
    }


    static saveQuestionAnswer = (data)=>{
        return {
            type:this.SAVE_QUESTION_ANSWER,
            data:data,
        }
    }
    static saveQuestionAnswerSuccessfull = (data)=>{
        return {
            type:this.SAVE_QUESTION_ANSWER_SUCCESSFULL,
            data:data,
            success:true,
        }
    }
    static saveQuestionAnswerFailed = (data)=>{
        return {
            type:this.SAVE_QUESTION_ANSWER_FAILED,
            data:data,
            success:false,
        }
    }


    static saveQuestion = (data)=>{
        return {
            type:this.SAVE_QUESTION,
            data:data,
        }
    }
    static saveQuestionSuccessfull = (data)=>{
        return {
            type:this.SAVE_QUESTION_SUCCESSFULL,
            data,
            success:true,
        }
    }
    static saveQuestionFailed = (data)=>{
        return {
            type:this.SAVE_QUESTION_FAILED,
            data:data,
            success:false,
        }
    }
}
export default QuestionAction;