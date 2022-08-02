export default function (plop) {
  // controller generator
  plop.setGenerator("f", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name new create folder please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Components/{{name}}/{{name}}.jsx",
        templateFile: "plop-templates/createFileJsx.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{name}}/{{name}}.css",
        templateFile: "plop-templates/createFileCss.hbs",
      },
    ],
  });
}

// const config = (plop) => {
//   plop.setGenerator("post", {
//     description: "Generate a gatsby starter blog post.",
//     promts: [
//       {
//         type: "input",
//         name: "title",
//         message: "What do you want to title this post",
//       },
//       {
//         type: "input",
//         name: "description",
//         message: "What is this post about",
//       },
//     ],
//     actions: [
//       {
//         type: "add",
//         path: "react-responsive-portfolio/src/Components/example.js",
//       },
//     ],
//   });
// };

// module.exports = config;
