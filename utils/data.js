import bcrypt from 'bcryptjs';
const data = {
    users: [{
            name: 'Golden Stores',
            email: 'admin@msa-serv.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'user',
            email: 'user@msa-serv.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
        {
            name: 'tester',
            email: 'tester@msa-serv.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [{
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'Fit Shirt',
            slug: 'free-shirt1',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'Free Shirt1',
            slug: 'free-shirt2',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'Free Shirt2',
            slug: 'free-shirt3',
            category: 'Shirts',
            image: '/images/pants1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'airpods',
            slug: 'airpods',
            category: 'Shirts',
            image: '/images/airpods.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'camera',
            slug: 'camera',
            category: 'Shirts',
            image: '/images/camera.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'laptop',
            slug: 'laptop',
            category: 'Shirts',
            image: '/images/portfolio-static-08.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        },
        {
            name: 'Free Shirt3',
            slug: 'free-shirt4',
            category: 'Shirts',
            image: '/images/pants2.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A good product'
        }
    ],
}

export default data