import React from 'react';
import { Item } from '../../types/item';

import * as ItemList from './styled';

type Props = {
    key: number,
    item: Item
};

export default ({ item } : Props) => {
    return(
        <ItemList.Container>
            <input type="checkbox" />
            <label>{item.name}</label>
        </ItemList.Container>
    )
}
