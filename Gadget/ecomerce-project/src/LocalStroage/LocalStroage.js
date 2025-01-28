import { toast } from 'react-toastify';

const fetchStoredCartItems = () => {
    const cartItemsStr = localStorage.getItem('cart-items');
    return cartItemsStr ? JSON.parse(cartItemsStr) : []; 
};

const addItemToCart = (productId) => {
    const cartItems = fetchStoredCartItems();
    const productStr = String(productId); 
    if (cartItems.includes(productStr)) {
        toast.warn('Item already in cart!', { position: "top-center" });
    } else {
        cartItems.push(productStr); 
        localStorage.setItem('cart-items', JSON.stringify(cartItems)); 
        toast.success('Item added to cart!', { position: "top-center" });
    }
};

const fetchStoredWishlistItems = () => {
    const wishlistItemsStr = localStorage.getItem('wishlist-items'); 
    return wishlistItemsStr ? JSON.parse(wishlistItemsStr) : []; 
};

const addItemToWishlist = (productId) => {
    const wishlistItems = fetchStoredWishlistItems();
    const productStr = String(productId); 
    if (wishlistItems.includes(productStr)) {
        toast.warn('Item already in wishlist!', { position: "top-center" });
    } else {
        wishlistItems.push(productStr); 
        localStorage.setItem('wishlist-items', JSON.stringify(wishlistItems)); 
        toast.success('Item added to wishlist!', { position: "top-center" });
    }
};

const removeItemFromCart = (productId) => {
    const cartItems = fetchStoredCartItems();
    const updatedCart = cartItems.filter(item => item !== String(productId));
    localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    toast.success('Item removed from cart!', { position: "top-center" });
};

const removeItemFromWishlist = (productId) => {
    const wishlistItems = fetchStoredWishlistItems();
    const updatedWishlist = wishlistItems.filter(item => item !== String(productId));
    localStorage.setItem('wishlist-items', JSON.stringify(updatedWishlist));
    toast.success('Item removed from wishlist!', { position: "top-center" });
};

export { 
    addItemToCart, 
    fetchStoredCartItems, 
    fetchStoredWishlistItems, 
    addItemToWishlist, 
    removeItemFromCart, 
    removeItemFromWishlist 
};
