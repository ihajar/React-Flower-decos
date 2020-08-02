import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessgaes] = useState([
        {
            message: "Hi, I would like to order your collection for my event!"
        },
        {
            name: "Florist Andrea",
            image: "https://images.pexels.com/photos/3766221/pexels-photo-3766221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            message: 'Thank you'
        }, 
        {
            name: "Florist Andrea'",
            image: "https://images.pexels.com/photos/3766221/pexels-photo-3766221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            message: 'Thats amazig collection you have choosed'
        },       
    ]);
    const handleSend = e => {
        e.preventDefault();
        setMessgaes([...messages, {message:input }]);
        setInput("");
    };
    
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You liked Andrea's decoration, go step ahead with your order!</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
             
            )}

            <div >
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message" 
                        type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;