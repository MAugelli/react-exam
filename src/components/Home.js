import { useEffect, useState } from "react"
import Even from "./Even"
import Odd from "./Odd"



function Home() {
    const [even, setEven]  = useState([])
    const [odd, setOdd]  = useState([])
    const [shouldFetch, setShouldFetch] = useState(false);

    const [oddClick, setOddClick] = useState(false)
    const [evenClick, setEvenClick] = useState(false)

    function handleOddClick(event){
        setOddClick(true)
        setEvenClick(false)
    }
    function handleEvenClick(event){
        setEvenClick(true)
        setOddClick(false)
    }

    // ho lasciato che il fetch partisse due volte al click per aumentare le probabilità di popolare sia even che odd 
    const handleFetch = async () => {
        const responce = await fetch("http://numbersapi.com/random/math")
        const i= await responce.text()
        if (parseInt(i.split(' ')) % 2 === 0) {
            setEven((prev)=> [...prev,i])
        }else{
            setOdd((prev)=> [...prev,i])
        } 



        console.log(i);
    }
    
    const handleClick = () => {
        setShouldFetch(true)
      }

    
    useEffect(()=>{
        handleFetch()
        setShouldFetch(false)
    },[shouldFetch])

    return ( <div>
        <button  name="fetch" onClick={handleClick}>Fetch </button>
        <button onClick={handleEvenClick}>Even</button>
        <button onClick={handleOddClick}>Odd</button>
        <div>
            {evenClick && <Even num={even}/>}
            {oddClick && <Odd num={odd}/>}
        </div>
    </div> );
}

export default Home;