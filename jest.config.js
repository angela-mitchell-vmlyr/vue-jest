module.exports = {
    moduleFileExtensions: ["js", "vue"],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"]
}