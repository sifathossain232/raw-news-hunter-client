import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;

/**
 * --------------------
 *        STEPS
 * --------------------
 * 
 * 1. Check user is logged in or not
 * 2. if user logged in, then allow them to visit the route
 * 3. Else redirect the user to login page
 * 4. setup the private router
 * 5. handle loading
 */