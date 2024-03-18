function searchRepos() {
    const username = document.getElementById("username-input").value;
    if (username.trim() !== "") {
        getRepos(username);
    }
}

function getRepos(username) {
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((repoData) => {
            const repoListContainer = document.getElementById("repo-list");
            repoListContainer.innerHTML = ''; // Clear existing repo gallery

            repoData.forEach(repo => {
                // Create elements for repository details
                const repoContainer = document.createElement('div');
                repoContainer.classList.add('repo-container');

                const repoName = document.createElement('div');
                repoName.classList.add('repo-name');

                // Create and append the GitHub icon element
                const gitHubIcon = document.createElement('i');
                gitHubIcon.classList.add('fa-brands', 'fa-github');
                repoName.appendChild(gitHubIcon);

                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = repo.name;
                repoLink.target = "_blank"; // Open link in a new tab

                // Append the hyperlink element to the repo name container
                repoName.appendChild(repoLink);

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
                            Language: ${repo.language}, Stars: ${repo.stargazers_count}, Forks: ${repo.forks_count}, Watchers: ${repo.watchers_count} <br>
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