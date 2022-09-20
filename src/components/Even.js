import { useEffect, useState } from "react";

function Even({num}) {
    
    const [evenNum, setEvenNum] = useState({
        even:[num],
    })
    
    let index=0
    useEffect(()=>{
        setEvenNum({
            even:num
        })
    },[num])

    function handleRemove(event) {
        const newItems = evenNum.even
            newItems.splice(event.target.name, 1)
            console.log(newItems);
            setEvenNum({
                even: newItems
            })
    }

    return ( <div>
    
        <h2>Even:</h2>
        {evenNum.even.map((item) =>{
            return(
                <div>
                    <span key={Math.random()}>{item}</span> 
                    <button key={Math.random()} name={index++} onClick={handleRemove}>Canc</button>
                </div>
            )
        })}
    </div> );
}


export default Even;