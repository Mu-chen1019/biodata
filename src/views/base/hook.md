# hook in React

## 1、useState

### useState state 中的变量会被 React 保留

### useState 接受唯一一个参数，初始化值。（无则初始化为undefined）

### useState 是一个数组

```jsx
//使用 useState
import React, { useState } from "react";
const useStateTest = () => {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({ age: 12, name: "lihua" }); // 复杂数据
    return (
        <>
            <button type="primary" onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </>
    );
};
export default useStateTest;
```

## 2、useEffect / useLayoutEffect

### useEffect / useLayoutEffect 要求传入一个回调函数，React执行完更新DOM操作，会回调这个函数；

### useEffect / useLayoutEffect 第二个参数，决定useEffect在第二个参数变化时才会触发

### useEffect / useLayoutEffect 默认每次更新都会执行回调函数

### useEffect 会在渲染的内容更新到DOM上之后执行，不会阻塞DOM的更新

### useLayoutEffect 会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新

```jsx
//使用 useEffect
import React, { useState, useEffect } from "react";
const useEffectTest = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `当前计数: ${count}`;
        console.log("每次DOM更新时会回调");

        return () => {
            console.log("DOM被移除时会回调");
        };
    }, [count]); // count变化时触发
    return (
        <>
            <button type="primary" onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </>
    );
};
export default useEffectTest;
```

## 3、useMemo

### useMemo 监听依赖效果，计算；

### useMemo 第一个参数，函数，返回一个计算后的值

### useMemo 第二个参数，数组，useMemo依赖项

```jsx
//使用 useMemo
import React, { useState, useMemo } from "react";
const useMemoTest = () => {
    const [count, setCount] = useState(0);
    const memo = useMemo(() => <Button>{count}</Button>, [count]);
    return (
        <>
            {memoA}
            <button type="primary" onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </>
    );
};
export default useMemoTest;
```

## 4、useCallback

### useCallback 监听依赖效果，操作；常结合mome使用

### useCallback 第一个参数，函数，操作

### useCallback 第二个参数，数组，useCallback依赖项,依赖项变化，函数执行

```jsx
import React, { useState, memo, useCallback } from 'react'
import { Button } from 'antd';
// memo： React高级组件，缓存组件的结果，只在props发生变化时才会重新渲染组件
const MemoButton = memo((props) => {
    console.log("memoButton被渲染:", props.name);
    return <Button type="primary" onClick={props.setCount}>{props.count}</Button>
})
const Home = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const memoA = useCallback(function increment1() {
        console.log("A变化");
        setCountA(countA + 1);
    }, [countA])
    const memoB = function increment2() {
        console.log("B变化");
        setCountB(countB + 1);
    }
    return (
        <>
            <MemoButton setCount={memoA} name="A" count={countA}></MemoButton>
            <MemoButton setCount={memoB} name="B" count={countB}></MemoButton>
        </>
    )
}


export default Home;
```


## 5、useContext

### useContext 上下文，作用是深层组件值传递

```jsx
//使用 useContext
import React, { useContext, useState } from "react";
const themeContext = React.createContext(''); //1、创建
// 父组件
const Demo = () => {
    return <div>
        <Child />
    </div>
}
// 祖父组件
const demo = () => {
    const [bgColor, setBgColor] = useState("#000");
    return (
        <div>
            <button onClick={() => setBgColor("red")}>ChangeColor</button>
            {/** 2、挂载 */ }
            <themeContext.Provider value={bgColor}>
                <Demo />
            </themeContext.Provider>
        </div>
    );
}

// 子组件
const Child = () => {
    const bgColor = useContext(themeContext);    //使用
    const style = {
        backgroundColor: bgColor
    }
    return (<div style={style}>Child</div>)
}

export default demo;
```

## 6、useRef

### useRef 用法一：引用DOM元素，操作DOM
### useRef 用法二：保存一个数据，这个对象在整个生命周期中可以保存不变

```jsx
// 用法一
import React, { useRef } from 'react';

export default function useRefTest() {
  const titleRef = useRef();

  const handleClick = () => {
    titleRef.current.innerHTML = "useRef";
  }

  return (
    <div>
      <h2 ref={titleRef}>默认内容</h2>
      <button onClick={e => handleClick()}>操作</button>
    </div>
  )
}


// 用法二
import React, { useState, useEffect, useRef } from 'react';

let preValue = 0;

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>前一次的值: {countRef.current}</h2>
      <h2>这一次的值: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
```
