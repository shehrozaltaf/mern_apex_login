import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";


const LazyInputs = lazy(() => import("../views/forms/elements/inputs"));

const LazyLogin = lazy(() => import("../views/pages/login"));

function App() {
    return (
        // Set the directory path if you are deplying in sub-folder
        <BrowserRouter basename="/login">
            <Switch>
                <FullPageLayout
                    exact
                    path="/"
                    render={matchprops => (
                        <Suspense fallback={<Spinner/>}>
                            <LazyLogin {...matchprops} />
                        </Suspense>
                    )}
                />

                <MainLayoutRoutes
                    exact
                    path="/forms"
                    render={matchprops => (
                        <Suspense fallback={<Spinner />}>
                            <LazyInputs {...matchprops} />
                        </Suspense>
                    )}
                />

            </Switch>
        </BrowserRouter>
    );
}

export default App;