import React, { Fragment } from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { Link } from "react-router-dom";

import './style.scss'

export default () => {
    const menuOptions = [{title: "DashBoard", route: '/'}, { title: "Formulário", route: '/form'}]
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h4" className='header-title'> Fcamara </Typography>
                    { menuOptions.map( option => (
                        <Button className='link'>
                            <Link to={option.route} >{option.title}</Link>
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}