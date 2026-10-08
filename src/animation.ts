const BOLD = "\x1b[1m";
const ITALIC = "\x1b[3m";
const RESET = "\x1b[0m";

export function animate(featureName: string): void {
  console.log(`${BOLD}${ITALIC}Party! Party! Party! - ${featureName} Time${RESET}`);
}
