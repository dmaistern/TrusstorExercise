export const fetchShows = async (searchString) => {
  if(!searchString) return;
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const response = await fetch(`http://localhost:5000/tvShows/${searchString}`, requestOptions);
    const result = await response.json();
    return result.tvShows;
  } catch (error) {
    console.log('error', error)
  }
}