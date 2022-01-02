import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLBC"
          aria-controls="navbarLBC" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarLBC">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/conversations">
                <a className="nav-link" href="#">Conversations</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image src={`/avatars/${1}.png`} alt="Conversations avatar" width={25} height={25} />
          Thibault
        </div>
      </div>
    </nav>
  )
}
