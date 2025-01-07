document.getElementById('fetch-users').addEventListener('click',fetchUser);

function fetchUser(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';


    fetch (apiUrl)
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(data=>{
            displayUsers(data);
        })
        .catch(error=>{
            console.error('There was a problem with the operation:',error);
            document.getElementById('user-list').innerHTML='Error fetching users';
        });
    }

        function displayUsers(user){
            const userList = document.getElementById('user-list');
            userList.innerHTML='';

            user.forEach(user =>{
                const userDiv = document.createElement('div');
                userDiv.className='user';
                userDiv.innerHTML = `<strong>${user.name}</strong><br>Email:${user.email}`;
                userList.appendChild(userDiv);
            });
        }
