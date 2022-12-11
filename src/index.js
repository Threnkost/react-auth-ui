import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './dist/output.css';


const App = () => {
  return(
    <div className="flex flex-col w-3/12 gap-y-2">

      <button className="border-2 border-violet-800 text-violet-800 font-bold rounded-3xl p-3">
        Buton 1
      </button>
  
      <button className="border-2 border-violet-800 text-violet-800 font-bold rounded-3xl p-3">
        Buton 2
      </button>

      <button className="border-2 border-violet-800 text-violet-800 font-bold rounded-3xl p-3">
        Buton 3
      </button>

      <button className="border-2 border-violet-800 text-violet-800 font-bold rounded-3xl p-3">
        Buton 4
      </button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
