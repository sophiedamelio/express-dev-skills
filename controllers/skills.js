const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function create(req, res) {
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  console.log(req.params.id, "<--- req")
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(), // longer time complexity
    //this is n most likely because getAll() will take longer if more data
    time: req.time,
  });
}

function edit(req, res) {
  res.render("skills/edit", {
    skill: Skill.getOne(req.params.id),
  });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect("/skills");
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
  });
}
