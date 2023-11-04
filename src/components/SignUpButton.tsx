import React from 'react'
import Google from '../assets/Google'
import Apple from '../assets/Apple';


interface Props {
    type: string;
  }
const SignUpButton = (props:Props) => {
  return (
    <div className='pt-2 px-1 mx-2 flex bg-gray-200 rounded-lg'>{props.type=="google"?<Google/>:<Apple/>}SignUpButton {props.type}</div>
  )
}

export default SignUpButton