import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Link to={'/report/list'}>Report</Link>
    </div>
  );
}
