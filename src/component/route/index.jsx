import React from 'react'
import { Route, Routes } from "react-router-dom";
// import AssetHomePage from '../../pages/asset/assetaddpage';
import AssetListPage from '../../pages/asset/assetlistpage';
import AssetAddPage from '../../pages/asset/assetaddpage';
import AssetHomePage from '../../pages/asset';

const RouteComponent = () => {
  return (
    <div>
       <div>
     <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/assetlist" element={<div><AssetHomePage/></div>}></Route>
      <Route path="/addnewasset" element={<div><AssetAddPage/></div>}></Route>
      <Route path="/employeelist" element={<div>Employee List</div>}></Route>
      <Route path="/addnewemployee" element={<div>Add New Employee</div>}></Route>
      <Route path="/reports" element={<div>Reports</div>}></Route>
      <Route path="/helpsupports" element={<div>Help/Supports</div>}></Route>
     </Routes>
    </div>
    </div>
  )
}

export default RouteComponent
