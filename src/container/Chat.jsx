import React, {useEffect, useRef, useState} from 'react';
import './Chat.css'
import GetMessage from "../component/getMessage/GetMessage";
import axios from "axios";
import PostMessage from "../component/postMessage/PostMessage";


const Chat = () => {
    const [getMessage, setGetMessage] = useState([])
    let myDateTime = '';
    // const ref = useRef(null);
    const get = async () => {
        const responce = await axios.get(`http://146.185.154.90:8000/messages${myDateTime}`)
        const messages = await responce.data
        if(messages.lenght > 0 ) {
            myDateTime = '?datetime=' + messages[messages.lenght - 1]['datetime']
        }
        setGetMessage(messages.reverse())
    }
    const [state, setState] = useState(
        {}
        );
    const inputhandler = (e) => {
        setState((prevState) => {

            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const sendData =async (e) => {
        e.preventDefault()
        e.target.reset()
        const data = new URLSearchParams()
        Object.keys(state).forEach((key) =>{
            data.set(key, state[key])
        })
        try {
            const reponse = await axios.post(`http://146.185.154.90:8000/messages`,data)
            console.log(reponse)

        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        get()
        const int= setInterval(() => {
            get()
        }, 1500)
        return () => {
            clearInterval(int)
        }
    }, [setGetMessage])

    return (
        <div className="chat">
            <PostMessage
                submit={sendData}
                onChange={(e) => inputhandler(e)}
            />

            {
                getMessage.map(message => {
                    return <GetMessage
                        key={message._id}
                    author={message.author}
                    message={message.message}
                    datetime={message.datetime}
                    />
                } )
            }
        </div>
    )
}
export default Chat;