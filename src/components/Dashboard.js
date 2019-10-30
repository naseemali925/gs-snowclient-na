import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import Incidents from './Incidents'

export default function Dashboard(props) {

    const loggedIn = props.globalState.isLoggedIn();
    if (!loggedIn) props.history.push('/');
    return (
        <React.Fragment>
            <ButtonAppBar />
            <Incidents {...props} />
        </React.Fragment>
    )
}