import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import { User } from '../types/user'
import Router from 'next/router'

export default function NewConversation({ existingUserId }) {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function loadUser() {
      const res = await fetch(`http://localhost:3005/users`)
      const us: User[] = await res.json()
      setUsers(us.filter(u => (!existingUserId.includes(u.id) && u.id !== getLoggedUserId())))
    }
    loadUser();
  }, []);

  async function addConversation(recipientId: Number) {
    const res = await fetch(`http://localhost:3005/conversations/${getLoggedUserId()}`,
      {
        method: "POST",
        body: JSON.stringify({ recipientId })
      });
    const conversation = await res.json();
    Router.push(`messages/${conversation.id}`);
  }

  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle w-100" type="button"
        id="dropDownNewDiscussion" data-bs-toggle="dropdown" aria-expanded="false">
        New discussion
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropDownNewDiscussion">
        {
          users.map((u) => {
            return (
              <li key={u.id} onClick={() => addConversation(u.id)}>
                <a className="dropdown-item d-flex align-items-center">
                  <Image src={`/avatars/${u.id}.png`} alt="Nouvelle conversation avatar" width={25} height={25} />
                  {u.nickname}
                </a>
              </li>)
          })
        }
      </ul>
    </div>
  )
}
