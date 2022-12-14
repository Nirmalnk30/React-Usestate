import React , { useState } from 'react';
import "./Timer.css"

const Timer = () => {

    let [count, setCount] = useState(0);

    const onClickHandler = () => {
        setCount( count + 1 );
    }

    
        
        const onDecrementHandler = () => {
            setCount( count - 1 );
    

    }

    const onResetHandler = () => {
        setCount(0);


}

    

    return(

        <div>
        <p>Timer : {count} Secs</p>
        <button onClick= {onClickHandler}>Increment count </button> <br/>
         <button onClick= {onDecrementHandler}>Decrement count</button><br/>
         <button onClick= {onResetHandler}>Reset</button>

        </div>

    );


}
export default Timer;