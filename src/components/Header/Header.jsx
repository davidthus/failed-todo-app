import { useEffect, useRef } from "react";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";

function Header({ memoizedCallback, Theme }) {

  const toggleEl = useRef(null);

  useEffect(() => {
    toggleEl.current.onClick = memoizedCallback();
  }, [memoizedCallback])

  return (
    <header>
      <h1>TODO</h1>
      <div ref={toggleEl}>{Theme ? <Moon /> : <Sun />}</div>
    </header>
  );
}

export default Header;
