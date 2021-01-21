module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules/", "lib/vscode/"],
  roots: ["../"],
  collectCoverage: true,
  collectCoverageFrom: ["../src/**/*.ts"],
  coverageDirectory: "./coverage",
  coverageReporters: ["json", "text"],
}