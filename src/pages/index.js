import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div>    
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/add-bill">Add Bill</Link>
          </li>
          <li>
            <Link to="/view-reports">View Reports</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home