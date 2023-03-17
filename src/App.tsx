import React, { useState } from "react";
import "./App.css";
import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";

const App:React.FC = () => {

  const [board, setBoard] = useState<string[]>([
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
  ])

  return (
    <div className="App">
      <Layout className="bg-[#151924] h-[100%] min-h-[100vh] pt-[2em]">
        <Content className="flex items-center flex-col">
          <h1 className="text-[36px] text-[#6EB9E3] font-[600] text-center mb-[40px]">WordleType</h1>
          <Board board = {board}/>
          <KeyBoard/>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
