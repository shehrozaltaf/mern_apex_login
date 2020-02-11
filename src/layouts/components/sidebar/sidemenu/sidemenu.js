// import external modules
import React, {Component} from "react";

import {Edit, LogOut, Users} from "react-feather";
import {NavLink} from "react-router-dom";
// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
    render() {
        return (
            <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
                <SideMenu.MenuSingleItem>
                    <NavLink to="/groups" activeClassName="active">
                        <i className="menu-icon">
                            <Users size={18}/>
                        </i>
                        <span className="menu-item-text">Users</span>
                    </NavLink>
                </SideMenu.MenuSingleItem>
                <SideMenu.MenuSingleItem>
                    <NavLink to="/groups" activeClassName="active">
                        <i className="menu-icon">
                            <Edit size={18}/>
                        </i>
                        <span className="menu-item-text">Forms</span>
                    </NavLink>
                </SideMenu.MenuSingleItem>
                <SideMenu.MenuSingleItem>
                    <NavLink to="" activeClassName="active">
                        <i className="menu-icon">
                            <LogOut size={18}/>
                        </i>
                        <span className="menu-item-text">Logout</span>
                    </NavLink>
                </SideMenu.MenuSingleItem>
            </SideMenu>
        );
    }
}

export default SideMenuContent;