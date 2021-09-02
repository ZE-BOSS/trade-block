import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Sidebar from './components/admin/Sidebar';
import Dashboard from './pages/admin/Dashboard';
import Settings from './pages/admin/Settings';
import Tables from './pages/admin/Tables';
import Maps from './pages/admin/Maps';
import Footer from './components/admin/Footer';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'tailwindcss/tailwind.css';

import '@material-tailwind/react/tailwind.css';

function App() {
    return (
        // <Switch>
        //     <Route exact path="/" component={Landing} />
        //     <Route exact path="/profile" component={Profile} />
        //     <Route exact path="/login" component={Login} />
        //     <Route exact path="/register" component={Register} />
        //     <Redirect from="*" to="/" />
        // </Switch>
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>

    );
}

export default App;
