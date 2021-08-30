**Goal**

- Fetch API into the server (it's already there)
- If you look in the `doSearch` function in `pages/index.jsx` it seems like we are passing the search term to `api/search`, but it's not being passed through. Looking at the documentation for [NextJS api routes](https://nextjs.org/docs/api-routes/api-middlewares) and the [Guardian content API](https://open-platform.theguardian.com/documentation/search), make sure the user is being returned relevant results.

**KEYWORDS ABOVE**

1. doSearch passing the search term to api/search, but it is not being passed through.

- if bug is fixed, it will return the users with the relevant articles with the keywords they key in.

**Update on bugs**

## focus on:

1. getting the "term" from the request (how to get query parameter from request in next.js)
2. with the search term you now have from above, how do you talk to Guardian API to give it the "term" to give you the relevant results
3. In the Documentation in Guardian, q is the keyword for searching query.
4. in next.js, req.query is the keyword for searching query.

**learning process**

1. learning next.js (how does the pages communicated with each other?) - jsx is the front end page, and the api is backend.
2. index.jsx will communicate with /api/search to allow the communication of the server -> Guardian API
3.

**New finds**

1. What is .env file?

- file lets you customize your individual working environment variables
- store API in there, and ensure the file in included in gitignore - so it won't be uploaded and push to gitHub
- read more: https://www.pluralsight.com/guides/how-to-store-and-read-configuration-files-using-react

2. Axios - one of the promise-based library - make http request easier, support older browsers, increase accessibility to user experience

**Bonus task if there's time :)**

1. Disabled search button when term input is less than 2 letters.

2. Add images to each result. (show-fields=thumbnail) - ??

   - How do I incorporate this into the http request or URL request?

3. Refactoring codes into smaller chunk to increase reusability/ maintainability.

   - structuring folders structure into components and UI

   * Component names always start with Capital. (i.e. <Welcome />)

4. Grid layout of cards for search result

## YOU CAN DO IT!

**REMINDER**
GIT COMMIT!
