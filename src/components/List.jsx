import React, { useState, useEffect } from 'react';
import { WishListBtn } from './WishListBtn';
import { Card } from 'semantic-ui-react';
import { v4 } from 'uuid';

export const ContainerList = () => {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        let productsApi = await fetch('/products.json').then((res) => res.json())
        console.log(productsApi);
        setProducts(productsApi);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <List products={products} />
};

const List = ({products = []}) => {
    return (
        <Card.Group className='cards-list'>
            {products.map(
                (item) => (
                    <Card
                        key={item.id}
                        image={item.imageUrl}
                        header={item.name}
                        meta={`${item.currency} ${item.price}`}
                        extra={[
                            <React.Fragment key={v4()}>
                                <WishListBtn product={item} />
                            </React.Fragment>
                        ]}
                    />
                )
            )

            }
        </Card.Group>
    );
};