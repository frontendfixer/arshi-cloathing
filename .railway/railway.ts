import { defineRailway, project, service } from "railway/iac";

export default defineRailway(() => {
  const web = service("web", {
    build: {
      builder: "RAILPACK",
      railpackVersion: "0.39.0",
      buildCommand: "bun run build",
    },
    start: "HOSTNAME=0.0.0.0 bun .next/standalone/server.js",
    healthcheck: "/",
    healthcheckTimeout: 100,
    deploy: {
      restartPolicyType: "ON_FAILURE",
      restartPolicyMaxRetries: 10,
    },
    env: {
      NODE_ENV: "production",
    },
  });

  return project("arshi", {
    resources: [web],
  });
});
