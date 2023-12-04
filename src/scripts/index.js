import { getGithubUsers, getUserRepositories } from "./requests.js"


function handleToRender(){
  const searchButton = document.querySelector('.searchUsers')
  const input = document.querySelector('.inputUser')

  searchButton.addEventListener("click",async() =>{
    let user = await getGithubUsers(input.value)
    let userRepository = await getUserRepositories(input.value)
    if(user){
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('repository', JSON.stringify(userRepository))
      location.replace('./src/pages/profile.html')
    }else{
      location.replace('./src/pages/error.html')
    }

  })
}
handleToRender()