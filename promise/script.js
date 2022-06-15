//*GET*//

// fetch("http://localhost:3000/projects")
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));



//*POST*//

// fetch("http://localhost:3000/projects", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         "id": 11,
//         "projectID":26,
//         "description": "POST method"
//     })

// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));


//*Put*//

// fetch("http://localhost:3000/projects/10", {
//     method: "PUT",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         "id":10,
//         "projectID":120,
//         "description": "POST method2"
//     })

// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));


//*DELETE*//

fetch("http://localhost:3000/projects/10", {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},

})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));


///////GET//////////////
// fetch("http://localhost:3000/users").then((res) => res.json())
// .then((data) => updateDom(data)).catch((err) => console.log(err));

// const updateDom = (data) => {
//     const display = document.querySelector('.display');
//     data.forEach(user => {
//         const {name, title} = user;
//         display.innerHTML += `
//         <p>${name}</p>
//         <p>${title}</p>
//         `
//     });

// }