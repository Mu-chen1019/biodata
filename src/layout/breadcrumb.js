import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import nav from '../utils/nav';
import { Breadcrumb } from 'antd';

const style = {
  padding: '10px 10px 10px 20px',
  backgroundColor: '#fff',
  marginTop: '10px'
}


const bread = () => {
  const [items, setItems] = useState([]);
  const location = useLocation()
  useEffect(() => {
    const pathName = location.pathname.split("/");
    const parent = nav.find((route) => route.key === `/${pathName[1]}`);
    if( !parent) return;
    const child = parent.children.find((route) => route.key === `/${pathName[1]}/${pathName[2]}`);
    setItems([
      {
        title: parent.label,
        key: parent.key,
      },
      {
        title: child.label,
        key: child.key,
      },
    ])
  }, [location]);
  return (<Breadcrumb
    style={style}
    items={items}
  />)
};
export default bread;