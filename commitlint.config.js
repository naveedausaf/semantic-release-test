/* eslint-env node */
module.exports = {
  extends: ["@commitlint/config-angular"],
  parserPreset: "conventional-changelog-angular",
  // ignores: [
  //   (commitmsg) => {
  //     const regex = /^Merge branch '(?:.*)' into (?:.*)$/;
  //     regex.test(commitmsg);
  //   },
  // ],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 72],
    "header-full-stop": [2, "never", "."],
    "body-leading-blank": [2, "always"],
  },
};
