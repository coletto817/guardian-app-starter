import axios from "axios";

const searchHandler = async (req, res) => {
  // console.log("req.query:", req.query);
  // console.log("req", req);
  const searchResults = await axios.get(
    "https://content.guardianapis.com/search",
    {
      params: {
        "api-key": process.env.GUARDIAN_API_KEY,
        q: req.query.term,
        "show-fields": "thumbnail",
      },
    }
  );

  const apiResults = searchResults.data.response.results.map((result) => {
    return {
      title: result.webTitle,
      url: result.webUrl,
      image: result.fields.thumbnail,
      id: result.id,
      date: result.webPublicationDate,
    };
  });
  res.status(200).json(apiResults);
};

export default searchHandler;
