const baseUrl = 'https://api.github.com/users'


export async function getGithubUsers(data){

  const githubUser = await fetch (`${baseUrl}/${data}`,{
    method: "GET"
  })
  .then(response => {
    if(response.ok){
return response.json()
    }else{
      return false
    }
  })
  return githubUser
}

export async function getUserRepositories(data){

  const userRepositories = await fetch (`${baseUrl}/${data}/repos`, {
    method: "GET"
  })
  .then(response => {
    if(response.ok){
      return response.json()
    }else{
      return false
    }
  })
  return userRepositories
}
 