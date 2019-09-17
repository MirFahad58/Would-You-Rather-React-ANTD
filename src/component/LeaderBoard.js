import React, { Component } from "react";
import { Card, Avatar, Col, Row, Layout, Badge } from "antd";
import Profile from "./Profile";
import { connect } from 'react-redux'
import QuestionsMiddle from "../store/Middleware/QuestionsMiddleware";
const { Content } = Layout
class LeaderBoard extends Component {
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

    returnSrc = (index) => {
        if (index === 0) {
            return <img width='50px' height='50px' src={require('../images/golden.svg')} alt='not found' />

        } else if (index === 1) {
            return <img width='50px' height='50px' src={require('../images/silver.svg')} alt='not found' />

        }
        return <img width='50px' height='50px' src={require('../images/bronze.svg')} alt='not found' />


    }
    render() {

        const { currentUser, userRanking } = this.props
        console.log(currentUser)
        return (
            <Layout>
                <Content style={{ width: "100vw", minHeight: "80vh", marginTop: "20vh" }}>
                    <div style={{ padding: '15px' }}>
                        <Row >
                            <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} style={{ padding: 10 }}>
                                <Profile currentUser={currentUser} />
                            </Col>
                            <Col span={18} xs={24} sm={24} md={18} lg={18} xl={12} xxl={12} style={{ padding: 10 }}>
                                <Card>
                                    {Object.values(userRanking).map((user, index) => {
                                        const { id, name, avatarURL, questionAsked, answered } = user
                                        console.log(this.returnSrc(index));
                                        return (<Card
                                            title={
                                                <Row>
                                                    <Col span={4}>{this.returnSrc(index)}</Col>
                                                    <Col span={16} offset={4}><p>{name}</p></Col>
                                                </Row>
                                            }
                                            headStyle={
                                                {
                                                    background: "#bae7ff",
                                                    MozBorderRadiusTopleft: "10px",
                                                    MozBorderRadiusTopright: "10px",
                                                }}
                                            style={{ marginTop: "10px" }} >
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
                                                        src={avatarURL}
                                                        alt="no image found"
                                                    />
                                                </Col>
                                                <Col span={18}
                                                >
                                                    <Card >
                                                        <Col span={16}

                                                        >
                                                            <Row><h2>Answered Questions {answered}</h2></Row>
                                                            <Row><h2>Created Questions {questionAsked}</h2></Row>
                                                        </Col>
                                                        <Col span={8}>
                                                            <Card

                                                                title={
                                                                    "Score"
                                                                }
                                                                style={{ textAlign: "center" }}
                                                            >
                                                                <Badge

                                                                    count={answered + questionAsked}
                                                                    style={{
                                                                        backgroundColor: '#52c41a',
                                                                    }}
                                                                />
                                                            </Card>
                                                        </Col>
                                                    </Card>
                                                </Col>

                                            </Row>
                                        </Card>
                                        )
                                    }
                                    )}

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
        userRanking: Object.values(state.userReducer.users).map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answered: Object.keys(user.answers).length,
            questionAsked: user.questions.length
        })).sort((a, b) => (b.answered + b.questionAsked) - (a.answered + a.questionAsked))
    }
}

export default connect(mapStateToProps, null)(LeaderBoard); 