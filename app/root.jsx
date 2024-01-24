import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link

} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer';

export function meta({error}) {

    if (error?.status === 404) {
        return [
            {
                title: 'Guitar - 404',
            },
            {
                description: 'Content not found'
            }
        ]
    }
    return [
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
}


export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "stylesheet",
            href: styles
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans&family=Outfit:wght@400;700;900&family=PT+Sans:wght@400;700&display=swap"
        }
    ]
}

export default function App() {

    const cartLS =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("cart")) ?? []
            : [];
    const [cart, setCart] = useState(cartLS)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addCart =  guitar => {
        if(cart.some(guitarState => guitarState.id === guitar.id)) {
            // Iterate on the arrangement, and identify the identified element
            const cartUpdate = cart.map(guitarState => {
                if (guitarState.id === guitar.id) {
                    //Rewrite the quantity
                    guitarState.cant = guitar.cant
                }
                return guitarState
            })
            // Add to cart
            setCart(cartUpdate)
        } else {
            // New registration, add to cart
            setCart([...cart, guitar]);
        }
    }

    const updateQuantity = guitar => {
        const carUpdated = cart.map(guitarState => {
            if (guitarState.id === guitar.id) {
                guitarState.cant = guitar.cant
            }
            return guitarState
        }) 

        setCart(carUpdated)
    }

    const deleteGuitar = id => {
        const carUpdated = cart.filter(guitarState => guitarState.id !== id)
        setCart(carUpdated)
    }
    return (
        <Document>
            <Outlet
                context={{
                    addCart,
                    cart,
                    updateQuantity,
                    deleteGuitar
            }}
            />
        </Document>
    )
}

function Document({ children }) {


    return (
        <html lang="en">
            <head>
                <Meta />
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts />
                <LiveReload/>
            </body>
        </html>
    )
}

/**  Error handling **/
// export function ErrorBoundary() {
//     const error = useRouteError();
   
//     if (isRouteErrorResponse(error)) {
//       return (
//         <Document title={error.statusText}>
//               <p className='error'>{error.data}</p>
//               <Link className='error-url' to="/">You may want to return to the main page</Link>

//         </Document>
//       );
//     }
   
//     return (
//       <Document title="Unknown Error ">
//             <p className='error'>Guitar not found</p>
//       </Document>
//     );
//   }

