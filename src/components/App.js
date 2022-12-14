import React from "react";
import Routes from "./Routes";
import ReduxToastr from "react-redux-toastr";


function App() {
    return (
        <>
        <Routes />
        <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) =>state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={false}
        closeOnToastrClick
        />
    </>
    );
}