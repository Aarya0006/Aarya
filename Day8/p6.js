async function fetchdata() {
    try{
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();

        //Extraxct and log login, node_id, and url from each user object
        data.forEach(user => {
            console.log(`Login: ${user.login}, Node ID: ${user.node_id}, URL: ${user.url}`

            );
    });    
} catch(error){
    console.log("Error Fetching data:",error);
}
}

fetchdata();