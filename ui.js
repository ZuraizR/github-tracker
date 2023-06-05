class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  //  Display Profile in UI //
  showProfile(user) {
    this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-3">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary mb-3">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary mb-3">Followers: ${user.followers}</span>
                        <span class="badge badge-primary mb-3">Following: ${user.following}</span>
                        <br /><br />
                        <ul class="list-group">
                            <li class="list-group-item">Name: ${user.name}</li>
                            <li class="list-group-item">Comapny: ${user.company}</li>
                            <li class="list-group-item">Website/Blog:<a href="${user.blog}" target="_blank"> ${user.blog}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
  }

  //  Show User Repos //
  showRepos(repos) {
    let output = ''

    repos.forEach((repo) => {
      output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
                `
    })

    // Output Repos
    document.getElementById('repos').innerHTML = output
  }

  //  Show Alert //
  showAlert(message, className) {
    // Only Show One Alert
    this.clearAlert()
    // Create div
    const div = document.createElement('div')
    // Add Class to div
    div.className = className
    // Add Text in div
    div.innerText = message
    // Get Parent to append div
    const container = document.querySelector('.searchContainer')
    // Get Search Box
    const search = document.querySelector('.search')
    // Insert Alert
    container.insertBefore(div, search)

    // Set Timeout for Alert //
    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }

  //  Clear Alert //
  clearAlert() {
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // Clear Profile //
  clearProfile() {
    this.profile.innerHTML = ''
  }
}
