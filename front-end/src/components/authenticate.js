
const authenticate = (username, password, callback) => {
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/${username}`);
          const data = await response.json();
          if (data && data.password === password) {
            console.log(data)
            console.log(data.password)
            callback(0)
        } else {
            callback(1)
        }
        } catch (error) {
            console.log('errorrrrrr')
          callback(2)
        }
      };
  
      fetchData();
}


export default authenticate