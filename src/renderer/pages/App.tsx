import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import store from '../../store/store';
import R6About from '../components/R6About';
import R6Settings from '../components/R6Settings';
import { isSet } from 'util/types';

const { Header, Content, Footer, Sider } = Layout;


const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [val,setVal]= useState("")
  const [isAbout,setISAbout] = useState(false)
  const [isSettings,setISSettings] = useState(false)

  const handleBtnClk = () =>{
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

    const output = store.getState().grep.output
    setVal(output)
  }
  const handleBtnClr = () =>{
    setVal("")
  }

  const handleBtnAbout = () =>{
    isAbout=== true? setISAbout(false):setISAbout(true)
  }

  const handleBtnSettings= () =>{
    isSettings=== true? setISSettings(false):setISSettings(true)
  }

  return (
    <Layout>
      <R6About isOpen={isAbout} handleOk={handleBtnAbout}/>
      <R6Settings isOpen={isSettings} handleOk={handleBtnSettings}/>

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
        <div className="demo-logo-vertical" />
        <Button onClick={handleBtnClk}>OK</Button>
        <Button onClick={handleBtnClr}>Clr</Button>
        <Button onClick={handleBtnSettings}>Settings</Button>
        <Button onClick={handleBtnAbout}>About</Button>
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
