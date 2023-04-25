async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", 
  {
    headers:{
      "Origin": "http://127.0.0.1:5501"
    }
  });
  const data = await response.json();
  console.log(data);
}

getData();
