import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import * as app from './App.styled';

import { Item } from './types/item';

import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import ThemeSwitcher from "./components/ThemeSwitcher";
import usePersistedState from "./utils/usePersistedState";

function App() {

  const [theme, setTheme] = usePersistedState('light', light);

  const toggleTheme = () => {
    if (theme.title !== 'Dark') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  const [list, setList] = usePersistedState('tasks', []);

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
      if (item.id === id) {
        item.done = done;
      }
    });

    setList(newList);
  }



  return (
    <ThemeProvider theme={theme}>
      <app.Container>
        <app.Area>
          <app.Header>
          <app.HeaderTitle>Lista de Tarefas</app.HeaderTitle>
          <ThemeSwitcher
            toogleTheme={toggleTheme}
          />
          </app.Header>
          <AddArea
            onEnter={handleAddTask}
          />

          {list.length > 0 &&
            list.map((item: Item, index:number) => (
              <ListItem
                key={index}
                item={item}
                DoneTask={handleDoneTask}
              />
            ))
          }
        </app.Area>
      </app.Container>
    </ThemeProvider>
  )
}

export default App;