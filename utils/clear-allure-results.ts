import { mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

export default async function clearAllureResults(): Promise<void> {
  const resultsDir = resolve(process.cwd(), "allure-results");
  await rm(resultsDir, { recursive: true, force: true });
  await mkdir(resultsDir, { recursive: true });
}
