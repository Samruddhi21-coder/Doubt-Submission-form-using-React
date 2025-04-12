import {useState} from "react";
import axios from "axios";



function Motivation()
{
    let [quote,setQuote] = useState("");
    let [author,setAuthor] = useState("");
    
    function getQuotes(event)
    {
        event.preventDefault();
        let url= "https://quotes-api-self.vercel.app/quote";
        axios.get(url)
        .then((response)=>{
            let {quote , author} = response.data;
            setQuote(quote);
            setAuthor(author);
        })
        .catch((error)=>console.log(error));
    }
    return <div>
        <h1>Quotes App</h1>
        <form onSubmit={getQuotes}>
            <button type= "submit">Get Quotes</button>
        </form>
        <h2>{quote}</h2>
        <h3>{author}</h3>


    </div>
}
export default Motivation;