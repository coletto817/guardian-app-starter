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
3. In between local and external server - the "middleman" is called the middleware, the function helps fetch the request and receive a response from external source.
4. Why we seperate the api request - for business utility purpose and security!

**New finds**

1. What is .env file?

- file lets you customize your individual working environment variables for your application to consume in different environment.
- store API in there, and ensure the file in included in gitignore - so it won't be uploaded and push to gitHub
- read more: https://www.pluralsight.com/guides/how-to-store-and-read-configuration-files-using-react

2. Axios - one of the promise-based library - make http request easier, support older browsers, increase accessibility to user experience
3. lint - debugging tool - tells you where unused variable/ bad design pattern - https://eslint.org/

**Bonus task if there's time :)**

1. Disabled search button when term input is less than 2 letters.

2. Add images to each result. (show-fields=thumbnail) - ??

   - How do I incorporate this into the http request or URL request? (stackoverflow)
   - Using Postman to check API req and res.
   - pass it as parameter like the term?

3. Refactoring codes into smaller chunk to increase reusability/ maintainability.

   - structuring folders structure into components and UI

   * Component names always start with Capital. (i.e. <Welcome />)

4. Grid layout of cards for search result

   - https://nextjs.org/docs/basic-features/built-in-css-support
   - (...Create a pages/\_app.js file if not already present. Then, import the styles.css file.) - DIDNT WORK lol
   - error - ./styles/styles.css
     Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages/\_app.js. Or convert the import to Component-Level CSS (CSS Modules).
   - Keywords: move ALL glocal CSS imports to pages/\_app.js OR convert import to component-level.(https://nextjs.org/docs/messages/css-global, second options is the preferred approach)

5.

## YOU CAN DO IT!

**REMINDER**
GIT COMMIT!

**Challenges**

1. getting the project running on my local machine

   **ERROR MESSAGE**
   Installing template dependencies using yarnpkg...
   yarn add v1.22.4
   [1/4] 🔍 Resolving packages...
   [2/4] 🚚 Fetching packages...
   error jest-diff@27.0.6: The engine "node" is incompatible with this module. Expected version "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0". Got "14.6.0"
   error Found incompatible module.

   - researched how to switch the node version on my local machine
   - resolved it by using node version manager

2. Trying to understand Next.js and how the program works (there's pages and API folder)

   - Can I get a general overview of how the program works prior?
   - watched: https://www.youtube.com/watch?v=mTz0GXj8NN0
   - How does the API from our local server communicate with API from Guardian?

3. Thumbnail - results.fields.thumbnail (resolved with Rick)

   - Pass "show-fields": "thumbnail"!!! -> Double quotes required as it is being passed as variable in string type!
   -

4. Props validation - research.

**RESOLVED**

1. Initital task of returning relevant results
2. Disabled search button when input field is empty or less than 2 letters
3. Render image
4.
