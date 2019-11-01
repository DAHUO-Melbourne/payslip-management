import React, {Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import UserInfo from './userInfo';
import Payslip from './payslip'
import { Provider } from 'react-redux';
import store from './store'


function App(){
    return(
        <Fragment>
            <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={UserInfo}></Route>
                    <Route path='/payslip' exact component={Payslip}></Route>
                </div>
            </BrowserRouter>
            </Provider>       
        </Fragment>
    )
}

export default App;