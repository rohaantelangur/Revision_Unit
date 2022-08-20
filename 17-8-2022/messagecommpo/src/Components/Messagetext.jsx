import React from 'react'
import { TimeConver } from './TimeStand';

export const Messagetext = ({message, position}) => {
    // console.log(message, position);
    const current = new Date();
  return (
    <div className={"Messagetext "+ position } >
        <p className='firstLine'>{message.author} {message.points} points {TimeConver(message.timestamp)} </p>
        <p className='secondLine'>{message.body}</p>
        <p className='lastLine'>Repay Give Award Share Report Save</p>
        </div>
  )
}
