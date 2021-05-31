const API_BASE='https://api.tvmaze.com'

export async function apiget(Qstring){
     const response=await fetch(`${API_BASE}${Qstring}`)
     const result=await response.json()
     return result;
     
}
  