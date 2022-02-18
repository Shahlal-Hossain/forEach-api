// https://jsonplaceholder.typicode.com/users == 10
// https://jsonplaceholder.typicode.com/posts == 100
// https://jsonplaceholder.typicode.com/albums == 100
// https://jsonplaceholder.typicode.com/comments == 500
// https://jsonplaceholder.typicode.com/photos == 5000
// https://jsonplaceholder.typicode.com/todos == 200


fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(datas => showPhotos(datas))

const showPhotos = (photo) => {
    
    const container = document.getElementById('album')
    photo.map( photos =>{
        const images = document.createElement('img')
        images.setAttribute('src',photos.url)
        container.appendChild(images)
    })
}




fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => showdEliment(data))

const showdEliment = (usersData) => {
    const container =document.getElementById('usersContainer');
    usersData.forEach(element => {
        const usersName = document.createElement('h4');
        usersName.innerText = element.name;
        const usersEmail = document.createElement('h5');
        usersEmail.innerText = element.email;
        const usersID = document.createElement('p')
        usersID.innerText = element.id;
        container.appendChild(usersName)
        container.appendChild(usersEmail)
        container.appendChild(usersID)
    });
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(pes => pes.json())
.then(data => showPosts(data))

const showPosts = (post) => {
    const containers = document.getElementById('postsContainers')
    post.map(item => {
        const titles = document.createElement('p')
        titles.innerText = item.title
        containers.appendChild(titles)
    })
}