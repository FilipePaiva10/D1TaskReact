import React, { useState } from "react";
import * as app from './App.styled';

import { Item } from './types/item';

import ListItem from "./components/ListItem";

function App() {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Terminar Projeto D1',
      done: false
    },
    {
      id: 2,
      name: 'Ir além com Projeto D1 - ThemeSwitcher -  Apagar e Agendar Tarefas',
      done: false
    }
  ]);

  return (
    <app.Container>
      <app.Area>
        <app.Header>Lista de Tarefas</app.Header>

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
          />
        ))}

      </app.Area>
    </app.Container>
  )
}

export default App;