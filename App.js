import React from "react";
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { HomeOutlined, QuestionCircleOutlined, SendOutlined, SettingOutlined, SwapOutlined, UserOutlined } from "@ant-design/icons";
import logo from './logo.png';

function App() {

    const navigate = useNavigate();

    return (

        <div className="App">
        <div className="container">
        <div id="menu-container">            

        <Menu
            onClick={({key}) => {
              if(key === "signout") {
                //Sign Out
              }
              else {
                navigate(key);

              }  
            }}          
            items={[
            {label: "Home", key:"/", icon: <HomeOutlined />},
            {label: "Profile", key:"/Profile", icon: <UserOutlined />},
            {label: 'Send', key:"/Send", icon: <SendOutlined />},
            {label: 'Transfer', key:"/Transfer", icon: <SwapOutlined/>},
            {label: 'Settings', key:"/Settings", icon: <SettingOutlined />},
            {label: 'Help', key:"/Help", icon: <QuestionCircleOutlined />}
            ]}>   
            </Menu>   
        </div>        
        <div className="display">
            <div className = "userInfo">
                <div className = "Userh1" > Welcome back, User </div>
                <div className = "Userh2" > Primary Address: 1234 Main St. </div>
                <div className = "Userh2" > City, State, Zip </div>
                <div className = "Userh2" > Primary Phone: 988-555-5555 </div>
                <div className = "Userh2" > Primary Email: user01@gmail.com </div>
                <hr></hr>
            </div>

            <div className = "accountDetails">
                <div className = "Accounth1" > Account Balance </div> 
                <hr></hr>
                <div className = "Accounth2" > $500.00 </div>
                <hr></hr>
            </div>

          
        <div className="content">
        <Content />

        </div>
        

        </div>
        </div>
        </div>
    );
}

function Content() {
    return (
      <div >
       
          <Routes>
            <Route path="/" element={<div>
              
                Home
                
                </div>}></Route>
            <Route path="/Profile" element= {<div>Profile</div>}></Route>
            <Route path="/Send" element={<div>Send</div>}></Route>
            <Route path="/Transfer" element={<div>Transfer</div>}></Route>
            <Route path="/Settings" element={<div>Settings</div>}></Route>
            <Route path="/Help" element={<div>Help</div>}></Route>
          </Routes>
       
      </div>

    );
}

export default App;