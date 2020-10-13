import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

export const gotoPage = (pathdetails) => {
    history.push(pathdetails);
}

export default history;