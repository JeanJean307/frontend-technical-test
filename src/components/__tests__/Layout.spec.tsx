import { render, screen } from "@testing-library/react"
import Layout from "../layout"

describe("Layout", () => {
  it("should render correctly base nav and footer layout", () => {
    render(<Layout ><></></Layout>)
    const navBar = screen.getByTestId('main-navbar')
    const footer = screen.getByTestId('footer')
    expect(navBar).toBeVisible()
    expect(footer).toBeVisible()
  })

  it("should render correctly children Layout", () => {
    render(<Layout><div title="testDiv">test</div></Layout>)
    const testDiv = screen.getByTitle('testDiv')
    expect(testDiv).toBeVisible()
    expect(testDiv).toHaveTextContent("test")
    
  })
})