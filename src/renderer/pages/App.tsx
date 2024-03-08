import React from 'react';
import {
  AppstoreAddOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Empty, Layout, Menu, theme } from 'antd';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import R6NavButton from '../components/R6NavButton';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  SearchOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  InfoCircleOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Hello: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className=".sider"
        width={80}
        style={{
          width: 80,
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical"> R6finder </div>
        <R6NavButton />
        {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        /> */}
      </Sider>
      <Layout>
        <Content style={{ height: '100vh', margin: '3px' }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Empty />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
