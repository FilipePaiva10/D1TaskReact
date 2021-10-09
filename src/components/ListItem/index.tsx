import React, { useState } from 'react';
import { Item } from '../../types/item';

import * as ItemList from './styled';

type Props = {
    key: number,
    item: Item
};

export default ({ item }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <ItemList.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)} />
            <label>{item.name}</label>
        </ItemList.Container>
    )
}
