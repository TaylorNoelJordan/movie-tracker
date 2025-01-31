export const fetchMovieData = async () => {
  try {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bc73a3f54b2574050b44222a2380ea37&language=en-US&sort_by=now_playing.dsc&include_adult=false&include_video=false&page=1';
    const response = await fetch(url);
    const movieData = await response.json();

    return movieData.results
  } catch(error) {
    throw Error('Error fetching movies')
  }
};

export const fetchUser = async (email, password) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:  email, password:  password })
    }
    const url = 'http://localhost:3000/api/users'
    const getUserData = await fetch(url, options);
    const response = await getUserData.json();
    const userData = await response.data

    return userData
  } catch(error) {
    throw Error('Error fetching user')
  }
};

export const postNewUser = async (name, email, password) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: name, email: email, password: password})
    }
    const url = 'http://localhost:3000/api/users';
    const getUserData = await fetch(url, options);
    const response = await getUserData.json();
    console.log('hello', response)
    const userData = await response.data;
    console.log('hi', userData)
    
    return userData
  } catch(error) {
    throw Error('Error creating user')
  }
}

