import { Button, Image } from 'antd';

import icon from '../../../../assets/icon.png';
import { useState } from 'react';

function R6SettingButton({ onClick }) {
  const handleBtnClk = () => {
    alert('click btn');
  };
  return (
    <Button ghost={true} style={{width:40,height:40}} shape='circle' height='80' width='80' onClick={onClick}>
      <Image preview={false} style={{ width: 24, height: 24 }} src={icon} />
    </Button>
  );
}
function R6PatternButton({ onClick }) {
  const handleBtnClk = () => {
    alert('click btn');
  };
  return (
    <Button ghost={true} style={{width:40,height:40}} shape='circle' height='80' width='80' onClick={onClick}>
      <Image
        preview={false}
        style={{ width: 24, height: 24 }}
        src={icon}
      />
    </Button>
  );
}

function R6Find({ onClick }) {
  const handleBtnClk = () => {
    alert('click btn');
  };
  return (
    <Button ghost={true} style={{width:40,height:40}} shape='circle' height='80' width='80' onClick={onClick}>
      <Image preview={false} style={{ width: 24, height: 24 }} src={icon} />
    </Button>
  );
}

function R6AboutButton({ onClick }) {
  const handleBtnClk = () => {
    alert('click btn');
  };
  return (
    <Button ghost={true} style={{width:40,height:40}} shape='circle' height='80' width='80' onClick={onClick}>
      <Image
        preview={false}
        style={{ width: 24, height: 24 }}
        src={icon}
      />
    </Button>
  );
}

export { R6SettingButton, R6AboutButton, R6PatternButton, R6Find };
