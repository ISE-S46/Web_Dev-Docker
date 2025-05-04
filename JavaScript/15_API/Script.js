function FetchAndDisplayUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => {
            if (!Response.ok) {
                throw new Error("Respond error: " + Response.statusText);
            }
            return Response.json();
        })
        .then(data => {
            console.log(data);
            const userContainer = document.getElementById("users-container");
            userContainer.innerHTML = ""; // clear any existing content

            data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email :</strong> ${user.email}</p>
                    <p><strong>Phone :</strong> ${user.phone}</p>
                    <p><strong>Website :</strong> ${user.website}</p>
                    <p><strong>Address :</strong> ${user.address.city}, <strong>Zipcode :</strong> ${user.address.zipcode}</p>
                `;

                userContainer.appendChild(userDiv);
            })
        })
        .catch(error => {
            console.error("Fetch error: ", error);
        })
}

FetchAndDisplayUsers()