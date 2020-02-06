const express = require('express');

const server = express();

// Middleware q diz ao express p/ ler JSON do body da requisição
server.use(express.json())

// middleware local
function checkIdExists(req, res, next) {
  const id = req.params.id
  if (!projects[id]) {
    return res.status(404).json({ error: "id does not exists" })
  }

  return next();
}

let count = 0;
function countReq(req, res, next) {
  console.log(count++)

  return next();
}

server.use(countReq)

const projects = [
  { id: "1", title: "E-commerce", tasks: ["Marketplace"] },
  { id: "2", title: "App", tasks: ["Frontend"] }
]

server.get('/projects', (req, res) => {
  return res.json(projects);
})

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] })

  return res.json(projects)
})

server.post('/projects/:id/tasks', checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].tasks.push(title)

  return res.json(projects)
})

server.put('/projects/:id', checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].title = title;

  return res.json(projects);
})

server.delete('/projects/:id', checkIdExists, (req, res) => {
  const id = req.params;

  projects.splice(id, 1);

  return res.json(projects);
})


server.listen(3001);