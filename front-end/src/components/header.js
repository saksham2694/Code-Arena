const Header = () => {
    if (!window.sessionStorage.getItem('username')) {
        return (
            <div style={{
                background:'rgb(2,4,8)',
                height: '7vh',
                borderBottom: '1px solid rgb(48,54,62)',
            }}>
                <div style={{
                    width:'30%',
                    color:'white',
                    fontSize:'170%',
                    fontFamily:'Serif',
                    padding:'14px',
                    paddingLeft:'7%'
                }}>
                    CodeArena
                </div>
                <div style={{
                    width:'70%'
                }}>
    
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{
                background:'rgb(2,4,8)',
                height: '7vh',
                borderBottom: '1px solid rgb(48,54,62)',
                display:'flex',
                justifyContent:'space-between',
                padding:'0.6rem',
                flexDirection:'row'
            }}>
                <div style={{
                    width:'30%',
                    color:'white',
                    fontSize:'170%',
                    fontFamily:'Serif',
                    padding:'14px',
                    paddingLeft:'7%'
                }}>
                    CodeArena
                </div>
                <nav>
                    <ul style={{display:'flex'}}>
                        <a href="./home" style={{color:'white', textDecoration:'none', marginInline:'1rem', fontFamily:'serif', fontSize:'140%'}}>Home</a>
                        <a href="./questions" style={{color:'white', textDecoration:'none', marginInline:'1rem',fontFamily:'serif', fontSize:'140%'}}>Solve</a>
                        <a href="./logout" style={{color:'white', textDecoration:'none', marginInline:'1rem',fontFamily:'serif', fontSize:'140%'}}>Logout</a>

                    </ul>
                </nav>
            </div>
        )
    }
    
}

export default Header