import { render, screen } from "@testing-library/react"
import Navbar from "../navbar"

describe("Navbar", () => {
  it("should render correctly navbar", () => {
    render(<Navbar />)
    const navBar = screen.getByTestId('main-navbar')
    expect(navBar).toBeVisible()
  })
  it("should render correctly home link", () => {
    render(<Navbar />)
    expect(
      screen.getByText(/Home/)
    ).toBeInTheDocument()
  })
  it("should render correctly home link", () => {
    render(<Navbar />)
    expect(
      screen.getByText(/Conversations/)
    ).toBeInTheDocument()
  })
  it("should render correctly navbar hierarchy", () => {
    render(<Navbar />)
    const main = screen.getByTestId('main-navbar')
    const homeNav = screen.getByTestId('home-navbar')
    const convNav = screen.getByTestId('conversations-navbar')
    expect(main).toContainElement(homeNav)
    expect(main).toContainElement(convNav)
    expect(homeNav).not.toContainElement(convNav)
  })

})