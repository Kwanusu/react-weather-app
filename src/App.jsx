import React, { lazy, Suspense} from 'react'


const FetchWeather = lazy(() => import("./components/FetchWeather"));
function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchWeather/>
    </Suspense>
  );
}

export default App
