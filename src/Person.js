import React, { Component } from 'react';
// class Person extends Component{
    // render(){
    //     return(
    //         <div>
    //             <p>Name: {this.props.name}</p>
    //             <p>Roll No.: {this.props.roll}</p>
    //             <p>Address: {this.props.address}</p>
    //             <p>Mobile No.: {this.props.mobile}</p><br/><br/> 
    //         </div>

    //     );
    // }

    const Person=(props)=>(
        <div>
                <p>Name: {props.name}</p>
                <p>Roll No.: {props.roll}</p>
                <p>Address: {props.address}</p>
                <p>Mobile No.: {props.mobile}</p><br/><br/> 
            </div>
    )
// }
export default Person;