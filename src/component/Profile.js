import { Card, Avatar, Row } from 'antd';
import React from 'react';

class Profile extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (
            <Card style={{ width: "100%", minWidth: "200px", height: "150px", display: "inline-block" }}>


                <Row style={{justifyContent:"center", display:"flex", textAlign:"center"}}>
                        <Avatar size={80} src={currentUser.avatarURL} />

                </Row>


                <Row style={{justifyContent:"center", display:"flex", textAlign:"center"}}>{currentUser.name}</Row>
            </Card>
        );
    }
}
export default Profile;