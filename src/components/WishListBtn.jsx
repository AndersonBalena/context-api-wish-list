import React, { useContext, useState, useEffect } from 'react';
import { WishListContext } from '../context/WishListProvider';
import { Button, Icon } from 'semantic-ui-react';

export const WishListBtn = ({ product }) => {
    const [state, setState] = useContext(WishListContext);
    const [isProductSelected, setSelected] = useState(false);

    function handleWishList() {
        if (isProductSelected) {
            let wishItems = state.wishList.filter((item) => 
                item.id !== product.id);
                setState({
                    ...state,
                    wishList: [...wishItems]
                });
        } else {
            setState({
                ...state,
                wishList: [...state.wishList, product]
            });
        }
    }

    

    useEffect(() => {
        let selected = state.wishList.some((item) => 
            item.id === product.id);
        setSelected(selected);
    }, [product.id, state.wishList]);

    return (
        <Button color='red' onClick={() => handleWishList()}>
            <Icon name='heart' /> { !isProductSelected ? 'Add' : 'Remove' }
        </Button>
    )
};