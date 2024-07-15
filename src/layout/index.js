import React, { useState } from 'react';
import { Layout, theme } from 'antd';
const Sider = React.lazy(() => import('./sider'));
const Header = React.lazy(() => import('./header'));
const Content = React.lazy(() => import('./content'));
const Breadcrumb = React.lazy(() => import('./breadcrumb'));
const layout = () => {
  return (
    <Layout className="layout">
      <Sider />
      <Layout>
        <Header />
        <Breadcrumb />
        <Content />
      </Layout>
    </Layout>
  );
};
export default layout;