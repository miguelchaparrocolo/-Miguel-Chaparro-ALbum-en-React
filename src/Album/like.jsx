import React, {useState} from 'react';
import Heart from 'react-animated-heart';

function Like(){
    const [isClick, setClick]=useState(false);
    return(
        <div>
            <Heart isClick={isClick} onClick={()=>setClick(!isClick)}/>
        </div>
    )
}

export default Like;