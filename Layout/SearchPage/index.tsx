import { FC } from 'react';
import { Header, Footer } from '@components/index';



export const SearchLayout:FC = ({ children }) => {


    return (
    <div className='app'>
        <Header />
        { children }
        <Footer />
    </div>
    )
}