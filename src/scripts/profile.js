
function renderUser(){
  const userLocalStorage = JSON.parse(localStorage.getItem('user'))
  const userContainer = document.querySelector('.user__container')

  userContainer.innerHTML = ""
  
   const user = createUser(userLocalStorage)
  userContainer.append(user)
}

 function createUser(user){

const divUser = document.createElement('div')
divUser.classList= 'divUser'

const avatar = document.createElement('img')
avatar.src = user.avatar_url 
avatar.classList = 'avatarImage'

const userName = document.createElement('h1')
userName.innerText = user.name 
userName.classList = 'userName'

divUser.append(avatar, userName)

return divUser
}

function renderUserRepositories(){
  const repositoryContainer = document.querySelector('.repository__container')
  const repositoriesLocalStorage = JSON.parse(localStorage.getItem('repository'))

  repositoryContainer.innerHTML = ''

  repositoriesLocalStorage.forEach((repository) => {
    const userRepositories = createRepository(repository)
    repositoryContainer.append(userRepositories)
  });
}

function createRepository(repository){

const liRepository = document.createElement('li')
liRepository.classList = 'liRepository'

const repositoryName = document.createElement('h2')
repositoryName.innerText = repository.name
repositoryName.classList= 'repositoryName'

const repositoryDescription = document.createElement('p')
repositoryDescription.innerText = repository.description
repositoryDescription.classList= 'repositoryDescription'

const repositoryLink = document.createElement('a')
repositoryLink.href = repository.html_url 
repositoryLink.target = '_blank'
repositoryLink.innerText ='Repositório'
repositoryLink.classList = 'repositoryLink'

liRepository.append(repositoryName, repositoryDescription, repositoryLink)

return liRepository
}

function handleToback(){
  const userContainer = document.querySelector('.user__container')
  const divButton = document.createElement('div')

  const backButton = document.createElement('button') 
  backButton.innerText = 'Trocar de usuário'
  backButton.classList = 'backButton'
  divButton.append(backButton)
  userContainer.append(divButton)
 
  backButton.addEventListener("click",() =>{
     localStorage.clear()
    location.replace('/')
  })
}

renderUser()
renderUserRepositories()
handleToback()

