import React, { useContext } from 'react';
import { WishListContex } from '../context/WishListProvider';
import { Label, Icon } from 'semantic-ui-react';

export const Header = (props) => {
    const [state] = useContext(WishListContex);
    const { wishList } = state;

    return (
        <div className='header-app'>
            <Label horizontal>
                <Icon name='heart' /> {wishList.length}
            </Label>
        </div>
    );
};