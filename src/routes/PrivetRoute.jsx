import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user , loding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    console.log(user);
    if(loding){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivetRoute;