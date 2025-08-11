const orders = [
  {
    cart: [
      {
        product: {
          id: 3,
          name: "Grilled Pork Banh Mi",
          price: 30000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-3.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["food", "bread"],
          variantId: ["size"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
          ],
        },
        options: { size: "l" },
        quantity: 2,
      },
      {
        product: {
          id: 8,
          name: "Green Tea Latte",
          price: 25000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-8.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["matcha"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "m", topping: ["t1", "t2", "t4"] },
        quantity: 2,
      },
    ],
    note: "something",
    restaurantId: "restaurant1",
    status: "Chuẩn bị",
    username: "tester",
    id: "abcd",
  },
  {
    cart: [
      {
        product: {
          id: 5,
          name: "Vanilla Latte",
          price: 35000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-5.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["coffee", "matcha"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "m", topping: ["t1", "t3"] },
        quantity: 1,
      },
      {
        product: {
          id: 5,
          name: "Vanilla Latte",
          price: 35000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-5.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["coffee", "matcha"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "l", topping: ["t2"] },
        quantity: 1,
      },
      {
        product: {
          id: 8,
          name: "Green Tea Latte",
          price: 25000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-8.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["matcha"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "m", topping: [] },
        quantity: 3,
      },
      {
        product: {
          id: 1,
          name: "Caramel Latte",
          price: 35000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-1.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["coffee", "drinks"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "l", topping: [] },
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: "Mocha Frappuccino",
          price: 45000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-2.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["coffee"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "m", topping: ["t1", "t2", "t4"] },
        quantity: 1,
      },
      {
        product: {
          id: 1,
          name: "Caramel Latte",
          price: 35000,
          image:
            "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-1.webp",
          description:
            "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
          categoryId: ["coffee", "drinks"],
          variantId: ["size", "topping"],
          variants: [
            {
              id: "size",
              label: "Kích cỡ",
              type: "single",
              default: "m",
              options: [
                {
                  id: "s",
                  label: "Nhỏ",
                  priceChange: { type: "percent", percent: -0.2 },
                },
                { id: "m", label: "Vừa" },
                {
                  id: "l",
                  label: "To",
                  priceChange: { type: "percent", percent: 0.2 },
                },
              ],
            },
            {
              id: "topping",
              label: "Topping",
              type: "multiple",
              default: ["t1", "t4"],
              options: [
                {
                  id: "t1",
                  label: "Trân châu",
                  priceChange: { type: "fixed", amount: 5000 },
                },
                {
                  id: "t2",
                  label: "Bánh flan",
                  priceChange: { type: "fixed", amount: 10000 },
                },
                {
                  id: "t3",
                  label: "Trang trí",
                  priceChange: { type: "percent", percent: 0.15 },
                },
                {
                  id: "t4",
                  label: "Không lấy đá",
                  priceChange: { type: "fixed", amount: -5000 },
                },
              ],
            },
          ],
        },
        options: { size: "s", topping: ["t1", "t2", "t3", "t4"] },
        quantity: 2,
      },
    ],
    note: "something else",
    restaurantId: "restaurant2",
    status: "Chuẩn bị",
    username: "tester2",
    id: "1234"
  },
];

module.exports = {
  orders
};
