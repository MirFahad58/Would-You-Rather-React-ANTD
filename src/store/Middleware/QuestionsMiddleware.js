import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../../utils/_DATA";
import QuestionAction from "../actions/questionAction";
import UserAction from "../actions/userActions";

class QuestionsMiddle {
    static getQuestions = (data) => {
        return dispatch => {
            dispatch(QuestionAction.getQuestions(data));
            _getQuestions().then(
                (data) => dispatch(QuestionAction.getQuestionsSuccessfull(data))).catch(
                    (err) => dispatch(QuestionAction.getQuestionsFailed(err)))
        }
    }
    static saveQuestionAnswer = (data) => {
        return dispatch => {
            dispatch(QuestionAction.saveQuestionAnswer(data));
            _saveQuestionAnswer(data).then((res) => {
                dispatch(UserAction.setQuestionsAnswerToUser(data))
                dispatch(QuestionAction.saveQuestionAnswerSuccessfull(data))
            }).catch(err => QuestionAction.saveQuestionAnswerFailed(err))
        }
    }
    static saveQuestion = (data) => {
        return dispatch => {
            dispatch(QuestionAction.saveQuestion(data));
            _saveQuestion(data).then((res) => {
                    dispatch(QuestionAction.saveQuestionSuccessfull(res))
                }).catch((err) => dispatch(QuestionAction.saveQuestionFailed(err)))
        }
    }
}
export default QuestionsMiddle;