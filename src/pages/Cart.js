import React from "react";
import "../cart.css";

function Header({ itemCount }) {
  return (
    <header className="cart-container">
      <h1 className=" font-semibold text-2xl mb-2">Shopping Cart</h1>

      <ul className="breadcrumb cart-ul">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>

      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
  return (
    <section className="cart-container">
      <ul className="products cart-ul">
        {products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a href="#" className="anchor">
                    <img
                      className="cart-image"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#" className="anchor">
                      {product.name}
                    </a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity cart-input"
                    step="1"
                    value={product.quantity}
                    onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode,
}) {
  const total = subTotal - discount + tax;

  return (
    <section className="cart-container pb-10">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={onEnterPromoCode} className="cart-input" />
        <button
          type="button"
          className=" bg-green-500 cart-btn"
          onClick={checkPromoCode}
        />
      </div>

      <div className="summary">
        <ul className="cart-ul">
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button" className=" bg-green-500 cart-btn">
          Check Out
        </button>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    image:
      "https://images.unsplash.com/photo-1541407739387-485eb7a0351e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Basak Lighting and Circuits",
    description: "Light your Imagination",
    price: 5001,
    quantity: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Sarkar Caterers",
    description: "Swaad jo hamesha yaad rahe!",
    price: 7450,
    quantity: 1,
  },
];
const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%",
  },
  {
    code: "AUTUMN",
    discount: "40%",
  },
  {
    code: "WINTER",
    discount: "30%",
  },
];
const TAX = 5;

function Cart() {
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
  const [products, setProducts] = React.useState(CLONE_PRODUCTS);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);
  const discount = (subTotal * discountPercent) / 100;

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }

    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index != i;
    });

    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  return (
    <div>
      <Header itemCount={itemCount} />

      {products.length > 0 ? (
        <div>
          <ProductList
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button className="cart-btn" onClick={() => setProducts(PRODUCTS)}>
            Shopping now
          </button>
        </div>
      )}
    </div>
  );
}

function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });
}

export default Cart;
