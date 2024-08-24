const express = require("express");
const router = express.Router();
const query =  require("../queries/global");

const headers = {
  Accept: "*/*",
  Referer: "https://leetcode.com",
  Origin: "https://leetcode.com",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
  "Sec-Fetch-Mode": "cors",
  "Content-Type": "application/json",
};

const routes = [
	{
		url: "/daily_challenge",
		body: query.dailyChallenge
	},
	{
		url: "/contest_rating_histogram",
		body: query.contestRatingHistogram
	}
];

for (const route of routes) {
  router.get(route.url, async (request, response) => {
    const graphQLResponse = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(route.body(request.query)),
    });

    const json = await graphQLResponse.json();
    response.json(json);
  })
}

module.exports = router;