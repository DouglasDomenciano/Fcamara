import React,{useState, useEffect} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { TextField, Grid, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import GUID from '../../utils/guidGenerator'
import './style.scss'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MessageActions from '../../store/actions';

const Form = ({saveMessage}) => {
    const subjects = [{title:"Orçamento", value: "Orçamento"}, {title:"Dúvida", value: "Dúvida"}, {title: "Elogio", value: "Elogio"}, {title:"Reclamação", value: "Reclamação"}];
    const [ formSubmited, setFormSubmited ] = useState(false)
    const [ chars, setChars ] = useState(0)
    const [ title, setTitle ] = useState('')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ subject, setSubject ] = useState(-1)
    const [ message, setMessage ] = useState('')
    
    useEffect( () => { setChars(0); setTitle(''); setName(''); setEmail(''); setPhone(''); setSubject(-1); setMessage(''); setFormSubmited(false) }, [formSubmited]);

    const _handleShowNotification = (field='', type='success') => NotificationManager[type]( field ? `Campo ${field} obrigatório vazio` : 'Formulário enviado.', field ? 'Erro ao enviar' : 'Sucesso ao enviar', 5000);

    const _handleChangeChars = (evet) => {
        setChars(evet.target.value.length);
        setMessage(evet.target.value);
    }
    const _handleVerifyIsNumber = (event) => {
        event.target.value = event.target.value.replace(/[^\d]+/g,'').replace(/(\d{2})(\d?)(\d{4})(\d{4})$/, '($1) $2 $3-$4')
        setPhone(event.target.value)
    }

    const _handleSendForm = () => {
        let day = new Date();
        if(!title) { _handleShowNotification('TITULO','error') ; return}
        if(!name) { _handleShowNotification('NOME','error') ; return}
        if(!email) { _handleShowNotification('E-MAIL','error') ; return}
        if(subject == -1) { _handleShowNotification('ASSUNTO','error') ; return}
        if(!message) { _handleShowNotification('MENSAGEM','error') ; return}
        setFormSubmited(true)
        saveMessage({id: GUID(),hour: `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`,title ,name,email,phone,subject,message})
        _handleShowNotification('','success')
    }

    return (
        <Grid container direction='row' justify='space-between'>
            <Grid item lg={12} xs={12} className='form'>
                <form noValidate autoComplete="off" >
                    <Grid item lg={6} xs={12} className='input-group' >
                        <TextField id="title" label="Titulo*" variant="outlined" value={title} onChange={event => setTitle(event.target.value)} className='input' />
                        <TextField id="name" label="Nome*" variant="outlined" value={name} onChange={event => setName(event.target.value)} className='input' />
                        <TextField id="email" label="E-mail*" variant="outlined" value={email} onChange={event => setEmail(event.target.value)}  className='input'/>
                        <TextField id="phone" type="text" label="Telefone" variant="outlined" value={phone} onChange={_handleVerifyIsNumber} className='input' inputProps={{maxLength: 16}}/>
                        <select className='subject-select' id="subject" onChange={event => setSubject(event.target.value)} value={subject}>
                            <option value={-1}>Selecione o assunto*</option>
                            {subjects.map((subject, index) => <option key={index} value={subject.value}>{subject.title}</option>)}
                        </select>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12} className='text-area'>
                        <textarea rows="4" cols="50" maxLength={500} onChange={_handleChangeChars} placeholder="Digite sua mensagem...*" value={message} required/>
                        <p>{chars}/500 caracteres</p>
                    </Grid>
                    <Button variant="contained" className='btn-submit' startIcon={<AddIcon />} onClick={_handleSendForm}> Enviar</Button>
                </form>
            </Grid>
            <span> * Campos Obrigatórios</span>
            <NotificationContainer/>
        </Grid>
    )
}
  
const mapDispatchToProps = dispatch => bindActionCreators(MessageActions, dispatch);
  
export default connect(null, mapDispatchToProps)(Form);