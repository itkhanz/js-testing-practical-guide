import fs from "fs";
import path from "path";

import { it, vi } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
window.location.href = "http://127.0.0.1:8080";
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);

it("first test", () => {
    showError("test");
});
