import "./contact.css"
import "./contact-mobile.css"
import React, { useState } from "react"

export default function Contact() {

    const [message, setMessage] = useState(false);

    const [title, setTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setMessage(true);
        
        setTitle("");
        setPhone("");
        setDesc("");

    }

    return (
        <div className="contact contactdisplay" id="contact">
            <h2 className="contact-h2">Contact</h2>
            <div className="contact-container">
                <div className="contact-left">
                    <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/shake.svg" alt=":(" className="contact-left-img" />
                </div>
                <div className="contact-right">
                    <form
                        className="contact-form"
                    >
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <input
                            name="phone"
                            type="phone"
                            placeholder="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <textarea
                            name="text"
                            className="contact-textarea"
                            placeholder="Message"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>

                        <button className="contact-btn" type="submit"
                            onClick={handleSubmit}
                        >Submite

                        </button>
                        {message && <span className="sub-message">Thanks, I'll reply :)</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
