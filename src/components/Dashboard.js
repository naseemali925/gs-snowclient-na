import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import Incidents from './Incidents'
import GlobalState from '../services/GlobalState'

export default function Dashboard(props) {

    const loggedIn = GlobalState.isLoggedIn();
    if (!loggedIn) props.history.push('/');
    return (
        <React.Fragment>
            <ButtonAppBar />
            <Incidents {...props} />
        </React.Fragment>
    )
}
