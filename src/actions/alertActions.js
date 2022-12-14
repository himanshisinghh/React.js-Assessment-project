import { toastr } from "react-redux-toastr";

export const alertActions = {
    success,
    error
};

function success(message) {
    return (dispatch) => {
        toastr.info("Success",message);
    }
}

function error(message) {
    return (dispatch) => {
        toastr.error("Error",message);
    }
}