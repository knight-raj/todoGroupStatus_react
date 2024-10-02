export const fetchTodoStatus = async (groups) => {
    const results = {};
  
    for (const group of groups) {
      const todos = [];
      for (let i = group.from; i <= group.to; i++) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
        const data = await response.json();
        todos.push(data);
      }
      results[`Group ${group.from}-${group.to}`] = todos;
    }
  
    return results;
  };
  