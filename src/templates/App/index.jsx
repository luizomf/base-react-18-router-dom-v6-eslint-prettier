import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <h1>Hello world!</h1>
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
