import { useEffect, useState, useCallback } from 'react';
import { Background } from "./App.style";
import { ThemeProvider } from "styled-components"
import Todo from './components/Todo/Todo.jsx';
import { lighttheme, darktheme } from "./theme";


function App() {
  const [Theme, setTheme ] = useState(localStorage.getItem("Theme") || "dark");

  useEffect(() => {
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme);
  }, [Theme])

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark');
  }

  const memoizedCallback = useCallback(() => {toggleTheme()},[]);

  return (
    <ThemeProvider theme={Theme === 'dark' ? darktheme : lighttheme }>
    <div className="App">
      <Background />
      <Todo memoizedCallback={memoizedCallback} Theme={Theme} />
    </div>
    </ThemeProvider>
  );
}

export default App;