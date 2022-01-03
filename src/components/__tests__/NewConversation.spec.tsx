import { render, waitFor, screen } from "@testing-library/react"
import React from "react";
import NewConversation from "../newConversation"

describe("NewConversation", () => {

  const mockUsers = [{
    "id": 5,
    "nickname": "Jean-François",
    "token": "xxxx"
  },
  {
    "id": 6,
    "nickname": "Emmy",
    "token": "xxxx"
  }]

  afterEach(() => {
    global.fetch = undefined;
  })

  it("should render correctly drop down button", async () => {
    global.fetch = () => Promise.resolve({ json: () => [] } as any)
    render(<NewConversation existingUserId={[]} />)
    await waitFor(() => {
      expect(screen.getByTestId("dropdown-conversation")).toBeInTheDocument();
    });
  })

  it("should render correctly users name", async () => {
    global.fetch = () => Promise.resolve({ json: () => mockUsers } as any)
    render(<NewConversation existingUserId={[]} />)
    await waitFor(() => {
      expect(screen.getByText(/Jean-François/)).toBeInTheDocument();
      expect(screen.getByText(/Emmy/)).toBeInTheDocument();
    });
  })

  it("should filter correctly users when discussion already exist", async () => {
    global.fetch = () => Promise.resolve({ json: () => mockUsers } as any)
    render(<NewConversation existingUserId={[5]} />)
    await waitFor(() => {
      const jfElmt = screen.queryByText(/Jean-François/)
      expect(jfElmt).not.toBeInTheDocument();
      expect(screen.getByText(/Emmy/)).toBeInTheDocument();
    });
  })

})