import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Florist Andrea"
                message="Yes! it's on discount season"
                timestamp="45 minutes ago"
                profilePic="https://images.pexels.com/photos/3766221/pexels-photo-3766221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Chat
                name="Juana Flowers"
                message="Thank you for liking our decorations 🙂"
                timestamp="5 minutes ago"
                profilePic="https://images.pexels.com/photos/4058917/pexels-photo-4058917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Chat
                name="Miss Behaviun"
                message="Oh! Maybe Next time. Hope you order from us next time"
                timestamp="12 minutes ago"
                profilePic="https://images.pexels.com/photos/4063617/pexels-photo-4063617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
        </div>
    );
}

export default Chats;