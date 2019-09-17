import { Component } from "react";

class ShowPoll extends Component {
    render() {
        return (
            <Layout>
                <Content style={{ width: "100vw", minHeight: "80vh", marginTop: "20vh" }}>
                    <div style={{ padding: '15px' }}>
                        <Row >
                            <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} style={{ padding: 10 }}>
                                <Profile currentUser={currentUser} />
                            </Col>
                            <Col span={18} xs={24} sm={24} md={18} lg={18} xl={12} xxl={12} style={{ padding: 10 }}>
                                <Card title={q.author + " asks:"} headStyle={{ background: "#bae7ff" }} style={{ borderRadius: "10px", marginTop: "10px" }}>
                                    <Row >
                                        <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                                            <Avatar size={100} src={users[q.author].avatarURL} alt="no image found" />
                                            <Divider style={{ height: "100px" }} type="vertical" />
                                        </Col>
                                        <Col span={18} xs={24} sm={24} md={8} lg={12} xl={14} xxl={18}>
                                            <Text style={{ fontSize: "20px" }}>Would You Rather ??</Text><br />
                                            <Text >{q.optionOne.text}</Text><br />
                                            <Text>OR</Text>

                                            <Row>
                                                {type == "unAnsd" ? <Button type="primary" style={{ width: "100%", marginTop: "20px" }}>
                                                    Answer Poll
                                </Button> : <Button type="primary" style={{ width: "100%", marginTop: "20px" }}>
                                                        View Poll Result
                                </Button>}
                                            </Row>
                                        </Col>
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