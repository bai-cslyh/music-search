import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// modules
import { Search, Hompage } from '../views'

export default function AppRouter () {
    return (
        <Switch>
            <Route path='/' component={Hompage}></Route>
        </Switch>
    )
}