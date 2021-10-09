import React, { useState } from 'react';
import { Item } from '../../types/item';

import * as ItemList from './styled';

type Props = {
    key: number,
    item: Item,
    DoneTask: (id: number, done: boolean) => void
};

export default ({ item, DoneTask }: Props) => {

    return (
        <ItemList.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => DoneTask(item.id, e.target.checked)} />
            <label>{item.name}</label>
        </ItemList.Container>
    )
}
