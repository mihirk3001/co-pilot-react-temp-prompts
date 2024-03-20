import React from "react";
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
    name: "John Brown",
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

{
    (
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
    )
}

/*
add the following functionality to the table:
-the checkbox in columns header row should select all the checkboxes in the column 
*/
const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Sider
          style={{
            backgroundColor: "#e3e4e6",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<BankOutlined />}>
              Transactions
            </Menu.Item>
            <Menu.Item key="3" icon={<ClockCircleOutlined />}>
              History
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Button type="primary">Create</Button>
          <Table dataSource={data}>
            <Column
              title={<Checkbox />}
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


