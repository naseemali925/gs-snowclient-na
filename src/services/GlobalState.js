
export default class GlobalState {

    constructor(loggedIn) {
        this.loggedIn = loggedIn;
        this.username = undefined;
        this.password = undefined;
        this.instance = undefined;
    }

    setLoggedIn = (loggedIn) => {
        this.loggedIn = loggedIn;
    }

    isLoggedIn = () => {
        return this.loggedIn;
    }
}