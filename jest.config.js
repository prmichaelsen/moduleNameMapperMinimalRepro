const tsconfigPathsJest = require("tsconfig-paths-jest");
const tsconfig = require("./tsconfig.json");

module.exports = {
    roots: [
        "<rootDir>/src/",
        "<rootDir>/tests/",
    ],
    moduleFileExtensions: [
        "ts",
        "js",
        "html",
        "svg",
    ],
    testMatch: [
        "**/*.test.(ts|js)",
    ],
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        '^.+\\.(html|svg)$': 'ts-jest',
    },
    globals: {
        "ts-jest": {
            tsConfig: {
                esModuleInterop: true,
            },
            stringifyContentPathRegex: "^.+\\.(html|svg)$",
        },
    },
    moduleNameMapper: {
        ...tsconfigPathsJest(tsconfig),
        "@Mocks(.*)$": "<rootDir>/tests/__mocks__/$1",
        "@Data(.*)$": "<rootDir>/tests/__data__/$1",
    },
    clearMocks: true,
    setupFiles: [
        "jest-canvas-mock",
    ],
    collectCoverageFrom: [
        "**/*.ts",
        "!**/integration/*/bootstrap.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    coverageReporters: [
        "cobertura",
        "html",
        "text",
        "text-summary",
    ],
};
