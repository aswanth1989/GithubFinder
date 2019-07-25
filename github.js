class GitHub{
    constructor(){
        this.client_id = 'cbadf6ac850a0f258acd';
        this.clientSecret = '39d3b3a79d49a6a166ed934fb87709ee31ceccd2';
    }

    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}