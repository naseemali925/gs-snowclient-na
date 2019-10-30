class GlobalState {

    constructor(loggedIn) {
        if (!GlobalState.instance) {
            this.loggedIn = loggedIn;
            this.username = undefined;
            this.password = undefined;
            this.instanceId = undefined;
            GlobalState.instance = this;
        }
        return GlobalState.instance
    }

    setLoggedIn = (loggedIn) => {
        this.loggedIn = loggedIn;
    }

    isLoggedIn = () => {
        return this.loggedIn;
    }
}

export default new GlobalState();