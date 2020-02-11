// import external modules
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, UncontrolledDropdown} from "reactstrap";
import {LogOut, Menu, MoreVertical} from "react-feather";

import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";

class ThemeNavbar extends Component {
    API = 'http://localhost:8081/username';
    handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false,
          username: "",
      };

   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

    componentDidMount() {
        // fetch data and update state
        fetch(this.API).then((response) => {
           return response.json();
        }).then(({ username }) => {
           this.setState({
               username,
           })
        });
    }

   render() {
      const { username } = this.state;
      return (
         <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
            <div className="container-fluid px-0">
               <div className="navbar-header">
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                     onClick={this.handleClick.bind(this)}
                     data-toggle="collapse"
                  />
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />
               </div>

               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>

                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img src={userImage} alt="logged-in-user" className="rounded-circle width-35" />
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <span className="font-small-3">
                                     {username} <span className="text-muted">(Guest)</span>
                                 </span>
                              </DropdownItem>
                              <DropdownItem divider />
                              <Link to="/pages/login" className="p-0">
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" /> Logout
                                 </DropdownItem>
                              </Link>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
   }
}

export default ThemeNavbar;