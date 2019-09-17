import React from 'react'
import { Col, Row, Button, Card, Progress, Badge } from 'antd'
import Text from 'antd/lib/typography/Text';
import { Link } from 'react-router-dom';
function ResultCard(props) {
    const { currentQuestion, currentUser } = props;
    console.log(currentUser.answers[currentQuestion.id]);
    return (
        <Col span={18} xs={24} sm={24} md={8} lg={12} xl={14} xxl={18}>
            <Row style={{ textAlign: "center" }}>
                <Text style={{ fontSize: "20px" }}>Would You Rather ??</Text>
                <br />
            </Row>
            <Row >

                <Card  >
                    <Col span={22}>
                        {currentQuestion.optionOne.text}
                        <Progress
                            percent={Math.round(((currentQuestion.optionOne.votes.length * 100) / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length)) * 100) / 100}
                            size="large" />
                        <h2>{currentQuestion.optionOne.votes.length} out of {currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length} votes</h2>
                    </Col>
                    <Col span={2} >
                        {currentUser.answers[currentQuestion.id] === "optionOne" && <Badge count="your vote" style={{
                            backgroundColor: '#52c41a',
                            height: "20px",
                            width: "80px",
                            borderRadius: "20px"
                        }} />}


                    </Col>
                </Card>

            </Row>

            <Row>

                <Card style={{ marginTop: "10px" }}>
                    <Col span={22}>
                        {currentQuestion.optionTwo.text}
                        <Progress
                            percent={
                                Math.round(((currentQuestion.optionTwo.votes.length * 100) / (currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length)) * 100) / 100}

                            size="large" />
                        <h2>{currentQuestion.optionTwo.votes.length} out of {currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length} votes</h2>
                    </Col>
                    <Col span={2} >
                        {currentUser.answers[currentQuestion.id] === "optionTwo" && <Badge count="your vote" style={{
                            backgroundColor: '#52c41a',
                            height: "20px",
                            width: "80px",
                            borderRadius: "20px"
                        }} />}


                    </Col>
                </Card>
            </Row>
            <Row>
                <Link to="/home"><Button
                    type="primary"
                    style={{
                        width: "100%",
                        marginTop: "10%",
                    }}
                >

                    Back
                 </Button></Link>
            </Row>
        </Col >
    )
}
export default ResultCard;