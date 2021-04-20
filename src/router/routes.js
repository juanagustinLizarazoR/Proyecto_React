import  React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../components/authentication/UserLogin'
import Register from '../components/authentication/UserSignUp'
// import NotFound from '../pages/NotFound'

const BaseRouter = (props) => (
    // <div className="router-container" style={{width :'100%'}}>
    //     <Router>
            <Switch>
                <Route path={["/home","/users","/campus","/ubications","/contacts"]} component={Home} />

                {/* <Route path="/*" component={NotFound} /> */}
                {/* <Route path="/teacherPane" component={Teacher} />*/}
                <Route path="/register" component={Register}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Login} />
            </Switch>
    //     </Router>
    // </div>
);

export default BaseRouter;