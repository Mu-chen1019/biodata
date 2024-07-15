import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
  UserOutlined
} from '@ant-design/icons';
import { Layout, theme, Menu } from 'antd';
const { Header } = Layout;
const header = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
      className={'header'}
    >
      <div className='headerRight'>
        
      </div>





      {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={(item) => navigate(item.key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
              children: [
                { key: '/home', label: 'Option 5' },
                { key: '/nav', label: 'Option 6' },
                { key: '4', label: 'Option 7' },
                { key: '5', label: 'Option 8' },
              ],
            },
          ]}
        /> */}

    </Header>
  );
};
export default header;