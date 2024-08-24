const dailyChallenge = ({}) =>
  Object({
    query:
      "\n    query questionOfToday {\n  activeDailyCodingChallengeQuestion {\n    date\n    userStatus\n    link\n    question {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      hasVideoSolution\n      hasSolution\n      topicTags {\n        name\n        id\n        slug\n      }\n    }\n  }\n}\n    ",
    variables: {},
    operationName: "questionOfToday",
  });

const contestRatingHistogram = ({}) =>
  Object({
    query:
      "\n    query contestRatingHistogram {\n  contestRatingHistogram {\n    userCount\n    ratingStart\n    ratingEnd\n    topPercentage\n  }\n}\n    ",
    variables: {},
    operationName: "contestRatingHistogram",
  });

module.exports = { dailyChallenge, contestRatingHistogram };
