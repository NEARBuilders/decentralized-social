import { createServerFn } from "@tanstack/start";
import * as fs from "fs";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
  );
}

export const getCount = createServerFn("GET", () => {
  return readCount();
});

export const updateCount = createServerFn("POST", async (addBy: number) => {
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + addBy}`);
});
