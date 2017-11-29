var initialState = [
	{
		id: 1,
		name: 'iPhone X',
		image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
		description: 'Sản phẩm do apple sản xuất',
		price: 500,
		inventory: 10,
		rating: 2
	},
	{
		id: 2,
		name: 'iPhone 7',
		image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
		description: 'Sản phẩm do apple sản xuất',
		price: 300,
		inventory: 5,
		rating: 3
	},
	{
		id: 3,
		name: 'iPhone 6',
		image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
		description: 'Sản phẩm do apple sản xuất',
		price: 200,
		inventory: 10,
		rating: 5
	}
];

const product = (state = initialState, action) => {
	switch (action.type) {

		default:
			return [...state];
	}
}

export default product;