#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline-sync");

function run() {
  const root = process.cwd();
  const docsDir = path.join(root, "docs");
  const jsonPath = path.join(docsDir, "info.json");
  const readmePath = path.join(root, "README.md");

  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
    console.log("📂 Pasta docs criada.");
  }
if (fs.existsSync(jsonPath)) {
  console.log("⚠️ docs/info.json já existe. Não sobrescrevendo.");
  return;
}

const title = readline.question("Qual será o título do projeto? ", { encoding: "utf8" });
const description = readline.question("Qual será a descrição do projeto? ",{ encoding: "utf8" });
const status = readline.question("Qual será a status do projeto? ",{ encoding: "utf8" });
const stacksInput = readline.question("Quais as stacks do projeto? (separe por vírgula) ",{ encoding: "utf8" });
const stacks = stacksInput.split(",").map(s => s.trim()).filter(Boolean);

  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        images: ["https://picsum.photos/id/237/200/300"],
        title: title,
        description: description,
        status: status,
        stacks: stacks,
        links: [
          {
            name: "GitHub",
            url: "",
          },
          {
            name: "Live Demo",
            url: "",
          },
        ],
      },
      null,
      2
    )
  );
  console.log("✅ docs/info.json criado.");

  if (fs.existsSync(readmePath)) {
    fs.appendFileSync(
      readmePath,
      "\n\n## Nota\nProjeto inicializado com Paterni Init.\n"
    );
    console.log("📝 README.md atualizado.");
  } else {
    fs.writeFileSync(readmePath, "# Projeto\n\nCriado com Paterni Init.\n");
    console.log("📝 README.md criado.");
  }
}

run();
