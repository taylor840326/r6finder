import React, { useState } from 'react';
import { Button, Modal,Image } from 'antd';

import icon from "../../../../assets/icon.png"

function R6About({isOpen,handleOk}) {

  return (
    <>
      <Modal title="About R6Finder" open={isOpen} onOk={handleOk} onCancel={handleOk}>
        <Image src={icon}/>
      </Modal>
    </>
  );
};

export default R6About;
