import { useState } from "react"

const InputShortner =({setInputValue}) => {
    const [value , setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

    return(
        <div className="inputContainer">
            <div className="contain-heading">
                <h1>URL <span>Shortner</span></h1>
                <p>Paste your link below to and get a shortened version instantly</p>
            </div>
            <div className="button-box">
                <input type="text" 
                    placeholder="Paste a Link to shorten it"
                    value={value} 
                    onChange={e => setValue(e.target.value)}/>
                <button onClick={handleClick}>Shorten</button>
            </div>
        </div>
    )
}

export default InputShortner