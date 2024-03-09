import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function R6Settings({isOpen,handleOk}) {

  return (
    <>
      <Modal title="Basic Modal" open={isOpen} onOk={handleOk} onCancel={handleOk}>
        <p>This is setttings pages</p>
      </Modal>
    </>
  );
};

export default R6Settings;
