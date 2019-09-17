import React from 'react';

import { Spin, Card } from 'antd';
class Loading extends React.Component {
    render() {
        return (
            <Card style={{
                width: "30%", marginTop: 16, display: "flex", justifyContent: "center",
                alignContent: "center"
                , height: "50vh"
            }} >
                <Spin/>
            </Card>
        );
    }
}


export default Loading;