import { render, screen } from "@testing-library/react"
import Footer from "../footer"

describe("Footer", () => {
  it("should render correctly footer", () => {
    render(<Footer />)
    expect(
      screen.getByText(/leboncoin/)
    ).toBeInTheDocument()
  })
  
})