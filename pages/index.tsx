import type { NextPage } from 'next'
import { SearchLayout } from '../Layout';
import type { ReactElement } from 'react';

const Home = () => {
  return (
      <div>

      </div>
  )
}

Home.getLayout = (page:ReactElement) =>(
  <SearchLayout>
    {page}
  </SearchLayout>
) 

export default Home;
