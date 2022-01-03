import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="d-flex flex-column align-items-center">
            <i className="bi bi-exclamation-triangle-fill display-1" role="img" aria-label="Error server image"/>
            <h1>404 Page not found</h1>
            <Link href="/">
                <a >Go back home</a>
            </Link>
        </div>
    )
}
