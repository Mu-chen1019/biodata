import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '型号',
        dataIndex: 'type',
    },
    {
        title: '价格',
        dataIndex: 'price',
    },
];
const data1 = [
    {
        key: '1',
        name: '电源',
        type: '先马 ATX3金牌 650W 140mm*150mm*86mm 5年质保(3包换+2保修)',
        price: 279,
    },
    {
        key: '2',
        name: '显卡',
        type: '4060Ti',
        price: 0,
    },
    {
        key: '3',
        name: 'CPU',
        type: '',
        price: 0,
    },
    {
        key: '4',
        name: '主板',
        type: '',
        price: 0,
    },
    {
        key: '5',
        name: '内存',
        type: '威刚(ADATA) 32GB(16GBx2) DDR4 3200 XPG-威龙D35',
        price: 538,
    },
    {
        key: '6',
        name: '固态',
        type: '西部数据(WD) 1TB SSD固态硬盘 M.2(NVMe协议)SN580 PCle4.0',
        price: 449,
    },
    {
        key: '7',
        name: '散热',
        type: '雅浚(ProArtist)B3系列4热管风冷散热器(支持12代13代CPU/AM4AM5附硅) B3PRO (ARGB神光同步) 82x3',
        price: 246,
    },
    {
        key: '8',
        name: '机箱',
        type: '先马(SAMA) 平头哥M2 Pro(黑) 钢化玻璃侧透/支持ATX主板 6风扇',
        price: 99,
    },
];
const data2 = [
    {
        key: '1',
        name: '电源',
        type: '先马 ATX3金牌 650W 140mm*150mm*86mm 5年质保(3包换+2保修)',
        price: 279,
    },
    {
        key: '2',
        name: '显卡',
        type: '4060Ti',
        price: 0,
    },
    {
        key: '3',
        name: 'CPU',
        type: '',
        price: 0,
    },
    {
        key: '4',
        name: '主板',
        type: '',
        price: 0,
    },
    {
        key: '5',
        name: '内存',
        type: '威刚(ADATA) 32GB(16GBx2) DDR4 3200 XPG-威龙D35',
        price: 538,
    },
    {
        key: '6',
        name: '固态',
        type: '西部数据(WD) 1TB SSD固态硬盘 M.2(NVMe协议)SN580 PCle4.0',
        price: 449,
    },
    {
        key: '7',
        name: '散热',
        type: '雅浚(ProArtist)B3系列4热管风冷散热器(支持12代13代CPU/AM4AM5附硅) B3PRO (ARGB神光同步) 82x3',
        price: 246,
    },
    {
        key: '8',
        name: '机箱',
        type: '先马(SAMA) 平头哥M2 Pro(黑) 钢化玻璃侧透/支持ATX主板 6风扇',
        price: 99,
    },
];
const style ={
    height:'100%',
    overflow:'auto'
}
const buyTeble = () => {
    return (
        <div style={style}>
            <b>京东</b>
            <br />
            <Table
                columns={columns}
                dataSource={data1}
                pagination={false}
                style={{marginBottom:'100px'}}
                bordered
                summary={(pageData) => {
                    let totalRepayment = 0;
                    pageData.forEach(({ type, price }) => {
                        totalRepayment += price;
                    });
                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>合计</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>
                                    <Text type="danger">{ }</Text>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={2}>
                                    <Text>{totalRepayment} 元</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />
            <strong>淘宝</strong>
            <Table
                columns={columns}
                dataSource={data2}
                pagination={false}
                bordered
                summary={(pageData) => {
                    let totalRepayment = 0;
                    pageData.forEach(({ type, price }) => {
                        totalRepayment += price;
                    });
                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>合计</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>
                                    <Text type="danger">{ }</Text>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={2}>
                                    <Text>{totalRepayment} 元</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />
        </div>
    )
}

export default buyTeble;
