import QuestionAction from "../actions/questionAction";

function questionReducer(state = {
    isLoading: false,
    success: false,
    isError: false,
    edit: false,
    questions: null,
}, action) {
    switch (action.type) {
        case QuestionAction.GET_QUESTIONS:
            return {
                ...state,
                isLoading: true,
            }
        case QuestionAction.GET_QUESTIONS_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                questions: action.data,
                success: true,
            }
        case QuestionAction.GET_QUESTIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
            }


        case QuestionAction.SAVE_QUESTION_ANSWER:
            return {
                ...state,
                isLoading: true,
            }
        case QuestionAction.SAVE_QUESTION_ANSWER_SUCCESSFULL:
            const { qid, answer, authedUser } = action.data
            return {
                ...state,
                isLoading: false,
                questions: {
                    ...state.questions,
                    [qid]: {
                        ...state.questions[qid],
                        [answer]: {
                            ...state.questions[qid][answer],
                            votes: [...state.questions[qid][answer].votes, authedUser]
                        }
                    }
                },


            }
        case QuestionAction.SAVE_QUESTION_ANSWER_FAILED:
            return {
                ...state,
                success: action.success,
                isLoading: false,
            }


        case QuestionAction.SAVE_QUESTION:
            return {
                ...state,
                isLoading: true,
            }
        case QuestionAction.SAVE_QUESTION_SUCCESSFULL:
             
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.data.id]:action.data
                },
                success: action.success,
                isLoading: false,
            }
        case QuestionAction.SAVE_QUESTION_FAILED:
            return {
                ...state,
                success: action.success,
                isLoading: false,
            }
        default:
            return state
    }

}

export default questionReducer;