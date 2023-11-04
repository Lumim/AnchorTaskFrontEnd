import React from 'react'
import Google from '../assets/Google'
import Apple from '../assets/Apple';


interface Props {
    type: string;
  }
const SignUpButton = (props:Props) => {
  return (
    <div className='w-[14.5%] p-2 my-2 mx-2 flex bg-[#F0F5FA] rounded-lg btn-info cursor-pointer text-gray-400 text-base font-medium '>{props.type=="google"?<Google/>:<Apple/>}Sign up with {props.type=="google"?<div className="text-gray-400 text-base font-medium font-['Inter']">Google</div>:<>Apple Id</>}</div>
  )
}

export default SignUpButton