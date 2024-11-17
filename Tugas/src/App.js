import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <div className="row container-fluid h-full mb-5">
        <LoginForm />
        <ImageLogin />
      </div>
      <FootBar/>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-5">
        <h1>Logo</h1>

        <small className="d-block">
          New Here? <span className="text-primary">Create an Account</span>
        </small>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="offset-2 col-4 px-3 py-5">
      <h5>Welcome to Keen</h5>

      <div>
        <label>Email</label>
      </div>
      <input className="form-control mb-4" type="email" />

      <div className="d-flex justify-content-between">
        <label>Password</label>
        <small className="text-primary">Forgot Password ? </small>
      </div>
      <input className="form-control mb-4" type="password" />
      <div className="d-flex">
        <button className="me-3 btn btn-primary text-white px-3 py-2">
          Sign In
        </button>
        <button className="btn btn-info text-white px-3 py-2">
          <svg
            className="me-3"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
              fill="#4285F4"
            />
            <path
              d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
              fill="#34A853"
            />
            <path
              d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
              fill="#FBBC05"
            />
            <path
              d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
              fill="#EB4335"
            />
          </svg>
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

function ImageLogin() {
  return (
    <div className="col-4 ">
      <div>
        <img
          className="w-100"
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1731135527~exp=1731139127~hmac=7cac3281b45e8bc2fd0be94ad9ee1643119f4d35cf6ff590ed1734086d452614&w=740"
        />
      </div>
    </div>
  );
}

function FootBar(){
  return (
    <div className="d-flex px-3 py-2 mt-5 justify-content-between">
      <small>2021@Keenthemes</small>
      <div className="d-flex gap-3">
        <small className="text-info">Terms</small>
        <small className="text-info">Plans</small>
        <small className="text-info">Contact Us</small>
      </div>
    </div>
  )
}

export default App;
