import React from 'react';
import "./History.css"
const History = (props) => {
    
    const {history} =props;
    let total =0 ;
    let name =[];
    for(const student of  history){
        total= total + student.salary;
        name = name + student.name + ", ";
    }
    
    return (
        <div className ="history">
            <h2>Students added: {props.history.length} </h2>
            <h3>Total Cost:$ {total} </h3>
            <h3>Added: {name} </h3>
        </div>
    );
};

export default History;