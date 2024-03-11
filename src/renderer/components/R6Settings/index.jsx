import React, { useState } from 'react';
import { Button, Modal,Divider} from 'antd';

function R6Settings({ isOpen, handleOk }) {
  return (
    <>
      <Modal
        title="Settings"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <Divider orientation="left">基础设置</Divider>
        <p>测试</p>
        <Divider orientation="left">高级设置</Divider>
        <p>测试</p>
      </Modal>
    </>
  );
}

export default R6Settings;
