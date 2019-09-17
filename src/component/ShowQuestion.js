import React from 'react'
import { Col, Row, Radio,Button } from 'antd'
import Text from 'antd/lib/typography/Text';
function ShowQuestion(props) {
    const { isDisabled, onChange, currentQuestion, Submit } = props;
    return (
        <Col span={18} xs={24} sm={24} md={8} lg={12} xl={14} xxl={18}>
            <Row style={{ textAlign: "center" }}>
                <Text style={{ fontSize: "20px" }}>Would You Rather ??</Text>
                <br />
            </Row>
            <Radio.Group
                name="radiogroup"
                onChange={(evt) => onChange(evt)} >
                <Row>
                    <Radio
                        value="optionOne">
                        {currentQuestion.optionOne.text}

                    </Radio>
                </Row>
                <Row>
                    <Radio
                        value="optionTwo">
                        {currentQuestion.optionTwo.text}
                    </Radio>
                </Row>

            </Radio.Group>
            <Row>
                <Button
                    type="primary"
                    disabled={isDisabled}
                    style={{
                        width: "100%",
                        marginTop: "10%",
                        disabled: true,
                        cursor: "no-drag"
                    }}
                    onClick={(evt) => Submit(evt)}>
                    Submit
                 </Button>
            </Row>
        </Col>
    )
}
export default ShowQuestion;