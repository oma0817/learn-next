// 파일명에 대괄호 사용시 동적 라우팅 사용

import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';

export default function ProductDetailPage({ message, productInfo }) {
  const headerTitle = '상품 상세 정보 페이지!!';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <div>ProductDetailPage : {message}</div>
      <p>{productInfo.name}</p>
    </div>
  );
}

// 넥스트에서 페이지 컴포넌트에 프롭스를 넘겨주는 역할
export async function getServerSideProps(context) {
  // products/10
  // 파일명에 선언한 라우팅 변수를 파라미터로 가져와서 호출한다
  // [productId].jsx 로 선언시 파라미터 변수명은 productId
  console.log(context.params.productId);
  const id = context.params.productId;
  const response = await axios.get(`http://localhost:4000/products/${id}`);

  return {
    props: { message: '서버에서 보내준 메시지', productInfo: response.data },
  };
}
