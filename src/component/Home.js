import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Profile from './Profile';
import NavBar from './NavBar';
import { connect } from 'react-redux'
import QuestionBoard from './QuestionsBoard';
const { Content } = Layout;

class Home extends Component {
    componentWillMount = () => {
        console.log("user", this.props.currentUser);
    }
    render() {
        const { currentUser } = this.props;
        console.log("user in ender", this.props.currentUser);
        return (
            <Layout>
                <Content style={{ width: "100vw", minHeight: "80vh",marginTop:"20vh" }}>
                    <div style={{  padding: '15px' }}>
                        <Row >
                            <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} style={{padding:10}}>
                                <Profile currentUser={currentUser} />
                            </Col>
                            <Col span={18} xs={24} sm={24} md={18} lg={18} xl={12} xxl={12} style={{padding:10}}>
                                <QuestionBoard />
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
    }
}
export default connect(mapStateToProps, null)(Home);