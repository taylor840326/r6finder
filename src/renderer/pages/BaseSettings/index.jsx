import { Button, Dropdown, message, Select} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import './index.css';
const handleChange = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

function BaseSettings() {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="setting-body">
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'Yiminghe',
            label: 'yiminghe',
          },
          {
            value: 'disabled',
            label: 'Disabled',
            disabled: true,
          },
        ]}
      />
      <Select
        mode="multiple"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{
          width: '100%',
        }}
        options={options}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'Yiminghe',
            label: 'yiminghe',
          },
          {
            value: 'disabled',
            label: 'Disabled',
            disabled: true,
          },
        ]}
      />
      <Button type='primary'> Search </Button>
    </div>
  );
}

export default BaseSettings;
