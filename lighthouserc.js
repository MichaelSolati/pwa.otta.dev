module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:4000"],
      startServerCommand: "npm run serve:ssr",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
