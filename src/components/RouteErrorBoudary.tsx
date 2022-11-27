import { useRouteError } from 'react-router-dom';

export default function RouteErrorBoudary() {
  const error = useRouteError();

  if (!error) {
    return <div>Error Unnown</div>;
  }

  return (
    <div id="error-page">
      <h1>Routeing went wrong.</h1>
      <p>{error.toString()}</p>
    </div>
  );
}
