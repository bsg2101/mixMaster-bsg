import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
        <h3 style={{marginTop:'1rem'}}>
          This warning may be given by github. Click the button to go to the
          home page.
        </h3>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="other-errors">
        <h3>something went wrong </h3>
      </div>
    </Wrapper>
  );
};
export default Error;
