import React from 'react'
import { HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import {useNavigate } from "react-router-dom";
const SidebarMenu = ({setToken}) => {
    const navigate = useNavigate()
  return (
    <div>
      <Menu 
        theme="dark" 
        mode="inline" 
        onClick={({key})=>{
        if(key === "signout"){
        } else{
          navigate(key)
        }
      }} style={{height:'100%',width:'256px'}}
      defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Joiners",key:"/dashboard12",icon:<HomeOutlined/> },
          { label: "Comulative Growth",key:"/dashboard1",icon:<HomeOutlined/> },
          { label: "Tech Services",key:"/dashboard2",icon:<HomeOutlined/> },
          { label: "Japan",key:"/dashboard3",icon:<HomeOutlined/> },
          { label: "NA",key:"/dashboard4",icon:<HomeOutlined/> },
          { label: "Bench Sales & Redeployment",key:"/dashboard5",icon:<HomeOutlined/> },
          { label: "New Sales",key:"/dashboard6",icon:<HomeOutlined/> },
          { label: "Aggrements & Renewals",key:"/dashboard7",icon:<HomeOutlined/> },
          { label: "Help Desk",key:"/dashboard8",icon:<HomeOutlined/> },
          { label: "BGV",key:"/dashboard9",icon:<HomeOutlined/> },
          { label: "Target Vs Achievement",key:"/dashboard10",icon:<HomeOutlined/> },
          { label: "Closure Analysis",key:"/dashboard11",icon:<HomeOutlined/> },
          // { label: "Asset",key:"/assetList",icon:<UnorderedListOutlined/>, 
          //   children:[{label:"List Of Asset", key:'/assetlist'},{label:"Add New Asset", key:'/addnewasset'}
          // ]},
          // { label: "Employee",key:"/employeeList",icon:<UnorderedListOutlined/>, 
          //   children:[{label:"List Of Employee", key:'/employeelist'},{label:"Add New Employee", key:'/addnewemployee'}
          // ]},
          // { label: "Reports",key:"/reports",icon:<UserOutlined/>},
          // { label: "Help/Supports",key:"/helpsupports",icon:<UserOutlined/>},
          // { label: "Signout",key:"/signout",icon:<PoweroffOutlined/>, danger:true },
        ]}
      ></Menu>
      
    </div>
  )
}

export default SidebarMenu
