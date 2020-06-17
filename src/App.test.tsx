import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { setupWorker, graphql } from 'msw'


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

const worker = setupWorker(
  graphql.query(
    'GetUserDetail',
    (req, res, ctx) => {
      const { userId } = req.variables
      
      return res(
        ctx.data({
          user: {
            firstName: 'John',
            lastName: 'Maverick'
          }
        })
      )
    })
)

beforeAll(() => worker.start())

test('renders Todo App', async() => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot();
  // expect(getByText('Welcome to Todo App')).toBeInTheDocument()
  });
