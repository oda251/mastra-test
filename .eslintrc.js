// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript',],
    rules: {
        'object-curly-spacing': 'off', // ベースのルールをオフに
        '@typescript-eslint/object-curly-spacing': ['error', 'always', {
            arraysInObjects: true, objectsInObjects: true
        }], 'import/object-curly-spacing': ['error', 'always'], // オプション: 関連するその他のフォーマットルール
        'comma-spacing': ['error', {before: false, after: true}], // カンマの後にスペース
        'array-bracket-spacing': ['error', 'never'], // 配列の括弧内はスペースなし
    },
};