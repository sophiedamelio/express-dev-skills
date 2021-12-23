const skills = [
  { skill: "Manipulate the DOM", id: 1 },
  { skill: "Create responsive CSS", id: 2 },
  { skill: "Read errors", id: 3 },
  { skill: "Ask questions frequently", id: 4 },
  { skill: "Read and utilize documentation", id: 5 },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
  // list the functions to be exported here
};

// functions go here, big and small

function create(skill) {
  // this creates a random number to be the id of 'new' created skills
  skill.id = Date.now() % 100000000;
  skills.push(skill);
}

function deleteOne(id) {
  const i = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(i, 1);
}

function update(id, skill) {
  const i = skills.findIndex((skill) => skill.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(i, 1, skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}
