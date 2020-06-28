import React, { useState } from 'react';

const WishListContex = React.createContext([{}, () => { }]);
const WishListProvider = (props) => {
    const [state, setState] = useState({
        wishList: []
    });

    return (
        <WishListContex.Provider value={[state, setState]}>
            {props.children}
        </WishListContex.Provider>
    );
};

export { WishListContex, WishListProvider };
