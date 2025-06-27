const fs = require("fs");
const path = require("path");

const changes = [
  { from: /Ullash/gi, to: "Khairol" },
  { from: /Dipto/gi, to: "Khairol" },
  { from: /Islamic chat bot/gi, to: "Owner Khairol" },
  { from: /credit.?[:\-]?["']?\s*[^\n"']+/gi, to: 'credit: "Khairol"' }
];

function replaceInFile(filePath) {
  if (![".js", ".json", ".md"].includes(path.extname(filePath))) return;
  let data = fs.readFileSync(filePath, "utf8");
  let updated = data;
  changes.forEach(({ from, to }) => {
    updated = updated.replace(from, to);
  });
  if (updated !== data) fs.writeFileSync(filePath, updated);
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else replaceInFile(full);
  });
}

walk(".");
