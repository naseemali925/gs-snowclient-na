import React, { useEffect, useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { toast } from 'react-toastify'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import Logger from '../services/Logger'
import Snow from '../services/Snow'

export default function Incidents(props) {

    const [toEdit, setToEdit] = React.useState({});
    const [addOpen, setAddOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [state, setState] = useState({
        columns: [
            { title: 'Number', field: 'number' },
            { title: 'Opened', field: 'opened_at' },
            { title: 'Short Description', field: 'short_description' },

        ],
        data: [

        ],
    });

    const handleAddOpen = () => {
        setAddOpen(true);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    const handleEditOpen = () => {
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    const handleDeleteOpen = () => {
        setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };

    const loadIncidents = async () => {
        try {
            let response = await Snow.getIncidents();
            setState(Object.assign(response.data.result, {}, { columns: state.columns, data: response.data.result }));
            Logger.log("Loaded", response.data.result);
        } catch (e) {
            Logger.log(e);
        }
    }
    useEffect(() => {
        loadIncidents();
    }, []);

    const handleUpdate = async () => {
        try {
            let sdesc = document.getElementById('sdesc').value;
            let desc = document.getElementById('desc').value;
            let response = await Snow.updateIncident(sdesc, desc, toEdit.sys_id);
            if (response && response.status === 200) {
                let uData = state.data.map(e => {
                    if (e.sys_id === toEdit.sys_id) {
                        return response.data.result
                    }
                    return e;
                });
                Logger.log("Updated", response)
                setState(Object.assign(state.data, {}, { columns: state.columns, data: uData }));
                handleEditClose()
                toast.success("Incident successfuly updated.")
            } else {
                handleEditClose()
                toast.error("Some Error Occured While updated the incident")
            }
        } catch (e) {
            toast.error("Error Updating The Record. Please try again later.")
            Logger.log("Error", e);
        }

    }

    const handleDelete = async () => {
        try {
            let response = await Snow.deleteIncident(toEdit.sys_id);
            if (response && response.status === 204) {
                let uData = state.data.filter(e => e.sys_id !== toEdit.sys_id);
                setState(Object.assign(state.data, {}, { columns: state.columns, data: uData }));
                handleDeleteClose()
                toast.success("Successfully deleted the incident.")
                Logger.log("Deleted", response.data);
            } else {
                handleDeleteClose()
                toast.error("Some error occured while deleting the incident!")
            }
        } catch (e) {
            handleDeleteClose()
            toast.error("Error deleting the incident. Please try again later.")
            Logger.log("Error", e);
        }
    }

    const handleAdd = async () => {
        try {
            let sdesc = document.getElementById('asdesc').value;
            let desc = document.getElementById('adesc').value;
            let response = await Snow.addIncident(sdesc, desc)
            if (response && response.status === 201) {
                let uData = state.data;
                uData.unshift(response.data.result);
                setState(Object.assign(state.data, {}, { columns: state.columns, data: uData }));
                handleAddClose()
                toast.success(`Successfully added the incident with number ${response.data.result.number}`)
                Logger.log("Added", response.data.result);
            } else {
                handleAddClose()
                toast.error("Some error occured while adding the incident!")
            }
        } catch (e) {
            handleAddClose()
            toast.error("Error adding the incident. Please try again later.")
            Logger.log(e);
        }

    }

    return (
        <React.Fragment>
            <MaterialTable
                style={{ margin: "16px" }}
                title="Incidents"
                columns={state.columns}
                data={state.data}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit incident',
                        onClick: (event, rowData) => {
                            setToEdit(Object.assign(toEdit, {}, rowData));
                            handleEditOpen();
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete incident',
                        onClick: (event, rowData) => {
                            setToEdit(Object.assign(toEdit, {}, rowData));
                            handleDeleteOpen()
                        }
                    }
                ]}
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

                options={{
                    actionsColumnIndex: -1
                }}
                components={{
                    Toolbar: props => (
                        <div>
                            <MTableToolbar {...props} />
                            <IconButton aria-label="Add" onClick={handleAddOpen} style={{ backgroundColor: "#1976d2", color: "white" }} tooltip="Add incident">
                                <AddIcon />
                            </IconButton>
                        </div>
                    ),
                }}
            />
            {/* For Updating */}
            <Dialog open={editOpen} onClose={handleEditClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit: {toEdit ? toEdit.number : ""}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please modify the following details.
                    </DialogContentText>
                    <TextField
                        defaultValue={toEdit ? toEdit.short_description : ""}
                        autoFocus
                        margin="dense"
                        id="sdesc"
                        label="Short Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        defaultValue={toEdit ? toEdit.description : ""}
                        style={{ marginTop: "16px" }}
                        autoFocus
                        margin="dense"
                        id="desc"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            {/* For Delete Confirmation */}
            <Dialog
                open={deleteOpen}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Incident?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this incident?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            {/* For Adding New Incident Record */}
            <Dialog open={addOpen} onClose={handleAddClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add incident</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill the following details.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="asdesc"
                        label="Short Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        style={{ marginTop: "16px" }}
                        autoFocus
                        margin="dense"
                        id="adesc"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );


}
