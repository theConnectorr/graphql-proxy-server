const express = require("express");
const router = express.Router();
const query = require("../queries/user");

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
    url: "/public_profile",
    body: query.userPublicProfile
  },
  {
    url: "/stats",
    body: query.userStats
  },
  {
    url: "/language_stats",
    body: query.userLanguageStats
  },
  {
    url: "/skill_stats",
    body: query.userSkillStats
  },
  {
    url: "/contest_rating_info",
    body: query.userContestRatingInfo
  },
  {
    url: "/progress_v2",
    body: query.userProgessV2
  },
  {
    url: "session_progress",
    body: query.userSessionProgress
  },
  {
    url: "/badges", 
    body: query.userBadges
  },
  {
    url: "/profile_calendar",
    body: query.userProfileCalendar
  },
  {
    url: "/recent_ac_submissions",
    body: query.userRecentAcSubmissions
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
