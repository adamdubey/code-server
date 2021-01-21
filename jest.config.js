module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "lib", "out", "ci", "docs"],
  collectCoverage: true,
  coverageDirectory: "./test/coverage",
  coverageReporters: ["json", "text"],
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: ["out"]
}
