
import { useQuery } from 'react-query';

const fetchDataFromGraphQL = async() => {
const query = `
    query {
    posts {
        id
        name
        isEditing
    }
    }
`;
const url = "https://api-us-west-2.graphcms.com/v2/ckb6w8kn5054n01wk0w77cc0k/master";
const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
};
await new Promise(resolve => setTimeout(resolve, 2000));
const response = await fetch(url, opts);
const data = await response.json();
return data?.data?.posts;
}

export default function useTodos() {
    return useQuery("todoList", fetchDataFromGraphQL);
}