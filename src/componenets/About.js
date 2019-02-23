import React from 'react';
import Rainbow from "../hoc/Rainbow";

const About = () =>{
    return(
        <div className="container">
            <h1 className ="center">About-Page</h1>
            <p className="bold-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas ullam doloribus pariatur impedit adipisci, consequuntur error ad excepturi amet dicta obcaecati at, culpa odit minus. Quo quia pariatur ipsam.</p>
        </div>
    )
}

export default Rainbow(About);