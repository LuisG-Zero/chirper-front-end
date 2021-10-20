import React, { useState } from "react";

const App = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [chirps, setChirps] = useState([
        {
            username: "Luis",
            message: "This is my chirp",
        },
        {
            username: "Luis",
            message: "This is my chirp",
        },
        {
            username: "Luis",
            message: "This is my chirp",
        },
    ]);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
    const handleClick = () => {
        const newChirp = {
            username: username,
            message: message,
        };

        setChirps([...chirps, newChirp])
    }

    return (
        <>
            <h1>Chirper</h1>

            <label htmlFor="username-input">Who are you?</label>
            <input
                type="text"
                name="username-input"
                id=""
                value={username}
                onChange={handleUsernameChange}
            />
            <label htmlFor="message-input">What do you want to say?</label>
            <textarea
                name="message-input"
                cols="30"
                rows="10"
                value={message}
                onChange={handleMessageChange}
            ></textarea>

            <button onClick={handleClick}>Submit</button>

            <div id="timeline-container">
                {chirps.map((chirp, index) => (
                    <div key={index}>
                        <div>{chirp.username}</div>
                        <p>{chirp.message}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default App;
