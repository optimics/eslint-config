const COMPLEXITY_MAX = 25
const DEPTH_MAX = 5
const FUNCTION_LINES_MAX = 200
const INDENT_DEFAULT = 2
const LINES_MAX = 500
const STATEMENTS_MAX = 20

module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'array-callback-return': ['error'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error'],
    camelcase: [
      'error',
      {
        allow: ['UNSAFE_', '[a-zA-Z0-9]+__[a-zA-Z0-9]+'],
        properties: 'always',
        ignoreDestructuring: true,
        ignoreGlobals: true,
        ignoreImports: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    complexity: ['error', COMPLEXITY_MAX],
    'consistent-return': ['error'],
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    eqeqeq: ['error', 'always'],
    'func-call-spacing': ['error'],
    'function-call-argument-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'guard-for-in': ['error'],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': ['error'],
    'key-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-depth': ['error', DEPTH_MAX],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'max-lines': ['error', LINES_MAX],
    'max-lines-per-function': ['error', FUNCTION_LINES_MAX],
    'max-statements': [
      'error',
      STATEMENTS_MAX,
      {
        ignoreTopLevelFunctions: true,
      },
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    'operator-linebreak': ['error'],
    'new-cap': ['error', { properties: false }],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'no-caller': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-constructor-return': ['error'],
    'no-duplicate-imports': ['error'],
    'no-else-return': ['error'],
    'no-implicit-coercion': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-param-reassign': ['error'],
    'no-return-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-shadow': ['error'],
    'no-tabs': ['error'],
    'no-throw-literal': ['error'],
    'no-trailing-spaces': ['error'],
    'no-undef-init': ['error'],
    'no-underscore-dangle': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unused-private-class-members': ['error'],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-useless-catch': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'object-shorthand': ['error', 'always'],
    'one-var-declaration-per-line': ['error'],
    'padded-blocks': [
      'error',
      { blocks: 'never', switches: 'never', classes: 'never' },
    ],
    'prefer-const': ['error'],
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        singleQuote: true,
        semi: false,
        usePrettierrc: false,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: ['error'],
    'require-await': ['error'],
    'require-yield': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', { words: true }],
    'switch-colon-spacing': ['error'],
    'unicode-bom': ['error', 'never'],
    yoda: ['error', 'never'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.js',
        '**/__tests__/*.jsx',
        '**/__tests__/*.cjs',
        '**/__tests__/*.mjs',
      ],
      rules: {
        'max-len': 0,
        'max-lines-per-function': 0,
        'max-lines': 0,
        'max-statements': 0,
        'no-magic-numbers': 0,
      },
    },
  ],
}
