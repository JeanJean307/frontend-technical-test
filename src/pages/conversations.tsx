import Link from 'next/link'
import { InferGetServerSidePropsType } from 'next'
import { Conversation } from '../types/conversation'
import { tsToDate } from '../utils/timestamp'
import Image from 'next/image'

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3005/conversations/1`)
  const data: Conversation[] = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Conversations({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (

    <div className="card"  style={{ position: "relative", height: "400px", width: "300px" }}>
      <div className="card-header d-flex justify-content-between align-items-center p-3">
        <h5 className="mb-0">Conversations</h5>
      </div>
      <div className="card-body overflow-auto">
        <ul className="list-unstyled mb-0">
          {data.map((c) => {
            let messagePath = `messages/${c.id}`;
            let name = c.recipientId === 1 ? c.senderNickname : c.recipientNickname;
            let id = c.recipientId === 1 ? c.senderId : c.recipientId;
            return (
              <li key={c.id} className="p-2 border-bottom">
                <Link href={messagePath}>
                  <a>
                    <div className="d-flex flex-row">
                      <div>
                        <Image src={`/avatars/${id}.png`} alt="Conversations avatar" width={65} height={65} />
                        <span className="badge bg-success badge-dot"></span>
                      </div>
                      <div className="pt-1">
                        <p className="fw-bold mb-0">{name}</p>
                        <p className="small text-muted">{tsToDate(c.lastMessageTimestamp)}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Conversations;
