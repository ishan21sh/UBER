import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import {useRouter} from 'next/router'
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../firebase'

function Login() {

    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(auth,user =>{
            if(user){
                router.push("/");
            }
        })
    }, [])
  return (
    <Wrapper>
        <UberLogo src ="https://i.ibb.co/n6LWQM4/Post.png" />
        <Title>Log in to access your account</Title>      
        <LoginImage src = "https://i.ibb.co/CsV9RYZ/login-image.png" />
        <SignInButton onClick ={()=>signInWithPopup(auth,provider)}>Sign in with Google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col p-4 bg-gray-300 h-screen w-screen
`
const SignInButton = tw.button`
bg-black text-white text-center px-4 py-2 text-xl w-full mt-8
`

const UberLogo = tw.img`
h-8 w-auto object-contain self-start mt-4 mb-4
`
const Title = tw.div`
pt-4 text-gray-500 text-5xl
`
const LoginImage = tw.img`
object-contain w-full h-200
`