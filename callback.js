console.log("Before");
getUser(1, (user) => {
    console.log(`username: ${user.githubUsername}`);
    getRepositories(user.githubUsername, (repos) => {
        console.log(`repos: ${repos}`);
    });
});
console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database");
        const user = {id: id, githubUsername: "nate"};
        callback(user);
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Reading from github");
        const repos = ["repo1", "repo2", "repo3"];
        callback(repos);
    }, 2000);
}
