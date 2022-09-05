import React from "react";

import { Route,Switch } from "react-router-dom";

import Home from '../pages/Home';
import catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route 
                path='/:category/search/:keyword' 
                component={catalog}
            />

            <Route 
                path='/:category/:id'
                component={Detail}
            />

            <Route 
                path='/:category' 
                component={catalog}
            />

            <Route 
                path='/' 
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;