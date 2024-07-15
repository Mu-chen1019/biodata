import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Spin } from 'antd';

import './scss/style.scss'

const Home = React.lazy(() => import('./views/base/home'));
const Layout = React.lazy(() => import('./layout'));
const App = () => {
    return (
        <HashRouter>
            <Suspense
                fallback={
                    <Spin />
                }
            >
                <Routes>
                    {/* 当前面的路由未匹配到时, 显示 NotFound 组件 */}
                    <Route exact path="/404" name="Page 404" element={<p>Not Found</p>} />
                    <Route path="*" element={<Layout />} />
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export default App;
