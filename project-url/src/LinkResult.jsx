import { useState } from "react"

const LinkResult = () => {
    const [shortenLink , setShortenLink] = useState("hello world");

    return (
        <div className="result">
            <p>{shortenLink}</p>

        <CopyToClipBoard/>

            <button> Copy to clip board</button>
        </div>
    )
}

export default LinkResult