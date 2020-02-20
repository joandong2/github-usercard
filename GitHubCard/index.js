/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function profile(user) {
    const newUser = document.createElement('div');
    newUser.classList.add('card');
    
    const newUserImg = document.createElement('img');
    newUserImg.setAttribute('src', user.avatar_url);

    const newUserInfo = document.createElement('div');
    newUserInfo.classList.add('card-info');

        const newUserName = document.createElement('h3');
        newUserName.classList.add('name');
        newUserName.textContent = user.name;

        const newUserUname = document.createElement('p');
        newUserUname.classList.add('username');
        newUserName.textContent = user.login;

        const newUserLocation = document.createElement('p');
        newUserLocation.textContent = 'Location: ' + user.location;

        const newUserProfile = document.createElement('p');
            const newUserProfileLink = document.createElement('a');
            newUserProfileLink.setAttribute('target', '_blank');
            newUserProfileLink.setAttribute('href', user.html_url);
            newUserProfileLink.textContent = user.html_url;
            
        newUserProfile.textContent = 'Profile:';
        newUserProfile.appendChild(newUserProfileLink);

        const newUserFollowers = document.createElement('p');
        newUserFollowers.textContent = 'Followers: ' + user.followers;

        const newUserFollowing = document.createElement('p');
        newUserFollowing.textContent = 'Following: ' + user.following;

        const newUserBio = document.createElement('p');
        newUserBio.textContent = 'Bio: ' + user.bio;

        newUserInfo.appendChild(newUserName);
        newUserInfo.appendChild(newUserUname);
        newUserInfo.appendChild(newUserLocation);
        newUserInfo.appendChild(newUserProfile);
        newUserInfo.appendChild(newUserFollowers);
        newUserInfo.appendChild(newUserFollowing);
        newUserInfo.appendChild(newUserBio);
    
    newUser.appendChild(newUserImg);
    newUser.appendChild(newUserInfo);

    return newUser;
}
  
const container = document.querySelector('.cards');

axios.get('https://api.github.com/users/joandong2')
.then((response) => { 
    console.log(response.data);
    container.append(profile(response.data));
})
.catch((err) => { 
    console.log(err);
});

followersArray.forEach((follower) => {
    axios.get(`https://api.github.com/users/${follower}`)
    .then((response) => { 
        //console.log(response.data);
        container.append(profile(response.data));
    })
    .catch((err) => { 
        console.log(err);
    })
});