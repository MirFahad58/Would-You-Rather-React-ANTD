import React from 'react'
import { connect } from 'react-redux'
import { Card, Avatar, Divider, Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom'
import Text from 'antd/lib/typography/Text';
function UnAnsweredQuestion(props) {
    const { questions, users, type } = props;
    if (questions.length > 0) {
        return (
            questions.map(q => <Card title={q.author + " asks:"} headStyle={{ background: "#bae7ff", MozBorderRadiusTopleft: "10px", MozBorderRadiusTopright: "10px", }} style={{ marginTop: "10px" }}>
                <Row >
                    <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                        <Avatar size={100} src={users[q.author].avatarURL} alt="no image found" />
                        <Divider style={{ height: "100px" }} type="vertical" />
                    </Col>
                    <Col span={18} xs={24} sm={24} md={8} lg={12} xl={14} xxl={18}>
                        <Row style={{ textAlign: "center" }}><Text style={{ fontSize: "20px" }}>Would You Rather ??</Text><br /></Row>
                        <Row style={{ textAlign: "center" }}><Text >{q.optionOne.text}</Text><br /></Row>
                        <Row style={{ textAlign: "center" }}><Text>OR</Text></Row>

                        <Row>
                            {type === "unAnsd" ? <Link to={`/question/${q.id}`}><Button type="primary" style={{ width: "100%", marginTop: "20px" }}>
                                Answer Poll
                                </Button> </Link> : <Link to={`/question/${q.id}`}><Button type="primary" style={{ width: "100%", marginTop: "20px" }}>
                                    View Poll Result
                                </Button></Link>}
                        </Row>
                    </Col>
                </Row>
            </Card>))
    }
    return <h1>Nothing to show</h1>

}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users,

    }
}
export default connect(mapStateToProps, null)(UnAnsweredQuestion);