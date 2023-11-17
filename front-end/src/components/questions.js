import DropDown from './dropdown'
import Header from './header'
import questionsArray from './a'
import LanguageDropDown from './languagedropdown'
import React, {useState} from 'react'
import CodeBox from './codebox.js'

const Questions = () => {
    if (!window.sessionStorage.getItem('username')) {
        window.location = './login'
    }
    const [currQues, setCurrQues] = useState(0)
    const [currLang, setCurrLang] = useState('Java')
    return (
        <div style={{background:'rgb(33,38,45)'}}>
            <Header></Header>
            <div style={{ display:'flex', flexDirection:'row', height:'93vh', background: "rgb(13,17,22)",}}> 
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    width:'35%',
                    height:'100%',
                    border: '1px solid rgb(48,54,62)'
                }}>
                    <div style={{height:'15%'}}>
                        <DropDown currQues={currQues} setFunc={setCurrQues}/>
                    </div>
                    <div style={{height:'50%'}}>
                        <div style={{color:'white', padding:'2px', paddingLeft:'4%'}}>{questionsArray[currQues].ques}</div>
                    </div>
                    <div style={{color:'white',  padding:'2px', paddingLeft:'4%'}}>
                        Example:
                        <div>The output value is {questionsArray[currQues].expected_outcome} when we input {questionsArray[currQues].input}.</div>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    width:'65%',
                    height:'100%',
                    border: '1px solid rgb(48,54,62)'
                }}>
                    <div style={{height:'10%'}}>
                        
                    </div>
                    <div>
                        <textarea rows={40} cols={110} color='rgb(33,38,45)' style={{
                            marginLeft:'10%',
                            background:'rgb(33,38,45)',
                            color:'white'}}></textarea>
                    </div>
                    <div style={{
                        width:'20%',
                        marginLeft:'85%'
                    }}><button style={{
                        marginTop:'15%',
                        height:'50%',
                        width:'40%',
                        background:'rgb(33,38,45)',
                        color:'white',
                        border:'none',
                        fontSize:'120%'

                    }}>Submit</button></div>
                </div>
            </div>
        </div>
        
    )
}

export default Questions