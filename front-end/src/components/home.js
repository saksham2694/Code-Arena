import Header from './header'
import LoadLeaderBoard from './loadleaderboard'
import './home.css'

const Home = () => {
    if (!window.sessionStorage.getItem('username')){
        window.location.href = './login'
    }

    return (
        <div style={{
            background: "rgb(13,17,22)",
            display:"block"}}>
            <Header></Header>
            <div style={{
                height:'93vh',
                display:'flex',
                flexDirection:'column'
            }}>
                <div style={{
                    height:'60%',
                    width:'95%',
                    display:'flex',
                    flexDirection: 'row'
                }}>
                    <div style={{
                        height:'90%',
                        width:'50%',
                        marginLeft:'6%',
                        marginTop:'4%',
                        borderRadius:'10px'
                    }}>
                        <div className='progress-circle' style={{
                            marginLeft:'35%',
                            marginTop:'10%'
                        }}>
                            <div style={{
                                color:'white',
                                marginLeft:'40%',
                                paddingTop:'43%',
                                fontSize:'200%'
                            }}>
                                2/9
                            </div>
                        </div>
                    </div>
                    <div style={{
                        height:'90%',
                        width:'60%',
                        marginLeft:'6%',
                        marginTop:'4%',
                        border:'1px solid rgb(48,54,62)',
                        borderRadius:'10px'
                    }}>

                    </div>
                </div>
                <div style={{
                    height:'40%',
                    width:'85%',
                    margin:'5%',
                    marginLeft: '7%',
                    border:'1px solid rgb(48,54,62)',
                    borderRadius:'10px',
                    display:'flex',
                    flexDirection:'row'
                }}>
                    
                    <div style={{
                        width:'30%',
                        paddingLeft:'5%'
                    }}>
                        <LoadLeaderBoard length={5}/>
                    </div>
                    <div style={{
                        width:'20%'
                    }}>

                    </div>
                    <div style={{
                        width:'30%'
                    }}>
                        <img src={require('./trophy.png')} style={{
                            width:'100%',
                            height:'100%'
                        }}></img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home