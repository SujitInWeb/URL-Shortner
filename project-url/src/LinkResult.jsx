import { useState } from "react"

const  useCopyToClipboard = () =>{
    const [copied , setCopied] = useState(false);
    const copy = async (text) =>{
        try{
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false),2000);
            return true;
        }catch(err){
            console.error('failed to copy :' , err);
            setCopied (false);
            return false;
        }
    };
    return {copied ,copy};
};

const LinkResult = () => {
    const [shortenLink , setShortenLink] = useState("hello world");
    const {copied , copy} = useCopyToClipboard();

    const handleCopy = () =>{
        copy(shortenLink);
    };
    return (
        <div className="result">
            <p>{shortenLink}</p>
            <button onClick={handleCopy}> 
                {copied ? "Copied!" : "Copy to clipboard"}
            </button>
        </div>
    )
}

export default LinkResult