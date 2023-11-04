import { useSelector } from 'react-redux'
import { selectAuth } from '../features/authSlice'
import LoadRedirect from './LoadRedirect';

export const PrivateRoute = ({children}:{children:any}) => {
    const {token} = useSelector(selectAuth);
    return token ? children:<LoadRedirect/>
 
}
