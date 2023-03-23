function Meme(){
    return(
        <main>
        <form className="meme__form">
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

             <button className="meme__btn">Get a new meme image</button>
        </form>
        </main>
    )
}

export default Meme