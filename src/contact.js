import React from "react";
/*task: to create a contact form for phone screen*/
/*components to be used:
- Form
- Input
- Button
- Select

import the needed components from antd
*/
import { Form, Input, Button, Select, Row, Col } from 'antd';
/*icons to be used:
- appstoreoutlined
- shopoutlined
*/ 
import { AppstoreOutlined, ShopOutlined, addoutline, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const Contact = () => {
    return (
        <div>
            {/* <h1>Contact</h1> */}

            {/* task: to create a contact form for phone screen

            page layout specifications:
            - height: 100vh
            - text input for "Organization Name"
            - Select input for "Label", placeholder: "Add Labels"
            - Text input for "Phone" and Select input for "Phone Type"
            - "Phone" and "Phone Type" should be in the same row
            - Text input for "Email" and Select input for "Email Type"
            - "Email" and "Email Type" should be in the same row
            - Select input for "Owner", placeholder: "Select Owner"
            - Select input for "Visible To", placeholder: "Select Visible To"
            - save and cancel buttons should be at the bottom of the form
            - Save button background color: #347545
            - Save button text color: #ffffff
            - Cancel button background color: #ffffff
            - Cancel button text color: #000000

            page components specifications:
            - Label text size: 12px
            - Input Label text color: #000000
            - Form.Item padding x-direction: 10px
            - margin between form items: 0px
            - Input padding: 0px
            - Select padding: 0px
            - Select should have placeholder text instead of label
            - Related input and select should have spacing of 4px between them
            - save and cancel buttons should be in the same row
            - save and cancel buttons should be in same column with columns span 6
            - Save and cancel buttons row background color: #ebeded
            - Save and cancel buttons position: {bottom:0, right:0}
            - Save and cancel row padding y-direction: 6px
            - save and cancel buttons row should be fixed at the bottom of the page{bottom: 0}
            - save and cancel buttons row should have width: 100%
            */}
            <Form
                layout="vertical"
                style={{ height: "100vh" }}
            >
                <Form.Item
                    label="Organization Name"
                    labelAlign="left"
                    labelCol={{ span: 24 }}
                    style={{ padding: "0px 10px", margin: "0px" }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Label"
                    labelAlign="left"
                    labelCol={{ span: 24 }}
                    style={{ padding: "0px 10px", margin: "0px" }}
                >
                    <Select
                        placeholder="Add Labels"
                    />
                </Form.Item>

                <Row gutter={4}>
                    <Col span={12}>
                        <Form.Item
                            label="Phone"
                            labelAlign="left"
                            labelCol={{ span: 24 }}
                            style={{ padding: "0px 10px", margin: "0px" }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Phone Type"
                            labelAlign="left"
                            labelCol={{ span: 24 }}
                            style={{ padding: "0px 10px", margin: "0px" }}
                        >
                            <Select
                                placeholder="Phone Type"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={4}>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            labelAlign="left"
                            labelCol={{ span: 24 }}
                            style={{ padding: "0px 10px", margin: "0px" }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email Type"
                            labelAlign="left"
                            labelCol={{ span: 24 }}
                            style={{ padding: "0px 10px", margin: "0px" }}
                        >
                            <Select
                                placeholder="Email Type"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label="Owner"
                    labelAlign="left"
                    labelCol={{ span: 24 }}
                    style={{ padding: "0px 10px", margin: "0px" }}
                >
                    <Select
                        placeholder="Select Owner"
                    />
                </Form.Item>

                <Form.Item
                    label="Visible To"
                    Align="left"
                    labelCol={{ span: 24 }}
                    style={{ padding: "0px 10px", margin: "0px" }}
                >
                    <Select
                        placeholder="Select Visible To"
                    />
                </Form.Item>

                <Row style={{ backgroundColor: "#ebeded", padding: "6px 0px", position: "fixed", bottom: 0, width: "100%" }}>
                    <Col span={6}>
                        <Button
                            style={{ backgroundColor: "#347545", color: "#ffffff", width: "100%" }}
                        >
                            Save
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button
                            style={{ backgroundColor: "#ffffff", color: "#000000", width: "100%" }}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            
            
            

        </div>
    );
}

export default Contact;
