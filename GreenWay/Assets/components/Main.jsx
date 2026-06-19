import { useEffect } from "react";
import { useState } from "react";
import "./Main.css";

function Main(){
    
    let [viewStatus, setViewStatus] = useState('start');
    return(
        <>
            <div className={'main-bg '+ viewStatus} onClick={()=>{
                setViewStatus('end');
            }}>
            </div>
        </>
    )
}

export default Main