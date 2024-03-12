import { Button, Image } from 'antd';

import accelerate from '../../../../assets/accelerate-svgrepo-com.svg';
import creativity from '../../../../assets/creativity-svgrepo-com.svg';
import document from '../../../../assets/document-svgrepo-com.svg';
import setup from '../../../../assets/set-up-svgrepo-com.svg';
import { useState } from 'react';

function R6SettingButton({ onClick }) {
  const handleBtnClk = () => {
    alert('click btn');
  };
  return (
    <Button ghost={true} style={{width:40,height:40}} shape='circle' height='80' width='80' onClick={onClick}>
      <Image preview={false} style={{ width: 24, height: 24 }} src={setup} />
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
        src={accelerate}
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
      <Image preview={false} style={{ width: 24, height: 24 }} src={document} />
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
        src={creativity}
      />
    </Button>
  );
}

export { R6SettingButton, R6AboutButton, R6PatternButton, R6Find };
