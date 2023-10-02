import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Input } from 'antd';
import { Rate } from 'antd';
import { Button, Space } from 'antd';

const { TextArea } = Input;
const { Header, Content, Footer } = Layout;


const Review: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <h1>เขียนรีวิว</h1>
      <Content style={{ padding: '0 50px' }}>
       <div className="site-layout-content" style={{ background: colorBgContainer }}>
         <h2>มังงะชื่อ xxx</h2>
         <p>ให้คะแนนและรีวิวสินค้าที่ท่านสั่งซื้อ:</p>
         <Rate /> 5 ดาว - พอใจมาก
         <p>รายละเอียดรีวิว</p>
         <TextArea rows={4} placeholder="คุณมีความคิดเห็นเกี่ยวกับมังงะเรื่องนี่อย่างไร"/><br />
         <p></p>
         <Button type="primary">Submit</Button>
        </div>
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Review;