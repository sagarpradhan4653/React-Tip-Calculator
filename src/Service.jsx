import React, { Component } from 'react'
import CustomerList from './CustomerList';








export default class Service extends Component {
    constructor(props) {
        super(props)
      


    }

   




    render() {
        console.log(this.state.serValue);
        return (

            <> 
               
            </>
        )
    }
}

// name="perc" onChange={(event) => {this.props.CustomersName(event, this.props.itemsIndex) }} 










// function Service (props){
//     return(
//         <>
//         <div className="input-group mt-4">
//             <div className="input-group-prepend">
//                 <label className="input-group-text" for="inputGroupSelect01"><strong>How was service</strong></label>
//             </div>
//             <select className="custom-select" id="tipToWaiter" onChange={props.Percentage}>
//                 <option selected>Choose...</option>
//                 <option value={0.1}>Excellent 20%</option>
//                 <option value={0.2}>Satisfied 15%</option>
//                 <option value={0.3}>Average 10%</option>
//                 <option value={0.4}>Bad 5%</option>
//             </select>
//         </div>

//     </>
//     )
// }
