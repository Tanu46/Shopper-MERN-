import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/sidebar';
import { Routes,Route } from 'react-router-dom';
import Addproduct from '../../Components/AddProduct/addproduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
const Admin = () => {
    return (
        <div className='admin'>
        <Sidebar/>
<Routes>
    <Route path='/addproduct' element={<Addproduct/>}></Route>
    <Route path='/listproduct' element={<ListProduct/>}></Route>
</Routes>
        </div>
    ); 
}

export default Admin;
