import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState();

  //로컬 환경에서 실행할때는 두번 콘솔에 찍히는 것이 정상이다
  //리액트 18버전의 특징
  useEffect(() => {
    axios.get('http://localhost:4000/products').then(res => {
      setProducts(res.data);
    });
  }, []);

  console.log(products);

  return (
    <ul>
      {products?.map(product => (
        // css module 사용하는 방법
        // css 파일을 파일명.module.css 로 지정한다
        // 이후 className에 import한 모듈 파일에서 클래스명을 가져온다
        <li key={'product_' + product.id} className={styles.item}>
          <div>
            {/* <img src="" alt={product.name + ' 이미지'} /> */}
            {/* a11y(accessibility) => 웹 접근성을 의미하는 용어 */}
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={250}
            ></Image>
          </div>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
