import React from 'react';
import BillEnter from './BillEnter'
import Service from './Service'
import TipCall from './TipCal';





export default class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cName: "",
            totalPer: 0,
            serValue: 0.1,
            billValue: null,
            now: 0,
            cusName: "",
            tTip: 0,
            tip: 0,
            wholeItems: []





        }

        this.wholeCal = this.wholeCal.bind(this);
    }



    changeInCustomerAdd = (event) => {
        this.setState({
            cName: event.target.value
        })
    }



    getValueBill = (event) => {
        this.setState({
            billValue: event.target.value
        })
    }



    getServicePer = (event) => {
        this.setState({ serValue: event.target.value })
    }


    // for updating value of total number of customer in the total list  
    wholeCal = (event) => {
        let persName = this.state.cName
        let tip = (this.state.billValue * this.state.serValue)
        let hello = (this.state.now + 1)
        this.setState({
            wholeItems: [...this.state.wholeItems, { name: this.state.cName, tip: this.state.billValue * this.state.serValue }],
            now: hello,
            totalPer: (tip).toFixed(2),
            tTip: (this.state.tTip + this.state.billValue * this.state.serValue),
            cusName: persName,
        })


    }





    render() {
        return (
            <> <input type="text" id="enter2" className="form-control" placeholder="Add Customer" value={this.state.cName} onChange={this.changeInCustomerAdd} />
                <h5 className="card-title">Enter The Costumer Bill </h5><div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping"><strong>INR</strong></span>
                    </div>
                    <input type="number" id="enterBill" className="form-control" placeholder="Enter Bill Amount" value={this.state.billValue} onChange={this.getValueBill} />
                </div>
                <div className="input-group mt-4">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01"><strong>How was service</strong></label>
                    </div>

                    <select className="custom-select" id="tipToWaiter" value={this.state.serValue} onChange={this.getServicePer}  >

                        {/* <option selected>Choose...</option> */}
                        <option value="0.2">Excellent 20%</option>
                        <option value="0.15">Satisfied 15%</option>
                        <option value="0.1">Average 10%</option>
                        <option value="0.05">Bad 5%</option>
                    </select>
                </div>
                <div className="card-body mt-5">
                    <div className="card-header1" >
                        Customer list<br />
                        <ul>
                            <ul>
                                {this.state.wholeItems.map((item, index) => (
                                    <li key={index}>{`${item.name} offered a tip of Rs. ${item.tip}`}</li>
                                ))}
                            </ul>
                        </ul>
                    </div>

                </div>
                <button type="button" className="btn1 btn-dark" onClick={this.wholeCal}>CALCULATE TIP AND CUSTOMER</button>

                <TipCall done={this.state.tTip.toFixed(2)} pooraLog={this.state.now} />
            </>
        )
    }
}











// , tip: this.state.totalPer





























