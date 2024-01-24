import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/cart.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Cart" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export default function Cart() {
  const [total, setTotal] = useState(0);
  const { cart, updateQuantity, deleteGuitar } = useOutletContext();

  useEffect(() => {
    const calTotal = cart.reduce(
      (total, product) => total + product.cant * product.price,
      0
    );
    setTotal(calTotal);
  }, [cart]);

  return (
    <ClientOnly fallback={"Loading..."}>
      {() => (
      <main className="container">
        <h1 className="heading"> Shopping Bag</h1>

        <div className="content">
          <div className="cart">
            <h2>Articles</h2>

            {cart?.length === 0
              ? "Empty Cart"
              : cart?.map((product) => (
                  <div key={product.id} className="product">
                    <div>
                      <img
                        src={product.image}
                        alt={`Image of the product ${product.name}`}
                      />
                    </div>

                    <div>
                      <p className="name">{product.name}</p>
                      <p>Quantity: </p>

                      <select
                        value={product.cant}
                        className="select"
                        onChange={(e) =>
                          updateQuantity({
                            cant: +e.target.value,
                            id: product.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className="price">
                        $ <span>{product.price}</span>
                      </p>
                      <p className="subtotal">
                        Subtotal: $ <span>{product.cant * product.price}</span>
                      </p>
                    </div>

                    <button
                      className="delete"
                      type="button"
                      onClick={() => deleteGuitar(product.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className="resume">
            <h3>Order Summary</h3>
            <p>Sub Total: ${total}</p>
          </aside>
        </div>
        </main>
        )}
        </ClientOnly>
  );
}
