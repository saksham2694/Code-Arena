
const registration = (username, password, email, callback) => {

    

    const fetchData = async () => {
        try {
            const body = {username:username, password:password, email:email, solved:'0'};
            const response = await fetch('http://localhost:3001/', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
            });
            const data = await response.json();

            if (data) {
                console.log(data)
                callback(0)
            } else {
                callback(1)
            }
        } catch (error) {
            console.log('errorrrrrr')
          callback(1)
        }
      };
  
      fetchData();
}


export default registration