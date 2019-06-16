import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
// import { Route, Switch } from 'react-router-dom';

import { Actions as uiActions } from './actions/uiActions';
import * as uiSelectors from './selectors/uiSelectors';

import './styles.less';
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface Props extends RouteComponentProps<{}>{
  test?: boolean;
}

export default function App(props: Props) {
  const [collapsed, setCollapsed] = useState();
  const isLoading = useSelector(uiSelectors.isLoading);
  const dispatch = useDispatch();
  const startLoading = () => dispatch(uiActions.startLoading());
  const stopLoading = () => dispatch(uiActions.stopLoading());

  const toggle = () => {
    // props.history.push('asdasd');
    console.log(isLoading);
    setCollapsed(!collapsed);
    if (isLoading) stopLoading();
    else startLoading();
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='title'>HELLO WOLRD</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {/* <Switch>
            <Route exact path='/' render={() => 'hello'}/>
            <Route render={() => 'world'}/>
          </Switch> */}
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
