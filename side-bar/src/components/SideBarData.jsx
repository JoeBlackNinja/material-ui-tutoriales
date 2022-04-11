import LoginIcon from '@mui/icons-material/Login';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import InfoIcon from '@mui/icons-material/Info';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const SideBarData = [
    {
        title : 'About us', 
        icon : <InfoIcon/>,
        link : '/about'
    },
    {
        title : 'Log in', 
        icon : <LoginIcon/>,
        link : '/login'
    },
    {
        title : 'Reservation', 
        icon : <BookOnlineIcon/>,
        link : '/reservation'
    },
    {
        title : 'Register', 
        icon : <AppRegistrationIcon/>,
        link : '/register'
    },
    
] 

