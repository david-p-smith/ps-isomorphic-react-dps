# ps-isomorphic-react-dps
Follow-along with Pluralsight - Isomorphic React by Daniel Stern.

# Challenge Task 1 - Tags Route
Add another route, tags, that lists the most recent question under any given tag.  

Update the TagsList container to link to the appropriate page when a tag is clicked.  

http://localhost:3000/tags/react should display a list of React-tagged questions.  

Example URL: https://api.stackexchange.com/2.2/search/advanced?tagged=reactjs&site=stackoverflow

# Challenge Task 2 - Fetching Answers

Load the answers as well as the question when rendering the Question Detail view.  

Answers should be preloaded when server loading, but should be fetched after question details are loaded in the client.  

Example URL: https://api.stackexchange.com/2.2/questions/123/answers?site=stackoverflow

# Challenge Task 3 - Paging
WARNING - High difficulty, significant effort required!

When user reaches the bottom of the Question List view, load the next 30 questions asynchronously.  

When the page is refreshed, the user's scroll position and the list contents should be preserved.  

Scroll and list should also be preserved when navigating to Question Detail and then navigating back.  