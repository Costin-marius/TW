import fs from "fs";
import { rimraf } from "rimraf";

const folderPath = "./testFolder";
fs.mkdirSync(folderPath, { recursive: true });
console.log("Folder creat!");

const filePath = `${folderPath}/fisier.txt`;
fs.writeFileSync(filePath, "Salut! Acesta este un fisier de test");
console.log("Fisier creat!");

await rimraf(folderPath);
console.log("Folderul s a sters!");
