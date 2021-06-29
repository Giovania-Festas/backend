module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es2021: true,
        node: true
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        indent: ['error', 4]
    }
}