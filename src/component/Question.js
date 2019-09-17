import React, { Component } from "react";
import { Card, Avatar, Divider, Col, Row, Layout } from "antd";
import NavBar from "./NavBar";
import Profile from "./Profile";
import { connect } from 'react-redux'
import QuestionsMiddle from "../store/Middleware/QuestionsMiddleware";
import ShowQuestion from "./ShowQuestion";
import ResultCard from "./ResultCard";
const { Content } = Layout
class Question extends Component {
    state = {
        value: null,
        isDisabled: true,
    }
    onChange = (evt) => {
        this.setState({
            value: evt.target.value,
            isDisabled: false
        });
    }
    Submit = (evt) => {
        const { value } = this.state;
        const { currentUser, match } = this.props
        this.props.saveQuestionAnswer({
            authedUser: currentUser.id,
            qid: match.params.questionId,
            answer: value
        });
    }
    render() {
        const { isDisabled } = this.state
        const { currentUser, match, users, questions } = this.props
        const { questionId } = match.params;
        const currentQuestion = questions[questionId];
        const answered = currentUser.answers.hasOwnProperty(currentQuestion.id)
        return (
            <Layout>
                <Content style={{ width: "100vw", minHeight: "80vh", marginTop: "20vh" }}>
                    <div style={{ padding: '15px' }}>
                        <Row >
                            <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} style={{ padding: 10 }}>
                                <Profile currentUser={currentUser} />
                            </Col>
                            <Col span={18} xs={24} sm={24} md={18} lg={18} xl={12} xxl={12} style={{ padding: 10 }}>
                                <Card
                                    title={
                                        currentQuestion.author + " asks:"
                                    }
                                    headStyle={
                                        {
                                            background: "#bae7ff",
                                            MozBorderRadiusTopleft: "10px",
                                            MozBorderRadiusTopright: "10px",
                                        }} >
                                    <Row >
                                        <Col
                                            span={6}
                                            xs={24}
                                            sm={24}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}>
                                            <Avatar
                                                size={100}
                                                src={users[currentQuestion.author].avatarURL}
                                                alt="no image found"
                                            />
                                            <Divider
                                                style={{ height: "100px" }}
                                                type="vertical" />
                                        </Col>
                                        {answered ? <ResultCard
                                            onChange={this.onChange}
                                            Submit={this.Submit}
                                            currentUser={currentUser}
                                            currentQuestion={currentQuestion}
                                        /> : <ShowQuestion
                                                onChange={this.onChange}
                                                Submit={this.Submit}
                                                isDisabled={isDisabled}
                                                currentQuestion={currentQuestion}

                                            />
                                        }
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser,
        questions: state.questionReducer.questions,
        unAnsweredQuestions: Object.values(state.questionReducer.questions).filter(q =>
            !state.userReducer.currentUser.answers.hasOwnProperty(q.id)
        ).sort((a, b) => b.timestamp - a.timestamp),
        users: state.userReducer.users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveQuestionAnswer: (data) => {
            return dispatch(QuestionsMiddle.saveQuestionAnswer(data))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question); 