export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer mt-auto py-3 bg-light text-center">
      &copy; leboncoin - {year}
    </footer>
  )
}
