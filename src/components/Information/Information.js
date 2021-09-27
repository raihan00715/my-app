import React from 'react';
import "./Information.css";

const Information = (props) => {
   
    const {name,img, age, country, id, language, salary }= props.student
    return (
        <div className ="student-info">
            <div>
                
                <img className = "student-img" src={img} alt="" />
                <h1 className = "h1">Name: {name }</h1>
                <h3>ID: {id}</h3>
                <h3>age: {age}</h3>
                <h3>Country: {country}</h3>
                <h3>Language: {language}</h3>
                <h3>Salary: {salary}</h3>
                <button 
                onClick ={()=>props.handleAddToCart(props.student)}
                className="addToCart-btn" >add to cart </button>
            </div>
        </div>
    );
};

export default Information;