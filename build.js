import { execSync } from "node:child_process";

execSync("node ./node_modules/vite/bin/vite.js build", {
  stdio: "inherit",
});
