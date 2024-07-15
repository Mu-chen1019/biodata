import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
const nav = [
    {
        key: '/base',
        icon: <UserOutlined />,
        label: '菜单',
        children: [
            { key: '/base/home', label: '首页' },
            { key: '/base/nav', label: '测试' },
            { key: '/base/table', label: '表格' },
        ],
    },
    {
        key: '/list',
        icon: <UploadOutlined />,
        label: '目录',
        children: [
            { key: '/list/home1', label: '首页' },
            { key: '/list/nav1', label: '测试' },
            { key: '/list/table1', label: '表格' },
        ],
    },
    {
        key: '/document',
        icon: <VideoCameraOutlined />,
        label: '文件',
        children: [
            { key: '/document/home2', label: '首页' },
            { key: '/document/nav2', label: '测试' },
            { key: '/document/table2', label: '表格' },
        ],
    },
]

export default nav