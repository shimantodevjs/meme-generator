import memeData from "./memeData"

function Meme(){
        
    function getRandomMeme(){
            const randomNumber= Math.floor(Math.random()* memeData.length)
            const photo= memeData[randomNumber].photo
            console.log(photo)
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
        </div>
        </main>
    )
}

export default Meme