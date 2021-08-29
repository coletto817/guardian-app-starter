**Goal**

- Fetch API into the server (it's already there)
- If you look in the `doSearch` function in `pages/index.jsx` it seems like we are passing the search term to `api/search`, but it's not being passed through. Looking at the documentation for [NextJS api routes](https://nextjs.org/docs/api-routes/api-middlewares) and the [Guardian content API](https://open-platform.theguardian.com/documentation/search), make sure the user is being returned relevant results.

**KEYWORDS ABOVE**

1. doSearch passing the search term to api/search, but it is not being passed through.

- if bug is fixed, it will return the users with the relevant articles with the keywords they key in.

**Update on bugs**

- index.jsx has call out to search.js and passed through the {term} as their argument
- in search.js, where does it capture the {term}/ query?
- in Guardian Documentation link - the query term they use is q

**learning process**

1. learning next.js (how does the pages communicated with each other?) - jsx is the front end page, and the api is backend.
2. index.jsx will communicate with /api/search to allow the communication of the server -> Guardian API
3.

**New finds**

1. What is .env file?

- file lets you customize your individual working environment variables
- store API in there, and ensure the file in included in gitignore - so it won't be uploaded and push to gitHub
- read more: https://www.pluralsight.com/guides/how-to-store-and-read-configuration-files-using-react

2. Axios - one of the promise-based library - make fetch request easier, support older browsers, increase accessibility to user experience

**Bonus task if there's time :)**

## YOU CAN DO IT!
