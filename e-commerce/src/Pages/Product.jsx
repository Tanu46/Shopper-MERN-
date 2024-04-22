import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/shopContext';
import BreadCrum from '../Components/BreadCrum-8/breadCrum';
import ProductDisplay from '../Components/ProductDisplay/productDisplay';
import Description from '../Components/DescriptionBox-10/description';
import RelatedProduct from '../Components/RelatedProduct/relatedProduct';

const Product = () => {
    const{all_product}=useContext(ShopContext);
    const{productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
    return (
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProduct/>
        </div>
    );
}

export default Product;
//link this comp.to item comp.