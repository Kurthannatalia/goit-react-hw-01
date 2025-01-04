import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Імпорт стилів (якщо є)

import App from './App'; // Імпорт головного компонента

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
