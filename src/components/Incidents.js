import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

export default function Incidents(props) {

    const globalState = props.globalState;
    const username = globalState.username;
    const password = globalState.password;
    const instance = globalState.instance;
    const [state, setState] = useState({
        columns: [
            { title: 'Number', field: 'number' },
            { title: 'Opened', field: 'opened_at' },
            { title: 'Short Description', field: 'short_description' },

        ],
        data: [

        ],
    });
    const loadIncidents = async () => {
        try {
            let response = await Axios.get(`https://${instance}.service-now.com/api/now/table/incident?sysparm_limit=20&sysparm_query=active=true`, {
                auth: {
                    username: username,
                    password: password
                }
            });
            setState(Object.assign(response.data.result, {}, { columns: state.columns, data: response.data.result }));
            console.log(response.status, response.data.result);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <MaterialTable
            style={{ margin: "16px" }}
            title="Incidents"
            columns={state.columns}
            data={state.data}
            detailPanel={rowData => {
                return (
                    <React.Fragment>
                        <Chip
                            style={{ marginLeft: "16px", marginRight: "16px", marginTop: "16px" }}
                            label={rowData.number}
                            clickable
                            color="primary"
                        />
                        <Chip
                            style={{ marginLeft: "16px", marginRight: "16px", marginTop: "16px" }}
                            label={'System Id: ' + rowData.sys_id}
                            clickable
                            color="secondary"
                        />
                        <Typography style={{ marginLeft: "16px", marginRight: "16px", marginTop: "16px" }} variant="h6">
                            {`${rowData.made_sla ? 'Yes' : 'No'} SLA was made.`}<br />
                        </Typography>

                        <Typography style={{ margin: "16px" }} variant="h6">
                            {`${rowData.description}`}
                        </Typography>

                    </React.Fragment>

                )
            }}
            onRowClick={(event, rowData, togglePanel) => togglePanel()}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),
            }}
        />
    );
}
