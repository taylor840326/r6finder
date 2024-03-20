import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Row, Button, Empty, Input, Layout, Menu, theme } from 'antd';
import './App.css';
import { isSet } from 'util/types';
import TextArea from 'antd/es/input/TextArea';
import store from '../../store/store';
import R6About from '../components/R6About';
import R6Settings from '../components/R6Settings';
import {
  R6SettingButton,
  R6AboutButton,
  R6Find,
  R6PatternButton,
} from '../components/R6NavButton';
import BaseSettings from './BaseSettings';
import ContentFooter from './ContentFooter';

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

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [val, setVal] = useState('');
  const [isAbout, setISAbout] = useState(false);
  const [isSettings, setISSettings] = useState(false);

  const handleBtnClk = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

    const { output } = store.getState().grep;
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
        width={72}
        style={{
          backgroundColor: '#1e1f22',
          overflow: 'auto',
          height: '100vh',
          // position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="sider-body">
          <div className="sider-body-top-btn">
            <div className="btn-item">
              <R6Find onClick={handleBtnClk} />
            </div>
            <div className="btn-item">
              <R6PatternButton onClick={handleBtnClr} />
            </div>
          </div>
          <div className="sider-body-bottom-btn">
            <div className="btn-item">
              <R6SettingButton onClick={handleBtnSettings} />
            </div>
            <div className="btn-item">
              <R6AboutButton onClick={handleBtnAbout} />
            </div>
          </div>
        </div>
      </Sider>
      {/* 右侧内容 */}
      <div className="content">
        {/* 头部控制区 */}
        <div className="fixed top">
          <BaseSettings />
        </div>
        {/* 文本显示区 */}
        <div className="fixed mid">
          {!val ? (
            <Empty style={{ height: '100%' }} />
          ) : (
            <TextArea
              showCount
              placeholder={val}
              value={val}
              style={{ height: '100%', resize: 'none' }}
            />
          )}
        </div>
        {/* 底部消息区 */}
        <div className="fixed bottom">
          <ContentFooter />
        </div>
      </div>
    </Layout>
  );
}

export default App;
