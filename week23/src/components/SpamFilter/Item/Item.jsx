import React from 'react';



export default function Item({text, color}) {

    return(
        <div className = {color}> {text }</div>
    );

   
}
