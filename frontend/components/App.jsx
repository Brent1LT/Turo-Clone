import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SessionModal from "./modal/session_modal";
import NavBarContainer from './nav_bar/nav_bar_container';




const App = () => (
  <div>
    <SessionModal />
    <NavBarContainer />
    <h1>Turo goes here</h1>
  </div>
);

export default App;

{/* <button onClick={() => }>Logout</button> */}


{/* <Route path='/' component={SignupFormContainer}/>
<Route path='/' component={LoginFormContainer} /> */}
{/* <ProtectedRoute component={LoggedInNav} />
<AuthRoute component={LoggedOutNav} /> */}