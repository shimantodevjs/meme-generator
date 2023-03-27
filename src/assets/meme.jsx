import memeData from "./memeData"

import React,{useState} from "react"

function Meme(){
    
    const [memeImage,setMemeImage]=useState('')

    function getRandomMeme(){
            const randomNumber= Math.floor(Math.random()* memeData.length)
            const photo= memeData[randomNumber].photo
            setMemeImage(photo)
        }
        
    return(
        <main>
        <div className="meme__form">
             <input 
             type="text" 
             className="input-txt"
             placeholder="Top Text"
             />
             
             <input 
             type="text" 
             className="input-txt" 
             placeholder="Bottom Text"
             />

             <button onClick={getRandomMeme} className="meme__btn">Get a new meme image</button>

              <div className="meme__img">
                   <img src={memeImage} alt="" />
              </div>
        </div>
        
        </main>
    )
}

export default Meme