const userPublicProfile = ({ username }) =>
  Object({
    query:
      "\n    query userPublicProfile($username: String!) {\n  matchedUser(username: $username) {\n    contestBadge {\n      name\n      expired\n      hoverText\n      icon\n    }\n    username\n    githubUrl\n    twitterUrl\n    linkedinUrl\n    profile {\n      ranking\n      userAvatar\n      realName\n      aboutMe\n      school\n      websites\n      countryName\n      company\n      jobTitle\n      skillTags\n      postViewCount\n      postViewCountDiff\n      reputation\n      reputationDiff\n      solutionCount\n      solutionCountDiff\n      categoryDiscussCount\n      categoryDiscussCountDiff\n    }\n  }\n}\n    ",
    variables: {
      username: username,
    },
    operationName: "userPublicProfile",
  });

const userStats = ({ username }) =>
  Object({
    operationName: "userProfileUserQuestionProgressV2",
    query: `query userProfileUserQuestionProgressV2($userSlug: String!) {
      userProfileUserQuestionProgressV2(userSlug: $userSlug) {
        numAcceptedQuestions {
          count
          difficulty
        }
        numFailedQuestions {
          count
          difficulty
        }
        numUntouchedQuestions {
          count
          difficulty
        }
        userSessionBeatsPercentage {
          difficulty
          percentage
        }
      }
    }`,
    variables: {
      userSlug: username,
    },
  });

const userLanguageStats = ({ username }) =>
  Object({
    query:
      "\n    query languageStats($username: String!) {\n  matchedUser(username: $username) {\n    languageProblemCount {\n      languageName\n      problemsSolved\n    }\n  }\n}\n    ",
    variables: {
      username: username,
    },
    operationName: "languageStats",
  });

const userSkillStats = ({ username }) =>
  Object({
    query:
      "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
    variables: {
      username: username,
    },
    operationName: "skillStats",
  });

const userContestRatingInfo = ({ username }) =>
  Object({
    query: `
    query userContestRankingInfo($username: String!) {
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
          name
        }
      }
      userContestRankingHistory(username: $username, attended: true) {
        attended
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        rating
        ranking
        contest {
          title
          startTime
        }
      }
    }`,
    variables: {
      username: username,
    },
    operationName: "userContestRankingInfo",
  });

const userProgessV2 = ({ username }) =>
  Object({
    query:
      "\n    query userProfileUserQuestionProgressV2($userSlug: String!) {\n  userProfileUserQuestionProgressV2(userSlug: $userSlug) {\n    numAcceptedQuestions {\n      count\n      difficulty\n    }\n    numFailedQuestions {\n      count\n      difficulty\n    }\n    numUntouchedQuestions {\n      count\n      difficulty\n    }\n    userSessionBeatsPercentage {\n      difficulty\n      percentage\n    }\n  }\n}\n    ",
    variables: {
      userSlug: username,
    },
    operationName: "userProfileUserQuestionProgressV2",
  });

const userSessionProgress = ({ username }) =>
  Object({
    query:
      "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
    variables: {
      username: username,
    },
    operationName: "userSessionProgress",
  });

const userBadges = ({ username }) =>
  Object({
    query:
      "\n    query userBadges($username: String!) {\n  matchedUser(username: $username) {\n    badges {\n      id\n      name\n      shortName\n      displayName\n      icon\n      hoverText\n      medal {\n        slug\n        config {\n          iconGif\n          iconGifBackground\n        }\n      }\n      creationDate\n      category\n    }\n    upcomingBadges {\n      name\n      icon\n      progress\n    }\n  }\n}\n    ",
    variables: {
      username: username,
    },
    operationName: "userBadges",
  });

const userProfileCalendar = ({ username }) =>
  Object({
    query:
      "\n    query userProfileCalendar($username: String!, $year: Int) {\n  matchedUser(username: $username) {\n    userCalendar(year: $year) {\n      activeYears\n      streak\n      totalActiveDays\n      dccBadges {\n        timestamp\n        badge {\n          name\n          icon\n        }\n      }\n      submissionCalendar\n    }\n  }\n}\n    ",
    variables: {
      username: username,
    },
    operationName: "userProfileCalendar",
  });

const userRecentAcSubmissions = ({ username, limit }) =>
  Object({
    query:
      "\n    query recentAcSubmissions($username: String!, $limit: Int!) {\n  recentAcSubmissionList(username: $username, limit: $limit) {\n    id\n    title\n    titleSlug\n    timestamp\n  }\n}\n    ",
    variables: {
      username: username,
      limit: limit,
    },
    operationName: "recentAcSubmissions",
  });

module.exports = {
  userPublicProfile,
  userStats,
  userLanguageStats,
  userSkillStats,
  userContestRatingInfo,
  userProgessV2,
  userSessionProgress,
  userBadges,
  userProfileCalendar,
  userRecentAcSubmissions,
};
