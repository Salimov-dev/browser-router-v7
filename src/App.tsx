import React, { useState } from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SmileOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from "antd";
import { Link, useLocation, useNavigate } from "react-router";
import AppRoutes from "./routes/routes";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (to: string) => {
    navigate(to);
  };

  const handleLogout = () => {
    console.log("handleLogout");
  };

  const getSelectedKey = () => {
    switch (location.pathname) {
      case "/":
        return ["1"];
      case "/orders":
        return ["2"];
      case "/delivery":
        return ["3"];
      default:
        // return ["1"]; // всегда горит главная
        return [];
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/my-profile/es324-312gfd-432gf-gfdsas">Мой профиль</Link>
    },
    {
      key: "2",
      label: "Настройки",
      onClick: () => navigate("/settings"),
      icon: <SmileOutlined />
    },
    {
      key: "3",
      label: "Выход",
      onClick: handleLogout
    }
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={getSelectedKey()}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Главная",
              onClick: () => navigate("/")
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Заказы",
              // onClick: () => handleChangePage("/orders")
              // label: <Link to="/orders">Заказы</Link>
              onClick: () => navigate("/orders?sort=desc")
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Доставка",
              onClick: () => navigate("/delivery")
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            width: "100%",
            display: "flex",
            padding: 0,
            background: colorBgContainer,
            justifyContent: "space-between",
            paddingRight: "20px"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64
            }}
          />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Меню
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
