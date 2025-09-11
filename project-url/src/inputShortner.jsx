const InputShortner =() => {
    return(
        <div className="inputContainer">
            <h1>URL <span>Shortner</span></h1>
            <div className="button-box">
                <input type="text" placeholder="Paste a Link to shorten it"/>
                <button>Shorten</button>
            </div>
        </div>
    )
}

export default InputShortner