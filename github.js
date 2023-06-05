class Github {
  constructor() {
    this.client_id = '9d49906c64b860655058'
    this.client_secret = 'b53a21b175510df22bc4196f1ef8811549f1b6be'
    // this.client_secret = '605209c5579d16198b9be3904acd08f3c2490a45'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()

    const repos = await reposResponse.json()

    return {
      profile, // <-- This means profile: profile //
      repos, // <-- This means repos: repos //
    }
  }
}
