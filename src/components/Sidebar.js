import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{marginTop: '5rem'}}>
        <CDBSidebar textColor="#fff" backgroundColor="#000e16">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
                href="#a"
                className="text-decoration-none"
                style={{ color: 'inherit' }}
            >
                Administrador
            </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/users" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/campus" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">Campus</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/contacts" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="list">Contacts</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/ubications" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="map">Ubications</CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                exact
                to="/"
                target="_blank"
                activeClassName="activeClicked"
                >
                <CDBSidebarMenuItem icon="exclamation-circle">
                    Log out
                </CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
                style={{
                padding: '20px 5px',
                }}
            >
                © Jhusseth
            </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    </div>
  );
};

export default Sidebar;