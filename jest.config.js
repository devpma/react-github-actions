module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(svg|jpg|jpeg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
