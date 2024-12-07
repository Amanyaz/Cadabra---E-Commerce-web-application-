import { CategoriesDTO, ProductsByCategoriesDTO, ProductDTO, ProductsDTO } from "../models";

const product = (id: string, props: Partial<ProductDTO> = {}): ProductDTO => {
  return {
    id,
    title: "Canon EOS M50 Mark",
    description:
      "Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens",
    price: 390,
    image:
      "https://rukminim1.flixcart.com/image/200/200/kit6hzk0-0/toy-sport/k/q/l/inline-skates-abec-7-unisex-indoor-and-outdoor-adjustable-size-original-imafygsgdruhej5m.jpeg?q=70",
    ...props,
  };
};

const products: ProductsDTO = [
  product("1"),
  product("2", {
    image:
      "https://rukminim1.flixcart.com/image/200/200/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70",
  }),
  product("3", {
    image:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/track-suit/t/e/0/xxl-tracksuit01-m7-by-metronaut-original-imagggbhzwhmdkbd.jpeg?q=70",
    description: "6000 mAh Battery",
  }),
  product("4", {
    image:
      "https://rukminim1.flixcart.com/image/200/200/kiqbma80/tablet/w/y/s/lenovo-za6v0149in-original-imafyghbzfkgne5h.jpeg?q=70",
    description:
      "Lenovo Tab M10 (FHD) 3 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet (Slate Black) Tablet (Slate Black) Tablet (Slate Black) Tablet (Slate Black) Tablet (Slate Black)",
  }),
  product("5", {
    image:
      "https://rukminim1.flixcart.com/image/200/200/l2ghgnk0/induction-cook-top/s/t/z/-original-imagdsgnauhuvskd.jpeg?q=70",
    description:
      "Lenovo Tab M10 (FHD) 3 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet (Slate Black)",
  }),
];

// const category: ProductsByCategoriesDTO = {
//   id: "1",
//   title: "Best of Electronics",
//   products,
// };

export const categoriesData: CategoriesDTO = [];
