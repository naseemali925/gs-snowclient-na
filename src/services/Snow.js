import Axios from 'axios';
import GlobalState from './GlobalState'
class Snow {
    constructor() {
        if (!Snow.instance) {
            this.BASE = undefined;
            this.USER_NAME = undefined;
            this.PASSWORD = undefined;
            this.PATHS = {
                LOGIN: (username) => `/v2/table/sys_user?user_name=${username}`,
                INCIDENTS: () => '/table/incident?sysparm_limit=20&sysparm_query=active=true',
                UPDATE_INCIDENT: (sys_id) => `/table/incident/${sys_id}`,
                ADD_INCIDENT: () => '/table/incident',
            }
            Snow.instance = this;
        }

        return Snow.instance;
    }

    login = async (username, password, instanceId) => {
        this.BASE = `https://${instanceId}.service-now.com/api/now`;
        let path = this.BASE + this.PATHS.LOGIN(username);
        return new Promise((resolve, reject) => {
            const options = {
                url: path,
                method: 'get',
                auth: {
                    username: `${username}`,
                    password: `${password}`
                }
            };
            Axios(options).then((val) => {
                resolve(val);
            }, (rej) => {
                reject(rej);
            });
        })
    }

    getIncidents = async () => {
        let path = this.BASE + this.PATHS.INCIDENTS()
        return new Promise((resolve, reject) => {
            const options = {
                url: path,
                method: 'get',
                auth: {
                    username: `${GlobalState.username}`,
                    password: `${GlobalState.password}`
                }
            };
            Axios(options).then((val) => {
                resolve(val);
            }, (rej) => {
                reject(rej);
            });
        })
    }

    updateIncident = async (sdesc, desc, sys_id) => {
        let path = this.BASE + this.PATHS.UPDATE_INCIDENT(sys_id)
        return new Promise((resolve, reject) => {
            const options = {
                url: path,
                method: 'put',
                auth: {
                    username: `${GlobalState.username}`,
                    password: `${GlobalState.password}`
                },
                data: {
                    short_description: sdesc,
                    description: desc
                }
            };
            Axios(options).then((val) => {
                resolve(val);
            }, (rej) => {
                reject(rej);
            });
        })
    }

    addIncident = async (sdesc, desc) => {
        let path = this.BASE + this.PATHS.ADD_INCIDENT()
        return new Promise((resolve, reject) => {
            const options = {
                url: path,
                method: 'post',
                auth: {
                    username: `${GlobalState.username}`,
                    password: `${GlobalState.password}`
                },
                data: {
                    short_description: sdesc,
                    description: desc
                }
            };
            Axios(options).then((val) => {
                resolve(val);
            }, (rej) => {
                reject(rej);
            });
        })
    }
}

const instance = new Snow();
// Object.freeze(instance);
export default instance;