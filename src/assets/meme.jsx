// Реализуем компонент Meme в React, импортируем данные о мемах из файла "memeData".
import memeData from "./memeData"

import React,{useState} from "react"

function Meme(){
    
    // Используем хук useState для инициализации начального состояния мема.

    const [meme, setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/140427-apps-news-the-best-stupidest-and-most-famous-internet-memes-around-image1-lm1toysfy4.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
    })

    function handleChange(){

    }

    
    // Функция для генерации случайного изображения мема из массива данных.
    function getRandomMemeImage(event){
            event.preventDefault()
            const randomNumber= Math.floor(Math.random()* memeData.length)
            const photos= memeData[randomNumber].photo
            setMeme(prevMeme=>({
                ...prevMeme,
                randomImage:photos
            }))
        }
        
    return(
        <main>
            <form>
            <div className="inputs">
             <input 
             type="text" 
             className="input-txt-1"
             placeholder="Top Text"
             name="topText"

             />
             
             <input 
             type="text" 
             className="input-txt-2" 
             placeholder="Bottom Text"
             />
             </div>

             <button onClick={getRandomMemeImage} className="meme__btn">Get a new meme image</button>

             <div className="meme__img">
                   <img src={meme.randomImage} alt="" />
            </div>  
            </form>
            
        </main>
    )
}

export default Meme