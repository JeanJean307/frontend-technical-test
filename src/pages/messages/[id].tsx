import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { InferGetServerSidePropsType } from 'next'
import { Message } from '../../types/message'
import { tsToDate } from '../../utils/timestamp'

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3005/messages/${params.id}`)
    const data: Message[] = await res.json()
    return {
        props: {
            conversationId: params.id,
            data,
        },
    }
}

function Messages({ conversationId, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [messages, setMessages] = useState<Message[]>(data);
    const [inputMessage, setInputMessage] = useState("");
    const messageContainer = useRef(null);

    useEffect(() => {
        messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
    }, [messages])

    function sendMessage() {
        if (inputMessage) {
            let message: Message = {
                id: 0,
                authorId: 1,
                body: inputMessage,
                conversationId: conversationId,
                timestamp: new Date().getTime() / 1000
            }
            const res = fetch(`http://localhost:3005/messages/${conversationId}`,
                {
                    method: "POST",
                    body: JSON.stringify({ body: inputMessage, timestamp: message.timestamp })
                });
            setMessages((prev) => [...prev, message]);
            setInputMessage("");
        }
    }

    function onEnter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0">Messages</h5>
            </div>
            <div className="card-body overflow-auto"
                style={{ position: "relative", height: "400px" }}
                ref={messageContainer}
            >
                {messages.map((c, idx) => {
                    return (
                        c.authorId === 1 ?
                            <div key={idx} className="d-flex flex-row justify-content-end mb-4 pt-1">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{c.body}</p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">{tsToDate(c.timestamp)}</p>
                                </div>
                                <div>
                                    <Image src={`/avatars/${c.authorId}.png`} alt="Sender avatar" width={45} height={45} />
                                </div>
                            </div>
                            :
                            <div key={idx} className="d-flex flex-row justify-content-start">
                                <div>
                                    <Image src={`/avatars/${c.authorId}.png`} alt="Sender avatar" width={45} height={45} />
                                </div>
                                <div>
                                    <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>{c.body}</p>
                                    <p className="small ms-3 mb-3 rounded-3 text-muted">{tsToDate(c.timestamp)}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <input type="text" className="form-control form-control-lg"
                    placeholder="Type message" aria-label="Type new message"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyUp={onEnter} />
                <a className="ms-1 text-muted" href="#!">
                    <i className="bi bi-paperclip" role="img" aria-label="Paperclip"></i>
                </a>
                <a className="ms-3 text-muted" href="#!">
                    <i className="bi bi-emoji-smile" role="img" aria-label="Smiley"></i>
                </a>
                <a className="ms-3 text-primary" href="#!" onClick={sendMessage}>
                    <i className="bi bi-send" role="img" aria-label="Send message"></i>
                </a>
            </div>
        </div>
    )
}

export default Messages;