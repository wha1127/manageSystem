import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menus from '../../../config/menus'
import { Link,withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
@withRouter
class LeftNav extends Component {
  createMenus = (menu) => (
    <Menu.Item key={menu.key}>
      <Link to={menu.key}>
        <Icon type={menu.icon} />
        <span>{menu.title}</span>
      </Link>
    </Menu.Item>
  )
  getMenus = () => {
    return menus.map(menu => {
      if (menu.children) {
        return (
          <SubMenu
            key={menu.key}
            title={
              <span>
                <Icon type={menu.icon} />
                <span>{menu.title}</span>
              </span>
            }
          >
            {
              menu.children.map(cMenu => {
                return this.createMenus(cMenu)
              })
            }
          </SubMenu>)
      } else {
        return this.createMenus(menu)
      }
    })
  }
  getOpenKey (pathname) {
    for (let i = 0; i < menus.length; i++){
      const menu = menus[i]
      if (menus[i].children) {
        for (let j = 0; j < menu.children.length; j++){
          const cMenu = menu.children[j]
          if (pathname.startsWith(cMenu.key)) {
            return menu.key
          }
        }
      }
    }
  }
  render () {
    let { pathname } = this.props.location
    const openKey = this.getOpenKey(pathname)
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]}  defaultOpenKeys={[openKey]} mode="inline">
        {
          this.getMenus()
        }
      </Menu>
    );
  }
}

export default LeftNav;