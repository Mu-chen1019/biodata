import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import nav from '../../utils/nav';
import { Layout, Menu, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
const { Sider } = Layout;
const sider = () => {
  const sidebarShow = useSelector((state) => state.base.sidebarShow)
  const dispatch = useDispatch()
  const [stateOpenKeys, setStateOpenKeys] = useState(['1']);
  const navigate = useNavigate();
  return (
    <Sider trigger={null} collapsible collapsed={sidebarShow}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/base/home']}
        openKeys={stateOpenKeys}
        onClick={(item) => navigate(item.key)}
        items={nav}
        onOpenChange={(openKeys) => setStateOpenKeys([openKeys[1]])} // 展开状态变化-只展开一个
      />
      
      <Button
        type="text"
        icon={sidebarShow ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => dispatch({ type: 'sidebarShow', value: !sidebarShow })}
        style={{
          width: '100%',
          height: 80,
          position:"absolute",
          bottom:'0',
          fontSize: '16px',
          color:'#fff',
        }}
      />
    </Sider>
  );
};
export default sider;