import React, { useState } from 'react';

const WishListContext = React.createContext([{}, () => { }]);
const WishListProvider = (props) => {
    const [state, setState] = useState({
        wishList: []
    });

    return (
        <WishListContext.Provider value={[state, setState]}>
            {props.children}
        </WishListContext.Provider>
    );
};

export { WishListContext, WishListProvider };
