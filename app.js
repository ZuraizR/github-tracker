// Init Github //
const github = new Github()
// Init UI //
const ui = new UI()

// Search Input //
const searchUser = document.getElementById('searchUser')

// Adding keyup event on input //
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value

  if (userText !== '') {
    // Make Http Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not Found', 'alert alert-danger')
      } else {
        // Show Profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    })
  } else {
    // Clear Profile
    ui.clearProfile()
  }
})
