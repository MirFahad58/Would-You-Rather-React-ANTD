import React, { Component } from "react";
import { Card, Col, Row, Layout, Form, Input, Button, } from "antd";
import Profile from "./Profile";
import { connect } from 'react-redux'

import QuestionsMiddle from "../store/Middleware/QuestionsMiddleware";
const { Content } = Layout
class AddQuestion extends Component {
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
    handleSubmit = e => {
        e.preventDefault();
        //const author = this.props.currentUser.id
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.saveQuestion({
                    author: this.props.currentUser.id,
                    optionOneText: values.optionOne,
                    optionTwoText: values.optionTwo
                })
                this.props.history.push({
                    pathname: "/home",
                })

            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { currentUser } = this.props
        return (
            <Layout>
                <Content style={{ width: "100vw", minHeight: "80vh", marginTop: "20vh" }}>
                    <div style={{ padding: '15px' }}>
                        <Row >
                            <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} style={{ padding: 10 }}>
                                <Profile currentUser={currentUser} />
                            </Col>
                            <Col span={18} xs={24} sm={24} md={18} lg={18} xl={12} xxl={12} style={{ padding: 10 }}>
                                <Card title="Create a New Poll"
                                    headStyle={{
                                        background: "#bae7ff",
                                        MozBorderRadiusTopleft: "10px",
                                        MozBorderRadiusTopright: "10px",
                                    }}
                                >
                                    <Row>
                                        Complete the question:
                                    </Row>
                                    <Row>
                                        <h1>Would you rather...</h1>
                                    </Row>
                                    <Row>
                                        <Form onSubmit={this.handleSubmit} className="login-form">
                                            <Form.Item >
                                                {getFieldDecorator('optionOne', {
                                                    rules: [{ required: true, message: 'Please input your Option one!' }],
                                                })(
                                                    <Input
                                                        placeholder="Add Option one"
                                                    />,
                                                )}
                                            </Form.Item>
                                            <Row style={{ textAlign: "center" }}>OR</Row>
                                            <Form.Item style={{ marginTop: "20px" }}>
                                                {getFieldDecorator('optionTwo', {
                                                    rules: [{ required: true, message: 'Please input your two!' }],
                                                })(
                                                    <Input
                                                        placeholder="Add option two"
                                                    />,
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    style={{ width: "100%" }}
                                                >
                                                    Add Question
                                            </Button>

                                            </Form.Item>
                                        </Form>
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
        saveQuestion: (data) => {
            return dispatch(QuestionsMiddle.saveQuestion(data))
        },
    }
}
const AddQuestionForm = Form.create({ name: 'normal_login' })(AddQuestion);

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionForm); 