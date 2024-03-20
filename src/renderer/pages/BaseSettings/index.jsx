import { Button, Dropdown, message, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

import './index.css';

const handleChange = (val) => {
  message.info(`Click on left button. ${val}`);
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
      <div className="setting item">
        <Select
          defaultValue="请选择一个目录"
          style={{
            width: '100%',
          }}
          onChange={handleChange}
          options={[
            {
              value: '/home/taylor/Downloads/20240113',
            },
            {
              value: '/home/taylor/Downloads/20240220',
            },
            {
              value: '/home/taylor/Downloads/20240313',
            },
            {
              value: 'Open Folder...',
            },
          ]}
        />
      </div>
      <div className="setting item">
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['.log', '.json']}
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options}
        />
      </div>
      <div className="setting item">
        <Select
          defaultValue="请选择一个匹配规格"
          style={{
            width: '100%',
          }}
          onChange={handleChange}
          options={[
            {
              value: '^abc$',
            },
            {
              value: 'go[o|a]d',
            },
            {
              value: '2024-01-013',
            },
            {
              value: '设定正则规则',
            },
          ]}
        />
      </div>
      <div className="setting item">
        <Button type="primary"> 开始搜索 </Button>
      </div>
    </div>
  );
}

export default BaseSettings;
