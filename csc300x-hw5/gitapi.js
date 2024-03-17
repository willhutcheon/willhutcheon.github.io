// const apiUrl = "https://api.github.com/users/csc340-sp24/repos";\
// const apiUrl = "https://api.github.com/users/willhutcheon/repos";
// Make a GET request using the Fetch API
/* function getRepos() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((repoData) => {
            // Process the retrieved repo data
            console.log("My Repo Data:", repoData);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
getRepos(); */

const apiUrl = "https://api.github.com/users/willhutcheon/repos";
function getRepos() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((repoData) => {
            // Process the retrieved repo data
            const repoNames = repoData.map(repo => repo.name);
            const repoList = document.createElement('ul');
            repoNames.forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                repoList.appendChild(listItem);
            });
            document.body.appendChild(repoList);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
getRepos();
