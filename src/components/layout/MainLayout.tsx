import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import { Outlet } from "react-router-dom";

const { Content, Footer, Header, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
  label : "Dashboard",
  },
  {
    key: "2",
  label : "Profile",
  },
  {
    key: "3",
  label : "User Management",
  children: [
    {
      key: "1",
    label : "Dashboard",
    },
    {
      key: "2",
    label : "Profile",
    },
  ]
  }
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
