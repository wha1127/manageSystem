import React, { Component } from 'react';
import { Layout, Breadcrumb} from 'antd';
import logo from "../../assets/images/logo.png";
import "./BasicLayout.less";
import HeaderMain from './HeaderMain/HeaderMain'
import LeftNav from './LeftNav/LeftNav'
const { Header, Content, Footer, Sider } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };
  
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render () {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="basic-layout-logo">
            <img src={logo} alt="logo"></img>
            <h2 style={{ display: collapsed ? "none" : "block" }}>title</h2>
          </div>
          <LeftNav/>
        </Sider>
        <Layout>
          <HeaderMain/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;