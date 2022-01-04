First of all, i really appreciated do this test.

# My Process

- I Forked and cloned repository
- I used Visual Studio Code to open project
  - Run and discover the solution
  - Check how server retrieve data
- I added first page Conversation
  - Use server side rendenring(SSR) because we want always fresh data
  - Do the list of links to access messages
- I added second page messages/[id]
  - Display messages for selected conversation
  - Use SSR

Ok, now i took a step back and i thought how i could improve my UI. I decided to used Bootstrap + Bootstrap Icons and added Layout to navigate more easily.

- I created my Layout component and use it inside _app
  - I also added two little components Navbar and Footer
- I linked Bootstrap in Layout from CDN for simplicity
- I refactored my pages with Boostrap possibilities
- In messages page, i added input text and used Optimistic Rendering when user send a message

## Bonus 1

I created a component newConversation 
- Display users in dropdown list
- Filter users that logged user has already spoken

## Bonus 2

I used _error, 404 and 500 pages to display specific error message.
 - Only visible in production

## Make the app better

- Accessibility
  - I checked how my DOM structure are build
  - I add some attributes aria- and title if missed
  - Bootstrap give often best practices

- Tests
  - I added tests for my components and utils method

## Time spend

I worked about 12 hours distributed in this way
- 5 hours: Conversations and Messages
- 4 hours: Bonus
- 3 hours: Tests and Doc

# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
