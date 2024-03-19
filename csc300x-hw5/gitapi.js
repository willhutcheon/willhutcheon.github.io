// Add an event listener to the window's "load" event
window.addEventListener('load', function () {
    // Call the searchRepos function to fetch repositories for 'willhutcheon'
    searchRepos();
});

function searchRepos() {
    const username = document.getElementById("username-input").value;
    if (username.trim() !== "") {
        getRepos(username);
    } else {
        // If no username is provided, default to 'willhutcheon'
        getRepos('willhutcheon');
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
                // MAKE THIS ICON BIGGER
                gitHubIcon.classList.add('fa-brands', 'fa-github', 'fa-lg');
                repoName.appendChild(gitHubIcon);

                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = repo.name;
                repoLink.target = "_blank"; // Open link in a new tab

                // Append the hyperlink element to the repo name container
                repoName.appendChild(repoLink);

                // Append repo name to repo container
                repoContainer.appendChild(repoName);

                // Create and append the star icon
                const starIcon = document.createElement('i');
                starIcon.classList.add('fa-solid', 'fa-star', 'icon-margin', 'icon-color');
                repoContainer.appendChild(starIcon);

                // Display the number of stars after the star icon
                const starCount = document.createElement('span');
                starCount.textContent = repo.stargazers_count;
                starCount.classList.add('icon-color');
                repoContainer.appendChild(starCount);

                // Create and append the fork icon
                const forkIcon = document.createElement('i');
                forkIcon.classList.add('fa-solid', 'fa-code-branch', 'icon-color');
                repoContainer.appendChild(forkIcon);

                // Display the number of forks after the fork icon
                const forksCount = document.createElement('span');
                forksCount.textContent = repo.forks_count;
                forksCount.classList.add('icon-color');
                repoContainer.appendChild(forksCount);

                const eyeIcon = document.createElement('i');
                eyeIcon.classList.add('fa-solid', 'fa-eye', 'icon-color');
                repoContainer.appendChild(eyeIcon);

                // Display the number of watchers after the eye icon
                const watchersCount = document.createElement('span');
                watchersCount.textContent = repo.watchers_count;
                watchersCount.classList.add('icon-color');
                repoContainer.appendChild(watchersCount);

                const repoDescription = document.createElement('div');
                repoDescription.classList.add('repo-description');
                repoDescription.textContent = repo.description;

                // Append description to repo container
                repoContainer.appendChild(repoDescription);

                const repoDetails = document.createElement('div');
                repoDetails.classList.add('repo-details');

                // Fetch additional repository details including commit information and languages
                Promise.all([
                    fetch(repo.url + '/commits').then(response => response.json()),
                    fetch(repo.languages_url).then(response => response.json())
                ])
                    .then(([commits, languages]) => {
                        // Find the latest commit
                        const latestCommit = commits[0]; // Assuming commits are returned in descending order
                        const latestCommitDate = new Date(latestCommit.commit.author.date);

                        // Other repository details
                        const createDate = new Date(repo.created_at);
                        const repoInfoDetails = document.createElement('div');
                        repoInfoDetails.classList.add('repo-info-details');
                        repoInfoDetails.innerHTML = `
                        Created: ${createDate.toLocaleDateString()} <br>
                        Last Updated: ${latestCommitDate.toLocaleDateString()} <br>
                        Number of Commits: ${commits.length} <br>
                        Languages: ${Object.keys(languages).join(', ')} <br>
                        Stars: ${repo.stargazers_count} <br>
                        Forks: ${repo.forks_count} <br>
                        Watchers: ${repo.watchers_count} <br>
                    `;

                        repoDetails.appendChild(repoInfoDetails);
                        repoContainer.appendChild(repoDetails);
                    })
                    .catch(error => console.error("Error fetching data:", error));

                repoListContainer.appendChild(repoContainer);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}