import { useState, useEffect } from "react"

const useCopyToClipboard = () => {
    const [copied, setCopied] = useState(false);
    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            return true;
        } catch (err) {
            console.error('failed to copy :', err);
            setCopied(false);
            return false;
        }
    };
    return { copied, copy };
};

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { copied, copy } = useCopyToClipboard();

    const shortenUrl = async (url) => {
        setLoading(true);
        setError("");
        
        try {
            // Use TinyURL's API
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const shortenedUrl = await response.text();
            
            // Check if the response is a valid URL
            if (shortenedUrl.startsWith('https://tinyurl.com/')) {
                setShortenLink(shortenedUrl);
            } else {
                throw new Error('Invalid URL or API error');
            }
        } catch (err) {
            console.error('Error shortening URL:', err);
            setError('Failed to shorten URL. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputValue && inputValue.trim() !== "") {
            // Basic URL validation
            if (inputValue.startsWith('http://') || inputValue.startsWith('https://')) {
                shortenUrl(inputValue);
            } else {
                // Add https:// if no protocol specified
                shortenUrl(`https://${inputValue}`);
            }
        }
    }, [inputValue]);

    const handleCopy = () => {
        copy(shortenLink);
    };

    // Don't render anything if no input
    if (!inputValue) {
        return null;
    }

    return (
        <div className="result">
            {loading && <p>Shortening your URL...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            {shortenLink && !loading && !error && (
                <>
                    <p>{shortenLink}</p>
                    <button onClick={handleCopy}> 
                        {copied ? "Copied!" : "Copy to clipboard"}
                    </button>
                </>
            )}
        </div>
    );
};

export default LinkResult;