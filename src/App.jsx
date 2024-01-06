// import { authenticate } from "passport";
import "./App.css";
// import { useFormState } from "react-dom";

function App() {
  // const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <>
      <div className="page">
        <img
          src="/public/Guruji.webp"
          alt="Mahabrahmrishi"
          className="logo"
        ></img>
        <div>
          <form action="" className="form">
            <h1>Login</h1>
            <p>Username</p>
            <input type="text" placeholder="username" name="username" />
            <p>Password</p>
            <input type="password" placeholder="password" name="password" />
            <button>Submit</button>
            {/* {state && state} */}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
