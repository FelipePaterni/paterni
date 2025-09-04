

function run() {
  const root = process.cwd();
  const docsDir = path.join(root, "docs");
  const jsonPath = path.join(docsDir, "lfs.json");
  const readmePath = path.join(root, "README.md");

  // Criar pasta docs
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
    console.log("📂 Pasta docs criada.");
  }

  // Criar/atualizar lfs.json
  const jsonContent = {
    status: "instalado",
    data: new Date().toISOString()
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
  console.log("✅ docs/lfs.json criado/atualizado.");

  // Atualizar README.md
  if (fs.existsSync(readmePath)) {
    fs.appendFileSync(readmePath, "\n\n## Nota\nProjeto inicializado com LFS INIT.\n");
    console.log("📝 README.md atualizado.");
  } else {
    fs.writeFileSync(readmePath, "# Projeto\n\nCriado com LFS INIT.\n");
    console.log("📝 README.md criado.");
  }
}

run();
