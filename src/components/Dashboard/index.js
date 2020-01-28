import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ResumeCard, DetailedCard } from '../Cards/index'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MessageActions from '../../store/actions';

import './style.scss'

const DashBoard = ({messages, deleteMessage}) =>{

    const [detailedMessage, setDetailedMessage] = useState([])

    const _handleShowMessage = (id) => {
        setDetailedMessage(messages.data.filter(message => message.id === id ? message : null ))
    }

    const _handleDeleteMessage = () => {
        deleteMessage(detailedMessage[0].id)
        detailedMessage[0]= undefined
    }
    return (
        <Grid container direction='row' justify='space-between'>
            <Grid item lg={3} xs={12} className='resumeMessage'>
                {messages.data.length > 0
                    ? 
                        messages.data.map(message => <ResumeCard key={message.id} message={message} _handleShowMessage={_handleShowMessage} />)
                    :
                        <ResumeCard message={''} _handleShowMessage={()=>{}} />
                } 
            </Grid>
            <Grid item lg={8} xs={12} className='detailedMessage'>
                <DetailedCard details={detailedMessage}/>
                {detailedMessage[0] ? <Button variant="contained" className='btn-delete' startIcon={<DeleteIcon />} onClick={_handleDeleteMessage}> Excluir Mensagem</Button> : null}
            </Grid>
        </Grid>
    )
}
const mapStateToProps = state => ({ messages: state.messages });
const mapDispatchToProps = dispatch => bindActionCreators(MessageActions, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);