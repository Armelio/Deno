async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", 
  {
    headers:{
      "Access-Control-Allow-Origin": "*"
    }
  });
  const data = await response.json();
  console.log(data);
}

getData();
