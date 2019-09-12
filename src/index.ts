import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function getLog(completed: boolean, id: number, title: string): void {
    console.log(`
        The todo item:\n
        ID: ${id},
        Title: ${title},
        Is it finished?: ${completed}.
    `);
}

axios.get(url).then(response => {
  const { id, title, completed } = response.data as Todo;
  return getLog(completed, id, title );
});
