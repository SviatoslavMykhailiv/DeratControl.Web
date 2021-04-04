import react from "react";
function Login() {
  return (
    <form className="container mt-5 px-0 pt-5 w-50 border">

      <div className="form-group ">
        <fieldset className="d-flex justify-content-between pr-2">
          <label
            className="control-label font-weight-bold m-auto "
            for="readOnlyInput">
            Login
          </label>
          <input
            className="form-control w-75"
            id="readOnlyInput"
            type="text"
            placeholder="Enter login"
          />
        </fieldset>
      </div>

      <div className="form-group ">
        <fieldset className="d-sm-flex justify-content-between pr-2">
          <label
            className="control-label font-weight-bold m-auto "
            for="readOnlyInput"
          >
            Password
          </label>
          <input
            className="form-control w-75 "
            id="readOnlyInput"
            type="password"
            placeholder="Password"
          />
        </fieldset>
      </div>

      <div className="d-flex justify-content-center mb-3">
        <button type="button" className="btn btn-outline-secondary ">
          LOG IN
        </button>
      </div>
      
      <div className="card-footer">
        <div className="d-flex justify-content-center links">
          Don't have an account?
          <a href="#">Sign Up</a>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </form>
  );
}

export default Login;
