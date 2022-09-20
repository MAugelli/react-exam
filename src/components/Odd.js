import { useEffect, useState } from "react";

function Odd({ num }) {

    const [oddNum, setOddNum] = useState({
        odd: [num],
    })

    let index = 0
    useEffect(() => {
        setOddNum({
            odd: num
        })
    }, [num])

    function handleRemove(event) {
        const newItems = oddNum.odd
        newItems.splice(event.target.name, 1)
        console.log(newItems);
        setOddNum({
            odd: newItems
        })
    }

    return (<div>
       <h2>Odd:</h2>
        {oddNum.odd.map((item) => {
            return (
                <div>
                    <span key={Math.random()}>{item}</span>
                    <button key={Math.random()} name={index++} onClick={handleRemove}>Canc</button>
                </div>
            )
        })}
    </div>);
}

export default Odd;