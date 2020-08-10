import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';

class App extends React.Component {
  loading = (): JSX.Element => <p>Loading...</p>

  render(): JSX.Element {
    return (
      <Suspense fallback={this.loading}>
        <BrowserRouter>
            <Switch>
              {Routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
