/*
use fetch method with url https://jsonplaceholder.typicode.com/users
To get data asynchronously from the API and display the Result on HTML
table
- Display the following Coulmns in table  --> iwant to fech each of these from user jeson then pass them to each coulmn in the table 
    - UserName
    - email
    - Company Name
    - Address geo (address GeoLocation)
    - show users posts’ titles as ul list in this column   -->select posts then get post.titles from it 
and show how many comments are made by each post. /posts /comments --> select comments then get commens.length 

*/
async function fetchData(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    const posts= await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());

    const data = document.getElementById('data');           //work on table body
    
    users.forEach(user => {
        const UserName=document.createElement('td')
        const Email=document.createElement('td')
        const Company=document.createElement('td')
        const Address=document.createElement('td') 
        const Post = document.createElement('td')

        const List = document.createElement('ul')
        
        posts.forEach(post=>{
            if (user.id === post.userId){
                const li=document.createElement('li');
                li.textContent= post.title;
                List.appendChild(li)
                
                const commentCount = document.createElement('com');
                commentCount.textContent = ` (${comments.filter(comment => post.id === comment.postId).length} comments)`;
                li.appendChild(commentCount);
            }
            
        });
        Post.appendChild(List);
        

        UserName.textContent=user.username;
        Email.textContent=user.email;
        Company.textContent=user.company.name;
        Address.textContent=user.address.geo.lat;

        const row=document.createElement('tr');
        row.appendChild(UserName);
        row.appendChild(Email);
        row.appendChild(Company);
        row.appendChild(Address);
        row.appendChild(Post);

        data.appendChild(row);
    });
  
}

fetchData();

