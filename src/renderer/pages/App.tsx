import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import './App.css';
import store from '../../store/store';
import R6About from '../components/R6About';
import R6Settings from '../components/R6Settings';
import { isSet } from 'util/types';
import {
  R6SettingButton,
  R6AboutButton,
  R6Find,
  R6PatternButton,
} from '../components/R6NavButton';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [val, setVal] = useState('');
  const [isAbout, setISAbout] = useState(false);
  const [isSettings, setISSettings] = useState(false);

  const handleBtnClk = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

    const output = store.getState().grep.output;
    setVal(output);
  };
  const handleBtnClr = () => {
    setVal('');
  };

  const handleBtnAbout = () => {
    isAbout === true ? setISAbout(false) : setISAbout(true);
  };

  const handleBtnSettings = () => {
    isSettings === true ? setISSettings(false) : setISSettings(true);
  };

  return (
    <Layout>
      <R6About isOpen={isAbout} handleOk={handleBtnAbout} />
      <R6Settings isOpen={isSettings} handleOk={handleBtnSettings} />

      <Sider
        width={100}
        style={{
          overflow: 'auto',
          height: '100vh',
          // position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="sider-body">
          <div className='sider-body-top-btn'>
            <div className='btn-item'>
            <R6Find onClick={handleBtnClk} />
            </div>
            <div className='btn-item'>
            <R6PatternButton onClick={handleBtnClr} />
            </div>
          </div>
          <div className='sider-body-bottom-btn'>
            <div className='btn-item'>
            <R6SettingButton onClick={handleBtnSettings} />
            </div>
            <div className='btn-item'>
            <R6AboutButton onClick={handleBtnAbout} />
            </div>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content {val}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
