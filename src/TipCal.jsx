import React from 'react';

class TipCall extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <> 
                <table border="3" text-align='center' width='100%' >
                    <tr>
                        <th>Total Customer</th>
                        <th>Tip</th>
                    </tr>
                    <tr>
                        <th>{this.props.pooraLog}</th>
                        <th>{this.props.done}</th>
                    </tr>
                </table>
            </>
        )
    }
}




export default TipCall;