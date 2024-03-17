// NEEDS WATCHERS
/* const apiUrl = "https://api.github.com/users/willhutcheon/repos";

function getRepos() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((repoData) => {
            const repoListContainer = document.getElementById("repo-list");

            repoData.forEach(repo => {
                // Create elements for repository details
                const repoContainer = document.createElement('div');
                repoContainer.classList.add('repo-container');

                const repoName = document.createElement('div');
                repoName.classList.add('repo-name');
                repoName.textContent = repo.name;

                const repoDescription = document.createElement('div');
                repoDescription.classList.add('repo-description');
                repoDescription.textContent = repo.description;

                const repoDetails = document.createElement('div');
                repoDetails.classList.add('repo-details');
                // repoDetails.textContent = `Language: ${repo.language}, Stars: ${repo.stargazers_count}, Forks: ${repo.forks_count}`;

                // Fetch additional repository details
                fetch(repo.url + '/commits')
                    .then(response => response.json())
                    .then(commits => {
                        const numberOfCommits = commits.length;

                        const createDate = new Date(repo.created_at);
                        const updateDate = new Date(repo.updated_at);
                        const repoInfoDetails = document.createElement('div');
                        repoInfoDetails.classList.add('repo-info-details');
                        repoInfoDetails.innerHTML = `
                            Created: ${createDate.toLocaleDateString()} <br>
                            Last Updated: ${updateDate.toLocaleDateString()} <br>
                            Number of Commits: ${numberOfCommits} <br>
                            Language: ${repo.language}, Stars: ${repo.stargazers_count}, Forks: ${repo.forks_count} <br>
                            Description: ${repo.description}
                        `;

                        repoContainer.appendChild(repoInfoDetails);
                    })
                    .catch(error => console.error("Error fetching commits:", error));

                // Append all elements to repo container
                repoContainer.appendChild(repoName);
                repoContainer.appendChild(repoDescription);
                repoContainer.appendChild(repoDetails);

                repoListContainer.appendChild(repoContainer);
            });
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
            const repoListContainer = document.getElementById("repo-list");

            repoData.forEach(repo => {
                // Create elements for repository details
                const repoContainer = document.createElement('div');
                repoContainer.classList.add('repo-container');

                const repoName = document.createElement('div');
                repoName.classList.add('repo-name');
                

                // Create and append the image element
                const gitIcon = document.createElement('img');
                gitIcon.src = 'giticon.png';
                gitIcon.alt = 'Git Icon';
                gitIcon.style.width = '24px';
                gitIcon.style.height = '24px';
                repoName.appendChild(gitIcon);

                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = repo.name;
                repoLink.target = "_blank"; // Open link in a new tab

                // Append the hyperlink element to the repo name container
                repoName.appendChild(repoLink);

                // Set the text content of the repo name
                // const repoNameText = document.createElement('span');
                // repoNameText.textContent = repo.name;
                // repoName.appendChild(repoNameText);

                const repoDescription = document.createElement('div');
                repoDescription.classList.add('repo-description');
                repoDescription.textContent = repo.description;

                const repoDetails = document.createElement('div');
                repoDetails.classList.add('repo-details');

                // Fetch additional repository details
                fetch(repo.url + '/commits')
                    .then(response => response.json())
                    .then(commits => {
                        const numberOfCommits = commits.length;

                        const createDate = new Date(repo.created_at);
                        const updateDate = new Date(repo.updated_at);
                        const repoInfoDetails = document.createElement('div');
                        repoInfoDetails.classList.add('repo-info-details');
                        repoInfoDetails.innerHTML = `
                            Created: ${createDate.toLocaleDateString()} <br>
                            Last Updated: ${updateDate.toLocaleDateString()} <br>
                            Number of Commits: ${numberOfCommits} <br>
                            Language: ${repo.language}, Stars: ${repo.stargazers_count}, Forks: ${repo.forks_count} <br>
                            Description: ${repo.description}
                        `;

                        repoContainer.appendChild(repoInfoDetails);
                    })
                    .catch(error => console.error("Error fetching commits:", error));

                // Append all elements to repo container
                repoContainer.appendChild(repoName);
                repoContainer.appendChild(repoDescription);
                repoContainer.appendChild(repoDetails);

                repoListContainer.appendChild(repoContainer);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

getRepos();
