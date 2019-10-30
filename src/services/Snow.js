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

            }
            Snow.instance = this;
        }

        return Snow.instance;
    }

    login = async (username, password, instanceId) => {
        this.BASE = `https://${instanceId}.service-now.com/api/now`;
        let loginPath = this.BASE + this.PATHS.LOGIN(username);
        return new Promise((resolve, reject) => {
            const options = {
                url: loginPath,
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

    getIncidents = () => {
        let incidentsPath = this.BASE + this.PATHS.INCIDENTS()
        return new Promise((resolve, reject) => {
            const options = {
                url: incidentsPath,
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
}

const instance = new Snow();
// Object.freeze(instance);
export default instance;