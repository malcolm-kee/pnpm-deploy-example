import { Button } from '@malcolm/components';
import { fetchJson } from '@malcolm/util';
import * as React from 'react';

export const App = () => {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetchJson('/api/hello').then((result) => setMessage(result.message));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold">App</h1>
      {message && <p>Message from api: {message}</p>}
      <Button>Button</Button>
    </div>
  );
};
