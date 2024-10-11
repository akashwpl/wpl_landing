export const highlightWord = (text = "", lineBreak = true, navigate) => {
    const elements = [];

    // Updated regex to include dots in usernames and mentions
    const regex = /(https?:\/\/[^\s]+|\B\/[\w.-]+|\B@[\w.-]+|\B\$\S+|\n+)/g;

    const createElement = (part, index) => {
        if (part.match(/^https?:\/\/[^\s]+$/)) {
            return (
                <a key={index} href={part} onClick={e => e.stopPropagation()} className="cursor-pointer break-all text-primary hover:underline-offset-2 hover:underline text-wrap flex-wrap" target="_blank" rel="noopener noreferrer">
                    {part}
                </a>
            );
        } else {
            return part;
        }
    };

    text.split(regex).forEach((part, index) => {
        if (part) {
            elements.push(createElement(part, index));
        }
    });

    return elements;
};

export const BASE_URL = "https://api.thewpl.xyz"
// export const BASE_URL = "https://a120-2405-201-23-4175-750e-11b6-e891-5b3f.ngrok-free.app"