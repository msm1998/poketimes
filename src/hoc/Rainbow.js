import React from 'react';

const Rainbow = (WrappedComponent)=>{
    const color = ['red','blue','green','black','gold','pink','yellow'];
    const randomcolor = color[Math.floor(Math.random()*6)];
    const className = randomcolor + '-text';
    return (props) =>{
        return(
            <div className={className}>
                <WrappedComponent {... props}/>
            </div>
        )
    }
}

export default Rainbow;