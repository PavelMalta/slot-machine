import React from 'react';
import {Monitor} from "./component/monitor/Monitor";
import {Keyboard} from "./component/keyboard/Keyboard";
import s from "./App.module.css"

function App() {



  return (
    <div className={s.app}>
        <div className={s.slotMachine}>
          <Monitor/>
          <Keyboard/>
        </div>
    </div>
  );
}

export default App;
