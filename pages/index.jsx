import ProductList from '@/components/ProductList';

// '/'에 해당하는 페이지 컴포넌트
// 페이지 컴포넌트에는 최소한의 소스 코드만 넣어둔다
// 에러가 발생한 위치를 더 쉽고 빠르게 잡기 위해

function ProductPage() {
  return (
    <div>
      <h1>상품목록 페이지</h1>
      <ProductList />
    </div>
  );
}

/*
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/carts'
 */

export default ProductPage;
