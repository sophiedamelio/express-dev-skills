const skills = [
  { skill: "Manipulate the DOM", id: 1 },
  { skill: "create responsive CSS", id: 2 },
  { skill: "read errors", id: 3 },
  { skill: "ask questions always", id: 4 },
  { skill: "read and utilize documentation", id: 5 },
];

module.exports = {
  getAll: function () {
    return skills;
  },
};
