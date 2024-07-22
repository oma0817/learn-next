module.exports = {
  // 내부적인 설정파일을 만들어둔것을 사용하기 위한 속성
  // node_modules 밑에 @next 밑에 rules 폴더에 각각의 룰이 설정 되어있음
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    // 선언되지 않은 변수 또는 임포트 구문 정리 규칙
    'no-undef': 'error',

    // 프리티어 설정
    // 해당 설정을 error로 두었기 때문에 저장 버튼 이용시
    // 자동으로 문법을 수정해준다
    'prettier/prettier': [
      'error',
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html
      {
        singleQuote: true,
        semi: true,
        // useTabs: true,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
};
