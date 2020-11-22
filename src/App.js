import React, { Component } from 'react';
import './App.css';
import Service from './Service';
import Customer from './CustomerList';
import TipCall from './TipCal';
import Footer from './Footer';
import BillEnter from './BillEnter'
import Header from './Header'





class App extends Component {
    constructor() {
        super()



    }

    render(){
        return(
            <>
            <Header />
            <Customer />
            <Footer />
        </>
        )
    }




}
 
export default App;
