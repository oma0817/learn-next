// import React from 'react';
// 리액트 18버전에서는 위의 구문 선언 없이도 정상 작동한다

import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">상품 목록</Link> | <Link href="/cart">장바구니</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
