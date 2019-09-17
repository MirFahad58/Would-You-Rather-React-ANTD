import { Tabs, Card, Spin } from 'antd';
import React from 'react'
import { connect } from 'react-redux'
import QuestionsMiddle from '../store/Middleware/QuestionsMiddleware';
import UnAnsweredQuestion from './UnAnsweredQuestion';
const { TabPane } = Tabs;

class QuestionBoard extends React.Component {
	
	render() {
		const {unAnsweredQuestions,answeredQuestions,isLoading}= this.props;
		return (
			<Card >
				<Tabs tabPosition="top" >
					<TabPane tab={<div style={{width:"240px", textAlign:"center"}}>Unanswered</div>} key="1" >
						{isLoading ? <Spin tip="Loading..." spinning={isLoading}><Card></Card></Spin> : <UnAnsweredQuestion questions={unAnsweredQuestions}type="unAnsd"/>}
					</TabPane>
					<TabPane tab={<div style={{width:"240px", textAlign:"center"}}>Answered</div>}key="2" >
						<UnAnsweredQuestion questions={answeredQuestions} type="ansd"/>
					</TabPane>
				</Tabs></Card>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		isLoading: state.questionReducer.isLoading,
		unAnsweredQuestions: Object.values(state.questionReducer.questions).filter(q =>
            !state.userReducer.currentUser.answers.hasOwnProperty(q.id)
		).sort((a, b) => b.timestamp - a.timestamp),
		answeredQuestions: Object.values(state.questionReducer.questions).filter(q =>
            state.userReducer.currentUser.answers.hasOwnProperty(q.id)
        ).sort((a, b) => b.timestamp - a.timestamp),
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loadQuestions: (data) => {
			return dispatch(QuestionsMiddle.getQuestions(data))
		},
		

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionBoard);