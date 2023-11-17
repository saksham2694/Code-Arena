

const Logout = () => {
    window.sessionStorage.clear()
    window.location = './login'
}

export default Logout