import React, { Suspense } from 'react';
import { Layout, theme, Spin } from 'antd';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
// routes config
import routes from '../../routes'

const { Content } = Layout;
const content = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: '10px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Suspense fallback={<Spin />}>
        <Routes>
          {routes.map((route, index) => {
            return (
              route.element && (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="/base/home" replace />} />
        </Routes>
      </Suspense>
    </Content>
  );
};
export default content;