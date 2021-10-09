import React, { useState } from "react";
import * as app from './App.styled';

import { Item } from './types/item';

import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";

function App() {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Terminar Projeto D1',
      done: true
    },
    {
      id: 2,
      name: 'Ir além com Projeto D1 - ThemeSwitcher -  Apagar e Agendar Tarefas',
      done: false
    }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleDoneTask = (id: number, done: boolean) => {
    let newList = [...list];

    newList.forEach((item, index) => {
      if (item.id == id) {
        item.done = done;
      }
    });

    setList(newList);
  }

  return (
    <app.Container>
      <app.Area>
        <app.Header>Lista de Tarefas</app.Header>

        <AddArea
          onEnter={handleAddTask}
        />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            DoneTask={handleDoneTask}
          />
        ))}

      </app.Area>
    </app.Container>
  )
}

export default App;