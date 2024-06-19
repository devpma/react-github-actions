module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(svg|jpg|jpeg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
