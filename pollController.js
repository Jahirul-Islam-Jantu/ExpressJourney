const poll = require("./poll");

exports.createPollGetController = (req, res, next) => {
  res.render("create");
};

exports.createPollPostController = (req, res, next) => {
  let { title, description, options } = req.body;
  options = option.map((opt) => {
    let obj = {
      name: opt,
      vote: 0,
    };
  });

  let poll = new poll({
    title,
    description,
    options,
    totalVote,
  });

  res.render("create");
};
