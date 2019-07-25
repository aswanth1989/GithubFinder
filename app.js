

//Search user
const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    const inputText = e.target.value;

    if(inputText !== ''){
        github.getUsers(inputText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User Not Found','alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        }) 
    }else{
        ui.clearProfile();
    }
});