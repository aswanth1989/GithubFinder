class GitHub{
    constructor(){
        this.client_id = 'cbadf6ac850a0f258acd';
        this.clientSecret = '39d3b3a79d49a6a166ed934fb87709ee31ceccd2';
        this.repos_Count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.clientSecret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_Count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}