import path from "path";
import { promises as fs } from "fs";
import { vi } from "vitest";

vi.mock("fs");

export default function writeData(data, filename) {
    const storagePath = path.join(process.cwd(), "data", filename);
    return fs.writeFile(storagePath, data);
}
