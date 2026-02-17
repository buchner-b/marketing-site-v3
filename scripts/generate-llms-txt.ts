/**
 * generate-llms-txt.ts
 *
 * Build-time script to generate /public/llms.txt per llmstxt.org spec.
 * Run as part of the build step: `npx tsx scripts/generate-llms-txt.ts`
 *
 * This file provides a structured overview of the site for LLM crawlers.
 */

import * as fs from "fs";
import * as path from "path";

const OUTPUT_PATH = path.join(process.cwd(), "public", "llms.txt");

const content = `# Augos
> Market-leading energy intelligence platform for South Africa.

## About
Augos provides energy intelligence solutions for the South African market,
helping organisations manage, monitor, and optimise their energy consumption.

## Pages
- /: Home — Overview of Augos energy intelligence platform

## Contact
- Website: https://augos.co.za
`;

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, content, "utf-8");

console.log(`✓ Generated llms.txt at ${OUTPUT_PATH}`);
