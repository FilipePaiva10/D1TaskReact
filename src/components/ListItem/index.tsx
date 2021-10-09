import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Item } from '../../types/item';

import * as ItemList from './styled';

type Props = {
    key: number,
    item: Item,
    DoneTask: (id: number, done: boolean) => void
};

export default ({ item, DoneTask }: Props) => {

    const theme = useContext(ThemeContext);

    return (
        <ItemList.Container done={item.done} theme={theme}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => DoneTask(item.id, e.target.checked)} />
            <label>{item.name}</label>
        </ItemList.Container>
    )
}
