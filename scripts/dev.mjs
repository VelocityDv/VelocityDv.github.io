import { createServer } from "vite";
import { spawn } from "node:child_process";

const server = await createServer();
await server.listen();
const url = server.resolvedUrls.local[0];
console.log(`vite dev server: ${url}`);

const electronPath = (await import("electron")).default;
const child = spawn(electronPath, ["."], {
  stdio: "inherit",
  env: { ...process.env, VITE_DEV_SERVER_URL: url },
});
child.on("exit", () => {
  server.close().then(() => process.exit(0));
});
