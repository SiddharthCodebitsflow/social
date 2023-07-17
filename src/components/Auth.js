import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Auth() {
    const auth_id = sessionStorage.getItem('user_id');
    return auth_id ? (<Outlet></Outlet>) : <Navigate to="/login" />;

}
