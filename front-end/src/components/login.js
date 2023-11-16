import Header from './header'
import React, { useState } from 'react'
import authenticate from './authenticate'



const Login = () => {
    const [userNameText, setUserNameText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const checkPassword = () => {
        authenticate(userNameText, passwordText, (status) => {
            if (status === 0) {
                setErrorMessage('Correct password!')
            }
            else if (status === 1) {
                setErrorMessage('Incorrect UserName or Password. Try Again!')
            }
            else {
                setErrorMessage('Sorry, Cannot connect to database right now.')
            }
        })
        
    }
    return (
        <div style={{
            background: "rgb(13,17,22)",
            display:"block"
        }}>
            <Header></Header>
            <div style={{
                height:'95vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
                <div class="loginbox" style={{
                    background: "rgb(22,27,35)",
                    height: "80vh",
                    width:"30vw",
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    margin:'auto',
                    border:'1px solid rgb(48,54,62)',
                    borderRadius:'10px',
                }}>
                    <div style={{
                        color:'white',
                        margin:'30px',
                        fontSize:'250%',
                        fontFamily:'montstrrat',
                        height:'33%'
                    }}>
                        Login
                    </div>
                    <div style={{height:'66%'}}>
                        <input onChange={(e) => setUserNameText(e.target.value)} type="text" name="userName" id="userName" placeholder="Username" style={{
                            height: '35px',
                            border: '1px solid rgb(48,54,62)',
                            borderRadius: '5px',
                            background: 'rgb(13,17,22)',
                            color:'white',
                            fontSize: '120%',
                            paddingLeft: '10px',
                            marginBottom: '20px',
                            width:'80%',
                            marginLeft:'8%'
                        }}></input>
                        <input onChange={(e) => setPasswordText(e.target.value)} type="password" name="password" id="password" placeholder="Password" style={{
                            height: '35px',
                            border: '1px solid rgb(48,54,62)',
                            borderRadius: '5px',
                            background: 'rgb(13,17,22)',
                            color:'white',
                            fontSize: '120%',
                            paddingLeft:'10px',
                            width:'80%',
                            marginLeft:'8%',
                            marginBottom:'40px'
                        }}></input>
                        <button type='submit' onClick={() => checkPassword()} style={{
                            width: '30%',
                            height: '35px',
                            border: '1px solid rgb(35,95, 179)',
                            borderRadius: '5px',
                            background: 'rgb(35,95, 179)',
                            color:'rgb(215,215,212)',
                            fontSize: '120%',
                            marginLeft:'34%',
                            marginBottom:'30px'
                        }}>Submit</button>
                        <div style={{
                            color:'rgb(232,21,21)',
                            fontSize: '100%',
                            marginLeft:'13%',
                            marginBottom:'30px'
                        }}>
                            {errorMessage}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login