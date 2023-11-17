import { Menu, Dropdown } from "antd";
import {DownOutlined} from '@ant-design/icons';
import React from "react";
import questionsArray from "./a";

const DropDown = ({ 
    currQues, setFunc
}) => {
    const menu = (
        <Menu style={{width: 150}}>
            <Menu.Item key={0} onClick={() => setFunc(0)}>
                Palindrome Number
            </Menu.Item>
            <Menu.Item key={1} onClick={() => setFunc(1)}>
                Climbing Stairs
            </Menu.Item>
            <Menu.Item key={2} onClick={() => setFunc(2)}>
                Reverse Integer
            </Menu.Item>
            <Menu.Item key={3} onClick={() => setFunc(3)}>
                Sum of Digits
            </Menu.Item>
            <Menu.Item key={4} onClick={() => setFunc(4)}>
                Find Minimum
            </Menu.Item>
            <Menu.Item key={5} onClick={() => setFunc(5)}>
                Power of Two
            </Menu.Item>
            <Menu.Item key={6} onClick={() => setFunc(6)}>
                Factorial
            </Menu.Item>
            <Menu.Item key={7} onClick={() => setFunc(7)}>
                Fibonacci Sequence
            </Menu.Item>
            <Menu.Item key={8} onClick={() => setFunc(8)}>
                Check Prime Number
            </Menu.Item>
        </Menu>);
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <div
                style={{
                    height: 15,
                    width: 180,
                    padding: 10,
                    margin:'5px',
                    fontWeight: 'bold',
                    background: 'rgb(33,38,45)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    color:'white'
                }}>{questionsArray[currQues].title} <DownOutlined />
            </div>
        </Dropdown>
    )
};

export default DropDown;