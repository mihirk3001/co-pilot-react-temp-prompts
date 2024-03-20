import React from "react";
/* task: create a dashboard page layout
components to be used:
- Layout
- Menu
- Sider
- Table
- Content
- Button
import the necessary components from antd
*/

import { Layout, Menu, Table, Checkbox, Button } from "antd";
import {
  UserOutlined,
  BankOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const { Column } = Table;

const data = [
  {
    key: "1",
    name: "John Brownns",
    label: "New",
    address: "New York No. 1 Lake Park",
    people: 2,
  },
  {
    key: "2",
    name: "Jim Green",
    label: "Replied",
    address: "London No. 1 Lake Park",
    people: 3,
  },
  {
    key: "3",
    name: "Joe Black",
    label: "Approved",
    address: "Sidney No. 1 Lake Park",
    people: 4,
  },
];

const Dashboard = () => {
  return (
    <div>
      {/* 
      page layout specifications:
      -sider on the left side
      -table on the right side
      -a button on top of the table
      page layout notes:
      -adequete spacing between the components
      components specifications:
      1. sider:
      - background color: #e3e4e6
      - min height: 100vh
      - min width: 200px
      - width should be responsive
      - 3 sider menu items: People, organizations, contact timeline
      - side menu items should have an icon relevant to the menu item
      - sider menu items background color: #e3e4e6
      2. table:
        - background color: #ffffff
        - each column and row should have a border
        - height should be according to the number of entries in the table
        - should be inside the content
        - height of content should be 100vh
        - background color of content: #ffffff
        - width should be responsive
        - width should be equal to 100% of content
        - table should have 5 columns: checkbox, name, label, address, people
        - checkbox should be in the first column
        - checkbox in the column name row should be a select all checkbox
      3. button:
        - background color: #2fa866
        - color: #ffffff
        - text: "Organization"
*/}
        <Layout>
            <Sider
            style={{
                minHeight: "100vh",
                width: "200px",
                background: "#e3e4e6",
            }}
            >
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{
                background: "#e3e4e6",
                }}
            >
                <Menu.Item key="1" icon={<UserOutlined />}>
                People
                </Menu.Item>
                <Menu.Item key="2" icon={<BankOutlined />}>
                Organizations
                </Menu.Item>
                <Menu.Item key="3" icon={<ClockCircleOutlined />}>
                Contact Timeline
                </Menu.Item>
            </Menu>
            </Sider>
            <Content
            style={{
                background: "#ffffff",
                padding: "20px",
                height: "100vh",
                width: "100%",
            }}
            >
            <Button
                style={{
                background: "#2fa866",
                color: "#ffffff",
                marginBottom: "20px",
                }}
            >
                Organization
            </Button>
            <Table dataSource={data}>
                <Column
                title={
                    <Checkbox/>
                }
                dataIndex="name"
                key="name"
                render={(text) => <Checkbox />}
                />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Label" dataIndex="label" key="label" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column title="People" dataIndex="people" key="people" />
            </Table>
            </Content>
        </Layout>
        
        
        
        
    </div>
  );
};

export default Dashboard;
