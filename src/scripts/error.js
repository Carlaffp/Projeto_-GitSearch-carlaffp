
export function backToIndex(){
  const buttonBack = document.querySelector('.back')

  buttonBack.addEventListener("click", () =>{
    
    location.replace('/')
  })
}

backToIndex()