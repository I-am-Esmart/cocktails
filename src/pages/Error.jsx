import Wrapper from "../assets/wrappers/Error"
import { Link, useRouteError } from "react-router-dom"
import img from "../assets/not-found.svg"

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="" />
          <h3>Ohh!</h3>
          <p>we can't seem to find the page you're looking for</p>
          <Link to="/">Back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
