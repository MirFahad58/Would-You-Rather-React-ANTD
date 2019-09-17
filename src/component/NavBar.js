import React from "react";
import { Layout } from 'antd'
import Menu from "./Menu";
const { Header } = Layout;
function NavBar() {
    return (
        <Header
            style={{
                backgroundColor: "#d6e4ff",
                height: "10vh",
                position: "fixed",
                width: "100vw",
                zIndex: 1000
            }}>
            <img className=" logo" src={require("../images/logo.png")} alt="not found"/>
            <Menu />
        </Header>
    )
}
export default NavBar;