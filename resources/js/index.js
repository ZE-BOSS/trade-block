import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Sidebar from './components/admin/Sidebar';
import Dashboard from './pages/admin/Dashboard';
import Settings from './pages/admin/Settings';
import transfers from './pages/admin/transfer/transfer_log';
import transferSingle from './pages/admin/transfer/transfer_single';
import transferMultiple from './pages/admin/transfer/transfer_multiple';
import Tables from './pages/admin/Tables';
import Maps from './pages/admin/Maps';
import Footer from './components/admin/Footer';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'tailwindcss/tailwind.css';

import '@material-tailwind/react/tailwind.css';

function App() {
    if(location.pathname.includes('main_controller_panel')){
        return (
            <>
                <Sidebar />
                <div className="md:ml-64">
                    <Switch>
                        <Route exact path="/main_controller_panel/" component={Dashboard} />
                        <Route exact path="/main_controller_panel/settings" component={Settings} />
                        <Route exact path="/main_controller_panel/transfers" component={transfers} />
                        <Route exact path="/main_controller_panel/transferSingle" component={transferSingle} />
                        <Route exact path="/main_controller_panel/transferMultiple" component={transferMultiple} />
                        <Redirect from="*" to="/main_controller_panel/" />
                    </Switch>
                    <Footer />
                </div>
            </>

        );
    }else{
        return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Redirect from="*" to="/" />
            </Switch>
        );
    }
}

export default App;
