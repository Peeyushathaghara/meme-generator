import React from 'react'

const Square = (props) => {
    // console.log(props.value)
    return (


        <div 
        onClick= {props.onClick}
        style = {{
            border: "1px solid",
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"          

        }}
        
        className= "square">{props.value}</div >
    )
}

export default Square;