import React, { Component } from 'react'
import { Layout, Card, Avatar, Select, Button ,Spin} from 'antd';
import { connect } from 'react-redux'
import UserMiddleware from '../store/Middleware/UserMiddleWare';
import QuestionsMiddle from '../store/Middleware/QuestionsMiddleware';
const { Content } = Layout;
class Login extends Component {
    state = {
        isDisabled: true,
        currentUser: null,
    }
    componentDidMount() {
        this.props.loadUsers();
        this.props.loadQuestions();
       
    }
    submit = (evt) => {
        evt.preventDefault();
        const { currentUser } = this.state
        this.props.saveCurrentUser(currentUser);
        this.props.history.push({
            pathname: '/home',
          })
    }
    render() {
        const { isDisabled } = this.state
        const { users,isLoading } = this.props
        users && console.log(Object.keys(users));
        return (
            <Layout>              
                    <Content style={{ display: "flex", justifyContent: "center", width: "100vw", height: "100vh" }}>                       
                        <Card className=" login-card" >
                            <div style={{
                                display: "flex", flexDirection: "column", justifyContent: "center",
                                alignContent: "center"
                                ,
                            }}>
                                <img className="App-logo" src={require('../images/logo.png')} alt="not found" />
                            </div>
                            <Spin tip="Loading..." spinning={isLoading}>
                            <Select
                                showSearch
                                size="large"
                                style={{ width: "250px", marginTop: "30px" }}
                                placeholder="Select a User"
                                optionFilterProp="children"
                                onChange={(user) => {
                                    return this.setState({
                                        isDisabled: false,
                                        currentUser: user
                                    })
                                }
                                }
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {users &&
                                    Object.keys(users).map(user => (
                                        <Select.Option value={JSON.stringify(users[user])}>
                                            <Avatar src={users[user].avatarURL} />{users[user].name}</Select.Option>
                                    ))}
                            </Select>

                            <Button
                                disabled={isDisabled}
                                style={{
                                    backgroundColor: "#ffdb4d",
                                    width: "100%",
                                    marginTop: "10%",
                                    disabled: true,
                                    cursor: "no-drag"
                                }}
                                onClick={(evt) => this.submit(evt)}
                            >
                                Login
                            </Button>
                            </Spin>
                        </Card>
                        
                    </Content>
            </Layout>
        )
    }
}

const mapStateToPeops = (state) => {
    return {
        isLoading: state.userReducer.isLoading,
        users: state.userReducer.users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: (data) => {
            return dispatch(UserMiddleware.getUsers(data))
        },
        saveCurrentUser: (data) => {
            return dispatch(UserMiddleware.saveCurrentUser(data))
        },
        loadQuestions: (data) => {
			return dispatch(QuestionsMiddle.getQuestions(data))
		}
      
    }
}
export default connect(mapStateToPeops, mapDispatchToProps)(Login)