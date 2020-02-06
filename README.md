<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 01: Node.js concepts
</h3>

<blockquote align="center">“Your only limitation is yourself!”</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/roberthpereira/BCP_CHALLENGE01?color=%2304D361">

  <a href="https://www.linkedin.com/in/roberthpereira/">
    <img alt="Made by Robrth" src="https://img.shields.io/badge/made%20by-Roberth Pereira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/roberthpereira/BCP_CHALLENGE01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/roberthpereira/BCP_CHALLENGE01?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-about-the-challenge">About the Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#fire-installation-and-execution">Installation and Execution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#insomnia">Insomnia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#thinking-how-to-contribute">How to Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: About the Challenge

Create an application to store projects and their tasks from scratch using [Express].

The [CRUD] routes (Create, Read, Updade and Delete) for the projects and the Create route for the tasks were created as requested in the challenge description.

[Middlewares][Middleware] were also created, a global one that shows the number of requests made in the API, and another that was used only on routes that needed the project ID information.

I also created a last [Middleware] to check if the title field was sent correctly to the API, and this [middleware] was used only in the routes that needed the field.

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

- [Node.js][nodejs]
- [Express]
- [Nodemon](https://nodemon.io/)
- [Yarn]
- [NPM]
- [Editor Config][vceditconfig]
- [VS Code][vc]
- [Insomnia]

## :fire: Installation and Execution

1. Clone this repository;
2. Enter the folder by running `cd BCP_CHALLENGE01`;
3. Run `yarn` or `npm install` to install the dependencies;
4. Run `yarn dev` or `npm run dev` to start the server.

## Insomnia

Debug APIs like a __human__, not a robot. Finally, a REST client you'll love

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Test%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjerp86%2F2020_desafio01%2Fmaster%2FInsomnia.json)

## :thinking: How to Contribute

1. Fork this repository;
2. Create a branch with your feature: `git checkout -b minha_feature`;
3. Commit your branch: `git commit -m "feature: My new feature"`;
4. Push to your branch: `git push origin minha_feature`.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/roberthpereira/BCP_CHALLENGE01/blob/master/LICENSE) for more information.

---

Made with ♥ by Roberth :wave: [Get in touch!][roberth]

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/
[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[roberth]: https://www.linkedin.com/in/roberthpereira/
[CRUD]: https://pt.wikipedia.org/wiki/CRUD
[Middleware]: https://expressjs.com/pt-br/guide/writing-middleware.html
[Insomnia]: https://insomnia.rest/
