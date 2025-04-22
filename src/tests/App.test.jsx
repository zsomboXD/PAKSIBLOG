import { render,screen } from '@testing-library/react';
import {describe,expect,it} from 'vitest';
import { UserContext } from '../context/UserContext';
import App from '../App';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';

describe('App component',()=>{
    it('renders without crasing',()=>{
        const mockuser = {name:"Gyula",email:"gyula@gmail.com"}
        render(
            <UserContext.Provider value={mockuser}>
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            </UserContext.Provider>
            )
        })

        it('renders NotFound Page for unknow route',()=>{
            const testRouter=createMemoryRouter([
                {path:"*",element:<NotFound />}
            ],
        {initialEntries:["/randomPage"]}
    )
    render(
        <RouterProvider router={testRouter}/>
    )
    expect(screen.getByText(/not found/i)).toBeInTheDocument()
        })
})