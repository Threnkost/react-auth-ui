import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './dist/output.css';
import './style.css';

import googleIcon from './svg/google.svg';
import githubIcon from './svg/github.svg';

import CustomInput from './components/CustomInput';

import { createContext, useState, useContext } from 'react';

const Context = createContext();
const ContextAPI = ({ children }) => {
  const [state, setState] = useState({
    isSigningIn: true
  });
  
  return (
    <Context.Provider value={{...state, setState}}>
      {children}
    </Context.Provider>
  );
}

const LoginForm = () => {
  const context = useContext(Context);

  return (

    <form className="flex flex-col gap-y-5" style={{maxWidth: 500}}>
      <CustomInput type="email" name="" value="" placeholder="E-mail" onChange={() => {}} />
      <CustomInput type="password" name="" value="" placeholder="Password" onChange={() => {}} />

      <div className="grid grid-cols-2 gap-x-2.5">
        <button className="bg-none p-3 border border-slate-400 text-slate-400 rounded">
          Sign In
        </button>

        <button 
          className="bg-none p-3 border border-slate-400 text-slate-400 rounded"
          onClick={(e) => {context.setState({isSigningIn: false});}}
        >
            Create an account
        </button>        
      </div>

      <div className="flex flex-col gap-y-2.5 my-7">

        <button className="p-2 border border-slate-400 rounded flex flex-row gap-x-3 items-center justify-center">
          <img className="w-10 h-10" src={googleIcon} alt="" />
          Sign in with Google
        </button>

        <button className="p-2 border border-slate-400 rounded flex flex-row gap-x-3 items-center justify-center">
          <img className="w-9 h-9" src={githubIcon} alt="" />
          Sign in with Github
        </button>

      </div>
    </form>
  );
}

const RegisterForm = () => {
  const context = useContext(Context);

  return(
    <form className="flex flex-col gap-y-5" style={{maxWidth: 500}}>
      <div style={{display: "grid", gridTemplateColumns: "auto auto", gap: "10px"}}>
        <CustomInput type="text" name="" value="" placeholder="Name" onChange={ () => {} } />
        <CustomInput type="text" name="" value="" placeholder="Surname" onChange={ () => {} } />
      </div>
      <CustomInput type="email" name="" value="" placeholder="E-mail" onChange={ () => {} } />
      <CustomInput type="password" name="" value="" placeholder="Password" onChange={ () => {} } />
      <div style={{display: "grid", gridTemplateColumns: "auto auto", gap: "10px"}}>
        <button className="p-3 bg-violet-700 text-white font-semibold rounded hover:bg-violet-900 hover:text-white duration-100" type="submit">
          Sign Up
        </button>
        <button 
          className="bg-none p-3 border border-slate-400 text-slate-900 rounded font-semibold hover:bg-slate-900 hover:text-white duration-100" type="button"
          onClick={(e) => {context.setState({isSigningIn: true});}}
        >
            You have an account?
        </button>
      </div>

      <div className="flex flex-col gap-y-2.5 my-7">
        <button className="bg-none p-2 border border-slate-400 text-slate-900 rounded font-semibold flex flex-row justify-center items-center gap-x-3.5">
          <img className="w-10 h-10" src={googleIcon} alt="" />

          Sign up with Google
        </button>

        <button className="bg-none p-2 border border-slate-400 text-slate-900 rounded font-semibold flex flex-row justify-center items-center gap-x-3.5">
          <img className="w-9 h-9" src={githubIcon} alt="" />

          Sign up with Github
        </button>
      </div>
    </form>
  );
}


const App = () => {
  const context = useContext(Context);
  
  return (
    <div className="border border-black p-10" style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%"}}>
      {
        context.isSigningIn
        ? <LoginForm />
        : <RegisterForm />
      }

    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </React.StrictMode>
);
