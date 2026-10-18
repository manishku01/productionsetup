export default {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: "A new feature",
            title: "Features",
            emoji: "✨",
          },
          fix: { description: "A bug fix", title: "Bug Fixes", emoji: "🐛" },
          docs: {
            description: "Documentation only changes",
            title: "Documentation",
            emoji: "📚",
          },
          // ... Other types
        },
      },
    },
  },
};
