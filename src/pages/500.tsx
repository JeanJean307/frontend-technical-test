import Link from 'next/link';

export default function Custom500() {
    return (
        <div className="d-flex flex-column align-items-center">
            <i className="bi bi-exclamation-triangle-fill display-1"></i>
            <h1>We are sorry - There was an error</h1>
            <Link href="/">
                <a>Go back home</a>
            </Link>
        </div>
    )
}
