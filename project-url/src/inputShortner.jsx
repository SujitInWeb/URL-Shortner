import { useState } from "react"

const InputShortner =({setInputValue}) => {
    const [value , setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

    return(
        <div className="inputContainer">
            <h1>URL <span>Shortner</span></h1>
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