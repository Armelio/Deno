const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  headers: {
    "Origin": "*"
  }
});
const body = await res.text();
console.log(body);

