import memeData from "./memeData"

import React,{useState} from "react"

function Meme(){
    
    


    const [meme, setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image1-lm1toysfy4.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
    })

    

    function getRandomMemeImage(){
            const randomNumber= Math.floor(Math.random()* memeData.length)
            const photos= memeData[randomNumber].photo
            setMeme(prevMeme=>({
                ...prevMeme,
                randomImage:photos
            }))
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

             <button onClick={getRandomMemeImage} className="meme__btn">Get a new meme image</button>
        </div>
        <div className="meme__img">
                   <img src={meme.randomImage} alt="" />
              </div>
        </main>
    )
}

export default Meme