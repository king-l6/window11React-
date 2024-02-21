import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./reducers";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <Suspense
    fallback={
      <div id="sus-fallback">
        <h1>还没加载好，桥豆麻袋</h1>
      </div>
    }
  >
    {/* 此处的store是存储数据，需要使用Provider组件包裹起来*/}
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
);
