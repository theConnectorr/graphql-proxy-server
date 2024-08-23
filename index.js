const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 9090;

const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const headers = {
  Accept: "*/*",
  Referer: "https://leetcode.com",
  Origin: "https://leetcode.com",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
  "Sec-Fetch-Mode": "cors",
  "Content-Type": "application/json",
};

const userPublicProfile = (user) =>
  Object({
    query:
      "\n    query userPublicProfile($username: String!) {\n  matchedUser(username: $username) {\n    contestBadge {\n      name\n      expired\n      hoverText\n      icon\n    }\n    username\n    githubUrl\n    twitterUrl\n    linkedinUrl\n    profile {\n      ranking\n      userAvatar\n      realName\n      aboutMe\n      school\n      websites\n      countryName\n      company\n      jobTitle\n      skillTags\n      postViewCount\n      postViewCountDiff\n      reputation\n      reputationDiff\n      solutionCount\n      solutionCountDiff\n      categoryDiscussCount\n      categoryDiscussCountDiff\n    }\n  }\n}\n    ",
    variables: {
      username: user,
    },
    operationName: "userPublicProfile",
  });

app.get("/user", async (request, response) => {
  const graphQLResponse = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userPublicProfile("tle_solver")),
  });

  const json = await graphQLResponse.json();

  response.json(json);
});

app.listen(PORT, () => console.log("I'm running at", PORT));
