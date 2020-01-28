import React, {Fragment} from 'react';
import './style.scss'

function ResumeCard({message, _handleShowMessage}) {
    const {title, hour, id} = message
    return (
        <Fragment>
            { message
            ?
                <div className='resume-card' onClick={() => _handleShowMessage(id)}>
                    <span className='resume-title'>{title}</span>
                    <span className='resume-hour'>{hour}</span>
                </div>
            :
                <div className='resume-card'>
                    <span className='resume-title'>Não há mensagens</span>
                </div>
            }
        </Fragment>
    )
}

function DetailedCard({details}) {
    return (
        <Fragment>
            { details[0]
            ? 
                <div className='detailed-card'>
                    <span className='detailed-title'> {details[0].title} </span>
                    <span className='detailed-subject'> {details[0].subject} </span>
                    <span className='detailed-hour'> {details[0].hour} </span>
                    <span className='detailed-message'> {details[0].message}</span>
                </div>
            :
                <div className='detailed-card'>
                    <span className='detailed-empty'>Selecione uma mensagem a esquerda para visualizar.</span>
                </div>
            }
        </Fragment>
    )
}

export { ResumeCard, DetailedCard}